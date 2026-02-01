<script setup lang="ts">
	import { computed, getCurrentInstance, provide, onBeforeUnmount, onMounted, PropType, ref, watch } from 'vue';
	import { useTmConfig } from "../../libs/config";
	import { covetUniNumber } from '../../libs/tool';
	import { getDefaultColor } from '../../libs/colors';
	import type { TmDropdownMenuProps,TmDropdownMenuPropsPositions, tmDropDownMenuItemType, tmDropdownMenuTypeProide } from './propsType';

	/**
	 * @displayName 下拉菜单
	 * @exportName tm-dropdown-menu
	 * @category 反馈组件
	 * @description 下拉菜单组件，用于下拉菜单中展示选项。
	 * @constant 平台兼容
	 *    | H5 | uniAPP | 小程序 | version |
	 | --- | --- | --- | --- |
	 | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
	 */
	defineOptions({
		name: 'TmDropdownMenu', options: {
			styleIsolation: "apply-shared",
			virtualHost: true,
			addGlobalClass: true,
			multipleSlots: true,
		}
	});
	const { config } = useTmConfig();
	const emit = defineEmits([
		/**
		 * 切换菜单时触发
		 * @param index {number} - 当前被切换的索引值
		 * @param keyName {string} - 菜单keyName标识
		 * @param status {boolean} - 当前切换的状态：false表示关闭，true表示打开。
		 */
		'change',
		'update:modelValue'
	])
	const props = withDefaults(defineProps<TmDropdownMenuProps>(), {
		position: 'static',
		offsetTop: '0',
		modelValue: -1,
		height: '88',
		width: 'auto',
		color: 'white',
		darkColor: '',
		zIndex: 88,
		hidnMask: false,
		contentColor: '#ffffff',
		contentDarkColor: '',
		round: '0',
		contentPadding: '0px 12px 12px 12px',

	});
	const proxy = getCurrentInstance()?.proxy;
	const menuitems = ref<Map<string | number, tmDropDownMenuItemType>>(new Map());
	const _topPos = ref<UniNamespace.NodeInfo | null>(null)
	const showContent = ref(false)
	const _height = computed(() => covetUniNumber(props.height, config.unit));
	const _width = computed(() => covetUniNumber(props.width, config.unit));
	const _offsetTop = computed(() => {
		let top = covetUniNumber(props.offsetTop, config.unit);
		if(top.lastIndexOf('rpx')>-1){
			top = uni.upx2px(parseFloat(top))+'px'
		}
		return top;
	});
	const _color = computed(() => {
		if (config.mode == 'dark') {
			if (props.darkColor != '') return getDefaultColor(props.darkColor)
			return config.sheetDarkColor
		}
		return getDefaultColor(props.color)
	})
	const _contentColor = computed(() => {
		if (config.mode == 'dark') {
			if (props.contentDarkColor != '') return getDefaultColor(props.contentDarkColor)
			return config.sheetDarkColor
		}
		return getDefaultColor(props.contentColor)
	})
	const _contentRound = computed(() => {
		return `0 0 ${covetUniNumber(props.round, config.unit)} ${covetUniNumber(props.round, config.unit)}`
	})
	const _menuRoundOn = computed(() => {
		return `${covetUniNumber(props.round, config.unit)} ${covetUniNumber(props.round, config.unit)} 0 0 `
	})
	const _menuRoundOff = computed(() => {
		return `${covetUniNumber(props.round, config.unit)}`
	})
	const _positionStatus = computed(():TmDropdownMenuPropsPositions => props.position)
	const activeName = ref<string | number>(props.modelValue)
	const _activeName = computed({
		get: () => activeName.value,
		set: (val) => {
			activeName.value = val
			emit('update:modelValue', val)
		}
	})
	const sys = uni.getWindowInfo()
	const timeid = ref<number>(22)
	const getNodes = () : Promise<UniNamespace.NodeInfo> => {
		return new Promise((resolve, _) => {
			uni.createSelectorQuery().in(proxy)
				.select(".tm-dropdown-menu-content")
				.boundingClientRect((result) => {
					const ret = result as UniNamespace.NodeInfo;
					resolve(ret)
				})
				.exec()
		})
	}
	provide('tmDropdownMenu', computed<tmDropdownMenuTypeProide>(() : tmDropdownMenuTypeProide => {
		return {
			activeName: _activeName.value,
			zIndex: props.zIndex,
			getNodes
		}
	}))
	const _isActive = computed(() => {
		return (name : string | number) => {
			return name == _activeName.value
		}
	})
	const _isActiveInMenuItems = computed(() => {
		return menuitems.value.has(_activeName.value)
	})
	const _activeItem = computed(()=>menuitems.value.get(_activeName.value))
	const addChildren = (child : tmDropDownMenuItemType) => {
		menuitems.value.set(child.keyName, child)
	}
	const removeChildren = (keyName : string | number) => {
		menuitems.value.delete(keyName)
	}
	const itemClick = async (index : number, keyName : string | number) => {
		getNodes().then((res)=>{
			_topPos.value = res;
			if(_activeName.value != keyName){
				emit('change', index, keyName, _isActiveInMenuItems.value)
			}
			_activeName.value = _activeName.value == keyName ? -1 : keyName
			if (_isActiveInMenuItems.value) {
				showContent.value = false
				clearTimeout(timeid.value)
				timeid.value = setTimeout(() => {
					showContent.value = true
				}, 5)
			} else {
				showContent.value = true
			}
		})
		
	}
	const closeMenu = () => {
		_activeName.value = -1
		clearTimeout(timeid.value)
	}

	watch(()=>props.modelValue,()=>{
		if(props.modelValue === _activeName.value) return;
		let temName:string|number = -1
		let temIndex = -1
		let iindex = -1
		menuitems.value.forEach((el,key)=>{
			if(el.keyName === props.modelValue){
				iindex+=1
				temName = el.keyName;
				temIndex = iindex
			}
		})
		if(menuitems.value.has(temName)){
			itemClick(temIndex,temName)
		}else{
			closeMenu()
		}
	})
	defineExpose({
		addChildren,
		removeChildren
	})
