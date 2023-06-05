---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 布局 Row
你可以用来排版，排列，九宫格等需要排版布局时非常有用。比如自己作表格等。 它是按12列划分的,当然也可以通过属性更改列数哦。

***特别注意：从3.0.89开始使用了新的布局方式，并且不会向下兼容，更新后比之前布局变得非常的简单***

---

## :hot_pepper: 布局 Row 示例

<webview url="https://tmui.design/h5/#/pages/layout/row"></webview>

::: details 示例模板

<<< ../src/pages/layout/row.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
Row组件含有公共属性 [公共属性](/spec/组件公共样式.html),必须配合tmCol

**我建议row上最好定义width,这样性能与原生无异**
当外部宽度不可预测时，width可以不设置，即让组件自动检测宽度，这样适合少量元素的布局。不适合大量数据布局。

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| height | [Number] | 50 | 高度，单位rpx,如果为0时，表示高度自动，不受限制。 |
| margin | `Array<number>` | [0,0] | 外间距[x,y]x=左右，y=上下 |
| width | [Number] | 0, | 宽度，单位rpx |
| round | [Number] | 0 | 圆角0-25，单位rpx |
| gutter | Number | 0 | 从3.0.89开始，此属性已经删除，请见col下的margin |
| column | Number | 12 | 列 |
| justify | String | start | 可选值：start/center/end/around/between |
| align | String | center| 可选值：start/center/end/stretch |
| color | String | white | 颜色 |

## :seedling: Col组件参数
必须配置tmRow使用。否则报错。
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| height | [Number] | 50 | 高度，单位rpx，如果为0时，表示高度自动，不受限制。|
| color | String | white | 颜色 |
| transprent | [Boolean,String] | false | 是否透明 |
| align | String | center|可选值：start/center/end |  
| col | Number | 1 | 所占row中column的列数，这里默认占1列 |  
| margin | `Array<number>` | [0] | 四周的间隙，规则见[公共属性margin](/spec/组件公共样式.html) |  
| borderColor | String | 'rgba(0,0,0,0.04)' | 边线的颜色 |  
| borderGutter | `Array<number>` | [0,0,0,0] | 四周的边线大小，顺序为：0左，1上，2右，3下 |  

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| @click | - | - | 单元格点击时触发 |

## :corn: slot插槽
默认default

## :green_salad: ref方法
无

## :couplekiss: 文档贡献
此页文档由[Sunlight](https://gitee.com/rzg)贡献，如果对该框架感兴趣的可以参与我们一同进步！
