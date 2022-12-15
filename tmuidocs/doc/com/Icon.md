<!--
 * @Autor: 小超1263375375
 * @Date: 2022-06-18 09:58:15
 * @LastEditors: 小超1263375375
 * @LastEditTime: 2022-06-18 10:14:34
 * @FilePath: \tm-vuetify-for-vue3\tmuidocs\doc\com\Icon.md
 * @Description: 
 * 
 * Copyright (c) 2022 by 小超1263375375, All Rights Reserved. 
-->
---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 图标 Icon
图标，提供了一个spin功能用于自动旋转图标在Nvue中使用原生动画

**3.0.86+开始,允许自定图标**
我们现在的图标是以tmicon-xxx,xxx表示图标名称的方式显示图标.<br>
现在开始允许tmicon-icon-xxx,xxx为你的自定图标名称或者nvue下的16进制符号,比如:name="tmicon-icon-e7a6",或者"myicon-icon-e7a6"<br>
前提是你需要自己事先引入你自己的图标css文件(nvue下要先加载字体)到你应用中,这样就可自定义显示自己的图标.

---

### :hot_pepper: 图标 Icon 示例

<webview url="https://tmui.design/h5/#/pages/changyong/icon"></webview>

::: details 示例模板

@[code vue](pages/changyong/icon.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| fontSize | [Number] | 34 | 图标大小 |
| color | String | '' | 图标颜色 |
| name | String | '' | 图标名称 |
| spin | [Boolean] | true | 是否使图标旋转 |
| unit<Badge type="danger" text="v3.0.73+" vertical="middle" /> | [String] | rpx | 字号单位 |
| rotate | [Boolean] | true | 是否允许单独控制图标旋转的角度 |
| rotate-deg | [Number] | 0 | 图标旋转的角度 |

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click |  |  | 点击事件 |
| longpress |  |  | 长按事件 |

### :corn: slot插槽
默认default

### :green_salad: ref方法
无
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

### :rage: 贡献者：小超1263375375