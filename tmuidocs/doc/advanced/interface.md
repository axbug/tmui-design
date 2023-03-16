---
title: TMUI3进阶指南
---

<dirtoc></dirtoc>

##### 进阶指南 tmui.design

# TMUI 3.0 by tmzdy

### 前置条件
你必须使用cli模式创建uni项目。才能使用vscode开发，并全局提示类型以及校验。

### 取得自带类型提示
有时可能需要用到我的组件的类型来设置你的数据类型或者校验等等提示。

请在写类型时直接输入```Tmui```,会自动提示一个Tmui的全局类型文件，你只要按提示选择即可。

示例:
```ts
//写一个tmActionMenu list数据类型
const list:Tmui.tmActionMenu[] = []

```