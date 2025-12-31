<script lang="ts" setup>
	import { ref, computed, onMounted, watch, type PropType, nextTick,getCurrentInstance } from 'vue';
	import { arrayNumberValid, arrayNumberValidByStyleMP, covetUniNumber, linearValid } from '../../libs/tool'
	import { useTmConfig } from '../../libs/config'
	import {
		getDefaultColor,
		getDefaultColorObj,
		getOutlineColorObj,
		getTextColorObj,
		getThinColorObj,
		hexToRgb
	} from '../../libs/colors'
	import { tmDate,dateCovertTmDate,tmDateTypeTime } from "../../libs/tmDate"
	import { xDateArrayItem, xDateArrayItemType, xCalendarArgs, xCalendarMode } from "./interface"
	import { xCalendar } from "./tmCalendar"
	import {$i18n} from "@/uni_modules/tm-ui"

	const proxy = getCurrentInstance()?.proxy;

	const { config } = useTmConfig()
	type tmCalendarMultiplePropsType = {
		/**
		 * 同步当前时间v-model
		 * 不想受控:model-value
		 */
		modelValue : string[],
		/**
		 * 范围选择模式
		 * day:天数多选，通过multipleMax可以设置允许选择的天数
		 * range:天数的范围选择，起始和终止
		 * week:按周次选择范围
		 * quarter:按季度选择范围
		 * year:按年
		 */
		model: xCalendarMode,
		/**
		 * 多选模式时，允许选择的最大天数。
		 */
		multipleMax : number,
		/**
		 * 禁用的日期字符串如"2023-12-12"
		 * 它与下面的start，end不冲突。
		 */
		disabledDays: string[],
		/**
		 * 允许选择的开始日期
		 */
		startDate: string,
		/**
		 * 允许选择的结束日期
		 */
		endDate: string,
		/**
		 * 设置指定日期的样式
		 * 数据类型见：xCalendarDateStyle_type
		 */
		dateStyle: TM.tmCalendarDateStyle_type[],
		/**
		 * 同步vmodel时格式化模板
		 */
		format: string,
		/**
		 * 选中的主题色，默认空值，取全局主题色
		 * 如果提供了dateStyle，以dateStyle为准
		 */
		color: string,
		/**
		 * 默认的文字颜色
		 * 如果提供了dateStyle，以dateStyle为准
		 */
		fontColor:string,
		/**
		 * 默认的暗黑文字颜色
		 * 如果提供了dateStyle，以dateStyle为准
		 */
		fontDarkColor:string,
		/**
		 * 默认选中时的文字颜色
		 * 如果提供了dateStyle，以dateStyle为准
		 */
		activeFontColor:string,
		/**
		 * 范围选中时,范围中间的选中颜色,
		 * 如果为空,为color的透明度0.5;
		 */
		rangColor:string,
		rangFontColor:string,
		currentDate:string,
		/**
		 * 你当前的一周的第一天的索引值是几：0: 周一，1: 周二，2: 周三，3: 周四，4: 周五，5: 周六，6: 周日
		 */
		seekDay:number,
		/**
		 * 给日期设定状态
		 * 类型为：xCalendarDateStyleStatusType[]
		 */
		dateStatus:TM.tmCalendarDateStyleStatusType[]
	}
	
	
	const emit = defineEmits(['change','click'])
	const props = withDefaults(defineProps<tmCalendarMultiplePropsType>(), {
		modelValue: ()=>[] as string[],
		currentDate:'',
		model:'day' as xCalendarMode,
		multipleMax: -1,
		disabledDays:()=>[] as string[],
		startDate:'1900-1-1',
		endDate:'2025-5-13',
		dateStyle:()=>[] as TM.tmCalendarDateStyle_type[],
		format:'YYYY-MM-DD',
		color:'',
		fontColor:'#333333',
		fontDarkColor:'#ffffff',
		activeFontColor:'#ffffff',
		rangColor:'',
		rangFontColor:'',
		seekDay:0,
		dateStatus:()=>[] as TM.tmCalendarDateStyleStatusType[]
	})
	const calendar = new xCalendar()
	const _dateStatus = computed(() : TM.tmCalendarDateStyleStatusType[] => props.dateStatus)
	const _rangColor = computed(()=>{
		let color = props.rangColor == ''?config.color:props.rangColor
		let rgba = hexToRgb(getDefaultColor(color));
		return `rgba(${rgba.r},${rgba.g},${rgba.b},${props.rangColor==''?0.2:1})`
	})
	const _modelValue = computed(():string[]=> props.modelValue )
	const _model = computed(():xCalendarMode=> props.model )
	function splitArray<T>(ar : Array<T>, len : number) : Array<Array<T>> {
		const result : Array<Array<T>> = [];
		for (let i = 0; i < ar.length; i += len) {
			result.push(ar.slice(i, i + len));
		}
		return result
	}
	const _fontSize = computed(():string=> covetUniNumber('16',''))
	const dateArrayList = computed(():xDateArrayItemType[][]=>{
		const primaryColor = getDefaultColor(props.color==''?config.color:props.color);
		const dates = calendar.getCalendar(
			props.seekDay,
			props.model,
			props.currentDate,
			props.modelValue,
			props.startDate!=''?new Date(props.startDate.replace(/-/g,'/')):null,
			props.endDate!=''?new Date(props.endDate.replace(/-/g,'/')):null,
			{
				color:primaryColor,
				fontColor:getDefaultColor(config.mode=='dark'?props.fontDarkColor:props.fontColor),
				activeFontColor:getDefaultColor(props.activeFontColor),
				rangColor:_rangColor.value,
				rangFontColor:props.rangFontColor==''?primaryColor:getDefaultColor(props.rangFontColor)
			} as xCalendarArgs,props.dateStyle,props.disabledDays);
		
		return splitArray<xDateArrayItemType>(dates,7)
	})
	const showLabel = (item:xDateArrayItemType):string => {
		if(item.isInstart&&item.isInEnd&&_model.value=='range') return $i18n.t('tmui32x.tmCalendar.rangStatus',2)
		if(item.isInstart&&!item.isInEnd&&_model.value=='range') return $i18n.t('tmui32x.tmCalendar.rangStatus',0)
		if(!item.isInstart&&item.isInEnd&&_model.value=='range') return $i18n.t('tmui32x.tmCalendar.rangStatus',1)
		return ""
	}
	const dateClick = (item:xDateArrayItemType) =>{
		if(item.disabled) return;
		emit('click',item)
	}
	
	function checkDataIsInDateStatus(date:string|null):string{
		if(date ==''||date == null) return '';
		for(let k =0 ;k <_dateStatus.value.length;k++){
			let itemStatus = _dateStatus.value[k]
			let dates = itemStatus?.date??[];
			let start = itemStatus?.between?.start??''
			let end = itemStatus?.between?.end??''
			let betweenColor = itemStatus?.between?.color??''
			let notDates = itemStatus?.between?.notDate??[]
			let nowDate = new tmDate(date);
			let isInBetweenDate = false;
			if(start!=''&&end!=''){
				let isBetween = nowDate.isBetween(new tmDate(start),new tmDate(end),'d','[]');
				let isNotDate = false
				for(let i=0;i<notDates.length;i++){
					let item = notDates[i];
					if(nowDate.isBetweenOf(new tmDate(item),'=','d')){
						isNotDate = true;
						break;
					}
				}
				isInBetweenDate = isBetween && !isNotDate
			}
			if(isInBetweenDate) return getDefaultColor(betweenColor==''?'primary':betweenColor)
			
			let selfColor = ''
			for(let i=0;i<dates.length;i++){
				let item = dates[i];
				if(nowDate.isBetweenOf(new tmDate(item.date),'=','d')){
					selfColor = item.color==''?'primary':item.color
					break;
				}
				
			}
			if(selfColor!=''){
				return getDefaultColor(selfColor)
			}
			
		}
		
		return ""
	}
	
	

	onMounted(()=>{
	
	})
