---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 展示组件

# 角标 TmBadge

角标,位置丰富。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/badge"></webview>

::: details 示例模板

<<< ../../../src/pages/index/badge.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| fontSize | string\|number | "20" | 字体大小 | 
| bgColor | string | "error" | 背景颜色 | 
| fontColor | string | "white" | 字体颜色 | 
| maxCount | string\|number | 99 | - | 
| label | string\|number\|boolean | "" | 如果是boolean就显示角标小红点如果是string显示文本标签如果是数字显示数字并启用maxCount | 
| position | string | "right" | 角标出现的位置 | 
| offset | number[] | ():number[]=\>[0,0]asnumber[] | 角标偏移量 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | 默认内容插槽 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


