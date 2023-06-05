---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 倒计时 Countdown
常用于计时，短信验证码倒计时，活动倒计时等。

---

## :hot_pepper: 倒计时 Countdown 示例

<webview url="https://tmui.design/h5/#/pages/showdata/countdown"></webview>

::: details 示例模板

<<< ../src/pages/showdata/countdown.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
本组件含有公共属性 [公共属性](/spec/组件公共样式.html)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| time | Number | 10*1000 | 单位毫秒，倒计时的总时长 |
| format | String | "DD天HH小时MM分SS秒MS毫秒" | 格式。如果只想要秒：SS秒 |
| autoStart | Boolean | true | 是否自动开始倒计时 |
| color | String | "" | 文字颜色 |

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| @start |  |  | 开始或者继续。 |
| @end |  |  | 停止，直接结束。 |
| @change |  |  | 时间变化时触发。 |

## :corn: slot插槽
| 属性名称 | 类型 | 数据 | 说明 |
| --- | --- | --- | --- |
| default | timeData | 数据 | 倒计时数据 |

#### timeData结构如下
```ts
{
	data:time_data,//时间数据
	finish:isfinish //是否完成计时。
}
//时间数据time_data的结构
{
	day:,//天
	hour:,//小时,
	minutes:,//分.
	seconds:,//秒。
	millisecond:,//毫秒
}
```

## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| resinit |  |  | 重置倒计时，从头开始算起 |
| start |  |  | 开始/继续 |
| pause |  |  | 暂停 |
| stop |  |  | 停止直接结束 |

## 贡献者
Mr.童

