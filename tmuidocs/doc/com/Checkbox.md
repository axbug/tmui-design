---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 复选框 Checkbox
在一组备选项中进行多选。

---

## :hot_pepper: 复选框 Checkbox 示例

<webview url="https://tmui.design/h5/#/pages/form/checkbox"></webview>

::: details 示例模板

<<< ../src/pages/form/checkbox.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| followTheme | [Boolean,String] | true | 是否跟随主题 |
| size | Number | 42 | 大小 |
| transprent | Boolean | false | 是否透明 |
| color | String | primary | 主题色名称 |
| round | Number | 2 | 圆角0-25，单位rpx |
| border | Number | 2 | 边框 |
| value | [String,Number,Boolean] | true | 选项值，选中后返回的值 |
| modelValue | [String,Number,Boolean] | false | v-model双向绑定，如果选中后以数组形式给出value值 |
| label | [String,Number] | '' | 文右边显示的选项文字 |
| defaultChecked | [Boolean] | false | 默认是否选中状态。不受上方的modelValue控制，直接选中。 |
| beforChecked | [Function,String,Boolean] | false| 选中前的勾子。返回false将阻止选中。也可以返回 Promise异步 |
| disabled | Boolean | false | 是否禁用 |
| fontSize | Number | 28 | 字体大小 |
| indeterminate | [Boolean,String] | false | 半选中状态 |
| closeAni | [Boolean,String] | false | 是否关闭动画 ，对于大批量的数据时，建议关闭动画 |
| icon | String | tmicon-check | 自定义选中的图标名称 |
| custom | Boolean | false | 是否隐藏原本的状态组件 |

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:modelValue | - | Array | 更新选中数据 |
| change | - | modelValue | 复选框选中改变时返回当前的数据 |
| click | - | - | 复选框被点击时执行的函数 |

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
<tm-checkbox>
    <template v-slot:default="{checked}">
        <view class="flex flex-row">
            <tm-text label="我已经阅读并同意"></tm-text>
            <view >
                <tm-text   color="primary" label="《合作协议》"></tm-text>
            </view>
        </view>
    </template>
</tm-checkbox>

```

## :seedling: Group组件参数
Group组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| disabled | Boolean | false | 是否禁用 |
| max | Number | 999 | 最大选中数量 |
| defaultValue | Array | [] | 默认选中数据数组集合 |
| modelValue | Array | [] | v-model双向绑定，如果选中后以数组形式给出value值 |
| direction | String | row | row横排，col为竖排 |
| align | String | 'left'  | 对齐方式：left,center,right |

## :rose: Group组件事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:modelValue | - | Array | 更新选中数据 |
| change | - | modelValue | 复选框选中改变时返回当前的数据 |

## :green_salad: ref方法
无
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

## :couplekiss: 文档贡献
此页文档由[Sunlight](https://gitee.com/rzg)贡献，如果对该框架感兴趣的可以参与我们一同进步！
