# TMUI4x 国际化 (i18n) 使用文档

## 概述

TMUI4x 国际化插件是一个专为 uni-app 设计的多语言解决方案，支持 Vue I18n 标准 API，提供完整的国际化功能。

## 特性

- 🌍 支持多语言切换
- 🔢 数字格式化
- 📅 日期时间格式化
- 📊 复数规则支持
- 🔤 字符串插值
- ⚡ 高性能类型安全
- 📱 跨平台兼容

## 快速开始

### 1. 安装和配置

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import tmui from '@/uni_modules/tm-ui'

const app = createApp(App)

// 配置 TMUI
app.use(tmui, {
  language: 'zh-Hans',
  i18n: {
    locale: 'zh-Hans',
    fallbackLocale: 'en',
    messages: {
      'zh-Hans': {
        welcome: '欢迎使用 TMUI',
        hello: '你好，{name}！',
        count: '你有 {count} 条消息 | 你有 {count} 条消息'
      },
      'en': {
        welcome: 'Welcome to TMUI',
        hello: 'Hello, {name}!',
        count: 'You have {count} message | You have {count} messages'
      }
    }
  }
})

app.mount('#app')
```

### 2. 基本使用

```typescript
import {$i18n} from "@/uni_modules/tm-ui"
// 在任何组件中使用
export default {
  mounted() {
    // 基础翻译
    console.log($i18n.t('welcome'))
    
    // 带参数的翻译
    console.log($i18n.t('hello', { name: 'World' }))
    
    // 复数形式
    console.log($i18n.t('count', 1)) // 单数
    console.log($i18n.t('count', 5)) // 复数
  }
}
```

## API 参考

### 核心方法

#### `t(key, ...args)` - 翻译方法

主要的翻译方法，支持多种参数格式：

导入：

```typescript
import {$i18n} from "@/uni_modules/tm-ui"
```

```typescript
// 基础翻译
$i18n.t('welcome')

// 带插值参数
$i18n.t('hello', { name: 'Alice' })

// 复数形式
$i18n.t('count', 1) // 单数
$i18n.t('count', 5) // 复数

// 指定语言
$i18n.t('welcome', 'en')

// 复数 + 插值参数
$i18n.t('count', 3, { count: 3 })
```

#### `n(value, formatName?, options?)` - 数字格式化

```typescript
// 基础数字格式化
$i18n.n(1234.56) // "1234.56"

// 货币格式化
$i18n.n(1234.56, null, {
  style: 'currency',
  currency: 'CNY',
  local: 'zh-CN'
}) // "¥1,234.56"

// 百分比格式化
$i18n.n(0.1234, null, {
  style: 'percent',
  local: 'zh-CN'
}) // "12.34%"

// 使用预定义格式
$i18n.n(1234.56, 'currency') // 使用预定义的货币格式
```

#### `d(value, formatName?, options?)` - 日期时间格式化

```typescript
// 基础日期格式化
$i18n.d(new Date()) // "2025-1-15"

// 使用预定义样式
$i18n.d(new Date(), null, {
  dateStyle: 'full',
  local: 'zh-CN'
}) // "2025年1月15日 星期三"

// 自定义格式
$i18n.d(new Date(), null, {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  local: 'zh-CN'
}) // "2025年一月15日"

// 时间格式化
$i18n.d(new Date(), null, {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  local: 'zh-CN'
}) // "14:30:25"
```

#### `rt(timeValue, unit?, locale?)` - 相对时间

```typescript
// 相对时间格式化
$i18n.rt(Date.now() - 60000, 'minute') // "1分钟前"
$i18n.rt(Date.now() + 3600000, 'hour') // "1小时后"

// 智能单位选择
$i18n.rt(Date.now() - 7200000) // 自动选择最合适的单位
```

### 语言管理

#### `setLocale(locale)` - 设置语言

```typescript
// 切换语言
$i18n.setLocale('en')
$i18n.setLocale('zh-Hans')
$i18n.setLocale('ja')
```

#### `getLocale()` - 获取当前语言

```typescript
const currentLang = $i18n.getLocale()
console.log(currentLang) // "zh-Hans"
```

#### `mergeLocaleMessage(locale, messages)` - 动态添加语言

```typescript
// 动态添加新的翻译内容
$i18n.mergeLocaleMessage('zh-Hans', {
  newKey: '新的翻译内容',
  nested: {
    key: '嵌套的翻译'
  }
})
```

#### `te(key, locale?)` - 检查翻译键是否存在

```typescript
// 检查翻译键是否存在
if ($i18n.te('welcome')) {
  console.log('翻译键存在')
}

// 检查特定语言的翻译键
if ($i18n.te('welcome', 'en')) {
  console.log('英文翻译键存在')
}
```

#### `availableLocales()` - 获取可用语言列表

```typescript
const locales = $i18n.availableLocales()
console.log(locales) // ["zh-Hans", "en", "ja"]
```

## 高级功能

### 复数规则

支持自定义复数规则：

```typescript
// 在配置中设置复数规则
app.use(tmui, {
  i18n: {
    pluralRule: (choice, choicesLength) => {
      // 中文复数规则
      if (choice === 0) return 0
      if (choice === 1) return 1
      return 2
    }
  }
})

// 使用复数
const message = $i18n.t('count', 0) // 零
const message = $i18n.t('count', 1) // 单数
const message = $i18n.t('count', 5) // 复数
```

### 字符串插值

支持多种插值方式：

```typescript
// 命名插值
$i18n.t('hello', { name: 'Alice', age: 25 })

