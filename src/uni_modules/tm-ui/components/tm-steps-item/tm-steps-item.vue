<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->

<script setup lang="ts">
import { computed, getCurrentInstance, inject, nextTick, onBeforeMount, onBeforeUnmount } from 'vue'
import { PropsTypes } from './../tm-steps/propsType'
import { tmStepsItemPropsTypes } from './tmStepsItemPropsTypes'
import tmSteps from '../tm-steps/tm-steps.vue'
import { findParentView } from '@/uni_modules/tm-ui/useFun/toolUse'
import { covetUniNumber } from '../../libs/tool'
import { useTmConfig } from '@/uni_modules/tm-ui/libs/config'
import { getDefaultColor } from '@/uni_modules/tm-ui/libs/colors'

/**
 * @displayName 步骤条子组件
 * @exportName tm-steps-item
 * @page tm-steps
 * @category 展示组件
 * @description 仅可放置在父组件tm-steps中作为直接子节点使用。
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: 'TmStepsItem',options: {
	styleIsolation: "apply-shared",
	virtualHost: true,
	addGlobalClass: true,
	multipleSlots: true,
} });
const proxy = getCurrentInstance()?.proxy
const {config} = useTmConfig()
const props = withDefaults(defineProps<tmStepsItemPropsTypes>(),{
	icon: '',
	activeIcon: '',
	iconSize: '',
	labelSize: '',
	descSize: '',
	color: '',
	activeColor: '',
	desc: '',
	label: '',
	disabled: false
})
const emits = defineEmits([
	/**
	 * 项目被点击
	 * @param {number} index 当前索引
	 */
	'click'
])
//父组件的配置。
const tmStepsConfig = inject("tmStepsConfig",computed(():null|PropsTypes=>null))
const tmStepsCurrent = inject("tmStepsCurrent",computed(()=>-1))
const childrenCurrentStatus = inject("childrenCurrentStatus",computed(():string[]=>[]))

const tmStepsId = 'tmStepsId-'+Math.random().toString(36).substring(2, 9)
const isIncurrentBefore = computed(()=>{
	let nowCurrent = tmStepsCurrent.value;
	let selfIndex = childrenCurrentStatus.value.indexOf(tmStepsId);
	if(selfIndex==-1||nowCurrent==-1) return false;
	if(tmStepsConfig.value?.reverse){
		selfIndex = childrenCurrentStatus.value.length-1-selfIndex;
	}
	return nowCurrent>=selfIndex;
})
const showLine = computed(()=>{
	let nowCurrent = tmStepsCurrent.value;
	let selfIndex = childrenCurrentStatus.value.indexOf(tmStepsId);
	if(childrenCurrentStatus.value.length<=1) return false;
	return  selfIndex != childrenCurrentStatus.value.length-1
})
const _iconsSize = computed(()=>{
	return covetUniNumber(props.iconSize||(tmStepsConfig.value?.iconSize||28),config.unit)
})
const _dotColor = computed(()=>{
	let color = props.color||(tmStepsConfig.value?.color||'#888');
	if(isIncurrentBefore.value){
		color = props.activeColor||(tmStepsConfig.value?.activeColor||config.color);
	}
	return getDefaultColor(color)
})
const _icon = computed(()=>{
	let icon = props.icon||(tmStepsConfig.value?.icon||'checkbox-blank-circle-fill');
	if(isIncurrentBefore.value){
		icon = props.activeIcon||(tmStepsConfig.value?.activeIcon||'checkbox-circle-fill');
	}
	return icon
})
const _labelSize = computed(()=>{
	return covetUniNumber(props.labelSize||(tmStepsConfig.value?.labelSize||28),config.unit)
})
const _descSize = computed(()=>{
	return covetUniNumber(props.descSize||(tmStepsConfig.value?.descSize||22),config.unit)
})
const _label = computed(()=>props.label||"")
const _desc = computed(()=>props.desc||"")
const _showFooter = computed(()=>tmStepsConfig?.value?.showFooter??true)

