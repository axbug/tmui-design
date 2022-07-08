---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 列表拖动排序 DragList
通过该组件快速实现用户自定义排序功能。

---

### :hot_pepper: 列表拖动排序 DragList 示例

<webview url="https://tmui.design/h5/#/pages/fankui/darglist"></webview>

::: details 示例模板

@[code vue](pages/fankui/darglist.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE           | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数

| 参数名       | 类型         | 默认值       | 描述            |
|-----------|------------|-----------|---------------|
| disabled  | Boolean    | true      | 是否禁用          |
| width     | Number     | 90        | 宽度            |
| height    | Number     | 700       | 高度            |
| list      | [itemList] | []        | 列表数据（格式见下方说明） |
| rangKey   | String     | text      |               |
| rightIcon | String     | icon-menu | 右侧图标          |
| bgColor   | String     | white     | 背景颜色          |


- 主体内容数据参数
```javascript
itemList{
    _id:number|string,//内部标识
    top:number|string,
    i:number|string,
    text:number|string,//项目文字
    icon:string,//项目图标，左边
    color:string,//文字颜色
    [prop:string]:any
}
```

### :rose: 事件
| 事件名    | 参数       | 返回数据     | 描述     |
|--------|----------|----------|--------|
| change | listData | 排序后的数组数据 | 排序变更触发 |

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[Kyour](https://github.com/kyour-cn)贡献，如果对该框架感兴趣的可以参与我们一同进步！