</script>
<template>
	<view>
		<view 
		class="tm-dropdown-menu"
		:class="{'positionFixed':_positionStatus=='fixed'&&_isActiveInMenuItems}"
		:style="{ 
			height: _height, 
			width: _positionStatus=='fixed'?'100%':_width,
			zIndex: _positionStatus=='fixed'?props.zIndex:'auto',
			left: _positionStatus=='fixed'&&_isActiveInMenuItems?'0px':'auto',
			borderRadius: _isActiveInMenuItems?_menuRoundOn:_menuRoundOff,
			top:_positionStatus=='fixed'&&_isActiveInMenuItems?`calc(${sys.windowTop}px + ${_offsetTop})`:'auto',
		}">
			<view class="tm-dropdown-menu-content">
				<view class="tm-dropdown-menu-item" @click="itemClick(index, item[1].keyName)" :style="{
					backgroundColor: _color
				}" v-for="(item, index) in menuitems" :key="item[1].keyName">
					<tm-icon _style="margin-right: 3px;"
						:name="_isActive(item[1].keyName) ? item[1].activeIcon : item[1].icon"
						:color="_isActive(item[1].keyName) ? item[1].activeFontColor : item[1].fontColor"
						:size="item[1].fontSize"></tm-icon>
					<text :style="{
						fontSize: item[1].fontSize,
						color: _isActive(item[1].keyName) ? item[1].activeFontColor : item[1].fontColor
					}">{{ item[1].title }}</text>
				</view>
			</view>
		</view>
		<!-- 点位防止塌陷 -->
		<view v-if="_positionStatus=='fixed'&&_isActiveInMenuItems" :style="{height:_height}"></view>
		<view v-if="_positionStatus=='static'" @click.stop="closeMenu" @touchmove.stop="closeMenu" class="tm-dropdown-item-mask" :style="{
			zIndex: props.zIndex || 999,
			height: _isActiveInMenuItems ? `calc(${_topPos?.top ?? 0}px + ${sys.windowTop}px)` : '0px',
			pointerEvents: _isActiveInMenuItems ? 'auto' : 'none',
		}">
		</view>
		<view 
			v-show="!(_activeItem?.isBtn??false)"
			class="tm-dropdown-item-content" 
			@click.stop="closeMenu"
			:class="{ 'bgFadeInName': _isActiveInMenuItems&&!props.hidnMask, 'bgFadeOutName': !_isActiveInMenuItems&&!props.hidnMask }"
			:style="{
				top: _positionStatus=='fixed'&&_isActiveInMenuItems?`calc(${_topPos?.height ?? 0}px + ${sys.windowTop}px + ${_offsetTop})`:`calc(${_topPos?.bottom ?? 0}px + ${sys.windowTop}px)`,
				pointerEvents: _isActiveInMenuItems ? 'auto' : 'none',
				height: _isActiveInMenuItems ? (_positionStatus=='fixed'?`calc(100vh - ${_topPos?.height ?? 0}px - ${sys.windowTop}px - ${_offsetTop})`:`calc(100vh - ${_topPos?.height ?? 0}px - ${_topPos?.top ?? 0}px)`) : '0px',
				left: `0px`,
				zIndex: props.zIndex || 999,
			}">
			<view v-show="showContent" @click.stop="" class="tm-dropdown-item-content-inner"
				:class="{ 'tm-dropdown-item-content-inner-on': _isActiveInMenuItems&&showContent, 'tm-dropdown-item-content-inner-off': !_isActiveInMenuItems&&!showContent }"
				:style="{
					maxHeight: _positionStatus=='fixed'?`calc(100vh - ${_topPos?.height ?? 0}px - ${sys.windowTop}px - ${_offsetTop})`:`calc(100vh - ${_topPos?.height ?? 0}px - ${_topPos?.top ?? 0}px)`,
					width: `${_topPos?.width ?? 0}px`,
					marginLeft: `${_topPos?.left ?? 0}px`,
					overflowY: 'auto',
					backgroundColor: _contentColor,
					borderRadius:_contentRound,
					padding: props.contentPadding
				}">
				<slot></slot>
			</view>
		</view>
	</view>

