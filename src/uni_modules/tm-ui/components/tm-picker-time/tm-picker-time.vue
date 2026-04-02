<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useTmConfig } from "../../libs/config";
import pickerItem from './../tm-picker-view/picker-item.vue';
import { $i18n } from "@/uni_modules/tm-ui"

type PICKER_ITEM_INFO = Record<string, any>

/**
 * @displayName 时间选择器
 * @exportName tm-picker-time
 * @category 表单组件
 * @description 选择时间：时/时分/时分秒，支持起止范围限制
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
	| --- | --- | --- | --- |
	| ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: 'TmPickerTime' });
const { config } = useTmConfig()

type XPickerTimeProps = {
	/**
	 * 当前时间,与modelStr不同，此提供的值必须是正常的时间格式xx:xx:xx
	 * 否则报错，无法运行。
	 */
	modelValue?: string
	/**
	 * 当前时间经过format格式化后输出的值。
	 * 此值不会处理输入，只输出显示。
	 */
	modelStr?: string
	/**
	 * 当前打开的状态。
	 * 等同v-model:model-show
	 */
	modelShow?: boolean
	/**
	 * 是否懒加载内部内容。
	 * 当前你的列表内容非常多，且影响打开的动画性能时，请务必
	 * 设置此项为true，以获得流畅视觉效果。如果选择数据较少没有必要打开
	 * 要兼容微信就必须打开为true,非微信可以设置为false
	 */
	lazyContent?: boolean
	/**
	 * 顶部标题
	 */
	title?: string
	/**
	 * 取消按钮的文本
	 */
	cancelText?: string
	/**
	 * 确认按钮的文本
	 */
	confirmText?: string
	/**
	 * 开始时间：请提供正确的时间格式xx:xx:xx
	 */
	start?: string
	/**
	 * 结束时间：请提供正确的时间格式xx:xx:xx
	 */
	end?: string
	/**
	 * 精确到的级别
	 * hour:小时
	 * minute:小时分钟
	 * second:小时分钟秒
	 */
	type?: "hour" | "minute" | "second"
	/**
	 * 输出时间格式，只对v-model:modelStr有效
	 * 有效格式：
	 * hh小时
	 * mm分钟
	 * ss秒
	 */
	format?: string
	/**
	 * 上方的单位名称,'小时', '分钟', '秒数'
	 */
	cellUnits?: string[]
	/**
	 * 层级
	 */
	zIndex?: number
	/**
	 * 是否显示关闭按钮
	 */
	showClose?: boolean
	/**
	 * 是否禁用弹出
	 */
	disabled?: boolean
	/**
	 * 宽屏时是否让内容剧中显示
	 * 并限制其宽为屏幕宽，只展示中间内容以适应宽屏。
	 */
	widthCoverCenter?: boolean
}

const props = withDefaults(defineProps<XPickerTimeProps>(), {
	modelValue: "",
	modelStr: "",
	modelShow: false,
	lazyContent: false,
	title: "",
	cancelText: "",
	confirmText: "",
	start: "",
	end: "",
	type: "second",
	format: "hh:mm:ss",
	cellUnits: () => [] as string[],
	zIndex: 1100,
	showClose: false,
	disabled: false,
	widthCoverCenter: false
})

const emit = defineEmits([
	/** 取消时触发 */
	'cancel',
	/** 确认触发 */
	'confirm',
	/** 滑动变换时触发 */
	'change',
	'update:modelShow',
	'update:modelStr',
	'update:modelValue'
])

const show = ref(false)
const yanchiDuration = ref(false)
const nowValue = ref<string[]>([])
const nowValueStr = ref('')
const timeList = ref<PICKER_ITEM_INFO[][]>([])
const _modelValueIndex = ref<number[]>([])

const _colCount = computed(() => {
	if (props.type === 'hour') return 1
	if (props.type === 'minute') return 2
	return 3
})

const _defaultUnits = computed(() => {
	if (props.cellUnits.length > 0) return props.cellUnits.slice(0, _colCount.value)
	const h = $i18n?.t?.('tmui32x.tmDateView.cellUnits.hour') ?? '时'
	const m = $i18n?.t?.('tmui32x.tmDateView.cellUnits.minute') ?? '分'
	const s = $i18n?.t?.('tmui32x.tmDateView.cellUnits.second') ?? '秒'
	return [h, m, s].slice(0, _colCount.value)
})

const _title = computed(() => props.title || ($i18n?.t?.('tmui32x.tmPickerDate.title') ?? '选择时间'))
const _startTime = computed(() => props.start ? parseTime(props.start) : [0, 0, 0] as [number, number, number])
const _endTime = computed(() => props.end ? parseTime(props.end) : [23, 59, 59] as [number, number, number])

function parseTime(str: string): [number, number, number] {
	if (!str) return [0, 0, 0]
	const parts = str.split(':')
	return [
		Math.max(0, Math.min(23, parseInt(parts[0]) || 0)),
		Math.max(0, Math.min(59, parseInt(parts[1]) || 0)),
		Math.max(0, Math.min(59, parseInt(parts[2]) || 0))
	]
}

function pad(n: number): string {
	return n < 10 ? '0' + n : '' + n
}

