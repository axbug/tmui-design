---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 选择器容器 TmPickerView

可单列或者多列

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/picker-view"></webview>

::: details 示例模板

<<< ../../../src/pages/index/picker-view.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| list | TM_PICKER_ITEM_INFO[] | ():TM_PICKER_ITEM_INFO[]=\>[] | 数据项格式类型为：PICKER_ITEM_INFO | 
| modelValue | Array\<string\|number\> | ():string[]=\>[] | 当前选中项的id值 | 
| modelStr | string | "" | 当前选中项的标题文本组 | 
| cellUnits | string[] | ():string[]=\>[] | 显示在顶部的单位名称 | 
| fontSize | string | "32" | 项目的字体号大小 | 
| rangKey | string | "id" | 自定义标识id | 
| rangText | string | "title" | 自定义标识文本字段名 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | 名称：ids,当前选中项的id, | - | 选项变化时触发 | 
| update:modelStr | - | - | 等同v-model:model-str
只对外输出当前回选区的选中项的文本，不要外部改变此值。 | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| getIndexsByids | - | - | - | 
| getIdsByindexs | - | - | - | 
| getNowCurrent | - | - | - | 
| onInit | - | - | - | 
| clearCache | - | - | - | 


