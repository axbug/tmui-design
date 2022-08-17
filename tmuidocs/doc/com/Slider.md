---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 滑块 Slider
Slider 滑块是一个用于输入数值，或区域选择数值的组件

---

### :hot_pepper: 滑块 Slider 示例

<webview url="https://tmui.design/h5/#/pages/form/slider"></webview>

::: details 示例模板

@[code vue](pages/form/slider.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数

本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | Number | 500 | 组件宽度 |
| height | Number | 8 | 组件高度 |
| buttonSize | Number | 46 | 按钮的大小 |
| direction | String | horizontal | horizontal:水平,vertical:竖向 |
| color | String | primary | 按钮颜色以及按钮左侧滑块的颜色 |
| bgColor | String | grey-4 | 按钮右侧滑块条的颜色 |
| max | Number | 100 | 滑块可选值的最大数值 |
| min | Number | 0 | 滑块可选值的最小数值 |
| modelValue / v-model | :[Array,Number]| 0 | 双向绑定值必须与defaultValue 相同 |
| defaultValue | :[Array,Number]| 0 | 步进器默认值,必须与modelValue 类型相同，当提供为数组比如[0,25],此时该组件会变成双滑块，如果是一个数字为单滑块。 |
| formart | Function | modelValue | 是一个函数，返回值为按钮上方显示的标签内容，默认与modelValue内容相同 |
| showLabel | Boolean | false | 为true时step有效，会显示标签 |
| step | Number | 5 |  需要显示的步骤标签 |
| disabled | Boolean | false | 是否禁用组件 |

### :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | / | modelValue | 滑块数值改变时，返回当前选中的数值，与modelValue相同 |

### :corn: slot插槽

无

### :green_salad: ref方法

无

### :rage: 贡献者
[Wicos](http://wicos.me)