</script>
<template>
	<view class="xCalendarViewItem" 
	ref="xCalendarViewItemRef"
	>
		<view class="xCalendarViewItemCol" v-for="(children,index) in dateArrayList" :key="index">
			<view class="xCalendarViewItemColItem" 
			@click="dateClick(item)"
			v-for="(item,index2) in (children as xDateArrayItemType[])" :key="index2">
				<view class="xCalendarViewItemColItemBox"
				:style="{
					backgroundColor:item.style.dstyle.backgroundColor,
					opacity:item.style.dstyle.opacity,
				}"
				>
					<view v-if="item.style.dot.dot" 
					class="xCalendarViewItemDot"
					:class="[item.style.dot.dotLabel==''?'xCalendarViewItemDotNolabel':'']"
					:style="{
						color:item.style.dot.dotLabelColor,
						backgroundColor:item.style.dot.dotColor
					}"
					>
						{{item.style.dot.dotLabel}}
					</view>
					<text class="xCalendarViewItemColDate"
					:style="{
						color:item.style.dstyle.fontColor,
						fontSize:_fontSize
					}"
					>
					{{item.date.day}}
					</text>
					<text class="xCalendarViewItemColLabel"
					:style="{
						color:item.style.dstyle.fontColor
					}"
					>{{showLabel(item)||item.style.dstyle.label}}</text>
					<view class="xCalendarViewStatus" :style="{backgroundColor:checkDataIsInDateStatus(item.date.date)}" v-if="checkDataIsInDateStatus(item.date.date)!=''"></view>
				</view>
			</view>
		</view>
	</view>
</template>
<style scoped lang="scss">
	.xCalendarViewStatus{
		width:4px;
		height:4px;
		border-radius: 2px;
		position: absolute;
		bottom: 1px;
		
	}


	.xCalendarViewItemDot{
		padding:2px 4px;
		box-sizing: border-box;
		min-width:18px;
		min-height:18px;
		font-size:10px;
		border-radius:9px;
		position: absolute;
		right:0px;
		top:0px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		&.xCalendarViewItemDotNolabel{
			padding:0;
			min-width:8px;
			min-height:8px;
			font-size:10px;
			border-radius:9px;
		}
	}
	.xCalendarViewItem{
		width:100%;
		height:100%;
		.xCalendarViewItemCol{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-content: center;
			height: 50px;
			.xCalendarViewItemColItem{
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-content: center;
				height: 100%;
				width:14.285%;
				.xCalendarViewItemColItemBox{
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					width: 45px;
					height: 45px;
					border-radius: 25px;
					overflow: visible;
					position: relative;
					
				}
				.xCalendarViewItemColDate{
					text-align: center;
					height: 27px;
					line-height: 27px;
					margin-top: -4px;
					// font-weight: bold;
					// font-size: 16px;
					display: block;
				}
				.xCalendarViewItemColLabel{
					text-align: center;
					font-size: 10px;
					margin-top: -4px;
					display: block;
					min-height:10px;
				}
			}
		}
	}

</style>