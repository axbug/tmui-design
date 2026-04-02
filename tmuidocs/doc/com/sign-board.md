---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 反馈组件

# 签名画板 TmSignBoard

通用签名画板组件，支持手写签名功能。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/sign-board"></webview>

::: details 示例模板

<<< ../../../src/pages/index/sign-board.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| strokeColor | string | '' | 线颜色 | 
| backgroundColor | string | '' | 画板背景颜色 | 
| strokeWidth | union | 8 | 线宽 | 
| width | union | 300 | 画布宽和高，不允许%，只能是数字或者带单位的数字如:4,'4',20px,750rpx | 
| height | union | 300 | 画布宽和高，不允许%，只能是数字或者带单位的数字如:4,'4',20px,750rpx | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| clear | - | - | 清空画布 | 
| getImage | - | - | 获取签名图片 | 


