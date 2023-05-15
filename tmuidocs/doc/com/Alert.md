---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 警告提示 Alert
以横幅的形式显示提示内容，用于警告、通知、提示等场景。

---

## :hot_pepper: 警告提示 Alert 示例

<webview url="https://tmui.design/h5/#/pages/fankui/alert"></webview>

::: details 示例模板

<<< ../src/pages/fankui/alert.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE           | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)

| 参数名         | 类型             | 默认值      | 描述                |
|-------------|----------------|----------|-------------------|
| transprent  | Boolean        | false    | 是否透明效果            |
| border      | Number, String | 0        | 边框粗细              |
| round       | Number, String | 0        | 圆角像素              |
| margin      | Array          | [32, 24] | 外边距               |
| padding     | Array          | [32, 24] | 内边距               |
| content     | `[item]`         | []       | 主体内容数组（格式见下方说明）   |
| autoPlay    | Boolean        | true     | 是否开启轮播（多个主体的情况有效） |
| duration    | Number         | 3000     | 轮播间隔（毫秒）          |
| closable    | Boolean        | true     | 是否显示关闭按钮          |
| hidnAniName | String         | zoom     | 关闭窗体的动画           |
| height      | Number         | 160      | 高度                |
| maxLine     | Number         | 1        | 内容最大显示几行，超出变成省略号  |
| showDot<Badge type="danger" text="v3.0.63+" vertical="middle" />     | Boolean        | false        | 是否显示底部的轮播数字序号，默认不显示  |

- 主体内容数据参数
```javascript
item {
    icon: string, //图标
    title: string, //标题
    content: string //内容
}
```

## :rose: 事件
| 事件名   | 参数  | 返回数据 | 描述   |
|-------|-----|------|------|
| click |     |      | 点击事件 |

## :green_salad: slot 插槽

right,右边区域图标插槽.

## :green_salad: ref方法
无

## :couplekiss: 文档贡献
此页文档由[Kyour](https://github.com/kyour-cn)贡献，如果对该框架感兴趣的可以参与我们一同进步！
