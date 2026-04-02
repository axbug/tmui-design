---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 时间区间选择 TmBetweenTime

快速的时间区间选择器，方便时间选择自动判断前后时间大小并校正。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/between-time"></webview>

::: details 示例模板

<<< ../../../src/pages/index/between-time.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | Array\<string\> | ():string[]=\>[]asstring[] | 当前时间,与modelStr不同，此提供的值必须是正常的时间格式否则报错，无法运行。 | 
| modelStr | string | "" | 当前时间经过format格式化后输出的值。此值不会处理输入，只输出显示。 | 
| modelShow | boolean | false | 当前打开的状态。等同v-model:model-show | 
| title | string | $i18n.t("tmui32x.tmBetweenTime.title") | 顶部标题 | 
| start | string | "" | 开始时间，请提供正确的时间格式 | 
| end | string | "" | 结束时间，请提供正确的时间格式 | 
| type | ModelType | "day" | 精确到的级别,这里只是展示，具体的返回值还是完整的值。year:年month:年月day:年月日hour:年月日小时minute:年月日小时分钟second:年月日小时分钟秒 | 
| format | string | "YYYY-MM-DD" | 输出时间格式，只对v-model:modelStr及输入框展示有效因此它可能不是一个标准时间，比如YYSS,所以不能作为modelValue使用有效格式：YYYY年MM月DD日hh小时mm分钟ss秒 | 
| formatSyncValue | boolean | false | 是否将format格式化的v-model:modelStr同步到v-model:modelValue默认false,注意：如果开启了同步，你要确保format的值是正常的时间值正常兼容以下时间格式：YYYY,YYYY-MM,YYYY-MM-DD,YYYY-MM-DDHH,YYYY-MM-DDHH:mm,YYYY-MM-DDHH:mm:ss | 
| cellUnits | string[] | ():string[]=\>[$i18n.t("tmui32x.tmDateView.cellUnits.year"),$i18n.t("tmui32x.tmDateView.cellUnits.month"),$i18n.t("tmui32x.tmDateView.cellUnits.day"),$i18n.t("tmui32x.tmDateView.cellUnits.hour"),$i18n.t("tmui32x.tmDateView.cellUnits.minute"),$i18n.t("tmui32x.tmDateView.cellUnits.second"),]asstring[] | 上方的单位名称 | 
| quickDate | Array\<string\> | ():string[]=\>["d","w","m","y","q"]asstring[] | 快速时间区间选择，如果直接填写数字字符，会以你提供的数字最近多少来天来算。d:本日w:本周m:本月y:本年q:本季度7:最近7天，后面的依此类推，数字的就是最近xx天。 | 
| lazyContent | boolean | false | 是否懒加载内部内容。当前你的列表内容非常多，且影响打开的动画性能时，请务必设置此项为true，以获得流畅视觉效果。如果选择数据较少没有必要打开 | 
| drawerSize | string | "1020" | 如果你的快捷选择较多可能会让高度不足，需要自行设置下高。 | 
| disabled | boolean | false | 是否禁用弹层 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| cancel | - | - | 取消时触发 | 
| confirm | 名称：date,当前选中时间, | - | 确认触发 | 
| change | 名称：date,当前选中时间, | - | 滑动变换时触发 | 
| update:modelShow | - | - | 变量控制打开状态
等同v-model:model-show | 
| update:modelStr | - | - | 经格式化后的值。等同v-model:model-str | 
| update:modelValue | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | - | 插槽,默认触发打开选择器。你的默认布局可以放置在这里。 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


