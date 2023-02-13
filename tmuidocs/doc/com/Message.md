---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 全局提示 Message
消息提示弹出层，用于向用户反馈执行结果等场景。

---

### :hot_pepper: 全局提示 Message 示例

<webview url="https://tmui.design/h5/#/pages/fankui/message"></webview>

::: details 示例模板

@[code vue](pages/fankui/message.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE           | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数

| 参数名      | 类型      | 默认值  | 描述                 |
|----------|---------|------|--------------------|
| mask     | Boolean | true | 是否显示遮罩             |
| duration | Number  | 1300 | 自动关闭时,需要显示多久关闭（毫秒） |
| width | Number  | 300 | 宽 |
| height | Number  | 300 | 高 |
| lines    | Number  | 1      | 文本内容显示的行数,最大5行                  |

### :rose: 事件
| 事件名   | 参数  | 返回数据 | 描述  |
|-------|-----|------|-----|
| click |     |      |     |

### :rose: 插槽
| 名称   | 参数  | 返回数据 | 描述  |
|-------|-----|------|-----|
| default |     |      |  替换中间的图标和文本内容   |

### :green_salad: ref方法
| 方法名   | 参数  | 返回值 | 描述  |
|-------|-----|-----|-----|
| show  |  config:object   |     | 显示,参数格式见下方  |
| hide |     |     | 隐藏  |

```ts
export type modelType = "load"|"error"|"info"|"warn"|"quest"|"success"|"disabled"|"wait"
export interface config {
	 duration?:number, //显示的时长
	 icon?:string, //显示的图标
	 text?:string, //显示的文本
	 color?:string, //显示的主题
	 dark?:boolean, //是否暗黑
	 model?:modelType ,//模式见上方modelType
	 mask?:boolean //是否显示黑色遮罩。
}

```

### :couplekiss: 文档贡献
此页文档由[Kyour](https://github.com/kyour-cn)贡献，如果对该框架感兴趣的可以参与我们一同进步！
