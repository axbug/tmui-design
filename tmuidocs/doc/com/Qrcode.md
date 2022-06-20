---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 二维码 Qrcode	
生成二维码。

---

### :hot_pepper: 示例效果

<webview url="https://tmui.design/h5/#/pages/showdata/qrcode"></webview>

::: details 示例代码

@[code vue](pages/showdata/qrcode.nvue)

:::


### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| option | ObjectasPropType\<qrOpts> |  | 看下面的参数 |

“option” 中的参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| baseColor | Array,String | #fff | 二维码背景色,可以是数组颜色，将产生渐变 |
| backgroundImage | String | null | 使用图片作为二维码背景 |
| backgroundColor | Array,String | null | 背景色,可以是数组颜色，将产生渐变。 |
| size | Number | 300 | 图片大小 |
| border | Number | 0.05 | 边 width = size * border,比如二维码是200,那么想要让边为10那么 border = 200*0.05 |
| str | String |  | 内容 |
| forgroundColor | String | #000 | 二维码前景色,也可以是["#FF0000","#FFFF00"]如果提供数组，将会绘制渐变色 |
| logoImage | String | null | logo图片 |
| logoWidth | Number | 20 | 宽 |
| logoHeight | Number | 20 | 高 |
| ecc | String | M | 容错等级[ 'L', 'M', 'Q', 'H' ] |
| linearDir | String | tlbr | 如果forgroundColor是数组渐变色，则此可以更改渐变方向，left,right,bottom,top,tlbr:左顶点至底右下点，trbl,右顶点底右左点，bltr右底左点至顶右点。brtl底右点至顶左点。 |

### :rose: 事件
无


### :corn: slot插槽
默认default

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[﹎wj潕钶取玳](https://gitee.com/dxwj)贡献，如果对该框架感兴趣的可以参与我们一同进步！