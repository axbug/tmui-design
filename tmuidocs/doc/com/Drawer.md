---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 抽屉 Drawer
弹出层容器，用于展示弹窗、信息提示等内容。

---

### :hot_pepper: 抽屉 Drawer 示例

<webview url="https://tmui.design/h5/#/pages/fankui/drawer"></webview>

::: details 示例模板

@[code vue](pages/fankui/drawer.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE           | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)

| 参数名          | 类型             | 默认值     | 描述   |
|--------------|----------------|---------|-----------------------------------------|
| mask         | Boolean        | true    | 是否显示遮罩  |
| placement    | String         | top     | 抽屉放置的位置 可选：top,left,right,bottom,center |
| show         | Boolean        | false   | 是否显示双向绑定可使用v-model:show  |
| width        | Number         | 500     | 宽      |
| height       | Number         | 600     | 高        |
| round        | Number, String | 12      | 圆角像素         |
| duration     | Number         | 300     | 弹出动画的时间（毫秒）     |
| overlayClick | Boolean        | true    | 是否允许点击遮罩关闭   |
| transprent   | Boolean        | false   | 是否透明效果   |
| closeable    | Boolean        | false   | 是否显示关闭按钮（如果显示，标题栏被替换为左标题右关闭按钮）          |
| color        | String         | white   | 主题颜色  |
| title        | String         | ''      | 标题        |
| okText       | String         | 完成      | 确认按钮文字  |
| okColor      | String         | primary | 确认按钮颜色         |
| okLoading    | String         | primary | true时，确认按钮将出现加载状态  |
| cancelText   | String         | 取消      | 取消按钮文字          |
| hideCancel   | Boolean        | false   | 隐藏取消按钮   |
| hideHeader   | Boolean        | false   | 隐藏工具栏，标题，取消，确认 |
| disabled     | Boolean        | false   | 禁止操作状态    |
| zIndex<Badge type="danger" text="v3.0.75+" vertical="middle" />     | Number, String        | 401   | 弹层的层级  |
| unit<Badge type="danger" text="v3.0.75+" vertical="middle" />     | String        | rpx   | 高度单位，仅支持px,rpx  |

### :rose: 事件
| 事件名         | 参数   | 返回数据    | 描述               |
|-------------|------|---------|------------------|
| click       |      |         |                  |
| open        |      |         | 显示抽屉             |
| close       |      |         | 关闭抽屉             |
| ok          |      |         | 确认按钮             |
| cancel      |      |         | 取消按钮             |
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
