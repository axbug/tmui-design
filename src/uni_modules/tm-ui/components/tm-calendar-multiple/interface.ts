import { tmDate } from "../../libs/tmDate"
export type xDateArrayItem = {
	date : TM.tmDateDayInfoType,
	//是否禁用
	isDisabled : boolean,
	//是否在当前月份
	isInCureentMonth : boolean,
	//是否已经选中
	isSelected : boolean,
	//样式
	style : dateStyleType
}

export type xDateArrayItemType = {
	date : TM.tmDateDayInfoType,
	//是否禁用
	disabled : boolean,
	//是否在当前月份
	inCurrentMonth : boolean,
	//是否已经选中
	inRange : boolean,
	isInstart : boolean,
	isInEnd : boolean,
	//样式
	style : dateStyleType
}

/**
 * 日历单个日期的样式对象
 */
export type xCalendarDateStyle_real_type = {
	/** 是否显示右角标 */
	dot : boolean,
	/** 右角标背景颜色 */
	dotColor : string,
	/** 右角标文字颜色 */
	dotLabelColor : string,
	/** 注意如果dot为true，此内容为空就会显示小圆点。如果有内容优先显示本文本 */
	dotLabel : string,
	/** 底部文本 */
	label : string,
	/** 背景颜色 */
	color : string,
	/** 日期文字颜色 */
	fontColor : string,
	date : string
}
export type dateStyleDot = {
	/** 是否显示右角标 */
	dot : boolean,
	/** 右角标背景颜色 */
	dotColor : string,
	/** 右角标文字颜色 */
	dotLabelColor : string,
	/** 注意如果dot为true，此内容为空就会显示小圆点。如果有内容优先显示本文本 */
	dotLabel : string,
}
export type dateStyleBg = {
	/** 底部文本 */
	label : string,
	/** 日期文字颜色 */
	fontColor : string,
	backgroundColor : string,
	opacity : number
}
export type dateStyleType = {
	dot : dateStyleDot,
	dstyle : dateStyleBg
}
export type xCalendarMode = "day" | "range" | "week" | "quarter" | "year"

export type BODY_SIZE_TYPE = {
	width : number,
	height : number
}
export type xCalendarArgs = {
	color:string,
	fontColor:string,
	activeFontColor:string,
	rangColor:string
	rangFontColor:string,
}

export type xCalendarViewUpdateType = {
	ar : xDateArrayItem[],
	disabledDays : string[],
	selectedDate : tmDate | null,
	nowDate : tmDate,
	start : tmDate,
	end : tmDate,
	color : string,
	dateStyle : xCalendarDateStyle_real_type[]
}

export type GRID_SIZE = {
	width : 0,
	height : 0
}
