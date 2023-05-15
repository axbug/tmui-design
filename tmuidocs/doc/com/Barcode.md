---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 条形码 Barcode

这是一个条形码组件，属性多，可以生成非常个性化的组件哦~<br>
尽量横屏生成，数字多，生成的条形会溢出画布导致数据残缺，无法识别哦~

---

## :hot_pepper: 条形码 Barcode 示例

<webview url="https://tmui.design/h5/#/pages/other/barCode"></webview>

::: details 示例代码

<<< ../src/pages/other/barCode.nvue{vue}

:::


## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| option | ObjectasPropType\<Baroptions> |  | 看下面的参数 |
| width | Number | 600 | 画布的宽 |
| height | Number | 240 | 画布的高 |

“option” 中的参数
```ts
export interface Baroptions {
	width: number,//线条的宽度
	height: number,//线条的高度。
	format: string, //条码类型
	displayValue?: boolean, //是否显示下方文本
	text?: string, //待生成的文本
	textAlign?: string, //文本对齐 left,right,center
	textMargin: number,//文本与条码的间距
	fontSize: number, //文本小，默认20
	lineColor?: string,//线条颜色
}
```
## :rose: 事件
无


## :corn: slot插槽
默认default

## :green_salad: ref方法

**如果在安卓端nvue原生的情况下保存二维码有未知问题，请使用vue页面使用本组件。**

| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| save<Badge type="danger" text="v3.0.63+" vertical="middle" /> | - | 图片路径string,h5端返回的是base64 | 保存当前生成的二维码图片 |
