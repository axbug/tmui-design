---
name: uniappTmui3.2开发
description: "创建页面；自定义组件；修改布局结构；优化布局结构"
---

# UNIAPP 开发规范
使用 Uniapp Vue + TS + CSS 进行三类开发，规范分开遵循：

## 使用场景
页面/组件开发，在所有*.vue文件中template部分，使用uni_modules/tm-ui/components目录下的组件 + 官方UniApp组件写业务页面及开发。

## 页面及组件模板
采用Vue+TypeScript(强类型)+CSS（Scss)开发发。模板请见示例 page-template.md

## 页面注册规范
在 `src/pages/` 下创建页面文件后，必须在 `src/pages.json` 的 `pages` 数组中注册该页面，否则无法访问。

### 标准页面注册
页面背景色、导航栏标题、导航栏颜色等都在 `pages.json` 中配置，不要在页面 CSS 中对根节点设置背景色。
```json
{
    "path": "pages/目录/页面名",
    "style": {
        "navigationBarTitleText": "页面标题",
        "navigationBarBackgroundColor": "#ffffff",
        "navigationBarTextStyle": "black",
        "backgroundColor": "#f5f5f5"
    }
}
```

### 自定义导航页面
使用 `navigationStyle: "custom"` 时，系统导航栏隐藏，不需要配置导航相关属性，页面需自行实现导航栏（如使用 tm-navbar）。
```json
{
    "path": "pages/目录/页面名",
    "style": {
        "navigationBarTitleText": "页面标题",
        "navigationStyle": "custom"
    }
}
```

## 项目工具库规范
项目在 `src/libs/` 下提供了通用工具，页面开发中必须复用这些工具，不要自行重写请求/路由等逻辑。

| 文件 | 说明 | 用法 |
|------|------|------|
| `src/libs/request.ts` | 基于 Axios 的请求封装，含拦截器、token 管理、错误提示 | 通过 `ApiRequestSet()` 创建请求实例 |
| `src/libs/api.ts` | 接口集合 + 分页列表 composable | 接口定义在 `api` 对象中；分页列表使用 `useRequestPageList()` |
| `src/libs/router.ts` | 路由拦截器，含权限判断 | 项目已全局注册，页面跳转自动经过拦截 |

### 发起请求
```typescript
import { ApiRequestSet } from "@/libs/request"

const req = ApiRequestSet({ showLoading: true, showError: true })
const result = await req.post<ResponseData<any>>('/api/xxx', { id: 1 })
```

### 分页列表
页面中的分页列表场景，使用 `useRequestPageList` composable，不要自行管理分页状态：
```typescript
import { useRequestPageList } from "@/libs/api"

const { list, isLoading, isMore, isEmpty, isError, reset, getListData } = useRequestPageList()

// 加载数据
await getListData('/api/list', { category: 'news' })
// 刷新重置
reset()
await getListData('/api/list')
```

### 接口定义
新增接口统一写在 `src/libs/api.ts` 的 `api` 对象中：
```typescript
export const api = {
    async getNewsList(params: Record<string, any>) {
        const res = await ApiRequestSet({ showLoading: false }).post<ResponseData<any>>('/news/list', params)
        return res.data.data
    }
}
```

## 下拉刷新与触底加载规范

### 页面级刷新
整个页面的下拉刷新和触底加载，使用 uniapp 自带的页面生命周期，在 `pages.json` 中启用：
```json
{
    "path": "pages/目录/页面名",
    "style": {
        "navigationBarTitleText": "页面标题",
        "enablePullDownRefresh": true
    }
}
```
页面中通过生命周期钩子响应：
```typescript
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'

onPullDownRefresh(async () => {
    reset()
    await getListData('/api/list')
    uni.stopPullDownRefresh()
})

onReachBottom(async () => {
    await getListData('/api/list')
})
```

### 局部刷新
页面内局部区域的下拉刷新（如 tabs 下的某个列表区域），使用 `tm-pull-refresh` 组件，不要用 `scroll-view` 自行实现：
```vue
<tm-pull-refresh
    height="100%"
    :pull-refresh="onRefresh"
    :bottom-refresh="onLoadMore"
>
    <!-- 列表内容 -->
</tm-pull-refresh>
```
```typescript
const onRefresh = async (): Promise<boolean> => {
    reset()
    await getListData('/api/list')
    return true
}

const onLoadMore = async (): Promise<boolean> => {
    await getListData('/api/list')
    return true
}
```

## 页面滚动规范
uniapp 页面本身自带整页滚动能力，不要在页面中额外套 `scroll-view` 来实现内容滚动。

