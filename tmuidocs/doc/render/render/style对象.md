---
title: style对象
---

### :ram:style对象

:::tip 获取style对象实例

graph.style即可，将返回该图形所有sytle属性。

:::

下面是介绍style对象属性

## :ram:graph属性

### fill
```
/**
 * @description 图形填充颜色的Rgba值
 */
fill: RgbaValue = [0, 0, 0, 1]
```
### stroke
```
/**
 * @description 图形描边颜色的Rgba值
 */
stroke: RgbaValue = [0, 0, 0, 0]
```
### opacity
```
/**
 * @description 图形透明度
 */
opacity: number = 1
```
### lineCap
```
/**
 * @description Ctx的lineCap属性值,线条的结束端点样式
 */
lineCap: LineCap = 'butt' //'butt'、'round'、'square'
```
### lineJoin
```
/**
 * @description Ctx的lineJoin属性值,线条的结束交点样式
 */
lineJoin: LineJoin = 'miter' //'bevel'、'round'、'miter'
```

### lineDash
[见uniapp说明](https://uniapp.dcloud.net.cn/api/canvas/CanvasContext?id=canvascontextsetlinedash)
```
/**
 * @description Ctx的lineDash属性值
 */
lineDash: number[] = []
```
### lineDashOffset
[见uniapp说明](https://uniapp.dcloud.net.cn/api/canvas/CanvasContext?id=canvascontextsetlinedash)
```
/**
 * @description Ctx的lineDashOffset属性值
 */
lineDashOffset: number = 0
```
### shadowBlur
```
/**
 * @description Ctx的shadowBlur属性值
 */
shadowBlur: number = 0
```
### shadowColor
```
/**
 * @description 图形阴影颜色的Rgba值
 */
shadowColor: RgbaValue = [0, 0, 0, 0]
```
### shadowOffsetX
```
/**
 * @description Ctx的shadowOffsetX属性值
 */
shadowOffsetX: number = 0
```
### shadowOffsetY
```
/**
 * @description Ctx的shadowOffsetY属性值
 */
shadowOffsetY: number = 0
```
### lineWidth
```
/**
 * @description Ctx的lineWidth属性值
 */
lineWidth: number = 1
```
### graphCenter
```
/**
 * @description 图形中心点
 */
graphCenter?: [number, number]
```
### scale
```
/**
 * @description 图形缩放倍数
 */
scale?: [number, number]
```
### rotate
```
/**
 * @description 图形旋转角度
 */
rotate?: number
```
### translate
```
/**
 * @description 图形位移距离
 */
translate?: [number, number]
```
### fontStyle
```
/**
 * @description Ctx的fontStyle属性值
 */
fontStyle: FontStyle = 'normal'
```
### fontVarient
```
/**
 * @description Ctx的fontVarient属性值
 */
fontVarient: FontVarient = 'normal'
```
### fontWeight
```
/**
 * @description Ctx的fontWeight属性值
 */
fontWeight: FontWeight = 'normal'
```
### fontSize
```
/**
 * @description Ctx的fontSize属性值
 */
fontSize: number = 10
```
### fontFamily
```
/**
 * @description Ctx的fontFamily属性值
 */
fontFamily: string = 'Arial'
```
### textAlign
```
/**
 * @description Ctx的textAlign属性值
 */
textAlign: TextAlign = 'center'
```
### textBaseline
```
/**
 * @description Ctx的textBaseline属性值
 */
textBaseline: TextBaseLine = 'middle'
```
### gradientColor
```
/**
 * @description 用于创建渐变色的颜色
 */
gradientColor?: RgbaValue[]
```
### gradientType
```
/**
 * @description 渐变类型
 */
gradientType: GradientType = 'linear' //gradient
```
### gradientParams
**特别注意**<br>
这里在uniapp中，我已经做了兼容和处理。在linear线性渐变的情况下
x0,y0表示起点坐标，它是相对于你图形的x,y坐标来定义的。<br>
x1,y2也是一样起始值是x,y。比如：<br>
x0=x,y0=y起始为20,20那么。x1=100就表示从20至100的位置，实际位置是120<br>
如果不理解，请自己测试。
```
/**
 * @description 渐变参数
 * @example gradientParams = [x0, y0, x1, y1] (线性渐变)
 * @example gradientParams = [x0, y0, r0, x1, y1, r1] (径向渐变)
 */
gradientParams?: GradientParams
```
### gradientWith填充渐变的类型fill，和stroke
```
/**
 * @description 使用渐变色的属性
 *
 * 控制渐变色用于填充颜色还是描边颜色
 */
gradientWith: GradientWith = 'stroke'
```
### gradientStops渐变位置的控制
```
/**
 * @description 渐变色位置
 * @example gradientStops = 'auto' | [0, .2, .3, 1]
 */
gradientStops: GradientStops = 'auto'

```

:::tip

启用渐变色后，优先使用渐变填充或者描边。

:::

