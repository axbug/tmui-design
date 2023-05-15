---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 评分 Rate
Rate 评分是常见的评分组件，多用于售后等评价情景，本组件提供灵活的使用方法

---

## :hot_pepper: 评分 Rate 示例

<webview url="https://tmui.design/h5/#/pages/form/rate"></webview>

::: details 示例模板

<<< ../src/pages/form/rate.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数

本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| count | Number | 5 | 评分图标数量 |
| modelvalue / v-modeel | Number | 0 | 双向绑定的评分数值 |
| defaultValue | Number | 0 | 默认评分值 |
| readonly | Boolean | false | 是否只读，样式无变化，可以触发点击事件，但同样无法切换数值 |
| disabled | Boolean | false | 禁用后无法点击和切换值 |
| icon | String | tmicon-collection-fill | 评分图标 |
| size | Number | 42 | 评分图标大小 |
| color | String / Array | orange | 可以是数据也可以是单独主题名称。如果出现多个主题名称时。颜色将会对应count出现。比如1星是红，2星是蓝。依此类推 |
| gutter | Number | 16 | 图标间距 |
| dark | Boolean | false | 是否为黑暗模式 |
| followDark | Boolean | true | 是否跟随全局切换黑暗模式 |
| label | String | "" | 右边的分值，默认为空即显示星数值。如果提供了其它值，就不显示默认的，比如9.6分 |
| showLabel | Boolean | false | 是否显示右侧分数值 |

## :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | / | index | 返回当前被点击评分的索引值(从0开始) |
| change | / | modelvalue | 返回当前评分数值 |

## :corn: slot插槽

默认default

## :green_salad: ref方法

无

## :rage: 贡献者

[Wicos](http://wicos.me)