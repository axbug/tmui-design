---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 左滑操作栏 SlideSwitch
可以向左滑动来展示操作按钮的单元格组件。

---

### :hot_pepper: 左滑操作栏 SlideSwitch 示例

<webview url="https://tmui.design/h5/#/pages/fankui/slideSwitch"></webview>

::: details 示例模板

@[code vue](pages/fankui/slideSwitch.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE           | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)

| 参数名        | 类型           | 默认值   | 描述                              |
|------------|--------------|-------|---------------------------------|
| width      | Number       | 750   | 宽度                              |
| height     | Number       | 88   | 高度                              |
| action     | [actionItem] | []   | 按钮数据数组（见下方说明）                   |
| disabled   | Boolean      | false | 是否禁用                            |
| transprent | Boolean      | false | 是否透明效果                          |
| color      | String       | white | 主题颜色                            |
| round      | Number       | 0     | 圆角像素                            |
| openStatus | Boolean      | false | 为true状态下可以使用v-model:open-status |

- 按钮数据参数
```javascript
actionItem {
	text: string,//操作按钮的文本,
	width: number,//按钮宽度
	color: string,//主题色
	icon: string,//图标
	[prop: string]:any
}
```

### :rose: 事件
| 事件名                | 参数  | 返回数据 | 描述                 |
|--------------------|-----|------|--------------------|
| click              |     |      | 点击事件               |
| action-click       |     |      | 子容器点击事件            |
| update:open-status |     |      | 滑动开启状态（更新v-model值） |

### :corn: slot插槽
默认default

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[Kyour](https://github.com/kyour-cn)贡献，如果对该框架感兴趣的可以参与我们一同进步！