### 禁止滥用 scroll-view
- **普通页面**（详情页、表单页等）：页面天然可滚动，直接平铺内容即可，不要套 `scroll-view`。
- **需要固定底部栏的页面**：底部栏使用 `position: fixed` 固定，内容区域用一个占位 view 撑出底部栏的高度，让页面原生滚动。
```vue
<template>
    <view>
        <!-- 页面内容，自然滚动 -->
        <view class="bottomBarPlaceholder"></view>
        <view class="bottomBar">
            <!-- 固定底部操作栏 -->
        </view>
    </view>
</template>
<style lang="scss" scoped>
.bottomBarPlaceholder {
    height: calc(96rpx + env(safe-area-inset-bottom));
}
.bottomBar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 16rpx 24rpx;
    padding-bottom: calc(16rpx + env(safe-area-inset-bottom));
    background-color: #ffffff;
    z-index: 10;
}
</style>
```

### 只在以下场景使用 scroll-view
- **swiper-item 内部**：swiper 内的每个面板需要独立滚动时（如 tabs + swiper 联动）
- **横向滚动列表**：需要水平滑动的内容区域，使用 `scroll-x`
- **固定高度的局部滚动区域**：明确需要局部滚动且高度固定的场景

## 页面布局规范

### 标签使用规范
- 可以使用UniApp标准的组件库如：view,text,video等等
- 文本必须使用text标签，文本样式类只能写在text上不可以使用其它标签。
- 扩展组件使用uni_modules/tm-ui/components目录下的组件。
### 布局节点嵌套规范
布局时不要无限嵌套，尽量减少节点数量，以最小节点数量完成布局。以提升性能渲染为基准要求。

### tm-sheet 使用规范
`tm-sheet` 可作为卡片/容器使用（自带圆角、投影、主题色等能力），但禁止嵌套使用。外层用一层 `tm-sheet` 后，内部使用 `view`、`tm-row`、`tm-col` 等进行布局，不要再嵌套 `tm-sheet`。
```vue
<!-- 正确：外层一个 tm-sheet，内部用 view/tm-row 布局 -->
<tm-sheet>
    <tm-row>
        <tm-col :span="6"><text>左侧</text></tm-col>
        <tm-col :span="6"><text>右侧</text></tm-col>
    </tm-row>
</tm-sheet>

<!-- 错误：tm-sheet 嵌套 tm-sheet -->
<tm-sheet>
    <tm-sheet>
        <text>内容</text>
    </tm-sheet>
</tm-sheet>
```
#### 布局模型规范
采用flex box盒子模型，这是一个标准的css布局模型,请以此模型为标准进行合理的布局。尽量采用gap代替margin设置间隙。


## CSS使用规范

### 预置类优先
项目内置了 CSS 类库（`uni_modules/tm-ui/css/tmui.css`），布局时优先使用预置类，可满足 95% 日常布局需求。只有当预置类无法满足时，才编写自定义样式。预置类的完整文档见示例 tmui-css.md。

#### 数值映射规则（重要）

预置类的数值单位全部是 **rpx**，分为两套命名：

| 类型 | 命名格式 | 计算公式 | 示例 |
|------|---------|---------|------|
| 间距（padding/margin） | `{方向}-{N}` | 直接 = Nrpx | `pa-24` = 24rpx、`mt-16` = 16rpx |
| 间距（padding/margin）| `{方向}-n{N}` | N × 4rpx | `pa-n6` = 24rpx、`py-n5` = 20rpx |
| 间隙（gap） | `gap-{N}` | N × 2rpx | `gap-12` = 24rpx、`gap-10` = 20rpx |
| 圆角（round） | `round-{N}` | N × 4rpx | `round-6` = 24rpx、`round-3` = 12rpx |
| 阴影（shadow） | `shadow-{N}` | 偏移 = N×2rpx | `shadow-5` = 10rpx偏移 |

方向缩写：`pa`(全部)、`pt/pr/pb/pl`(上右下左)、`px`(水平)、`py`(垂直)、`ma/mt/mr/mb/ml/mx/my`(外边距同理)

**数值范围约束（必须遵守）：**

预置类的数值范围即设计规范允许的间距档位，目的是强制全局间距统一。**禁止使用不存在的类名**（如 `gap-100`、`pa-n30` 等）。各类型可用范围：

