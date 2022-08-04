---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 数据表格 Data Table
本组件主要的功能有：
1. 单元格特定的样式，类型（按钮，文本）
2. 纵向单列统一的样式设置，比如背景颜色，亮浅，宽度，排序等
3. 横向的样式设定：比如颜色，亮浅具体看文档

如果看不懂文档，请复制demo示例查看，demo包含了所有可能用到的功能。

---


### :hot_pepper: 数据表格 Data Table 示例

<webview url="https://tmui.design/h5/#/pages/showdata/datatable"></webview>

::: details 示例模板

@[code vue](pages/showdata/datatable.nvue)

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
| columns | ArrayasPropType\<Array\<DataTableColumn>> | ()=>[] | 表头数据,格式见下方 |
| data | Array |  | 表格数据 |
| width | Number | 750 | 宽度 |
| height | Number | 0 | 高度 |
| cellHeight | Number | 72 | 单元格高度 |
| headerHeight | Number | 88 | 表头高度 |
| unit | Number | rpx | 计量单位 |
| showBottomBorder | Boolean | true | 是否展示底部边框 |

:::tip 表头和表格数据格式
以下内容，请认真阅读，这关系到你是否正确的使用本组件的所有技巧，以功能点的理解。
:::

```ts
export interface DataTableColumn {
    title:string,//列表的标题。默认为：""
    key:string,//这个key需要和tabdata中的key相同，表示同一列。
    width:number,//列表宽
    align:string,//对齐方向，start左,center中,end右,默认center
    sort?:boolean,//是否显示排序,默认false
    bgColor:string,//当前头的背景色。默认grey
    cellColor:string,//当前列的背景色。,如果为"",则使用行数据的背景，如果行背景也没有提供，使用white.
    light:boolean,//背景色是否是浅色
    sortType:string,//desc降序，升序asce,none,无排序
    unit:string,//单位
    headerFontSize : number, // 头部字体大小
    fontSize: number, // 内容字体大小
    headerProps:tSheetProps, // 头部tSheet props
    cellProps:tSheetProps, // 内容 tSheet props
    _headerProps?:_tSheetProps,
    _cellProps?:_tSheetProps,
    minWidth:number,
    ellipsis: boolean, //文本超出隐藏
    slot?:string
}
export interface tSheetProps{
    parenClass: string,
    contStyle: string,
    height: number,
    width: number,
    color: string,
    transprent: boolean | string,
    border: number | string,
    margin: any,
    padding: any,
    unit: string,
    hoverClass: string,
    darkBgColor: string,
    noLevel: boolean,
    blur: boolean,
    _style: object | string,
    _class: object | string,
    followTheme: boolean | string,
    dark: boolean | string,
    followDark: boolean|string,
    round: number,
    shadow: number,
    outlined: boolean,
    borderStyle: string,
    borderDirection: string,
    text: boolean | string,
    linear: string,
    linearDeep: string,
    isDisabledRoundAndriod: boolean | string,
}

export interface _tSheetProps{
    width:number,
    height:number,
    fontSize:number
}

```


### :rose: 事件
### 
| 事件名    | 参数 | 返回数据      | 描述 |
|--------| --- |-----------|--|
| sorter |  | (options) | 排序事件 |
```ts
function sorter(options){
	
}
```

### :corn: slot插槽
默认default

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[TycoonSong](https://gitee.com/TycoonSong)贡献，如果对该框架感兴趣的可以参与我们一同进步！