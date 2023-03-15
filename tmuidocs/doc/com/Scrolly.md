---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 纵向滚动 Scrolly <Badge type="danger" text="试验 v3.0.83+" vertical="middle" />
横向滚动，应用于菜单图标，内容需要横向滚动的场景，注意：我已经兼容了所有平台，如果你需要使用原生的scroll-view横向滚动，需要自行兼容。

---

### :hot_pepper: 纵向滚动 Scrolly 示例效果

<webview url="https://tmui.design/h5/#/pages/other/scrolly"></webview>

::: details 示例代码

@[code vue](pages/other/scrolly.nvue)

:::


### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | Number | 0 | 宽度，单位rpx,默认为0表示自动宽度 |
| height | Number | 300 | 高度，单位rpx |
| openPull | Boolean | true | 是否开启下拉刷新 |
| openBootom | Boolean | false | 是否否开触底刷新 |
| pullFun | Function | (type:'bottom':'top')=>{} | 触发的函数(下拉或者触底时触发) |
| label | String | '已最近更新' | 提示文字 |


### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| :--: | :--: | :--: | :-- |
| refresh | - | - | 松开时高度超过阈值则触发刷新 |

### :corn: slot插槽
| 插槽名 | 数据 | 类型 | 描述 |
| :--: | :--: | :--: | :-- |

### :green_salad: ref方法
无

### :couplekiss: 文档贡献

-