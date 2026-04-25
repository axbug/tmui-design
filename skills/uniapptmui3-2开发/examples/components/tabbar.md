---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 导航组件

# 底部导航 TmTabbar

可定义凸起按钮。通过全局状态设置选中项，放于任何页面可自动选中。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/tabbar"></webview>

::: details 示例模板

<<< ../../../src/pages/index/tabbar.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| color | string | '#b9b9b9' | 未选中时的颜色 | 
| selectedColor | string | '' | 选中时的颜色，空值取全局主题 | 
| bgColor | string | 'white' | 背景,如果你为空，会读取全局的亮色tabbar背景 | 
| darkBgColor | string | '' | 暗黑时的背景，如果为空，取全局的底部导航背景色。 | 
| showTopBorder | boolean | true | 显示顶部边线，暗黑时取全局的borderDarkColor | 
| borderColor | string | '#f0f0f0' | 边线颜色 | 
| fontSize | string | '11px' | 文字大小 | 
| iconSize | string | '28px' | 图标大小 | 
| autoTabbarHeight | number | 0 | 导航的整体高度，请使用v-model:autoTabbarHeight="x"来获取当前的高度。外部要去变更值。这个只是对外输出，给您外部放在底部占位用，省得你们要一屏时计算高。外部最好computed使用，因为是异步的 | 
| outIndex | number | 2 | 需要向外凸起的项目索引。-1表示不凸起 | 
| outBgColor | string | 'primary' | 凸起的背景色 | 
| outIconColor | string | 'white' | 凸起的图标颜色 | 
| position | string | 'fixed' | 是否悬浮在底部,不可动态修改fixed悬浮，relative静态布局。 | 
| linearGradient | Array | ()=\>[]asstring[] | 渐变背景，如果提供，上面的背景和暗黑背景将失效。仅支持:tobottom,toright,toleft,totop例：['toright','#ff667f','#ff5416'] | 
| list | Array | ()=\>[]asTM.TABBAR_ITEM_INFO[] | 如果你提供了本地的list数据，那么全局的list将不会被采用，你需要自己管理激活引，跨页面时需要你自己设置当前页面的索引，因为变量索引是无法跨页面的。 | 
| activeIndex | number | -1 | 当前激活的索引,双向绑定用vmodel:activeIndex | 
| zIndex | number | 20 | 层级 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | 名称：index,当前选中的索引, | - | 切换项目时触发。 | 
| update:autoTabbarHeight | 名称：height,当前组件高度, | - | 同步组件高给外部使用，请使用v-model:autoTabbarHeight
组件高度 = 安全栏高度 + 导航栏高度,外部最好computed使用，因为是异步的 | 
| update:activeIndex | 名称：activeIndex,当前组件高度, | - | 同步当前索引 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| out | 名称：binding,active 类型：- 
名称：binding,size 类型：- 
 | - | 
| item | 名称：binding,activeindex 类型：- 
名称：binding,children 类型：- 
名称：binding,isactive 类型：- 
名称：binding,selfindex 类型：- 
 | - | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


