---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 导航组件

# 粘性布局头 tmStickyHeader

只能是tm-sticky直接子节点,可以在节点内自由布局.可以多个放到tm-sticky中形成多个头置顶,当滚动到此位置时自动置顶.

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
| top | number\|string | 0 | 顶部偏移距离,必须是px单位. | 
| zIndex | number\|string | 2 | 顶部距离 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | 头部内容 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


