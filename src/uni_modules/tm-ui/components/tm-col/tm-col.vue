<template>
    <view @click.stop="onClick" class="tmCol" :style="_style">
        <!-- @slot 默认插槽 -->
        <slot></slot>
    </view>
</template>
<script setup lang="ts">
import { computed, ComputedRef, inject } from 'vue';
/**
 * @displayName 布局Col
 * @exportName tm-col
 * @page tm-row
 * @category 常用组件
 * @description 快速排版布局利器,内只能放置在父组件tmRow中
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: "TmCol",options: {
    styleIsolation: "apply-shared",
    virtualHost: true,
    addGlobalClass: true,
    multipleSlots: true,
  } });
const emits = defineEmits([
    /**
     * 点击事件
     * @property {object} evt 事件参数
     */
    'click',

])
const attrs = defineProps({
    /**
     * 列宽，它是根据row定义的总列宽计算具体的宽度值。
     */
    span: {
        type: [Number, String],
        default: 1
    },
})
const tmRowColWidth = inject<ComputedRef<number>>('tmRowColWidth', () => computed((): number => 5), true);
const tmRowColGutter = inject<ComputedRef<string[]>>('tmRowColGutter', () => computed((): string[] => ['0px', '0px']), true);
const _style = computed(() => {
    const columns = tmRowColWidth.value
    let span = typeof attrs.span == 'string' ? parseInt(attrs.span, 10) : Number(attrs.span)
    if (!Number.isFinite(span) || span < 0) span = 0
    if (Number.isFinite(columns) && columns > 0 && span > columns) span = columns

    const style: Record<string, string> = {}
    if (!Number.isFinite(columns) || columns <= 0) {
        style.width = span === 0 ? '0%' : '100%'
    } else {
        style.width = `${span / columns * 100}%`
    }

    if (span !== 0) {
        const [padY, padX] = tmRowColGutter.value
        if (padY !== '0px') {
            style['padding-top'] = padY
            style['padding-bottom'] = padY
        }
        if (padX !== '0px') {
            style['padding-left'] = padX
            style['padding-right'] = padX
        }
    }
    return style
})
const onClick = (evt: MouseEvent) => {
    emits('click', evt);
}
</script>

<style lang="scss" scoped>
.tmCol {
    flex-shrink: 0;
    box-sizing: border-box;
    min-width: 0;
}
</style>
