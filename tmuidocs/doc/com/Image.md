---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 图片 Image
可以搭配图片组tm-image-group使用,形成一个图片相册展示。提供了预览，删除，增强内容显示。

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/showdata/image"></webview>

::: details 示例模板

@[code vue](pages/showdata/image.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| margin | Array | [0,0] | 外间距[x,y]x=左右，y=上下 |
| padding | Array | [0,0] | 内间距[x,y]x=左右，y=上下 |
| color | String | 'white' | 边框颜色 |
| transprent | [Boolean] | true | 是否透明 |
| border | Number | 0 | 边框宽度 |
| round| Number,String| 0 | 圆角, 0-25|
| width | [Number,String] | 200,required:true | 宽度，单位rpx |
| height | [Number,String] | 200,required:true | 高度，单位rpx |
| src | String | "",required:true | 图片地址 |
| errorIcon | String | '' | 加载错误icon |
| errorLabel | String | '加载错误' | 加载错误提示文字 |
| loadIcon | String | '' | 加载中Icon |
| preview | [Boolean,String] | false | 是否开启预览。 |
| extra | [Boolean,String] | false | 是否开启图片额外插槽显示内容。 |
| extraPosition | String | 'in' | in:叠加图片上显示,out：图片下方显示 |
| delete | [Boolean,String] | false | 展示关闭删除按钮。 |
| allowDelete | [Boolean,String] | true | 是否允许点击delete图标关闭自己，如果为false,将仅触发delete事件，本身图片不会被关闭。 |
| model | String | 'scaleToFill' | 图片缩放模式，同官方阅读：[https://uniapp.dcloud.io/component/image.html](https://uniapp.dcloud.io/component/image.html) |
| unit | String | 'rpx' | 单位 |
| showLoad<Badge type="danger" text="v3.0.77+" vertical="middle" /> | Boolean | true | 是否显示加载动画 |
| showMenuByLongPress | [Boolean] | false | 长按是否显示识别菜单 |

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| @load | imginfo | Object | 返回:{width,height},图片加载完成时触发 |
| @error | 出错信息 | Object | 当图片发生错误时触发此事件 |
| @click | 当前图片地址 | String | 点击图片时触发 |
| @delete | 返回已删除图片的路径 | String | 删除每一张都会触发。 |

### :corn: slot插槽
| 属性名称 | 类型 | 数据 | 说明 |
| --- | --- | --- | --- |
| extra |  |  | 展示额外的内容 |

### :green_salad: ref方法
无

### :green_salad: 图片组 image-group
:::warning 特别提醒
  它不能单独使用，必须和tm-image配合使用。        
:::
props属性表
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | [Number, String] | 0 | 默认为0,宽度自动。 |

### 贡献者
Mr.童