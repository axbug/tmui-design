---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 展示组件

# 步骤条 TmSteps

导航，步骤状态显示使用

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
| modelValue | number | -1 | 绑定值，数字 | 
| icon | string | 'checkbox-blank-circle-line' | 默认图标 | 
| activeIcon | string | 'checkbox-circle-fill' | 激活状态下的图标 | 
| iconSize | union | '28' | 图标大小，可以是字符串或数字 | 
| labelSize | union | '26' | 标签文本大小，可以是字符串或数字 | 
| descSize | union | '22' | 描述文本大小，可以是字符串或数字 | 
| color | string | '#a6a6a6' | 默认颜色 | 
| activeColor | string | '' | 激活状态下的颜色 | 
| vertical | boolean | false | 是否垂直排列 | 
| reverse | boolean | false | 是否反转排列顺序 | 
| disabled | boolean | true | 是否禁用 | 
| showFooter | boolean | true | 显示标题及辅助信息标签 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | 名称：index,当前索引, | - | 切换改变时触发 | 
| update:modelValue | - | - | 等同v-model | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | 仅可放置子节点tm-steps-item,不可嵌套子节点。 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| addChildren | - | - | - | 
| removeChildren | - | - | - | 
| updateCurrent | - | - | - | 
| changeEmit | - | - | - | 


