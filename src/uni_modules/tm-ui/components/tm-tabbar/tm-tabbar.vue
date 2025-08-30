<script lang="ts" setup>
	/**
 * @displayName 底部导航
 * @exportName tm-tabbar
 * @category 导航组件
 * @description 可定义凸起按钮。通过全局状态设置选中项，放于任何页面可自动选中。
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
	| --- | --- | --- | --- |
	| ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
	defineOptions({ name: 'TmTabbar' })
	import {
		computed,
		getCurrentInstance,
		nextTick,
		onBeforeMount,
		onBeforeUnmount,
		onMounted,
		PropType,
		ref,
		watch,
		watchEffect
	} from 'vue'

	import { useTmConfig } from '../../libs/config'
	import { covetUniNumber } from '../../libs/tool'
	import { getDefaultColor } from '../../libs/colors'
	const { config } = useTmConfig()
	const proxy = getCurrentInstance()?.proxy
	const baseBarHeight = ref(60)
	const safeHeight = ref(0)
	const tuqiHeight = ref(0)
	const tuqiWeight = ref(0)
	const _list = ref<TM.TABBAR_ITEM[]>([])
	const domWidth = ref(0)
	const domHeight = ref(0)
	const domOffsetWidth = ref(0)
	const domOffsetHeight = ref(0)
	const nowIndex = ref(0)
	const slots = defineSlots<{
		item : {
			isactive : boolean,
			children : TM.TABBAR_ITEM,
			activeindex : number,
			selfindex : number
		},
		out:{
			size:number,
			active:number
		}
	}>()

	const emits = defineEmits<{
		/**
		 * 切换项目时触发。
		 * @param {number} index - 当前选中的索引
		 */
		(e : 'change', index : number) : void,
		/**
		 * 同步组件高给外部使用，请使用v-model:autoTabbarHeight
		 * 组件高度 = 安全栏高度 + 导航栏高度,外部最好computed使用，因为是异步的
		 * @param {number} height - 当前组件高度
		 */
		(e : 'update:autoTabbarHeight', height : number) : void,
		/**
		 * 同步当前索引
		 * @param {number} activeIndex - 当前组件高度
		 */
		(e : 'update:activeIndex', activeIndex : number) : void,
	}>()

	interface TmTabbarProps {
		/**
		 * 未选中时的颜色
		 */
		color?: string
		/**
		 * 选中时的颜色，空值取全局主题
		 */
		selectedColor?: string
		/**
		 * 背景,如果你为空，会读取全局的亮色tabbar背景
		 */
		bgColor?: string
		/**
		 * 暗黑时的背景，如果为空，取全局的底部导航背景色。
		 */
		darkBgColor?: string
		/**
		 * 显示顶部边线，暗黑时取全局的borderDarkColor
		 */
		showTopBorder?: boolean
		/**
		 * 边线颜色
		 */
		borderColor?: string
		/**
		 * 文字大小
		 */
		fontSize?: string
		/**
		 * 图标大小
		 */
		iconSize?: string
		/**
		 * 导航的整体高度，请使用v-model:autoTabbarHeight="x"
		 * 来获取当前的高度。外部要去变更值。这个只是对外输出，
		 * 给您 外部放在底部占位用，省得你们要一屏时计算高。外部最好computed使用，因为是异步的
		 */
		autoTabbarHeight?: number
		/**
		 * 需要向外凸起的项目索引。
		 * -1表示不凸起
		 */
		outIndex?: number
		/**
		 * 凸起的背景色
		 */
		outBgColor?: string
		/**
		 * 凸起的图标颜色
		 */
		outIconColor?: string
		/**
		 * 是否悬浮在底部,不可动态修改
		 * fixed悬浮，relative静态布局。
		 */
		position?: string
		/**
		 * 渐变背景，如果提供，上面的背景和暗黑背景将失效。
		 * 仅支持:to bottom,to right,to left,to top
		 * 例：['to right','#ff667f','#ff5416']
		 */
		linearGradient?: string[]
		/**
		 * 如果你提供了本地的list数据，那么全局的list将不会被采用，你需要自己管理激活引，
		 * 跨页面时需要你自己设置当前页面的索引，因为变量索引是无法跨页面的。
		 */
		list?: TM.TABBAR_ITEM_INFO[]
		/**
		 * 当前激活的索引,双向绑定用vmodel:activeIndex
		 */
		activeIndex?: number
		/**
		 * 层级
		 */
		zIndex?: number
	}

	const props = withDefaults(defineProps<TmTabbarProps>(), {
		color: '#b9b9b9',
		selectedColor: '',
		bgColor: 'white',
		darkBgColor: '',
		showTopBorder: true,
		borderColor: '#f0f0f0',
		fontSize: '11px',
		iconSize: '28px',
		autoTabbarHeight: 0,
		outIndex: 2,
		outBgColor: 'primary',
		outIconColor: 'white',
		position: 'fixed',
		linearGradient: () => [] as string[],
		list: () => [] as TM.TABBAR_ITEM_INFO[],
		activeIndex: -1,
		zIndex: 20
	})


	const _outBgColor = computed(() : string => {
		return getDefaultColor(props.outBgColor)
	})
	const _outIconColor = computed(() : string => {
		return getDefaultColor(props.outIconColor)
	})

	const _outIndex = computed(() : number => {
		if (props.outIndex == -1) return -1
		return Math.max(0,Math.min(_list.value.length-1,props.outIndex))
	})
	const _nowOutItem = computed(() : TM.TABBAR_ITEM|null => {
		if(_outIndex.value == -1) return null;
		return _list.value[_outIndex.value]
	})
	const _fontSize = computed(() : string => {
		return covetUniNumber(props.fontSize, config.unit)
	})
	const _iconSize = computed(() : string => {
		return covetUniNumber(props.iconSize, config.unit)
	})

	const _selectedColor = computed(() : string => {
		return props.selectedColor == '' ? getDefaultColor(config.color) : getDefaultColor(props.selectedColor)
	})
	const _color = computed(() : string => {
		return getDefaultColor(props.color)
	})

	const _bgColor = computed(() : string => {
		if (config.mode == 'dark') {
			return getDefaultColor(props.darkBgColor)
		}
		return getDefaultColor(props.bgColor)
	})
	const _borderColor = computed(() : string => {
		if (config.mode == 'dark') {
			return '#666'
		}
		return getDefaultColor(props.borderColor)
	})
	const _showTopBorder = computed(() : boolean => {
		return props.showTopBorder
	})

	const _linearGradientByar = computed(() : string[] => {
		if (props.linearGradient.length < 3) return [] as string[]
		let startcolor = getDefaultColor(props.linearGradient[1])
		let endcolor = getDefaultColor(props.linearGradient[2])
		let str = [props.linearGradient[0], startcolor, endcolor] as string[]
		return str
	})

	const _linearGradient = computed(() : string => {
		if (props.linearGradient.length < 3) return ''
		let startcolor = getDefaultColor(props.linearGradient[1])
		let endcolor = getDefaultColor(props.linearGradient[2])
		let str = [props.linearGradient[0], startcolor, endcolor] as string[]
		return `linear-gradient(${str.join(',')})`
	})
	const _styleMap = computed(():Record<string,any> => {
		let maps:Record<string,any> = {}
		if (_linearGradient.value != '') {
			maps['background-image'] = _linearGradient.value
		} else {
			maps['background-color'] = _bgColor.value
		}
		if (_showTopBorder.value) {
			maps['border-top'] = `1px solid ${_borderColor.value}`
		}

		return maps
	})


	const _isDark = computed(() : boolean => {

		return config.mode == 'dark'
	})
	const _tabbarheigh = computed(() : string => {
		let safetop = _outIndex.value > -1 ? 25 : 0
		let total = safeHeight.value + baseBarHeight.value + safetop
		return total.toString() + 'px'
	})
	
	const getQuqi = () => {
		uni.createSelectorQuery().in(proxy)
			.selectAll('.xTabbarItem')
			.boundingClientRect().exec((ret) => {
				let nodeinfo = ret[0] as UniNamespace.NodeInfo[]
				if (nodeinfo.length == 0) return
				let nowx = nodeinfo[Math.max(_outIndex.value, 0)]
				tuqiHeight.value = nowx?.height ?? 0
				tuqiWeight.value = nowx?.width ?? 0
			})
	}

	const getList = () => {
		let list = [] as TM.TABBAR_ITEM[]
		let localList = props.list
		localList.forEach((el : TM.TABBAR_ITEM_INFO) => {
			list.push({
				title: el.title == null ? '' : el.title! as string,
				icon: el.icon == null ? '' : el.icon as string,
				selectedIcon: el.selectedIcon == null ? '' : el.selectedIcon as string,
				color: el.color == null ? _color.value : getDefaultColor(el.color! as string),
				selectedColor: el.selectedColor == null ? _selectedColor.value : getDefaultColor(el.selectedColor! as string),
				openType: el.openType == null ? '' : el.openType! as TM.NAVIGATE_TYPE,
				url: el.url == null ? '' : el.url! as string,
				disabled: el.disabled == null ? false : el.disabled! as boolean,
				dotType: el.dotType == null ? '' : el.dotType! as string,
				dotLabel: el.dotLabel == null ? '' : el.dotLabel! as string
			} as TM.TABBAR_ITEM)
		})
		_list.value = [...list] as TM.TABBAR_ITEM[]
		nextTick(() => {
			getQuqi()
		})
	}
	

	const itemClick = (index : number) => {
		/**
		 * 切换项目时触发。
		 * @param index 当前选中的索引
		 */
		emits('change', index)
		let item = _list.value[index]
		nowIndex.value = index;
		emits('update:activeIndex',index)
		if (item.url != null && item.url != '' && !item.disabled) {
			switch (item.openType) {
				case 'navigateBack':
					uni.navigateBack({})
					break
				case 'navigate':
					uni.navigateTo({
						url: item.url
					})
					break
				case 'reLaunch':
					uni.reLaunch({
						url: item.url
					})
					break
				case 'redirect':
					uni.redirectTo({
						url: item.url
					})
					break
				case 'switchTab':
					uni.switchTab({
						url: item.url
					})
					break
				default: {
					uni.navigateTo({
						url: item.url
					} as UniNamespace.NavigateToOptions)
					break
				}
			}

		}
	}


	watchEffect(()=>{
		nowIndex.value = props.activeIndex;
		
	})
	onMounted(() => {
		let sys = uni.getWindowInfo()
		safeHeight.value = sys.safeAreaInsets.bottom||16
	})
	onMounted(() => {
		getList()

	})

