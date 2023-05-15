---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 显示更多 More
超过指定高度，默认隐藏更多内容。

---

## :hot_pepper: 显示更多 More 示例

<webview url="https://tmui.design/h5/#/pages/showdata/more"></webview>

::: details 示例模板

<<< ../src/pages/showdata/more.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| height | Number | 250 | 超过指定高时隐藏并显示更多。 |
| openLabel | String | '收起更多' | 展开时显示的文字 |
| closeLabel | String | '展开更多' | 收起时显示的文字 |
| beforeOpen | [Function, Boolean] | "" | 在点击打开之前执行。如果返回false，将阻止查看内容。Function可以返回Promise |

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| @change |  |  | 打开和隐藏时触发，返回当前打开的状态值。 |

## :corn: slot插槽
| 属性名称 | 类型 | 数据 | 说明 |
| --- | --- | --- | --- |
| more |  |  | 自定义底部展开和收起更多的工具条 |

## :green_salad: ref方法
无

## 贡献者
Mr.童