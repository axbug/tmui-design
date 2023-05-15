---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 时间轴 Timeline
内部只可放置 tm-timeline-item 组件，不可放置其它组件。

---

## :hot_pepper: 时间轴 Timeline 示例

<webview url="https://tmui.design/h5/#/pages/showdata/timeline"></webview>

::: details 示例模板

<<< ../src/pages/showdata/timeline.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| reverse | Boolean | false | 翻转 |
| position | String | "left" | 位置 |

## :rose: 事件
无

## :corn: slot插槽
默认default

## :green_salad: ref方法
无

# 时间轴-子组件 TimelineItem
内部只可放置在 tm-timeline组件中，不可单独使用。

---

## :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| size | Number | 24 | 字体大小 |
| color | String | "primary" | 字体颜色 |
| icon | String | "" | 图标 |
| border | Number | 2 | 边框宽度 |
| type | String | 'outlined' | 填充类型,'outlined','fill' |
| time | String | '' | 时间日期 |

## :rose: 事件
无

## :corn: slot插槽
默认default

## :green_salad: ref方法
无

## :couplekiss: 文档贡献
此页文档由[夏天](https://gitee.com/Xia_5718)贡献，如果对该框架感兴趣的可以参与我们一同进步！