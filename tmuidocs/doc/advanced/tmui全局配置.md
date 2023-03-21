---
title: TMUI3进阶指南
---

<dirtoc></dirtoc>

##### 进阶指南 tmui.design

# TMUI 3.0 by tmzdy

本文档将指导你配置全局的属性

::: danger 注意
这些功能将从3.1.0开始逐步完善，有些性质的功能可能会被随时移除。请注意标签说明。
:::

### 注意事项

下面提到的功能模块在后面的版本会一个一个完善，因此有些功能可能不可用，只是作为展望的存在。<br>

### 如何配置？

首先你可准备一个自己的配置文件比如：config.ts：

```ts
//config.ts
export const config = {
  // 在进阶指南中会讲到类型文件的使用。请注意右侧文档栏目。
  // 指定了类型后，在里面输入会有类型提示和校验。
} as Tmui.tmuiConfig;
```

开始引入你的config.ts文件，在main.ts中配置

```ts
// main.ts
import { createSSRApp } from "vue";
import * as Pinia from "pinia";
import tmui from "./tmui";
import App from "./App.vue";
// 为里引入你的配置文件，文件放哪承随便你自己定义。
import {config} from "config"
export function createApp() {
  const app = createSSRApp(App);
  //合并配置到tmui中
  app.use(tmui, {...config} as Tmui.tmuiConfig);
  return {
    app,
    Pinia,
  };
}
```

### 所有配置（完善中）

```ts
interface tmuiConfig {
  /** 自动跟随系统暗黑 */
  autoDark?: boolean;
  /**主题列表 */
  theme?: {};
  /**细化全局的主题配置表 */
  themeConfig?: {
    /**暗黑模式下的一些统一配置 */
    dark?: {
      /**一般的卡片项目暗黑背景 */
      cardColor?: string;
      /**输入框，表单等暗黑背景 */
      inputColor?: string;
      /**禁用输入框，表单等暗黑背景 */
      disableColor?: string;
      /**暗黑下的页面背景 */
      bodyColor?: string;
      /**文本禁用色. */
      textDisableColor?: string;
    };
    /**
     * app整体字体大小的调整比例，
     * 只对使用tm-text组件以及自身组件的字号才会有效果
     */
    globalFontSizeRatio?: number;
    /**
     * 针对不同的主题配置详细的配色方案。
     * 注意这里影响的时主题计算功能的配置
     */
    theme?: {
      /**（如果该组件默认有值就会使用下列属性，如果组件默认为0不会使用。） */
      [key: string]: {
        /**待考虑编辑2023-2-18 00:23:35 */
      };
    };
    /**各个组件的统一配置 */
    component?: componentKeys;
  };
  /**router路由拦截代替外置文件 */
  router?: {
    /**页面访问前执行 */
    useTmRouterBefore(arg: beforeRouterOpts): void;
    /**页面访问后执行 */
    useTmRouterAfter(arg: beforeRouterOpts): void;
  };
  /**用户自定义全局数据 */
  custom?: {
    [key: string]: any;
  };
}
```

### 如何使用

第一种方式：
在任意ts文件中，请输入``` uni.$tm.config.xxx ```
上方的输入在vscode中全局的类型提示

第二种方式：
我已经定义并且hooks合并到全局的pinia中了，可以在组件生命期内，页面模板内调用上方所有配置和数据。
```vue
import {useTmpiniaStore} from '@/tmui/tool/lib/tmpinia';
const store = useTmpiniaStore();
//后面的提示与上方第一种一样，会全局提示。
store.tmuiConfig.xxx
```

### 示例模板

::: details 示例模板

@[code vue](tmui/tool/lib/tmuiconfigDefault.ts)

:::