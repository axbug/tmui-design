---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 评分 TmRate

评分组件，只读和禁用等属性

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/rate"></webview>

::: details 示例模板

<<< ../../../src/pages/index/rate.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | number | 0 | 当前分值，等同v-model | 
| count | number | 5 | 最大评分数量 | 
| color | string | "" | 选中的颜色，默认空值取全局值 | 
| unColor | string | "#cacaca" | 未选中的颜色 | 
| darkUnColor | string | "#8b8b8b" | 未选中的暗黑背景颜色空时取InputDark表单颜色 | 
| size | string | "42" | 尺寸 | 
| space | string\|number | "8" | 间隙 | 
| icon | string | "star-fill" | 选中的图标 | 
| unicon | string | "star-line" | 未选中的图标 | 
| readonly | boolean | false | 是否只读状态 | 
| disabled | boolean | false | 是否禁用状态 | 
| showScore | boolean | false | 是否显示右侧评分值 | 
| fontSize | string | "28" | 右侧文本分值文本的字号 | 
| half | boolean | false | 是否开启半星开启半星后，自定的unicon和icon失效。 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | - | - | - | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| score | 名称：binding,score 类型：number 
 | 文本分值的右侧插槽 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


