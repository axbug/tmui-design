<!--
 * @Autor: 小超1263375375
 * @Date: 2022-06-17 14:39:05
 * @LastEditors: 小超1263375375
 * @LastEditTime: 2022-06-18 11:14:52
 * @FilePath: \tm-vuetify-for-vue3\tmuidocs\doc\com\Pagination.md
 * @Description: 
 * 
 * Copyright (c) 2022 by 小超1263375375, All Rights Reserved. 
-->
---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 分页 Pagination
分页按钮组

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/daohang/pagination"></webview>

::: details 示例模板

@[code vue](pages/daohang/pagination.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| followTheme | [Boolean,String] | false |  |
| total | Number | 0 |  总数量|
| current | Number | 1，请注意可以使用v-model:current来实现双向绑定的改变 | 当前页码 |
| defaultCurrent | Number | 1 | 默认页码 |
| pageSize | Number | 10, | 分布数量 |
| disabled | Boolean | false, | 是否禁用 |
| simple | Boolean | false, | 是否使用简洁模式 |
| btnSize | Number | 5 | 黑夜显示几个按钮 |
| btnSizeNum | Number | 1 | 默认左右显示的按钮数量，出现三个"..." |
| color | String | 'primary' |  |
| btnColor | String | 'white' |  |
| followDark | [Boolean,String] | true |  |
| dark | [Boolean,String] | false |  |
| round | [Number,String] | 3 | 圆角0-25，单位rpx |
| shadow | [Number,String] | 2 | 投影,0-25 |
| text | [Boolean,String] | false |  |
| linear | [String] | 'bottom' | left:右->左，right:左->右。top:下->上，bottom:上->下。 |
| linearDeep | [String] | 'light' | light,dark,accent亮系渐变和深色渐变。 |


### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:current |  | value |  |
| change |  | value |  |

### :corn: slot插槽

无

### :green_salad: ref方法

无

| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

### :rage: 贡献者：小超1263375375


