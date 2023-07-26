---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 应用节点 App
这是所有页面的根节点，请务必在创建页面时把它作为页面的根节点。以后可扩展性非常强。

---
## 应用节点 App

::: details 页面示例模板

```js
<template>
    <tm-app ref="app">
        <!-- 这里是你的页面代码。 -->
    </tm-app>
</template>

<script lang="ts" setup>
import tmApp from "@/tmui/components/tm-app/tm-app.vue"
//你的代码...
</script>

```

:::


## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)

:::tip 关于tabBar

tabar<Badge type="danger" text="v3.0.75+" vertical="middle" />开始已经删除该属性。转而读取你的项目
目录下的pages.json的配置，如果未配置将使用框架自带的配置颜色。因为该属性只对原生的tabBar起到切换主题作用。
因此如果你使用自带的tabBar组件将不受影响。

:::

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| theme | String | grey-5 | 当前应用主题(未开放) |
| bgImg | String | https://picsum.photos/750/1448 | APP应用的背景图,nvue不支持 |
| color | String | grey-4 | 应用的背景颜色,会使子组件文字颜色继承这个主题色（自动计算的文字色，不是主题本身,因此不能设置为透明，否则继承的文字没有颜色） |
| darkColor<Badge type="danger" text="v3.0.74+" vertical="middle" /> | [String] | #050505 | 暗黑时的背景色值，只能是颜色值。 |
| blur | Boolean, String | false | 模糊背景(未开放) |
| navbar | Object | ```{background: '#ffffff',fontColor: '#000000'}``` | 标题导航配色(可选)，这里默认是读取你page.json中的配置，如果你没有配置，这里才会起作用。|
| text | Boolean | true | 是否浅色背景,比如white,如果为true它是浅灰，不是白，只有设置为false才是使用原色白 |
| transparent | Boolean | false | 是否透明背景 |


## :rose: 事件

无

## :corn: slot插槽

默认default
menu 插槽，用来显示覆盖在页面左边弹出层的菜单插槽。具体见demo前页示例。
## :green_salad: ref方法

| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| setTheme | colorName: string 主题名称 | 无 | 设定主题 |
| setDark | dark ? : boolean 是否暗黑 | 无 | 设定暗黑 |

```ts
import {getCurrentInstance} from "vue"
import tmApp from "@/tmui/components/tm-app/tm-app.vue"
const {proxy} = getCurrentInstance();
//设置红色主题
proxy.$refs.app.setTheme("red")
//设置当前为暗黑效果
proxy.$refs.app.setDark(true)

```