<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch, PropType, provide } from 'vue';
import { arrayNumber } from "../../libs/tool";

/**
 * @displayName 多选框组
 * @exportName tm-checkbox-group
 * @page tm-checkbox
 * @category 表单组件
 * @description 可单单独使用,也可多选组合使用
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: 'TmCheckboxGroup',options: {
        styleIsolation: "apply-shared",
        virtualHost: true,
        addGlobalClass: true,
        multipleSlots: true,
    } });

const props = defineProps({
    modelValue: {
        type: [Array<string | number | boolean>],
        default: () => [] as string[],
    },
    direction: {
        type: String as PropType<"row" | "column">,
        default: "row",
    },
    align: {
        type: String as PropType<"flex-start" | "center" | "flex-end">,
        default: "flex-start"
    },
    max: {
        type: Number,
        default: -1,
    },
    /**
     * 排列时之间的间隙，如果是数组第一项是列间隙，第二项是行间隙
     */
    gap: {
        type: [Number, String, Array<string | number>],
        default: 20,
    }
});

const emits = defineEmits(['change', 'update:modelValue']);

const checkvaluelist = ref<Array<string | number | boolean>>([]);
const isDestroy = ref(false);

const _checkSet = computed((): Set<string | number | boolean> => new Set(checkvaluelist.value))
const _gap = computed(() => arrayNumber(props.gap).join(" "))

watch(() => props.modelValue, (newValue) => {
    checkvaluelist.value = newValue;
},{deep:true});

onBeforeUnmount(() => {
    isDestroy.value = true;
});

onMounted(() => {
    checkvaluelist.value = props.modelValue;
    isDestroy.value = false;
});

function addItem(item: string | number | boolean, ischange: boolean) {
    if (!_checkSet.value.has(item)) {
        if (checkvaluelist.value.length >= props.max && props.max > -1 && ischange && checkvaluelist.value.length > 0) {
            checkvaluelist.value.splice(checkvaluelist.value.length - 1, 1);
        }
        checkvaluelist.value.push(item)
    } else {
        const index = checkvaluelist.value.indexOf(item);
        if (index > -1) checkvaluelist.value.splice(index, 1);
    }

    if (ischange) {
        const snapshot = [...checkvaluelist.value]
        emits("update:modelValue", snapshot);
        emits("change", snapshot);
    }
}

function removeItem(item: string | number | boolean) {
    if (_checkSet.value.has(item)) {
        const index = checkvaluelist.value.indexOf(item);
        if (index > -1) checkvaluelist.value.splice(index, 1);
        const snapshot = [...checkvaluelist.value]
        emits("update:modelValue", snapshot);
        emits("change", snapshot);
    }
}

provide("tmCheckboxGroupValue", computed(() => [...checkvaluelist.value]))
provide("tmCheckboxAddItem", addItem)
provide("tmCheckboxRemoveItem",removeItem)

</script>

<template>
    <view class="tmCheckboxGroup"
        :style="{ 'flex-direction': direction, 'align-items': direction == 'row' ? 'flex-start' : undefined, 'justify-content': align, gap: _gap }">
        <slot></slot>
    </view>
</template>

<style>
.tmCheckboxGroup {
    display: flex;
    flex-wrap: wrap;
}
</style>
