---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 标签 Tag
标签

---

## :hot_pepper: 标签 Tag 示例

<webview url="https://tmui.design/h5/#/pages/showdata/tag"></webview>

::: details 示例模板

<<< ../src/pages/showdata/tag.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| followTheme | [Boolean,String] | true | 颜色是否跟随主题变化 |
| transprent | [Boolean,String] | false | 是否透明 |
| border | [Number,String] | 0 | 边框宽度 |
| round | [Number,String] | 2 | 圆角0-25，单位rpx |
| shadow | [Number] | 1 | 投影,0-25 |
| margin | Array | ()=>[10,10] | 外间距[x,y]x=左右，y=上下 |
| padding | Array | ()=>[0,0] | 内间距[x,y]x=左右，y=上下 |
| checkable | [Boolean,String] | false | 是否开启标签可选中状态 |
| checked | [Boolean,String] | false |只有当checkable为true时有效  |
| load | [Boolean,String] | false | 标签是否处于加载中 |
| size | [String] | 'm',xs\|s\|m\|n\|g\|lg  |标签尺寸|
| fontSize | [Number,String] | 0 | 字体大小 |
| fontColor<Badge type="danger" text="v3.0.63+" vertical="middle" /> | [String] | "" | 默认空表示自动配色，填写了主题色将强制使用填写的颜色。 |
| closable | [Boolean,String] | false | 是否允许被关闭  |
| icon | [String] | '' | 图标 |
| iconAlign | [String] | left | 图标位置，左，右,'left','right' |
| label | [String] | '' | 文字 |
| before-close | Function,null | null | 关闭前的回调，可以返回promise。true允许关闭，false不允许关闭 |

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | 点击事件对象 |  | tag被点击事件 |
| close | - | - | tag被关闭 |
| change | boolean | boolean | 切换选中状态时触发 |
| update:checked |  |  | 状态发生变化时触发 |

## :corn: slot插槽
默认default

## :green_salad: ref方法
无


## :couplekiss: 文档贡献
此页文档由[夏天](https://gitee.com/Xia_5718)贡献，如果对该框架感兴趣的可以参与我们一同进步！