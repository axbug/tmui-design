---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 展示组件

# 警告 TmAlert

样式丰富常用警告提醒

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/alert"></webview>

::: details 示例模板

<<< ../../../src/pages/index/alert.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| status | string | "primary" | 类型warn:警告success:成功error:错误info:信息primary:正常主题 | 
| icon | string | "" | 警告图标,不填写取status默认图标填写以填写为准 | 
| iconSize | string | "28" | 警告图标大小 | 
| closeIcon | string | "close-line" | - | 
| showClose | boolean | true | 显示还是隐藏关闭按钮 | 
| showIcon | boolean | true | 显示左边按钮 | 
| fontSize | string | "28" | 文字大小 | 
| color | string | "" | 主题色，如果不填写以status为准 | 
| fontColor | string | "" | 文字颜色，如果不填写以status为准 | 
| darkColor | string | "" | 暗黑主题颜色，如果不填写自动计算 | 
| fontDarkColor | string | "" | 暗黑文字颜色，如果不填写自动计算 | 
| skin | string | "thin" | 它是建立在你没有提供color时才有效。如果提供了color是以你color为背景最终色。thin浅色模式，normal标准背景色 | 
| round | string\|number\|Array\<string\|number\> | 16 | 圆角数组数字时[全部][顶左，顶右，底右，底左][顶左，底右][顶左，顶右，底右]空数组时取全局值 | 
| border | string\|number\|Array\<string\|number\> | ():string[]=\>[] | 边线数组数字时数组数字时[全部][左，上，右，下][左右，上下][左，上，右]空数组时取全局值 | 
| borderColor | string\|Array\<string\> | ():string[]=\>[] | 边框颜色格式同border边线。空数组时取全局值 | 
| darkBorderColor | string\|Array\<string\> | ():string[]=\>[] | 如果不填写，自动计算 | 
| borderStyle | string | 'solid' | 边线类型，默认solid,可以为none | 
| margin | string\|number\|Array\<string\|number\> | ():string[]=\>['24','0','24','24']asstring[] | 间隙[x]全部,[x,x]左右，上下,[x,x,x]左上右,[x,x,x,x]左上右下空数组时取全局值 | 
| padding | string\|number\|Array\<string\|number\> | ():string[]=\>['28','20']asstring[] | 内间隙[x]全部,[x,x]左右，上下,[x,x,x]左上右,[x,x,x,x]左上右下空数组时取全局值 | 
| height | string | "auto" | 自定义高度，可以是数字，单位或者百分比,auto | 
| width | string | "auto" | 宽，单位合法即可数字，字符串带单位，百分比,auto | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| close | - | - | 关闭时触发 | 
| click | - | - | 组件被点击时触发 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| left | - | 左边图标插槽 | 
| default | - | - | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


