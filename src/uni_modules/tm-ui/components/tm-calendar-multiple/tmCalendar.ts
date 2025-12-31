import { tmDate } from "../../libs/tmDate"

import { xDateArrayItemType,xCalendarArgs,dateStyleDot,dateStyleBg,dateStyleType,xCalendarMode } from "./interface"
export class xCalendar {
	date : tmDate;
	calendar:xDateArrayItemType[] = [];
	constructor(currentDate : string | number | Date | null = null) {
		this.date = new tmDate(currentDate)
	}
	isInCurrentMonth(current:Date,target:Date):boolean{
		let y1 = current.getFullYear()
		let m1 = current.getMonth()
		// let d1 = current.getDate()
		let y2 = target.getFullYear()
		let m2 = target.getMonth()
		// let d2 = target.getDate()
		return y1 == y2 && m1 == m2
	}
	isInRangeDate(current:Date,targets:Date[],mode:xCalendarMode):boolean{
		let y1 = current.getFullYear()
		let m1 = current.getMonth()
		let d1 = current.getDate()
		if(mode == 'day'){
			for(let i=0;i<targets.length;i++){
				let target = targets[i]
				let y2 = target.getFullYear()
				let m2 = target.getMonth()
				let d2 = target.getDate()
				if(y1 == y2 && m1 == m2 && d1 == d2){
					return true
				}
			}
		}else if(mode == 'range'){
			if(targets.length<2) return false;
			let start = targets[0]
			let end = targets[targets.length-1]
			return current.getTime()>start.getTime()&&current.getTime()<end.getTime()
		}
		
		return false
	}
	isInRangeDateByIndex(current:Date,targets:Date[],mode:xCalendarMode):number{
		let y1 = current.getFullYear()
		let m1 = current.getMonth()
		let d1 = current.getDate()
		if(mode == 'day'){
			for(let i=0;i<targets.length;i++){
				let target = targets[i]
				let y2 = target.getFullYear()
				let m2 = target.getMonth()
				let d2 = target.getDate()
				if(y1 == y2 && m1 == m2 && d1 == d2){
					return i
				}
			}
		}else if(mode == 'range'){
			if(targets.length<2) return -1;
			let start = targets[0]
			let end = targets[targets.length-1]
			if(current.getTime()>start.getTime()&&current.getTime()<end.getTime()) return -1
			if(current.getTime()==start.getTime()) return 0
			if(current.getTime()==end.getTime()) return 1
		}
		
		return -1
	}
	isDisabled(current:Date,start:Date|null,end:Date|null,targets:Date[]):boolean{
		let y1 = current.getFullYear()
		let m1 = current.getMonth()
		let d1 = current.getDate()
		let disabled = false
		for(let i=0;i<targets.length;i++){
			let target = targets[i]
			let y2 = target.getFullYear()
			let m2 = target.getMonth()
			let d2 = target.getDate()
			if(y1 == y2 && m1 == m2 && d1 == d2){
				disabled = true;
				break;
			}
		}
		
		
		if(start!=null && end!=null){
			if(start.getTime() <= end.getTime()){
				// 正常的日期范围：start <= current <= end
				disabled = disabled || (start.getTime() > current.getTime() || end.getTime() < current.getTime())
			}
			// 如果start > end，则忽略范围限制，只应用disabledDays
		} else {
			// 只有一个边界时，正常应用
			if(start!=null){
				disabled = disabled || start.getTime() > current.getTime()
			}
			if(end!=null){
				disabled = disabled || end.getTime() < current.getTime()
			}
		}
		
		return disabled
	}
	isInStart(current:Date,targets:Date[]):boolean{
		if(targets.length==0) return false;
		return targets[0].getTime() == current.getTime()
	}
	isInEnd(current:Date,targets:Date[]):boolean{
		if(targets.length<2) return false;
		return targets[targets.length-1].getTime() == current.getTime()
	}
	diffDays(start:Date,end:Date):number{
		return end.getTime()-start.getTime()
	}
	getDateStyle(current:Date,defaultStyle:xCalendarArgs,disabled:boolean,inMonth:boolean,inRange:boolean,isInStart:boolean,isInEnd:boolean,dateStyle:TM.tmCalendarDateStyle_type[],mode:xCalendarMode):dateStyleType{
		let nowdatestyleIndex = dateStyle.findIndex((d:TM.tmCalendarDateStyle_type):boolean => {
			return new Date(d.date.replace(/-/g,'/')).getTime() == current.getTime()
		})
		let item:TM.tmCalendarDateStyle_type|null = nowdatestyleIndex==-1?null:dateStyle[nowdatestyleIndex]
		const label = (item?.label??'') as string;
		let fontColor = (item?.fontColor??defaultStyle.fontColor) as string;
		fontColor = isInStart||isInEnd||(mode!='range'&&inRange) ? defaultStyle.activeFontColor:(inRange?defaultStyle.rangFontColor:fontColor)
		let bgColor = (item?.color??'transparent') as string;
		bgColor = isInStart||isInEnd||(mode!='range'&&inRange) ? defaultStyle.color : (inRange?defaultStyle.rangColor:bgColor)
		const bgstyle = {
			/** 底部文本 */
			label : label,
			/** 日期文字颜色 */
			fontColor : fontColor,
			backgroundColor : bgColor,
			opacity : disabled||!inMonth?0.5:1
		} as dateStyleBg
		
		const dotstyle = {
			/** 是否显示右角标 */
			dot : item?.dot??false,
			/** 右角标背景颜色 */
			dotColor : item?.dotColor??defaultStyle.color,
			/** 右角标文字颜色 */
			dotLabelColor : item?.dotLabelColor??'#ffffff',
			/** 注意如果dot为true，此内容为空就会显示小圆点。如果有内容优先显示本文本 */
			dotLabel : item?.dotLabel??'',
		} as dateStyleDot
		
		return {
			dot : dotstyle,
			dstyle : bgstyle
		} as dateStyleType
	}
	getCalendar(
		seekDay:number,
		mode:xCalendarMode,
		currentDate : string | number | Date | null = null,
		selectedDate:string[],
		start:Date|null,
		end:Date|null,
		defaultStyle:xCalendarArgs,
		dateStyle:TM.tmCalendarDateStyle_type[] = [],
		disabledDays:string[] = [],
		isPadding:boolean = true):xDateArrayItemType[]{

		const nowCutime = Date.now()
		let nowdate = (currentDate == null?this.date:new tmDate(currentDate)) as tmDate;
		const dateAr = nowdate.getDaysOf('m')
	
		let dates = [] as TM.tmDateDayInfoType[]
		if(isPadding){
			// 使用 seekDay 参数控制月份第一天的周偏移量
			// seekDay: 0=周一, 1=周二, 2=周三, 3=周四, 4=周五, 5=周六, 6=周日
			// 注意：week 值实际是 0=周日, 1=周一, 2=周二, 3=周三, 4=周四, 5=周五, 6=周六
			// 需要转换为 0=周一, 1=周二, 2=周三, 3=周四, 4=周五, 5=周六, 6=周日的映射
			let firstDayOfMonth = dateAr[0]
			let firstDayWeek = firstDayOfMonth.week
			
			// 将 week 值转换为 0=周一, 1=周二, ..., 6=周日的映射
			// 原始：0=周日, 1=周一, 2=周二, 3=周三, 4=周四, 5=周五, 6=周六
			// 目标：0=周一, 1=周二, 2=周三, 3=周四, 4=周五, 5=周六, 6=周日
			let mappedWeek = (firstDayWeek + 6) % 7 // 将周日(0)映射为6，周一(1)映射为0
			
			// 计算需要向前填充的天数
			let beforeNum = 0
			if (seekDay === 0) {
				// 周一开始：mappedWeek 为 0 时不需要填充
				beforeNum = mappedWeek
			} else {
				// 其他日期开始：计算到目标起始日的偏移量
				beforeNum = (mappedWeek - seekDay + 7) % 7
			}
			
			// 如果 beforeNum 为 0，说明第一天正好是目标起始日，不需要填充
			if (beforeNum > 0) {
				const beforeDates = new tmDate(firstDayOfMonth.date).getDaysOfNum(beforeNum,'before')
				dates = [...beforeDates,...dateAr]
			} else {
				dates = [...dateAr]
			}
			
			if(dates.length<42){
				//补齐最后一周的内容
				const lastDate = new tmDate(dates[dates.length-1].date);
				let lastWeek = lastDate.getDaysOfNum(42-dates.length,'after')
				dates = [...dates,...lastWeek]
			}
		}else{
			dates = dateAr
		}
		
		let selectedTargets = selectedDate.map((d:string):Date =>{
			
			return new Date(d.replace(/-/g,'/'))
		})
		let disabledDaysAs = disabledDays.map((d:string):Date =>{
			return new Date(d.replace(/-/g,'/'))
		})
		
		const current = nowdate.date
		const list = [] as xDateArrayItemType[]
		
		for(let i=0;i<dates.length;i++){
			let item = dates[i]
			let checkDate = new Date(item.date);
			const inmonth = this.isInCurrentMonth(checkDate,current);
			const inRange = this.isInRangeDate(checkDate,selectedTargets,mode);
			const disabled = this.isDisabled(checkDate,start,end,disabledDaysAs)
			const isInstart = this.isInStart(checkDate,selectedTargets)
			const isInEnd = this.isInEnd(checkDate,selectedTargets)
			const astyle = this.getDateStyle(checkDate,defaultStyle,disabled,inmonth,inRange,isInstart,isInEnd,dateStyle,mode)
			list.push({
				date : item,
				disabled : disabled,
				inCurrentMonth : inmonth,
				inRange : inRange,
				isInstart : isInstart,
				isInEnd : isInEnd,
				style : astyle
			})
			
		}
		
		
		// console.log(`执行组时间：${Date.now()-nowCutime}毫秒，循环数组：${dates.length}`)
		
		return list
	}
}