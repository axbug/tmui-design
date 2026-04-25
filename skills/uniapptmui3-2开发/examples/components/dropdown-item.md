---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 下拉项子组件 TmDropdownItem

下拉项子组件，用于下拉菜单中展示选项。

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
| title | string | '标题' | 菜单标题 | 
| keyName | union | '' | 标识，变换或者点击时，会通过事件传回。不要与其它选项相同，必须是唯一 | 
| icon | string | 'arrow-down-s-fill' | 未选中时的图标 | 
| activeIcon | string | 'arrow-up-s-fill' | 激活时的图标 | 
| fontColor | string | '#333333' | 默认的文字及图标颜色 | 
| darkFontColor | string | '' | 暗黑时的默认的文字及图标颜色，空取时白色 | 
| fontSize | string | '28' | 文字及图标大小 | 
| activeFontColor | string | '' | 激活的文字及图标颜色空值时取全局统一的主题色。 | 
| isBtn | boolean | false | 是否是按钮选项。 | 
| color | - | 'white' | - | 
| darkColor | - | '' | - | 
| render | - | false | - | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | - | 
| footer | - | - | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