</template>
<style lang="scss" scoped>
	.tm-dropdown-menu-content {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;

	}

	.tm-dropdown-menu-item {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex: 1;
		height: 100%;
	}

	.tm-dropdown-menu {
		box-sizing: border-box;
		overflow: hidden;
		&.positionFixed{
			position: fixed;
		}
	}


	.tm-dropdown-item-mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}

	.tm-dropdown-item-content {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
	}

	@keyframes trnameDown {
		0% {
			transform: translateY(-100%);
		}

		100% {
			transform: translateY(0);
		}
	}

	@keyframes trnameUp {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(-100%);
		}
	}

	@keyframes bgFadeIn {
		0% {
			background-color: rgba(0, 0, 0, 0);
		}

		100% {
			background-color: rgba(0, 0, 0, 0.1);
		}
	}

	@keyframes bgFadeOut {
		0% {
			background-color: rgba(0, 0, 0, 0.1);
		}

		100% {
			background-color: rgba(0, 0, 0, 0);
		}
	}

	.bgFadeInName {
		animation: bgFadeIn 0.3s ease-in-out forwards;
		animation-delay: 0ms;
	}

	.bgFadeOutName {
		animation: bgFadeOut 0.3s ease-in-out forwards;
		animation-delay: 0ms;
	}

	.tm-dropdown-item-content-inner {
		box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.08);
		box-sizing: border-box;
	}

	.tm-dropdown-item-content-inner-on {
		animation: trnameDown 0.3s ease-in-out;
		animation-delay: 0ms;
	}

	.tm-dropdown-item-content-inner-off {
		animation: trnameUp 0.3s ease-in-out;

	}
</style>