---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 展示组件

# 折叠面板子组件 TmCollapseItem

可单，可多开,可放置在tm-collapse内

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/collapse"></webview>

::: details 示例模板

<<< ../../../src/pages/index/collapse.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| name | string\|number | "" | 唯一标识 | 
| showBottomLine | boolean | true | 是否显示底部边线 | 
| disabled | boolean | false | 是否禁用 | 
| titleFontSize | string\|number | '30' | 标题大小 | 
| titleColor | string | '#333333' | 标题颜色 | 
| darkTitleColor | string | '' | 拒绝礼佛标题颜色，如果不填写取白 | 
| activeColor | string | '' | 激活时的颜色，空值读取全局值。 | 
| color | string | 'white' | 背景 | 
| darkColor | string | '' | 暗黑时的背景，如果不填写默认取sheetDarkColor | 
| leftIcon | string | '' | 左边图标 | 
| title | string | '' | 标题 | 
| titleHeight | string | '100' | 标题高度 | 
| titleLines | number | 1 | 标题最多显示几行出现省略号 | 
| bottomColor | string | '#f5f5f5' | 下边线颜色.默认等同全局边线颜色. | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| left | 名称：binding,status 类型：boolean 
 | 左边插槽 | 
| title | 名称：binding,status 类型：boolean 
 | 标题插槽，如果你要完全自定标题样式请在此插槽内布局 | 
| right | 名称：binding,status 类型：boolean 
 | 右边插槽 | 
| default | - | 默认内容插槽。 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


