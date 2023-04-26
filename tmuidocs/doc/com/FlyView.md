---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 吸附器 FlyView

3.1.04+新增<br>
一个抛物线组件，从触发位置，把目标元素以抛物线的效果抛至目标点位，主要场景交互有：购物车添加商品，收藏夹等 一些交互效果的元素

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/other/flyView"></webview>

::: details 示例模板

@[code vue](pages/other/flyView.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :x: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| duration  | Number        | 600    | 动画持续时间   |
| width  | Number        | 100    | 动画内容宽度   |
| height  | Number        | 100    | 动画内容高度   |
| x  | Number        | 0    | 指定下落的目标位置x   |
| y  | Number        | 0    | 指定下落的目标位置y    |
| zIndex  | Number        | 100    | 层级    |

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |

### :corn: slot插槽
默认default,触发区域内容。
content，需要动画的内容。

### :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

