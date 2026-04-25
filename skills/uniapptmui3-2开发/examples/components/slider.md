---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 滑动条 TmSlider

滑动条组件，用于滑动条中展示选项。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/slider"></webview>

::: details 示例模板

<<< ../../../src/pages/index/slider.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | number | 0 | 等同v-model当前值 | 
| max | number | 100 | 最大值 | 
| min | number | 0 | 最小值 | 
| disabled | boolean | false | 是否禁用 | 
| step | number | 1 | 步进值 | 
| stepCount | number | 0 | 步进值刻度值比如max-min为100总值,刻度为20,那么setpCount就是4, | 
| color | string | '' | 激活时的颜色，空值取全局值，linearColor不空时取背景色会取linearColor，但其它label和按钮焦点色还是这个值。 | 
| bgColor | string | 'info' | 默认的背景色 | 
| size | string | '12' | 滑条的大小 | 
| btnSize | string | '46' | 滑块的尺寸 | 
| round | string | '12' | 滑条的圆角。为空值时，取全局的进度条值 | 
| showLabel | boolean | false | 是否显示进度条上的label文本 | 
| labelColor | string | 'white' | 文本颜色 | 
| labelFontSize | string | '18' | 文本文字大小 | 
| linearColor | string | '' | 线性渐变背景颜色 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | 名称：value,当前的值, | - | 拖动变换时触发 | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


