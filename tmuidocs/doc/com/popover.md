---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 反馈组件

# 汽泡菜单 TmPopover

通用弹出的汽泡菜单。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/popover"></webview>

::: details 示例模板

<<< ../../../src/pages/index/popover.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| position | PositionType | "bc" | tr:左上；tc:上中；tl:右上；br:左下；bc:下中；bl:右下；left:左边；right:右边 | 
| modelValue | boolean | false | 是否显示 | 
| isClickClose | boolean | true | 是否点击内容区域关闭 | 
| showMask | boolean | false | 遮罩背景色 | 
| zIndex | union | 998 | 层级 | 
| showTriangle | boolean | true | 是否显示三角 | 
| triangleColor | string | "#fff" | 三角颜色 | 
| triangleDarkColor | string | "#fff" | 三角暗黑时的颜色 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | - | - | - | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | 名称：binding,isShow 类型：boolean 
 | 默认触发插槽 | 
| menu | 名称：binding,isShow 类型：boolean 
 | 内容插槽 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


