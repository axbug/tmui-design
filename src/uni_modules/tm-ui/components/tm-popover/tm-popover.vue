<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->

<script setup lang="ts">
import { computed, getCurrentInstance, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useTmConfig } from '../../libs/config'
import { getDefaultColor } from '../../libs/colors'
import { PositionType, propsType } from './propsType'
import { debounce, throttle } from '../../useFun/toolUse'

/**
 * @displayName 汽泡菜单
 * @exportName tm-popover
 * @category 反馈组件
 * @description 通用弹出的汽泡菜单。
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: 'TmPopover',options: {
	styleIsolation: "apply-shared",
	virtualHost: true,
	addGlobalClass: true,
	multipleSlots: true,
} });
const {config} = useTmConfig()
const props = withDefaults(defineProps<propsType>(),{
	position:"bc",
	modelValue:false,
	isClickClose:true,
	showMask:false,
	zIndex:998,
	showTriangle:true,
	triangleColor:"#fff",
	triangleDarkColor:"#fff"
})

const emit = defineEmits<{
	(e: 'change', show: boolean): void
	(e: 'update:modelValue', show: boolean): void
}>()
const show = ref(props.modelValue)
const proxy = getCurrentInstance()?.proxy;
const animeing = ref(props.modelValue)
const popverKey = 'tmPopover'+Math.random().toString(16).substring(4)
const popverKeyContent = 'tmPopoverContent'+Math.random().toString(16).substring(4)
const _show = computed({
	get:()=>show.value,
	set:(val:boolean)=>{
		show.value = val;

		emit('update:modelValue',val)
	}
})
const _triangleColor = computed(()=> {
	let ccolor = props.triangleColor;
	if(config.mode == 'dark'){
		if(props.triangleDarkColor){
			ccolor = props.triangleDarkColor
		}else{
			ccolor = config.sheetDarkColor
		}
	}
	return getDefaultColor(ccolor)
})
const isQueryNodes  =ref(false)
const triggerRect = ref<UniNamespace.NodeInfo|null>(null)
const contentRect = ref<UniNamespace.NodeInfo|null>(null)
const positionVal = ref<PositionType>(props.position)
const _showTriangle = computed(()=>props.showTriangle)
/**
 * 计算气泡菜单位置
 * @param triggerRectInfo 触点位置信息
 * @param contentRectInfo 内容位置信息
 * @param windowInfo 窗口信息
 * @param position 弹出位置
 * @returns 返回样式对象 { left, top }
 */
