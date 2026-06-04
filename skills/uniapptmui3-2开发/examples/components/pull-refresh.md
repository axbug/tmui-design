---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 反馈组件

# 下拉刷新 tmPullRefresh

下拉刷新组件，支持自定义下拉和触底刷新的内容。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/pull-refresh"></webview>

::: details 示例模板

<<< ../../../src/pages/index/pull-refresh.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| height | string | '100%' | 高，可以是百分比，px,rpx等单位数字或者字符串。 | 
| pullHeight | number | 60 | 下拉区域触发刷新的高度 | 
| color | string | "" | 图标颜色,空值时，取全局主题色。 | 
| textColor | string | "" | 文字颜色,空值时，取全局主题色。 | 
| showScrollbar | boolean | true | 是否显示滚动条 | 
| disabledPull | boolean | false | 是否禁用下拉刷新 | 
| disabledBottom | boolean | false | 是否禁用触底刷新 | 
| fristLoad | boolean | false | 是否进入就刷新数据 | 
| pullRefresh | () =\> Promise\<boolean\> | ()=\>(()=\>Promise.resolve(true)) | 触下拉刷新时执行本事件，返回true成功，false失败 | 
| bottomRefresh | () =\> Promise\<boolean\> | ()=\>(()=\>Promise.resolve(true)) | 触底刷新时执行本事件，返回true成功，false失败 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| scroll | 名称：evt,滚动事件参数, | - | 滚动的时候触发 | 
| scrollDirection | 名称：type,当前的滚动方向up表示往下拉，内容向上滚动，down表示往上拉，内容向下滚动, | - | 滚动的时候触发 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| pull | 名称：binding,status 类型：- 
 | - | 
| default | - | - | 
| bottom | 名称：binding,status 类型：- 
 | - | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| setScrollTop | - | - | 滚动到指定位置 | 
| setScrollIntoView | - | - | 滚动到指定id元素 | 


