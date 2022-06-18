---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 单元格 Cell
常用于列表

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/showdata/cell"></webview>

::: details 示例模板

@[code vue](pages/showdata/cell.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| shadow | [Number,String] | 0 | 投影,0-25 |
| round | [Number,String] | 0 | 圆角0-25，单位rpx |
| margin | Array | ()=>[32,0] | 外间距[x,y]x=左右，y=上下 |
| padding | Array | ()=>[24,24] | 内间距[x,y]x=左右，y=上下 |
| height | [Number] | 0 | 高度，单位rpx |
| transprent | [Boolean,String] | false | 是否透明 |
| color | String | "white" | 单元格背景色 |
| title | String | "", | 标题 |
| titleFontSize | [Number,String] | 28 | 标题字体大小 |
| label | String | "" | 标题下方的描述 |
| labelColor | String | "grey" | 标题下方文字的颜色 |
| rightText | String | "" | 右边文字 |
| rightIcon | String | "tmicon-angle-right" | 右图标名称，可以是图片地址 |
| rightColor | String | "grey" | 右边文字颜色 |
| showAvatar | Boolean | false | 是否显示头像 |
| avatar | String | "" | 头像路径 |
| avatarSize | Number | 60 | 头像大小 |
| avatarRound | Number | 10 | 头像圆角 |
| border | [Number] | 0 | 边线宽度 |
| borderDirection | [String] | cssDirection.bottom | 边线方向 |
| bottomBorder | [Boolean] | false | 是否显示下边线 |
| url | String | "" | 当有链接地址时，将打开链接 |

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| @click |  |  | 点击组件时触发。 |

### :corn: slot插槽
| 属性名称 | 类型 | 数据 | 说明 |
| --- | --- | --- | --- |
| avatar |  |  | 自定义头像 |
| title |  |  | 自定义左侧标题部分的内容 |
| label |  |  | 自定义label内容 |
| rightText |  |  | 自定义右边文字内容 |
| right |  |  | 自定义右图标内容 |

### :green_salad: ref方法
无

### 贡献者
Mr.童
