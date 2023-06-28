---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 时间范围选择器 Time-between
tm-time-between 时间范围选择器，这是一个实用组件，用来时间日期的范围选择（相比日历范围选择，这个可以精确到时分秒）

---

## :hot_pepper: 时间选择器 Time 示例

<webview url="https://tmui.design/h5/#/pages/form/timebetween"></webview>

::: details 示例模板

<<< ../src/pages/form/timebetween.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

**关于nvue切换时间时有加载动画过程，这里我当前的sdk3.6.5在赋值时不会触发选中**

## :seedling: Time-between 参数

本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| modelValue | [Number / String / Date] | [] | 动态返回时间戳。这是一个标准的时间，不管showDetail是如何设置都将不影响这里的输出,format也不会被影响 |
| modelStr | [] | [] | 这里是受format影响的,输出使用v-model:model-str.一般用来显示，因为可能是一个不标准的时间格式，给后台时请使用v-model变量 |
| defaultValue | [Number / String / Date] | [] | 默认显示的时间，格式与modelValue相同 |
| format | String | YYYY/MM/DD | 这里会影响到modelValue的输出形式，请一定要规范,时间格式化形式，如：YYYY-MM-DD |
| showDetail | Object | 见下方 | 说明下：这里不会影响输出，只会影响到当前显示的列,设置选择时间的精度，最小可到秒 |
| start | Number / String / Date | 2008/01/01 00:00:00 | 选择器开始的日期 |
| end | Number / String / Date | "" | 选择器结束的日期 |
| immediateChange | boolean | false | 是否关闭滚动动画触发change |
| asyncModel | boolean | true | 改变日期时，是否需要同步到vmodel变量中，立即执行双向同步，如果为false日期的改变不会同步到vmodel中 |
| showBtn | boolean | true | 是否显示底部的确认按钮 |
| quickBtn | [quickBtnType]| 见下方 | 快捷日期的选中按钮,如果不想显示快捷按钮请设置空数组。 |

**showDetail**:```{year:true,month:true,day:true,hour:false,minute:false,second:false}```

**asyncModel 这是一个有意思的参数**
我之所以提供这个是我们在交互的时候，经常弹出或者让用户选择时间，也许不是我们想要的日期。需要让用记点击确认按钮再同步我们选中的数据。如果
不点确认，用户再次打开本组件时，时间不会 回退到最初的日期，而不是上一次选中的日期。相信大家能理解这个参数的意思。
然后通过内部的按钮点击后再同步数据。如果如果你想要自定同步可以使用refs.getNowDate这个函数来获取并同步。

**quickBtn格式如下**
quickBtn默认已经提供下下方7个快捷按钮。
```ts
	interface quickBtnType {
	    label:string,
		/** 返回的日期一定是数组并且长度是2，当然如果提供了下面的type内置函数值，这里的这个fun返回可以随意 或者不提供。 */
		fun?:()=>[string|number|Date|Da,string],
		color?:'primary',
		//这个是内部代号,使用的内部函数方法，如果提供了，上面的fun可以不用提供，且无效
		// br:本日，bz:本周,by:本月,jsy:近三个月,bn:本年,d7：近7天，d30:近30天
		type?:'br'|'bz'|'by'|'jsy'|'bn'|'d7'|'d30', 
	}

```

## :rose: Time-view 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | / | [start,end] | 时间被拨动时触发 |
| confirm | / | [start,end] | 按钮被点击触发 |
| clear | / | - | 点了清除按钮时触发，记住是清除用户选中的日期，不是清除双向绑定中的vmodel数据 |


## :corn: slot插槽

无

## :green_salad: Time-view ref方法

| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| getNowDate | - | [start,end] | 手动获取并同步当前用户选中的数据到vmodel中 |


