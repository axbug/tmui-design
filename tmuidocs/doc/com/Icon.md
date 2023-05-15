---
title: tmui 3.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
</script>

#### 组件库文档 tmui.design

# 图标 Icon
图标，提供了一个spin功能用于自动旋转图标在Nvue中使用原生动画

**3.0.89+开始,允许自定图标,并且作了优化规则**

因很多人看不懂规则，我现在重新写了个规则希望大家能看明白。按理是比较简单的。<br>
1. 下载字体图标，通过iconfont或者其它方式下载字体图标都行
2. 图标的字体名称一定要与前缀相同，以iconfont项目设置为例：前缀```myicon-``` ,字体名称：```myicon```
3. 下载的图标包应该要包含：class的css文件以及ttf的base64文件（用于nvue安装）
4. 引入好css图标，nvue安装好ttf base64图标文件
5. 使用图标比如你有个图标名称叫```music```图标它的unicode符号为```&#xe617```.应该这么使用
```ts
//这就是自定义图标的使用方法，这样在全平台都可显示。
<tm-icon name="myicon-music-e617"></tm-icon>
```
**如何在nvue下安装base64位的ttf文件？**
```ts
import { onBeforeMount } from "vue"
// #ifdef APP-NVUE || APP-PLUS-NVUE
//customfont为你的base64的ttf字体内容
import { customfont } from "./customIcon/customiconfont";
var domModule = weex.requireModule("dom");
const animation = uni.requireNativePlugin("animation");
// #endif

// #ifdef APP-PLUS-NVUE
onBeforeMount(() => {
	//customfont为你的base64的ttf字体内容
  domModule.addRule("fontFace", {
    fontFamily: "myicon", //注意这里必须是驼峰命名，跟上面的css样式对照
    src: "url('data:font/ttf;charset=utf-8;base64," + customfont + "')",
  });
});
// #endif

```

**介绍完毕，如果还看不懂，我也无能为力了**

---

## :hot_pepper: 图标 Icon 示例

<webview url="https://tmui.design/h5/#/pages/changyong/icon"></webview>

::: details 示例模板

<<< ../src/pages/changyong/icon.nvue{vue}

:::

## :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## :seedling: 参数
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

## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click |  |  | 点击事件 |
| longpress |  |  | 长按事件 |

## :corn: slot插槽
默认default

## :green_salad: ref方法
无
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

## :rage: 贡献者：小超1263375375