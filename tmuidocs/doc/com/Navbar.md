<!--
 * @Autor: 小超1263375375
 * @Date: 2022-06-17 14:39:05
 * @LastEditors: 小超1263375375
 * @LastEditTime: 2022-06-18 11:14:34
 * @FilePath: \tm-vuetify-for-vue3\tmuidocs\doc\com\Navbar.md
 * @Description: 
 * 
 * Copyright (c) 2022 by 小超1263375375, All Rights Reserved. 
-->
---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 标题导航栏
页面自定标题栏，时，请务必放置在页面的最顶部。

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/daohang/navbar"></webview>

::: details 示例模板

@[code vue](pages/daohang/navbar.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| followTheme | [Boolean,String] | true | 是否跟随主题 |
| transprent | [Boolean,String] | false | 是否透明 |
| color | [String] | 'white' |  |
| text | [Boolean] | false |  |
| border | [Number,String] | 0 |  |
| shadow | [Number,String] | 1 | 投影,0-25 |
| borderDirection | String | "bottom" |  |
| round | [Number,String] | 0 | 圆角0-25，单位rpx |
| margin | Array | ()=>[0,0] | 外间距[x,y]x=左右，y=上下 |
| padding | Array | ()=>[0,0] | 内间距[x,y]x=左右，y=上下 |
| height | [Number] | 44 | 高度，单位rpx |
| leftWidth | [Number] | 220 | 左边区域宽度 |
| rightWidth | [Number] | 220 | 右边区域宽度 |
| fontSize | [Number] | 30 | 字体大小 |
| title | [String] | "标题" |  |
| fontColor | [String] | "" | 字体颜色<br>默认为自动，提供了,将强制使用本主题色 |
| homeColor | [String] | "" | 主页图标颜色 |
| hideHome | Boolean | false | 是否隐藏主页图标 |
| homePath | [String] | "/pages/index/index" | 主页图标默认路径 |
| blur | Boolean | false |  |

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click |  | event | 点击事件 |
| close |  |  |  |

### :corn: slot插槽
| 属性名称 | 类型 | 数据 | 说明 |
| --- | --- | --- | --- |
| left |  |  | 插槽，左边位置 |
| right |  |  | 插槽，右边位置 |

### :green_salad: ref方法

无

| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

### :rage: 贡献者：小超1263375375