const onClick = ()=>{
	if(tmStepsConfig.value?.disabled) return;
	let parent = findParentView<InstanceType<typeof tmSteps>>(proxy,'TmSteps')
	let index = childrenCurrentStatus.value.indexOf(tmStepsId);
	if(tmStepsConfig.value?.reverse){
		index = childrenCurrentStatus.value.length - index -1;
		parent?.updateCurrent(childrenCurrentStatus.value[index])
		
	}else{
		parent?.updateCurrent(tmStepsId)
	}
	nextTick(()=>{
		parent?.changeEmit()
		emits('click',index);
	})
}

const destroyChildren = ()=>{
	let parent = findParentView<InstanceType<typeof tmSteps>>(proxy,'TmSteps')
	parent?.removeChildren(tmStepsId)
}
const resignChildren = ()=>{
	let parent = findParentView<InstanceType<typeof tmSteps>>(proxy,'TmSteps')
	parent?.addChildren(tmStepsId)
}

onBeforeMount(()=>{
	resignChildren()
})
onBeforeUnmount(()=>{
	destroyChildren()
})
</script>

<template>
<view
	:class="[{'vertical':tmStepsConfig?.vertical,'reverse':tmStepsConfig?.reverse}]"
	:style="{
		minHeight: tmStepsConfig?.vertical?`calc(${_iconsSize} + 32px)`:'auto'
	}"
	class="tmStepsItem"
	@click="onClick"
>

	<view class="tmStepsItemDot"
	:style="{
		width:`${_iconsSize}`,
		height:`${_iconsSize}`,
	}"
	>
		<!--
		@slot 图标插槽
		@binding {boolean} active 是否激活状态
		-->
		<slot :active="isIncurrentBefore" name="icon">
			<tm-icon :color="_dotColor" :name="_icon" :size="_iconsSize"></tm-icon>
		</slot>
	</view>
	<view v-if="_showFooter" :class="[
			{'vertical':tmStepsConfig?.vertical}
		]"
		  :style="{
		    padding:tmStepsConfig?.vertical?'0 16rpx':'16rpx',
		  }"
		  class="tmStepsItemLabelBox"
	>

		<view :style="{lineHeight:1,color:_dotColor,fontSize:_labelSize,marginTop:'2px'}">
			<!--
			@slot 默认标题插槽
			@binding {boolean} active 是否激活状态
			-->
			<slot :active="isIncurrentBefore" name="default">
				{{_label}}
			</slot>
		</view>
		<view :style="{lineHeight:1,color:_dotColor,fontSize:_descSize,paddingTop:'6px'}">
			<!--
			@slot 辅助信息标签
			@binding {boolean} active 是否激活状态
			-->
			<slot :active="isIncurrentBefore" name="desc">
				{{_desc}}
			</slot>
		</view>
	</view>
	<view
		v-if="showLine"
		class="tmStepsItemLine"
		:class="[
			{'vertical':tmStepsConfig?.vertical}
		]"
		:style="{
			left:tmStepsConfig?.vertical?`calc(${_iconsSize} / 2)`:`calc(50% + ${_iconsSize} / 2 + 8px)`,
			width:tmStepsConfig?.vertical?'1px':`calc(100% - ${_iconsSize} - 16px)`,
			height:tmStepsConfig?.vertical?`calc(100% - ${_iconsSize} - 16px)`:'1px',
			top:tmStepsConfig?.vertical?`calc(${_iconsSize} / 2 + 16px)`:`calc(${_iconsSize} / 2)`,
			backgroundColor:_dotColor,
		}"
	></view>


</view>
</template>

<style scoped lang="scss">
.tmStepsItem{
	box-sizing: border-box;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	line-height: 1;
	position: relative;
	&.vertical{
		flex-direction: row;
		align-items: self-start;

	}
}
.tmStepsItemDot{
	border-radius: 50%;
}
.tmStepsItemLine{
	position: absolute;
	background-color: red;
	transform: translateY(50%);
	&.vertical{
		transform: translateY(0%) translateX(-50%);
	}
}
.tmStepsItemLabelBox{
	box-sizing: border-box;

	text-align: center;
	line-height: 1.2;
	&.vertical{
		text-align: left;
	}
}
</style>