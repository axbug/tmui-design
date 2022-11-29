import {showDetail,timeDetailType,timeArrayType} from "./interface"
import * as dayjs from "../../tool/dayjs/esm/index"
import isSameOrBefore from '../../tool/dayjs/esm/plugin/isSameOrBefore/index';
import isSameOrAfter from '../../tool/dayjs/esm/plugin/isSameOrAfter/index';
import isBetween from '../../tool/dayjs/esm/plugin/isBetween/index';
type dateType = 'year'|'month'|'date'|'hour'|'minute'|'second'
const DayJs = dayjs.default;
DayJs.extend(isBetween)
DayJs.extend(isSameOrBefore)
DayJs.extend(isSameOrAfter)
function rangeNumber(from=0,to=0){
	let range:Array<number> = []
	from = from >= 0 ? from : 1
	for (let i = from; i <= to; i++) {
		range.push(i)
	}
	return range
}

/** 根据显示的时间字段返回相关的时间列的可选选项. */
export function rangeTimeArray(dateStr:string|number|Date,start:string|number|Date,end:string|number|Date,detail:showDetail){
	let startDayjs = DayJs(start);
	let endDayjs = DayJs(end);
	let dateDayjs = DayJs(dateStr);
	// 计算每一列表数组开始和结束的数字.
	let dateArray = {
		year:[] as Array<number>,
		month:[] as Array<number>,
		date:[] as Array<number>,
		hour:[] as Array<number>,
		minute:[] as Array<number>,
		second:[] as Array<number>,
	};
	// 计算年
	// dateArray.push()
	// 计算月,这里要判断如果大于开始的时候,月就从开始计算,如果小于结束,就以结束计算,如果是在之间就从0开始.
	//后面的月,天,时,分秒,都是同一道理.

	function getar(timeType:dateType){

		let temp:Array<number> = []
		if(timeType=='year'){
			temp = rangeNumber(startDayjs.get("year"),endDayjs.get("year"));
		}else if(timeType=='month'){
			setd(timeDetailType.month,timeDetailType.year)
		}else if(timeType=='date'){
			setd(timeDetailType.day,timeDetailType.month)
		}else if(timeType=='hour'){
			setd(timeDetailType.hour,timeDetailType.day)
		}else if(timeType=='minute'){
			setd(timeDetailType.minute,timeDetailType.hour)
		}else if(timeType=='second'){
			setd(timeDetailType.second,timeDetailType.minute)
		}
		
		function setd(type:timeDetailType,timeType:timeDetailType){
			let start = 0
			let end = 0
			let nowtm = dateDayjs
			if(dateDayjs.isSameOrBefore(startDayjs,timeType)){
				nowtm = startDayjs
				start = startDayjs.get(type)
				end = startDayjs.endOf(timeType).get(type)
				if(nowtm.isSame(endDayjs,timeType)){
					end = endDayjs.get(type)
				}
			}else if(dateDayjs.isSameOrAfter(endDayjs,timeType)){
				nowtm = endDayjs
				start = endDayjs.startOf(timeType).get(type)
				end = endDayjs.get(type)
				if(nowtm.isSame(startDayjs,timeType)){
					start = startDayjs.get(type)
				}
			}else {
				start = dateDayjs.startOf(timeType).get(type)
				end = dateDayjs.endOf(timeType).get(type)
			}
			temp = rangeNumber(start,end)
			
		}
		dateArray[timeType] = temp;
		
	}
	let key:any = ""
	for(key in detail){
		if(key=="day"){
			key = "date"
		}
		getar(key)
	}
	return dateArray;
}

/**
 * 根据现有时间取得当前的索引位置顺序
 * @param tmArray 
 * @param nowtime 
 */
export function getIndexNowbydate(tmArray:timeArrayType,nowtime:dayjs.Dayjs){
	let key:dateType="year"
	let d =DayJs(nowtime)
	let year = d.get('year');
	let month = d.get('month');
	let date = d.get('date');
	let hour = d.get('hour');
	let minute = d.get('minute');
	let second = d.get('second');
	function isFu(n:number){
		return n==-1?0:n;
	}
	return [
		isFu(tmArray.year.findIndex(el=>el===year)),
		isFu(tmArray.month.findIndex(el=>el===month)),
		isFu(tmArray.date.findIndex(el=>el===date)),
		isFu(tmArray.hour.findIndex(el=>el===hour)),
		isFu(tmArray.minute.findIndex(el=>el===minute)),
		isFu(tmArray.second.findIndex(el=>el===second)),
	]
}
/**
 * 根据现有索引值返回当前时间。
 * @param tmArray 
 * @param nowtime 
 */
export function getNowbyIndex(tmArray:timeArrayType,nowIndex:Array<number>){
	let year = tmArray.year[nowIndex[0]];
	let month = tmArray.month[nowIndex[1]];
	let date = tmArray.date[nowIndex[2]];
	let hour = tmArray.hour[nowIndex[3]];
	let minute = tmArray.minute[nowIndex[4]];
	let second = tmArray.second[nowIndex[5]];
	if(typeof year == 'undefined'){
		year = tmArray.year[tmArray.year.length-1]
	}
	if(typeof month == 'undefined'){
		month = tmArray.month[tmArray.month.length-1]
	}
	if(typeof date == 'undefined'){
		date = tmArray.date[tmArray.date.length-1]
	}
	if(typeof hour == 'undefined'){
		hour = tmArray.hour[tmArray.hour.length-1]
	}
	if(typeof minute == 'undefined'){
		minute = tmArray.minute[tmArray.minute.length-1]
	}
	if(typeof second == 'undefined'){
		second = tmArray.second[tmArray.second.length-1]
	}

	let str = year
	+"/"+
	(month+1)
	+"/"+date
	+" "+
	hour
	+":"+
	minute
	+":"+
	second
	return DayJs(str).format("YYYY/MM/DD HH:mm:ss")
}
/**
 * 检查提供的时候是否是有效的时间段内，并返回正确的可用时间.
 * @param nowdate 
 * @param start 
 * @param end 
 */
export function checkNowDateisBetween(nowdate:string|number|Date|dayjs.Dayjs,start:string|number|Date|dayjs.Dayjs,end:string|number|Date|dayjs.Dayjs){
	
	nowdate = DayJs(nowdate).isValid()?DayJs(nowdate):DayJs()
	start = DayJs(start)
	end = DayJs(end)
	if(nowdate.isSameOrBefore(start)){
		return start.format("YYYY/MM/DD HH:mm:ss")
	}
	if(nowdate.isSameOrAfter(end)){
		return end.format("YYYY/MM/DD HH:mm:ss")
	}
	return nowdate.format("YYYY/MM/DD HH:mm:ss")
}

