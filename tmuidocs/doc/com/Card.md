---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 卡片 Card
卡片风格。

---

### :hot_pepper: 卡片 Card 示例效果

<webview url="https://tmui.design/h5/#/pages/showdata/card"></webview>

::: details 示例代码

@[code vue](pages/showdata/card.nvue)

:::


### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| shadow | Number, String | 2 | 卡片投影，0-26 |
| round | Number, String | 4 | 卡片圆角，0-26 |
| border | Number | 0 | 边框 |
| margin | Array | [32, 0,32,24] | 外间距[x,y]x=左右，y=上下,详细规则见公共属性中的说明 |
| padding | Array | [16, 0] | 内间距[x,y]x=左右，y=上下 |
| transprent | Boolean,String | false |  |
| color | String | white | 背景主题颜色名称 |
| width | Number | 0 | 宽度，单位rpx |
| height | Number | 0 | 高度，单位rpx |
| title | String |  | 标题。 |
| status | String |  | 状态文本 |
| statusColor | String | primary | 状态文件的主题色 |
| content | String |  | 卡片的正方内容 |

### :rose: 事件
无

### :corn: slot插槽
| 插槽名 | 数据 | 类型 | 描述 |
| :--: | :--: | :--: | :-- |
| title | - | - | 卡片标题 |
| status | - | - | 卡片右上角状态文本 |
| content | - | - | 卡片正文部分 |
| action | - | - | 卡片底部操作部分，默认为空 |

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[﹎wj潕钶取玳](https://gitee.com/dxwj)贡献，如果对该框架感兴趣的可以参与我们一同进步！