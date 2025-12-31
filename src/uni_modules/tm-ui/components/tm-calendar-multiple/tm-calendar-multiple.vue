<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->

<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useTmConfig } from '../../libs/config'
import { getDefaultColor } from '../../libs/colors'

import { tmDate } from '../../libs/tmDate'
import calendarMultipleVue from './calendar-multiple.vue'
import { xDateArrayItemType } from './interface'
import { xCalendar } from './tmCalendar'
import { $i18n } from '@/uni_modules/tm-ui'

type xCalendarMultiplePropsType = {
	/**
	 * 同步当前时间v-model
	 * 不受控:model-value
	 */
	modelValue: string[],
	/**
	 * 范围选择模式
	 * day:天数多选，通过multipleMax可以设置允许选择的天数
	 * range:天数的范围选择，起始和终止
	 */
	model?: 'day' | 'range',
	/**
	 * 多选模式时，允许选择的最大天数。
	 */
	multipleMax?: number,
	/**
	 * 禁用的日期字符串如"2023-12-12"
	 * 它与下面的start，end不冲突。
	 */
	disabledDays?: string[],
	/**
	 * 允许选择的开始日期
	 */
	startDate?: string,
	/**
	 * 是否上下切换日历
	 */
	vertical?: boolean,
	/**
	 * 允许选择的结束日期
	 */
	endDate?: string,
	/**
	 * 当前显示的月份，默认以modalValue中的第一项为初始月
	 * 如果为空，显示本月，可以控制这里切换显示的日期
	 */
	currentDate?: string,
	/**
	 * 设置指定日期的样式
	 * 数据类型见：TM.tmCalendarDateStyle_type
	 */
	dateStyle?: TM.tmCalendarDateStyle_type[],
	/**
	 * 同步vmodel时格式化模板
	 */
	format?: string,
	/**
	 * 选中的主题色，默认空值，取全局主题色
	 * 如果提供了dateStyle，以dateStyle为准
	 */
	color?: string,
	/**
	 * 默认的文字颜色
	 * 如果提供了dateStyle，以dateStyle为准
	 */
	fontColor?: string,
	/**
	 * 默认的暗黑文字颜色
	 * 如果提供了dateStyle，以dateStyle为准
	 */
	fontDarkColor?: string,
	/**
	 * 默认选中时的文字颜色
	 * 如果提供了dateStyle，以dateStyle为准
	 */
	activeFontColor?: string,
	/**
	 * 范围选中时,范围中间的选中颜色,
	 * 如果为空,为color的透明度0.5;
	 */
	rangColor?: string,
	rangFontColor?: string,
	/**
	 * 头的背景颜色，默认为透明
	 */
	headBgColor?: string,
	/**
	 * 头的文字颜色，提供了后暗黑失效会以这个为准。
	 */
	headFontColor?: string,
	/**
	 * 头部自定义样式。
	 */
	headStyle?: string,
	/**
	 * 循环渲染时，是否只渲染当前面板（如果你在pad等10年前的低端机上渲染日历有压力请打开此值为true)
	 * 关闭后可以提升滑动体验。
	 */
	renderOnly?: boolean,
	/**
	 * 你当前的一周的第一天的索引值是几：0: 周一，1: 周二，2: 周三，3: 周四，4: 周五，5: 周六，6: 周日
	 */
	seekDay?: number,
	/**
	 * 给日期设定状态
	 * 类型为：TM.tmCalendarDateStyleStatusType[]
	 */
	dateStatus?: TM.tmCalendarDateStyleStatusType[],
	/**
	 * 显示清空按钮
	 */
	showClear?: boolean,
	/**
	 * 显示页脚
	 */
	showFooter?: boolean,
	/**
	 * 是否允许选择同一天
	 */
	isSameDay?: boolean
}

