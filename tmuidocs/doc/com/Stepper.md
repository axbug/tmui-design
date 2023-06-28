---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 步进器 Stepper
Stepper 步进器是应用在数值较少且变动较精确的数值输入场景的组件

---

## :hot_pepper: 步进器 Stepper 示例

<webview url="https://tmui.design/h5/#/pages/form/stepper"></webview>

::: details 示例模板

<<< ../src/pages/form/stepper.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数

本组件含有公共属性 [公共属性](/spec/组件公共样式.html)

::: tip 温馨提示

+，-按钮，长按时可以持续增减。

:::

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | Number | 210 | 组件宽度 |
| height | Number | 52 | 组件高度 |
| disabled | Boolean | false | 是否禁用 |
| disabledInput | Boolean | false | 是否禁用输入 |
| step | Number | 1 | 步幅长度 | 
| fixed | Number | 0 | 固定小数点位数，0表示整数 |
| color | String | grey-4 | 按钮主题色 |
| bgColor | String | grey-4 | 输入框背景色 |
| linear | String | / | 选择器确认选择按钮的渐变背景方向，可选值有：left:右->左，right:左->右。top:下->上，bottom:上->下 | 
| linearDeep | String | light | 选择器确认选择按钮的渐变背景颜色深浅，可选值有：light,dark,accent亮系渐变和深色渐变 |
| round | String / Number | 2 | 步进器圆角值 |
| fontSize | String / Number | 28 | 字体字号大小 |
| circular | Boolean | false | 步进器按钮是否为圆形 |
| max | Number | 999 | 可输入的最大数值 |
| min | Number | 0 | 可输入的最小数值 |
| modelValue / v-model | Number | null | 步进器双向绑定值 |
| defaultValue | Number | null | 步进器默认值 |
| beforeEnter | Function / Boolean | true | 返回参数(ty='+' / '-'):+表示增加按钮点击，-：表示减少按钮点击按钮增加或者减少前执行的勾子函数，返回 fase取消当前操作，可以是Promise\<boolean\> |

## :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | / | modelValue | 步进器内容修改后返回当前数值 |

## :corn: slot插槽

无

## :green_salad: ref方法

无

## :rage: 贡献者
[Wicos](http://wicos.me)