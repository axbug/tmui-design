---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 描述 Descriptions
主要用于详细字段的陈述，可用于详情，列表一些描述性展示 

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/showdata/descriptions"></webview>

::: details 示例模板

@[code vue](pages/showdata/descriptions.nvue)

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
| border | [Number] | 0 | 边框宽度 |
| margin | Array | ()=>[0,0] | 外间距[x,y]x=左右，y=上下 |
| padding | Array | ()=>[16,16] | 内间距[x,y]x=左右，y=上下 |
| transprent | [Boolean,String] | false | 是否透明 |
| color | String | 'white' | 背景颜色 |
| column | [Number,String] | 2 | 需要展示的列数 |
| data | Array | [] | 数据。   这个是快捷方法，如果提供了，那么插槽中不需要填写tm-descriptions-item |
| keyMap | [Object] | {key:'label',value:'value'} |  |
| title | String | "" | 头部左边的标题 |
| labelWidth | [String,Number] | "" | 定标签为等宽 |

### :rose: 事件
无


### :corn: slot插槽
| 属性名称 | 类型 | 数据 | 说明 |
| --- | --- | --- | --- |
| title |  | "" | 自定义头部的内容 |


### :green_salad: ref方法
无

### :seedling: tm-descriptions-item参数 
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| label | String | '' | 标签文本 |
| value | String | '' | 标签值 |
| color | String | '' | 标签文字颜色 |
| fontSize | Number | 23 | 标签文字大小 |
