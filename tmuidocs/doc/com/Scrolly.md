---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 纵向滚动 Scrolly <Badge type="danger" text="试验 v3.0.83+" vertical="middle" />
横向滚动，应用于菜单图标，内容需要横向滚动的场景，注意：我已经兼容了所有平台，如果你需要使用原生的scroll-view横向滚动，需要自行兼容。

---

## :hot_pepper: 纵向滚动 Scrolly 示例效果

<webview url="https://tmui.design/h5/#/pages/other/scrolly"></webview>

::: details 示例代码

<<< ../src/pages/other/scrolly.nvue{vue}

:::


## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | Number | 0 | 宽度，单位rpx,默认为0表示自动宽度 |
| height | Number | 300 | 高度，单位rpx |
| loadingTexts | String | ```['下拉刷新', '松手刷新', '正在刷新', '刷新完成']``` | 提示文字 |
| maxBarHeight | Number | 120 | 高度，单位px |
| refreshTimeout | Number | 1000*5 | 刷新超时时间,单位毫秒 |
| modelValue | boolean | null | 等同v-model，下拉状态，触发刷新时，请手动管理这个状态，如果不管理按照上面的超时自动管理 |
| defaultValue | boolean | false | 默认的下拉状态 |
| loadBarHeight | Number | 120 | 下拉多少高度触发，单位px |
| bottomValue | boolean | null | 等同v-model:bottom-value,触底加载状态。请手动管理这个状态，如果不管理按照上面的超时自动管理 |
| refresher | boolean | true | 开启下拉刷新  值为 `true` 表示开启下拉刷新，值为 `false` 表示关闭下拉刷新 |


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| :--: | :--: | :--: | :-- |
| refresh | - | - | 松开时高度超过阈值则触发刷新 |
| bottom | - | - | 触底时触发 |
| change | - | - | 状态变化时触发 |
| timeout | - | - | 加载超时触发 |

## :corn: slot插槽
| 插槽名 | 数据 | 类型 | 描述 |
| :--: | :--: | :--: | :-- |

## :green_salad: ref方法
无

## :couplekiss: 文档贡献

-