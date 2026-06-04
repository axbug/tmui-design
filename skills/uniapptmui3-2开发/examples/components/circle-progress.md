---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 反馈组件

# 圆环进度条 TmCircleProgress

通用进度条组件。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/circle-progress"></webview>

::: details 示例模板

<<< ../../../src/pages/index/circle-progress.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | number | 0 | 当前进度值 | 
| min | number | 0 | 最小值 | 
| startAngle | number | 0 | 起始角度，默认是0，正上方顺时针 | 
| max | number | 100 | 最大值 | 
| color | string | "" | 进度条颜色 | 
| linearColor | string | '' | 线性渐变颜色 | 
| bgColor | string | "info" | 背景颜色 | 
| darkBgColor | string | "" | 暗黑模式背景颜色 | 
| showLabel | union | true | 是否显示进度标签 | 
| labelColor | string | "#333" | 标签文字颜色 | 
| darkLabelColor | string | - | 暗黑标签文字颜色 | 
| labelUnit | string | '%' | 暗黑标签文字颜色 | 
| labelFontSize | union | 24 | 标签字体大小 | 
| lineWidth | union | 10 | 线宽 | 
| size | union | 100 | 圆角环直径大小（宽高相等） | 
| duration | number | 500 | 动画持续时间（毫秒） | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:modelValue | - | - | 等同v-model | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | 名称：binding,percentage 类型：- 
名称：binding,value 类型：- 
 | 标签插槽 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


