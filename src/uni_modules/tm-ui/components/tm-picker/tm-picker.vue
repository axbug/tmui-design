<script lang="ts" setup>
import { ref, computed, onMounted, watch, PropType } from 'vue';
type TM_PICKER_X_ITEM = Record<string, any>
type TM_PICKER_ITEM_INFO = Record<string, any>

/**
 * @displayName 选择器
 * @exportName tm-picker
 * @category 表单组件
 * @description 可单列或者多列
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: 'TmPicker' });

const props = defineProps({
    /**
     * 数据
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
     * 当前选中项的回显文本等同v-model:model-str
     * 请不要更改此值，此值只对外输出显示。
     * 如果空值，将内部首次递归渲染回显文本。如果你后台返回，就不会计算。
     * 因此如果对性能有要求的请务必让后台在首次显示时先回显文本，
     * 这样内部在第一次时不会递归计算回显文本，提高性能。
     */
    modelStr: {
        type: String,
        default: ""
    },
    /**
     * 当前打开的状态。
     * 等同v-model:model-show
     */
    modelShow: {
        type: Boolean,
        default: false
    },
    /**
     * 顶部标题
     */
    title: {
        type: String,
        default: "请选择"
    },
    /**
     * 是否懒加载内部内容。
     * 当前你的列表内容非常多，且影响打开的动画性能时，请务必
     * 设置此项为true，以获得流畅视觉效果。如果选择数据较少没有必要打开
     */
    lazyContent: {
        type: Boolean,
        default: false
    },
    /**
     * 显示在顶部的单位名称
     */
    cellUnits: {
        type: Array as PropType<string[]>,
        default: (): string[] => [] as string[]
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
});

const emit = defineEmits([
    /**
     * 取消时触发
     */
    'cancel',
    /**
     * 确认触发
     * @param {string[]} ids 当前选中项的id值
     */
    'confirm',
    /**
     * 滑动变换时触发
     * @param {string[]} ids 当前选中项的id值
     */
    'change',
    /**
     * 变量控制打开状态
     * 等同v-model:model-show
     */
    'update:modelShow',
    /**
     * 等同v-model:model-str
     * 只对外输出当前回选区的选中项的文本，不要外部改变此值。
     */
    'update:modelStr',
    'update:modelValue'
]);

const show = ref(false);
const nowValue = ref<string[]>([]);
const modelStrValue = ref("");
const yanchiDuration = ref(false);

const _list = computed(() => props.list.slice(0));
const _lazyContent = computed(() => props.lazyContent);
const _cellUnits = computed(() => props.cellUnits);

watch(() => props.modelValue, (newvalue: string[]) => {
    if (newvalue.join('') == nowValue.value.join('')) return;
    nowValue.value = newvalue.slice(0);
    let str = getIdeBystr();
    emit('update:modelStr', str.join(','));
    modelStrValue.value = str.join(',');
});

watch(() => props.modelShow, (newValue: boolean) => {
    if (newValue == show.value) return;
    show.value = newValue;
});

watch(_list, () => {
    if (show.value) {
        return;
    }
    if (_list.value.length == 0) {
        emit('update:modelStr', '');
        modelStrValue.value = '';
        return;
    }
    if (_list.value.length > 0) {
        onSetDefaultStr();
    }
});

onMounted(() => {
    nowValue.value = props.modelValue.slice(0);
    yanchiDuration.value = _lazyContent.value ? false : true;
    onSetDefaultStr();
});

function onSetDefaultStr() {
    if (props.modelStr == "" && _list.value.length > 0) {
        let str = getIdeBystr();
        emit('update:modelStr', str.join(','));
        modelStrValue.value = str.join(',');
    }
}

function openShow() {
    show.value = true;
    emit('update:modelShow', true);
}

function onClose() {
    emit('update:modelShow', false);
    nowValue.value = props.modelValue.slice(0);
    if (_lazyContent.value) {
        yanchiDuration.value = false;
    }
}

