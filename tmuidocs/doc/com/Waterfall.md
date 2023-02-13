---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 瀑布流 Waterfall
瀑布流又称瀑布流式布局，是比较流行的一种网站页面布局，视觉表现为参差不齐的多栏布局，随着页面滚动条向下滚动。

---

### :hot_pepper: 瀑布流 Waterfall 示例

<webview url="https://tmui.design/h5/#/pages/showdata/waterfall"></webview>

::: details 示例模板

@[code vue](pages/showdata/waterfall.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE           | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)

| 参数名    | 类型     | 默认值 | 描述      |
|--------|--------|-----|---------|
| width  | Number | 750 | 组件整体宽度  |
| gutter | Number | 12  | 元素之间的间距 |

### :corn: slot插槽
`注意，它内部只能放置tm-waterfall-item，且不能嵌套tm-waterfall`
tm-waterfall-item

### :green_salad: ref方法
clear , 清空列表,记得清空后,如果要重新赋值一定要在nextTick里面赋值.

# 瀑布流子组件 Waterfall-Item

### :seedling: 参数
| 参数名   | 类型     | 默认值   | 描述   |
|-------|--------|-------|------|
| img   | String | ''    | 封面图片，可以为空 |
| color | String | white | 主题颜色 |
| round | Number | 0     | 圆角，0-25 |

### :rose: 事件
| 事件名       | 参数  | 返回数据  | 描述    |
|-----------|-----|-------|-------|
| img-click | e   | Event | 图片被点击 |

### :couplekiss: 文档贡献
此页文档由[Kyour](https://github.com/kyour-cn)贡献，如果对该框架感兴趣的可以参与我们一同进步！
