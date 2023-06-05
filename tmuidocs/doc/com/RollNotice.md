---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 滚动通知 RollNotice <Badge type="danger" text="v3.0.7+" vertical="middle" />
主要是显示通知公告，多条内容形成一个滚动展示的效果。

---

## :hot_pepper: 滚动通知 RollNotice 示例

<webview url="https://tmui.design/h5/#/pages/fankui/rollNotice"></webview>

::: details 示例模板

<<< ../src/pages/fankui/rollNotice.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | number | 750 | 实际宽度会减去margin值。 |
| height | number | 70 | 高度 |
| fontSize | number | 26 | 字号 |
| fontColor | String | "" | 文字颜色，默认是自动匹配主题 |
| icon | String | "tmicon-info-circle" | 左图标，空时，不显示 |
| showRight | Boolean | false | 是否显示右图标 |
| margin | `Array<number>` | [32,0] | 外间距，x,y |
| speed | number | 60 | 滚动速度 |
| list | `Array<string>/string/object/Array<object>` | "" | 待滚动的消息内容 |
| rangeKey | string | text | 当list是```object,object[]```时，需要指定此字段来显示文本 |


## :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | index:number | - | 事件参数返回Index，当前的消息索引，如果list为string时，这里始终是0 |

## :corn: slot插槽
无

## :green_salad: ref方法
无