/**
 * @displayName 日历
 * @exportName tm-calendar-multiple
 * @category 表单组件
 * @description 以单选和多选，无限循环滚动
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
     | --- | --- | --- | --- |
     | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: 'tmCalendarMultiple' })
const { config } = useTmConfig()
const calendar = new xCalendar()
const emit = defineEmits([
	/**
	 * 时间变化时触发
	 * @param {string[]} value - 当前变化的日期
	 */
	'change',
	/**
	 * 当前日历面板的日期被点击时触发
	 * @param {string} value - 当前被点击的日期
	 */
	'click',
	/**
	 * 当前激活面板月份改变时触发（就是当前看到的月份面板）
	 * @param {string} value - 当前激活面板的日期
	 */
	'currentChange',
	/**
	 * 同步当前的选中的日期绑定
	 * @param {string[]} value - 当前选中日期
	 */
	'update:modelValue',
	/**
	 * 同步当前查看的月份日期，请以日期形式提供值
	 * @param {string} value - 当前查看的月分日期
	 */
	'update:currentDate'
])
const durationSwiper = ref(0)
const props = withDefaults(defineProps<xCalendarMultiplePropsType>(), {
	modelValue: (): string[] => [] as string[],
	model: 'day',
	multipleMax: -1,
	disabledDays: (): string[] => [] as string[],
	startDate: '1900-1-1',
	endDate: '2100-1-1',
	dateStyle: (): TM.tmCalendarDateStyle_type[] => [] as TM.tmCalendarDateStyle_type[],
	format: 'YYYY-MM-DD',
	color: '',
	fontColor: '#333333',
	fontDarkColor: '#ffffff',
	activeFontColor: '#ffffff',
	rangColor: '',
	rangFontColor: '',
	headBgColor: 'transparent',
	headFontColor: '',
	headStyle: '',
	currentDate: '',
	vertical: false,
	renderOnly: true,
	seekDay: 0,
	dateStatus: (): TM.tmCalendarDateStyleStatusType[] => [] as TM.tmCalendarDateStyleStatusType[],
	showClear: true,
	showFooter: true,
	isSameDay: true
})
const _dateStatus = computed((): TM.tmCalendarDateStyleStatusType[] => props.dateStatus)
const weeksCn = computed((): string[] => {
	// ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
	// 根据 seekDay 属性调整周名称的顺序
	const weekNames = [
		$i18n!.t('tmui32x.tmCalendar.week', 0),
		$i18n!.t('tmui32x.tmCalendar.week', 1),
		$i18n!.t('tmui32x.tmCalendar.week', 2),
		$i18n!.t('tmui32x.tmCalendar.week', 3),
		$i18n!.t('tmui32x.tmCalendar.week', 4),
		$i18n!.t('tmui32x.tmCalendar.week', 5),
		$i18n!.t('tmui32x.tmCalendar.week', 6)
	]
	// 如果 seekDay 为 0（默认周一），直接返回原数组
	if (props.seekDay == 0) {
		return weekNames
	}
	// 根据 seekDay 重新排列数组
	const result: string[] = []
	for (let i = 0; i < 7; i++) {
		const index = (i + props.seekDay) % 7
		result.push(weekNames[index])
	}
	return result
})

const _headBgColor = computed((): string => getDefaultColor(props.headBgColor))
const _headFontColor = computed((): string => {
	if (props.headFontColor == '') return '#333333'
	return getDefaultColor(props.headFontColor)
})

const _modelValue = ref(props.modelValue)
const _currentDate = ref(new tmDate(props.currentDate).format('YYYY-MM-DD'))
const _currentDateSwipersIndex = ref(0)

const _currentDateSwipers = ref<string[]>([])
const _startDate = computed((): string => props.startDate)
const _endDate = computed((): string => props.endDate)
const _showClear = computed((): boolean => props.showClear)
const _showFooter = computed((): boolean => props.showFooter)
const _isSameDay = computed((): boolean => props.isSameDay)