| 类型 | 普通格式范围 | 实际rpx范围 | n格式范围 | 实际rpx范围 |
|------|-------------|------------|----------|------------|
| 间距 padding/margin | 0 ~ 25 | 0 ~ 25rpx | n1 ~ n25 | 4 ~ 100rpx |
| gap | 1 ~ 25 | 2 ~ 50rpx | — | — |
| round | 0 ~ 25 | 0 ~ 100rpx | — | — |
| shadow | 0 ~ 25 | — | — | — |

布局间距必须从上述档位中选取，不可自定义任意数值。只有特殊场景（如渐变背景、safe-area 适配、固定定位等）确实无法用预置类表达时，才允许写自定义 CSS 间距值。

换算速查：
- 要 **24rpx** 间距：用 `pa-24` 或 `pa-n6`（6×4=24）
- 要 **16rpx** 间距：用 `pa-16` 或 `pa-n4`（4×4=16）
- 要 **20rpx** gap：用 `gap-10`（10×2=20）
- 要 **24rpx** 圆角：用 `round-6`（6×4=24）

#### 常用预置类速查

- **Flex 布局**：`flex`、`flex-row`、`flex-col`、`flex-center`、`flex-between`、`flex-wrap`
- **Flex 定位**：`flex-row-center-center`（横向居中）、`flex-col-top-center`（纵向上中）等
- **间距**：`pa-24`（四周24rpx）、`px-n6`（水平24rpx）、`mt-16`（上16rpx）、`gap-12`（间隙24rpx）
- **文字**：`text-size-n`（正常字号）、`text-weight-b`（加粗）、`text-align-center`（居中）
- **圆角**：`round-6`（圆角24rpx）、`round-3`（圆角12rpx）、`rounded`（50%圆角）
- **布局**：`fulled`（宽100%）、`overflow`（溢出隐藏）、`nowrap`（不换行）
- **Grid**：`grid grid-col-3`（3列网格）

```vue
<!-- 用预置类实现横向居中两边对齐 -->
<view class="flex flex-row flex-row-center-between pa-24">
    <text class="text-size-n text-weight-b">标题</text>
    <text class="text-size-s">更多</text>
</view>
```

### 自定义样式规范
当预置类不满足需求时，编写自定义样式需遵循：

示例模板见 css-rule.md
- css代码必须使用scss语法组织样式树。
- 类的命名必须使用驼峰命名法，例如：.componentName。
- 使用类嵌套尽量不平铺。

### 单位使用规范
所有单位必须使用rpx,%,auto三种单位。
rpx基于750宽设计稿，换算关系：1px = 2rpx。在设置宽度、间距、字号等数值时，将设计稿的px值乘以2得到rpx值。
写一个11px的字号：
```css
font-size: 22rpx;
```
写一个18px的字号：
```css
font-size: 36rpx;
```
## 样式设计规范
我们主要是以手机端为主。
分析间距，字号，投影，边线，圆角，是否卡片化效果。

### 间距规范

1. 页面级间距，指布局的内容属性页面根节点的直接子节点。分两种情况
    - 卡片化：本身有背景需要设置margin,padding，margin两边为24rpx,底部16rpx如：```margin:0 24rpx 24rpx 16rpx```;内容padding间隙为24rpx,如：``` padding:24rpx; ```
    - 非卡片化：本身没有背景，不需要设置两边margin，但需要上下间隙时，如：```margin-bottom: 16rpx;```;内容padding间隙为24rpx,如：``` padding:24rpx; ```

    页面级卡片化间距设置:
    ```vue
    <template>
        <view>
            <view class="card"></view>
        </view>
    </template>
    <script lang="ts" setup>
    </script>

    <style lang="scss" scoped>
        .card{
            margin:0 24rpx 24rpx 16rpx;
            padding:24rpx;
        }
    </style>

    ```
    页面级内容间距设置:
    ```vue
    <template>
        <view>
            <view class="content"></view>
        </view>
    </template>
    <script lang="ts" setup>
    </script>

    <style lang="scss" scoped>
        .content{
            margin-bottom:16rpx;
            padding:24rpx;
        }
    </style>

    ```

