---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 图表 Chart <Badge type="danger" text="NVUE页面不支持，请使用VUE页面" vertical="middle" />
此百度图表，不兼容nvue页面，因此如果你想使用，必须vue页面来使用。

---

::: tip 高效精简
默认是全包引入，大概是500kb左右吧。具体我也没测算。<br>
如果你只是想使用某部分图表功能，需要精简的话，可以见[百度文档](https://echarts.apache.org/handbook/zh/basics/import#%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5-echarts-%E5%9B%BE%E8%A1%A8%E5%92%8C%E7%BB%84%E4%BB%B6)<br>
具体可以看下我组件目录tmui->components->tm-chart->simple.js,这是一个我配置好的精简包。使用时可在我的组件源码tm-chart中
找到第67行，把此行注释去掉，引用。然后把第65行，注释掉不启用。当然你可根据自己的需要精简模块功能。

----

:::tip 注意事项
见下方
:::

```ts
/**
 * Echart图表
 * @description 使用最新的5.3.2 ，注意不能在nvue上使用，请改用vue页面。已经兼容了pc端
 * ref:getChart:获取成功渲染的图表。
 * 事件：onInit:渲染成功后执行，并返回chart对象。
 * 安装百度图表 npm install echarts --save 后需要作下生产下的兼容，发布不影响，但开发时会报错，很烦。
 * 请找到：node_modules/echarts/lib/core/echarts.js,
 * 原文：
 * 
 * if (process.env.NODE_ENV !== 'production') {
  var root =
  hasWindow ? window : global;
  defaultRenderer = root.__ECHARTS__DEFAULT__RENDERER__ || defaultRenderer;
  var devUseDirtyRect = root?.__ECHARTS__DEFAULT__USE_DIRTY_RECT__;
  defaultUseDirtyRect = devUseDirtyRect == null ? defaultUseDirtyRect : devUseDirtyRect;
  
  改成：
  * if (process.env.NODE_ENV !== 'production') {
   var root =
   hasWindow ? window : global;
   【修改一】defaultRenderer = root?.__ECHARTS__DEFAULT__RENDERER__ ?? defaultRenderer;
   【修改二】var devUseDirtyRect = root?.__ECHARTS__DEFAULT__USE_DIRTY_RECT__??null;
   【修改三】defaultUseDirtyRect = devUseDirtyRect == null ? defaultUseDirtyRect : devUseDirtyRect;
}
 */

```


想升级包怎么办？<br>
只要在cli项目的根目录下执行：```npm install echarts --save```,如果想要具体版本号：```npm install echarts@5.3.2 --save```，
把后面的版本号改下目标版本号就可以了。

:::

### :hot_pepper: 图表 Chart 示例效果

<webview url="https://tmui.design/h5/#/pages/chart/index"></webview>

::: details 示例代码

@[code vue](pages/chart/chart.vue)

:::


### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :x: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | Number | 750 | 宽度，单位rpx |
| height | Number | 450 | 高度，单位rpx |


### :rose: 事件
想要渲染一个图表，一定要在onInit函数体内执行渲染图表。（即图表初始成功后）

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| onInit | - | Chart对象 | 百度图表对象，[文档](https://echarts.apache.org/zh/index.html) |
| click |  | event | 点击 |
| touchstart |  | event | 按下 |
| touchmove |  | event | 移动 |
| touchend |  | event | 松开 |
| mousedown |  | event | 按下 |
| mousemove |  | event | 移动 |
| mouseup |  | event | 松开 |

### :corn: slot插槽
无

### :green_salad: ref方法
无