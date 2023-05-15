---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 级联器(点选) Cascader
当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

---

## :hot_pepper: 级联器(点选) Cascader 示例

<webview url="https://tmui.design/h5/#/pages/form/cascader"></webview>

::: details 示例模板

<<< ../src/pages/form/cascader.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| followTheme | [Boolean,String] | true | 是否跟随主题 |
| data | Array | [] | 导入的数据，格式下见下方 |
| defaultValue | Array | [] | 默认选中的数据 |
| modelValue | Array | [] | 双向绑定输入数据，同v-model |
| height | Number | 650 | 高度，单位rpx |
| activeColor | String | primary | 激活状态下的颜色。 |
| color | String | white | 背景主题 |
| beforeTabClick | [Function,Boolean] | false | 点击tab切换之前执行的勾子函数。可以是promise.返回假时阻止切换。为true时，切换正常。方便动态加载数据。 |
| beforeCellClick | [Function,Boolean] | false | 点击列表中项目时再自动切换到下一项时之前执行的勾子函数，方便动态加载数据。 |
| slotTabHeigth | Number | 0 | 介于tab和下面选项中间的插槽区域。如果想自定内容在这之间，可以设置高度，将会显示 。 |

data[]格式如下：
```ts
export interface childrenData {
    id:number|string,
    text:string,
    disabled?:boolean,
    children?:Array<childrenData>
}
```

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:modelValue | - | Array | 更新选中数据，为v-model |
| tab-click | index | - | 切换tab事件 |
| cell-click | - | - | 点击项目时触发 |
| change | - | modelValue | 选中改变时返回当前的数据 |


## :corn: slot插槽
默认default，介于tab和下面选项之间的区域插槽。

## :green_salad: ref方法
提供data就是使用data，如果不提供默认的[]空数组，将使用props.data进行刷新同步。
```ts
reFresh(data:Array<childrenData>=[])
```

## :couplekiss: 文档贡献
此页文档由[Sunlight](https://gitee.com/rzg)贡献，如果对该框架感兴趣的可以参与我们一同进步！