const _currentDateLabel = computed((): string => {
	let ars = _currentDate.value.split('-')
	// `${ars[0]}年${ars[1]}月`
	return $i18n.t('tmui32x.tmCalendar.titleCurrentMonth', [ars[0], ars[1]])
})
const _currentYear = ref(new tmDate(props.currentDate).getYear())
let _modelValueDate = computed((): Date[] => {
	return _modelValue.value.map((d: string): Date => {
		return new Date(d.replace(/-/g, '/'))
	})
})
const _tipsText = computed((): string => {

	if (props.model == 'day') {
		// `已选择${_modelValue.value.length}日` : '未选择日期'
		return _modelValue.value.length > 0 ? $i18n.t('tmui32x.tmCalendar.selectedStatus', 0, { count: _modelValue.value.length }) : $i18n.t('tmui32x.tmCalendar.selectedStatus', 1)
	} else if (props.model == 'range') {
		if (_modelValue.value.length == 0) return $i18n.t('tmui32x.tmCalendar.selectedStatus', 1)
		if (_modelValue.value.length == 1) return $i18n.t('tmui32x.tmCalendar.selectedStatus', 3)
		if (_modelValue.value.length > 1) {
			let start = _modelValueDate.value[0].getTime()
			let end = _modelValueDate.value[1].getTime()
			let diff = Math.abs(start - end)
			let diffDay = diff / (24 * 60 * 60 * 1000)
			if (start - end > 0) return $i18n.t('tmui32x.tmCalendar.selectedStatus', 1)
			return $i18n.t('tmui32x.tmCalendar.selectedStatus', 0, { count: (diffDay + 1) })
		}

	}
	// '未选择日期'
	return $i18n.t('tmui32x.tmCalendar.selectedStatus', 1)
})

const _monthBgColor = computed((): string => config.mode == 'dark' ? config.sheetDarkColor : '#ffffff')
const _color = computed((): string => props.color == '' ? getDefaultColor(config.color) : getDefaultColor(props.color))
const showPanel = ref(false)

function dateClick(item: xDateArrayItemType) {
	const isInIndex = calendar.isInRangeDateByIndex(new Date(item.date.date), _modelValueDate.value, props.model)

	emit('click', item.date.date)
	let dates = _modelValue.value.slice(0)

	function showToastFun() {
		// `最大${props.multipleMax}天`
		uni.showToast({
			title: $i18n.t('tmui32x.tmCalendar.tips', props.multipleMax),
			icon: 'none'
		})
	}

	if (props.model == 'day') {

		if (isInIndex == -1) {
			if (props.multipleMax <= dates.length && props.multipleMax > -1) {

				if(props.multipleMax == 1){
					dates = [item.date.date]
				}else{
					showToastFun()
					return;
				}
			}else{
				dates.push(item.date.date)
			}

		} else {
			dates.splice(isInIndex, 1)
		}
	}
	else if (props.model == 'range') {
		if (isInIndex == -1) {
			if (dates.length == 0) {
				dates = [item.date.date] as string[]
			} else if (dates.length == 1) {
				let start = new Date(dates[0].replace(/-/g, '/')).getTime()
				let end = new Date(item.date.date.replace(/-/g, '/')).getTime()
				let diff = Math.abs(start - end)
				if (_isSameDay.value) {
					dates.push(item.date.date)
				} else if (diff > 0) {
					dates.push(item.date.date)
				}
			} else if (dates.length > 1) {
				dates = [item.date.date] as string[]
			}
		} else if (isInIndex == 0) {
			if (dates.length == 1) {
				dates = [] as string[]
			} else if (dates.length > 1) {
				dates = [item.date.date] as string[]
			}
		} else if (isInIndex == 1) {
			dates = [item.date.date] as string[]
		}
		if (dates.length >= 2) {
			let adates = dates.map((d: string): Date => {
				return new Date(d.replace(/-/g, '/'))
			})
			let start = adates[0].getTime()
			let end = adates[1].getTime()
			let diff = Math.abs(start - end)
			let diffDay = diff / (24 * 60 * 60 * 1000)
			if (props.multipleMax <= diffDay && props.multipleMax > -1) {
				showToastFun()
				return
			}
			if (start > end) {
				dates = [dates[1], dates[0]] as string[]
			}

		}
	}
	_modelValue.value = dates
	emit('update:modelValue', _modelValue.value)
	if ((_modelValue.value.length >= 2 || _modelValue.value.length == 0) && props.model == 'range') {
		emit('change', _modelValue.value)
	} else if (props.model == 'day') {
		emit('change', _modelValue.value)
	}
}

function getSwiperListCurrentDates(nowCurrentDate: string): string[] {
	let index = _currentDateSwipersIndex.value
	let currentData = new tmDate(nowCurrentDate)
	let xd = currentData.getClone().setDateOf(1, 'd').format('YYYY-MM-DD')
	let start = currentData.getClone().setDateOf(1, 'd').subtraction(1, 'm').format('YYYY-MM-DD')
	let end = currentData.getClone().setDateOf(1, 'd').add(1, 'm').format('YYYY-MM-DD')
	let datas = [xd, end, start]
	if (_currentDateSwipers.value.length == 0) return datas
	if (index == 0) {
		datas = [xd, end, start]
	} else if (index == 1) {
		datas = [start, xd, end]
	} else if (index == 2) {
		datas = [end, start, xd]
	}
	return datas
}

