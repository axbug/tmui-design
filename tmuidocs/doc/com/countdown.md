---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 展示组件

# 倒计时器 TmCountdown

倒计时，可以精确到秒，毫秒

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/countdown"></webview>

::: details 示例模板

<<< ../../../src/pages/index/countdown.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| time | number | 0 | - | 
| actions | union | "" | - | 
| format | string | "DD天HH时MM分SS秒" | - | 
| autoStart | boolean | false | - | 
| unit | union | "ss" | - | 
| fontSize | string | "16" | - | 
| color | string | "#333333" | - | 
| captcha | boolean | false | 是否使用验证码模式启用后,整个应用不管你用了多少个此组件,倒计时都是共用的直到结束某一个结束,其它的才可以启用,这样可以保证,任何时候切换页面验证发送都能保证在60秒内的间隔,防止刷验证码. | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change | - | - | - | 
| pause | - | - | - | 
| start | - | - | - | 
| complete | - | - | - | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| default | 名称：binding,status 类型：- 
名称：binding,time 类型：- 
名称：binding,label 类型：- 
名称：binding,ms 类型：- 
名称：binding,ss 类型：- 
名称：binding,mm 类型：- 
名称：binding,hh 类型：- 
名称：binding,dd 类型：- 
 | 插槽 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| start | - | - | 开始计时 | 
| pause | - | - | 暂停计时 | 
| reset | - | - | 重置 | 
| getStatus | - | - | 获取当前状态 | 


