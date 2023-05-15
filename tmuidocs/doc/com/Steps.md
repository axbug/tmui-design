---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 步骤条 Steps
步骤条，可以方便的预览逻辑，事务条理。需要配合tm-steps-item组件，必须放置tm-steps-item组件才能使用。

---

## :hot_pepper: 步骤条 Steps 示例

<webview url="https://tmui.design/h5/#/pages/daohang/steps"></webview>

::: details 示例模板

<<< ../src/pages/daohang/steps.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| direction | String | "horizontal" | 步骤条显示的方向<br> horizontal &#124; vertical |
| current | [Number] | 0 | 当前的步骤。可使用v-model:current |
| defaultCurrent | Number | 0 | 当前默认初始，显示的步骤数。 |
| status | String | "" | 当前步骤的状态。<br> wait &#124; process &#124; finish &#124; error |
| showLine | Boolean | true | 是否显示连线。|
| changeable | Boolean | false | 是否允许点击步骤来切换当前步骤数。 |
| beforeStepChange | [Function,Boolean] | false |  当点击步骤切换前的勾子函数，返回fase将取消切换。可以返回Promise异步。 |
| color | String | 'grey-3' | 未激活时的主题色 |
| activeColor | String | 'primary' | 激活时的主题色。 |
| type | String | 'dot' | 样式dot,number |

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | --- | value | 当前切换步骤时触发。 |
| update:current | --- | --- | 即v-model:current |
| step-click | --- | index | 当点击步骤时触发。 |

## :seedling: Steps-item 参数
| color| [String ] | '' | 当前的主题，默认使用父组件的值 |
| activeColor| [String ] | '' | 激活时的主题，默认使用父组件的值 |
| title| [String ] | '' | 标题 |
| label| [String ] | '' | 标题下方的描述文字 |
| icon| [String ] | '' | 显示步骤图标，图标名称 |
| size| [Number] | '' | 圆点的大小。 |
| width| [Number] | 150 | 宽度。 |

## :corn: slot插槽

默认default

## :green_salad: ref方法
无
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

## :rage: 贡献者：小超1263375375