function clear() {
	if (_modelValue.value.length == 0) return
	_modelValue.value = [] as string[]
	emit('update:modelValue', _modelValue.value)
	emit('change', _modelValue.value)
}

function nowMonth() {
	let nowdate = new tmDate()
	_currentDate.value = nowdate.format('YYYY-MM-DD')
	_currentYear.value = nowdate.getYear()
	_currentDateSwipers.value = getSwiperListCurrentDates(_currentDate.value)
	emit('currentChange', _currentDate.value)
	emit('update:currentDate', _currentDate.value)
}

function stepperChangeYear(eyear: number) {
	let nowdate = new tmDate(_currentDate.value)
	nowdate.setDateOf(eyear, 'y')
	_currentDate.value = nowdate.format('YYYY-MM-DD')
	_currentDateSwipers.value = getSwiperListCurrentDates(_currentDate.value)
	emit('currentChange', _currentDate.value)
	emit('update:currentDate', _currentDate.value)
}

function changeMonth(eyear: number) {
	let nowdate = new tmDate(_currentDate.value)
	nowdate.setDateOf(eyear, 'm')
	_currentDate.value = nowdate.format('YYYY-MM-DD')
	_currentYear.value = nowdate.getYear()
	showPanel.value = false
	emit('currentChange', _currentDate.value)
	emit('update:currentDate', _currentDate.value)
	_currentDateSwipers.value = getSwiperListCurrentDates(_currentDate.value)
}

function nextMonth() {
	let nowdate = new tmDate(_currentDate.value)
	nowdate.add(1, 'm')
	_currentDate.value = nowdate.format('YYYY-MM-DD')
	_currentYear.value = nowdate.getYear()
	_currentDateSwipers.value = getSwiperListCurrentDates(_currentDate.value)
	emit('currentChange', _currentDate.value)
	emit('update:currentDate', _currentDate.value)
}

function prevMonth() {
	let nowdate = new tmDate(_currentDate.value)
	nowdate.subtraction(1, 'm')
	_currentDate.value = nowdate.format('YYYY-MM-DD')
	_currentYear.value = nowdate.getYear()
	_currentDateSwipers.value = getSwiperListCurrentDates(_currentDate.value)
	emit('currentChange', _currentDate.value)
	emit('update:currentDate', _currentDate.value)
}

function swiperChange(evt: any) {
	_currentDateSwipersIndex.value = evt.detail.current
	nextTick(() => {
		_currentDate.value = _currentDateSwipers.value[evt.detail.current]
		_currentDateSwipers.value = getSwiperListCurrentDates(_currentDate.value)
		let nowdate = new tmDate(_currentDate.value)
		_currentYear.value = nowdate.getYear()
		emit('currentChange', _currentDate.value)
		emit('update:currentDate', _currentDate.value)
	})
}

watch((): string[] => props.modelValue, (newVal: string[]) => {
	durationSwiper.value = 0
	_modelValue.value = newVal.slice(0)
})
watch((): string => props.currentDate, (newVal: string) => {
	durationSwiper.value = 0
	let nowdate = new tmDate(newVal).setDateOf(1, 'd')
	if (nowdate.format('YYYY-MM-DD') == _currentDate.value) return
	_currentDate.value = nowdate.format('YYYY-MM-DD')
	_currentYear.value = nowdate.getYear()
	_currentDateSwipersIndex.value = 0
	_currentDateSwipers.value = getSwiperListCurrentDates(_currentDate.value)
	// console.log(_currentDate.value)
})
onMounted(() => {
	if (props.modelValue.length > 0 && props.currentDate == '') {
		let nowdate = new tmDate(props.modelValue[0])
		_currentDate.value = nowdate.format('YYYY-MM-DD')
		_currentYear.value = nowdate.getYear()
	}
	nextTick(() => {
		_currentDateSwipers.value = getSwiperListCurrentDates(_currentDate.value)
		emit('update:currentDate', _currentDate.value)
	})

})

