---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 下拉筛选器 FilterMenu
本组件提供了基本逻辑框和动效,不集成任何数据逻辑,由使用者自行处理.<br>
提醒各位：如果不开启fixed功能属性静态放置时，下拉错位，多半是你们用电脑浏览器模拟器的移动端，用鼠标滚动的。
事实上我作了页面禁止滚动，手机上是滑动不了的，因此也不会出现下拉错位问题。如果你很在意要兼容电脑版本，那就开启fixed属性。

**FilterMenu中必须放入FilterMenu-item才会生效.**

---

## :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/daohang/tmFilterMenu"></webview>

::: details 示例模板

<<< ../src/pages/daohang/tmFilterMenu.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: FilterMenu 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | Number | 750 | 宽 |
| height | Number | 70 | 高 |
| color | String | 'white' | 背景主题颜色 |
| activeColor | String | 'primary' | 选中时的颜色 |
| modelValue | Number | NaN | 打开时的索引,NaN时即关闭可双向绑定v-model="xx" |
| fixed | Boolean | false | 是否开启悬浮 |
**fixed的解释**
开启后内容，展开会自动吸附到顶部，解决把此组件用到悬浮或者sticky中时，内容需要跟随页面置顶展示内容。关闭时，适合静态展示，展开后菜单不会吸顶。

## :rose: FilterMenu 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| @click | item,index | 返回索引数据和项目数据 | 导致菜单单击时触发 |
| @close | - | - | 关闭选项时触发 |
| @onButton | boolean,index | 返回当前选中状态,以及当前的索引值 | 当菜单为按钮时,点击click是会同时触发此事件. |
| @confirm | index | 当前的索引值 | 当在tm-filter-menu-item中放入tm-buttom时,form-type属性为filterConfirm时,按钮被点击时会触发此事件 |
| @cancel | index | 当前的索引值 | 当在tm-filter-menu-item中放入tm-buttom时,form-type属性为filterCancel时,按钮被点击时会触发此事件 |

## :corn: slot FilterMenu插槽
| 属性名称 | 类型 | 数据 | 说明 |
| --- | --- | --- | --- |


## :green_salad: ref FilterMenu方法
close,关闭当前选项菜单.

## :green_salad: FilterMenu-item 属性

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| height | Number | 500 | 本选项页面展开的高度 |
| title | string | '' | 选项菜单 |
| icon | string | 'tmicon-angle-up' | 选中时的图标 |
| unIcon | string | 'tmicon-angle-down' | 没有选中时的图标 |
| unit | string | 'rpx' | 单位可选rpx,px |
| fontSize | Number | 28 | 菜单文字大小 |
| fontColor | string | 'primary' | 选中时的文本颜色 |
| unFontColor | string | 'black' | 没有选中时的文本颜色 |
| isButton | boolean | false | 是否当作按钮使用,点击时,只触发事件,不展开相关内容的动作 |
| bgColor | string | 'white' | 当前选项页的背景色|
| uuid | string,number | '' | 自定义标识，可通过click中的item获得 |

## :corn: slot FilterMenu-item插槽
| 属性名称 | 类型 | 数据 | 说明 |
| --- | --- | --- | --- |
| default |  |  | 自定内容 |
