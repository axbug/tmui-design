---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 展示组件

# 折叠面板 TmCollapse

可单，可多开,内部可放置tm-collapse-item子节点组件,动画采用了新css,兼容性请看这里:[点我](https://caniuse.com/?search=grid-template-rows)

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/collapse"></webview>

::: details 示例模板

<<< ../../../src/pages/index/collapse.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | Array\<string \| number\>\|string\|number | ():string[]=\>[]asstring[] | 当前子项值。可v-model,类型兼容性高,因此不管你提供的是不是数组,最终同步时会被设置成数组 | 
| multiple | boolean | true | 是否允许打开多个。 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | 名称：value,当前打开的值, | - | 变换时触发 | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | 默认插槽，可放置tm-collapse-item子节点 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| toggleActivate | - | - | - | 


