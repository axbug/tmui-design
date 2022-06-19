---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 城市选择 City
主要应用于地址城市的快速选择，比较方便直观。<br>
这里面有一个City-cascader为关联式内嵌在页面中显示的选择城市，还有一个是City-picker弹层式地区选择。<br>
两种模式供你使用。

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/form/city"></webview>

::: details 示例模板

@[code vue](pages/form/city.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: City-cascader 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| selectionModel | String | name | 赋值方式，id:城市id为返选赋值。name:以城市名称作为返选和赋值。 |
| cityLevel | String | area | 城市选择的级别province:省级别。city:省，市,area:省，市，县/区. |
| hotCity | Array | {name:"南昌市",data:["江西省","南昌市",'红谷滩区']},{name:"杭州市",data:["浙江省","杭州市",'余杭区']}| 热门城市选择。 |
| defaultValue | Array | [] | 默认选中的数据 |
| modelValue | Array | [] | 双向绑定输入数据,同v-model |
| height | Number | 650 | 高度，单位rpx |
| activeColor | String | primary | 激活状态下的颜色。 |
| color | String | white | 背景主题 |

### :rose: City-cascader 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:modelValue | - | modelValue | 绑定当前的城市级联数据。,同v-model |

### :corn: City-cascader slot插槽
默认default

### :green_salad: City-cascader ref方法
无

### :seedling: City-picker 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| selectionModel | String | name | 赋值方式，id:城市id为返选赋值。name:以城市名称作为返选和赋值。 |
| modelValue| `<Array<string | number>>`| [] | v-model以selectedModel为索引的值结果 |
| modelStr| string | '' | v-model:model-str,单向输出地区名称以/分割。不管selectedModel是以哪种索引选项，此处始终以地区名称输出显示。 |
| show| Boolean | false | v-model:show来双向绑定显示和隐藏选择器。 |
| color | String | primary | 按钮主题色 |
| btnRound | Number | 3 | 确认按钮的圆角0-25 |
| round | Number | 12 | 弹出层的顶部圆角 |

### :rose: City-picker 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:modelValue | - | modelValue | 绑定当前的城市级联数据。,同v-model |

### :corn: City-picker slot插槽

无

### :green_salad: City-picker ref方法

无


