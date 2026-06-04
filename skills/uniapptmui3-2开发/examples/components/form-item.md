---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 表单子组件 TmFormItem

表单组件的校验规则现在统一放到了form组件上，form-item上不再配置校验，主要是方便统一管理校验模块，并且校验函数作了升级处理。
嵌套表单时，name值以.连接，比如"a.b.c"

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/form"></webview>

::: details 示例模板

<<< ../../../src/pages/index/form.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| name | string | '' | 表单字段唯一标识。 | 
| required | string\|boolean | "*" | 必款时的符号，如果为false，或者空则不显示 | 
| label | string | "" | 表单标题 | 
| direction | string | "" | 方向，这里会覆盖form父上的方向值。 | 
| labelWidth | string\|number | "" | 方向,里会覆盖form父上的值。 | 
| showLabel | boolean | true | - | 
| showBottom | boolean | true | - | 
| labelFontSize | string\|number | "" | 标题字号大小，会覆盖父form值 | 
| labelFontColor | string | "" | 标题颜色，会覆盖父form值 | 
| bottomGap | string\|number | "" | 标题颜色，会覆盖父form值 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| label | - | - | 
| default | - | 表单默认插槽,可以不是直接form-item直接子节点,可以根据自己需要随意布局,只要form-item在里面即可. | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


