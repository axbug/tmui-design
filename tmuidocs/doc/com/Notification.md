---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 通知提醒 Notification
通知提醒,总共四个角和上下，6个位置的提醒,使用时请注意内容变动即可显示。如果想一开始不想显示，不要提供内容就行。

---



### :hot_pepper: 知提醒 Notification 示例

<webview url="https://tmui.design/h5/#/pages/fankui/notification"></webview>

::: details 示例模板

@[code vue](pages/fankui/notification.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| followTheme | [Boolean,String] | true | 是否跟随主题，可选值：false,true |
| transprent | [Boolean,String] | false | 是否透明 |
| border | [Number,String] | 0 |  |
| round | [Number,String] | 2 | 圆角 单位rpx |
| shadow | [Number] | 0 | 投影  |
| margin | ArrayasPropType`<Array<number>>` | ()=>[0,0] | 外间距，[x,y]x=左右，y=上下 |
| padding | ArrayasPropType`<Array<number>>` | ()=>[24,16] | 内间距，[x,y]x=左右，y=上下 |
| duration | Number | 2000 | 动画时长 |
| offset | ArrayasPropType`<Array<number>>` | ()=>[32,32]//x,y | 偏移量，[x,y]x=左右，y=上下 |
| placement | String | topLeft  | 位置，可选值：topLeft|topRight|bottomLeft|bottomRight|top|bottom |
| label | String | "" | 展示的文字内容,注意：required:true,必传 |
| icon | String | tmicon-info-circle-fill | 自定义图标 |
### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | 无 | 事件参数e | 点击 |
| close | 无 | 无 | 关闭 |
### :corn: slot插槽
默认default

### :green_salad: ref方法
无
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| show | showOpts | 无 | 手动显示 |
| hide | 无 | 无 | 手动隐藏 |

showOpts格式如下：
```ts
export interface showOpts{
    label?:string,
    icon?:string
}
```

### :couplekiss: 文档贡献
此页文档由ygy贡献([git](https://gitee.com/ygy-promise),[github](https://github.com/ygy-97))，如果对该框架感兴趣的可以参与我们一同进步！