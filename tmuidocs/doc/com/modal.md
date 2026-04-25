---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 反馈组件

# 对话框 TmModal

可全局统一更改风格。使用时注意下：如果height:auto，将失去内容滚动效果。如果要内容滚动height必定是一个值。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/modal"></webview>

::: details 示例模板

<<< ../../../src/pages/index/modal.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| customStyle | string | "" | 自定义遮罩样式 | 
| title | string | $i18n.t("tmui32x.tmModal.title") | 标题 | 
| showFooter | boolean | true | 显示底部操作栏 | 
| showTitle | boolean | true | 是否显示底部关闭按钮 | 
| showClose | boolean | false | 是否显示底部关闭按钮 | 
| showCancel | boolean | true | 显示取消按钮 | 
| overlayClick | boolean | true | 遮罩是否允许点击被关闭 | 
| show | boolean | false | 显示可v-model:show双向绑定 | 
| duration | number | 250 | 动画时间 | 
| cancelText | string | $i18n.t("tmui32x.cancelText") | 取消按钮的文本 | 
| confirmText | string | $i18n.t("tmui32x.confirmText") | 确认按钮的文本 | 
| round | string\|number | "" | 打开方向为上和下时的圆角空值时，取全局配置的圆角。 | 
| width | string\|number | "84%" | 宽，百分比，Px,rpx，auto都支持 | 
| height | string\|number | "350" | 宽，百分比，Px,rpx，auto都支持 | 
| maxHeight | string\|number | "80%" | 可以是百分比,px,rpx单位数字。如果你不带单位，默认转换为rpx单位。 | 
| disabledScroll | boolean | false | 是否禁用内部的scroll标签禁用后内容不会滚动，如果设定了指定高，内容超出指定高，会被裁切但如果没有指定高，内容自动的话，高是自动的。有这个属性是因为截止4.03scroll-view里面放input不会上推键盘，及内部的viewtouchMove会失效。 | 
| disabled | boolean | false | 禁用弹层 | 
| bgColor | string | "white" | 容器背景色 | 
| darkBgColor | string | "" | 暗黑时的容器背景色，不填写的话取sheetDarkColor | 
| zIndex | string\|number | "1105" | - | 
| contentPadding | string\|number | "32" | 内容区域的间隙 | 
| btnColor | string | "" | - | 
| beforeClose | () =\> Promise\<boolean\> | true | 关闭前执行，可以是异步函数，只有当用户点击confirm时才会触发。如果返回false将阻止关闭。true允许关闭。 | 
| disableTeleport | boolean | false | 是否禁用teleport（H5平台）在嵌套组件或特殊环境下，可以禁用teleport避免DOM错误 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | - | - | 点击遮罩事件 | 
| close | - | - | 关闭是触发 | 
| open | - | - | 打开时触发 | 
| beforeOpen | - | - | 打开前执行 | 
| beforeClose | - | - | 关闭前执行 | 
| update:show | - | - | 等同v-model:show | 
| cancel | - | - | 取消时触发 | 
| confirm | - | - | 确认时触发 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| trigger | 名称：binding,show 类型：Boolean 
 | 标签触发显示遮罩，免于使用变量控制 | 
| title | 名称：binding,show 类型：Boolean 
 | 标题插槽 | 
| default | - | 默认插槽 | 
| footer | - | 底部操作栏 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


