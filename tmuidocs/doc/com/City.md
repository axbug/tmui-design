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

### :hot_pepper: 城市选择 City 示例

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
| selectedModel | 可选:index,name,id | index | 赋值方式，id:城市id为返选赋值。name:以城市名称作为返选和赋值。index,默认以索引为返回数据选值 |
| cityLevel | String | area | 城市选择的级别province:省级别。city:省，市,area:省，市，县/区. |
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
| selectionModel | 可选:index,name,id | index | 赋值方式，id:城市id为返选赋值。name:以城市名称作为返选和赋值。index,默认以索引为返回数据选值 |
| city | Array | [] | 城市数据,默认为空,使用自带城市数据,如果提供将使用自定义城市数据 |
| modelValue| `<Array<string | number>>`| [] | v-model以selectedModel为索引的值结果 |
| modelStr| string | '' | v-model:model-str,单向输出地区名称以/分割。不管selectedModel是以哪种索引选项，此处始终以地区名称输出显示。 |
| show| Boolean | false | v-model:show来双向绑定显示和隐藏选择器。 |
| color | String | primary | 按钮主题色 |
| btnRound | Number | 3 | 确认按钮的圆角0-25 |
| round | Number | 12 | 弹出层的顶部圆角 |
| disabled | Boolean | false | 当使用插槽占位触发显示时，打开禁用可阻止弹层显示，适合在表单内部使用 |

**modelValue格式**
双向绑定和默认的defaultValue数据格式是根据你的属性selectionModel来定义的.
比如你设置selectionModel="index",那么就是索引模式modelValue="[0,1,2]"这样的索引.<br>
比如你设置selectionModel="name",那么就是索引模式modelValue="["江西","南昌","青山湖区"]"这样的索引.<br>
比如你设置selectionModel="id",那么就是索引模式modelValue="["110","111","123"]"这样的索引地区id模式.<br>
至于你想要哪种模式,要看你后台交互使用的是哪种.自行选择.

### :rose: City-picker 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:modelValue | - | modelValue | 绑定当前的城市级联数据。,同v-model |

### :corn: City-picker slot插槽

默认default，可触发弹层的插槽占位内容，比如在里面布局按钮，输入框，点击这块内容可以直接显示弹层。

### :green_salad: City-picker ref方法

getList,返回当前的城市数据结构
getIndexs(list:城市数据，可通过getList返回，也可以自定,model:'name','id','index'可选三种,parentIndex:起始位置默认0，value：[名称，id,索引数组，根据model来]),返回当前的索引数组
getRouterId(list:城市数据，可通过getList返回，也可以自定,parentIndex:起始位置默认0，value：[索引组]),返回当前的城市id数组

```ts

const dr = ['江西省','南昌市','东湖区']
let listcity = cityPicker.value?.getList();
//返回索引，通过名称来返回，model=name,index,id等
let indexs = cityPicker.value?.getIndexs(listcity,'name',0,dr);
let ids = cityPicker.value?.getRouterId(listcity,0,indexs);
//返城市id数组
console.log(ids)


```

### :couplekiss: 文档贡献
此页文档由[Sunlight](https://gitee.com/rzg)贡献，如果对该框架感兴趣的可以参与我们一同进步！