function getmonth(item: string): number {
	let vls = item.split('-')
	return parseInt(vls[1])
}

defineExpose({
	/**
	 * 下月
	 */
	next() {
		nextMonth()
	},
	/**
	 * 上月
	 */
	prev() {
		prevMonth()
	},
	/**
	 * 设置日历返回到本月
	 */
	setCurrentMonth() {
		nowMonth()
	},
	/**
	 * 清空选择
	 */
	clear() {
		clear()
	}
})
</script>
<template>
	<view class="xCalendarView"
		  :class="[
			  {'noFooter':_showFooter==false}
		  ]"
		@touchstart="durationSwiper = 300"
		@mousedown = "durationSwiper = 300"
	>
		<!--
		 @slot 日历头，隐藏使用空插槽，将隐藏，如果想自定，请通过ref函数来翻页控制日历走向。
		 -->
		<slot name="header">
			<view class="xCalendarViewDataHeaderWrap"
				  :class="[showPanel?'xCalendarViewMonthOff':'xCalendarViewMonthOn']"
				  :style="[{backgroundColor:_headBgColor},headStyle]">
				<view class="xCalendarViewHeader" style="padding: 0 12px">
					<view @click="showPanel= !showPanel" class="xCalendarViewHeaderLeft">
						<!-- 2024年5月 -->
						<tm-text :color="_headFontColor" font-size="42">{{ _currentDateLabel }}</tm-text>
						<tm-icon :color="_headFontColor" size="42" name="arrow-down-s-fill"></tm-icon>
					</view>
					<view class="xCalendarViewHeaderRight">
						<!-- 清空 -->
						<tm-text v-if="_showClear" @click="clear" :color="_headFontColor"
								 style="padding: 10px 20px;">{{ $i18n.t('tmui32x.clear') }}
						</tm-text>
						<!-- 本月 -->
						<tm-text @click="nowMonth" :color="_headFontColor"
								 style="padding: 10px 0px;">{{ $i18n.t('tmui32x.tmCalendar.currentMonthTitle') }}
						</tm-text>
					</view>
				</view>
				<view class="xCalendarViewDataHeader">
					<view class="xCalendarViewDataHeaderItem" v-for="(item,index) in 7" :key="item">
						<tm-text :color="_headFontColor" font-size="24">{{ weeksCn[index] }}</tm-text>
					</view>
				</view>
			</view>
		</slot>
		<view class="xCalendarViewSpace"></view>
		<view :class="[showPanel?'xCalendarViewMonthOff':'xCalendarViewMonthOn']" class="xCalendarViewWrap">
			<swiper v-if="_currentDateSwipers.length>0" :duration="durationSwiper" :vertical="props.vertical" @change="swiperChange"
					:current="_currentDateSwipersIndex" :circular="true" style="width:100%;height:100%">
				<swiper-item v-for="(item,index) in _currentDateSwipers" :key="index" style="width:100%;height:100%;">
					<view style="width:100%;height:100%;position: relative;">
						<view class="xCalendarViewContentBox">
							<calendar-multiple-vue v-if="index == _currentDateSwipersIndex||!props.renderOnly"
												   @click="dateClick" :currentDate="item" :dateStatus="_dateStatus"
												   :seekDay="props.seekDay" :modelValue="props.modelValue"
												   :model="props.model"
												   :multipleMax="props.multipleMax" :disabledDays="props.disabledDays"
												   :startDate="_startDate" :endDate="_endDate"
												   :dateStyle="props.dateStyle"
												   :format="props.format" :color="props.color"
												   :fontColor="props.fontColor"
												   :fontDarkColor="props.fontDarkColor"
												   :activeFontColor="props.activeFontColor"
												   :rangColor="props.rangColor" :rangFontColor="props.rangFontColor">
							</calendar-multiple-vue>
						</view>
						<view class="xCalendarViewNum">
							<text class="xCalendarViewNumText">{{ getmonth(item) }}</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="xCalendarViewSpace"></view>
		<!--
		 @slot 日历尾部
		 -->
		<slot name="footer">
			<view v-if="_showFooter" class="xCalendarViewFooter">
				<tm-text color="#707070" font-size="28">{{ _tipsText }}</tm-text>
			</view>
		</slot>

		<!-- 月和年 -->
		<view :class="[showPanel?'xCalendarViewMonthOn':'xCalendarViewMonthOff']" class="xCalendarViewMonth"
			  :style="{backgroundColor:_monthBgColor}">
			<view class="xCalendarViewHeader" style="padding: 0 12px">
				<view @click="showPanel= !showPanel" class="xCalendarViewHeaderLeft">
					<!-- 2024年5月 -->
					<tm-text :color="_color" font-size="42">{{ _currentDateLabel }}</tm-text>
					<tm-icon :color="_color" size="42" name="arrow-up-s-fill"></tm-icon>
				</view>
				<view class="xCalendarViewHeaderRight">
					<tm-stepper @change="stepperChangeYear" v-model="_currentYear" :min="1900" :max="5000"
								width="240"></tm-stepper>
				</view>
			</view>

			<view class="xCalendarViewMonthWrap" style="flex:1">
				<view @click="changeMonth(index)" class="xCalendarViewMonthItem" v-for="(item,index) in 12"
					  :key="index">
					<tm-text font-size="36">{{ $i18n.t('tmui32x.tmCalendar.monthCountSelected', item) }}</tm-text>

				</view>
			</view>
		</view>
	</view>
