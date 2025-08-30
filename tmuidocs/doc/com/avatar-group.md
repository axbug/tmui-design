---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 展示组件

# 头像组 TmAvatarGroup

平铺和堆叠方式。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/avatar-group"></webview>

::: details 示例模板

<<< ../../../src/pages/index/avatar-group.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| list | string[] | ():string[]=\>[]asstring[] | 头像列表,也可以是文本数组，也可以是空字符串数组 | 
| size | string | '64' | 不允许使用auto,%只能数字或者带单位的数字2px,2rpx这种 | 
| maxCount | number | 5 | 最多显示几个头像。 | 
| round | string | '32' | 圆角 | 
| gutter | string | '16' | 平铺或者堆叠时的间隙或者前推差值。不允许使用auto,%只能数字或者带单位的数字2px,2rpx这种 | 
| model | string | "scaleToFill" | 显示类型见：https://doc.dcloud.net.cn/uni-app-x/component/image.html#%E5%B1%9E%E6%80%A7 | 
| count | number | 0 | 显示在最后一个时，显示的数字。如果为0取list的长度 | 
| showCount | boolean | true | 是否显示最后一个数字头像 | 
| flat | boolean | false | 是否平铺，如果否就是堆叠。是就是正常排列。 | 
| bgColor | string | "#f5f5f5" | 如果为文本头像时的背景 | 
| darkBgColor | string | "" | 如果为文本头像时的暗黑背景空时默认取inputDarkBgcolor | 
| fontColor | string | "#a6a6a6" | 如果为文本头像时的文字颜色 | 
| darkFontColor | string | "#ffffff" | 如果为文本头像时的暗黑背景空时默认取inputDarkBgcolor | 
| fontSize | string | "28" | 字号 | 
| randomBgColor | boolean | false | 文本头像时，是否随机背景色 | 
| placeIcon | string | 'user-3-fill' | 如果当图片或者文本为空时的图片占位符可以是图片地址或者图标名称 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | 名称：index,当前索引,名称：src,当前图片地址, | - | 头像被点击时 | 
| moreClick | - | - | 最后一个数字头像more被点击时 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| more | - | more更多插槽，如果使用了这个插槽moreClick事件会丢失，请自己写在自己的布局上。 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