</script>
<template>
	<!-- @vue-ignore -->
	<view :style="[{position: position,zIndex:zIndex}]" class="xTabbar">
		<!-- 凸起占位 -->
		<view v-if="_outIndex!=-1&&_nowOutItem"
			:style="{top:'-18px',height:(100)+'px',zIndex:(zIndex+1).toString(),width:(100/_list.length)+'%',left:(100/_list.length*_outIndex)+'%'}"
			class="xTabbarTuqi">
			<!--
			凸起图标插槽。
			@prop {boolean} active - 当前是否选中
			@prop {number} size - 凸起图标大小,单位px
			 -->
			<slot :active="_outIndex==nowIndex" :size="tuqiHeight" name="out">
				<view :style="{height:tuqiHeight+'px',width:tuqiHeight+'px',backgroundColor:_outBgColor}"
					class="xTabbarTuqiItem" @click="itemClick(outIndex)">
					<tm-icon :color="_outIconColor"
						:name="nowIndex==_outIndex?_nowOutItem.selectedIcon:_nowOutItem.icon"
						:size="iconSize"></tm-icon>
				</view>
			</slot>
		</view>

		<view :style="{width:'100%',height:_tabbarheigh,pointerEvents: 'none'}">
			<view v-if="_outIndex>-1" style="height:25px"></view>
		</view>
		<!-- @vue-ignore -->
		<view :style="[
			{position:'absolute','background-color': 'transparent',zIndex:zIndex},
			_styleMap
		]" class="xTabbarBox">
			<view class="xTabbarWrap">
				<view v-for="(item,index) in _list" :key="index" :style="{height:baseBarHeight+'px'}"
					class="xTabbarItem" @click="itemClick(index)">
					<!--
					子项目插槽，以便完全自定义化样式。
					 @param {number} activeindex - 当前激活的项
					 @param {boolean} isactive - 当前是否被激活
					 @param {number} selfindex - 索引
					 -->
					<slot :activeindex="nowIndex" :children="item" :isactive="nowIndex==index"
						:selfindex="index" name="item">
						<tm-badge :dot="item.dotType=='dot'" :label="item.dotLabel" :offset="[0,5]">
							<view style="height: 30px;padding: 0px 4px;">
								<tm-icon v-if="_outIndex!=index"
									:color="nowIndex==index?item.selectedColor:item.color"
									:dark-color="nowIndex==index?item.selectedColor:item.color"
									:name="nowIndex==index?item.selectedIcon:item.icon" :size="iconSize"></tm-icon>
							</view>
							<text
								:style="{fontSize:_fontSize,color:nowIndex==index?item.selectedColor:item.color,paddingTop:'4px'}">
								{{ item.title }}
							</text>
						</tm-badge>
					</slot>
				</view>

			</view>
			<view :style="{height:safeHeight+'px'}"></view>
		</view>


	</view>
</template>
<style scoped>

	.xTabbarBox {
		left: 0;
		bottom: 0;
		width: 100%;
		/* z-index: 20; */
	}

	.xTabbarTuqi {
		position: absolute;
		width: 100%;
		pointer-events: none;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		/* z-index: 21; */
		cursor: pointer;
	}

	.xTabbarTuqiItem {
		pointer-events: auto;
	}

	.xTabbarPlace {
		pointer-events: none;

	}

	.xTabbarTuqiItem {
		border-radius: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.xTabbar {
		/* position: fixed; */
		/* z-index: 20; */
		bottom: 0;
		left: 0;
		width: 100%;

	}

	.xTabbarWrap {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-start;
	}

	.xTabbarItem {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		cursor: pointer;
	}
</style>