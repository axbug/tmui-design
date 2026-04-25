---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 展示组件

# 金额栅格 TmMoney

对金额进行栅格化

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/money"></webview>

::: details 示例模板

<<< ../../../src/pages/index/money.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| digit | number | 2 | 小数点后几位 | 
| thousand | boolean | false | 开启千分位 | 
| thousandUnit | string | "," | 千分位的分隔符 | 
| thousandLen | number | 3 | 千分位的长度，默认是3位一位，如果为4就是万分位依此类推 | 
| symbolText | string | '￥' | 货币符号 | 
| symbolPosition | string | 'left' | 货币符号位置left:左侧right:右侧 | 
| color | string | 'primary' | 文字颜色 | 
| darkColor | string | '' | 暗黑时的文字颜色 | 
| fontSize | string | '32' | 文字大小 | 
| preFontSize | string | '32' | 货币符号及小数字号大小 | 
| showCn | boolean | false | 是否显示中文金额 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | 名称：binding,inter 类型：string 
名称：binding,digit 类型：string 
名称：binding,cn 类型：string 
名称：binding,lineHeight 类型：string 
 | 默认插槽 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


