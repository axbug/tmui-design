---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 对话框 Modal
弹出对话框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式

---

## :hot_pepper: 对话框 Modal 示例

<webview url="https://tmui.design/h5/#/pages/fankui/modal"></webview>

::: details 示例模板

<<< ../src/pages/fankui/modal.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE            | APP-NVUE           | 小程序                | WEB/H5             | VUE3/TS            |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)

| 参数名           | 类型             | 默认值     | 描述                                        |
|---------------|----------------|---------|-------------------------------------------|
| mask          | Boolean        | false   | 是否显示遮罩                                    |
| border        | Number         | 1       | 边框粗细                                      |
| show          | Boolean        | false   | 是否显示，双向绑定v-model:show                                      |
| width         | Number         | 500     | 宽                                         |
| height        | Number         | 600     | 高                                         |
| round         | Number, String | 12      | 圆角像素                                      |
| duration      | Number         | 300     | 弹出动画的时间（毫秒）                               |
| overlayClick  | Boolean        | true    | 是否允许点击遮罩关闭                                |
| transprent    | Boolean        | false   | 是否透明效果                                    |
| closeable     | Boolean        | false   | 是否显示关闭按钮（如果显示，标题栏被替换为左标题右关闭按钮）            |
| color         | String         | white   | 主题颜色                                      |
| title         | String         | ''      | 标题                                        |
| okText        | String         | 完成      | 确认按钮文字                                    |
| okColor       | String         | primary | 确认按钮颜色                                    |
| okLinear      | String         | ''      | left:右->左，right:左->右，top:下->上，bottom:上->下 |
| okLlinearDeep | String         | accent  | 渐变深浅，可选：accent,light,dark                 |
| btnRound      | Number         | 24      | 按钮圆角，只有在分享式按钮下才有作用                        |
| hideCancel    | Boolean        | false   | 是否不显示取消按钮                               |
| beforeClose   | Function       | ()=>true    | 在关闭前执行的回调函数,Boolean或者Funciton,函数时返回false即阻止关闭。可以是异步Promise\<boolean\>                      |
| content       | String         | ''      | 正文主体                                      |
| disabled      | Boolean        | false   | 是否禁用                                      |
| titleStyle      | Array, String, Object        | ```[]```   | 标题的样式表                                      |
| zIndex<Badge type="danger" text="v3.1.03+" vertical="middle" />     | Number, String        | 999   | 弹层的层级  |
| teleport     | Boolean        | true   | (仅H5支持禁用)是否使用teleport    |
## :rose: 事件
| 事件名         | 参数   | 返回数据    | 描述               |
|-------------|------|---------|------------------|
| click       |      |         |                  |
| open        |      |         | 显示抽屉             |
| close       |      |         | 关闭抽屉             |
| ok          |      |    arg:any     | 确认按钮             |
| cancel      |      |     arg:any    | 取消按钮             |
| update:show | show | Boolean | 显示状态（更新v-model:show值） |

**手动ref调用open,可以传递参数:arg:any,,然后在上方事件中ok,cancel将会传回open打开时传递的数据**

## :corn: slot插槽
default内容插槽
title标题栏,
button底部按钮栏
trigger可触发弹层的插槽占位内容，比如在里面布局按钮，输入框，点击这块内容可以直接显示弹层。

## :green_salad: ref方法
| 方法名   | 参数  | 返回值 | 描述  |
|-------|-----|-----|-----|
| open  |   arg:any  |     | 显示  |
| close |     |     | 隐藏  |

## :couplekiss: 文档贡献
此页文档由[Kyour](https://github.com/kyour-cn)贡献，如果对该框架感兴趣的可以参与我们一同进步！
