---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 时间选择器 TmPickerTime

选择时间：时/时分/时分秒，支持起止范围限制

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/picker-time"></webview>

::: details 示例模板

<<< ../../../src/pages/index/picker-time.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | string | "" | 当前时间,与modelStr不同，此提供的值必须是正常的时间格式xx:xx:xx否则报错，无法运行。 | 
| modelStr | string | "" | 当前时间经过format格式化后输出的值。此值不会处理输入，只输出显示。 | 
| modelShow | boolean | false | 当前打开的状态。等同v-model:model-show | 
| lazyContent | boolean | false | 是否懒加载内部内容。当前你的列表内容非常多，且影响打开的动画性能时，请务必设置此项为true，以获得流畅视觉效果。如果选择数据较少没有必要打开要兼容微信就必须打开为true,非微信可以设置为false | 
| title | string | "" | 顶部标题 | 
| cancelText | string | "" | 取消按钮的文本 | 
| confirmText | string | "" | 确认按钮的文本 | 
| start | string | "" | 开始时间：请提供正确的时间格式xx:xx:xx | 
| end | string | "" | 结束时间：请提供正确的时间格式xx:xx:xx | 
| type | union | "second" | 精确到的级别hour:小时minute:小时分钟second:小时分钟秒 | 
| format | string | "hh:mm:ss" | 输出时间格式，只对v-model:modelStr有效有效格式：hh小时mm分钟ss秒 | 
| cellUnits | Array | ()=\>[]asstring[] | 上方的单位名称,'小时','分钟','秒数' | 
| zIndex | number | 1100 | 层级 | 
| showClose | boolean | false | 是否显示关闭按钮 | 
| disabled | boolean | false | 是否禁用弹出 | 
| widthCoverCenter | boolean | false | 宽屏时是否让内容剧中显示并限制其宽为屏幕宽，只展示中间内容以适应宽屏。 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| cancel | - | - | 取消时触发 | 
| confirm | - | - | 确认触发 | 
| change | - | - | 滑动变换时触发 | 
| update:modelShow | - | - | - | 
| update:modelStr | - | - | - | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | 插槽，默认触发打开选择器。你的默认布局可以放置在这里。 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


