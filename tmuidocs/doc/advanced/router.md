---
title: TMUI3进阶指南
---

<dirtoc></dirtoc>

##### 进阶指南 tmui.design

# TMUI 3.0 by tmzdy

### 前置条件
如果你还没阅读[tmui全局配置表的设置](doc/)，请先访问 阅读。

### 编写主题文件
你可以单独写个文件导出，并与config.ts合并进去。

示例模板
```ts
// theme.ts
export const theme = {
 	// 这里输入你定义的主题主色
	//比如："primary": "#FF0000"
	//名称如果与自带主题相同，将会覆盖。
 }

```