---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 侧边栏导航 Sidemenu
主要是应用于类目分类,产品分类,过多时的竖向展示切换.

---

### :hot_pepper: 侧边栏导航 sidemenu 示例

<webview url="https://tmui.design/h5/#/pages/daohang/sidemenu"></webview>

::: details 示例模板

@[code vue](pages/daohang/sidemenu.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| width | Number | 750 | 组件宽度 |
| height | Number | 500 | 组件高度 |
| sideWidth | Number | 190 | 侧边菜单栏宽度 |
| itemHeight | Number | 100 | 侧边菜单项目高度 |
| fontSize | Number | 26 | 菜单文字大小 |
| active | Number | 0 | 默认选中的索引,可以使用v-model:active双向绑定 |
| menuFontColor | String | grey | 菜单默认字体颜色 |
| menuActiveFontColor | String | primary | 菜单选中时的字体颜色 |
| menuActiveBgColor | String | white | 菜单项目激活时的背景颜色 |
| menuBarBgColor | String | grey-4 | 侧菜单栏的整体背景色 |
| bodyBgColor | String | white | 右侧内容区域的背景色 |
| unit | String | rpx | 尺寸单位 |
| list | Array | [] | 菜单项目数据 |
| refresh | Boolean | false | 默认加载状态 |
| load | Function | (type: 'pull'|'bottom'|'menu',item:listItem,index:number)=>{} | 默认加载数据的触发函数 |
| firstLoad | Boolean | true | 首次是否进行load数据加载触发状态. |
| disabledBottom | Boolean | false | 是否禁用下拉刷新功能 |
| rangKey | String | text | 菜单名称的字段key |
| isScroll | Boolean | false | 是否自定义右侧滚动区域的插槽，如果是原有的下拉，下拉的滚动组件将不显示并去除。 |


### :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click | / | item:listItem,index:number | 点击菜单项目时触发 |
| change | / | index:number | 改变菜单选项时触发 |
| load | / | type:'loading'\|'success'\|'pull'\|'bottom'\|'menu',index:number | 加载数据时触发此函数 |
| restore | / | - | 重置下拉时触发 |

### :corn: slot插槽

默认右边内容插槽

### :green_salad: ref方法

无


