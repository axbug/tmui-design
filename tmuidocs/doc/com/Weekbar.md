---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 时间周 Weekbar
显示一行以周为周期的日期选择工具栏，可用于表单录入、日期筛选等场景。

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/form/weekbar"></webview>

::: details 示例模板

@[code vue](pages/form/weekbar.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE           | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)

| 参数名          | 类型                 | 默认值     | 描述            |
|--------------|--------------------|---------|---------------|
| followTheme  | Boolean            | true    | 是否跟随主题        |
| transprent   | Boolean            | false   | 是否透明效果        |
| round        | Number             | 0       | 圆角 ，0-25         |
| shadow       | Number             | 3       | 阴影 ，0-25         |
| defaultValue | String,Date,Number | ''      | 默认日期值,留空为当前日期 |
| modelValue   | String,Date,Number | ''      | 选中日期值         |
| color        | String             | white   | 主题颜色          |
| activeColor  | String             | primary | 选中颜色          |

### :rose: 事件
| 事件名               | 参数   | 返回数据       | 描述               |
|-------------------|------|------------|------------------|
| change            | date | YYYY-MM-DD | 选中日期             |
| update:modelValue | date | YYYY-MM-DD | 选中日期（更新v-model值） |

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[Kyour](https://github.com/kyour-cn)贡献，如果对该框架感兴趣的可以参与我们一同进步！
