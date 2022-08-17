---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 表格 Table
本组件主要的功能有：
1. 单元格特定的样式，类型（按钮，文本）
2. 纵向单列统一的样式设置，比如背景颜色，亮浅，宽度，排序等
3. 横向的样式设定：比如颜色，亮浅具体看文档

如果看不懂文档，请复制demo示例查看，demo包含了所有可能用到的功能。

---

:::warning 提醒
本组件经过3.0.75+版本升级后功能比较强大,请认真阅读文档使用。
:::

### :hot_pepper: 表格 Table 示例

<webview url="https://tmui.design/h5/#/pages/showdata/table"></webview>

::: details 示例模板

@[code vue](pages/showdata/table.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |


### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| showHeader | Boolean | true | 是否展示表头 |
| header | ArrayasPropType\<Array\<headresItem>> | ()=>[] | 表头数据,格式见下方 |
| tableData | ArrayasPropType\<Array\<cellItem>> | ()=>[],required:true | 表格数据，格式见下方 |
| width | Number | 750 | 宽度，单位rpx |
| height | Number | 0 | 高度，单位rpx |
| cellHeight | Number | 72 | 单元格高度 |
| headerHeight | Number | 88 | 表头高度 |
| showBottomBorder | Boolean | true | 是否展示底部边框 |

:::tip 表头和表格数据格式
以下内容，请认真阅读，这关系到你是否正确的使用本组件的所有技巧，以功能点的理解。
:::

```ts
//表头数据
export interface headresItem {
    title:string,//列表的标题。默认为：""
    key:string,//这个key需要和tabdata中的key相同，表示同一列。
    width:number,//列表宽，默认88
    align:string,//对齐方向，start左,center中,end右,默认center
    sort?:boolean,//是否显示排序,默认false
    bgColor:string,//当前头的背景色。默认grey
    cellColor:string,//当前列的背景色。,如果为"",则使用行数据的背景，如果行背景也没有提供，使用white.
    light:boolean,//背景色是否是浅色
	sortType:string,//desc降序，升序asce,none,无排序
}
//表格数据
export interface cellItem {
    key:string,//这个key需要和headres中的key相同，表示同一列。
    color?:string,//当前列的背景色。,如果为"",则使用行数据的背景，如果行背景也没有提供，使用white.
    light?:boolean,//背景色是否是浅色
    align?:string,//对齐方向，start左,center中,end右,默认center
    data:Object<key:dataTypeArray|string>,
    [propName: string]: any;
}
//表格数据中的data：dataTypeArray解释说明：
//data是一个对象Object，它的key要与表头的key对应，这样就可以正确读取数据。比如data的一个简单示例：
//其中key就是unpayamount，paytime...这些，数据顺序可以随便，顺序将以头部的key顺序为顺序排列。
//key的value值比如：unpayamount值为100.
//key的值value的格式可以是string。也可以是dataTypeArray
var testData = {
	unpayamount: 100,
	paytime: "2022/2/5",
	amount: "100",
	desc: "没有",
	status: "通过",
}
//如果单个数据的格式为dataTypeArray，比如上面的unpayamount也可写成如下：
unpayamount: {
	text:100,
	color:'green'
	.../这的格式就是如下面的：dataTypeArray，可用字段如下：
},
paytime: "2022/2/5",
amount: "100",
desc: "没有",
status: "通过",

export interface dataTypeArray {
	text:string,//数据内容
	color?:string,//单元格背景颜色
	light?:boolean,//背景色是否是浅色
	width:number,//单元格的宽度。
	type:string,//单元格的类型，text,button
	[propName: string]: any;
}

```


### :rose: 事件
### 
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| row-click |  | (rowIndex:number,colIndex:number) | 单元按钮被点击时触发 |
```ts
function rowClick(rowIndex:number,colIndex:number){
	// rowIndex横向索引
	// colIndex纵向列的索引
}
```

### :corn: slot插槽
默认default

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[夏天](https://gitee.com/Xia_5718)贡献，如果对该框架感兴趣的可以参与我们一同进步！