---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 规格选择器 TmSku

可单列或者多列

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/sku"></webview>

::: details 示例模板

<<< ../../../src/pages/index/sku.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| data | TM.SKU_DATA | ():TM.SKU_DATA=\>{return{data:[],product:null}asTM.SKU_DATA} | 数据 | 
| modelValue | string\|number | '' | 当前选中项的id值 | 
| modelShow | boolean | false | 当前打开的状态。等同v-model:model-show | 
| lazyContent | boolean | false | 是否懒加载内部内容。当前你的列表内容非常多，且影响打开的动画性能时，请务必设置此项为true，以获得流畅视觉效果。如果选择数据较少没有必要打开 | 
| autoSelectDefault | boolean | true | 是否自动选中一个默认值.会从产品列表默认选中第一个产品. | 
| showAddStore | boolean | false | 显示加购物车按钮 | 
| color | string | 'primary' | 按钮及选中的主题色 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| cancel | - | - | 取消时触发 | 
| confirm | 名称：ids,当前选中的产品,名称：buy,购买的数量, | - | 确认触发 | 
| add | 名称：ids,当前选中的产品,名称：buy,购买的数量, | - | 加入购物车 | 
| update:modelShow | - | - | 变量控制打开状态
等同v-model:model-show | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| add | - | 添加购物车按钮 | 
| buy | - | 支持按钮 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


