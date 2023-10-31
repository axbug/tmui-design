---
title: useHooks
---

##### useHooks tmui.design

### 获取元素尺寸 useSize

获取元素尺寸及位置，所有解析出来的变量是动态的。

## 方法

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| useSize | (select : string, isAll : boolean = false) | result | 直接执行即可 |

select:是元素的选择器，可以是class,id等
isAll:表示是否获取全部，默认只获取一个

```ts

// result:返回的结构体：
{
	// 单个查询的结果，如果isAll为true，是结果集中的第一个
	size: Ref<elementSizeType>,
	// 如果isAll为true,
	allSize: Ref<elementSizeType[]>,
}
// elementSizeType结构 

interface elementSizeType {
	left : number,
	top : number,
	bottom : number,
	right : number,
	width : number,
	height : number,
	id : string,
	dataset : {
		[key : string] : any
	}
}

```


## 使用
```ts
import { useSize } from '@/tmui/tool/useFun/useSize'
const {size,allSize} = useSize(".test");
// 打印，注意它的尺寸可能是动态变化的。因为是在onMounted中取得，窗口尺寸变化，也可能导致变化。
console.log(size.value)

```

## 注意事项
查询的结果尺寸可能是动态变化的。因为是在onMounted中取得，窗口尺寸变化，也可能导致变化。