function calculatePopoverPosition(
	triggerRectInfo: UniNamespace.NodeInfo,
	contentRectInfo: UniNamespace.NodeInfo,
	windowInfo: { width: number; height: number },
	position: PositionType = 'bc'
): { left: number; top: number } {
	// 计算触点中心点
	const triggerCenterX = triggerRectInfo.left! + triggerRectInfo.width! / 2;
	const triggerCenterY = triggerRectInfo.top! + triggerRectInfo.height! / 2;

	// 初始化位置
	let left = 0;
	let top = 0;
	let space = _showTriangle.value?16:0
	// 检查垂直方向是否有足够空间
	const hasSpaceBelow = windowInfo.height - triggerRectInfo.bottom! - space >= contentRectInfo.height!;
	const hasSpaceAbove = triggerRectInfo.top! - space >= contentRectInfo.height!;

	// 检查水平方向是否有足够空间
	const hasSpaceRight = windowInfo.width - triggerRectInfo.right! - space >= contentRectInfo.width!;
	const hasSpaceLeft = triggerRectInfo.left! - space >= contentRectInfo.width!;
	positionVal.value = position
	// 根据位置计算初始坐标
	switch (position) {
		case 'tc':
			top = triggerRectInfo.top! - contentRectInfo.height!;
			left = triggerCenterX - contentRectInfo.width! / 2;
			break;
		case 'bc':
			top = triggerRectInfo.bottom!;
			left = triggerCenterX - contentRectInfo.width! / 2;
			break;
		case 'left':
			left = triggerRectInfo.left! - contentRectInfo.width!;
			top = triggerCenterY - contentRectInfo.height! / 2;
			break;
		case 'right':
			left = triggerRectInfo.right!;
			top = triggerCenterY - contentRectInfo.height! / 2;
			break;
		case 'tl':
			top = triggerRectInfo.top! - contentRectInfo.height!;
			left = triggerRectInfo.left!;
			break;
		case 'tr':
			top = triggerRectInfo.top! - contentRectInfo.height!;
			left = triggerRectInfo.right! - contentRectInfo.width!;
			break;
		case 'bl':
			top = triggerRectInfo.bottom!;
			left = triggerRectInfo.left!;
			break;
		case 'br':
			top = triggerRectInfo.bottom!;
			left = triggerRectInfo.right! - contentRectInfo.width!;
			break;
	}
	// 如果垂直方向空间不足，则翻转位置
	if((position == 'tc'|| position == 'tl'|| position == 'tr')&& !hasSpaceAbove && hasSpaceBelow){
		top = triggerRectInfo.bottom!;
		const rr = new Map<PositionType,PositionType>([['tc','bc'],['tl','bl'],['tr','br']]);
		positionVal.value = rr.get(position!)!;
	} else if((position == 'bc'|| position == 'bl'|| position == 'br') && !hasSpaceBelow && hasSpaceAbove){
		top = triggerRectInfo.top! - contentRectInfo.height!;
		const rr = new Map<PositionType,PositionType>([['bc','tc'],['bl','tl'],['br','tr']]);
		positionVal.value = rr.get(position!)!;
	}

	// 如果水平方向空间不足，则翻转位置
	if (position == 'left' && !hasSpaceLeft && hasSpaceRight) {
		left = triggerRectInfo.right!;
		positionVal.value = 'right';
	} else if (position == 'right' && !hasSpaceRight && hasSpaceLeft) {
		left = triggerRectInfo.left! - contentRectInfo.width!;

		positionVal.value = 'left';
	}

	// 确保内容不会超出窗口边界
	// 水平方向调整
	if (left < 0) {
		left = 0;
	} else if (left + contentRectInfo.width! > windowInfo.width!) {
		left = windowInfo.width - contentRectInfo.width!;
	}
	//
	// 垂直方向调整
	if (top < 0) {
		top = 0;
	} else if (top + contentRectInfo.height! > windowInfo.height) {
		top = windowInfo.height - contentRectInfo.height!;
	}

	return { left, top };
}

const positionStyle = computed(()=>{
	if(!triggerRect.value||!contentRect.value) return;
	let triggerRectInfo = triggerRect.value!;
	let contentRectInfo = contentRect.value!;
	let position = props.position;
	let windowInfo = uni.getWindowInfo();
	const st = calculatePopoverPosition(triggerRectInfo,contentRectInfo,{width:windowInfo.windowWidth,height:windowInfo.windowHeight},position)
	isQueryNodes.value = true

	return {
		left:`${st.left}px`,
		top:`${st.top+windowInfo.windowTop}px`,
	}
})

const changeShow = (sh:boolean)=>{
	throttle(popverKey,()=>{
		_show.value = sh;
		animeing.value = true;
		isQueryNodes.value = false
		setTimeout(()=>{
			uni.createSelectorQuery()
				.in(proxy)
				.selectAll(`.${popverKeyContent}`)
				.boundingClientRect((res)=>{
					if(!Array.isArray(res)||res.length!=2) return;
					let parentNode = res[0] as UniNamespace.NodeInfo;
					let contentNode = res[1] as UniNamespace.NodeInfo;
					triggerRect.value = parentNode
					contentRect.value = contentNode
				})
				.exec()
		},50)
	},300)
}
const contentClick = ()=>{
	if(props.isClickClose){
		maskClick()
	}
}
const maskClick = ()=>{
	throttle(popverKey,()=>{
		animeing.value = false;
		debounce(popverKey,()=>{
			emit('change',false)
			_show.value = false;
		},200,false)
	},250)

}