2. 容器间距
一般是卡片之间，或者内容模块之间，下间距采用margin:16rpx；如果是左右排列时需要间距采用margin设置左右20rpx；
卡片上下容器：
    ```vue
    <template>
        <view class="card">卡片1</view>
        <view class="card">卡片2</view>
    </template>
    <style lang="scss" scoped>
    .card{
        margin:0  24rpx  24rpx 16rpx;
        padding:24rpx;
    }
    </style>
    ```
    内容模块/容器上下：
    ```vue
    <template>
        <view class="content">内容1</view>
        <view class="content">内容2</view>
    </template>
    <style lang="scss" scoped>
    .content{
        margin-bottom:16rpx;
        padding:24rpx;
    }
    </style>
    ```

    内容/卡片/容器左右排列,使用gap设置间距：
    ```vue
    <template>
        <view class="container">
            <view class="content">内容1</view>
            <view class="content">内容2</view>
            <view class="content">内容2</view>
        </view>
    </template>
    <style lang="scss" scoped>
    .container{
        display:flex;
        flex-wrap:wrap;
        flex-direction:row;
        gap:20rpx;
        .content{
            padding:24rpx;
        }
    }

    </style>
    ```

3. 列表间距
如果像cell这种列表项，内容之间采用padding作为间距上下采用20rpx；左右采用16rpx；如：```padding: 20rpx 16rpx;```
    ```vue
    <template>
        <view>
            <view class="cell" > 列表项1 </view>
            <view class="cell" > 列表项1 </view>
        </view>
    </template>
    <style lang="scss" scoped>
    .cell{
        padding: 20rpx 16rpx;
    }
    </style>
    ```




### 字号规范
项目默认基准字号为28rpx（对应14px），以此为基础定义字号体系：

| 级别 | 字号 | 场景 |
|------|------|------|
| 大标题 | 40rpx | 页面主标题、重要数字展示 |
| 标题 | 34rpx | 卡片标题、区域标题 |
| 正文 | 28rpx | 正文内容、列表项文字（默认基准） |
| 辅助 | 24rpx | 辅助说明、次要信息、时间标签 |
| 极小 | 20rpx | 角标、提示文字 |

#### 行高
正文行高建议为1.5倍字号，标题行高建议为1.4倍。
```css
line-height: 1.5;
```

#### 字重
- `font-weight: normal`（400）：正文、辅助文字
- `font-weight: bold`（700）：标题、强调、金额数字

### 颜色使用规范
组件库内置颜色系统（基于 `colors.ts` 的 Map），使用时通过颜色名传递而非直接写色值。

#### 语义色
| 颜色名 | 场景 |
|--------|------|
| primary | 主操作、链接、选中态、聚焦高亮 |
| success | 成功提示、通过状态 |
| danger | 危险操作、删除、错误提示 |
| warn | 警告提示 |
| info | 一般信息提示 |

组件通过 prop 传入颜色名：
```vue
<tm-button color="primary">主按钮</tm-button>
<tm-tag color="danger">删除</tm-tag>
```

#### 文本色层级
自定义样式中的文本颜色层级：
| 层级 | 色值 | 场景 |
|------|------|------|
| 主文本 | #333333 | 标题、正文内容 |
| 次要文本 | #666666 | 次要说明 |
| 辅助文本 | #999999 | 占位符、提示文字 |
| 禁用文本 | #cccccc | 禁用状态 |

#### 背景色
| 层级 | 色值 | 场景 |
|------|------|------|
| 页面背景 | #f5f5f5 | 页面底色 |
| 卡片/容器背景 | #ffffff | 卡片、内容区 |
| 分割线 | #eeeeee | 列表分隔、区域分割 |

### 圆角规范
组件库通过全局配置统一圆角，各场景默认值如下：

| 场景 | 配置项 | 默认值 |
|------|--------|--------|
| 按钮 | buttonRadius | 24rpx |
| 卡片/Sheet | sheetRadius | 24rpx |
| 列表项/Cell | cellRadius | 24rpx |
| 输入框 | inputRadius | 24rpx |
| 弹窗 | modalRadius | 32rpx |
| 抽屉 | drawerRadius | 32rpx |
| 开关 | switchRadius | 64rpx |

组件通过 `round` prop 可覆盖默认圆角，传空值则取全局配置。自定义样式中写圆角时保持与全局一致：
```css
border-radius: 24rpx;
```

### 投影规范
全局默认投影为 `none`（buttonShadow / sheetShadow），保持扁平风格。需要投影时通过组件 `shadow` prop 设置：
- 数字或字符串：自动计算投影大小
- 数组（4项）：[x偏移, y偏移, 模糊大小, 投影颜色]
- `none`：不投影

```vue
<tm-button shadow="4">带投影按钮</tm-button>
```
自定义样式中如需投影：
```css
box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);
```

### 暗黑模式规范
组件库通过全局 `mode` 配置切换明暗主题（`light` / `dark`），tm-ui 组件自动适配暗黑模式。

