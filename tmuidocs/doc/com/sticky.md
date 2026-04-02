---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 导航组件

# 粘性布局 TmSticky

对于需要多个头定位的页面，可以使用粘性布局，将页面分为多个区域，每个区域可以单独设置粘性。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/sticky"></webview>

::: details 示例模板

<<< ../../../src/pages/index/sticky.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | 正常布局内容,如果想粘性头,tm-sticky-header组件必须是直接子节点组件 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


