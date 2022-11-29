<!--
 * @Autor: 小超1263375375
 * @Date: 2022-06-17 14:39:05
 * @LastEditors: 小超1263375375
 * @LastEditTime: 2022-06-18 11:15:40
 * @FilePath: \tm-vuetify-for-vue3\tmuidocs\doc\com\Segtab.md
 * @Description: 
 * 
 * Copyright (c) 2022 by 小超1263375375, All Rights Reserved. 
-->
---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 分段器选项卡 Segtab
分段选择/切换器，常用于直观的单项菜单、选项选值切换。

---

### :hot_pepper: 分段器选项卡 Segtab 示例

<webview url="https://tmui.design/h5/#/pages/daohang/Segtab"></webview>

::: details 示例模板

@[code vue](pages/daohang/Segtab.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | Number | 600 | 宽度，单位rpx |
| height | Number | 64 | 高度，单位rpx |
| gutter | Number | 2 |  |
| list | Array | [] | 分段器选项的数据 |
| modelValue | [Number,String] | 0 | v-model可以是index索引也可是对象id |
| defaultValue | [Number,String] | 0 | 默认是顺序index值，如果想以字段id来达到index选中效果。需要list为对象，并且提供唯一标识id字段。 |
| beforeChange | [Function,Boolean] | false | 在点击切换之前执行，返回false阻止切换，可以是Promise |
| color | String | 'white' | 字体颜色 |
| bgColor | String | 'grey-3' | 背景颜色 |
| fontSize | Number | 24 | 字体大小 |
| activeColor | String | 'primary' | 被选中后的文字色 |

list[]数据格式:
```ts
[
    {
        text:number|string,
        id:number|string,
        [prop:string]:any
    }
]
```

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:modelValue |  | value | |
| change |  | value | 当点击项目时触发，返回listitem数据 |
| click |  | index | 点击事件 |

### :corn: slot插槽

无

### :green_salad: ref方法

无
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

### :rage: 贡献者：小超1263375375

