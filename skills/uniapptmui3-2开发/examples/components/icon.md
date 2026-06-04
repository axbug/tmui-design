---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 常用组件

# 图标 TmIcon

图标,可以是图片地址或者字体名称图标.也可以是你自定义的图标.
如何自定义图标呢:你可以在iconfont网站勾选图标->添加购物车->添加项目->项目设置,勾选woff2,勾选base64->下载本地->解压得到iconfont.css
->复制到你的app.vue全局中即可.然后使用图标时,font-family是你的图标名称比如myicon,prefix是图标前缀比如myicon-

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/icon"></webview>

::: details 示例模板

<<< ../../../src/pages/index/icon.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| _style | CSSStyleDeclaration\|string | "" | - | 
| _class | string | "" | - | 
| name | string | "" | 图标名称,可以是图片地址 | 
| size | number\|string | "32" | 图标大小,默认32rpx | 
| color | string | "#333333" | 图标颜色 | 
| darkColor | string | "white" | 暗黑时的图标颜色 | 
| spin | boolean | false | 图标是否旋转 | 
| rotate | string | "" | 旋转角度 | 
| fontFamily | string | "remixicon" | - | 
| prefix | string | "ri-" | - | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | - | - | 点击事件 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


