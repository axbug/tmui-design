---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 搜索选择 TmPickerSelected

弹层式大数据列表筛选，搜索。可异步加载数据。可针对本地搜索及异步搜索加载数据，虚拟列表支持。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/picker-selected"></webview>

::: details 示例模板

<<< ../../../src/pages/index/picker-selected.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | Array\<string \| number\> | ()=\>[] | 当前选中的数据，any数组string[],number[]否则报错，无法运行。 | 
| modelShow | boolean | false | 当前打开的状态。等同v-model:model-show | 
| modelStr | Array\<string\> | ()=\>[] | 回显当前选中的文本，只输出等同v-model:model-str | 
| title | string | $i18n.t('tmui32x.tmPicker.title') | 顶部标题 | 
| filterKey | string | "text" | 搜索的字段名称 | 
| labelKey | string | "text" | 显示文本的字段 | 
| idKey | string | "id" | 列表字段的唯一标识注意它的数据是number类型. | 
| list | Array\<Record\<string, any\>\> | ()=\>[] | 数据列表。 | 
| localSearch | boolean | true | 默认采用本地对list的结果集进行筛选搜索。如果禁用，你可以自行通过search事件来搜索并赋值给list更新结果。 | 
| multiple | boolean | true | 是否允许多选 | 
| lazyContent | boolean | false | 是否懒加载内部内容。当前你的列表内容非常多，且影响打开的动画性能时，请务必设置此项为true，以获得流畅视觉效果。 | 
| lazyDuration | number | 100 | lazyContent的延迟时间单位ms如果你的app效果不行，请加大此值 | 
| disabled | boolean | false | 是否禁用弹层 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| search | 名称：keyword,搜索的关键词, | - | 搜索时触发 | 
| confirm | 名称：ids,选中的ids结果集,名称：data,选中的数据结果集, | - | 确认选择时触发 | 
| cancel | - | - | 取消搜索时触发 | 
| open | - | - | 显示弹层时触发，可以用来在此第一次加载list异步数据。 | 
| update:modelShow | - | - | 变量控制打开状态等同v-model:model-show | 
| update:modelStr | - | - | 自动回显文本数组，此属性只对外输出。 | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | - | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


