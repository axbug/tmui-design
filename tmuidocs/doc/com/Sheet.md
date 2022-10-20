---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 基础容器 Sheet
用于布局的容器组件，方便快速搭建页面的基本结构。

---

### :hot_pepper: 基础容器 Sheet 示例

<webview url="https://tmui.design/h5/#/pages/layout/sheet"></webview>

::: details 示例模板

@[code vue](pages/layout/sheet.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| parenClass | String | '' |  |
| contStyle | String | '' |  |
| height | [Number] | 0 | 高度，单位rpx |
| width | [Number] | 0 | 宽度，单位rpx |
| color | String | white | 背景主题颜色名称 |
| transprent | [Boolean,String] | false | 是否透明 |
| border | [Number,String] | 0 | 边框 |
| margin | `Array<number>` | [32,24] | 外间距[x,y]x=左右，y=上下 |
| padding | `Array<number>` | [24,24] | 内间距[x,y]x=左右，y=上下 |
| unit | String | rpx | 单位 |
| hoverClass | String | none | 鼠标悬停颜色 |
| darkBgColor | String | '' | 有时自动的背景，可能不是你想要暗黑背景，此时可以使用此参数，强制使用背景色 |
| noLevel | Boolean | false | 如果输入框表单与tmshee在同一层下。他们的黑白暗黑背景色是相同的。为了区分这个问题，需要单独指示，以便区分背景同层。 |
| blur | Boolean | false | 是否开启磨砂背景。只有是黑白灰色系才能使用 |
| url | String | "" | 跳转链接，如果提供，点击时将发生跳转至该链接 |


### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | Event | - | 点击时触发 |
| longpress | Event | - | 长按时触发 |
| touchend | Event | - | 触控结束时触发 |
| touchstart | Event | - | 触控开始时触发 |
| touchcancel | Event | - | 触控取消时触发 |
| mousedown | Event | - | 鼠标按下时触发 |
| mouseup | Event | - | 鼠标鼠标松开时触发 |
| mouseleave | Event | - | 鼠标移出时触发 |


### :corn: slot插槽
默认default

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[Sunlight](https://gitee.com/rzg)贡献，如果对该框架感兴趣的可以参与我们一同进步！