// 位置插值
$i18n.t('welcome', ['World', 'TMUI'])

// 混合使用
$i18n.t('info', { name: 'Alice' })
```

### 数字格式化选项

完整的数字格式化配置：

```typescript
$i18n.n(1234.56, null, {
  style: 'currency',           // 样式：decimal, currency, percent
  currency: 'CNY',            // 货币代码
  local: 'zh-CN',             // 语言代码
  currencyDisplay: 'symbol',  // 货币显示方式
  useGrouping: true,          // 使用千分位分隔符
  minimumIntegerDigits: 1,    // 最小整数位数
  minimumFractionDigits: 2,   // 最小小数位数
  maximumFractionDigits: 2    // 最大小数位数
})
```

### 日期时间格式化选项

丰富的日期时间格式化配置：

```typescript
$i18n.d(new Date(), null, {
  local: 'zh-CN',                    // 语言代码
  calendar: 'gregory',               // 日历系统
  timeZone: 'Asia/Shanghai',         // 时区
  hour12: false,                     // 12小时制
  dateStyle: 'full',                 // 日期样式
  timeStyle: 'medium',               // 时间样式
  weekday: 'long',                   // 星期显示
  year: 'numeric',                   // 年份显示
  month: 'long',                     // 月份显示
  day: 'numeric',                    // 日期显示
  hour: '2-digit',                   // 小时显示
  minute: '2-digit',                 // 分钟显示
  second: '2-digit'                  // 秒显示
})
```

## 配置选项

### 完整配置示例

```typescript
app.use(tmui, {
  language: 'zh-Hans',
  i18n: {
    locale: 'zh-Hans',                    // 当前语言
    fallbackLocale: 'en',                // 回退语言
    messages: {},                         // 翻译消息
    datetimeFormats: new Map(),          // 日期时间格式
    numberFormats: new Map(),            // 数字格式
    modifiers: new Map(),                // 字符串修饰器
    pluralRules: new Map(),              // 复数规则
    missing: null,                       // 缺失翻译处理函数
    missingWarn: true,                   // 缺失翻译警告
    fallbackWarn: true,                  // 回退语言警告
    fallbackRoot: true,                  // 回退到根实例
    fallbackFormat: false,               // 回退格式化
    unresolving: true,                   // 允许未解析的翻译键
    postTranslation: null,               // 翻译后处理函数
    warnHtmlMessage: true,               // HTML消息警告
    escapeParameter: true,               // 转义参数
    inheritLocale: true,                 // 继承父级语言设置
    warnHandler: (msg, err) => {},      // 警告处理器
    pluralRule: null,                    // 默认复数规则
    globalInjection: true,               // 全局注入
    allowComposition: true,              // 允许组合式API
    legacy: true                         // 遗留模式
  }
})
```

## 最佳实践

### 1. 语言文件组织

```typescript
// 按模块组织翻译文件
const messages = {
  'zh-Hans': {
    common: {
      confirm: '确认',
      cancel: '取消',
      save: '保存'
    },
    user: {
      profile: '个人资料',
      settings: '设置'
    }
  }
}
```

### 2. 动态语言切换

```typescript
// 语言切换函数
function changeLanguage(locale: string) {
  $i18n.setLocale(locale)
  // 保存到本地存储
  uni.setStorageSync('language', locale)
  // 触发页面刷新或重新渲染
}
```

### 3. 错误处理

```typescript
// 自定义缺失翻译处理
app.use(tmui, {
  i18n: {
    missing: (locale, key) => {
      console.warn(`Missing translation: ${locale}.${key}`)
      return `[${key}]` // 返回键名作为占位符
    }
  }
})
```

### 4. 性能优化

```typescript
// 预加载语言包
const preloadLanguages = ['en', 'ja', 'ko']
preloadLanguages.forEach(locale => {
  // 异步加载语言包
  import(`./locales/${locale}.json`).then(messages => {
    $i18n.mergeLocaleMessage(locale, messages.default)
  })
})
```

## 常见问题

### Q: 如何支持新的语言？

A: 使用 `mergeLocaleMessage` 方法动态添加：

```typescript
$i18n.mergeLocaleMessage('fr', {
  welcome: 'Bienvenue',
  hello: 'Bonjour, {name}!'
})
```

### Q: 如何处理复数形式的翻译？

A: 使用 `|` 分隔符：

```typescript
// 翻译文件
{
  "count": "你有 {count} 条消息 | 你有 {count} 条消息"
}

// 使用
$i18n.t('count', 1)  // "你有 1 条消息"
$i18n.t('count', 5)  // "你有 5 条消息"
```

### Q: 如何格式化货币？

A: 使用 `n` 方法配合货币选项：

```typescript
$i18n.n(1234.56, null, {
  style: 'currency',
  currency: 'CNY',
  local: 'zh-CN'
})
```

### Q: 如何获取相对时间？

A: 使用 `rt` 方法：

```typescript
$i18n.rt(Date.now() - 60000, 'minute') // "1分钟前"
```

## 更新日志

- **v1.0.0** - 初始版本，支持基础翻译功能
- **v1.1.0** - 添加数字和日期时间格式化
- **v1.2.0** - 支持复数规则和字符串插值
- **v1.3.0** - 优化性能和类型安全

## 技术支持

如有问题或建议，请访问：
- 官方网站：https://tmui.design
- 文档：https://tmui.design/docs
- GitHub：https://github.com/tmui4x

---

*本文档基于 TMUI4x v1.3.0 版本编写*
