---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 文本 Text
自带主题和常用属性，能根据全局主题和暗黑自动切换，必须放在tmSheet下，获得更好的主题适应能力。

---

## :hot_pepper: 文本 Text 示例

<webview url="https://tmui.design/h5/#/pages/changyong/text"></webview>

::: details 示例模板

<<< ../src/pages/changyong/text.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| label | [String,Number] | "" | 文本标签 |
| fontSize | [Number,String] | 28 | 字体大小 |
| color | String | "" | 字体颜色 |
| selectable | [Boolean,String] | false | 是否可选 |
| unit<Badge type="danger" text="v3.0.73+" vertical="middle" /> | [Number] | rpx | 字号单位 |
| parentClass | String | false | 组件的最外层class类,组件内嵌view的class选择器，你可能还需要使用!important来加强自定义选择器的权重 |
| lineHeight | [Number, String] | "auto" | 行高 |

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click |  |  | 点击事件 |

## :corn: slot插槽

默认default

## :green_salad: ref方法
无
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

## :rage: 贡献者：小超1263375375