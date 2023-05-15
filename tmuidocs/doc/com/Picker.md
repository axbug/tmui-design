---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 选择器 Picker
Picker 选择器是一个提供基础单列数据选择以及可扩展为多级联动的选择器组件<br>
Picker与Picker-view两个组件属性相同。除了没有show属性。请自行按照Picker方法使用。

---

## :hot_pepper: 选择器 Picker 示例

<webview url="https://tmui.design/h5/#/pages/form/picker"></webview>

::: details 示例模板

<<< ../src/pages/form/picker.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数

本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue - v-model | Number , String | - | 每一列选中的索引值 |
| modelStr | String | - | 这里是单向输出显示的value值，而不是modelValue的index索引值。 这里主要是为了方便表单上页面的显示。如果真要保存到数据库，你应该保存modelValue的值。|
| defaultValue | String | "" | 默认选中的索引值 |
| selectedModel |  String | index | 赋值和选值方式，共三种，分别为name:名称模式赋值和选择，id:id模式赋值和选择，index:索引模式赋值和选择 |
| columns | Arrray | ```[]`` | 数据 |
| dataKey | String | text | [3.0.89后建议不使用，请使用mapKey]当columns项目中的data数据为对象时的key取值字段 |
| mapKey | String | text | 与dataKey作用相同，从3.0.89开始启用，建议放弃使用dataKey字段。但会兼容dataKey，两者都有效，但微信中只有本字段 有效。 |
| show | Boolean | false | 控制选择器的显示与隐藏 |
| color | String | primary | 选择器的颜色，主要体现在按钮颜色上 |
| btnRound | Number | 3 | 选择器按钮的圆角值 | 
| round | Number | 12 | 选择器的圆角值 |
| height | Number | 700 | 选择器高度 |
| linear | String | - | 选择器确认选择按钮的渐变背景方向，可选值有：left:右->左，right:左->右。top:下->上，bottom:上->下 | 
| linearDeep | String | light | 选择器确认选择按钮的渐变背景颜色深浅，可选值有：light,dark,accent亮系渐变和深色渐变 |
| beforeChange | Function,Boolean | - | 当前改变index项时，改变时执行的函数。如果返回false，将会阻止本次改变,可以是Promise,提供了即将改变的数据和将要改变到目标的数据,结构 为 ```from:{itemindex,levelIndex,data},to:{itemindex,levelIndex,data}```|
| disabled | Boolean | false | 当使用插槽占位触发显示时，打开禁用可阻止弹层显示，适合在表单内部使用 |
| zIndex    | Number, String        | 999   | 弹层的层级  |
| duration     | Number         | 300     | 弹出动画的时间（毫秒）     |
## :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| confirm | - | modelValue值 | 点击确认选择按钮后返回modelValue值 |
| cancel | - | - | 点击取消按钮的触发事件 |
| open | - | - | 选择器弹出层打开的触发事件 |
| close | - | - | 选择器弹出层关闭的触发事件 |

## :corn: slot插槽

默认default，可触发弹层的插槽占位内容，比如在里面布局按钮，输入框，点击这块内容可以直接显示弹层。

## :green_salad: ref方法

无

## :rage: 贡献者
[Wicos](http://wicos.me)
