---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 反馈组件

# 左滑菜单 TmSwitchSlider

常用于对话聊天，订单列表等一些隐藏式按钮设计场景。如果子菜单无法定宽或者被挤夺请写style:flex-shrink: 0;避免。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/switch-slider"></webview>

::: details 示例模板

<<< ../../../src/pages/index/switch-slider.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| custonmStyle | string | '' | 被拖动层的自定义样式 | 
| custonmMenuStyle | string | '' | 菜单容器层自定义样式 | 
| width | string | '100%' | 宽度 | 
| height | string | '50' | 高度，单位随意 | 
| disabled | boolean | false | 是否禁用 | 
| threshold | number | 15 | 当滑动时小于此值，会回弹到原位 | 
| duration | number | 450 | 当打开或者松开时的动画时间 | 
| status | boolean | false | 当前打开状态 | 
| borderColor | string | '#f5f5f5' | 下边线的颜色 | 
| borderDarkColor | string | '' | 下边线暗黑的颜色 | 
| eventNone | boolean | true | 让拖动层内容失去响应，拖动更流畅false关闭让内容响应事件，true让内容失去响应 | 
| showBottomBorder | boolean | true | 是否显示下边线 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| disabledScrollChange | - | - | 此函数会发现是否禁用你外部滚动的指示。 | 
| click | - | - | 活动区域被点击时触发 | 
| open | - | - | 打开菜单时触发 | 
| close | - | - | 关闭时触发 | 
| start | - | - | 触摸开始 | 
| end | - | - | 触摸结束 | 
| move | - | - | 触摸中 | 
| update:status | - | - | 等同v-model:status | 
| longTimePress | - | - | 长按事件 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | 默认插槽，你的顶层布局可以在这里 | 
| menu | 名称：binding,status 类型：- 
 | 菜单插槽 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| open | - | - | - | 
| close | - | - | - | 
| setOpts | - | - | - | 
| callEmits | - | - | - | 


