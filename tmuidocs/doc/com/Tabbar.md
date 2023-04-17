---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 底部导航栏 Tabbar

内部只能放置,tm-tabbar-item。

---

### :hot_pepper: 底部导航栏 Tabbar 示例

<webview url="https://tmui.design/h5/#/pages/daohang/tabbar"></webview>

::: details 示例模板

@[code vue](pages/daohang/tabbar.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数

本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| transprent | [Boolean, String] | false | 是否透明 |
| color | [String] | white | 背景颜色 |
| text | [Boolean] | false | 是否浅色背景 |
| round | [Number, String] | 0 | 圆角0-25，单位rpx |
| shadow | [Number] | 0 | 投影, 0-25 |
| width | [Number] | 0 | 宽度，单位rpx， 如果为0取当前窗口宽度 |
| bottom | [Number] | 0 | 底部偏移，单位rpx|
| showSafe | [Boolean] | false | 是否显示安全区域 |
| autoSelect<Badge type="danger" text="v3.0.77+" vertical="middle" /> | [Boolean] | true | 是否自动通过点击项目来选中项目，默认：true自动。如果设置为false时，则可以通过下方的active双向绑定来手动切换选中项 |
| active<Badge type="danger" text="v3.0.77+" vertical="middle" /> | Number | -1 | 当前活动荐的索引，从0开始，可以使用v-model:active来双向绑定切换选中项，必须autoSelect设置为false才起效  |


### :rose: 事件
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| change<Badge type="danger" text="v3.0.77+" vertical="middle" /> | - | active | 通过手动切换选中值时触发本事件。 |

### :corn: slot插槽

默认default，注意：内部只能放置,tm-tabbar-item

### :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| tmTabbarId |  |  |  |
| setNowurl |  |  |  |
| pushKey |  |  |  |
| delKey |  |  |  |

# 子组件 tm-tabbar-item

### :seedling: 参数

本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| blur | [Boolean] | false | 是否开启磨砂效果背景 |
| followTheme | [Boolean] | true | 是否跟随主题|
| placeholder | [Boolean] | false | 是否在标签位置生成一个等高的占位元素 |
| transprent | Boolean | true | 是否透明 |
| zIndex | Number | 200 | z-index参数值 |
| color | String | white | 背景主题色 |
| fontColor | String | grey-darken-1 | 文字主题色 |
| activeColor | String | primary | 激活后的主题色 |
| active | Boolean | false |当前是否是活动项，注意：它不是动态的，只是默认选中的项，它只能通过点击本组件项目来切换  |
| btnTop | Boolean | false | 是否开启向上凸起的按钮 |
| text | String | '' | 展示文字 |
| icon | String | '' | 选中图标 |
| unicon | String | '' | 未选中时的图标，如果不填写默认使用相同的图标 |
| textSize | Number | 20 | 字体大小 |
| iconSize | Number | 38 | icon尺寸 |
| dot | [Boolean, String] | false | 是否显示圆点，可选值 |
| dotColor | [String] | red | 圆点颜色 |
| dotIcon | [Boolean, String] | false | 圆点使用icon图标 |
| count | [Number, String] | 0 | count为数字时，显示数字角标，如果为string是显示文本角标 |
| maxCount | [Number, String] | 99 | 最大数值 |
| url | [String] | "" | 链接地址 |
| openType | [String] | navigate | 链接打开方式同官方 |
| beforeClick | [Function, Boolean] | (data)=>false | 参数：data，为下方自行绑定到属性data上的数据。打开链接之前执行的勾子函数，返回fase阻止打开。也可以返回new Promise |
| load | [Boolean, String] | false | 是否开启异步加载动效 |
| data<Badge type="danger" text="v3.0.63+" vertical="middle" /> | [Object,Number, String] | undefined | 自义绑定数据到项目上，beforeClick执行时，上下文参数 |
| disabled | Boolean | true | 是否禁用 |

### :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| :--: | :--: | :--: | :-- |
| click | 无 | 无 |  项目被点击时触发 |
| beforeClick |  无| 无 |  点击切换之前执行，如果返回false或者`Promise<false>`时，将阻止链接的切换。如果没有提供url链接地地址将只作为切换使用|

### :green_salad: ref方法
无

### :couplekiss: 文档贡献

此页文档由ygy贡献([git](https://gitee.com/ygy-promise),[github](https://github.com/ygy-97))，如果对该框架感兴趣的可以参与我们一同进步！
