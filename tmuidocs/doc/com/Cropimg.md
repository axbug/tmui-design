---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 图片裁剪 Cropimg
使用该组件可快速实现图片的裁剪，用于头像、资料上传等场景。

注意：nvue中还未实现，兼容中。因为在nvue中canvas无法导入本地图片，uniapp bug。我在寻找其它代替方案。

---

### :hot_pepper: 图片裁剪 Cropimg 示例

<webview url="https://tmui.design/h5/#/pages/other/cropimg"></webview>

::: details 示例模板

@[code vue](pages/other/cropimg.vue)

:::

### :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|----------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :x:      | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)

| 参数名    | 类型     | 默认值 | 描述   |
|--------|--------|-----|------|
| url    | String | ''  | 图片地址 |
| width  | Number | 150 | 图片宽度 |
| height | Number | 150 | 图片高度 |

### :rose: 事件
| 事件名     | 参数           | 返回数据   | 描述               |
|---------|--------------|--------|------------------|
| confirm | tempFilePath | String | 裁剪后的图片，h5为base64 |
| cance   |              |        | 取消               |


### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[Kyour](https://github.com/kyour-cn)贡献，如果对该框架感兴趣的可以参与我们一同进步！
