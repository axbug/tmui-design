---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 展示组件

# 步骤条子组件 TmStepsItem

仅可放置在父组件tm-steps中作为直接子节点使用。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/steps"></webview>

::: details 示例模板

<<< ../../../src/pages/index/steps.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| icon | string | '' | 默认图标 | 
| activeIcon | string | '' | 激活状态下的图标 | 
| iconSize | union | '' | 图标大小，可以是字符串或数字 | 
| labelSize | union | '' | 标签文本大小，可以是字符串或数字 | 
| descSize | union | '' | 描述文本大小，可以是字符串或数字 | 
| color | string | '' | 默认颜色 | 
| activeColor | string | '' | 激活状态下的颜色 | 
| label | string | '' | 标题 | 
| desc | string | '' | 辅助信息 | 
| disabled | - | false | - | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | 名称：index,当前索引, | - | 项目被点击 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| icon | 名称：binding,active 类型：boolean 
 | 图标插槽 | 
| default | 名称：binding,active 类型：boolean 
 | 默认标题插槽 | 
| desc | 名称：binding,active 类型：boolean 
 | 辅助信息标签 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


