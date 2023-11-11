---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 虚拟列表 Virtual
 用来展示长列表数据使用，采用虚拟数据展示，只展示视窗内数据，其它不展示。因此上万条列表数据，也可以轻松展示。<br>
 已经集成了下拉，触底加载整数事件，封装的非常简单。只要提供load事件即可异步加载数据啦。

---

## :hot_pepper: 虚拟列表 Virtual 示例

<webview url="https://tmui.design/h5/#/pages/showdata/virtual"></webview>

::: details 示例模板

<<< ../src/pages/showdata/virtual.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | Number | 300 | 宽度，单位rpx |
| height | Number | 500 | 高度，单位rpx |
| topHeight  | Number | 0 | 顶部自定义内容高度，单位rpx |
| itemHeight | Number | 0 | 项目的高度 |
| color<Badge type="danger" text="v3.0.7+" vertical="middle" /> | String | "primary" | 加载图标的主题色 |
| data | `Array<string>` | [] | 虚拟列表数据 |
| firstLoad<Badge type="danger" text="v3.0.7+" vertical="middle" /> | Boolean` | true | 首次渲染时，是否触发load事件。 |
| load<Badge type="danger" text="v3.0.7+" vertical="middle" /> | `Function,Boolean` | ()=>true | 数据加载事件 |
| scrollViewInTo<Badge type="danger" text="v3.0.9+" vertical="middle" /> | top,bottom,'' | - | 指定当前列表滚动到对应位置，顶或者底部。注意如果当前已经同位置，但加载了数据需要再次底或者顶，应该先设置为'',再设置对应值。 |

**load**为数据加载事件,参数加载类型：bottom 触底加载, top 下拉加载 

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| @pull-start<Badge type="danger" text="v3.0.7+" vertical="middle" /> | - | - | 下拉时触发 |
| @pull-end<Badge type="danger" text="v3.0.7+" vertical="middle" /> | - | - | 触底时触发 |

## :corn: slot插槽
| 插槽名 | 数据 | 类型 | 描述 |
| --- | --- | --- | --- |
| top | - | - | 顶部自定义内容，高度不超过topHeight 设定高度 |
| default | data | `Arrray<any>` | 默认插槽，主要 |

## :green_salad: ref方法
无

## :couplekiss: 文档贡献
此页文档由[夏天](https://gitee.com/Xia_5718)贡献，如果对该框架感兴趣的可以参与我们一同进步！