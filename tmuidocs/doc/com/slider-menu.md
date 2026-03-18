---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 导航组件

# 侧边菜单 TmSliderMenu

左边菜单选择，右边内容区域

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/slider-menu"></webview>

::: details 示例模板

<<< ../../../src/pages/index/slider-menu.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | string\|number | "auto" | 宽 | 
| height | string\|number | "100%" | 高是必填，不可为auto。 | 
| showScrollbar | boolean | false | 是否显示滚动条 | 
| activeTextColor | string | "" | 侧边选中的文字颜色，空值取全局主题 | 
| textColor | string | "#888888" | 侧边未选中时的文字颜色 | 
| fontSize | string | "30" | 侧边菜单文字大小 | 
| itemTextColor | string | "#333333" | 选项项目未选中的文字颜色 | 
| itemActiveColor | string | "" | 选项项目选中的文字颜色，空值取全局主题 | 
| sliderBgColor | string | "#f5f5f5" | 左侧边栏背景颜色 | 
| darkSliderBgColor | string | "" | 左侧边栏暗黑背景颜色如果不提供，自动读取全局的backgroundColorContentDark背景色 | 
| sliderContentBgColor | string | "white" | 右内容区域背景颜色 | 
| darkSliderContentBgColor | string | "" | 右内容区域暗黑背景颜色如果不提供读取sheet窗口的暗黑背景 | 
| sliderWidth | string\|number | "160" | 侧边栏宽 | 
| list | Array\<Record\<string, any\>\> | ()=\>[]asArray\<Record\<string,any\>\> | - | 
| modelValue | string\|number | "" | 当前选中项的id | 
| rangKey | string | 'title' | 文本显示的字段 | 
| rangId | string | 'id' | 标识id的字段 | 
| menuSelectedStyle | Partial\<CSSStyleDeclaration\> | ()=\>{return{}} | - | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | 名称：id,当前选中的菜单id,名称：index,当前选中的菜单索引, | - | 手动切换时触发 | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| menu | 名称：binding,item 类型：- 
 | 动态循环菜单项目插槽 | 
| default | 名称：binding,item 类型：- 
 | 动态循环list插槽 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


