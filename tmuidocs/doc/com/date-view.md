---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 日期选择容器 TmDateView

如果需要弹层式用tm-picker-date组件,这个是展示型.

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/picker-date"></webview>

::: details 示例模板

<<< ../../../src/pages/index/picker-date.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | string | "" | 当前时间,与modelStr不同，此提供的值必须是正常的时间格式否则报错，无法运行。 | 
| modelStr | string | "" | 当前时间经过format格式化后输出的值。此值不会处理输入，只输出显示。 | 
| title | string | "请选择时间" | 顶部标题 | 
| start | string | "" | 开始时间，请提供正确的时间格式 | 
| end | string | "" | 结束时间，请提供正确的时间格式 | 
| type | ModelType | "day" | 精确到的级别year:年month:年月day:年月日hour:年月日小时minute:年月日小时分钟second:年月日小时分钟秒 | 
| format | string | "YYYY-MM-DD" | 输出时间格式，只对v-model:modelStr有效有效格式：YYYY年MM月DD日hh小时mm分钟ss秒 | 
| cellUnits | string[] | ():string[]=\>[$i18n.t('tmui32x.tmDateView.cellUnits.year'),$i18n.t('tmui32x.tmDateView.cellUnits.month'),$i18n.t('tmui32x.tmDateView.cellUnits.day'),$i18n.t('tmui32x.tmDateView.cellUnits.hour'),$i18n.t('tmui32x.tmDateView.cellUnits.minute'),$i18n.t('tmui32x.tmDateView.cellUnits.second')] | 上方的单位名称 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | 名称：date,当前选中时间, | - | 滑动变换时触发 | 
| update:modelStr | - | - | 经格式化后的值。等同v-model:model-str | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


