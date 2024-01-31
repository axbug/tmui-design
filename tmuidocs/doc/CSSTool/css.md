---
title: 自带CSS库
---


#### CSSTool tmui.design

# CSS库  <Badge type="danger" text="v3.0.4+" vertical="middle" />



## :tada: 如何使用
在可以写class的组件上即可填写，本质上这是一个css类库，为了方便大家提高布局效率而开发出来。可以兼容全部平台，而无需担心在原生
nvue上报错，已经作了兼容。<br>
**建议布局尽量使用本css库类，95%可以满足你的日常布局，让你无需写一行样式表就可以完成一个全平台的应用软件**

```vue

<view class="flex flex-row"> </view>

```

---

:::tip 仔细阅读哦

总共就几大类，非常好记，编辑工具写类时会有提示的，也不用记死，只要理解其意思即可。理解了这些类，你就可基本不用写样式开发组件了，效率加速提升，越用越爽！<br>
本tmui组件，98%使用本类库编写几乎98%不写一行样式完成一个组件。<br>
**如果发现了纰漏请及时通知我。**

:::


## 杂类
| 类名 | 作用说明 |
| :----- | :----------- |
| safe-height | 底部安全区域高度  <Badge type="danger" text="nvue不支持" vertical="middle" /> |
| overflow | 溢出隐藏。 |
| overflow-x | 横轴溢出隐藏，Y轴自动（滚动条） |
| overflow-y | 竖向溢出隐藏，X轴自动（滚动条） |
| relative | 相对定位 |
| absolute | 绝对定位 |
| fixed | 固定悬浮 |
| clear | 清除浮动<Badge type="danger" text="nvue不支持" vertical="middle" />  |
| fulled | 宽度100%<Badge type="danger" text="nvue不支持" vertical="middle" />  |
| fulled-height | 高度100% |
| gray-100 | 使元素变灰色<Badge type="danger" text="nvue不支持" vertical="middle" />  |
| gray | 使元素变灰色25%<Badge type="danger" text="nvue不支持" vertical="middle" />  |
| d-inline-block | 使元素变为内联，即和文字变为一行<Badge type="danger" text="nvue不支持" vertical="middle" />  |
| d-block | 使元素变为块联即占一行<Badge type="danger" text="nvue不支持" vertical="middle" />  |
| vertical-align-[x] | x=[top/middle/bottom]内联对齐方式,如：vertical-align-top顶部对齐<Badge type="danger" text="nvue不支持" vertical="middle" /> |
| wrap | 断行，包括内联元素和单词，数字全部强制断行 |
| nowrap | 不断行，使用内联元素形成一排 |




## 文本类
| 类名 | 作用说明 |
| :----- | :----------- |
| text-delete | 删除线 |
| text-underline | 下划线 |
| text-size-[x] | 文本大小x可能的值为：xxs,xs,s,n,g,lg,xl，例如中号:text-size-n  |
| text-weight-[x] | 粗细，x可能值为：细s,正常n,加粗b |
| text-align-[x] | 文本对齐 。text-align-left,right,center |
| text-overflow | 超过一行末尾省略号 |
| text-overflow-[x] | x=[1-5],最多几行出现省略号 |





## 圆角
| 类名 | 作用说明 |
| :----- | :----------- |
| round-[x] | 圆角,x=[0-25],比如：round-10 |
| rounded | 50%的半圆角 |

圆角的其它辅助特性。``` round-tl-[上面的数值] 如：round-tl-10 ```
| tl | tr | bl | br | a | t | b | l | r |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 顶左 | 顶右 | 底左 | 底右 | 全部 | 顶左和顶右 | 底左和底右 | 顶左和底左 | 顶右和底右 |





## 透明度
| 类名 | 作用说明 |
| :----- | :----------- |
| opacity-[x] | 透明,x=只能是整数0,1,2,3,4,5,6,7,8,9对应0.0~0.9 |






## 投影
| 类名 | 作用说明 |
| :----- | :----------- |
| shadow-[x] | 投影大小x=[0-25]如：shadow-5 |


## 边线
| 类名 | 作用说明 |
| :----- | :----------- |
| border-[x] | 加四边边线，边线大小x=[0-25]如：border-5 |
| border | 加四边边线，边线为1px |

border的其它辅助特性。``` round-方向-精细 ```
| l | r | b | t | a |
| :--: | :--: | :--: | :--: | :--: |
| 左 | 右 | 底 | 顶 | 四边 |

**规则:border-方向-粗细 <br>**




## zIndex层级

| 类名 | 作用说明 |
| :----- | :----------- |
| zIndex-[x] | x=[0-25]如：zIndex-5,=>z-index:5 |
| zIndex-n[x] | x=[0-25],其中n=4,如：zIndex-n5,=>z-index:20 |




## 文字颜色类

如果想要改变一个文字颜色为主题色，使用``` text-颜色名 ```即可。<br>
比如红色文字 ``` text-red ```，其它类推。






## Flex综合排版

| flex-start | flex-end | flex-center | flex-between | flex-around | flex-reverse |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 居中左对齐 | 居中右对齐 | 居中对齐 | 居中两边对齐 | 居中均分 | 行内反转内容 |

| flex-row | flex-col | flex | flex-wrap | flex-shrink<Badge type="danger" text="nvue不支持" vertical="middle" />  |
| :--- | :--- | :--- | :--- | :--- |
| 横向排列 | 纵向行排列 | flex布局 | 自动断行 | 保证宽度不受挤压 |