</template>
<style scoped lang="scss">
$headerHeight: 50px;
$weekheaderHeight: 40px;
$footerHeight: 40px;
$spaceHeight: 5px;
$cellHeight: 50px;
$minBodyHeight: (50px * 6) + $headerHeight + $weekheaderHeight + $footerHeight + ($spaceHeight * 2);
$minBodyHeightNofooter: (50px * 6) + $headerHeight + $weekheaderHeight + ($spaceHeight * 2);

.xCalendarViewMonth {
	position: absolute;
	z-index: 3;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	transition-property: transform, opacity;
	transition-timing-function: cubic-bezier(.42, .38, .15, .93);
	transition-duration: 0.3s;

	&.xCalendarViewMonthOff {
		pointer-events: none;
		opacity: 0;
		transform: scale(0.6, 0.6);
		transform-origin: 50% 50%;

	}

	&.xCalendarViewMonthOn {
		pointer-events: auto;
		opacity: 1;
		transform: scale(1, 1);
		transform-origin: 50% 50%;
	}

	.xCalendarViewMonthWrap {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		.xCalendarViewMonthItem {
			width: 33.3333%;
			height: 25%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
	}
}

.xCalendarViewWrap {
	transition-property: transform, opacity;
	transition-timing-function: cubic-bezier(.42, .38, .15, .93);
	transition-duration: 0.3s;

	&.xCalendarViewMonthOff {
		pointer-events: none;
		opacity: 0;
		transform: scale(2, 2);
		transform-origin: 50% 50%;
	}

	&.xCalendarViewMonthOn {
		pointer-events: auto;
		opacity: 1;
		transform: scale(1, 1);
		transform-origin: 50% 50%;
	}

	position: relative;
	width: 100%;
	flex: 1;
	// height: calc(100% - 90px);

	.xCalendarViewContentBox {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		z-index: 3;
	}

	.xCalendarViewNum {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;

		.xCalendarViewNumText {
			font-size: 200px;
			color: rgba(125, 125, 125, 0.1);
			font-weight: bold;
		}
	}

}

.xCalendarViewDataHeaderWrap {
	transition-property: transform, opacity;
	transition-timing-function: cubic-bezier(.42, .38, .15, .93);
	transition-duration: 0.3s;

	&.xCalendarViewMonthOff {
		pointer-events: none;
		opacity: 0;
	}

	&.xCalendarViewMonthOn {
		pointer-events: auto;
		opacity: 1;
	}
}

.xCalendarViewSpace {
	height: $spaceHeight;
}

.xCalendarViewHeader {
	height: $headerHeight;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	.xCalendarViewHeaderLeft {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	.xCalendarViewHeaderRight {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
}

.xCalendarViewDataHeader {
	height: $weekheaderHeight;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	.xCalendarViewDataHeaderItem {
		width: 14.285%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
}

.xCalendarView {
	position: relative;
	display: flex;
	flex-direction: column;
	height: $minBodyHeight;
	overflow: hidden;
	&.noFooter{
		height: $minBodyHeightNofooter;
	}
}

.xCalendarViewFooter {
	height: $footerHeight;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
</style>