---
title: tmui 3.0 组件库
---
<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 吸附器 Adsorb

3.0.9+新增<br>
随意拖动后会在屏幕两侧自动吸附。也可以关闭吸附功能，达到任意拖动。主要场景为：媒体播放悬浮按钮的吸附，营销的小弹层自动吸附又可拖动防止遮挡页面。

---

## :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/other/adsorb"></webview>

::: details 示例模板

<<< ../src/pages/other/adsorb.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| adsorb  | Boolean        | true    | 是否开启屏幕两侧自动吸附            |
| duration  | Number        | 600    | 开启吸附后，自动吸附的动画持续时间   |
| width  | Number        | 100    | 宽度   |
| height  | Number        | 100    | 高度   |
| offset  | `Array<number>`        | [0,0]    | 默认的位置   |
| adsorbX  | Number        | 0    | 吸附的偏移量，比如为10：当向左吸附时，减去偏移量，向右是加上偏移量   |

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |

## :corn: slot插槽
默认default

## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

