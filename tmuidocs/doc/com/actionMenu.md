---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 底部操作栏
从底部弹出的快速操作菜单栏，对于单项可选项目操作，非常有用，且便利。

---

## :hot_pepper: 底部操作 actionMenu 栏示例

<webview url="https://tmui.design/h5/#/pages/daohang/actionMenu"></webview>

::: details 示例模板

<<< ../src/pages/daohang/actionMenu.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| list | Array | [] | [] |  |
| rangKey | String | 'text' |  |
| modelValue | Boolean | false |  |
| color | String | "white" |  |
| activeFontColor | String | "primary" | 活动项的文字色，如果不提供使用默认 |
| active | Number | NaN | 当前的活动项 |
| allowClose | Boolean | true | 点按菜单后，是否允许关闭弹层。 |
| duration | Number | 250 | 弹层动画时长 |


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:modelValue |  | false/true | v-model:显示和隐藏 |
| change |  | listitem | 当点击项目时触发，返回(listitem,index)数据 |
| cancel |  |  | 点击取消时触发 |

list[]格式为listitem 如下：
```ts
interface listitem {
	text ? : string,
	disabled ? : boolean,
	// 选项菜单按钮的open-type，同各家小程序的一样的参数。
	openType ? : string,
	[prop: string]: any;
}
```

## :corn: slot插槽

默认default，可触发弹层的插槽占位内容，比如在里面布局按钮，输入框，点击这块内容可以直接显示弹层。

## :green_salad: ref方法

无

| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

## :rage: 贡献者：小超1263375375



