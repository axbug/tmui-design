---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 日历 Calendar
显示日期。

---

### :hot_pepper: 日历 Calendar 示例

<webview url="https://tmui.design/h5/#/pages/form/calendar"></webview>

::: details 示例模板

@[code vue](pages/form/calendar.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| show | Boolean | false | 显示,双向绑定，同v-model:show |
| defaultValue | `Array<String/Number/Date>` | [] | 默认值，数组 |
| modelValue | `Array<String/Number/Date>` | [] | 绑定对象,同v-model |
| modelStr | String | '' | 同v-model:model-str,单向绑定输出展示日期，此字段用来在页面上展示。只向外输出。|
| model | String | day | 日期模式：day : 单个日期选择模式（可多选，需要设置multiple=true; week :按周选择模式。month :按月选择模式。year :按年选择模式。rang :按日期范围选择模式。  |
| color | String | primary | 主题色 |
| linear | String | '' | 线性的 |
| linearDeep | String | light | - |
| start | [String,Number,Date] | '' | 有效的可选时间，小于此时间，不允许选中。 |
| end | [String,Number,Date] | '' | 有效的可选时间，大于此时间，不允许选中。 |
| disabledDate | `Array<String/Number/Date>` | [] | 被禁用的日期数组。如:["2022-1-1","2022-5-1"] |
| multiple | Boolean | false | 是否允许多选。 |
| dateStyle | `Array<dateItemStyle>` | [] | 设定单个日期的样式,格式见下方。 |
| max | Number | 999 | 当multiple=true时，可以选择的最大日期数量。 | 
| hideButton<Badge type="danger" text="v3.0.78+" vertical="middle" /> | Boolean | false | 是否隐藏底部按钮 | 
| hideTool<Badge type="danger" text="v3.0.78+" vertical="middle" />  | Boolean | false | 是否隐藏头部工具栏 | 
| round<Badge type="danger" text="v3.0.78+" vertical="middle" />  | Number | 0-25 | 弹层圆角 | 

dateItemStyle格式：
```ts
export interface dateItemStyle {
    date?:string,//日期
    text?:boolean,//浅色背景。
    color?:string,//主题色.
    extra?:string,//额外的内容，在日期下方显示的文本。
}
```

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:modelValue | - | modelValue | 绑定当前的时间。同v-model |
| update:modelStr | - | - | 更新页面展示日期，v-model:model-str |
| update:show | - | - | 更新显示状态，v-model:show |
| confirm | `e: Array<string/number>` | - | 当点击确认时触发 |
| click | `e: Array<string/number>` | - | 日期被选中时触发，注意禁用的日期不会触发 。 |
| change | `e: Array<string/number>` | - | 当切换年或者月的时候触发。 |
| cancel | - | - | 取消时触发 |
| close | - | - | 关闭时触发 |
| open | - | - | 打开函数 |

### :corn: slot插槽
默认default

### :seedling: CalendarView参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| defaultValue | `Array<String/Number/Date>` | [] | 默认值，数组 |
| modelValue | `Array<String/Number/Date>` | [] | 绑定对象，v-model:model |
| modelStr | String | '' | 单向绑定输出展示日期，此字段用来在页面上展示。只向外输出。v-model:model-str|
| model | String | day | 日期模式：day : 单个日期选择模式（可多选，需要设置multiple=true; week :按周选择模式。month :按月选择模式。year :按年选择模式。rang :按日期范围选择模式。  |
| color | String | primary | 主题色 |
| linear | String | '' | 线性的 |
| linearDeep | String | light | - |
| start | [String,Number,Date] | '' | 有效的可选时间，小于此时间，不允许选中。 |
| end | [String,Number,Date] | '' | 有效的可选时间，大于此时间，不允许选中。 |
| disabledDate | `Array<String/Number/Date>` | [] | 被禁用的日期数组。如["2022-1-1","2022-5-1"] |
| multiple | Boolean | false | 是否允许多选 |
| dateStyle | `Array<dateItemStyle>` | [] | 设定单个日期的样式，格式见上方 |
| max | Number | 999 | 当multiple=true时，可以选择的最大日期数量 |
| hideButton<Badge type="danger" text="v3.0.78+" vertical="middle" />  | Boolean | false | 是否隐藏底部按钮 | 
| hideTool<Badge type="danger" text="v3.0.78+" vertical="middle" />  | Boolean | false | 是否隐藏头部工具栏 | 

### :rose: CalendarView事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:modelValue | - | modelValue | 绑定当前的时间。 |
| update:modelStr | - | - | 更新页面展示日期 |
| confirm | `e: Array<string/number>` | - | 当点击确认时触发 |
| click | `e: Array<string/number>` | - | 日期被选中时触发，注意禁用的日期不会触发 。 |
| change | `e: Array<string/number>` | - | 当切换年或者月的时候触发。 |


### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[Sunlight](https://gitee.com/rzg)贡献，如果对该框架感兴趣的可以参与我们一同进步！
