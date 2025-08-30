<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, PropType, getCurrentInstance, nextTick, shallowRef } from 'vue';
import { useTmConfig } from "../../libs/config";
import pickerItem from './picker-item.vue';

type TM_PICKER_X_ITEM = Record<string, any>
type TM_PICKER_ITEM_INFO = Record<string, any>

const proxy = getCurrentInstance()?.proxy ?? null;

/**
 * @displayName 选择器容器
 * @exportName tm-picker-view
 * @category 表单组件
 * @description 可单列或者多列
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: 'TmPickerView' });

const { config } = useTmConfig()

// 使用 shallowRef 减少深层响应式开销
const nowValue = shallowRef<Array<string | number>>([])
const _modelValueIndex = shallowRef<Array<number>>([])
const _nowShowList = shallowRef<Record<string,any>[][]>([])

// 缓存最大深度，避免重复计算
const _maxDeep = ref(0)

// 缓存映射表，提升查找性能
const idToIndexCache = new Map<string, { indexs: number[], data: TM_PICKER_X_ITEM[][], strs: string[] }>()
const indexToIdCache = new Map<string, { ids: Array<string|number>, data: TM_PICKER_X_ITEM[][], strs: string[] }>()

const emits = defineEmits([
    /**
     * 选项变化时触发
     * @param {string[]} ids - 当前选中项的id
     */
    'change',
    /**
     * 等同v-model:model-str
     * 只对外输出当前回选区的选中项的文本，不要外部改变此值。
     */
    'update:modelStr',
    'update:modelValue'
])

const props = defineProps({
    /**
     * 数据项
     * 格式类型为：PICKER_ITEM_INFO
     */
    list: {
        type: Array as PropType<TM_PICKER_ITEM_INFO[]>,
        default: (): TM_PICKER_ITEM_INFO[] => []
    },
    /**
     * 当前选中项的id值
     */
    modelValue: {
        type: Array<string|number>,
        default: (): string[] => []
    },
    /**
     * 当前选中项的标题文本组
     */
    modelStr: {
        type: String,
        default: ""
    },
    /**
     * 显示在顶部的单位名称
     */
    cellUnits: {
        type: Array as PropType<string[]>,
        default: (): string[] => []
    },
    /**
     * 项目的字体号大小
     */
    fontSize: {
        type: String,
        default: "32"
    },
    /**
     * 自定义标识id
     */
    rangKey: {
        type: String,
        default: "id"
    },
    /**
     * 自定义标识文本字段名
     */
    rangText: {
        type: String,
        default: "title"
    }
})

// 使用 computed 避免重复计算
const _cellUnits = computed(() => props.cellUnits)
const _list = computed(() => props.list)

// 计算最大深度，使用缓存机制
const calculateMaxDeep = (list: TM_PICKER_ITEM_INFO[]): number => {
    if (list.length === 0) return 0;
    
    function getDeepWidth(nodes: TM_PICKER_X_ITEM[]): number {
        if (!nodes || nodes.length === 0) return 1;
        const node = nodes[0];
        if (node?.children?.length > 0) {
            return 1 + getDeepWidth(node.children);
        }
        return 1;
    }
    
    return getDeepWidth(list);
}

// 清空缓存
const clearCache = () => {
    idToIndexCache.clear();
    indexToIdCache.clear();
}

// 生成缓存键
const generateCacheKey = (ids: Array<string|number>): string => {
    return ids.join(',');
}

const oninitFun = () => {
    // 避免不必要的数组拷贝
    const newValue = [...props.modelValue];
    nowValue.value = newValue;
    
    const currneinexs = getIndexsByids(newValue).indexs;
    _modelValueIndex.value = newValue.length === 0 || currneinexs.length === 0 
        ? new Array(_maxDeep.value).fill(0) 
        : currneinexs;
    
    const { data, strs, ids } = getIdsByindexs(_modelValueIndex.value);
    _nowShowList.value = data;
    
    if (newValue.length === 0) {
        nowValue.value = ids;
        nextTick(() => {
            emits('update:modelStr', strs.join(","));
            emits('update:modelValue', ids);
        });
    }
}

const change = (ixs: number[]) => {
    const { ids, data, strs } = getIdsByindexs(ixs);
    _modelValueIndex.value = getIndexsByids(ids).indexs;
    _nowShowList.value = data;
    nowValue.value = ids;
    
    // 避免不必要的数组拷贝
    emits('update:modelValue', ids);
    emits('update:modelStr', strs.join(","));

    // 优化字符串比较
    if (strs.join('') === props.modelValue.join('')) return;
    emits('change', ids);
}

