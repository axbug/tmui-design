---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 验证码输入框 Codeinput
带网格的输入框组件，用于输入密码、短信验证码等场景。

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/other/codeinput"></webview>

::: details 示例模板

@[code vue](pages/other/codeinput.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE           | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)

| 参数名         | 类型            | 默认值     | 描述               |
|-------------|---------------|---------|------------------|
| followTheme | Boolean       | true    | 是否跟随主题           |
| size        | Number        | 100     | 输入框大小 px         |
| gutter      | Number        | 24      | 格子间距             |
| round       | Number        | 2       | 圆角像素             |
| border      | Number        | 2       | 边框宽度             |
| type        | String        | 5       | 形状 圆：dot,线型:line |
| fontSize    | Number        | 44      | 字体大小             |
| fontColor   | String        | ''      | 字体颜色             |
| color       | String        | primary | 主题色              |
| count       | Number        | primary | 字符数量             |
| value       | Number,String | ''      | 输入值              |

### :rose: 事件
| 事件名   | 参数  | 返回数据 | 描述  |
|-------|-----|------|-----|
| click |     |      |     |

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[Kyour](https://github.com/kyour-cn)贡献，如果对该框架感兴趣的可以参与我们一同进步！
