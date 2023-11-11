---
title: useHooks
---

##### useHooks tmui.design

### 窗口信息 useWindowInfo

获取当前页面的窗口信息，可能是动态变化的。

## 方法

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| useWindowInfo | - | ```result:Reactive<{}>``` | 直接执行即可 |

```ts

// result:返回的结构体：
{
	//正文距离顶部，仅h5下存在系统状态栏是有值，其它平台默认为0
	top:number,
	//顶部安全栏高度，只有在全屏页面无系统状态栏时，会有值，其它平台或者场景为0
	topSafe:number,
	width: number,
	height: number,
	statusBar: number,
	navigatorBar: number,
	//底部安全栏高度
	bottomSafe: number,
	// 当前是否是nvue页面
	nvue:boolean,
	// 是否存在系统自带的状态栏，针对h5优化。仅h5下有效
	h5IsSystemBar:boolean
}

```


## 使用
```ts
import { useWindowInfo } from '@/tmui/tool/useFun/useWindowInfo'
const winSize = useWindowInfo();
// 打印，注意它的尺寸可能是动态变化的。因为是在onMounted中取得，窗口尺寸变化，也可能导致变化。
console.log(winSize)

```

## 注意事项
查询的结果尺寸可能是动态变化的。因为是在onMounted中取得，窗口尺寸变化，也可能导致变化。
