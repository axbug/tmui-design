---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 列表索引 Indexes
索引列表，内部只能放置tm-indexes-item组件。

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/showdata/indexes"></webview>

::: details 示例模板

@[code vue](pages/showdata/indexes.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| followTheme | Boolean | true | 是否应用主题色 |
| width | Number | 0 | 宽度，单位rpx |
| height | Number | 700 | 高度，单位rpx |
| margin | Array | [0,0] | 外间距[x,y]x=左右，y=上下 |
| padding | Array | [0,0] | 内间距[x,y]x=左右，y=上下 |
| color | String | 'primary' | 自定义颜色值或主题色值，followTheme为false时生效 |

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| @navClick |  | 索引的值 | 点击索引是触发 |

### :corn: slot插槽
| 属性名称 | 类型 | 数据 | 说明 |
| --- | --- | --- | --- |
| default |  |  |  |

### :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| compentNameId |  | 'tmIndexesId' | 名称标识 |
| pushKey | 三个参数 height(number), id(number), text(string) |  | 添加索引 |
| delKey | 二个参数 height(number), id(number) |  | 删除索引 |

### :green_salad: tm-indexes-item
:::warning 特别提醒
  索引列表项目，只能放置在tm-indexes组件中。        
:::
props属性表  
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| margin | Array | [0,0] | 外间距[x,y]x=左右，y=上下 |
| padding | Array | [32,0] | 内间距[x,y]x=左右，y=上下 |
| height | Number | 100 | 高度，单位rpx |
| title | [String,Number] | '' | 分类标题 |

### 贡献者
Mr.童
