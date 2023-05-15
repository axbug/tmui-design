---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 键盘 keyboard

键盘组件提供四种模式，可以适应多种输入环境，分别为密码输入，身份证号输入，车牌输入以及常见的数字键盘

因这个组件名字拼错了，现在为了纠正：keyboard和keyborad，两个组件同时存在，可以共用。到了年底错误的组件将删除，请大家做好使用正确组件。


---

## :hot_pepper: 键盘 Keyborad 示例

<webview url="https://tmui.design/h5/#/pages/form/keyborad"></webview>

::: details 示例模板

<<< ../src/pages/form/keyborad.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数

本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| type | String | number | 可选：card 身份证，car 车牌，password 密码，number 数字 |
| show | Boolean | false | 是否显示 |
| modelValue | String | "" | 输入值v-model |
| defaultValue | String | "" | 默认内容 |
| color | String | primary | 键盘颜色 |
| random | Boolean | false | 是否为随机键盘 |
| decimal | Boolean | true | 是否显示小数点（数字键盘有效） |

## :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | - | modelValue | 返回当前输入内容 |
| confirm | - | modelValue | 返回最终输入内容，并隐藏键盘 |


## :corn: slot插槽

无

## :green_salad: ref方法

无

## :rage: 贡献者
[Wicos](http://wicos.me)
