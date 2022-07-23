---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 动画 Translate
提供了6组动画，并且每组件动画都支持反转播放，相当于12组动画了。可用于任何元素，进入场和出场的动画。

---

### :hot_pepper: 动画 Translate 示例

<webview url="https://tmui.design/h5/#/pages/fankui/translate"></webview>

::: details 示例模板

@[code vue](pages/fankui/translate.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| duration | Number | 200 | 动画时长，任意整数 |
| delay | Number | 0 | 延时多少毫秒开始播放，任意整数 |
| name | String | fade | 动画效果名称，可选值 fade,left,right,up,down,zoom|
| autoPlay | Boolean | true | 是否自动播放动画 |
| disabled | Boolean | false | 是否禁用 |
| height | [Number,String] | 0 | 高度，单位rpx,0表示自动宽高 |
| width | [Number,String] | 0 | 宽度，单位rpx,0表示自动宽高 |
| reverse | [Boolean,String] | false | 是否反向动画 |
### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| :--: | :--: | :--: | :-- |
| start | 无 |无  | 动画开始执行触发 |
| end | 无 | 无 | 动画结束执行触发 |
| click | 无 | 事件参数e | 动画点击执行触发 |

### :corn: slot插槽
默认default

### :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| init | 无 | 无 | 初始化 |
| play | 无 | 无 | 播放 |
| stop | 无 | 无 | 停止 |
| reset | 无 | 无 | 重置 |


	

### :couplekiss: 文档贡献
此页文档由ygy贡献([git](https://gitee.com/ygy-promise),[github](https://github.com/ygy-97))，如果对该框架感兴趣的可以参与我们一同进步！