---
title: tmui-cli工具
---

<dirtoc></dirtoc>

##### 开发指南 tmui.design

### tmui-cli使用介绍

通过作者提供的命令行工具```tmui-cli```你将可以在本项目中自动更新、创建新的hbx cli项目或者hbx项目开始开发。<br>
真正做到一键布署，一条命令就可以开始运行一个demo啦！<br>
如果你要开始一个全新的项目建议在当前空白目录下执行:```tmui use```来开始吧。<br>
虽然本工具是为tmui3.0准备的，但也为了更新tmui2.0方便，也加自动更新tmui2.0的功能，它只存在于命令tmui use中，选择项目vue2

#### 全局安装

```npm
npm -g install tmui-cli
```

#### 使用
请在项目文件的根目录下执行命令
```tmui```
即可取得所有可控的命令行

#### 命令解释

1. tmui cli 创建uniapp 平台的cli初始项目，内部已经包含了tmui最新框架（自动更新）
2. tmui hbx 创建uniapp 平台的HBX初始项目，内部已经包含了tmui最新框架（自动更新）
3. tmui rcli 为【已有】uniapp 平台的cli项目，更新和下载tmui最新框架（自动更新）
4. tmui rhbx 为【已有】uniapp 平台的HBX项目，更新和下载tmui最新框架（自动更新）
5. tmui use 为保姆级引导式下载安装上述功能项目。

#### 注意事项
如果你是需要创建tmui新项目可以使用命令行创建全新的项目。<br>
如果你是为老项目添加本tmui框架，你下载安装后，还需要按照文档步骤配置 [配置](https://tmui.design/doc/start/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B.html)<br>
如果是全新的使用本cli创建项目，则是一键配置到位，安装完立即就可以编译出一个tmui 程序的demo
