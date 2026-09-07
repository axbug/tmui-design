1. **MCP 工具优先**：查询组件用法/文档时，优先调用 MCP 工具 `get_component_doc`（传组件名如 tm-cell）；组件清单用 `list_components`；全局配置用 `query_tmui_config`。工具不可用时，才读 `/tmuidocs/doc/com/` 或组件源码。
2. 如果要查询节点信息等时，不可以用ref直接查询需要使用uniapp提供的小程序 api查询节点信息。
3. 写页面时请使用项目目录内：/src/uni_modules/tm-ui内的组件进行开发页面，不能使用其他组件。如果有特殊需要可以自建组件，但是自建组件需要在tm-ui组件库内注册创建等，必须按规范，否则会导致组件库内的组件无法使用。
4. 本项目是uniapp vue3 组合式 TypeScript项目，需要遵循uniapp跨平台规范。
5. 如果在src/pages目录下创建页面，你还要按uniapp规范，在目录/src/pages.json中注册页面。

## 页面开发规范

### 模板结构
- 新建页面使用 Vue3 + TypeScript + `<script setup>` 组合式写法，结构顺序：template、script、style
- 文本必须使用 `<text>` 标签，文本样式类只能写在 text 上
- 扩展组件使用 `uni_modules/tm-ui/components` 目录下的 tm- 系列组件；可使用官方 UniApp 组件
- 样式使用 scss + scoped，类名使用驼峰命名，用类嵌套尽量不平铺
- 页面背景色、导航栏标题等配置在 `src/pages.json`，不要在页面 CSS 中对根节点设置背景色

### 布局与间距
- 采用 flex 盒子模型布局，尽量用 `gap` 代替 `margin` 设置元素间隙
- 页面级卡片间距：`margin: 0 24rpx 24rpx 16rpx`；内容 padding 24rpx；非卡片内容模块 `margin-bottom: 16rpx`
- 列表项（cell 类）间距：`padding: 20rpx 16rpx`
- 所有单位使用 rpx、%、auto 三种；rpx 基于 750 宽设计稿，1px = 2rpx
- 优先使用内置 CSS 类库 `uni_modules/tm-ui/css/tmui.css` 的预置类：`pa-24`、`mt-16`、`gap-12`、`round-6`、`flex-row`、`flex-center` 等；布局间距必须从预置类档位选取，不可自定义任意数值
- `tm-sheet` 可作为卡片/容器使用，但禁止嵌套 tm-sheet，内部用 view/tm-row/tm-col 布局

### 滚动
- 普通页面天然可滚动，禁止额外套 `scroll-view`
- 仅在 swiper-item 内部、横向滚动列表、固定高度局部滚动场景使用 scroll-view
- 需要固定底部栏时：底部栏 `position: fixed`，内容区用占位 view 撑出高度

### 字号与颜色
- 字号档位：大标题 40rpx、标题 34rpx、正文 28rpx（基准）、辅助 24rpx、极小 20rpx；正文行高 1.5
- 文本色：主 #333333、次 #666666、辅助 #999999、禁用 #cccccc
- 背景色：页面 #f5f5f5、卡片 #ffffff、分割线 #eeeeee
- 组件颜色通过 prop 传颜色名（primary/success/danger/warn/info），不直接写色值

### 下拉刷新
- 页面级下拉刷新：pages.json 开启 `enablePullDownRefresh`，配合 `onPullDownRefresh`/`onReachBottom` 生命周期
- 局部区域刷新：使用 `tm-pull-refresh` 组件，不要用 scroll-view 自行实现