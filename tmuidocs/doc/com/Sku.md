---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 商品属性选择 Sku
超过指定高度，默认隐藏更多内容。

---

## :hot_pepper: 商品属性选择 Sku 示例

<webview url="https://tmui.design/h5/#/pages/yewu/sku"></webview>

::: details 示例模板

<<< ../src/pages/yewu/sku.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| height | Number | 650 | 弹层高度。 |
| color | String | 'red' | 主题 |
| show | Boolean | false | 可使用双向绑定v-model:show |
| round | Number | 6 | 圆角 |
| num | Number | 1 | 购物数量 |
| list | `Tmui.sku` | 格式见下方 | 数据属性 |

**list**格式
```
interface skuItem{
	title:string,
	id:string|number,
	num:number,
	children:skuItem[]
}
interface sku {
	data:skuItem[],
	product:{
		id: string, 
		title: string, 
		num: number,
		max_buy:number,
		/** 原价 */
		price: number, 
		/** 优惠价 */
		salePrice: 54, 
		tip: string,
		img:string
	}[]
}
```

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| @buy |  |  | 点击购买按钮时触发 |
| @add |  |  | 添加购车时触发 |
| @open |  |  | 打开弹层时触发 |
| @close |  |  | 关闭弹层时触发 |

## :corn: slot插槽
| 属性名称 | 类型 | 数据 | 说明 |
| --- | --- | --- | --- |
| foot |  |  | 底部按钮区域 |
| default |  |  | 在头部，内容插槽 |

## :green_salad: ref方法
无

