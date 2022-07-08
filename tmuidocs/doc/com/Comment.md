---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 评论 Comment
评论。

---

### :hot_pepper: 评论 Comment 示例效果

<webview url="https://tmui.design/h5/#/pages/showdata/comment"></webview>

::: details 示例代码

@[code vue](pages/showdata/comment.nvue)

:::


### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| shadow | Number, String | 0 | 卡片投影，0-26 |
| round | Number, String | 4 | 卡片圆角，0-26 |
| border | Number | 0 | 边框 |
| margin | Array | [32,8] | 外间距[x,y]x=左右，y=上下 |
| padding | Array | [24, 24] | 内间距[x,y]x=左右，y=上下 |
| transprent | Boolean,String | false |  |
| color | String | white | 背景主题颜色名称 |
| borderBottom | Boolean,String | false | 是否显示底部的边线 |
| author | String |  | 名称 |
| authorColor | String | primary | author主题色 |
| avatar | String |  | 头像 |
| content | String |  | 内容 |
| time | String |  | 时间 |
| align | String | right | 时间和下面的操作按钮是靠左还是靠右：right,left |

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| avatar-click |  |  |  |
| author-click |  |  |  |
| content-click |  |  |  |
| time-click |  |  |  |

### :corn: slot插槽
| 插槽名 | 参数| 参数类型 | 描述 |
| --- | --- | --- | --- |
| author | - | - | 评论的人 |
| time | - | - | 评论的时间 |
| content | - | - | 评论的内容正文 |
| actions | - | - | 评论的底部插槽，默认是空内容，用于自定底部一些其它布局，比如输入框，先点赞按钮这些或者其它操作按钮等。 |
| default | - | - | 默认插槽，主要，可以放置任意组件和元素，可以用来嵌套评论组件，把评论组件放置默认插槽中形成嵌套效果。 |

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[﹎wj潕钶取玳](https://gitee.com/dxwj)贡献，如果对该框架感兴趣的可以参与我们一同进步！