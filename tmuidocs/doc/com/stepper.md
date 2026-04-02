---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 步进器 TmStepper

可整数，小数

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/stepper"></webview>

::: details 示例模板

<<< ../../../src/pages/index/stepper.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | number | 0 | 当前值，可v-model | 
| max | number | 100 | 最大值 | 
| width | string | "auto" | 组件宽 | 
| min | number | 0 | 最小值 | 
| disabled | boolean | false | 是否禁用 | 
| autoHideBtn | boolean | false | 开启后自动隐藏限制的按钮最小时隐藏减号按钮 | 
| step | number | 1 | 步进值 | 
| decimalLen | number | 0 | 如果进步值是小数位需要设置此值 | 
| btnColor | string | "info" | 按钮的颜色 | 
| darkBtnColor | string | "" | 按钮的暗黑颜色空值读取全局的Input暗黑背景色 | 
| bgColor | string | "info" | 输入框的背景色 | 
| darkBgColor | string | "" | 输入框的暗黑背景色空值读取全局的Input暗黑背景色 | 
| btnWidth | string | "64" | 按钮的宽 | 
| height | string | "64" | 输入框及按钮的高 | 
| round | string | "8" | 按钮的圆角。 | 
| splitBtn | boolean | false | 是否按钮与输入框独立开来不和输入框粘一起。 | 
| btnFontColor | string | "#333333" | 按钮文本颜色，暗黑时取白色 | 
| fontColor | string | "#333333" | 文本颜色,暗黑时取白色 | 
| inputStyle | Partial\<CSSStyleDeclaration\> \| string | "" | 输入框的自定样式可以写背景字体等样式 | 
| fontSize | string | "28" | 文本文字大小 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | 名称：str,当前的值。, | - | 输入值或者点击按钮时触发 | 
| update:modelValue | - | - | 等同vmodel | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