watch(()=>props.modelValue,(newval:boolean)=>{
	if(newval === show.value) return;
	changeShow(newval)
})
// #ifdef WEB
let tid = 23
const resize = ()=>{
	clearTimeout(tid)
	tid = setTimeout(()=>{
		if(show.value){
			changeShow(true)
		}
	},100)
}
onMounted(()=>{
	window.addEventListener('resize',resize)
})
onBeforeUnmount(()=>{
	clearTimeout(tid)
	window.removeEventListener('resize',resize)
})
// #endif
</script>

<template>
	<view :id="popverKey" :ref="popverKey" :class="[popverKeyContent]" @click="changeShow(true)">
		<!--
		@slot 默认触发插槽
		@binding {boolean} isShow 当前是否显示
		-->
		<slot name="default" :isShow="show"></slot>
		<view

			v-if="show"
			:class="[
				{'tmPopoverWrapShow':animeing&&props.showMask},
				{'tmPopoverWrapHide':!animeing&&props.showMask}
			]"
			:style="{
				zIndex:props.zIndex
			}"
			class="tmPopoverWrap"
			@click.stop="maskClick"
			@touchmove.stop.prevent="maskClick"
		>
			<view
				:id="popverKeyContent"
				:class="[
				popverKeyContent,
				`${animeing?'show':'hide'}`,
				_showTriangle?positionVal:''
			]"
				:style="[positionStyle,{visibility:isQueryNodes?'visible':'hidden',color:_triangleColor}]"
				class="tmPopoverContent"
				@click.stop="contentClick"
			>
				<!--
				@slot 内容插槽
				@binding {boolean} isShow 当前是否显示
				-->
				<slot :isShow="show" name="menu"></slot>
			</view>
		</view>
	</view>

</template>

<style scoped lang="scss">
$ani:cubic-bezier(0.07, 0.82, 0.17, 1.20);
$naiDur:200ms;
@keyframes animateFadeIn {
	0% { background-color: rgba(0,0,0,0); }
	100% { background-color: rgba(0,0,0,0.45); }
}
@keyframes animateFadeOut {
	0% { background-color: rgba(0,0,0,0.45); }
	100% { background-color: rgba(0,0,0,0); }
}

