---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 横向滚动 Scrollx <Badge type="danger" text="v3.0.75+" vertical="middle" />
横向滚动，应用于菜单图标，内容需要横向滚动的场景，注意：我已经兼容了所有平台，如果你需要使用原生的scroll-view横向滚动，需要自行兼容。

---

## :hot_pepper: 横向滚动 Scrollx 示例效果

<webview url="https://tmui.design/h5/#/pages/other/scrollx"></webview>

::: details 示例代码

<<< ../src/pages/other/scrollx.nvue{vue}

:::


## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| color | String | red | 活动滚动条主题颜色名称 |
| bgColor | String | grey-2 | 背景滚动条主题颜色名称 |
| width | Number | 636 | 宽度，单位rpx |
| height | Number | 300 | 高度，单位rpx |
| showBar | Boolean | true | 是否显示滚动导航条 |
| align | String | center | 底部导航对齐方式，可选:center/between |

## :rose: 事件
无

## :corn: slot插槽
| 插槽名 | 数据 | 类型 | 描述 |
| :--: | :--: | :--: | :-- |
| default | - | - | 默认放置于滚动容器内内容 |
| barll<Badge type="danger" text="v3.0.77+" vertical="middle" /> | - | - | 在底部导航条的左右，如果提供显示在左边。align=between时，内容会左右对齐。如果不提供时，导航条在左边对齐。 |

## :green_salad: ref方法
scrollTo(pos:number),滚动到指定位置**3.0.86+**

## :couplekiss: 文档贡献

-