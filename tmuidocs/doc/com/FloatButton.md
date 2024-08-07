---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 悬浮按钮 FloatButton
用于展示悬浮在页面上层的按钮组件，用于展示常用功能。

---

## :hot_pepper: 悬浮按钮 FloatButton 示例

<webview url="https://tmui.design/h5/#/pages/other/floatButton"></webview>

::: details 示例模板

<<< ../src/pages/other/floatButton.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE           | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)

| 参数名              | 类型      | 默认值      | 描述                                   |
|------------------|---------|----------|--------------------------------------|
| followTheme      | Boolean | true     | 是否跟随主题                               |
| position         | String  | br       | 主按钮的位置 可选：bc, bl, br, tc, tl, tr     |
| actionsPos       | String  | top      | 子菜单弹出的位置 可选：left, right, top, bottom |
| width            | Number  | 112      | 按钮宽度                                 |
| height           | Number  | 112      | 按钮高度                                 |
| offset           | Array   | [32, 32] | 按钮位置                                 |
| actions          | Array   | []       | 子按钮组数据                              |
| btn              | Object  | {}       | *主按钮对象数据                           |
| showActions      | Boolean | false    | 是否默认显示子菜单                        |
| clickHidnActions | Boolean | true     | 点击子菜单后，是否需要隐藏                 |
| disabledScrollTo | Boolean | true     | 默认true禁用，是否开启置顶功能（nvue不支持）             |
| scrollTo |  见下方   | （nvue不支持）置顶参数详见解释[置顶参数见官网](https://uniapp.dcloud.net.cn/api/ui/scroll.html) |

**scrollTo**:```{scrollTop:number,selector:string,duration:number} | {scrollTop:0,selector:'',duration:300} ```

如果clickHidnActions为false,点击子按钮后不会隐藏按钮。始终保持展开子按钮

btn主按钮和子按钮数据格式如下：
```ts
//按钮的位置
export enum positionType {
    tl = 'tl',
    tc = 'tc',
    tr = 'tr',
    bl = 'bl',
    bc = 'bc',
    br = 'br',
}
//子菜单弹出的位置
export enum popDir {
    l = 'left',
    t = 'top',
    b = 'bottom',
    r = 'right'
}

export interface actionsItem {
    icon:string,
    label?:string,
    iconSize?:number,
    fontSize?:number,
    color?:string,//背景
    fontColor?:string,
    linear?:string,
    linearDeep?:string,
	/** 按钮开放值，注意，如果你是想要获取电话，头像，昵称等回调事件，统一调取各自的callback */
	openType?:string,
	/** 开放平台的回调函数 */
	callback?:Function<event:any,item:actionsItem>,//返回的参数就是各开放平台的参数。
}

```
## :rose: 事件
| 事件名    | 参数  | 返回数据 | 描述  |
|--------|-----|------|-----|
| click  |     |      |  主按钮点击   |
| change |     |  index, item |   子按钮点击  |

## :corn: slot插槽
默认default

## :green_salad: ref方法
无

## :couplekiss: 文档贡献
此页文档由[Kyour](https://github.com/kyour-cn)贡献，如果对该框架感兴趣的可以参与我们一同进步！
