---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 单选框 Radio
Radio 单选框提供多种选值下选择唯一内容的组件，重要：使用时需配合radio-group使用，无法单独使用

---

## :hot_pepper: 单选框 Radio 示例

<webview url="https://tmui.design/h5/#/pages/form/radio"></webview>

::: details 示例模板

<<< ../src/pages/form/radio.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: Radio-group 参数

本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| disabled | Boolean |  false | 是否禁用整个radio-group |
| modelValue / v-model | String / Number / Boolean  | "" | 按钮组标题，显示在左上方 | 
| direction | String | row | 单选按钮排列方向，可选值为 row横排，col为竖排 |
| model | String | radio  | 单选按钮的样式，可选值为：radio 正常单选样式,button 按钮样式 |
| align | String | 'left'  | 对齐方式：left,center,right |

## :seedling: Radio 参数

本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| size | Number | 42 | 单选框的大小 |
| color | String | primary | 单选框的颜色 |
| round | Number | 24 | 单选框圆角值 |
| border | Number | 2 | 单选框边框值 |
| transprent | Boolean | false |单选框背景是否透明 | 
| value | String / Boolean / Number | true | 单选框的值，可以为String，Number 以及 Boolean类型 | 
| v-model | String / Boolean / Number | false | 双向绑定，如果选中后以数组形式给出value值 |
| label | String |  | 单选框显示内容 |
| defaultChecked | Boolean | false | 是否默认选中，不受modelValue控制，直接选中 |
| beforChecked | Function / String / Boolean | false | 选中前的勾子。返回false将阻止选中。也可以返回 Promise异步 |
| disabled | Boolean | false | 是否禁用单选框 |
| fontSize | Number | 26 | label 显示内容的字体大小 |
| icon | String | tmicon-check | 选中状态图标名称，可自定义 |
| custom | Boolean | false | 是否隐藏原本的状态组件 |

## :rose: Radio-group事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | / | 子组件radio的value值 | 当radio选中改变时，返回子组件radio的value值 |

## :rose: Radio事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | / | value | 若当前项被点击，则返回true |

## :corn: slot插槽

:::warning 注意事项

由于uni中的vue3,是经常uni官方修改改.所以在使用带有插槽数据的组件时,如果使用了插槽来自定义内容那么就一定要标准的使用方法,
不可以使用简写,其它其它语法糖.

:::

| 插槽名  | 描述 |
| :--: | :-- |
| default |  带有数据checked,用于模板内知道当前是否选中. |

```vue

<!-- 请注意我这里使用了标准的写法v-slot:default="{checked}" -->
<!-- 如果组件没有插槽数据,变成v-slot:default -->
<!-- 那怕你不使用数据,也要这么写.如果不写template v-slot:default="{checked}"> 将会产生兼容性,已知微信小程序会丢失插槽内容 -->
<tm-radio>
    <template v-slot:default="{checked}">
        <view class="flex flex-row">
            <tm-text label="我已经阅读并同意"></tm-text>
            <view >
                <tm-text   color="primary" label="《合作协议》"></tm-text>
            </view>
        </view>
    </template>
</tm-radio>

```

## :green_salad: ref方法

无

## :rage: 贡献者

[Wicos](http://wicos.me)