| flex-[x] |
| :--- |
| [x]=0-12，flex布局 |

**在flex-row排列一排时，如果内部只有一元素flex-1就是占比1即100%,占比2就是20%依此类推**

## Flex-row排版

需要配合flex flex-row类，加上本类比如：
```
//表示横向排列上中间对齐
<view class="flex flex-row flex-row-top-center"></view>
```
其它类推组合

| flex-row-top-start | flex-row-top-center | flex-row-top-end 
| :--- | :--- | :--- |
| 上左对齐 | 上中对齐 | 上右对齐 |

| flex-row-center-start | flex-row-center-center | flex-row-center-end 
| :--- | :--- | :--- |
| 中左对齐 | 中对齐 | 中右对齐 |

| flex-row-bottom-start | flex-row-bottom-center | flex-row-bottom-end 
| :--- | :--- | :--- |
| 底左对齐 | 底中对齐 | 底右对齐 |

| flex-row-center-between |
| :--- |
| 上下居中，两边对齐。 |



## Flex-col排版

需要配合flex flex-col类，加上本类比如：
```
//表示纵向排列 左上对齐
<view class="flex flex-col flex-col-top-center"></view>
```
其它类推组合

| flex-col-top-start | flex-col-top-center | flex-col-top-end 
| :--- | :--- | :--- |
| 左上对齐 | 左中对齐 | 左右对齐 |

| flex-col-center-start | flex-col-center-center | flex-col-center-end 
| :--- | :--- | :--- |
| 中左对齐 | 中对齐 | 中右对齐 |

| flex-col-bottom-start | flex-col-bottom-center | flex-col-bottom-end 
| :--- | :--- | :--- |
| 底左对齐 | 底中对齐 | 底右对齐 |

| flex-col-full |
| :--- |
| 两边拉齐，使用纵向内的元素宽100% |

**在flex-col纵向排时，如果内部只有一元素flex-col-full就是宽度100%**

## 基线对齐<Badge type="danger" text="nvue不支持" vertical="middle" />

| flex-row-baseline-start | flex-row-baseline-center | flex-row-baseline-end |
| :--- | :--- | :--- |
| baseline项目基线（row时是顶，col时是左） | baseline项目基线（row时是中，col时是中） | baseline项目基线（row时是底，col时是右） |



## Grid 网格排版 <Badge type="danger" text="nvue不支持" vertical="middle" />
顾名思义，即像表格一样排列，一行几列，超过了指定列数断行到下一行。
| grid |
| :--- |
| 开启网格排版 |

| grid-col-[x] |
| :--- |
| 一行几列，x=[1,12]之间的值，比如grid-col-3表示一行3列 |

示例：class="grid grid-col-5" 表示它下面的元素按一行5列排，超过的自动断行到下一行。

## Gap 间隙 <Badge type="danger" text="nvue不支持" vertical="middle" />
与margin,padding不同，它的间隙只会在元素之间产生，如果您这边没有元素了，就不会产生间隙。相比margin,padding增加间隙，使用此类gap更具优势。
| gap-[x] | gap-row-[x] | gap-col-[x] |
| :--- | :--- | :--- |
| 周边间隙 | 行与行之间的间隙 | 列与列间的间隙 |

**x=1,25之间，注意值是x2的，比如gap-1实际是gap:2rpx;**

## 位置控制

| t | l | r | b |
| :---: | :---: | :---: | :---: |
| 上top | 左left | 右right | 底bottom |

**规则示例**<br>

```t-x```表示正数，x=0-50，比如：t-24，表示顶部偏移24rpx，等于：top:24rpx;<br>
```t-nx```表示正数*4的倍数，x=0-25,比如：t-n10，表示向上偏移40rpx，等于：top:40rpx;<br>
```t--x```表示负数，x=0-50，比如：t--24，表示向上偏移24rpx，等于：top:-24rpx;<br>
```t--nx```表示负数，x=0-25，比如：t--n10，表示向上偏移40rpx，等于：top:-40rpx;<br>
其它类推。



## 外边距

| 类名 | 方向 | 值 | 示例 |
| :---: | :---: | :---: | :---: |
| m | a | 0-50 | ma-10,四周边距为10upx |

规则为``` m方向-值即可。 ```<br>
可选的方向

| a | l | r | t | b | x | y |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 四周 | 左 | 右 | 顶 | 底 | 水平左右 | 竖向上下 |

外边距如果觉得数据不够用嫌小，还可以这样使用```m方向-n值```比如外边距40可以写成：```ma-n10```，n*4倍的数据，n为1-25

## 负数外边距

**还可以使用负方向**<br>
<span style="color:red">规则和上方样，需要加上-号。比如向上负：mt--24,表示负24rpx，ml-n10表示向左负40rpx</span>






## 内边距

| 类名 | 方向 | 值 | 示例 |
| :---: | :---: | :---: | :---: |
| p | a | 0-50 | pa-10,四周内边距为10upx |

规则为``` p方向-值即可。 ```<br>
可选的方向

| a | l | r | t | b | x | y |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 四周 | 左 | 右 | 顶 | 底 | 水平左右 | 竖向上下 |

内边距如果觉得数据不够用嫌小，还可以这样使用```p方向-n值```比如内边距40可以写成：```pa-n10```，n*4倍的数据，n为1-25