function strChange(str: string) {
    modelStrValue.value = str;
}

function onOpen() {
    yanchiDuration.value = true;
}

function mchange(ids: string[]) {
    emit('change', ids.slice(0));
}

function onCancel() {
    emit('cancel');
    nowValue.value = props.modelValue.slice(0);
}

function getDefaultSeledids(): string[] {
    let list = _list.value;
    let ids = [] as string[];
    function getid(listitem: TM_PICKER_ITEM_INFO[]) {
        if (listitem.length == 0) return;
        let id = listitem[0].id;
        ids.push(id == null ? '0' : id!);

        let children = listitem[0].children == null ? ([] as TM_PICKER_ITEM_INFO[]) : listitem[0].children!;
        if (children.length > 0) {
            getid(children);
        }
    }
    getid(list);
    return ids;
}

function onConfirm() {
    let ids = nowValue.value.slice(0);
    let nowModelStr = getIdeBystr();
    ids = ids.length == 0 || nowModelStr.length == 0 ? getDefaultSeledids() : ids;
    nowValue.value = ids;
    emit('update:modelValue', ids);
    emit('update:modelStr', modelStrValue.value);
    emit('confirm', ids);
}

function listDatas(): TM_PICKER_X_ITEM[] {
    if (_list.value.length == 0) return [] as TM_PICKER_X_ITEM[];
    let list = _list.value.slice(0) as TM_PICKER_ITEM_INFO[];
    function addOptionalFieldsToTreeClolone(tree: TM_PICKER_ITEM_INFO[]): TM_PICKER_X_ITEM[] {
        let nowlist = [] as TM_PICKER_X_ITEM[];
        for (let i = 0; i < tree.length; i++) {
            const node = tree[i];
            node.disabled = node.disabled == null ? false : node.disabled! as boolean;
            node.id = node.id == null ? i.toString() : node.id! as string;
            node.children = node.children == null ? ([] as TM_PICKER_ITEM_INFO[]) : node.children! as TM_PICKER_ITEM_INFO[];
            let item = {
                id: node.id!,
                title: node.title,
                disabled: node.disabled!,
                children: [] as TM_PICKER_X_ITEM[]
            } as TM_PICKER_X_ITEM;
            if ((node.children!).length > 0) {
                item.children = addOptionalFieldsToTreeClolone(node.children! as TM_PICKER_ITEM_INFO[]);
            }
            nowlist.push(item);
        }
        return nowlist;
    }
    return addOptionalFieldsToTreeClolone(list);
}

function getIdeBystr(): string[] {
    let list = listDatas();
    if (list.length == 0) return [] as string[];
    let index = 0;
    let val = nowValue.value.slice(0);
    let strs = [] as string[];
    function getIndex(nodes: TM_PICKER_X_ITEM[]) {
        if (val.length <= index || val.length == 0) return;
        let id = val[index];
        let sindex = 0;
        for (let i = 0; i < nodes.length; i++) {
            let item = nodes[i];
            if (item.id == id) {
                sindex = i;
                strs.push(item.title);
                if (item.children.length > 0) {
                    index += 1;
                    getIndex(item.children);
                }
            }
        }
    }
    getIndex(list);
    return strs;
}
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
    <view @click="openShow">
        <!-- 
		 @slot 插槽,默认触发打开选择器。你的默认布局可以放置在这里。
		 @binding {boolean} show - 控制打开关闭状态
		 -->
        <slot></slot>
    </view>
    <tm-drawer @open="onOpen" :widthCoverCenter="true" :disabledScroll="true" max-height="80%" size="850" :title="title"
        @close="onClose" @confirm="onConfirm" @cancel="onCancel" :showFooter="true" v-model:show="show"
        :show-close="true">
        <tm-picker-view v-if="show" :rangKey="rangKey" :rangText="rangText" :cell-units="_cellUnits"
            @update:modelStr="strChange" @change="mchange" v-model="nowValue" :list="_list"></tm-picker-view>
    </tm-drawer>
</template>
<style scoped></style>