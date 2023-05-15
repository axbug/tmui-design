---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>
#### 组件库文档 tmui.design

# 开关 Switch
Switch 开关是用于在两种状态下选择唯一一种状态或值的组件

---

## :hot_pepper: 开关 Switch 示例

<webview url="https://tmui.design/h5/#/pages/form/switch"></webview>

::: details 示例模板

<<< ../src/pages/form/switch.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数

本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | Number | 0 | 组件宽度 |
| height | Number | 0 | 组件高度 |
| size | String | normal |组件大小，可取的值有：mini,normal,large |
| margin | Array | [0,0] | 组件外边距 |
| transprent | Boolean | false | 组件是否透明 |
| modelValue / v-model | Boolean | false | 组件的值，可双向绑定  |
| defaultValue | Boolean | false | 组件默认值 |
| selected<Badge type="danger" text="v3.0.83+" vertical="middle" /> | Boolean,String,Number | true | 打开时的值 |
| unSelected<Badge type="danger" text="v3.0.83+" vertical="middle" /> | Boolean,String,Number | false | 关闭时的值 |
| color | String | primary | 组件激活后的颜色，即按钮开启状态的颜色 |
| unCheckedColor | String | 组件未激活的颜色，即按钮关闭状态的颜色 |
| barColor | String | white | 开关上小圆球的背景色 |
| round | Number | 10 | 组件的圆角值 |
| load | Boolean | false | 是否显示组件加载状态，加载状态下组件圆形内按钮会变成旋转的加载图标 |
| beforeChecked | Function / String / Number | false | 开关状态改变前执行的函数 |
| barIcon | String | tmicon-check | 开关按钮上圆形内的图标 |
| disabled | Boolean | false | 是否禁用组件 |
| label | Array | ["",""] | 开关开启关闭时内部的文字，如：["开启","关闭"] |

## :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | / | modelValue | 开关状态改变时返回当前的状态 |
| click | / | / | 开关被点击后的函数 |

## :corn: slot插槽

无

## :green_salad: ref方法

无

## :rage: 贡献者

[Wicos](http://wicos.me)