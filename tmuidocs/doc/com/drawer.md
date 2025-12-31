---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 反馈组件

# 抽屉 TmDrawer

提供四个方向的弹出。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/drawer"></webview>

::: details 示例模板

<<< ../../../src/pages/index/drawer.vue{vue}

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
| title | string | $i18n.t('tmui32x.tmDrawer.title') | 标题 | 
| showFooter | boolean | false | 显示底部操作栏 | 
| showTitle | boolean | true | 是否显示标题 | 
| showClose | boolean | false | 是否显示底部关闭按钮 | 
| overlayClick | boolean | true | 遮罩是否允许点击被关闭 | 
| show | boolean | false | 显示可v-model:show双向绑定 | 
| showCancel | boolean | true | 显示取消按钮 | 
| cancelText | string | $i18n.t('tmui32x.cancelText') | 取消按钮的文本 | 
| confirmText | string | $i18n.t('tmui32x.confirmText') | 确认按钮的文本 | 
| duration | number | 300 | 动画时间 | 
| position | string | "bottom" | 打开方向。 | 
| round | string\|number | "" | 打开方向为上和下时的圆角空值时，取全局配置的圆角。 | 
| size | string\|number | "50%" | 左右时为内容宽，上下时为内容高百分比，数字字符或者带单位,或者为auto(根据内容自动高度或者宽高) | 
| maxHeight | string | "" | 弹层最大的高度值，默认为屏幕的可视高提供值时不能为百分比，可以是px,rpx单位数字。如果你不带单位，默认转换为rpx单位。 | 
| bgColor | string | 'white' | 背景颜色 | 
| darkBgColor | string | '' | 暗黑背景颜色，如果不提供默认读取全局的sheet配置 | 
| disabledScroll | boolean | false | 是否禁用内部的scroll标签禁用后内容不会滚动，如果设定了指定高，内容超出指定高，会被裁切但如果没有指定高，内容自动的话，高是自动的。 | 
| contentMargin | string | '24' | 内容区域左右和下的边距。 | 
| widthCoverCenter | boolean | false | 宽屏时是否让内容剧中显示并限制其它宽为屏幕宽，只展示中间内容以适应宽屏。注意只有top,bottom才会生效。 | 
| offsetTop | string\|number | '0' | 距离顶部的偏移量 | 
| zIndex | string\|number | 1100 | 弹层的层级 | 
| lazy | boolean | false | 懒加载为了解决业务布局节点超多时,你可能需要内容延迟加载以免阻塞动画流畅度.如果你启用了lazy,每天次打开时,动画执行后才会显示内容.这样动画就流畅,不会因为节点过多造成的卡. | 
| beforeClose | () =\> Promise\<boolean\> | true | 关闭前执行，可以是异步函数，只有当用户点击confirm时才会触发。如果返回false将阻止关闭。true允许关闭。 | 
| disabled | boolean | false | 是否禁用弹层 | 
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
| trigger | 名称：binding,show 类型：- 
 | {Boolean} show - 当前是否已显示 | 
| title | 名称：binding,show 类型：- 
 | {Boolean} show - 当前是否已显示 | 
| default | - | 默认插槽 | 
| footer | - | 底部操作栏 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


