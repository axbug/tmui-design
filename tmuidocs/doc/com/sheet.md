---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 常用组件

# 容器 TmSheet

像一张纸张一样，用于包裹内容区域,可塑性高,可以快速用来布局.

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/sheet"></webview>

::: details 示例模板

<<< ../../../src/pages/index/sheet.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| borderColor | string\|Array\<string\> | "" | 遵循规则：string或者[x]：全部边线[x,x]左右边线，上下边线[x,x,x]左，上，右[x,x,x,x]左，上，右,下 | 
| darkBorderColor | string\|Array\<string\> | "transparent" | - | 
| borderWidth | string\|number\|Array\<string \| number\> | 0 | 规则同borderColor | 
| borderStyle | string\|Array\<string\> | "solid" | 规则同borderColor | 
| round | string\|number\|Array\<string \| number\> | '' | 规则同borderColor左上，右上，右下，左下 | 
| margin | string\|number\|Array\<string \| number\> | '' | 遵循规则：填写0关闭,填写空值取全局string,number,或者[x]：全部[x,x]左右，上下[x,x,x]左，上，右[x,x,x,x]左，上，右,下 | 
| padding | string\|number\|Array\<string \| number\> | '' | 遵循规则：填写0关闭,填写空值取全局string,number,或者[x]：全部[x,x]左右，上下[x,x,x]左，上，右[x,x,x,x]左，上，右,下 | 
| width | string\|number | "" | - | 
| height | string\|number | "" | - | 
| loading | boolean | false | - | 
| flowTheme | boolean | false | 是否跟随主题背景色下方的color失效 | 
| color | string | "white" | 背景主题 | 
| darkBgColor | string | "" | 自定义暗黑背景空值时取全局配置 | 
| linear | Array\<string\> | ()=\>[] | 渐变，前面的color,bgColor,darkBgColor失效 | 
| shadow | string\|number\|Array\<string\> | '' | 数字或者字符串时自动计算投影,它会投影大小数组时(必须为4),第一个x,第二为y,第三个为大小,第四个为投影颜色空字符串时,取全局配置,如果不想投影设置为none即可. | 
| loadIconSize | string\|number | "50" | - | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | 名称：evt,事件参数, | - | 点击事件 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | 默认插槽 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


