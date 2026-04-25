---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 展示组件

# HTML TmHtml

html渲染组件,这是精简后的不是所有插件都带上容易让组件变大，如果想要全部的，可以去用作者的,它是引用第三方实现见：https://github.com/jin-yufeng/mp-html

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/html"></webview>

::: details 示例模板

<<< ../../../src/pages/index/html.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | string | 'auto' | 窗口宽 | 
| height | string | 'auto' | 窗口高 | 
| value | string | "" | 需要渲染的markdow或者html内容。 | 
| selectable | boolean\|string | false | 需要渲染的markdow或者html内容。 | 
| lazyLoad | boolean\|string | false | 需要渲染的markdow或者html内容。 | 
| loadingImg | boolean\|string | true | 需要渲染的markdow或者html内容。 | 
| errorImg | string | '' | - | 
| showImgMenu | boolean\|string | true | - | 
| previewImg | boolean\|number | true | - | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| load | - | - | - | 
| ready | - | - | - | 
| imgtap | - | - | - | 
| linktap | - | - | - | 
| play | - | - | - | 
| error | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | - | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


