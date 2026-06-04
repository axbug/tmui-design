---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 展示组件

# 百度图表 TmEchart

可以通过onInt或者ref函数getChart取得ECharts对象自行处理和设置数据,这个组件使用会超过530kb+大小,请小心你的包大小限制,超过大小哦.
使用时请注意找到图表目录：node_modules/echarts/lib/core/echarts.js,
      把原来的：
      defaultRenderer = root.__ECHARTS__DEFAULT__RENDERER__ || defaultRenderer;
      defaultCoarsePointer = retrieve2(root.__ECHARTS__DEFAULT__COARSE_POINTER, defaultCoarsePointer);
      var devUseDirtyRect = root.__ECHARTS__DEFAULT__USE_DIRTY_RECT__;
      改成如下：
      defaultRenderer = root?.__ECHARTS__DEFAULT__RENDERER__ ?? defaultRenderer;
      defaultCoarsePointer = retrieve2(root?.__ECHARTS__DEFAULT__COARSE_POINTER, defaultCoarsePointer);
      var devUseDirtyRect = root?.__ECHARTS__DEFAULT__USE_DIRTY_RECT__??null;

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/echart"></webview>

::: details 示例模板

<<< ../../../src/pages/index/echart.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | string\|number | '100%' | 宽度css合法值,不要用auto | 
| height | string\|number | '300px' | 高度，css合法值,不要用auto，需要一个值,单位随意，不带单位默认是rpx | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| onInit | 名称：chart,对象, | - | 初始成功触发 | 
| click | 名称：chart,的事件对象参数, | - | 图表元素被点击时触发 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| getChart | - | - | - | 
| getImg | - | - | - | 


