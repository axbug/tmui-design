---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 常用组件

# 布局Row TmRow

快速排版布局利器,内只能放置tmCol组件,默认是5列栅格,可以自行更改

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/row"></webview>

::: details 示例模板

<<< ../../../src/pages/index/row.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| column | number\|string | 5 | 默认列数,请不要动态修改此值。 | 
| justify | string | "flex-start" | 子元素左右对齐排列 | 
| align | string | "flex-start" | 子元素上下对齐排列是align-items：值 | 
| wrap | boolean | true | 是否自动断行. | 
| gutter | string\|number\|Array\<string \| number\> | '0' | 上下左右间隙.[row,col]:x表示纵向间隙,y表示横向间隙col,[col]:表示横向和纵向之间的间隙. | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | - | - | 点击事件 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | 默认插槽,请允许放置tmCol组件 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


