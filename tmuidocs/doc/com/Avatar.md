---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 头像 Avatar
本组件一般用于展示头像的地方，如个人中心，或者评论列表页的用户头像展示等场所。

---

### :hot_pepper: 示例效果

<webview url="https://tmui.design/h5/#/pages/showdata/avatar"></webview>

::: details 头像 Avatar 示例

@[code vue](pages/showdata/avatar.nvue)

:::


### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| size | Number | 90 | 头像的宽高,单位rpx |
| trigger | Boolean,String | false | 是否开启交互，在pc端有用，鼠标移上去变成手型 |
| triggerColor | String |  | 角标颜色 |
| triggerIcon | String |  | 角标图标 |
| triggerStyle | String |  | 自定义角标样式 |
| round | Number,String | 6 | 圆角，0-26 |
| outlined | Boolean | false | 边框模式 |
| border | Number | 0 | 边框，边框颜色为你的color颜色 |
| margin | Array | [0,0] | 外间距[x,y]x=左右，y=上下 |
| padding | Array | [0,0] | 内间距[x,y]x=左右，y=上下 |
| transprent | Boolean,String | false |  |
| label | String |  | 当填入信息时，文本头像，禁用img模式 |
| icon | String |  | 图标 |
| img | String |  | 图片地址 |
| fontSize | Number | 0 | 自动匹配字体大小 |
| text | Boolean | Boolean | 是否开启文本模式 |
| color | String | white | 背景主题颜色名称 |
| unit | String | 'rpx' | 单位，仅：rpx,px |
| iconColor | String | '' | 图标颜色。如果不提供使用主题色 |


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