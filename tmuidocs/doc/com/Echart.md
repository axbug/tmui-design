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

想升级包怎么办？<br>
只要在cli项目的根目录下执行：```npm install echarts --save```,如果想要具体版本号：```npm install echarts@5.3.2 --save```，
把后面的版本号改下目标版本号就可以了。

:::

### :hot_pepper: 图表 Chart 示例效果

<webview url="https://tmui.design/h5/#/pages/chart/index"></webview>

::: details 示例代码

@[code vue](pages/chart/chart.nvue)

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