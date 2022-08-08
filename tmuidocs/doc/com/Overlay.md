---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 遮罩 Overlay
用于在屏幕上方显示遮罩，用于突出展示某个内容。

---

### :hot_pepper: 遮罩 Overlay 示例

<webview url="https://tmui.design/h5/#/pages/fankui/overlay"></webview>

::: details 示例模板

@[code vue](pages/fankui/overlay.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE           | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)

| 参数名          | 类型      | 默认值              | 描述          |
|--------------|---------|------------------|-------------|
| align        | String  | flex-center      | 内容的对齐方式的类   |
| bgColor      | String  | rgba(0,0,0,0.35) | 当前组件的主题     |
| zIndex       | Number  | 120              | 显示优先层级      |
| show         | Boolean | false            | 是否显示，双向绑定v-model:show        |
| overlayClick | Boolean | true             | 遮罩层可点击      |
| transprent   | Boolean | false            | 是否透明效果      |
| duration     | Number  | 300              | 弹出动画的时间（毫秒） |

### :rose: 事件
| 事件名         | 参数   | 返回数据    | 描述               |
|-------------|------|---------|------------------|
| click       |      |         |                  |
| open        |      |         | 显示抽屉             |
| close       |      |         | 关闭抽屉             |
| update:show | show | Boolean | 显示状态（更新v-model:show值） |

### :corn: slot插槽
默认default

### :green_salad: ref方法
| 方法名   | 参数  | 返回值 | 描述  |
|-------|-----|-----|-----|
| open  |     |     | 显示  |
| close |     |     | 隐藏  |

### :couplekiss: 文档贡献
此页文档由[Kyour](https://github.com/kyour-cn)贡献，如果对该框架感兴趣的可以参与我们一同进步！
