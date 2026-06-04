---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 反馈组件

# 浮动面板 TmFloatDrawer

浮动面板组件，用于显示浮动的抽屉式内容区域。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/float-drawer"></webview>

::: details 示例模板

<<< ../../../src/pages/index/float-drawer.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| show | boolean | false | 控制面板打开状态，可v-model:show双向绑定true=展开到最高位置，false=默认最小位置 | 
| onlyHeader | boolean | false | 是否仅允许通过标题栏拖动。 | 
| duration | number | 350 | 动画时间 | 
| round | string | "" | 向上的圆角空值时，取全局配置的圆角。 | 
| size | string | "20%" | 百分比，数字字符或者带单位,默认露出的内容高度 | 
| maxHeight | string | "80%" | 弹层最大的高度值，默认为屏幕的可视高提供值时不能为百分比，可以是px,rpx单位数字。如果你不带单位，默认转换为rpx单位。 | 
| triggerDy | number | 50 | 当拖动时，触发打开和关闭时的临界值，单位是px如果没有达到此临界值时，将会回弹至原始位置。 | 
| threshold | number | 0.15 | 当拖动时，如果已经达到了关闭和打开时的临界值时可以继续拖拉时缓动阻尼值 | 
| bgColor | string | "white" | 内容层的背景色 | 
| darkBgColor | string | "" | 暗黑的背景色,空时，取全局的sheetDarkColor | 
| actionColor | string | "#888888" | 拖动标题栏的横线背景色 | 
| disabledScroll | boolean | false | 禁用内部的容器并采用view容器 | 
| containerType | string | 'scroll' | 没有禁用disabledScroll生效容器内部使用的类型scroll:scroll-viewlist:list-view | 
| disabled | boolean | false | 是否禁用用户滚动等来触发关闭或者打开。 | 
| zIndex | number | 100 | 层级 | 
| contentMargin | string | "016px16px16px" | 控制内容的边跑,有时需要自定布局时非常有用.请直接使用stylecss规则写margin, | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| close | - | - | 关闭时执行 | 
| open | - | - | 打开执行的事件 | 
| beforeOpen | - | - | 打开前执行 | 
| beforeClose | - | - | 关闭前执行 | 
| heightChange | - | - | 高度位置变化时触发这个差值.返回参数evt是个百分比,0%是最低下,100%代表是在最顶部. | 
| movestart | - | - | 开始拖动 | 
| moveend | - | - | 结束拖动 | 
| update:show | - | - | 等同v-model:show | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | - | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