#### 暗黑模式默认配色
| 配置项 | 色值 | 说明 |
|--------|------|------|
| sheetDarkColor | #141414 | 卡片/Sheet暗黑背景 |
| inputDarkColor | #272727 | 输入框暗黑背景 |
| borderDarkColor | #1c1c1c | 暗黑边框色 |
| backgroundColorContentDark | #000000 | 页面内容区暗黑背景 |

#### 自定义样式暗黑适配
自定义的 CSS 样式不会自动适配暗黑，需要注意：
- 避免在自定义样式中硬编码背景色和文字色，优先使用组件的 `color`/`darkBgColor`/`darkFontColor` 等 prop
- 如果必须写自定义色值，组件提供了 `darkBgColor` 和 `darkFontColor` 等 prop 来覆盖暗黑模式下的颜色

## 组件使用指南
所有扩展组件位于 `uni_modules/tm-ui/components/` 目录下，按使用场景分类如下。
各组件的详细 Props/事件/插槽/方法 文档见示例目录 `examples/components/` 下对应的 md 文件。

### 布局类
| 组件 | 说明 |
|------|------|
| tm-row | 行容器，配合 tm-col 实现栅格布局 |
| tm-col | 列容器，设置 span 控制宽度比例 |
| tm-sheet | 通用容器/卡片，支持圆角、投影、边线、主题色 |
| tm-sticky | 吸顶容器 |
| tm-sticky-header | 吸顶头部，配合滚动联动 |

### 导航类
| 组件 | 说明 |
|------|------|
| tm-navbar | 顶部导航栏 |
| tm-tabbar | 底部标签栏 |
| tm-tabs | 标签页切换 |
| tm-steps | 步骤条容器 |
| tm-steps-item | 步骤条子项 |

### 基础类
| 组件 | 说明 |
|------|------|
| tm-button | 按钮，支持尺寸/皮肤/图标/加载态 |
| tm-icon | 图标 |
| tm-text | 文本，支持主题色和样式 |
| tm-image | 图片，支持懒加载/圆角/加载态 |
| tm-badge | 徽标/角标 |
| tm-tag | 标签 |

### 表单类
| 组件 | 说明 |
|------|------|
| tm-form | 表单容器，提供验证能力 |
| tm-form-item | 表单项，包裹表单控件 |
| tm-input | 输入框/文本域 |
| tm-checkbox | 多选框 |
| tm-checkbox-group | 多选框组 |
| tm-radio | 单选框 |
| tm-radio-group | 单选框组 |
| tm-switch | 开关 |
| tm-stepper | 步进器（数量加减） |
| tm-slider | 滑块 |
| tm-slider-double | 双滑块（范围选择） |
| tm-rate | 评分 |
| tm-code-input | 验证码输入 |
| tm-sign-board | 签名画板 |

### 选择器类
| 组件 | 说明 |
|------|------|
| tm-picker | 通用选择器 |
| tm-picker-view | 嵌入式选择器视图 |
| tm-picker-date | 日期选择器 |
| tm-picker-time | 时间选择器 |
| tm-picker-selected | 多选列表选择器 |
| tm-between-time | 时间区间选择 |
| tm-calendar-multiple | 日历多选 |
| tm-date-view | 日历视图展示 |

### 反馈类
| 组件 | 说明 |
|------|------|
| tm-modal | 模态弹窗 |
| tm-drawer | 抽屉 |
| tm-float-drawer | 浮动抽屉 |
| tm-alert | 警告提示条 |
| tm-popover | 气泡弹出 |
| tm-skeleton | 骨架屏 |
| tm-progress | 进度条 |
| tm-circle-progress | 环形进度条 |
| tm-countdown | 倒计时 |

### 数据展示类
| 组件 | 说明 |
|------|------|
| tm-cell | 单元格/列表项 |
| tm-collapse | 折叠面板容器 |
| tm-collapse-item | 折叠面板子项 |
| tm-money | 金额展示 |
| tm-more | 查看更多 |
| tm-html | 富文本渲染 |
| tm-echart | 图表 |
| tm-avatar-group | 头像组 |

### 业务类
| 组件 | 说明 |
|------|------|
| tm-sku | SKU选择器 |
| tm-slider-menu | 滑动分类菜单 |
| tm-upload-photo | 图片上传 |
| tm-upload-video | 视频上传 |
| tm-pull-refresh | 下拉刷新 |
| tm-switch-slider | 滑动切换 |
| tm-dropdown-menu | 下拉菜单容器 |
| tm-dropdown-item | 下拉菜单子项 |

## 布局场景参考
常见布局场景的结构示例见 layout-patterns.md