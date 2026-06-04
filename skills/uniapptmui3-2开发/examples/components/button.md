---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 常用组件

# 按钮 TmButton

圆角，主题可通过配置统一设置或者动态全局设置，使设计风格统一并保持一致性。让你的风格独一无二。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/button"></webview>

::: details 示例模板

<<< ../../../src/pages/index/button.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| size | string | "n" | 尺寸大小,可选值：s/m/n/g/xs | 
| skin | string | "normal" | 样式可选值：thin/outlined/text/normal/dashed | 
| borderWidth | string\|number\|Array\<string \| number\> | 1 | 遵循规则：string或者[x]：全部边线[x,x]左右边线，上下边线[x,x,x]左，上，右[x,x,x,x]左，上，右,下 | 
| round | string\|number\|Array\<string \| number\> | '' | 圆角半径左上，右上，右下，左下 | 
| rounded | boolean | false | 50%圆角 | 
| width | string\|number | "" | - | 
| height | string\|number | "" | - | 
| openType | string | "" | - | 
| block | boolean | false | - | 
| disabled | boolean | false | - | 
| icon | string | "" | - | 
| iconSize | string | "" | - | 
| btnIcon | boolean | false | 是否开启仅图标按钮模式,宽和高相等 | 
| loading | boolean | false | - | 
| fontSize | string | "" | - | 
| color | string | "" | 自定义主题颜色 | 
| bgColor | string | "" | 自定义背景 | 
| darkBgColor | string | "" | - | 
| fontColor | string | "" | - | 
| darkFontColorColor | string | "" | - | 
| linear | string[] | ()=\>[] | 渐变，前面的color,bgColor,darkBgColor失效 | 
| shadow | string\|number\|Array\<string\> | '' | 数字或者字符串时自动计算投影,它会投影大小数组时(必须为4),第一个x,第二为y,第三个为大小,第四个为投影颜色空字符串时,取全局配置,如果不想投影设置为none即可. | 
| formType | string | "" | - | 
| disableHover | boolean | false | 禁止hover效果，点按没有hover效果，有时可能不需要。 | 
| url | string | "" | 跳转的地址链接，出现时点击click会跳转以/pages开头。 | 
| navigatorMode | string | "navigateTo" | url跳转模式 | 
| appParameter | string | "" | - | 
| lang | string | "en" | - | 
| sessionFrom | string | "" | - | 
| sendMessageTitle | string | "" | - | 
| sendMessagePath | string | "" | - | 
| sendMessageImg | string | "" | - | 
| showMessageCard | boolean | false | - | 
| groupId | string | "" | - | 
| guildId | string | "" | - | 
| publicId | string | "" | - | 
| dataImId | string | "" | - | 
| dataImType | string | "" | - | 
| dataGoodsId | string | "" | - | 
| dataOrderId | string | "" | - | 
| dataBizLine | string | "" | - | 
| borderColor | string\|Array\<string\> | "" | 遵循规则：string或者[x]：全部边线[x,x]左右边线，上下边线[x,x,x]左，上，右[x,x,x,x]左，上，右,下 | 
| darkBorderColor | string\|Array\<string\> | "transparent" | - | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | 名称：evt,事件参数, | - | 点击事件 | 
| getphonenumber | - | - | - | 
| getuserinfo | - | - | - | 
| error | - | - | - | 
| opensetting | - | - | - | 
| launchapp | - | - | - | 
| contact | - | - | - | 
| chooseavatar | - | - | - | 
| agreeprivacyauthorization | - | - | - | 
| addgroupapp | - | - | - | 
| chooseaddress | - | - | - | 
| chooseinvoicetitle | - | - | - | 
| subscribe | - | - | - | 
| login | - | - | - | 
| im | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| icon | - | icon图标 | 
| default | - | 默认插槽 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


