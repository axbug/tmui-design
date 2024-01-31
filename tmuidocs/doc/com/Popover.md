---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 汽泡卡片 Popover
用来提示，帮助展示信息等。

---

## :hot_pepper: 汽泡卡片 Popover 示例

<webview url="https://tmui.design/h5/#/pages/showdata/popover"></webview>

::: details 示例代码

<<< ../src/pages/showdata/popover.nvue{vue}

:::


## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| shadow | Number | 0 | 投影,0-25 |
| border | [Number,String] | 0 | 边框宽度 |
| round | [Number,String] | 3 | 圆角0-25，单位rpx |
| transprent | [Boolean,String] | false | 是否透明 |
| color | String | 'white' | 汽泡背景颜色 |
| width | Number | 0 | 宽度，单位rpx |
| position | String | "tc",//tl,tc,tr,bc,bl,br,上左，中，右。下左，中，右。 | 汽泡显示位置 |
| label | String | "提示内容" | 汽泡显示内容 |
| defaultShow | boolean | false | 默认是否显示 |


## :rose: 事件
无

## :corn: slot插槽
默认default，触发发弹层。
label插槽，弹层显示内容的占位(3.1.0版本新增)。

## :green_salad: ref方法
无

## :couplekiss: 文档贡献
此页文档由[夏天](https://gitee.com/Xia_5718)贡献，如果对该框架感兴趣的可以参与我们一同进步！