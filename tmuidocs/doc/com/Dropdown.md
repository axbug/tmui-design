<!--
 * @Autor: 小超1263375375
 * @Date: 2022-06-17 15:25:35
 * @LastEditors: 小超1263375375
 * @LastEditTime: 2022-06-18 10:53:08
 * @FilePath: \tm-vuetify-for-vue3\tmuidocs\doc\com\Dropdown.md
 * @Description: 
 * 
 * Copyright (c) 2022 by 小超1263375375, All Rights Reserved. 
-->
---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 下拉选项
用来制作下拉菜单，选项等。

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/daohang/dropdown"></webview>

::: details 示例模板

@[code vue](pages/daohang/dropdown.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| text | String | '' | 下拉选项的标题 |
| iconColor | String | '' | 下拉选项的图标颜色 |
| icon | String | '' | 下拉选项的图标 |
| border | [Number,String] | 0 |  |
| round | [Number,String] | 3 | 圆角0-25，单位rpx |
| transprent | [Boolean,String] | false | 是否透明 |
| color | String | 'white' |  |
| width | Number | 0 | 宽度，单位rpx |
| position | String | bc | tl上左，tc中，tr右。bc下左，bl中，br右。 |
| list | Array | [] | 下拉选项的数据 |
| rangKey | String | "text" |  |
| disabled | Boolean | false | 是否禁用 |


### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click |  | index: index，<br>data: {} | 点击事件 |


### :corn: slot插槽

默认default

### :green_salad: ref方法
无
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

### :rage: 贡献者：小超1263375375


