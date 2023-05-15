---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 树 Tree
用来展示层级，文件夹结构体等.

---

## :hot_pepper: 树 Tree 示例

<webview url="https://tmui.design/h5/#/pages/showdata/tree"></webview>

::: details 示例模板

<<< ../src/pages/showdata/tree.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| followTheme | [Boolean,String] | true | 是否跟随主题 |
| color | String | 'primary' | 颜色 |
| expandedIconOpen | String | 'tmicon-sort-down' | 父节点打开时的图标 |
| expandedIconClose | String | 'tmicon-caret-right' | 父节点被关闭时显示的图标 |
| checkable | Boolean | true | 允许在节点前添加复选框 |
| multiple | Boolean | true | 是否允许多选 |
| expandedId | Array | ()=>[] |  展开的父节点|
| defaultExpandedId | Array | ()=>[] | 默认展开的父节点 |
| selectedId | Array | ()=>[] | 选中的节点。 |
| defaultSelectedId | Array | ()=>[] | 默认选中的节点 |
| data | Array | ()=>[],required:true | 结构见下方,生成树结构的数据。结构必须要有id字段。当然可以通过field-names来映射，如果你的唯一标识字段不是Id的话。 |
| fieldNames | Object | ()=>{return{id:'id',text:'text'}} | 数据结构字段的映射表 |
| showLine | [Boolean,String] | true | 显示连线 |

tree,data数据结构：
```ts
export interface baseNodeData {
    icon?:string,//节点图标。
    color?:string,//节点颜色主题
    disabled?:boolean,//节点是否禁用
    text:string,//节点标题
    id:number|string,//节点标识
    checked?:boolean,
    expanded?:boolean //是否父节点打开。
}
```

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| node-click | - | - | 节点标题点击时触发的事件 |
| check | e: baseNodeData | - | 节点复选框状态变化时触发的事件 |
| expand | - | - | 父节点展开/关闭时触发的事件 |
| update:selectedId | - | - | 可以使用v-model:selected-id双向绑定数据 |
| update:expandedId | - |  -| 可以使用v-model:expanded-id双向绑定数据|

## :corn: slot插槽
无

## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| checkAll |checked:boolean  |  | 改变所有节点状态,true时选中所有节点,false时取消所有节点 |
| checkNode |key 节点id,checked 节点状态  |  | 注意，如果指定的是父节点，将会选中他的所有节节点，反之取消它所有的子节点 |
| expandAll |checked 指定节点打开还是状态的状态。  |  | 展开或者关闭所有父节点状态 |
| expandNode | key 节点id,checked 节点状态 | true | 指定父节点展开状态 |
| getCheckedNodes |strategy = 'all'  |Ref\<(string \| number)[]\>  | 获取选中的节点key数组,all:返回所有选中的节点,parent:父子节点都选中时只返回父节点,children:只返回子节点|
| getExpandedNodes |  |Ref\<(string \| number)[]\>  | 获取当前展开的节点 |
| getNodePath | key 节点id |反回节点路径  | 从父节点开始一直到本节点的路径数组。 |
| showNode | key 需要要打开所在路径显示的节点 | 显示某一节点 |将会打开它所在的所有父节点  |


## :couplekiss: 文档贡献
此页文档由[夏天](https://gitee.com/Xia_5718)贡献，如果对该框架感兴趣的可以参与我们一同进步！