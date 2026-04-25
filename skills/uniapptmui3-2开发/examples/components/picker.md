---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 选择器 TmPicker

可单列或者多列

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/picker"></webview>

::: details 示例模板

<<< ../../../src/pages/index/picker.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| list | any[] | ():any[]=\>[]asany[] | 数据 | 
| modelValue | Array\<string \| number\> | ():string[]=\>[]asstring[] | 当前选中项的id值 | 
| modelStr | string | "" | 当前选中项的回显文本等同v-model:model-str请不要更改此值，此值只对外输出显示。如果空值，将内部首次递归渲染回显文本。如果你后台返回，就不会计算。因此如果对性能有要求的请务必让后台在首次显示时先回显文本，这样内部在第一次时不会递归计算回显文本，提高性能。 | 
| modelShow | boolean | false | 当前打开的状态。等同v-model:model-show | 
| title | string | $i18n.t('tmui32x.tmPicker.title') | 顶部标题 | 
| lazyContent | boolean | false | 是否懒加载内部内容。当前你的列表内容非常多，且影响打开的动画性能时，请务必设置此项为true，以获得流畅视觉效果。如果选择数据较少没有必要打开 | 
| cellUnits | string[] | ():string[]=\>[]asstring[] | 显示在顶部的单位名称 | 
| rangKey | string | "id" | 自定义标识id | 
| rangText | string | "title" | 自定义标识文本字段名 | 
| showClose | boolean | false | - | 
| disabled | boolean | false | 是否禁用弹层 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| cancel | - | - | 取消时触发 | 
| confirm | 名称：ids,当前选中项的id值, | - | 确认触发 | 
| change | 名称：ids,当前选中项的id值, | - | 滑动变换时触发 | 
| update:modelShow | - | - | 变量控制打开状态
等同v-model:model-show | 
| update:modelStr | - | - | 等同v-model:model-str
只对外输出当前回选区的选中项的文本，不要外部改变此值。 | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | 名称：binding,label 类型：- 
名称：binding,show 类型：boolean 
 | 插槽,默认触发打开选择器。你的默认布局可以放置在这里。 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


