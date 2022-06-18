---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 键盘 Keyborad
键盘组件提供四种模式，可以适应多种输入环境，分别为密码输入，身份证号输入，车牌输入以及常见的数字键盘

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/form/keyborad"></webview>

::: details 示例模板

@[code vue](pages/form/keyborad.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数

本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| type | String | number | 可选：card 身份证，car 车牌，password 密码，number 数字 |
| show | Boolean | false | 是否显示 |
| modelValue / v-model | String | "" | 输入值 |
| defaultValue | String | "" | 默认内容 |
| color | String | primary | 键盘颜色 |
| random | Boolean | false | 是否为随机键盘 |

### :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | / | modelValue | 返回当前输入内容 |
| confirm | / | modelValue | 返回最终输入内容，并隐藏键盘 |


### :corn: slot插槽

无

### :green_salad: ref方法

无

### :rage: 贡献者
[Wicos](http://wicos.me)
