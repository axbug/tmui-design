<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, PropType, getCurrentInstance, ComponentInstance, onUpdated, nextTick, VueElement, inject } from 'vue';
import { arrayNumberValid, arrayNumberValidByStyleMP, covetUniNumber, arrayNumberValidByStyleBorderColor, linearValid, getUnit, getUid } from "../../libs/tool";
import { getDefaultColor, getDefaultColorObj, getOutlineColorObj, getTextColorObj, getThinColorObj } from "../../libs/colors";
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
const wrapTotalWidth = ref(0)
const nowValue = ref<Array<string | number>>([])
const _modelValueIndex = ref<Array<number>>([])
const okNodeInfo = ref(false)
const tid = ref(0)
const parentIndex = ref(0)
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
        default: (): TM_PICKER_ITEM_INFO[] => [] as TM_PICKER_ITEM_INFO[]
    },
    /**
     * 当前选中项的id值
     */
    modelValue: {
        type: Array as PropType<string[]>,
        default: (): string[] => [] as string[]
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
        default: (): string[] => [] as string[]
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

const _cellUnits = computed(() => props.cellUnits)
const _list = computed(() => props.list)
const _maxDeep = computed(() => {
    if (_list.value.length == 0) return 0;
    function getdiepWidth(list: TM_PICKER_X_ITEM[]): number {
        let deepIndex = 1;
        const node = list[0];
        if (node?.children?.length > 0) {
            deepIndex += getdiepWidth(node.children);
        }

        return deepIndex;
    }
    return getdiepWidth(_list.value.slice(0));
})
const _deepWidth = computed(() => {
    if (_list.value.length == 0) return 0;
    if (_list.value.length == 0) return wrapTotalWidth.value;
    function getdiepWidth(list: TM_PICKER_X_ITEM[]): number {
        let deepIndex = 1;
        const node = list[0];
        if (Array.isArray(node?.children) && node.children.length > 0) {
            deepIndex += getdiepWidth(node.children);
        }

        return deepIndex;
    }
    return wrapTotalWidth.value / Math.max(1, getdiepWidth(_list.value))
})
const setChangeStrvmodel = () => {
    let listitem = getModelStr()
    let idvalue = [] as string[]
    let strs = [] as string[]
    listitem.forEach((el) => {
        idvalue.push(el[props.rangKey])
        strs.push(el[props.rangText])
    })

    emits('update:modelStr', strs.join(","))
}
const oninitFun = () => {
    nowValue.value = props.modelValue.slice(0)
    _modelValueIndex.value = chuliIndex(getIdeByindex());
    setChangeStrvmodel()
    getNodeInfo();
}
const change = (ids: number[]) => {

    _modelValueIndex.value = ids;
    let listitem = getModelStr()

    let idvalue = [] as string[]
    let strs = [] as string[]
    listitem.forEach((el) => {
        idvalue.push(el[props.rangKey])
        strs.push(el[props.rangText])
    })

    /**
     * 等同v-model
     */
    emits('update:modelValue', idvalue)

    emits('update:modelStr', strs.join(","))
    if (idvalue.join('') == props.modelValue.join('')) return;
    clearTimeout(tid.value);
    tid.value = setTimeout(function () {
        /**
         * 选项变化时触发
         * @param {string[]} ids 当前选中项的id
         */
        emits('change', idvalue)

    }, 30);
}
const chuliIndex = (indexs: number[]): number[] => {
    let ids = indexs.slice(0)
    let val = nowValue.value.slice(0)
    for (let i = 0; i < _maxDeep.value; i++) {
        if (i >= val.length) {
            ids.push(0)
        }
    }

    return ids;
}
const getIdeByindex = (): number[] => {
    let index = 0;
    let val = nowValue.value.slice(0)
    let indexs = [] as number[]
    function getIndex(nodes: TM_PICKER_X_ITEM[]) {
        if (val.length <= index || val.length == 0) return;
        let id = val[index]
        let sindex = 0
        for (let i = 0; i < nodes.length; i++) {
            let item = nodes[i]
            if (item[props.rangKey] == id) {
                sindex = i;
                indexs.push(sindex)
                if (item?.children?.length > 0) {
                    index += 1
                    getIndex(item.children)
                }
            }
        }
    }
    getIndex(_list.value)
    return indexs;
}
const getModelStr = (): TM_PICKER_X_ITEM[] => {
    let ids = _modelValueIndex.value.slice(0)
    let index = 0;

    let selectedList = [] as TM_PICKER_X_ITEM[]



    function getStr(nodes: TM_PICKER_X_ITEM[]) {
        if (ids.length <= index || ids.length == 0) return;
        let idx = ids[index]
        idx = Math.max(0, Math.min(nodes.length - 1, idx));
        let item = nodes[idx];
        selectedList.push(item)
        if (item?.children?.length > 0) {
            index += 1
            getStr(item.children)
        }
    }
    getStr(_list.value)
    return selectedList
}
const conutChangeEnd = (n: number) => {

}
const getNodeInfo = () => {
    uni.createSelectorQuery().in(proxy)
        .select(".tmPickerView")
        .boundingClientRect().exec((ret) => {
            let nodeinfo = ret[0] as UniApp.NodeInfo
            wrapTotalWidth.value = nodeinfo.width!
            okNodeInfo.value = true;
        })
}


onMounted(() => {
    oninitFun();
    uni.$on('onResize', oninitFun)
})
onBeforeUnmount(() => {
    clearTimeout(tid.value);
    uni.$off('onResize', oninitFun)
})
watch(() => props.modelValue, (newValue: Array<string | number>) => {
    if (newValue.join('') == nowValue.value.join('')) return;
    nowValue.value = newValue.slice(0);
    _modelValueIndex.value = chuliIndex(getIdeByindex());
    setChangeStrvmodel()
}, { deep: true })

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
        <picker-item :rangKey="props.rangKey" :rangText="props.rangText" @countChange="conutChangeEnd"
            :font-size="props.fontSize" :cellUnits="_cellUnits" v-if="okNodeInfo" @changeDeep="change"
            :selectedIndex="_modelValueIndex" :parentIndex="parentIndex" :wrapWight="_deepWidth" :list="_list"
            class="tmPickerViewItem"></picker-item>
    </view>
</template>
<style scoped>
.tmPickerView {
    display: flex;
}
</style>