@keyframes showAni {
	0% { opacity:0;}
	100% { opacity:1; }
}
@keyframes hideAni {
	0% { opacity:1;}
	100% { opacity:0; }
}
.tmPopoverWrap{
	position: fixed;
	width: 100vw;
	height:100vh;
	top: 0;
	left:0;
	overflow: hidden;
	transition-duration: $naiDur;
	transition-property: background-color;
	transition-timing-function: linear;

	&.tmPopoverWrapShow {
		transition-delay: 50ms;
		animation: animateFadeIn $naiDur linear forwards ;
	}
	&.tmPopoverWrapHide {
		transition-delay: 0ms;
		animation: animateFadeOut $naiDur linear forwards ;
		pointer-events: none;
	}
}
.tmPopoverContent{
	position: absolute;
	&.show {
		animation: showAni $naiDur ease-in forwards;
	}
	&.hide {
		animation: hideAni $naiDur ease-in forwards;
	}
	&.tc,&.tl,&.tr{
		margin-top: -12px;
	}
	&.tc:after{
		pointer-events: none;
		content: "";
		display: block;
		width: 0;
		height: 0;
		/* 设置边框宽度，决定三角形的大小 */
		border-width: 10px;
		/* 上下左右边框样式 */
		border-style: solid;
		/* 上边框有颜色，其他边框透明，形成向下指的箭头 */
		border-color: currentColor transparent transparent transparent;
		/* 居中定位 */
		position: absolute;
		left: 50%;
		top: 100%; /* 或者根据需求调整 top 值 */
		transform: translateX(-50%);
	}
	&.tl:after{
		pointer-events: none;
		content: "";
		display: block;
		width: 0;
		height: 0;
		/* 设置边框宽度，决定三角形的大小 */
		border-width: 10px;
		/* 上下左右边框样式 */
		border-style: solid;
		/* 上边框有颜色，其他边框透明，形成向下指的箭头 */
		border-color: currentColor transparent transparent transparent;
		/* 居中定位 */
		position: absolute;
		left: 24px;
		top: 100%; /* 或者根据需求调整 top 值 */
		transform: translateX(-50%);
	}
	&.tr:after{
		pointer-events: none;

		content: "";
		display: block;
		width: 0;
		height: 0;
		/* 设置边框宽度，决定三角形的大小 */
		border-width: 10px;
		/* 上下左右边框样式 */
		border-style: solid;
		/* 上边框有颜色，其他边框透明，形成向下指的箭头 */
		border-color: currentColor transparent transparent transparent;
		/* 居中定位 */
		position: absolute;
		right: 0px;
		top: 100%; /* 或者根据需求调整 top 值 */
		transform: translateX(-50%);
	}
	&.bc,&.bl,&.br{
		margin-top: 12px;
	}
	&.bc:after{
		pointer-events: none;
		content: "";
		display: block;
		width: 0;
		height: 0;
		/* 设置边框宽度，决定三角形的大小 */
		border-width: 10px;
		/* 上下左右边框样式 */
		border-style: solid;
		/* 上边框有颜色，其他边框透明，形成向下指的箭头 */
		border-color:  transparent transparent currentColor transparent;
		/* 居中定位 */
		position: absolute;
		left: 50%;
		top: -20px; /* 或者根据需求调整 top 值 */
		transform: translateX(-50%);
	}
	&.bl:after{
		pointer-events: none;

		content: "";
		display: block;
		width: 0;
		height: 0;
		/* 设置边框宽度，决定三角形的大小 */
		border-width: 10px;
		/* 上下左右边框样式 */
		border-style: solid;
		/* 上边框有颜色，其他边框透明，形成向下指的箭头 */
		border-color:  transparent transparent currentColor transparent;
		/* 居中定位 */
		position: absolute;
		left: 24px;
		top: -20px; /* 或者根据需求调整 top 值 */
		transform: translateX(-50%);
	}
	&.br:after{
		pointer-events: none;
		content: "";
		display: block;
		width: 0;
		height: 0;
		/* 设置边框宽度，决定三角形的大小 */
		border-width: 10px;
		/* 上下左右边框样式 */
		border-style: solid;
		/* 上边框有颜色，其他边框透明，形成向下指的箭头 */
		border-color:  transparent transparent currentColor transparent;
		/* 居中定位 */
		position: absolute;
		right: 0;
		top: -20px; /* 或者根据需求调整 top 值 */
		transform: translateX(-50%);
	}
	&.left{
		transform: translateX(-12px);
	}
	&.left:after{
		pointer-events: none;
		content: "";
		display: block;
		width: 0;
		height: 0;
		/* 设置边框宽度，决定三角形的大小 */
		border-width: 10px;
		/* 上下左右边框样式 */
		border-style: solid;
		/* 上边框有颜色，其他边框透明，形成向下指的箭头 */
		border-color:  transparent  transparent  transparent currentColor;
		/* 居中定位 */
		position: absolute;
		right: -20px;
		top: 50%;
		transform: translateY(-50%);
	}
	&.right{
		transform: translateX(12px);
	}
	&.right:after{
		pointer-events: none;
		content: "";
		display: block;
		width: 0;
		height: 0;
		/* 设置边框宽度，决定三角形的大小 */
		border-width: 10px;
		/* 上下左右边框样式 */
		border-style: solid;
		/* 上边框有颜色，其他边框透明，形成向下指的箭头 */
		border-color:  transparent currentColor transparent  transparent ;
		/* 居中定位 */
		position: absolute;
		left: -20px;
		top: 50%;
		transform: translateY(-50%);
	}
}
</style>