---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 展示组件

# 列表 TmCell

样式丰富常用警告提醒

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/cell"></webview>

::: details 示例模板

<<< ../../../src/pages/index/cell.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| icon | string | "" | 左图标 | 
| avatarRound | string | "8" | 左侧图标、头像圆角。默认为8 | 
| color | string | 'white' | 背景的主题色 | 
| darkColor | string | '' | 暗黑背景的主题色，空值时取sheetDarkColor | 
| iconColor | string | "" | 图标色,空值时取全局主题值。 | 
| title | string | "标题" | 标题 | 
| titleColor | string | "black" | 标题颜色 | 
| darkTitleColor | string | "white" | 暗黑标题颜色，如果不填写取白 | 
| titleSize | string\|number | "32" | 标题大小 | 
| iconSize | string\|number | "42" | 左边图标大小 | 
| label | string | "" | 右边文本 | 
| labelColor | string | "#bfbfbf" | 右边文本颜色 | 
| labelSize | string\|number | "24" | 右侧label文字大小 | 
| desc | string | "" | 标题正文的简介文本 | 
| showBottomBorder | boolean | true | 是否显示下边线 | 
| bottomBorderInsert | boolean | false | 是否让下边线显示居右，不贯穿到左边。 | 
| bottomBorderColor | string | "" | 下边线的颜色。如果你设定了的话。暗黑的边颜色失效，采用你自定的颜色。 | 
| link | boolean | true | 是否显示链接状态，有点按效果。包括出现右边跳转指示。关闭的话，事件反应和跳转会更快。如果true右侧箭头图标会显示 | 
| url | string | "" | 需要跳转的页面地址。如果填写了右侧箭头图标会显示 | 
| openType | string | "navigate" | - | 
| card | boolean | true | 是否是卡片模式 | 
| round | string\|number | "" | 卡片模式圆角,不填写采用全局的cardRadius属性值. | 
| leftSize | string\|number | '60' | 左边图标区域宽和高的大小。 | 
| minHeight | string\|number | "88" | 最小高度，主要是用来统一风格高度不至于让点击范围过小如果你需要紧凑型可以设置为auto | 
| lrPadding | string\|number | "32" | 左右的间隙。 | 
| linkIcon | string | "arrow-right-s-line" | - | 
| tbPadding | string\|number | "32" | 上下间隙 | 
| rightWidth | string\|number | "50%" | 右侧最大宽 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | - | - | 项目点击 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| avatar | 名称：binding,icon 类型：string 
 | 头像图标 | 
| default | - | 默认标题插槽 | 
| desc | 名称：binding,desc 类型：string 
 | 简介 | 
| label | 名称：binding,label 类型：string 
 | 右边文字 | 
| right | - | 右插槽 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


