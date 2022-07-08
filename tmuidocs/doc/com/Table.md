---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 表格 Table
本组件定位为简单展示使用，非专业表格组件，请知悉！
大多数场景展示基本是简单的表格展示而非复杂的表格组件，因此这个场景使用还是很合理的。

---

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

表头和表格数据格式：

```ts
export interface headresItem {
    title:string,//列表的标题。默认为：""
    key:string,//这个key需要和tabdata中的key相同，表示同一列。
    width:number,//列表宽，默认88
    align:string,//对齐方向，start左,center中,end右,默认center
    sort:boolean,//是否显示排序,默认false
    bgColor:string,//当前头的背景色。默认grey
    cellColor:string,//当前列的背景色。,如果为"",则使用行数据的背景，如果行背景也没有提供，使用white.
    light:boolean,//背景色是否是浅色
}

export interface cellItem {
    key:string,//这个key需要和headres中的key相同，表示同一列。
    color:string,//当前列的背景色。,如果为"",则使用行数据的背景，如果行背景也没有提供，使用white.
    light:boolean,//背景色是否是浅色
    align:string,//对齐方向，start左,center中,end右,默认center
    data:any,
    [propName: string]: any;

}
```


### :rose: 事件
无

### :corn: slot插槽
默认default

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[夏天](https://gitee.com/Xia_5718)贡献，如果对该框架感兴趣的可以参与我们一同进步！