function getTimeRang(nowH: number, nowM: number): { h: number[], m: number[], s: number[] } {
	const [sh, sm, ss] = _startTime.value
	const [eh, em, es] = _endTime.value
	const hasStart = !!props.start
	const hasEnd = !!props.end

	let hRange = [hasStart ? sh : 0, hasEnd ? eh : 23]
	let mRange = [0, 59]
	let sRange = [0, 59]

	if (_colCount.value >= 2) {
		if (hasStart && hasEnd && nowH === sh && nowH === eh) { mRange = [sm, em] }
		else if (hasStart && nowH === sh) mRange[0] = sm
		else if (hasEnd && nowH === eh) mRange[1] = em
	}

	if (_colCount.value >= 3) {
		if (hasStart && hasEnd && nowH === sh && nowH === eh && nowM === sm && nowM === em) { sRange = [ss, es] }
		else if (hasStart && nowH === sh && nowM === sm) sRange[0] = ss
		else if (hasEnd && nowH === eh && nowM === em) sRange[1] = es
	}

	return { h: hRange, m: mRange, s: sRange }
}

function buildTimeList() {
	const h = parseInt(nowValue.value[0]) || 0
	const m = parseInt(nowValue.value[1]) || 0
	const rang = getTimeRang(h, m)

	const hours: PICKER_ITEM_INFO[] = []
	const minutes: PICKER_ITEM_INFO[] = []
	const seconds: PICKER_ITEM_INFO[] = []

	for (let i = rang.h[0]; i <= rang.h[1]; i++) hours.push({ id: i.toString(), title: pad(i) })
	if (_colCount.value >= 2) {
		for (let i = rang.m[0]; i <= rang.m[1]; i++) minutes.push({ id: i.toString(), title: pad(i) })
	}
	if (_colCount.value >= 3) {
		for (let i = rang.s[0]; i <= rang.s[1]; i++) seconds.push({ id: i.toString(), title: pad(i) })
	}

	timeList.value = [hours, minutes, seconds].slice(0, _colCount.value)
}

function getIndexsByIds(ids: string[]): number[] {
	const result: number[] = []
	for (let i = 0; i < timeList.value.length; i++) {
		const col = timeList.value[i]
		const idx = col.findIndex(el => parseInt(el.id) === parseInt(ids[i]))
		result.push(Math.max(0, idx))
	}
	return result
}

function clampAndGetValue(h: number, m: number, s: number): string[] {
	const [sh, sm, ss] = _startTime.value
	const [eh, em, es] = _endTime.value
	const total = h * 3600 + m * 60 + s
	if (props.start && total < sh * 3600 + sm * 60 + ss) { h = sh; m = sm; s = ss }
	if (props.end && total > eh * 3600 + em * 60 + es) { h = eh; m = em; s = es }
	return [h.toString(), m.toString(), s.toString()]
}

function defaultModelvalue(timeStr: string, emitStr: boolean) {
	const [h, m, s] = timeStr ? parseTime(timeStr) : [0, 0, 0]
	nowValue.value = clampAndGetValue(h, m, s)
	nowValueStr.value = pad(parseInt(nowValue.value[0])) + ':' + pad(parseInt(nowValue.value[1])) + ':' + pad(parseInt(nowValue.value[2]))
	buildTimeList()
	_modelValueIndex.value = getIndexsByIds(nowValue.value)
	if (emitStr) emit('update:modelStr', formatOutput())
}

function formatOutput(): string {
	let sp = props.format
	sp = sp.replace(/hh/g, pad(parseInt(nowValue.value[0])))
	sp = sp.replace(/HH/g, pad(parseInt(nowValue.value[0])))
	sp = sp.replace(/mm/g, pad(parseInt(nowValue.value[1])))
	sp = sp.replace(/ss/g, pad(parseInt(nowValue.value[2])))
	return sp
}

function openShow() {
	if (props.disabled) return
	show.value = true
	emit('update:modelShow', true)
}

function onClose() {
	emit('update:modelShow', false)
	defaultModelvalue(props.modelValue, false)
	if (props.lazyContent) yanchiDuration.value = false
}

function onOpen() {
	yanchiDuration.value = true
}

function onChange(ixs: number[]) {
	const vals = new Array(3).fill('00')
	for (let i = 0; i < ixs.length; i++) {
		const col = timeList.value[i]
		if (col && col[ixs[i]]) vals[i] = col[ixs[i]].title
	}
	const timeStr = vals[0] + ':' + vals[1] + ':' + vals[2]
	defaultModelvalue(timeStr, false)
}

function onCancel() {
	emit('cancel')
	defaultModelvalue(props.modelValue, false)
}

function onConfirm() {
	emit('update:modelValue', nowValueStr.value)
	emit('update:modelStr', formatOutput())
	emit('confirm', nowValueStr.value)
}

watch(() => props.modelValue, (newval) => {
	if (!newval) return
	if (newval === nowValueStr.value) return
	defaultModelvalue(newval, true)
})

watch(() => props.modelShow, (newVal) => {
	if (newVal === show.value) return
	show.value = newVal
})

onMounted(() => {
	yanchiDuration.value = props.lazyContent ? false : true
	defaultModelvalue(props.modelValue, props.modelValue !== '')
})
</script>
<template>
	<view @click="openShow">
		<!--
		 @slot 插槽，默认触发打开选择器。你的默认布局可以放置在这里。
		 @binding {boolean} show - 控制打开关闭状态
		 -->
		<slot></slot>
	</view>
	<tm-drawer @open="onOpen" :widthCoverCenter="widthCoverCenter" :disabledScroll="true"
		:title="_title" @close="onClose" @confirm="onConfirm" @cancel="onCancel"
		:showFooter="true" v-model:show="show" :show-close="showClose" size="850"
		:z-index="zIndex"
		:cancelText="cancelText || undefined" :confirmText="confirmText || undefined">
		<view v-if="yanchiDuration && show">
			<picker-item @change-deep="onChange" :selected-index="_modelValueIndex" :list="timeList"
				:cell-units="_defaultUnits"></picker-item>
		</view>
		<tm-icon v-if="!yanchiDuration" size="42" color="error" spin name="loader-line"></tm-icon>
	</tm-drawer>
</template>
