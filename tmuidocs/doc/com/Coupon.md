---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 优惠券 Coupon
常用优惠券、卡券模板。

---

### :hot_pepper: 优惠券 Coupon 示例

<webview url="https://tmui.design/h5/#/pages/yewu/coupon"></webview>

::: details 示例模板

@[code vue](pages/yewu/coupon.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| margin | `Array<number>` | [32,24] | 左右下间距 |
| fontColor | String | black | 除金额和按钮外的其它字体颜色 |
| color | String | white | 背景 |
| mainColor | String | red | 金额和按钮字体颜色 |
| btnTextMode | Boolean | false | 是否让按钮为浅色背景 |
| btnLabel | String | "立即使用" | 按钮文本 |
| disable | Boolean | false | 禁用，相当于已经使用 |
| extra | Boolean | false | 是否展示更多的详情内容 |
| extraActive | Boolean | false | 展开更多的详情内容，必须把extra设置为true |
| moreText | String | "规则详情" | 展开更多内容的提示文字 |
| showRight | Boolean | true | 是否显示左右头像或者金额文本 |
| thumb | String | "" | 左边图片，如果为空则显示默认的金额，如果为图片地址，则优先显示图片 |
| priceDetail | `Object<surplice>` | {} | 左边显示金额时的数据，格式见下方 |
| rightDetail | `Object<rightSurplice>` | {} | 右边显示的数据，格式见下方 |

**priceDetail格式**
```ts
export interface surplice {
    price:number|string,//价格金额
    suffix:string,//后缀文本
    prefix:string,//前缀文本
    subtext:string//小文本
}
```
**rightDetail格式**

```ts
export interface rightSurplice {
    title:number|string,//标题
    subtitle:string,//副标题
    time:string,//有效期时间文本
}
```

### :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | - | - | 右边按钮被点击时触发 |

### :corn: slot插槽

| 插槽名 | 参数 | 描述 |
| :--: | :--: | :-- |
| thumb | - | 左边头像或者金额的插槽 |
| btn | - | 按钮插槽 |
| extra | - | 客户更多内容的插槽 |
| default | - | 默认插槽，右边标题和副标题插槽 |

### :green_salad: ref方法
无

