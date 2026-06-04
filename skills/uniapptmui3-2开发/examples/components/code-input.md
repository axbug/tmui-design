---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 其它组件

# 验证码输入框 tmCodeInput

验证码输入框

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/code-input"></webview>

::: details 示例模板

<<< ../../../src/pages/index/code-input.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| autoFocus | boolean | false | 进入时自动获取焦点，并弹出系统自带的键盘(需要useSysKeyborad=true)。 | 
| useSysKeyborad | boolean | true | 是否使用系统自带的键盘。，如果为false你需要自行配置输入键盘比如使用我的keyborad键盘组件。 | 
| modelValue | string | "" | 当前输入的值 | 
| maxlength | number | 4 | 最大长度 | 
| gutter | string | "16" | 间距 | 
| width | string\|number | "100" | 验证码框的宽 | 
| height | string\|number | "100" | 验证码框的高 | 
| fontColor | string | "" | 当前输入项激活时的文字颜色同时也是高亮时的背景色。默认取全局主题 | 
| darkFontColor | string | "" | 暗黑时的主题色，不填写等同fontColor | 
| fontSize | string | "42" | 文字大小 | 
| round | string | "16" | 圆角 | 
| bgColor | string | "#f0f0f0" | skin=fill时的背景 | 
| darkBgColor | string | "#272727" | skin=fill时的暗黑背景 | 
| borderColor | string | "" | skin=outline时的边线颜色 | 
| darkBorderColor | string | "" | skin=outline时的暗黑边线颜色 | 
| unBorderColor | string | "#e3e3e3" | skin=outline时的边线颜色[非激活时] | 
| unDarkBorderColor | string | "#2c2b2c" | skin=outline时的暗黑边线颜色[非激活时] | 
| skin | string | "outline" | - | 
| placeShape | string | "round" | 待输入时的占位形状line线型round圆形空值表示不需要占位符号 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | - | - | 输入框点击时触发 | 
| confirm | 名称：value,值, | - | 自带键盘上确认或者达到指定长度位数时触发，可能会多次触发 | 
| change | 名称：value,值, | - | 输入时触发 | 
| update:modelValue | - | - | 等同vmodel，可与我的keyborad键盘配合使用。 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


