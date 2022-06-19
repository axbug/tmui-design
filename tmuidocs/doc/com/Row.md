---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 布局 Row
你可以用来排版，排列，九宫格等需要排版布局时非常有用。比如自己作表格等。 它是按12列划分的

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/layout/row"></webview>

::: details 示例模板

@[code vue](pages/layout/row.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
Row组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md),必须配合tmCol，采用flex布局。必须在class上写flex-x，x=[1,12]
> row和col为了高性能和兼容全平台，全部使用flex布局，因此用起来可能有点不方便,但这是值得的。  
> 如果row设定了宽度，子col将会自动设定宽度。此时如果要切换，必须设定column列数。

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| height | [Number,String] | 0 | 高度，单位rpx |
| margin | `Array<number>` | [0,0] | 外间距[x,y]x=左右，y=上下 |
| width | [Number,String] | 0, | 宽度，单位rpx |
| round | [Number,String] | 0 | 圆角0-25，单位rpx |
| gutter | Number | 0 | 左右，和上下间距。优先级别小于col组件内部的间距。 |
| column | Number | 10 | 列 |
| justify | String | start | 可选值：start/center/end/around/between |
| align | String | center| 可选值：start/center/end/stretch |
| color | String | white | 颜色 |

### :seedling: Col组件参数
Col组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)，必须配置tmRow使用。否则报错。
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| height | [Number,String] | 50 | 高度，单位rpx |
| color | String | white | 颜色 |
| transprent | [Boolean,String] | false | 是否透明 |
| align | String | center|可选值：start/center/end |  

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| @click | - | - | 单元格点击时触发 |

### :corn: slot插槽
默认default

### :green_salad: ref方法
无

