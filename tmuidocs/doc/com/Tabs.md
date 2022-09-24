---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 选项卡 Tabs
可以单独使用，配合tm-tabs-pane可实现卡片内容切换。

---

### :hot_pepper: 选项卡 Tabs 示例

<webview url="https://tmui.design/h5/#/pages/showdata/tabs"></webview>

::: details 示例模板

@[code vue](pages/showdata/tabs.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| list | ArrayasPropType\<Array\<tabsobj>> | ()=>[] | tabs选项数据,格式见下方 |
| color | String | "white" | tabs背景颜色 |
| transprent | [Boolean,String] | false | 是否透明 |
| width | Number | 500 | 宽度，单位rpx |
| itemHeight | Number | 80 | 高度,单位rpx |
| height | Number | 1000 | 高度，单位rpx |
| gutter | Number | 0 | 内容在bar中的上下间隔 |
| defaultName | [String,Number] | "" | 默认值 |
| activeName | [String,Number] | "" | 当前活动项。v-model:active-name |
| tabPos | String | 'top' | top导航在上方，bottom导航在下方 |
| itemWidth | Number | 0 | 项目的宽度 |
| activeColor | String | "primary" | tab选中的背景颜色 |
| activeFontColor | String | "primary" | tab选中的字体颜色 |
| activeFontSize | Number | 30 |tab选中的字体大小颜色  |
| itemModel | String | "text" | line底部线条，card背景颜色模式，text文本模式,textLight背景减淡模式，文字会变灰 |
| unSelectedColor | String | "" | 默认为空即根据主题自定颜色。 |
| itemFontSize | Number | 28 | 字体大小 |
| itemLinear | String | "" |  |
| itemLinearDeep | String | "light" |  |
| itemRound | Number | 0 | 圆角 |
| align | String | "left" | left:左对齐,right：右对齐,center：居中,around：居中均分 |
| swiper<Badge type="danger" text="v3.0.75+" vertical="middle" /> | [Boolean] | false | 是否启用左右滑动内容来切换tabs,开启后注意优化页面性能。 |
| showTabsLineAni<Badge type="danger" text="v3.0.77+" vertical="middle" /> | [Boolean] | false | 是否启用底部边线，标题底部线段动画，点击某一项时，短线自动滑动到目标点=>使用动画必须指定宽度:item-width="110(宽度)" |

**tabsobj**的类型如下：
```ts
export interface tabsobj {
	key: string | number,//唯一标识
	title: string,//标题
	icon?: string,//图标
	dot?:boolean,//是否显示角标点
	dotColor?:string//角标点的颜色
}
```

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:activeName | 当前key | - | 当前选中项的key值,v-model:active-name |
| change | 当前key | - | 当前选中项的key值 |
| click |  |  |  |

### :corn: slot插槽
默认default

### :green_salad: ref方法

无

# 选项卡面板 Tabs-Pane
不可以单独使用，必须放置在tm-tabs组件中使用。

---

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| transprent | [Boolean,String] | false | 是否透明 |
| color | String | "white" | 背景颜色 |
| name | [String,Number] | ""|  name是tabs唯一标识符,不允许为空，且必须为数字或者字符串|
| title | String | "" | 每一项的文字 |
| icon | String | "" | 每一项的图标 |
| dot | Boolean | false | 是否显示角标点 |
| dotColor | String | "red" | 角标点的颜色 |

### :rose: 事件
无

### :corn: slot插槽
默认default

### :green_salad: ref方法
无


### :couplekiss: 文档贡献
此页文档由[夏天](https://gitee.com/Xia_5718)贡献，如果对该框架感兴趣的可以参与我们一同进步！