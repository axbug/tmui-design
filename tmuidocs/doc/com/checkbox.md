---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 多选框 TmCheckbox

可单单独使用,也可多选组合使用

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/checkbox"></webview>

::: details 示例模板

<<< ../../../src/pages/index/checkbox.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| color | string | "" | 当前主题色，空值时取全局 | 
| unCheckColor | string | "" | 当前未选中时主题色，空值时取全局 | 
| darkUnCheckColor | string | "" | 当前未选中时的暗黑主题色 | 
| modelValue | string\|number\|boolean | '' | 当前双向绑定值 | 
| value | string\|number\|boolean | true | 选中的值， | 
| unCheckValue | string\|number\|boolean | '' | 未选中的值 | 
| disabled | boolean | false | 是否禁用 | 
| icon | string | "check-line" | 选中的图标名称。 | 
| label | string | "" | 右侧文字。 | 
| hiddenCheckbox | boolean\|string | false | 是否隐藏选中框。然后利用默认插槽自定义选中所有样式和状态。 | 
| indeterminate | boolean\|string | false | 半选中 | 
| size | string\|number | "42" | 尺寸 | 
| iconSize | string\|number | "40" | 中间小图标大小 | 
| labelFontSize | string\|number | "30" | 文字大小 | 
| showLabel | boolean | true | 如果不要显示label时设置为false可以隐藏label并把label间隙删除， | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | 名称：check,当前是否选中,名称：value,当前选中的值, | - | 用户交互切换，选中变换时触发。 | 
| click | - | - | 点击事件 | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| label | 名称：binding,checked 类型：- 
 | - | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


