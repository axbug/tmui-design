---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 输入框 Input
通过鼠标或键盘输入字符。

::: waring 非常重要

使用UNI开发的input组件，一定会在微信小程序中的机型（不敢保证 全部），双向绑定数据输入数据时，会出现字符闪烁或者输入过快时，字符丢失。<br>
解决方案：<br>

1. 采用原生的input组件，不要使用本组件。
2. v-model改成v-model.lazy，可以有效改善字符丢失的问题。

以上BUG是uni自带的，我无力解决，只能按照方案解决。另外一提，使用微信原生代码开发的自定Input组件，不会出现双向绑定，输入过快时字符丢失问题，是不是很神奇？

:::

---

### :hot_pepper: 输入框 Input 示例

<webview url="https://tmui.design/h5/#/pages/form/input"></webview>

::: details 示例模板

@[code vue](pages/form/input.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| followTheme | [Boolean,String] | true | 跟随系统主题 |
| color | String | grey-4 | 颜色 |
| prefixColor | String | '' | 应用于前缀图标及标题色 |
| suffixColor | String | '' | 应用于后缀图标及标题色 |
| focusColor | String | primary | 激活时的主题配色。 |
| fontColor | String | '' | 默认使用自动配色 |
| text | Boolean | true | 文本 |
| outlined | Boolean | false |  |
| border | Number | 0 | 边框 |
| transprent | Boolean | false | 是否透明 |
| round | Number | 3 | 圆角0-25，单位rpx |
| shadow | Number | 0 | 投影,0-25 |
| margin | `Array<number>` | [0,0] | 外间距[x,y]x=左右，y=上下 |
| padding | `Array<number>` | [0,0] | 内间距[x,y]x=左右，y=上下 |
| height | Number | 64 | 高度，单位rpx |
| prefix | String | '' | 前缀图标 |
| prefixLabel | String | '' | 前缀文字  |
| suffix | String | '' | 后缀图标 |
| suffixLabel | String | '' | 后缀文字 |
| fontSize | Number | 30 | 字体大小 |
| search | String | '' | tmicon-search |
| searchLabel | String | '' | 搜索 |
| searchFontColor | String | '' | 搜索按钮字体颜色，默认为自动 |
| showClear | Boolean | false | 是否显示清空 |
| password | Boolean | false | 是否密码框 |
| disabled | Boolean | false | 是否禁用 |
| placeholder | String | 请输入内容 | 文本框占位文本 |
| placeholderStyle | string | '' | placeholder样式,只支持字符串格式 |
| errorLabel | String | 请输入内容 | 错误时，提示的文本。 |
| align | String | left | 对齐方式。可选值：left,right,center |
| modelValue | [String,Number] | '' | 绑定值，双向绑定时请使用v-model="xx",或者:value.sync |
| inputPadding | `Array<number>` | [24,0] | 输入框边距 |
| showCharNumber | Boolean | false | 是否显示字符统计,需要绑定value后才会显示。 |
| maxlength | Number | -1 | 最大长度 |
| type | String | text | 表单类型:digit/text/number/password/idcard/textarea |
| cursorSpacing | Number | 24 |  |
| confirmType | String | done | 键盘右下角确认按钮文字:done/go/next/send/search |
| confirmHold | Boolean | false |  |
| autoBlur | Boolean | true | 自动失去焦点 |
| holdKeyboard | Boolean | false |  |
| adjustPosition | Boolean | true | 是否上推键盘 |
| focus | Boolean | false | 是否聚焦 |
| readonly | Boolean | false | 是否为只读状态，如果你是支付宝或者钉钉小程序，在使用disabled时，文字变灰，可使用此属性代替。 |
| autoHeight| Boolean | false | type=textarea时生效 |
| showTopErrorGap| Boolean | true | 用于隐藏顶部的错误间隙，但保留底部，以减少布局间的空隙 |

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| focus | - | - | 获取焦点时触发。 |
| blur | - | - | 失去焦点事件 |
| confirm | - | - | 提交事件 |
| input | - | - | 输入时触发的函数。 |
| update:modelValue | - | - | 更新表单值相当于v-model |
| clear | - | - | 清除图标被点击时触发。 |
| search | - | - | 查询 |
| keyboardheightchange | - | - | 键盘高度变化 |
| click | - | - | 点击事件 |


### :corn: slot插槽
| 插槽名  | 描述 |
| :--: | :-- |
| left |  左边可放入的内容 |
| right |  右边可放入的内容 |

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[Sunlight](https://gitee.com/rzg)贡献，如果对该框架感兴趣的可以参与我们一同进步！

