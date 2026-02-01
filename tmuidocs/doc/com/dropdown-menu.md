---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 反馈组件

# 下拉菜单 TmDropdownMenu

下拉菜单组件，用于下拉菜单中展示选项。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/dropdown-menu"></webview>

::: details 示例模板

<<< ../../../src/pages/index/dropdown-menu.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| position | TmDropdownMenuPropsPositions | 'static' | 展现方式。static静态fixed展开后悬浮在顶部。 | 
| offsetTop | string | '0' | 顶部的偏移量,如果你要让出顶部距离可以设置此值。数字字符，prx,px等单位如果position=static此属性失效。 | 
| modelValue | union | -1 | 当前激活的索引标识，就是你子项上的keyName值匹配不到时关闭。所以要关闭，只要填充一个不存在的keyName值即可。 | 
| height | string | '88' | 菜单栏的高度 | 
| width | string | 'auto' | 宽度 | 
| color | string | 'white' | 背景颜色 | 
| darkColor | string | '' | 暗黑时的背景颜色 | 
| zIndex | number | 88 | 层级 | 
| hidnMask | boolean | false | 对于要把此组件嵌套在布局组件时，应该要隐藏遮罩，否则不好看。 | 
| contentColor | string | '#ffffff' | 内容背景颜色 | 
| contentDarkColor | string | '' | 暗黑时的内容背景颜色,空值取sheetDarkColor | 
| round | string | '0' | 圆角值，要注意：开启后：菜单也会有圆角，但有区别：默认未展开时四周圆角。当展开时，内容底部圆角，菜单顶部圆角，这样形成上下一体的外观。 | 
| contentPadding | string | '0px12px12px12px' | 内容样式padding,请使用css规则 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | 名称：index,当前被切换的索引值,名称：keyName,菜单keyName标识,名称：status,当前切换的状态：false表示关闭，true表示打开。, | - | 切换菜单时触发 | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | - | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| addChildren | - | - | - | 
| removeChildren | - | - | - | 


