---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 宫格排序 Sort

3.0.91+新增<br>

```
/**
 * 宫格排序，
 * 在nvue上：
 * 截止3.6.18 uni sdk 的movable有bug,具体来说是动态修改宽和高时，可移动范围会跑上面去。
 * 理论上是支持nvue，只有当uni修复此bug才可使用，否则，请使用vue页面。
 * 
 */
 ```

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/other/sort"></webview>

::: details 示例模板

@[code vue](pages/other/sort.vue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width  | Number        | 100    | 宽度   |
| height  | Number        | 100    | 高度   |
| itemHeight  | Number        | 100    | 项目的高度   |
| column  | Number        | 100    | 一排几个项目   |
| fontSize  | Number        | 24    | 文本大小   |
| iconSize  | Number        | 32    | 图标大小   |
| color  | String        | 'white'    | 主题   |
| fontColor  | String        | ''    | 空，为自动计算   |
| list  | `Array<itemType>`        | `[]`    | 空，为自动计算   |

**itemType的格式如下**
```ts
export interface itemType{
    icon?:string,//图标，
    text?:string,//文本，
    [key:string]:any
}
```

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| start | - | 提供的list原数据 | 拖动开始时触发 |
| end | - | 排序后的数据，排序前的数据(newdata,olddata) | 拖动排序结束后触发 |

### :corn: slot插槽
默认default

### :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

