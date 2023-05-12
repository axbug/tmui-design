---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 轮播 Carousel
该组件一般用于导航轮播，广告展示等场景,可开箱即用。

---

### :hot_pepper: 轮播 Carousel 示例效果

<webview url="https://tmui.design/h5/#/pages/showdata/carousel"></webview>

::: details 示例代码

@[code vue](pages/showdata/carousel.nvue)

:::


### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| followTheme | Boolean | true |  |
| color | String | primary | 指示点的主题色 |
| width | Number | 750 | 宽度，单位rpx |
| height | Number | 500 | 高度，单位rpx |
| round | Number | 0 | 开启圆角,单位n*4rpx(即round-1 为 4rpx) |
| margin | Array | [0,0] | 外间距[x,y]x=左右，y=上下 |
| list | Array | [] | 图片列表，可以是string数组或者object数组。 |
| rangKey | String | url | 图片列表object数组时，需要提供图片地址的键值。 |
| defaultValue | Number | 0 |  |
| dotPosition | String | bottom | 指示点的位置：top,left,right,bottom |
| align | String | center | 内容居对齐，左left，中center，右right，在dotPosition为left,right时，align的left和right表示，上下对齐 |
| model | String | number | 指示点的样式：dot,number,rect |
| interval | Number | 5000 | 自动切换时间间隔 |
| duration | Number | 500 | 滑动动画时长 |
| circular | Boolean | true | 是否采用衔接滑动，即播放到末尾后重新回到开头 |
| acceleration | Boolean | false |  |
| disableProgrammaticAnimation | Boolean | false |  |
| autoplay | Boolean | true | 是否自动切换 |
| displayMultipleItems | Number | 1 |  |
| skipHiddenItemLayout | Boolean | false |  |
| disableTouch | Boolean | false |  |
| touchable | Boolean | false |  |
| indicatorDots | Boolean | true | 是否显示指示点 |
| showLoad<Badge type="danger" text="v3.0.77+" vertical="middle" /> | Boolean | true | 是否显示加载动画 |

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change |  |  |  |
| click | index |  |  |

### :corn: slot插槽
默认default

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[﹎wj潕钶取玳](https://gitee.com/dxwj)贡献，如果对该框架感兴趣的可以参与我们一同进步！