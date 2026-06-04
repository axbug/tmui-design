---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 表单 TmForm

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
| modelValue | Record\<string, any\> | ()=\>{return{}} | - | 
| rules | Record\<string, Array\<TM.FORM_RULE\> \| TM.FORM_RULE\> | ():Record\<string,Array\<TM.FORM_RULE\>\>=\>{return{}} | 表单校验规则经过验证后，觉得把form-item的rules属性去掉,直接使用form上统一到一起rules属性,这样就可以不用写form-item了. | 
| direction | string | "horizontal" | 方向,子组件的方向会覆盖此处。 | 
| labelWidth | string\|number | "160" | 方向,子组件的覆盖此处。 | 
| labelFontSize | string\|number | "30" | 标题字号大小 | 
| labelFontColor | string | "#333333" | 标题颜色 | 
| gap | string\|number | "10" | 间隙，项目之间的间距。 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| submit | 名称：result,校验结果, | - | 提交表单时触发. | 
| update:modelValue | - | - | 表单数据时一定要vmodel绑定,当重置时会触发此事件。 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | 表单默认插槽,可以不是直接form-item直接子节点,可以根据自己需要随意布局,只要form-item在里面即可. | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| submit | - | - | - | 
| validate | - | - | - | 
| reset | - | - | - | 
| _validate | - | - | - | 
| _setMarker | - | - | - | 


