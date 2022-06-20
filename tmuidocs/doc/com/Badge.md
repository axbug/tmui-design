---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 徽标 Badge
该组件一般用于图标右上角显示未读的消息数量，提示用户点击，有圆点和圆包含文字两种形式。

---

### :hot_pepper: 示例效果

<webview url="https://tmui.design/h5/#/pages/showdata/badge"></webview>

::: details 示例代码

@[code vue](pages/showdata/badge.nvue)

:::


### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| round | Number, String | 6 | 圆角，0-26 |
| border | Number | 0 | 边框，边框颜色为你的color颜色 |
| color | String | white | 背景主题颜色名称 |
| margin | Array | [0,0] | 外间距[x,y]x=左右，y=上下 |
| padding | Array | [0,0] | 内间距[x,y]x=左右，y=上下 |
| transprent | Boolean,String | false |  |
| label | String |  | 状态文本模式，需要配合,status为true时展现，具体见示例 |
| fontSize | Number | 22 | 自动匹配字体大小，单位rpx |
| status | Boolean, String | false | 为真时，隐藏插槽数据，展现状态文本模式。 |
| dot | Boolean, String | false | 使用点。优先级高于label数字展示。 |
| icon | Boolean, String | false | 使用图标作为显示角标 |
| count | Number, String | 0 | 如果count为数字时，显示数字角标，如果为string是显示文本角标。 |
| maxCount | Number, String | 999 | 如果count为数字时，最大数值 |

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click |  |  |  |

### :corn: slot插槽
默认default

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[﹎wj潕钶取玳](https://gitee.com/dxwj)贡献，如果对该框架感兴趣的可以参与我们一同进步！