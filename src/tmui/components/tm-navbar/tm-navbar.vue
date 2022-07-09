<template>
	<view>
		<view class="statusHeight" :style="{height:_barHeight+'px'}"></view>
		<view class="fixed l-0 t-0 statusHeightTop" :style="{width:_width+'px',height:_barHeight+'px'}">
			<tm-sheet
				@click="emits('click', $event)"
				:blur="_blur"
				:color="props.color"
				:_class="_class"
				:_style="_style"
				:followTheme="props.followTheme"
				:dark="props.dark"
				:round="props.round"
				:shadow="props.shadow"
				:outlined="props.outlined"
				:border="props.border"
				:borderStyle="props.borderStyle"
				:borderDirection="props.borderDirection"
				:text="props.text"
				:transprent="props.transprent"
				:linear="props.linear"
				:linearDeep="props.linearDeep"
				:margin="props.margin"
				:padding="props.padding"
				:height='_barHeight'
				unit='px'
			>
				<view class="statusHeight" :style="{height:statusBarHeight+'px'}"></view>
				
				<view class="flex flex-row flex-1 flex-row flex-row-center-betweent ">
					<view class="flex-row flex flex-row-center-start pl-24" :style="{width:_leftWidth+'rpx'}">
						<tm-icon _class="pointer" @click="goback" v-if="_pages>1" name="tmicon-angle-left" :font-size="20" unit="px"></tm-icon>
						<tm-icon _class="pointer" @click="backhome" v-if="_pages==1&&!hideHome" :color="_homeColor" :font-size="20" unit="px" name="tmicon-md-home"></tm-icon>
						<slot name="left"></slot>
					</view>
					<view class=" flex flex-row-center-center" :style="{width:contentwidth+'px'}">
						<slot>
							<tm-text _class="text-weight-b text-overflow-1" :color="_fontColor" :font-size="props.fontSize" unit="px" :label="_title"></tm-text>
						</slot>
					</view>
					<view class="flex-row flex flex-row-center-end  pr-24" :style="{width:_rightWidth+'rpx'}">
						<slot name="right"></slot>
					</view>
				</view>
			</tm-sheet>
		</view>
	</view>
</template>
<script lang="ts" setup>
	/**
	 * 标题栏
	 * @description 页面自定标题栏，时，请务必放置在页面的最顶部。
	 */
	import tmSheet from "../tm-sheet/tm-sheet.vue";
	import tmText from "../tm-text/tm-text.vue";
	import tmIcon from "../tm-icon/tm-icon.vue";
	import {
		custom_props,
	} from '../../tool/lib/minxs';
	import { getCurrentInstance, computed, ref, provide, inject , onUpdated, onMounted, onUnmounted, nextTick ,watch, PropType } from 'vue';
	import { useTmpiniaStore } from '../../tool/lib/tmpinia';
	const store = useTmpiniaStore();
	const emits = defineEmits(['click','close'])
	const {proxy} = getCurrentInstance();
	const props = defineProps({
		...custom_props,
		followTheme:{
			type:[Boolean,String],
			default:true
		},
		transprent:{
			type: [Boolean,String],
			default: false
		},
		color:{
			type: [ String],
			default: 'white'
		},
		text:{
			type: [ Boolean],
			default: false
		},
		border: {
			type: [Number, String],
			default: 0
		},
		shadow: {
			type: [Number, String],
			default: 1
		},
		borderDirection:{
			type:String,
			default:"bottom"
		},
		round: {
			type: [Number, String],
			default: 0
		},
		margin: {
			type:Array as PropType<Array<number>>,
			default: () => [0, 0]
		},
		padding: {
			type:Array as PropType<Array<number>>,
			default: () => [0, 0]
		},
		height:{
			type: [Number],
			default: 44
		},
		//指两边，左宽度除了中间，中间标题宽度为自动
		leftWidth:{
			type: [Number],
			default: 220
		},
		//指两边，左宽度除了中间，中间标题宽度为自动
		rightWidth:{
			type: [Number],
			default: 220
		},
		fontSize:{
			type: [Number],
			default: 16
		},
		title:{
			type: [String],
			default: "标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"
		},
		//默认为自动，提供了，将强制使用本主题色。
		fontColor:{
			type: [String],
			default: ""
		},
		homeColor:{
			type: [String],
			default: ""
		},
		hideHome:{
			type:Boolean,
			default:false
		},
		//返回首页的路径，默认/pages/index/index
		homePath:{
			type: [String],
			default: "/pages/index/index"
		},
		blur:{
			type:Boolean,
			default:false
		},
	})

	const _height = computed(()=>props.height)
	const _width = uni.getSystemInfoSync().windowWidth
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight
	const _barHeight = computed(()=>statusBarHeight+_height.value)
	const _leftWidth = computed(()=>props.leftWidth)
	const _rightWidth = computed(()=>props.rightWidth)
	const contentwidth = computed(()=>{
		return _width - uni.upx2px(_leftWidth.value) - uni.upx2px(_rightWidth.value)
	})
	const _title = computed(()=>props.title)
	const _fontColor = computed(()=>props.fontColor)
	const _homeColor = computed(()=>props.homeColor)
	const _blur = computed(()=>props.blur)
	const _pages = ref(0)
	onMounted(()=>{
		_pages.value = getCurrentPages().length;
	})
	
	const backhome = ()=>{
		uni.reLaunch({
			url:props.homePath
		})
	}
	const goback = ()=>{
		uni.navigateBack({})
	}
</script>

<style scoped>
.statusHeightTop{
	z-index: 400;
}

</style>
