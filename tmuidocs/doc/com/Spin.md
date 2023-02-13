---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 局部加载 Spin
放置在其里面的所有内容，加载状态时，会在其中所有内容上添加遮罩模糊加载页面，并且不可操作。

---


### :hot_pepper: 局部加载 Spin 示例

<webview url="https://tmui.design/h5/#/pages/fankui/spin"></webview>

::: details 示例模板

@[code vue](pages/fankui/spin.nvue)

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
| color | String | primary | 颜色 |
| icon | String | tmicon-loading | 自定义图标 |
| size | Number | 60 | 对应fontSize属性 |
| bgColor | String | 'rgba(255,255,255,0.9)' | 背景颜色 |
| tip | String | 无 | 提示信息
| load | [Boolean,String] | false | 显示加载中，可选值：false,true |
### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click |  |  |  |

### :corn: slot插槽
默认default

### :green_salad: ref方法
无


### :couplekiss: 文档贡献
此页文档由ygy贡献([git](https://gitee.com/ygy-promise),[github](https://github.com/ygy-97))，如果对该框架感兴趣的可以参与我们一同进步！