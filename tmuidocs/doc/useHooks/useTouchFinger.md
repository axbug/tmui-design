---
title: useHooks
---

##### useHooks tmui.design

### 手势库 useTouchFinger

这是一个封装完整的手势库hooks函数，适合定义各种手势功能逻辑界面，比如滑动上拉弹跳，或者下拉关闭界面。双指缩放元素等等功能。

## 方法

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| useTouchFinger | - | result | 直接执行即可 |

下方解析出来后的方法或者属性都有ts类型提示，我这里不不多解释了。如果想仔细看用处，请直接查看源码，源码已经注释好了。

```ts

// result:返回的结构体,可以直接解构使用：
{
	touchstart,
	touchmove, 
	touchend, 
	touchcancel, 
	//添加监听事件 type为监听的类型，call为回调函数
	addEventListener:(type:"tap" | "pinch" | "rotate" | "touchStart" | "touchMove" | "touchEnd" | "touchCancel"
            | "pressMove" | "doubleTap" | "longTap" | "swipe" | "singleTap" | "multipointStart" | "multipointEnd",call:Function),
	//当手指触摸屏幕时，距离它的上一次的距离
	deltaXY, 
	//双指捏合之间的距离长度
	pinchStartLen, 
	//双指缩放时的缩放率,最小为0.1
	scale, 
	//双指旋转滑动时的角度。
	angle, 
	//单指在屏幕滑动时的方向
	direction, 
	//单指点击时的位置 
	preTapPosition,
}

```
** addEventListener的用法就是为上传添加相关事件。其中的type就是事件名称，如果不懂什么意思请直接查找阅读源码，已经注释好了。


## 使用
```ts
// view上绑定事件
<view
	@touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
    @touchcancel="touchcancel"
>
</view>

import { useTouchFinger } from '@/tmui/tool/useFun/useTouchFinger'
const { touchstart, 
        touchmove, 
        touchend, 
        touchcancel, 
        addEventListener,
        deltaXY, 
        pinchStartLen, 
        scale, 
        angle, 
        direction, 
        preTapPosition,
        } = useTouchFinger();
// 添加监听事件,当双指在元素旋转时触发
addEventListener('rotate',(evt)=>{
	// 打印当前旋转的角度。
	console.log(rotate.value)
})

// 添加监听事件,当双指在元素捏合时触发
addEventListener('pinch',(evt)=>{
	// 打印当前旋捏合缩放的值
	console.log(scale.value)
})

// 添加监听事件,当单指在元素滑动时触发
addEventListener('swipe',(evt)=>{
	// 打印当前滑动的方向
	console.log(direction.value)
})

```

## 类型参考
```ts
//direction方向
Left|Right|Top|Bootom

```

## 注意事项

属性都最Ref类型，访问时需要带.value。
