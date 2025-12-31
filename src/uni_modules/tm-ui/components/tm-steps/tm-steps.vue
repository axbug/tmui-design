<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->

<script setup lang="ts">
import { PropsTypes } from './propsType'
import { computed, provide, ref, watch } from 'vue'
import { useTmConfig } from '../../libs/config'

/**
 * @displayName 步骤条
 * @exportName tm-steps
 * @category 展示组件
 * @description 导航，步骤状态显示使用
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: 'TmSteps',options: {
	styleIsolation: "apply-shared",
	virtualHost: true,
	addGlobalClass: true,
	multipleSlots: true,
} });
const props = withDefaults(defineProps<PropsTypes>(),{
	modelValue:-1,
	icon: 'checkbox-blank-circle-line',
	activeIcon: 'checkbox-circle-fill',
	iconSize: '28',
	labelSize: '26',
	descSize: '22',
	color: '#a6a6a6',
	activeColor: '',
	vertical: false,
	reverse: false,
	disabled: true,
	showFooter:true
})
const emits = defineEmits([
	/**
	 * 切换改变时触发
	 * @param {number} index 当前索引
	 * */
	'change',
	/**
	 * 等同v-model
	 */
	'update:modelValue'
])
const {config} = useTmConfig()
const _props = computed(()=>props)
provide('tmStepsConfig',computed(():PropsTypes =>_props.value))
// 当前子节点的进度状态。
const childrenCurrentStatus = ref<string[]>([])
const currentIndex = ref<number>(props.modelValue)
provide('tmStepsCurrent',computed(()=>currentIndex.value))
provide('childrenCurrentStatus',computed(()=>childrenCurrentStatus.value))
const _current = computed({
	get(){
		return currentIndex.value
	},
	set(val:number){
		currentIndex.value = val;
		emits('update:modelValue',val)
	}
})
const updateCurrent = (id:string)=>{
	let index = childrenCurrentStatus.value.findIndex((item:string)=>item === id)
	if(index !== -1){
		_current.value = index
	}
}
const addChildren = (id:string)=>{
	let index = childrenCurrentStatus.value.findIndex((item:string)=>item === id)
	if(index === -1){
		childrenCurrentStatus.value.push(id)
	}
}
const removeChildren = (id:string)=>{
	let index = childrenCurrentStatus.value.findIndex((item:string)=>item === id)
	if(index !== -1){
		childrenCurrentStatus.value.splice(index,1)
	}
}

watch(()=>props.modelValue,(val:number)=>{
	_current.value = val
})
defineExpose({
	addChildren,removeChildren,updateCurrent,
	changeEmit(){
		emits('change',_current.value)
	}
})
</script>

<template>
<view class="tmSteps" :class="[{'vertical':_props.vertical,'reverse':_props.reverse}]">
	<!--
	@slot 仅可放置子节点tm-steps-item,不可嵌套子节点。
	-->
	<slot></slot>
</view>
</template>

<style scoped lang="scss">
.tmSteps{
	display: flex;
	flex-direction: row;
	box-sizing: border-box;
	&.vertical{
		flex-direction: column;

	}
}
</style>