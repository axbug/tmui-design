---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 单选框组 TmRadioGroup

可单单独使用,也可多选组合使用

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/radio"></webview>

::: details 示例模板

<<< ../../../src/pages/index/radio.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | string\|number\|boolean | "" | - | 
| direction | string | "row" | - | 
| align | string | "left" | - | 
| gap | number\|string\|Array\<string \| number\> | 20 | 排列时之间的间隙，如果是数组第一项是列间隙，第二项是行间隙 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | - | - | - | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | - | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| addItem | - | - | - | 
| removeItem | - | - | - | 


