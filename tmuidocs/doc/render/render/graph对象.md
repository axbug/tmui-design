---
title: graph对象
---


### :ram:graph对象

:::tip 获取graph对象实例


1.你可以通过```$refs.ref.addGraph({...})```
添加图形后，将会返回一个图形对象，如果你提供的是objec图形
参数，将返回一个图形对象。如果你提供的数组图形对象参数如：<br>
```$refs.ref.addGraph([{...},{...}])```将返回数组图形对象。<br>
2.也可以通过render对象中的属性render.graphs取得当前图形数组列表。

:::

下面是介绍graph对象方法及其属性


## :ram:graph属性

### render
```
/**
 * @description 所属的render实例
 */
render!: render
```
### shape
```
/**
 * @description 图形形状信息
 */
shape!: Shape
```
### style
```
/**
 * @description 图形样式信息
 */
style!: Style
```
### visible
```
/**
 * @description 是否渲染图形
 */
visible: boolean = true
```
### drag
```
/**
 * @description 是否启用hover检测
 * 进行拖拽操作
 */
hover: boolean = false
```
### index
```
/**
 * @description index越高 层级越高
 *
 * 优先渲染层级高者
 */
index: number = 1
```
### animationDelay
```
/**
 * @description 动画延迟(毫秒)
 */
animationDelay: number = 0
```
### animationFrame
```
/**
 * @description 每次动画的帧数
 *
 * 帧数越多 动画时长越长
 */
animationFrame: number = 20
```
### animationCurve
**动画类型**
```
  linear,easeInSine,easeOutSine,easeInOutSine
  easeInQuad,easeOutQuad,easeInOutQuad,easeInCubic
  easeOutCubic,easeInOutCubic,easeInQuart,easeOutQuart
  easeInOutQuart,easeInQuint,easeOutQuint,easeInOutQuint
  easeInBack,easeOutBack,easeInOutBack,easeInElastic
  easeOutElastic,easeInOutElastic,easeInBounce
  easeOutBounce,easeInOutBounce
```
```
/**
 * @description 动画动效曲线
 * @link https://github.com/jiaming743/Transition
 */
animationCurve: EaseCurve = 'linear'
```
### animationPause
```
/**
 * @description 是否处于暂停动画状态
 */
animationPause: boolean = false
```
### hoverRect
```
/**
 * @description 矩形悬浮检测盒
 * 如果配置该项 将优先使用检测盒进行悬浮检测
 * @example hoverRect = [0, 0, 100, 100] // [Rect start x, y, Rect width, height]
 */
hoverRect?: HoverRect
```
### 鼠标事件mouseenter/mouseouter/mousedown/mouseup

```js
//鼠标事件处理器
//比如：
$refs.ref.addGraph({
	...,
	mousedown:function(e){
		//这里会触发，用户点击该图形时触发的事件。
	},
	...
})
```
### 触摸事件touchmove/touchstart/touchend
**只有在添加图形参数时提供对对应的事件方法，才会被执行。**
```js
//触摸事件处理器
//比如：
$refs.ref.addGraph({
	...,
	touchstart:function(e){
		//这里会触发，用户点击该图形时触发的事件。
	},
	...
})
```
### animationQueue
```
/**
 * @description 图形动画队列数据
 */
animationQueue: AnimationQueueItem<Shape>[] = []
```







## :ram:graph实例方法

### attr
**此方法修改立即生效没有动画效果**
```
//修改图形的填充颜色
graph.attr('style',{fill:'red'})
//修改rect图形的宽
graph.attr('shape',{w:100})
```
```
/**
 * @description 修改图形状态
 * @param {keyof GraphConfig<Shape>} key 要修改的属性键
 * @param {Partial<GraphConfig<Shape>[typeof key]>} value 修改的目标状态
 * @param {boolean} reDraw 是否重新渲染
 */
attr(
  key: keyof GraphConfig<Shape>,
  value: Partial<GraphConfig<Shape>[typeof key]>,
  reDraw: boolean = true
): void {
  // ...
}
```
### animation
**此方法修改后会产生动画效果**
结束后返回的是Promise。
```
/**
 * @description 修改图形形状或样式(伴随动画)
 * @param {AnimationKey} key 要修改的属性键 ('shape' | 'style')
 * @param {Partial<Shape> | StyleConfig<string | RgbaValue>} value 修改的目标状态
 * @param {boolean} 是否等待后续操作 暂不渲染
 */
async animation(key: 'shape', value: Partial<Shape>, wait?: boolean): Promise<void>
async animation(
  key: 'style',
  value: StyleConfig<string | RgbaValue>,
  wait?: boolean
): Promise<void>
async animation(
  key: AnimationKey,
  value: Partial<Shape> | StyleConfig<string | RgbaValue>,
  wait: boolean = false
): Promise<void> {
  // ...
}
```
### animationEnd
```
/**
 * @description 直接跳至最后一帧动画
 */
animationEnd(): void {
  // ...
}
```
### pauseAnimation
```
/**
 * @description 暂停动画
 */
pauseAnimation(): void {
  // ...
}
```
### playAnimation
```
/**
 * @description 尝试进行动画
 */
playAnimation(): Promise<void> {
  // ...
}
```






## :ram:graph生命周期

### beforeAdd
```
/**
 * @description 图形添加前被调用
 */
beforeAdd?: (graph: Graph) => any
```
### added
```
/**
 * @description 图形添加后被调用
 */
added?: (graph: Graph) => any
```
### beforeDraw
```
/**
 * @description 图形渲染前被调用
 */
beforeDraw?: (graph: Graph) => any
```
### drawed
```
/**
 * @description 图形渲染后被调用
 */
drawed?: (graph: Graph) => any
```
### beforeDelete
```
/**
 * @description 图形删除前被调用
 */
beforeDelete?: (graph: Graph) => any
```
### deleted
```
/**
 * @description 图形删除后被调用
 */
deleted?: (graph: Graph) => any
```

