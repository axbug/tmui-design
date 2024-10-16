<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, PropType, getCurrentInstance, ComponentInstance, onUpdated, nextTick, VueElement, inject } from 'vue';
import { arrayNumberValid, arrayNumberValidByStyleMP, covetUniNumber, arrayNumberValidByStyleBorderColor, linearValid, getUnit, getUid } from "../../libs/tool";
import { getDefaultColor, getDefaultColorObj, getOutlineColorObj, getTextColorObj, getThinColorObj } from "../../libs/colors";
import { useTmConfig } from "../../libs/config";
import pickerItem from './picker-item.vue';

const { config } = useTmConfig()
type TM_PICKER_X_ITEM = Record<string, any>


const boxHeight = ref(0)
const id = ('tmPickerItem-' + getUid())
const nowCurrentIndex = ref([0])
let tid = 0
let tid2 = 1

const emits = defineEmits(['changeDeep', 'countChange'])
const props = defineProps({

	list: {
		type: Array as PropType<TM_PICKER_X_ITEM[]>,
		default: (): TM_PICKER_X_ITEM[] => [] as TM_PICKER_X_ITEM[]
	},
	wrapWight: {
		type: Number,
		default: 0
	},
	parentIndex: {
		type: Number,
		default: 0
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
    rangKey:{
        type: String,
        default: "id"
    },
    /**
     * 自定义标识文本字段名
     */
    rangText:{
        type: String,
        default: "title"
    }
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

const _parentIndex = computed((): number => props.parentIndex)

const _wrapWight = computed((): number => props.wrapWight)

const _selectedIndex = computed((): number[] => props.selectedIndex)

const _unitsName = computed((): string => {
	if (props.cellUnits.length == 0) return ""
	if (props.cellUnits.length < _parentIndex.value) return ""
	return props.cellUnits[_parentIndex.value]! as string
})

const _cellUnits = computed((): string[] => props.cellUnits as string[])

const _list = computed((): TM_PICKER_X_ITEM[] => props.list.slice(0))

const _nowChildren = computed((): TM_PICKER_X_ITEM[] => {
	let index = Math.max(0, Math.min(nowCurrentIndex.value[0], _list.value.length - 1))
	if (_list.value.length == 0 && index > _list.value.length - 1) return [] as TM_PICKER_X_ITEM[]
	let item = _list.value[index]
	return item?.children ?? []
})

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

const getIndexByid = (): number => {
	let index = 0

	if (_selectedIndex.value.length == 0) return index;
	if (_parentIndex.value > _selectedIndex.value.length) return index

	index = _selectedIndex.value[_parentIndex.value]

	index = Math.max(0, Math.min(index, _list.value.length - 1))
	return index;
}
const getIdByindex = (): string | null => {
	let id = null;
	if (_list.value.length == 0) return id
	if (nowCurrentIndex.value.length == 0) return id;
	let index = Math.max(0, Math.min(nowCurrentIndex.value[0], _list.value.length - 1))
	return _list.value[index].id

}
const mchange = (indexs: number[]) => {

	let index = indexs[0];
	let parentIndex = _parentIndex.value;
	let ids = _selectedIndex.value.slice(0)



	if (parentIndex <= ids.length - 1) {
		ids.splice(parentIndex, 1, index)
	} else {
		for (let i = 0; i < _parentIndex.value; i++) {
			ids.push(0)
		}
		ids.push(index)

	}

	emits("changeDeep", ids)
}
const change = (s: number[]) => {
	emits("changeDeep", s)
}

const pushDeepCount = (n: number) => {

	emits("countChange", n)
}
const onChange = (event: any) => {
	if (event.detail.value.length == 0 || _list.value.length == 0) return;
	let indexs = event.detail.value!;
	if (indexs.join('') == nowCurrentIndex.value.join('')) return;
	let index = indexs[0]
	index = Math.max(0, Math.min(index, _list.value.length - 1))
	let item = _list.value[index]

	if (item.disabled) {
		index = nowCurrentIndex.value[0] > index ? index + 1 : index - 1;
		index = Math.max(_list.value.length, index)
		index = Math.min(0, index)
		indexs = [index]
	}
	nowCurrentIndex.value = indexs;

	mchange(indexs)
}

onMounted(() => {
	pushDeepCount(_parentIndex.value)
	nowCurrentIndex.value = [getIndexByid()] as number[]
})
onBeforeUnmount(() => {
	clearTimeout(tid)
	clearTimeout(tid2)
})

watch([() => props.selectedIndex], () => {
	nowCurrentIndex.value = [getIndexByid()] as number[]

}, { deep: true })
watch(() => props.list, () => {
	nowCurrentIndex.value = [getIndexByid()] as number[]
	mchange(nowCurrentIndex.value.slice(0))

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
	<view>
		<view class="tmPickerViewUnit" v-if="_unitsName != ''">
			<tm-text font-size="24" class="tmPickerViewUnitText">{{ _unitsName }}</tm-text>
		</view>
		<view class="tmPickerView">
			<view style="padding: 0 2.5px;">
				<picker-view :immediate-change="false" :value="nowCurrentIndex" @change="onChange"
					:style="{ height: '250px', width: (_wrapWight - 5) + 'px' }" :mask-style="`${_maskStyle}`"
					:indicator-style="`height:50px;border:none;border-radius:10px`">
					<picker-view-column>
						<view :style="{ background: nowCurrentIndex[0] == index ? _selectedMaskStyle : 'none' }"
							v-for="(item, index) in _list" :key="index" class="tmPickerViewWrapCoumn">
							<text class="tmPickerViewWrapCoumnText" :style="{
							fontSize: _fontSize,
							lineHeight: 1,
							fontWeight: nowCurrentIndex[0] == index ? 'bold' : 'inherit',
							opacity: item.disabled ? 0.4 : (nowCurrentIndex[0] == index ? 1 : 0.6),
							color: _isDark ? 'rgba(255,255,255,0.8)' : '#000000'
						}">
								{{ item[rangText] }}
							</text>
						</view>
					</picker-view-column>
				</picker-view>

			</view>

			<picker-item :rangKey="rangKey" :rangText="rangText" @countChange="pushDeepCount" :font-size="fontSize" :cellUnits="_cellUnits" @changeDeep="change"
				:selectedIndex="_selectedIndex" :wrapWight="_wrapWight" :parentIndex="_parentIndex + 1"
				v-if="_nowChildren.length > 0" :list="_nowChildren">
			</picker-item>
		</view>
	</view>
</template>
<style>
.uni-picker-view-indicator:after,
.uni-picker-view-indicator:before {
	border: none;
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