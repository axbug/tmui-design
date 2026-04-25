---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 表单组件

# 日历 tmCalendarMultiple

以单选和多选，无限循环滚动

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/calendar-multiple"></webview>

::: details 示例模板

<<< ../../../src/pages/index/calendar-multiple.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | Array | ():string[]=\>[]asstring[] | 同步当前时间v-model不受控:model-value | 
| model | union | 'day' | 范围选择模式day:天数多选，通过multipleMax可以设置允许选择的天数range:天数的范围选择，起始和终止 | 
| multipleMax | number | -1 | 多选模式时，允许选择的最大天数。 | 
| disabledDays | Array | ():string[]=\>[]asstring[] | 禁用的日期字符串如"2023-12-12"它与下面的start，end不冲突。 | 
| startDate | string | '1900-1-1' | 允许选择的开始日期 | 
| vertical | boolean | false | 是否上下切换日历 | 
| endDate | string | '2100-1-1' | 允许选择的结束日期 | 
| currentDate | string | '' | 当前显示的月份，默认以modalValue中的第一项为初始月如果为空，显示本月，可以控制这里切换显示的日期 | 
| dateStyle | Array | ():TM.tmCalendarDateStyle_type[]=\>[]asTM.tmCalendarDateStyle_type[] | 设置指定日期的样式数据类型见：TM.tmCalendarDateStyle_type | 
| format | string | 'YYYY-MM-DD' | 同步vmodel时格式化模板 | 
| color | string | '' | 选中的主题色，默认空值，取全局主题色如果提供了dateStyle，以dateStyle为准 | 
| fontColor | string | '#333333' | 默认的文字颜色如果提供了dateStyle，以dateStyle为准 | 
| fontDarkColor | string | '#ffffff' | 默认的暗黑文字颜色如果提供了dateStyle，以dateStyle为准 | 
| activeFontColor | string | '#ffffff' | 默认选中时的文字颜色如果提供了dateStyle，以dateStyle为准 | 
| rangColor | string | '' | 范围选中时,范围中间的选中颜色,如果为空,为color的透明度0.5; | 
| rangFontColor | string | '' | - | 
| headBgColor | string | 'transparent' | 头的背景颜色，默认为透明 | 
| headFontColor | string | '' | 头的文字颜色，提供了后暗黑失效会以这个为准。 | 
| headStyle | string | '' | 头部自定义样式。 | 
| renderOnly | boolean | true | 循环渲染时，是否只渲染当前面板（如果你在pad等10年前的低端机上渲染日历有压力请打开此值为true)关闭后可以提升滑动体验。 | 
| seekDay | number | 0 | 你当前的一周的第一天的索引值是几：0:周一，1:周二，2:周三，3:周四，4:周五，5:周六，6:周日 | 
| dateStatus | Array | ():TM.tmCalendarDateStyleStatusType[]=\>[]asTM.tmCalendarDateStyleStatusType[] | 给日期设定状态类型为：TM.tmCalendarDateStyleStatusType[] | 
| showClear | boolean | true | 显示清空按钮 | 
| showFooter | boolean | true | 显示页脚 | 
| isSameDay | boolean | true | 是否允许选择同一天 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | 名称：value,当前变化的日期, | - | 时间变化时触发 | 
| click | 名称：value,当前被点击的日期, | - | 当前日历面板的日期被点击时触发 | 
| currentChange | 名称：value,当前激活面板的日期, | - | 当前激活面板月份改变时触发（就是当前看到的月份面板） | 
| update:modelValue | 名称：value,当前选中日期, | - | 同步当前的选中的日期绑定 | 
| update:currentDate | 名称：value,当前查看的月分日期, | - | 同步当前查看的月份日期，请以日期形式提供值 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| header | - | 日历头，隐藏使用空插槽，将隐藏，如果想自定，请通过ref函数来翻页控制日历走向。 | 
| footer | - | 日历尾部 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| next | - | - | 下月 | 
| prev | - | - | 上月 | 
| setCurrentMonth | - | - | 设置日历返回到本月 | 
| clear | - | - | 清空选择 | 


