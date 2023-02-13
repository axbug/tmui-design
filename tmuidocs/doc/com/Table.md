---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 表格 Table

本组件主要的功能有：
1. 单元格特定的样式，类型（按钮，文本）
2. 纵向单列统一的样式设置，比如背景颜色，亮浅，宽度，排序等
3. 斑马纹的开启和关闭

如果看不懂文档，请复制demo示例查看，demo包含了所有可能用到的功能。

---

:::warning 提醒

3.0.9+开始,table组件进行了改版,主要是为了解决非nvue端的性能问题.
由于nvue是使用nvue原生组件实现,所以性能这块不用担心.并且支持头部固定的功能,左侧固定功能删除了.
非nvue端没有固定的头部,并且取消了scroll-view,而采用原始的view组件生成滚动.
3.0.9开始采用同阿里的antv/S2数据结构,方便后续的功能更新迭代.

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
| tableData | ArrayasPropType\<Array\<cellItem>> | ()=>[],required:true | 表格数据，格式见下方 |
| width | Number | 750 | 宽度，单位rpx |
| height | Number | 0 | 高度，单位rpx |
| cellHeight | Number | 72 | 单元格高度 |
| headerHeight | Number | 88 | 表头高度 |
| showBottomBorder | Boolean | true | 是否展示底部边框 |

:::tip 表头和表格数据格式

以下内容，请认真阅读，这关系到你是否正确的使用本组件的所有技巧。

:::

```ts
// 数据示例,详细类型推断见下方类型格式。

const demoData = {
    fields: {
        columns: ['province', 'city', 'type', 'price', 'cost'],
    },
    header: [
        {
            field: 'province',
            name: '省份',
        },
        {
            field: 'city',
            name: '城市',
            "opts":{
                "color":'primary',
                "fontColor":"",
                "light":true,
                "asyncStyleCell":true
            }
        },
        {
            field: 'type',
            name: '类别地类别sfd地',
        },
        {
            field: 'price',
            name: '价格',
            "opts":{
                "sort":true
            }
        },
        {
            field: 'cost',
            name: '成本',
            
        },
    ],
    data: [
        {
            "province": "浙江",
            "city": "杭州",
            "type": "笔",
            "price": 1
        },
        {
            "province": "浙江",
            "city": "舟山",
            "type": "笔",
            "price": 17,
            "opts":{
                "city":{fontColor:'yellow'},
                "type":{color:'yellow'},
            }
        }
    ]
}

/** opts单元格的样式定制 */
export const defaultCellStyle:tabaleCellStyleType = {
    type:'text',
    color:'white',
    fontColor:'black',
    fontSize:26,
    light:false,
    transparent:true,
    asyncStyleCell:false,
    sort:false,
}
export interface tabaleCellData {
    value:string|number,
    opts:tabaleCellStyleType,
    [key: string]: any;
}
export interface tabaleCellStyleType {
    type?:'button'|'text',
    color?:string,
    fontColor?:string,
    fontSize?:number,
    light?:boolean,
    transparent?:boolean,
    /**是否头和所在列同步同的背景色和文字色,注意该参数只在header中的opts有效 */
    asyncStyleCell?:boolean,
    /**该列是否显示 排序功能，注意该参数只在header中的opts有效 */
    sort?:boolean,

}
/** 表头数据格式 */
export interface headerType {
    /**字段变量名*/
    field: string,
    /**字段名称 */
    name: string,
    opts?:tabaleCellStyleType,
    [key: string]: any;
}
/** 数据格式 */
export interface tableDataType {
    /**列字段名称 */
    fields:{
        columns:string[]
    },
    /**头数据,对应fields中columns字段 */
    header:Array<headerType>,
	/** 表格数据 */
    data:Array<{
        opts?:{
            [key:string]:tabaleCellStyleType
        },
        [key: string]: any;
    }>
}


```


### :rose: 事件
### 
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| row-click |  | (rowIndex:number,colIndex:number) | 单元按钮被点击时触发 |
```ts
function rowClick(rowIndex:number,colIndex:number,value:string|number){
	// rowIndex横向索引
	// colIndex纵向列的索引
	// 单元格的内容
}
```

### :corn: slot插槽
默认default

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[夏天](https://gitee.com/Xia_5718)贡献，如果对该框架感兴趣的可以参与我们一同进步！