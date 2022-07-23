---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 标题栏 Navbar
页面自定标题栏，时，请务必放置在页面的最顶部。

---

### :hot_pepper: 标题栏 Navbar 示例
<webview url="https://tmui.design/h5/#/pages/daohang/navbar"></webview>

::: details 示例模板

@[code vue](pages/daohang/navbar.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| followTheme | [Boolean,String] | true | 是否跟随主题，可选值：false,true |
| transprent | [Boolean,String] | false | 是否透明,可选值：false,true |
| color | [String] | white | 背景主题色,对应基础容器Sheet组件的color |
| text | [Boolean] | false | 是否浅色背景，可选值：false,true |
| border | [Number,String] | 0 | 边框 |
| shadow | [Number,String] | 1 | 投影,0-25 |
| borderDirection | String | bottom | 边线的方向,可选值：top,right,bottom,left |
| round | [Number,String] | 0 | 圆角0-25，单位rpx |
| margin | ArrayasPropType`<Array<number>>` | ()=>[0,0] | 外间距[x,y]x=左右，y=上下 |
| padding | ArrayasPropType`<Array<number>>` | ()=>[0,0] | 内间距[x,y]x=左右，y=上下 |
| height | [Number] | 44 | 高度，单位rpx |
| leftWidth | [Number] | 220 | 指两边，左宽度除了中间，中间标题宽度为自动 |
| rightWidth | [Number] | 220 | 指两边，左宽度除了中间，中间标题宽度为自动 |
| fontSize | [Number] | 30 | 字体大小 |
| title | [String] | 标题 | 标题文字 |
| fontColor | [String] | "" | 字体颜色，默认为自动，提供了，将强制使用本主题色 |
| homeColor | [String] | "" | 左侧icon颜色 |
| hideHome | Boolean | false | |
| homePath | [String] | /pages/index/index | 返回首页的路径，注意：需要hideHome属性为false|
| blur | Boolean | false | 背景磨砂,可选值：false,true;注意：当为渐变背景时,背景磨砂效果将会消失
| iconFontSize<Badge type="danger" text="v3.0.73+" vertical="middle" /> | [Number] | 37 | 返回图标，Home图标字号 |
| unit<Badge type="danger" text="v3.0.73+" vertical="middle" /> | [String] | rpx | 字号单位 |


### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click |  |  |  |
| close |  |  |  |
### :corn: slot插槽
| 名称 | 数据名称 | 数据类型 | 说明 |
| --- | --- | --- | --- |
| left | --- | --- | 左侧插槽 |
| default | --- | --- | 中间插槽 |
| right | --- | --- | 右侧插槽 |

### :green_salad: ref方法
无



### :couplekiss: 文档贡献
此页文档由ygy贡献([git](https://gitee.com/ygy-promise),[github](https://github.com/ygy-97))，如果对该框架感兴趣的可以参与我们一同进步！
