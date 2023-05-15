---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 结果页 Result
主要用来显示页面当前状态，比如空，出错等。

---

## :hot_pepper: 结果页 Result 示例

<webview url="https://tmui.design/h5/#/pages/showdata/result"></webview>

::: details 示例模板

<<< ../src/pages/showdata/result.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| status | String | 'empty' | empty,error,success,warning,lock,network |
| icon | String | '' | 图标名称或者图片地址 |
| color | String | 'primary' | 图标颜色 |
| title | String | '' | 标题 |
| subTitle | String | '' | 标题下的副标题描述 |
| btnText | String | '确认' | 按钮文字 |
| followTheme | [Boolean] | true | 是否跟随全局主题的变换而变换 |
| followDark | [Boolean] | true | 是否跟随暗黑 |
| text | [Boolean] | true | 是否浅色背景 |
| size | [Number] | 140 | 尺寸 |
| dark | [Boolean,String] | false | 暗黑 |
| showBtn | Boolean | true | 是否显示底部的操作按钮。 |
| clickDisabled | Boolean | true | 默认禁用。是否禁用整个组件的点击事件触发。 |

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| @click |  | event | 点击按钮时触发 |
| @resultClick |  | event | 点击整个组件时触发，可通过clickDisabled禁止触发 |


## :corn: slot插槽
| 属性名称 | 类型 | 数据 | 说明 |
| --- | --- | --- | --- |
| default |  |  |  |

## :green_salad: ref方法
无

## 贡献者
Mr.童
