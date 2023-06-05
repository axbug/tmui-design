---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 进度条 Progress
进度条，圆形进度条，在不同的平台使用2d或者webgl方法，使得性能更加强劲。NVUE中貌似是uniapp的插件bug无法实现渐变绘制。Nvue中需要在manifest.json中设置canvas模块，才能打包详见：https://github.com/dcloudio/NvueCanvasDemo。

---


## :hot_pepper: 进度条 Progress 示例

<webview url="https://tmui.design/h5/#/pages/fankui/progress"></webview>

::: details 示例模板

<<< ../src/pages/fankui/progress.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| model | String | line | 模式：直线形、环形;可选值：line,circle |
| semicircle | [Boolean,String] | false | 是否半圆;可选值：false,true,注意：model==circle有效|
| semicircleFlip | [Boolean,String] | false |是否反转； 半圆正常是在上方，如果反转就在下方；注意：model==circle有效 |
| fontSize | [Number,String] | 28 | 字体大小，注意：model==circle有效 |
| percent | Number | 0 | 进度 百分比数值，不带%号，也可以使用v-model:percent |
| percentSuffix | String | % | 数值后缀，默认为% |
| width | Number | 120 | 宽度，单位rpx |
| height | Number | 6 | 高度，单位rpx |
| bgColor | String | grey-3 | 背景颜色 |
| color | String | primary | 颜色 |
| followTheme | [Boolean,String] | true | 是否跟随主题，可选值：false,true |
| dark | [Boolean] | false | 黑暗模式，可选值：false,true |
| linear | [String] | 无 |直线形图表开始结束方向，left:右->左，right:左->右。top:下->上，bottom:上->下 |
| linearDeep | [String] | light  | light,dark,accent亮系渐变和深色渐变 |
| round | [Number,String] | 3 | 直线线条圆角 |
| showBar | [Boolean,String] | false | 显示数值点 |
| disabled | Boolean | false | 是否禁用 |

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:percent | 进度值 | number | 进度值变化时触发 |
| change | 进度值 | number | 进度值变化时触发 |
## :corn: slot插槽
title,圆形进度条时中间的文字插槽。

## :green_salad: ref方法
无
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

## :couplekiss: 文档贡献
此页文档由ygy贡献([git](https://gitee.com/ygy-promise),[github](https://github.com/ygy-97))，如果对该框架感兴趣的可以参与我们一同进步！