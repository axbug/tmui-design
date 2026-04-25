---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 开关 TmSwitch

开关，用于直观的展示选项表单的选择。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/switch"></webview>

::: details 示例模板

<<< ../../../src/pages/index/switch.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| color | string | "" | 激活时的背景色,空值时取全局的值。 | 
| bgColor | string | "info" | 未激活时的背景 | 
| darkBgColor | string | "" | 未激活时的暗黑背景空取inputDarkColor | 
| btnColor | string | "white" | 按钮的背景色 | 
| size | string | "normal" | 尺寸 | 
| space | number\|string | "2px" | 间隙，px单位 | 
| modelValue | boolean | false | 当前打开的状态，默认为false等同v-model="" | 
| disabled | boolean | false | 是否禁用 | 
| loading | boolean | false | 是否加载中 | 
| label | string[] | ():string[]=\>[] | 开关文字数组第一个为开，后一个为关 | 
| round | string\|number | "" | 圆角。空值时取全局值。 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | 名称：status,当前的开关状态, | - | 状态变换时触发。 | 
| click | 名称：status,当前的开关状态，这里的状态是在变更前。, | - | 组件被点击时触发。 | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


