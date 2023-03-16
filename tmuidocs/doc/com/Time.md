---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 时间选择器 Time
Time 时间选择器时一个用于选择事件的组件，常用于事件预约等场景。事件选择器提供两个组件，分别是tm-time-picker 与 tm-time-view 二者分是弹出选择与页面嵌入选择两种使用方式。

---

### :hot_pepper: 时间选择器 Time 示例

<webview url="https://tmui.design/h5/#/pages/form/time"></webview>

::: details 示例模板

@[code vue](pages/form/time.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: Time-view 参数

本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| height | Number | 400 | 组件高度 |
| modelValue | Number / String / Date | "" | 动态返回时间戳。这是一个标准的时间，不管showDetail是如何设置都将不影响这里的输出 |
| modelStr | String | "" | 格式化后的时间，如：2022/12/31 |
| defaultValue | String / Number / Date | "" | 默认显示的时间，格式与modelValue相同 |
| disabledDate | Number / String / Date | "" | 禁用时间，目前可禁用到天，即表示当预选内容与设置禁用时间相同时，则会禁止使用者选中，就算滑到了该位置，也会回弹到之前的时间 |
| format | String | YYYY/MM/DD | 时间格式化形式，如：YYYY-MM-DD |
| showDetail | Object | {year:true,month:true,day:true,hour:false,minute:false,second:false} | 设置选择时间的精度，最小可到秒 |
| showSuffix | Object | {year:'年',month:'月',day:'日',hour:'时',minute:'分',second:'秒'} | 日期的后缀 |
| start | Number / String / Date | 2008/01/01 00:00:00 | 选择器开始的日期 |
| end | Number / String / Date | "" | 选择器结束的日期 |

### :seedling: Time-picker 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | Number / String / Date | '' | 动态返回时间戳。这是一个标准的时间，不管showDetail是如何设置都将不影响这里的输出 |
| defaultValue | Number / String / Date | '' | 默认显示的时间，格式与modelValue相同 |
| format | String | "YYYY/MM/DD" | 时间格式化形式，如：YYYY-MM-DD |
| showDetail | Object | {year:true,month:true,day:true,hour:false,minute:false,second:false} | 设置选择时间的精度，最小可到秒 |
| showSuffix | Object | {year:'年',month:'月',day:'日',hour:'时',minute:'分',second:'秒'} | 日期的后缀 |
| start | Number / String / Date | 2008/01/01 00:00:00 | 选择器开始的日期 |
| end | Number / String / Date | "" | 选择器结束的日期 |
| height | Number | 700 | 高度，单位rpx |
| color | String | "primary" | 组件颜色 |
| linear | String | / | 确认选择按钮的渐变背景方向，可选值有：left:右->左，right:左->右。top:下->上，bottom:上->下 | 
| linearDeep | String | light | 确认选择按钮的渐变背景颜色深浅，可选值有：light,dark,accent亮系渐变和深色渐变 |
| btnRound | Number | 3 | 按钮圆角值 |
| round | Number | 12 | 组件圆角值 |
| title | String | 请选择时间 | 标题提示语 |
| disabled | Boolean | false | 当使用插槽占位触发显示时，打开禁用可阻止弹层显示，适合在表单内部使用 |

### :rose: Time-view 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | / | modelStr | 时间选择器值变化时返回当前 modelStr 值，注意，此值为格式化后的内容，如：2022/04/18 |

### :rose: Time-picker 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | / | modelStr | 时间选择器值变化时返回当前 modelStr 值，注意，此值为格式化后的内容，如：2022/04/18 |
| confirm | / | modelValue | 点击选择按钮后返回modelValue值 |
| cancel | / | / | 选择器关闭触发 |
| open | / | / | 选择器打开触发 |

### :corn: slot插槽

time-picker 默认default，可触发弹层的插槽占位内容，比如在里面布局按钮，输入框，点击这块内容可以直接显示弹层。

### :green_salad: Time-view ref方法

| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| setNowtime | date:Number ,type:默认值为{year="year",month="month",day="date",hour="hour",minute="minute",second="second"}，可不用赋值 | 通过ref修改目标时间选择器的当前值 |

```ts
import {getCurrentInstance} from "vue"
import tmUpload from "@/tmui/components/tm-upload/tm-upload.vue"
const {proxy} = getCurrentInstance();


```

### :rage: 贡献者

[Wicos](http://wicos.me)