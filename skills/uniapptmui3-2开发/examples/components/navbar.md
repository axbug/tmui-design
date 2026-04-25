---
title: tmui 3.2.0 组件库
---

<script setup>
import webview from '../components/mobileWebview.vue'
import headertips from '../components/headertips.vue'
</script>

<headertips></headertips>

#### 导航组件

# 标题导航 TmNavbar

标题导航,用途页面头部标题。可以默认透明，滚动实现背景可变的标题导航。

## :hot_pepper: 示例

<webview url="https://tmui.design/h5by32/#/pages/index/navbar"></webview>

::: details 示例模板

<<< ../../../src/pages/index/navbar.vue{vue}

:::

## :hot_pepper: 兼容性

平台兼容
|H5|uniAPP|小程序|version|
|---|---|---|---|
|☑️|☑️|☑️|☑️|☑️|1.0.0|

## :seedling: 参数
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| isPlace | boolean | true | 是否底部占位内容，如果为false底部悬空。你的页面内容将自动压在导航栏的底部。 | 
| bgColor | string | 'white' | 背景颜色，注意这是静态时的背景色。 | 
| darkBgColor | string | "#000000" | 暗黑的背景颜色。 | 
| activeBgColor | string | '' | 背景颜色，这是滑动时超过指定本状态栏高度时自动渐变到此颜色如果为空时，不会有动态背景如果提供的是白或者黑，暗黑时自动取反。 | 
| backColor | string | '' | 返回按钮的颜色.默认是取titleColor，如果你单独定义了以你定义的为准 | 
| title | string | $i18n.t('tmui32x.tmNavbar.title') | 标题 | 
| titleColor | string | '#333333' | 默认标题颜色，暗黑是取白，如果有其它需求建议插槽。 | 
| titleActiveColor | string | '#333333' | 动态悬浮时标题颜色,如果为暗黑时，你提供的颜色为白或者黑会反色如果提供的是彩色自动加深或者提亮 | 
| titleFontSize | string | '34' | 标题文字大小 | 
| lrWidth | string | '100' | 右边的宽度。 | 
| llWidth | string | '100' | 左边的宽度。 | 
| zIndex | number | 90 | 层级。 | 
| backErrorPath | string | '/pages/index/index' | 左边按钮默认点击返回上页。但如果上页返回失败（通常见于直接程序启动本面，无法进行上页返回时）失败后返回的页面。默认是首页。 | 
| showNavBack | boolean | true | 是否显示返回按钮。 | 
| linearGradient | string[] | ():string[]=\>[]asstring[] | 渐变背景，如果提供，上面的BgColor背景和暗黑背景将失效。例：['toright','#ff667f','#ff5416'] | 
| linearActiveGradient | string[] | ():string[]=\>[]asstring[] | 动态悬浮时的渐变背景，提供后上面的activeBgColor的背景和暗黑背景将失效。例：['toright','#ff667f','#ff5416'] | 
| staticTransparent | boolean | false | 静态在顶部时是否透明背景 | 
| scrollTop | number | 0 | 如果需要悬浮滚动请在外部页面中监听onPageScroll事件，并把值传到这里。3.2.05开始已经废弃，存在只为兼容之前的版本但已经没有作用了，现在改为内部实现，不需要外部提供。 | 


## :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| fiexdChange | - | - | 当滚动页面时，导航栏位置
与滚动之间的距离差比（0~1）
0表示在顶部，1表示已经超过了导航高
主要是用来类型滚动时设置导航顶部的一些布局变化。 | 
| init | 名称：height,单位px,组件高。, | - | 初始化完成向下发送一个事件用于告知本组件实际的高 | 


## :corn: slot插槽
| 插槽名 | 数据 | 描述 |
| :--: | :--: |  :-- |
| left | 名称：binding,isFiexd 类型：boolean 
 | 左边插槽 | 
| title | - | 标题插槽 | 
| right | 名称：binding,isFiexd 类型：boolean 
 | 右边插槽 | 


## :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |


