---
title: render对象
---

### :ram:render渲染器介绍

:::tip 获取render的对象实例

tm-render创建成功后，将会实例化一个render对象，
你可以通过ref方法获得```$refs.ref.getRender()```
render实例。

:::

下面是介绍render的对象方法及其属性
[[toc]]


## :ram:render属性

### dpr
```
/**
 * @description Device Pixel Ratio
 */
readonly dpr: number = 1
```
### ctx
```
/**
 *当前用于渲染的Canvas Context
 */
readonly ctx
```
### area
```
/**
 * @description Canvas 宽高
 */
readonly area: [number, number] = [0, 0]
```
### graphs
```
/**
 * @description 已经添加的图形
 */
readonly graphs: Graph[] = []
```





## :ram:render原型方法
### add
**请注意，这是原版的方法，添加后不会立即显示，需要你再次渲染才显示**<br>
!!!因此我不建议你使用此方法来添加图形，而是使用我兼容过的ref方法来<br>
[添加图形](/guid/render/组件属性及方法.html#render-ref%E6%96%B9%E6%B3%95)，使用```$refs.ref.addGraph ```<br>
功能等同add，但具有全端兼容。并且会生成自己的全局唯一标识tmid，此add方法只在此介绍，但不要使用。
```
/**
 * @description 向CRender实例中添加图形
 * @param {Graph | Graph[]} graph 要添加的图形
 * @param {boolean} wait 是否等待后续操作 暂不渲染
 *
 * 如果需要添加大量的图形 应尽量一次完成添加 避免多次重复渲染
 */
add(graph: Graph | Graph[], wait: boolean = false): void {
  // ...
}
```
### delGraph
```
/**
 * @description 删除CRender实例中添加的图形
 * @param {Graph | Graph[]} graph 要删除的图形
 * @param {boolean} wait 是否等待后续操作 暂不渲染
 *
 * 如果需要删除大量的图形 应尽量一次完成添加 避免多次重复渲染
 */
delGraph(graph: Graph | Graph[], wait: boolean = false): void {
  // ...
}
```
### delAllGraph
```
/**
 * @description 删除所有图形
 */
delAllGraph(): void {
  // ...
}
```
### launchAnimation
**事实上此方法有问题，如果你是循环添加图形至实例中，并且添加了动画，属性为true,依然会运行**
```
/**
 * @description 如果graphs中存在动画队列不为空且不处于暂停动画状态的图形
 * 将进行动画渲染
 */
launchAnimation(): void | Promise<void> {
  // ...
}
```
### animateAble
**事实上此方法有问题，如果你是循环添加图形至实例中，并且添加了动画，属性为true,依然会运行**
```
/**
 * @description 是否存在动画队列不为空且不处于暂停动画状态的图形
 */
animateAble(): boolean {
  // ...
}
```
### clearArea
**清空后，如果你有动画还在运行，清不了，它只表示清除画布，不是清除所有图形**
如果需要彻底清空，需要先把所有动画
停掉，然后delAllGraph清空所有图形，然后需要等待300ms左右，才能继续操作
当然这个h5是不需要等待的。在app和小程序中，需要响应时间的等待。
```
/**
 * @description 清空Canvas画布
 */
clearArea(): void {
  // ...
}
```





<testtime> </testtime>