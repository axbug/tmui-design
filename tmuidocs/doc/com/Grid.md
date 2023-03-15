---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 宫格 Grid
宫格用于把元素进行水平方向分割成等宽区块，是较为常用的布局方式，通常用于页面导航。

---

### :hot_pepper: 宫格 Grid 示例效果

<webview url="https://tmui.design/h5/#/pages/layout/grid"></webview>

::: details 示例代码

@[code vue](pages/layout/grid.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE           | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)

| 参数名        | 类型      | 默认值   | 描述     |
|------------|---------|-------|--------|
| width      | Number  | 750   | 宽度     |
| col        | Number  | 5     | 每行的列数  |
| showBorder | Boolean | false | 是否显示边线 |
| color      | String  | white | 背景颜色   |
| transprent | Boolean | false | 是否透明背景 |

### :rose: 事件
无

### :corn: slot插槽
`注意，它内部只能放置tm-grid-item，且不能嵌套tm-grid`

tm-grid-item

### :green_salad: ref方法
无

# 宫格子组件 Grid-Item
### :seedling: 参数

| 参数名      | 类型              | 默认值   | 描述                           |
|----------|-----------------|-------|------------------------------|
| height   | Number          | 100   | 高度，如果提供为0，就表示自动高度。                           |
| transprent | Boolean       | true  |                                |
| dot      | Boolean, String | false | 是否显示红点                       |
| icon     | Boolean, String | false | 显示图标                         |
| count    | Number, String  | 0     | 为数字时，显示数字角标，如果为string是显示文本角标 |
| maxCount | Number          | 999   | 数字角标显示最大值                    |
| color    | String          | red   | dot的主题色                         |
| bgColor  | String          | white |                        |
| url      | String          | ''    | 如果提供了链接，当点击格子时自动跳转页面         |

### :rose: 事件
| 事件名   | 参数  | 返回数据 | 描述  |
|-------|-----|------|-----|
| click |     |      |     |

### :couplekiss: 文档贡献
此页文档由[Kyour](https://github.com/kyour-cn)贡献，如果对该框架感兴趣的可以参与我们一同进步！
