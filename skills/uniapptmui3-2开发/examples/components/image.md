---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 展示组件

# 图片 TmImage

宽高可以设置，支持百分比，px,rpx，如果你用了auto,%这种就要注意：如果你把组件放到了容器中，容器设置为v-show,display:none,visible这种，
那你一定要跟随vif组件，不然尺寸是不对的。因为小程序无法监测这种变化的情况，导致无法设置尺寸。如果你设定了固定尺寸则不用担心这个问题。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/image"></webview>

::: details 示例模板

<<< ../../../src/pages/index/image.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | string\|number | "100%" | 宽度，默认100%18rpx,18px,15%支持这三种单位，如果只写"18"就表示18rpx | 
| height | string\|number | "auto" | 高度,auto,%,rpx,px,stringnumber18rpx,18px,15%支持这三种单位，如果只写"18"就表示18rpx | 
| src | string | "" | 图片源 | 
| model | string | "scaleToFill" | 模式 | 
| preview | boolean | true | 点击后是否预览图片 | 
| ratio | number | 1.25 | 预览占位比例宽/高，当数据没加载前，如果你设置了一项值比如宽，高会自动根据这个比例计算当图片加载成功后，使用正确的原图片比例设置。默认是5/4=1.25 | 
| round | string\|number | '0' | 圆角 | 
| iconSize | string\|number | "36" | 加载和失败时的图标大小。 | 
| placeBgColor | string | "#F5F5F5" | 占位背景色 | 
| placeDarkBgColor | string | "" | 点位暗黑时的背景，如果不填写默认填充inputDarkBgcolor | 
| fadeShow | boolean | false | 是否显示过渡动画 | 
| webp | boolean | false | 在系统不支持webp的情况下是否单独启用webp。默认false，只支持网络资源。webp支持详见下面说明 | 
| lazy | boolean | true | 图片懒加载 | 
| draggable | boolean | false | 是否允许拖动。 | 
| showMenuByLongpress | boolean | false | - | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | - | - | - | 
| error | - | - | - | 
| load | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