// 根据id返回索引 - 优化版本
const getIndexsByids = (ids: Array<string|number>): { indexs: Array<number>, data: TM_PICKER_X_ITEM[][], strs: string[] } => {
    if (_list.value.length === 0 || ids.length === 0) {
        return { indexs: [], data: [], strs: [] };
    }

    // 检查缓存
    const cacheKey = generateCacheKey(ids);
    if (idToIndexCache.has(cacheKey)) {
        return idToIndexCache.get(cacheKey)!;
    }

    const result = { indexs: [] as number[], data: [] as TM_PICKER_X_ITEM[][], strs: [] as string[] };
    
    function getIndex(nodes: TM_PICKER_X_ITEM[], depth: number = 0): boolean {
        if (depth >= ids.length || !nodes || nodes.length === 0) return false;
        
        const targetId = ids[depth];
        for (let i = 0; i < nodes.length; i++) {
            const item = nodes[i];
            if (item[props.rangKey] === targetId) {
                result.indexs[depth] = i;
                result.data[depth] = nodes;
                result.strs[depth] = item[props.rangText];
                
                if (item?.children?.length > 0 && depth + 1 < ids.length) {
                    if (getIndex(item.children, depth + 1)) {
                        return true;
                    }
                } else if (depth + 1 === ids.length) {
                    return true;
                }
            }
        }
        return false;
    }
    
    getIndex(_list.value);
    
    // 缓存结果
    idToIndexCache.set(cacheKey, result);
    return result;
}

// 根据索引返回ids - 优化版本
const getIdsByindexs = (indexs: number[]): { ids: Array<string|number>, data: TM_PICKER_X_ITEM[][], strs: string[] } => {
    if (_list.value.length === 0 || indexs.length === 0) {
        return { ids: [], data: [], strs: [] };
    }

    // 检查缓存
    const cacheKey = indexs.join(',');
    if (indexToIdCache.has(cacheKey)) {
        return indexToIdCache.get(cacheKey)!;
    }

    const result = { ids: [] as Array<string|number>, data: [] as TM_PICKER_X_ITEM[][], strs: [] as string[] };
    
    function getIds(nodes: TM_PICKER_X_ITEM[], depth: number = 0): void {
        if (depth >= indexs.length || !nodes || nodes.length === 0) return;
        
        const currentIndex = indexs[depth];
        const safeIndex = Math.min(currentIndex, nodes.length - 1);
        const item = nodes[safeIndex];
        
        result.ids[depth] = item[props.rangKey];
        result.data[depth] = nodes;
        result.strs[depth] = item[props.rangText];
        
        if (item?.children?.length > 0 && depth + 1 < indexs.length) {
            getIds(item.children, depth + 1);
        }
    }
    
    getIds(_list.value);
    
    // 缓存结果
    indexToIdCache.set(cacheKey, result);
    return result;
}

const getNowCurrent = () => {
    return getIdsByindexs(_modelValueIndex.value);
}

onMounted(() => {
    // 计算并缓存最大深度
    _maxDeep.value = calculateMaxDeep(props.list);
    oninitFun();
    
    // 使用防抖优化 resize 事件
    let resizeTimer: number;
    const debouncedResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(oninitFun, 100);
    };
    
    uni.$on('onResize', debouncedResize);
    
    // 清理函数
    onBeforeUnmount(() => {
        clearTimeout(resizeTimer);
        uni.$off('onResize', debouncedResize);
        clearCache();
    });
});

// 优化 watch，减少深度监听
watch(() => props.modelValue, (newValue: Array<string | number>) => {
    // 优化比较逻辑
    if (newValue.length !== nowValue.value.length || 
        newValue.some((val, index) => val !== nowValue.value[index])) {
        
        nowValue.value = [...newValue];
        
        const defaultIndexs = newValue.length === 0 
            ? new Array(_maxDeep.value).fill(0) 
            : getIndexsByids(newValue).indexs;
        
        _modelValueIndex.value = defaultIndexs;
        const { data, strs } = getIdsByindexs(_modelValueIndex.value);
        _nowShowList.value = data;
        emits('update:modelStr', strs.join(","));
    }
}, { deep: false }); // 改为浅层监听

watch(() => props.list, (newValue) => {
    // 清空缓存
    clearCache();
    // 重新计算最大深度
    _maxDeep.value = calculateMaxDeep(newValue);
    oninitFun();
}, { deep: false }); // 改为浅层监听

defineExpose({ getIndexsByids, getIdsByindexs, getNowCurrent, onInit: oninitFun, clearCache });
</script>
<script lang="ts">
export default {
    options: {
        styleIsolation: "apply-shared",
        virtualHost: true,
        addGlobalClass: true,
        multipleSlots: true,
    },
};
</script>
<template>
    <view class="tmPickerView">
        <picker-item :rangKey="props.rangKey" :rangText="props.rangText" 
            :font-size="props.fontSize" :cellUnits="_cellUnits" @changeDeep="change"
            :selectedIndex="_modelValueIndex" :list="_nowShowList"
            class="tmPickerViewItem"></picker-item>
    </view>
</template>
<style scoped>

</style>