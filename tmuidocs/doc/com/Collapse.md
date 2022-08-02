---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 折叠面板 Collapse
通过折叠面板收纳内容区域。

---

### :hot_pepper: 折叠面板 Collapse 示例效果

<webview url="https://tmui.design/h5/#/pages/showdata/collapse"></webview>

::: details 示例代码

@[code vue](pages/showdata/collapse.nvue)

:::


### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
## Collapse

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| activeKey | Array | [] | 当前展开并激活的面板,为下面的CollapseItem的name字段合集 |
| defaultActiveKey | Array | [] | 默认展开的面板,为下面的CollapseItem的name字段合集 |
| accordion | Boolean,String | false | 是否设置为单个面板展开，默认fase，允许 多个面板同时展开 |
| border | Number,String | 2 | 边框 |
| iconPos | String | "left" | 展开图标的位置，可选left/right |
| openIcon<Badge type="danger" text="v3.0.77+" vertical="middle" /> | String | "tmicon-angle-up" | 打开时的图标 |
| closeIcon<Badge type="danger" text="v3.0.77+" vertical="middle" /> | String | "tmicon-angle-down" | 关闭时的图标 |

## CollapseItem
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| color | String | white | 主题色 |
| title | String |  | 面板标题 |
| name | Number, String |  | 必填，标识，用来展开和关闭的标识,Collapse的activeKey，defaultActiveKey数组标识就是此值 |
| activeColor | String | primary | 激活时的颜色主题 |
| margin | Array | [0, 0] | 外间距[x,y]x=左右，y=上下 |
| padding | Array | [32, 0] | 内间距[x,y]x=左右，y=上下 |
| disabled | Boolean | false | 面板是否可以打开或收起 |
| leftIcon | String | "" | 标题前的图标 |  
| leftIconColor | String | "" | 标题前的图标主题颜色，默认为空即自动配色，当激活时，使用activeColor。如果本属性不为空，将始终使用本属性颜色主题。 |  
| height<Badge type="danger" text="v3.0.77+" vertical="middle" /> | Number | 80 | 标题的高度 |

### :rose: 事件
## Collapse
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change |  |  |  |

## CollapseItem
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click |  |  |  |

### :corn: slot插槽
CollapseItem含有<br>
插槽：title 标题插槽<br>
icon 即标题前图标插槽
rightLabel <Badge type="danger" text="v3.0.77+" vertical="middle" /> 右边图标的文本插槽

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[﹎wj潕钶取玳](https://gitee.com/dxwj)贡献，如果对该框架感兴趣的可以参与我们一同进步！