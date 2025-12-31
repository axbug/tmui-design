<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->

<script setup lang="ts">
import { computed, getCurrentInstance, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useTmConfig } from '../../libs/config'
import { getDefaultColor } from '../../libs/colors'
import { PropsType } from './propsType'
import { debounce, throttle } from '../../useFun/toolUse'
import { covetUniNumber } from '../../libs/tool'

/**
 * @displayName 进度条
 * @exportName tm-progress
 * @category 反馈组件
 * @description 通用进度条组件。
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({
    name: 'TmProgress', options: {
        styleIsolation: "apply-shared",
        virtualHost: true,
        addGlobalClass: true,
        multipleSlots: true,
    }
});
const { config } = useTmConfig()

const props = withDefaults(defineProps<PropsType>(), {
    modelValue: 0,
    min: 0,
    max: 100,
    color: "",
    bgColor: "info",
    darkBgColor: "",
    showLabel: false,
    labelColor: "#333",
    labelFontSize: 24,
    size: 8,
    round: 8,
    duration: 250,
    labelInside:false,
    linearColor:''
})
const emit = defineEmits<{
	/**
     * 等同v-model
     * @description 进度条值改变事件
     */
	(e: 'update:modelValue', val: number): void
}>()
const _props = computed(() => props);
const _bgColor = computed(() => {
    let color = props.bgColor;
    if (config.mode == 'dark') {
        if (props.darkBgColor) {
            color = props.darkBgColor
        } else {
            color = config.inputDarkColor
        }
    } else if (!color) {
        color = 'info'
    }
    return getDefaultColor(color);
})
const _color = computed(() => {
    let color = props.color || 'primary';
    return getDefaultColor(color);
})
const _labelColor = computed(() => {
    return getDefaultColor(props.labelColor||"#333");
})

const _size = computed(() => {
    return covetUniNumber(props.size, config.unit)
})
const _round = computed(() => {
    return covetUniNumber(props.round, config.unit)
})
const _labelFontSize = computed(() => {
    return covetUniNumber(props.labelFontSize, config.unit)
})
const getPercent = (val: number) => {
    let percent = (val - props.min) / (props.max - props.min)
    return percent
}
const getPercentVal = (percent: number) => {
    return percent * (props.max - props.min) + props.min
}
const currentVal = ref(props.modelValue)
const _currentVal = computed({
    get() {
        return currentVal.value
    },
    set(val) {
        currentVal.value = val
        emit('update:modelValue', val)
    }
})
const percent = computed(()=>{
    return getPercent(_currentVal.value)*100
})
    
watch(()=>props.modelValue,(val:number)=>{
    if(val == currentVal.value) return;
    _currentVal.value = val
})

</script>
<template>
    <view class="tmProgress">
        <view 
        class="tmProgressBar"
        :style="{
            backgroundColor: _bgColor,
            height:_size,
            borderRadius: _round
        }"
        >
            <view
            class="tmProgressBarWrap"
            :style="{
                width: percent + '%', 
                backgroundColor: _color,
                backgroundImage: _props.linearColor||'none',
                borderRadius: _round,
                transitionDuration:`${_props.duration}ms`
            }"
            >
                <text v-if="_props.labelInside&&_props.showLabel" class="tmProgressBarWrapLable" style="color: #fff;">{{percent.toFixed(0)}}%</text>
            </view>
        </view>
        <view v-if="!_props.labelInside&&_props.showLabel" class="tmProgressLabel" :style="{color:_labelColor,fontSize:_labelFontSize}">
            <!-- 
            @slot 标签插槽
            @binding {value} number 值
            @binding {percentage} number 百分比
            -->
            <slot :percentage="percent" :value="_currentVal">
                {{percent.toFixed(0)}}%
            </slot>
        </view>
    </view>
</template>
<style lang="scss" scoped>
    .tmProgress{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .tmProgressBarWrap{
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        transition-timing-function: ease;
        transition-property: width;
        
    }
    .tmProgressBarWrapLable{
        padding-right: 0px;
        transform: scale(0.55);
        line-height: 1;
    }
    .tmProgressBar{
        flex:1;
        overflow: hidden;
    }
    .tmProgressLabel{
        flex-shrink: 0;
        padding-left: 8px;
        line-height: 1;

    }
</style>