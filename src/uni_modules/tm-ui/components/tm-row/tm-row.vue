<template>
    <view @click="onClick" class="tmRow" :style="_style">
        <!-- @slot 默认插槽,请允许放置tmCol组件 -->
        <slot></slot>
    </view>
</template>
<script setup lang="ts">
import { computed, PropType, provide } from 'vue';
import {
    arrayNumber,
    getUnit
} from "../../libs/tool";
/**
 * @displayName 布局Row
 * @exportName tm-row
 * @category 常用组件
 * @description 快速排版布局利器,内只能放置tmCol组件,默认是5列栅格,可以自行更改
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: "TmRow", options: { styleIsolation: 'apply-shared', virtualHost: true, addGlobalClass: true, multipleSlots: true } });
const emits = defineEmits([
    /**
     * 点击事件
     * @property {object} evt 事件参数
     */
    'click',

])
const attrs = defineProps({
    /**
     * 默认列数
     */
    column: {
        type: [Number, String],
        default: 5
    },
    /**
     * 子元素左右对齐排列
     */
    justify: {
        type: String as PropType<"flex-start" | "flex-end" | "center" | "space-between" | "space-around">,
        default: "flex-start"
    },
    /**
     * 子元素上下对齐排列
     * 是align-items：值
     */
    align: {
        type: String as PropType<"center" | "flex-start" | "flex-end" | "stretch" | "baseline">,
        default: "flex-start"
    },
    /**
     * 是否自动断行.
     */
    wrap: {
        type: Boolean,
        default: true
    },
    /**
     * 列间距。[纵向, 横向]，单项表示两个方向相同。
     */
    gutter: {
        type: [String, Number, Array<string | number>],
        default: '0'
    }
})

const halfUnit = (val: string): string => {
    const n = parseFloat(val)
    if (!n) return '0px'
    return `${n / 2}${getUnit(val, 'px')}`
}

const tmRowColWidth = computed((): number => {
    const n = typeof attrs.column === 'string' ? parseInt(attrs.column, 10) : Number(attrs.column)
    return Number.isFinite(n) && n > 0 ? n : 5
})
const _gutterPad = computed(() => arrayNumber(attrs.gutter).map(halfUnit))
const _style = computed(() => {
    const [padY, padX] = _gutterPad.value
    const style: Record<string, string> = {
        'flex-wrap': attrs.wrap ? 'wrap' : 'nowrap',
        'justify-content': attrs.justify,
        'align-items': attrs.align,
    }
    if (padY !== '0px') {
        style['margin-top'] = `-${padY}`
        style['margin-bottom'] = `-${padY}`
    }
    if (padX !== '0px') {
        style['margin-left'] = `-${padX}`
        style['margin-right'] = `-${padX}`
    }
    return style
})
const onClick = (evt: MouseEvent) => {
    emits('click', evt);
}

provide("tmRowColWidth", tmRowColWidth)
provide("tmRowColGutter", _gutterPad)
</script>

<style lang="scss" scoped>
.tmRow {
    display: flex;
}
</style>
