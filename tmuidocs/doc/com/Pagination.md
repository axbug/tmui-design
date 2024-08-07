---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 分页 Pagination
分页按钮组

---

## :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/daohang/pagination"></webview>

::: details 示例模板

<<< ../src/pages/daohang/pagination.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| followTheme | [Boolean,String] | false |  |
| total | Number | 0 |  总数量|
| current | Number | 1 | 当前页码（请注意可以使用v-model:current来实现双向绑定的改变） |
| defaultCurrent | Number | 1 | 默认页码 |
| pageSize | Number | 10, | 分页数量 |
| disabled | Boolean | false, | 是否禁用 |
| simple | Boolean | false, | 是否使用简洁模式 |
| btnSize | Number | 5 | 按钮数量 |
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


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:current |  | value |  |
| change |  | value |  |

## :corn: slot插槽

无

## :green_salad: ref方法

无

| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

## :rage: 贡献者：小超1263375375


