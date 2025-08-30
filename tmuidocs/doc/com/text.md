---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 常用组件

# 文本 TmText

允许正则高亮或者,词高亮.

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/text"></webview>

::: details 示例模板

<<< ../../../src/pages/index/text.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| _style | Partial\<CSSStyleDeclaration\>\|string | '' | 文本自定样式 | 
| label | string\|number | '' | 文本内容这个prop用于接收显示在组件中的文本或数字 | 
| heightLight | Array\<string\> | ():string[]=\>[]asstring[] | 需要特别高亮的词 | 
| heightLightReg | Array\<string\> | ()=\>[] | 高亮正则用于定义文本中哪些部分应该被高亮显示的正则表达式数组 | 
| heightLightStyle | string | "" | 高亮文本的自定义样式 | 
| lines | number\|string | 0 | 行数控制文本显示时应该占用的行数（如果组件支持此功能） | 
| selectable | boolean | false | 是否可选指示文本是否可以被用户选择（如通过长按选择） | 
| color | string | "#333" | 文本颜色定义文本的主要颜色 | 
| darkColor | string | "" | 暗色模式颜色在暗色模式下文本的颜色（如果组件支持暗色模式） | 
| heightLightColor | string | "primary" | 高亮颜色文本中应该被高亮显示的部分的颜色 | 
| lineHeight | string\|number | "1.5" | 行高文本的行高设置 | 
| fontSize | string\|number | "" | 字体大小文本的字体大小设置 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | 名称：word,点击的文本内容, | - | 文本点击 | 
| itemClick | 名称：word,点击的文本内容, | - | 正则的文本被点击 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | 默认文本插槽，如果使用插槽，那么相关特性功能将会失效。 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


