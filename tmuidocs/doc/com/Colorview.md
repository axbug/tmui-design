---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 卡片 Colorview
颜色选择器

---

### :hot_pepper: 卡片 Card 示例效果

<webview url="https://tmui.design/h5/#/pages/other/colorPicker"></webview>

::: details 示例代码

@[code vue](pages/other/colorPicker.vue)

:::


### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :x: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| color | String | white | 按钮主题颜色 |
| modelValue | String | "#FF0000" | 当前的颜色值，可双向绑定v-model |


### :rose: 事件
| 事件名称 | 数据 | 类型 | 描述 |
| :--: | :--: | :--: | :-- |
| confirm | 颜色值 | rgba的string值 | 当前设置或者选择的颜色值 |

### :corn: slot插槽
| 插槽名 | 数据 | 类型 | 描述 |
| :--: | :--: | :--: | :-- |

无

### :green_salad: ref方法
无

