---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 吸顶 Sticky
吸顶组件，用于将元素固定在底部不随页面滚动。

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/other/sticky"></webview>

::: details 示例模板

@[code vue](pages/other/sticky.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE           | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)

| 参数名    | 类型            | 默认值 | 描述          |
|--------|---------------|-----|-------------|
| model  | String        | top | 可选：left,top |
| offset | String,Number | 0 | 距离顶部间隙，单位px      |
| zIndex | Number        | 50  | 层级，对于nvue无效 |

### :rose: 事件
无

### :corn: slot插槽
默认default：为显示的默认内容。
插槽：sticky，用于悬浮。
```vue
<template v-slot:sticky>
<view>
这里面是悬浮的内容
</view>
</template>
```

### :couplekiss: 文档贡献
此页文档由[Kyour](https://github.com/kyour-cn)贡献，如果对该框架感兴趣的可以参与我们一同进步！
