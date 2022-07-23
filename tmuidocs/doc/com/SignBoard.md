---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 签名板 SignBoard
签名板全端兼容，用于签名使用

---


### :hot_pepper: 签名板 SignBoard 示例

<webview url="https://tmui.design/h5/#/pages/other/signBoard"></webview>

::: details 示例模板

@[code vue](pages/other/signBoard.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | Number | 750 | 宽度 |
| height | Number | 500 | 高度 |
| lineWidth | Number | 5 | 笔画粗细 |
| lineColor | String | "red" | 笔画颜色，是颜色值，非主题名称 |

### :rose: 事件
无

### :corn: slot插槽
无

### :green_salad: ref方法

**如果在安卓端nvue原生的情况下保存二维码有未知问题，请使用vue页面使用本组件。**

| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| save | - | `Promise<String>` | h5端返回的是base64数据，其它端是临时图片路径 |
| clear | - | - | 清除画板 |
