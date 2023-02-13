---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 数值显示 Statistic
主要用来显示数值，翻转动画。

---

### :hot_pepper: 数值显示 Statistic 示例

<webview url="https://tmui.design/h5/#/pages/showdata/statistic"></webview>

::: details 示例代码

@[code vue](pages/showdata/statistic.nvue)

:::


### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| followTheme | [Boolean,String] | true | 是否跟随全局主题的变换而变换 |
| fontSize | Number | 30 | 字体大小 |
| color | String | "" | 字体颜色 |
| startVal | Number,required:false | 0 |  起始值|
| endVal | Number,required:false | 2021 | 最终值 |
| duration | Number,required:false | 3000 | 从起始值到结束值数字变动的时间 |
| autoplay | Boolean,required:false | true | 是否自动播放 |
| decimals | Number,required:false | 0,validator(value){returnvalue>=0;} | 保留的小数位数 |
| decimal | String,required:false | '.' | 小数点分割符号 |
| separator | String,required:false | ',' | 上了三位数分割的符号 |
| prefix | String,required:false | '' |  前缀|
| suffix | String,required:false | '' | 后缀 |
| useEasing | Boolean,required:false | true | 是否具有连贯性 |
| isFrequent | Boolean,required:false | false | 是否隔一段时间数字跳动，这里的跳动是隔一段时间设置初始值 |
| frequentTime | Number,required:false | 5000 | 跳动间隔时间 |


### :rose: 事件
| 事件名    | 参数  | 返回数据 | 描述  |
|--------|-----|------|-----|
| mountedCallback | - | - | 组件挂载成功事件 |
| callback |  |  |  |

### :corn: slot插槽
| 插槽名称    | 插槽参数  | 插槽数据 | 说明  |
|--------|-----|------|-----|
| prefix |  -| - | 前缀插槽 |
| default | - | - | 默认插槽 |
| suffix |  -| - | 后缀插槽 |


### :green_salad: ref方法
| 方法名称    | 参数  | 返回数据 | 描述  |
|--------|-----|------|-----|
| start | startVal:number | -  | 开始数值动画 |
| reset |  -| - | 重置数值动画 |
| pause |  -| - | 暂停数值动画 |


### :couplekiss: 文档贡献
此页文档由[夏天](https://gitee.com/Xia_5718)贡献，如果对该框架感兴趣的可以参与我们一同进步！