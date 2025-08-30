<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, PropType, getCurrentInstance, nextTick } from 'vue';
import { covetUniNumber, getUnit, getUid } from "../../libs/tool";
import { useTmConfig } from "../../libs/config";

const { config } = useTmConfig()
type TM_PICKER_X_ITEM = Record<string, any>

const boxHeight = ref(0)
const id = ('tmPickerItem-' + getUid())
const nowCurrentIndex = ref([0])
let tid = 0
let tid2 = 1

const emits = defineEmits(['changeDeep'])
const props = defineProps({

	list: {
		type: Array as PropType<TM_PICKER_X_ITEM[][]>,
		default: (): TM_PICKER_X_ITEM[] => [] as TM_PICKER_X_ITEM[]
	},

	selectedIndex: {
		type: Array as PropType<number[]>,
		default: (): number[] => [] as number[]
	},
	cellUnits: {
		type: Array as PropType<string[]>,
		default: (): string[] => [] as string[]
	},
	fontSize: {
		type: String,
		default: "30"
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
	},
})
const _fontSize = computed((): string => {
	let fontSize = covetUniNumber(props.fontSize, config.unit)

	if (config.fontSizeScale == 1) return fontSize
	let sizeNumber = parseInt(fontSize)
	if (isNaN(sizeNumber)) {
		sizeNumber = 16
	}
	return (sizeNumber * config.fontSizeScale).toString() + getUnit(props.fontSize)
})

const refreshKey = ref(12)

const _cellUnits = computed((): string[] => props.cellUnits as string[])

const _list = computed((): TM_PICKER_X_ITEM[][] => props.list.slice(0))

const _isDark = computed((): boolean => config.mode == 'dark')

const _maskStyle = computed((): string => {
	if (_isDark.value) {
		return 'background-image:linear-gradient(180deg,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)),linear-gradient(0deg, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))'
	}
	return 'background-image:linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0)),linear-gradient(0deg, rgba(255,255,255,0),rgba(255,255,255,0))'
})
const _selectedMaskStyle = computed((): string => {
	return _isDark.value ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
})

// 工具：比较两个数组是否一致
function arraysEqual(a: number[], b: number[]): boolean {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) return false;
	}
	return true;
}

// 工具：将索引限制在范围内，并保证长度与列数一致
function sanitizeIndex(indexes: number[], list: TM_PICKER_X_ITEM[][]): number[] {
	const cols = list.length;
	const result: number[] = new Array(cols).fill(0);
	for (let i = 0; i < cols; i++) {
		const colLen = list[i]?.length ?? 0;
		const n = indexes[i] ?? 0;
		result[i] = colLen > 0 ? Math.min(Math.max(0, n), colLen - 1) : 0;
	}
	return result;
}

const onChange = (event: any) => {
	if (event.detail.value.length == 0 || _list.value.length == 0) return;
	let indexs: number[] = event.detail.value!;
	const fixed = sanitizeIndex(indexs, _list.value);
	if (arraysEqual(fixed, nowCurrentIndex.value)) return;
	nowCurrentIndex.value = fixed;
	emits("changeDeep", fixed);
}

onMounted(() => {
	// 初始索引校正
	nowCurrentIndex.value = sanitizeIndex(props.selectedIndex.slice(0), _list.value);
	// 兼容微信小程序：强制刷新一次 value 来确保滚动定位到中间
	// #ifdef MP-WEIXIN
	nextTick(() => {
		refreshKey.value += 1;
		const snapshot = nowCurrentIndex.value.slice(0);
		// 通过短暂置空再还原，触发 picker-view 重算
		nowCurrentIndex.value = snapshot;
		setTimeout(() => {
			refreshKey.value += 1;
			nowCurrentIndex.value = sanitizeIndex(snapshot, _list.value);
		}, 0);
	});
	// #endif
})
onBeforeUnmount(() => {
	clearTimeout(tid)
	clearTimeout(tid2)
})

// 仅浅监听，提升性能，并在变更时校正索引与强制重绘
watch(() => props.selectedIndex, (newvalue: number[]) => {
	const fixed = sanitizeIndex((newvalue || []).slice(0), _list.value);
	if (arraysEqual(fixed, nowCurrentIndex.value)) return;
	nowCurrentIndex.value = fixed;
	// #ifdef MP-WEIXIN
	nextTick(() => {
		refreshKey.value += 1;
	});
	// #endif
}, { deep: false })

watch(_list, (newvalue) => {
	// 当列数据变化时，按照当前索引做一次范围校正
	const fixed = sanitizeIndex(nowCurrentIndex.value.slice(0), _list.value);
	nowCurrentIndex.value = fixed;
	refreshKey.value += 1;
}, { deep: false })

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
	<view>
		<view class="tmPickerViewUnit" v-if="_cellUnits.length>0">
			<view v-for="(item, index) in _cellUnits" :key="index"  style="flex: 1;text-align: center;">
				<tm-text  font-size="24" class="tmPickerViewUnitText">{{ item }}</tm-text>
			</view>
		</view>
		<picker-view indicator-class="indicatorClass" :key="refreshKey" :immediate-change="true" :value="nowCurrentIndex" @change="onChange"
			:style="{ height: '250px', width: '100%' }" :mask-style="`${_maskStyle}`"
			:indicator-style="`height:50px;border:none;border-radius:10px`">
			<picker-view-column v-for="(item2, index2) in _list" :key="index2">
				<view :style="{ background: nowCurrentIndex[index2] == index ? _selectedMaskStyle : 'none',margin:'0 4px' }"
					v-for="(item, index) in item2" :key="index" class="tmPickerViewWrapCoumn">
					<text class="tmPickerViewWrapCoumnText" :style="{
						fontSize: _fontSize,
						lineHeight: 1,
						fontWeight: nowCurrentIndex[index2] == index ? 'bold' : 'inherit',
						opacity: item.disabled ? 0.4 : (nowCurrentIndex[index2] == index ? 1 : 0.6),
						color: _isDark ? 'rgba(255,255,255,0.8)' : '#000000'
					}">
						{{ item[rangText]||"" }}
					</text>
				</view>
			</picker-view-column>
		</picker-view>
	</view>
</template>
<style>
.indicatorClass:after,
.indicatorClass:before {
	content:'';
	height: 0px;
	width: 100%;
	border-color: transparent;
}

.tmPickerViewUnit {
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 8px;
}

.tmPickerViewUnitText {
	font-size: 12px;
	color: #888;
	font-weight: bold;
}

.tmPickerViewWrapCoumnText {
	margin: 0 6px;
	width: 100%;
	text-align: center;

	display: -webkit-box;
	line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-all;

}

.tmPickerView {
	display: flex;
	flex-direction: row;
}

.tmPickerViewWrap {
	position: relative;
}

.tmPickerContent {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 5;
}

.tmPickerMasker {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	pointer-events: none;
	height: 100%;
	width: 100%;
	top: 0px;
	left: 0px;
	position: absolute;
}

.xPickErBar {
	background-color: #f5f5f5;
	border-radius: 10px;
	margin: 0 3px;
	flex: 1;

}

.tmPickerContent {
	transition-duration: 350ms;
	transition-property: left, right, top, bottom;
	transition-timing-function: cubic-bezier(0, 0.55, 0.45, 1);
}

.tmPickerViewWrapCoumn {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 50px;
	border-radius: 10px;
	/* background-color: #f5f5f5; */
}
</style>