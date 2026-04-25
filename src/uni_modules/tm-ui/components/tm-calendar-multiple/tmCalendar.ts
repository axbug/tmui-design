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
		let y2 = target.getFullYear()
		let m2 = target.getMonth()
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

		let nowdate = (currentDate == null?this.date:new tmDate(currentDate)) as tmDate;
		const dateAr = nowdate.getDaysOf('m')
	
		let dates = [] as TM.tmDateDayInfoType[]
		if(isPadding){
			let firstDayOfMonth = dateAr[0]
			let firstDayWeek = firstDayOfMonth.week
			let mappedWeek = (firstDayWeek + 6) % 7
			let beforeNum = seekDay === 0 ? mappedWeek : (mappedWeek - seekDay + 7) % 7
			
			if (beforeNum > 0) {
				const beforeDates = new tmDate(firstDayOfMonth.date).getDaysOfNum(beforeNum,'before')
				dates = [...beforeDates,...dateAr]
			} else {
				dates = [...dateAr]
			}
			
			if(dates.length<42){
				const lastDate = new tmDate(dates[dates.length-1].date);
				let lastWeek = lastDate.getDaysOfNum(42-dates.length,'after')
				dates = [...dates,...lastWeek]
			}
		}else{
			dates = dateAr
		}
		
		// 预计算：选中日期 → Map<dateKey, index> O(1)查找
		const selectedTargets: Date[] = [];
		const selectedKeyMap = new Map<string, number>();
		for(let i=0;i<selectedDate.length;i++){
			const d = new Date(selectedDate[i].replace(/-/g,'/'));
			selectedTargets.push(d);
			selectedKeyMap.set(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`, i);
		}

		// 预计算：禁用日期 → Set<dateKey> O(1)查找
		const disabledKeySet = new Set<string>();
		for(const d of disabledDays){
			const dt = new Date(d.replace(/-/g,'/'));
			disabledKeySet.add(`${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()}`);
		}

		// 预计算：dateStyle → Map<timestamp, item> O(1)查找
		const dateStyleMap = new Map<number, TM.tmCalendarDateStyle_type>();
		for(const ds of dateStyle){
			dateStyleMap.set(new Date(ds.date.replace(/-/g,'/')).getTime(), ds);
		}

		// 预计算：start/end/range边界时间戳
		const startTime = start ? start.getTime() : null;
		const endTime = end ? end.getTime() : null;
		const hasValidRange = startTime !== null && endTime !== null && startTime <= endTime;
		const firstSelectedTime = selectedTargets.length > 0 ? selectedTargets[0].getTime() : 0;
		const lastSelectedTime = selectedTargets.length >= 2 ? selectedTargets[selectedTargets.length-1].getTime() : 0;

		const currentYear = nowdate.date.getFullYear();
		const currentMonth = nowdate.date.getMonth();
		const list = [] as xDateArrayItemType[]
		
		for(let i=0;i<dates.length;i++){
			const item = dates[i]
			const dateParts = item.date.split('/');
			const cy = parseInt(dateParts[0]);
			const cm = parseInt(dateParts[1]) - 1;
			const cd = parseInt(dateParts[2]);
			const checkTime = new Date(cy, cm, cd).getTime();
			const dateKey = `${cy}-${cm}-${cd}`;

			// 内联 isInCurrentMonth
			const inmonth = cy === currentYear && cm === currentMonth;

			// 内联 isDisabled：Set查找 + 范围检查
			let disabled = disabledKeySet.has(dateKey);
			if(hasValidRange){
				disabled = disabled || checkTime < startTime! || checkTime > endTime!;
			} else {
				if(startTime !== null) disabled = disabled || checkTime < startTime;
				if(endTime !== null) disabled = disabled || checkTime > endTime;
			}

			// 内联 inRange / isInStart / isInEnd
			let inRange = false;
			let isInstart = false;
			let isInEnd = false;

			if(mode === 'day'){
				inRange = selectedKeyMap.has(dateKey);
				isInstart = selectedTargets.length > 0 && checkTime === firstSelectedTime;
				isInEnd = selectedTargets.length >= 2 && checkTime === lastSelectedTime;
			} else if(mode === 'range'){
				if(selectedTargets.length >= 2){
					inRange = checkTime > firstSelectedTime && checkTime < lastSelectedTime;
					isInstart = checkTime === firstSelectedTime;
					isInEnd = checkTime === lastSelectedTime;
				} else if(selectedTargets.length === 1){
					isInstart = checkTime === firstSelectedTime;
				}
			}

			// 内联 getDateStyle：Map查找替代findIndex
			const styleItem = dateStyleMap.get(checkTime) || null;
			const label = (styleItem?.label ?? '') as string;
			const isActive = isInstart || isInEnd || (mode !== 'range' && inRange);
			let fontColor = isActive ? defaultStyle.activeFontColor : (inRange ? defaultStyle.rangFontColor : (styleItem?.fontColor ?? defaultStyle.fontColor) as string);
			let bgColor = isActive ? defaultStyle.color : (inRange ? defaultStyle.rangColor : (styleItem?.color ?? 'transparent') as string);

			list.push({
				date : item,
				disabled : disabled,
				inCurrentMonth : inmonth,
				inRange : inRange,
				isInstart : isInstart,
				isInEnd : isInEnd,
				style : {
					dot: {
						dot: styleItem?.dot ?? false,
						dotColor: styleItem?.dotColor ?? defaultStyle.color,
						dotLabelColor: styleItem?.dotLabelColor ?? '#ffffff',
						dotLabel: styleItem?.dotLabel ?? '',
					},
					dstyle: {
						label: label,
						fontColor: fontColor,
						backgroundColor: bgColor,
						opacity: disabled || !inmonth ? 0.5 : 1
					}
				} as dateStyleType
			})
		}
		
		return list
	}
}