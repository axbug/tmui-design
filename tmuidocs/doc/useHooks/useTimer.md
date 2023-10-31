---
title: useHooks
---

##### useHooks tmui.design

### 倒计时 useTimer

倒计时hooks，功能强大，可以根据单位自行定制单位，毫秒级计算。使用hook函数，使用简单。

## 方法

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| useTimer | ```(options : TimerOptions)``` | TimerState | 直接执行即可 |



```ts
interface TimerOptions {
	totalTime : number; // 总时间，单位毫秒
	unit ?: 'ms' | 'ss' | 'mm' | 'hh' | 'dd'; // 时间单位是下方unit决定，比如unit:ms,那么这里的单位就是毫秒。如果是ss:那这里就是秒为单位
	format ?: string; // 时间格式，例如 'yy年dd天 hh时mm分ss秒ms毫秒'
}
interface FormattedTime {
	year : number;
	day : number;
	hour : number;
	minute : number;
	second : number;
	millisecond : number;
}

interface TimerState {
	times : ComputedRef<number>;
	formattedTime : ComputedRef<(format ?: string) => string>;
	timeObj : ComputedRef<FormattedTime>; // 新增 timeObj 属性
	/**0暂停中，1，运行中，-1从未开始运行过 */
	status : ComputedRef<0 | 1 | -1>;
	start : () => void;
	stop : () => void;
	restart : () => void;
	beforeStart : (call : () => void) => void;
	timeEnd : (call : () => void) => void;
	change : (call : (n : number) => void) => void;
}


```


## 使用
```ts
	import { useTimer } from '@/tmui/tool/useFun/useTimer'
	const { start, stop, formattedTime, status, restart, timeObj, times, change,timeEnd,beforeStart } = useTimer({ totalTime: 10 * 1000, unit: 'ms', format: 'dd天hh时mm分ss秒ms毫秒' });
	beforeStart(() => {
		//开始时
	})
	change((n) => {
		//变动时打印
		console.log(n)
	})
	timeEnd(() => {
		//结束时
	})
	//打印当前剩余的时间值，这个是根据你的unit单位来的，如果是ms,这里就是剩余的毫秒值，如果是ss就是单位为秒的值，依此类推。
	console.log(times.value)
	// 打印当前格式化的值 dd天hh时mm分ss秒ms毫秒
	console.log(formattedTime())
	//timeObj,返回当前FormattedTime对象结构
	console.log(timeObj)

```

## 注意事项
不管formattedTime用在哪，它都能提供格式化参数比如:```<text>formattedTime('dd天ss秒')</text>```
