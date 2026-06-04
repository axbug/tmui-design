---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 输入框 TmInput

可以全局配置圆角风格.

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/input"></webview>

::: details 示例模板

<<< ../../../src/pages/index/input.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | string\|number | "" | 输入框的值 | 
| inputStyle | string | "" | 输入框自定义的style样式 | 
| inputClass | string | "" | 输入框自定义的class样式 | 
| type | string | - | 输入类型,可选值:text,number,idcard,digit,tel,safe-password,nickname,textarea:文本域 | 
| password | boolean | false | 是否是密码框 | 
| showEye | boolean | false | 显示密码小眼睛 | 
| placeholder | string | "请输入或选择" | 输入框的占位文字 | 
| placeholderStyle | string | "color:#b1b1b1;" | 输入框的占位文字样式 | 
| placeholderClass | string | "" | 输入框的占位样式 | 
| align | string | "left" | 输入框的对齐方式,可选值:left,right,center | 
| color | string | "" | 输入框背景 | 
| darkBgColor | string | "transparent" | 输入框暗黑背景，空值取全局的配置提供会覆盖全局的配色。默认是透明 | 
| fontSize | string\|number | "32" | 输入框字体大小 | 
| width | string\|number | "auto" | - | 
| height | string\|number | "88" | - | 
| minHeight | string\|number | "auto" | - | 
| inputPadding | string | "24" | 输入框内的左右间隙 | 
| round | string\|number\|Array\<string \| number\> | "" | 输入框圆角,默认空值取全局的配置 | 
| showClear | boolean | false | 是否显示清除按钮 | 
| clearColor | string | "#b1b1b1" | 清除按钮颜色 | 
| showCharCount | boolean | false | 是否显示字符字统计 | 
| fontColor | string | "#333333" | 字体颜色 | 
| darkFontColor | string | "" | 暗黑模式字体颜色,如果不填写自动反转 | 
| focusFontColor | string | "" | 激活时的字体颜色空值取全局主题色,并且darkFontColor会失效.如果填写none则不生效 | 
| leftIcon | string | "" | 左图标的名称 | 
| iconColor | string | "" | 左图标的颜色默认空值取全局的主题色。 | 
| rightIcon | string | "" | 右图标的名称 | 
| rightText | string | "" | 右文字 | 
| leftText | string | "" | 右文字 | 
| disabled | boolean | false | 是否禁用 | 
| focus | boolean | false | 是否聚焦 | 
| confirmType | string | "done" | 键盘右下解按钮文字,可以取值:send,search,next,done只对input有效,对textarea无效 | 
| cursorSpacing | number | 0 | 光标与键盘的距离，单位px | 
| maxlength | number | -1 | 输入框的最大长度 | 
| confirmHold | boolean | false | - | 
| cursor | number | NaN | 不可用，容易引起bug | 
| cursorColor | string | "" | 光标颜色,默认空值取全局配置 | 
| selectionStart | number | -1 | 光标起始位置 | 
| selectionEnd | number | -1 | 光标结束位置 | 
| adjustPosition | boolean | true | 是否自动聚焦 | 
| autoBlur | boolean | false | 是否自动失焦 | 
| ignoreCompositionEvent | boolean | true | - | 
| alwaysEmbed | boolean | true | 强制input处于同层状态,不可用，容易引起bug | 
| holdKeyboard | boolean | false | focus时，点击页面的时候不收起键盘 | 
| safePasswordCertPath | string | "" | - | 
| safePasswordLength | number | NaN | - | 
| safePasswordTimeStamp | number | NaN | - | 
| safePasswordNonce | string | '' | - | 
| safePasswordSalt | string | '' | - | 
| safePasswordCustomHash | string | '' | - | 
| randomNumber | boolean | false | - | 
| controlled | boolean | false | - | 
| alwaysSystem | boolean | false | - | 
| inputmode | string | "text" | input输入模式 | 
| autoHeight | boolean | false | 尽量不要使用,客户大量手机机型反馈部分手机在手写时会异常.最好固定高. | 
| fixed | boolean | false | - | 
| showConfirmBar | boolean | false | - | 
| focusHighlight | boolean\|string | true | 是否高亮聚焦当前输入框会使用全局的主题色为边框色。 | 
| focusHighlightStyle | string | '' | 高亮聚焦当前输入框的样式默认为自动全局2pxsolid主题色,如果填写了以你的为准。 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| linechange | 名称：evt,{height:0,heightRpx:0,lineCount:0}, | - | 输入框行数变化时触发(文本哉才有) | 
| keyboardheightchange | 名称：height,键盘高度, | - | 键盘高度变化时触发 | 
| confirm | 名称：value,输入的值, | - | 点击完成按钮时触发 | 
| blur | - | - | 失去焦点时触发 | 
| focus | - | - | 获取焦点时触发 | 
| clear | - | - | 清除事件 | 
| input | 名称：value,输入的值, | - | 输入时候触发 | 
| update:modelValue | 名称：value,输入的值, | - | 等同v-model | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| left | - | 左侧插槽 | 
| leftIcon | - | 输入框左侧图标插槽 | 
| maxlength | - | 输入框右侧显示字数 | 
| rightIcon | - | 输入框内右侧图标 | 
| right | - | 输入框右侧 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


