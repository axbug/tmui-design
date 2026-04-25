---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 展示组件

# 查看更多 tmMore

让内容超过指定高时自动隐藏内容.

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/more"></webview>

::: details 示例模板

<<< ../../../src/pages/index/more.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | string | "auto" | 组件宽度 | 
| height | string | "60" | 被关闭时的高度。 | 
| modelValue | boolean | false | 当前打开的状态 | 
| activeColor | string | "" | 激活后的文本色,默认是读取全局色 | 
| unActiveColor | string | "#a6a6a6" | 未激活后的文本色 | 
| text | Array | ()=\>[]asstring[] | 打开和关闭状态的文本"展开更多","收起更多" | 
| maskBgColor | Array | ()=\>['rgba(255,255,255,1)','rgba(255,255,255,0.3)'] | 遮罩的渐变的背景色 | 
| darkMaskBgColor | Array | ()=\>['rgba(24,24,24,1.0)','rgba(24,24,24,0.3)'] | 暗黑时遮罩的渐变的背景色 | 
| disabled | boolean | false | 是否禁用展开。 | 
| showMoreBtn | boolean | true | 是否显示开启和关闭按钮,因为各个手机屏幕可能不一样,可能会根据行数自行决定是否要显示展开和关闭按钮,请通过此自行判断. | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | 名称：opened,当前打开的状态, | - | 状态切换时变换 | 
| click | 名称：opened,当前打开的状态,可以通过此判断是点打开还是点关闭, | - | 点击展开的按钮时触发 | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | 名称：binding,isOpened 类型：- 
 | 默认插槽  | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


