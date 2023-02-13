---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 分割线 Divider
用于将不同内容的区域进行分割，提高页面美观度和可读性！

---

### :hot_pepper: 分割线 Divider 示例

<webview url="https://tmui.design/h5/#/pages/layout/divider"></webview>

::: details 示例模板

@[code vue](pages/layout/divider.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE           | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)

| 参数名       | 类型              | 默认值      | 描述                        |
|-----------|-----------------|----------|---------------------------|
| color     | String          | grey-3   | 颜色                        |
| vertical  | Boolean | false    | 是否纵向展示                    |
| height    | Number          | 26       | 高度（只有为纵向时起作用。）                        |
| label     | String          | ''       | 文字内容                      |
| fontColor | String          | grey-1   | 文字颜色                      |
| fontSize | Number          | 26   | 字号大小                      |
| align     | String          | center   | 文字位置 可选：left,right,center |
| margin    | Array           | [16, 24] | 外边距                       |
| border    | Number          | 1        | 分割线粗细                     |
| realColor<Badge type="danger" text="v3.0.63+" vertical="middle" /> | Boolean         | false    | 是否使用原始色值，未经过处理的颜色值，因黑白灰会被处理，如果不想处理设置此为真即可。                     |


### :rose: 事件
click , 点击横线时触发。

### :corn: slot插槽
无

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[Kyour](https://github.com/kyour-cn)贡献，如果对该框架感兴趣的可以参与我们一同进步！
