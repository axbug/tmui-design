---
title: TMUI3进阶指南
---

#### 进阶指南 tmui.design

# TMUI 3.0 by tmzdy

## 前置条件
你必须使用cli模式创建uni项目。才能使用vscode开发，并全局提示类型以及校验。

在vscode中，你可以获得我所有组件的提示，包括：组件属性，类型等等，以及全局的方法提示。
你会超级喜欢ts的，哪哪都有提示。这就是我要完善的类型文件。并且使用vscode开发非常的完善。

## 如何编译和开发
如果使用vscode开发。我如何编译和运行呢？你只要在当前目录下运行相关命令和编译就行。

然后使用对应平台的开发工具导入你的编译和开发的目录。

比如dev时，程序的目录在 根目录->dist->dev->你的平台的小程序

比如build，编译后的目录 根目录->dist->build->你的平台的小程序

## vue文件的提示和校验
这个文件默认就有提示，无需配置，你只要使用我的cli模板，就自动帮你配置好了，无需考虑。

## tmui组件在vscode中的文档提示
请在插件市场搜索 tmui  后出现个tmui-help插件，由群内成员@상대방 입력 중... 开发维护。感谢辛苦贡献。

## nvue文件的提示和校验

首先vscode中一定要安装插件 ```Vue Volar extension Pack ```，如果没有安装请复制，搜索安装。

a. 第一步安装上述插件

b. 打开vscode设置，在顶部搜索框中搜索```Files:Associations```，在条目中点击```添加荐```，有两列，项填写```*.nvue```，值填写```vue```，在添加一项对wxs的支持，项填写：```*.wxs```，值填写```javascript```

c. 继续在设置的顶部输入框搜索：```Additional```，点击添加项，输入：```nvue```

d. 重启vscode，现在你可以愉快的开发了。

## css库的类提示配置
我组件配置了效率的类，因此经常要用到，提示不可避免。在vscode中打开插件栏搜索插件：``` IntelliSense for CSS class names in HTML ```
这样在写我的组件或者系统组件属性上写class=" " _class=" "时，会有我的css类提示。避免自己盲猜，带来的不方便。

## git历史记录配置
大家用git开发难免要经常看提交日志和对比，恢复。请安装插件``` Git History ```

## vs主题
开发程序难免需要一款合适的主题，我推荐：``` Monokai Pro ```，金色主题。

## 单词拼写纠正
请搜索``` Code Spell Checker ```插件进行安装，可以自行对错误的拼写提示并替换纠正。
