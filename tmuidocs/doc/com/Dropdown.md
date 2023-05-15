---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 下拉选项 Dropdown
用来制作下拉菜单，选项等。

---

## :hot_pepper: 下拉选项 Dropdown 示例

<webview url="https://tmui.design/h5/#/pages/daohang/dropdown"></webview>

::: details 示例模板

<<< ../src/pages/daohang/dropdown.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
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
| list | Array | [] | 下拉选项的数据，格式见下方 |
| rangKey | String | "text" |  |
| disabled | Boolean | false | 是否禁用 |
| haveArrow | Boolean | true | 是否显示右箭头。 |

list数组数据格式：
```ts
export interface itemList {
    text:string,
    iconColor?:string,
    icon?:string,
    [prop:string]:any
}
```

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click |  | index: index，<br>data: {} | 点击事件 |


## :corn: slot插槽

默认default

## :green_salad: ref方法
无
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

## :rage: 贡献者：小超1263375375


