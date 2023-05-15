---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 骨架屏 Skeleton
骨架加载状态屏，用来展示数据前的一种加载状态。预设了：line ,rect,card,chat四种类型，如果想要更好的自定义请使用[tm-skeleton-line](#title1)组件自行组合。

---

## :hot_pepper: 骨架屏 Skeleton 示例

<webview url="https://tmui.design/h5/#/pages/fankui/skeleton"></webview>

::: details 示例模板

<<< ../src/pages/fankui/skeleton.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: Skeleton参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| height | Number | 60 | 高度，单位rpx |
| rows | Number | 3 | 行数 |
| model | String | line | 类型；可选值：line,rect,card,chat |


## :rose: 事件
无

## :corn: slot插槽
无

## :green_salad: ref方法
无



# 自定义骨架屏组件  <span id="title1">tm-skeleton-line</span>
本元素组件自由的组合出你想要的任意加载造型，这对自定义骨架形状非常有用。


## :seedling: Skeleton-Line参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| height | Number | 60 | 高度，单位rpx |
| dark | [Boolean,String] | false |  |
| followTheme | [Boolean,String] | true | 是否跟随全局主题的变换而变换 |
| followDark | [Boolean,String] | true | 是否跟随主题全局切换暗黑模式 |
| round| Number | 3 | 圆角0-25 |

## :rose: 事件
无

## :corn: slot插槽
无

## :green_salad: ref方法
无




## :couplekiss: 文档贡献
此页文档由ygy贡献([git](https://gitee.com/ygy-promise),[github](https://github.com/ygy-97))，如果对该框架感兴趣的可以参与我们一同进步！