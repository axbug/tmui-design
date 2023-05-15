---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 页面水印 Watermark
给页面加个水印，或给组件加个水印。[此组件，作者还未审核修改，目前权支持h5和web端，其它端待我有时间来适配下。]

---

## :hot_pepper: 页面水印 Watermark 示例

<webview url="https://tmui.design/h5/#/pages/other/watermark"></webview>

::: details 示例模板

<<< ../src/pages/other/watermark.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :x: | :x: | :x: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
| 参数名           | 类型        | 默认值                               | 描述            |
|---------------|-----------|-----------------------------------|---------------|
| content       | 	string   | 	undefined                        | 	水印文本         |
| cross         | 	boolean  | 	false                            | 	是否跨越边界显示     |
| debug         | 	boolean	 | false	                            | 是否显示调试信息      |
| font-size     | 	number   | 	14	                              | 字体大小          |
| font-family   | 	string   | 	undefined	                       | 字体族           |
| font-style    | 	'normal' | 'italic' / 'oblique ${number}deg' | 	normal       |	字体风格
| font-variant  | 	string	  | ''                                | 	字型           |             |          |          |
| font-weight   | 	number	  | 400                               | 	字重           |             |          |          |
| font-color    | 	string	  | rgba(128, 128, 128, .3)           | 	字体颜色         |             |          |          |
| fullscreen    | 	boolean	 | false	                            | 是否展示全屏        |             |             |          |          |
| line-height   | 	number   | 	14	                              | 行高            |             |          |          |
| height        | 	number   | 	32                               | 	高度           |             |          |          |
| image         | 	string   | 	undefined                        | 	图片路径         |             |          |          |
| image-height  | 	number	  | undefined                         | 	图片高度         |             |          |          |
| image-opacity | 	number   | 	1	                               | 图片不透明度        |             |          |          |
| image-width   | 	number   | 	undefined                        | 	图片宽度         |             |          |          |
| rotate	       | number	   | 0                                 | 	旋转角度         |             |          |          |
| selectable    | 	boolean  | 	true	                            | 被水印覆盖的内容是否可选中 |             |          |          |
| width         | 	number   | 	32                               | 	宽度           |           |             |          |
| x-gap         | 	number   | 	0	                               | x 轴间隔         |           |             |          |
| x-offset      | 	number   | 	0                                | 	x 轴偏移        |           |             |          |
| y-gap         | 	number   | 	0                                | 	y 轴间隔        |           |             |          |
| y-offset      | 	number   | 	0	                               | y 轴偏移         |           |             |          |
| z-index       | 	number   | 	10                               | 	z 轴高度        |           |             |          |


## :corn: slot插槽

默认default

## :green_salad: ref方法
无
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

## :rage: 贡献者：小超1263375375