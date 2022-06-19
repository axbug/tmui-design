---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 虚拟列表 Virtual
 用来展示长列表数据使用，采用虚拟数据展示，只展示视窗内数据，其它不展示。因此上万条列表数据，也可以轻松展示。

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/showdata/virtual"></webview>

::: details 示例模板

@[code vue](pages/showdata/virtual.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | Number | 300, | 宽度，单位rpx |
| height | Number | 500, | 高度，单位rpx |
| itemHeight | Number | 0,required:true, | 项目的高度 |
| data | Array\<string\> | []| 虚拟列表数据 |


### :rose: 事件
无

### :corn: slot插槽
默认default，插槽数据名称：data,类型Arrray<any>;

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[夏天](https://gitee.com/Xia_5718)贡献，如果对该框架感兴趣的可以参与我们一同进步！