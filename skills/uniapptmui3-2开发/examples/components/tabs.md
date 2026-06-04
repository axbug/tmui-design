---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 导航组件

# 标签导航 TmTabs

tabs标签导航组件,样式非常丰富可以完成你想要的自定义样式.

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/tabs"></webview>

::: details 示例模板

<<< ../../../src/pages/index/tabs.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| round | string\|number | 0 | 圆角 | 
| width | string\|number | "auto" | 宽 | 
| height | string\|number | "88" | 高是必填，不可为auto。 | 
| mode | string | "start" | 排版模式around:居中并且均分[数据多时会造成无法滚动]between:均分在整个宽上(如想相项目宽一样,你可以设置属性width比如你有3个可以设置为33%)[数据多时会造成无法滚动]start:左对齐[数据多时可滚动]end:右对齐[数据多时可滚动]center:中间对齐[数据多时会造成无法滚动] | 
| color | string | "white" | 背景 | 
| darkColor | string | "" | 暗黑时的背景,如果不填写读取sheetDark | 
| activeTitleColor | string | "" | 文本激活时的颜色，空值默认取全局主题色 | 
| titleColor | string | "#888888" | 文本默认颜色 | 
| darkTitleColor | string | "#cacaca" | 文本默认的暗黑颜色，如果不填写取白色。 | 
| lineColor | string | "" | 底部线条激活时的颜色，空值默认取全局主题色 | 
| lineHeight | string | "3px" | - | 
| lineFull | boolean | false | 底部的线条是与项目等宽还是固定默认的小宽度。 | 
| showLine | boolean | true | 是否显示底部的线条 | 
| modelValue | string\|number | 0 | id值，如果数据没有提供id属性，这里的id就是索引等同v-model | 
| fontSize | string\|number | "30" | 标题字号 | 
| activeFontSize | string\|number | "32" | 激活时的标题字号 | 
| itemWidth | string\|number | "auto" | 项目宽度，默认是auto，即自动根据标题内容自动撑开宽度。如果你想均分（适合不超过一行），比如你有5个标签，那么你就可以设置为"20%" | 
| titlePadding | string\|number | "12px" | 标题的padding是左右的间隙。 | 
| moveCount | number | 2 | 选中当前项是，移动的差值个数。比如你要让选中的居中，你一屏内刚好显示5个，你就设置为2，如果你一屏显示3个，就设置为1，就是你一屏内里面要显示的是单数，才好控制选中的始终是在中间位置。 | 
| gap | string\|number | 20 | 项目之间的间隙.如果你设定了itemwidth一般会有富余宽,两边自然有间隙,此时你应该设置为0以免造成不居中的假象. | 
| list | Array\<Record\<string, any\> \| string\> | ()=\>[] | 数据数组,可以混合类型可以是单类型数据格式比较灵活.如果数据是对象且出现了dot:true该项数组右上角出现角标红点如果dot:非boolean比如:dot:32会出现数字角标或者文本角标.如果为false或者空值为隐藏如果出现了disabled:可以true禁止项目 | 
| rangKey | string | "title" | 当你的list为对象时可用如果数据是string会直接取数据本身 | 
| rangId | string | "id" | id标识,用来vmodel双向绑定选中的值,如果你的list中不存在或者没有id标识那么取数组循环的索引值 | 
| rangDot | string | "dot" | 读取角标的标识字段,默认是dot | 
| dotBgColor | string | "" | 角标的背景,默认是等同激活的标题颜色如果填写使用本值,文字颜色始终是白的. | 
| customItemStyle | string | "" | 默认的自定项目的style样式,可以用来完全覆盖默认的样式. | 
| activeItemStyle | string | "" | 默认的激活自定项目的style样式,可以用来完全覆盖默认的样式. | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | - | - | 变化时触发 | 
| update:modelValue | - | - | 同步vmodel | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| toggleActivate | - | - | - | 


