---
title: 路由守卫
---

#### router tmui.design

# 路由守卫

tm-ui 内置的 uni-app 路由守卫插件，提供页面鉴权拦截、前置守卫、便捷导航方法，覆盖 `navigateTo` / `redirectTo` / `reLaunch` / `switchTab` 以及原生底部导航栏点击。

## 安装

在 `main.ts` 中安装插件：

```typescript
import tmRouter, { router } from '@/uni_modules/tm-ui/router'

export function createApp() {
    const app = createSSRApp(App)
    app.use(Pinia.createPinia())
    app.use(tmUi)

    // 安装路由守卫
    app.use(tmRouter, {
        loginPage: '/pages/login/index',
        tokenKey: 'token',
        mode: 'whitelist',
        list: ['/pages/index/index'],
        tabBarPages: [],
    })

    return { app }
}
```

## 配置项

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| loginPage | `string` | `'/pages/login/index'` | 登录页路径，始终免鉴权，无需加入 list |
| tokenKey | `string` | `'token'` | 本地存储中 token 的 key |
| mode | `'whitelist' \| 'authlist'` | `'whitelist'` | 鉴权模式 |
| list | `string[]` | `[]` | 白名单或鉴权列表 |
| authCheck | `() => boolean` | 检查 `uni.getStorageSync(tokenKey)` | 自定义鉴权函数 |
| tabBarPages | `string[]` | `[]` | tabBar 页面路径，用于原生底部导航栏拦截 |
| onDenied | `(url: string) => void` | `null` | 鉴权失败回调，不提供则 reLaunch 到 loginPage |

## 鉴权模式

### whitelist 模式（默认）

所有页面默认需要鉴权，`list` 中的页面免鉴权。适合后台管理类应用。

```typescript
app.use(tmRouter, {
    loginPage: '/pages/login/index',
    mode: 'whitelist',
    list: [
        '/pages/index/index',    // 首页免登录
        '/pages/about/index',    // 关于页免登录
    ],
})
```

### authlist 模式（反向白名单）

所有页面默认免鉴权，仅 `list` 中的页面需要鉴权。适合内容型应用。

```typescript
app.use(tmRouter, {
    loginPage: '/pages/login/index',
    mode: 'authlist',
    list: [
        '/pages/profile/index',  // 个人中心需要登录
        '/pages/order/index',    // 订单页需要登录
    ],
})
```

两种模式下，`loginPage` 始终免鉴权，无需手动加入 list。

## 导航方法

导入 `router` 实例即可在任意位置使用：

```typescript
import { router } from '@/uni_modules/tm-ui/router'
```

| 方法 | 说明 | 示例 |
| --- | --- | --- |
| `push(url, params?)` | 跳转页面（navigateTo） | `router.push('/pages/detail/index', { id: 1 })` |
| `replace(url, params?)` | 替换页面（redirectTo） | `router.replace('/pages/result/index')` |
| `reLaunch(url, params?)` | 重启应用（reLaunch） | `router.reLaunch('/pages/index/index')` |
| `switchTab(url)` | 切换 Tab（switchTab） | `router.switchTab('/pages/home/index')` |
| `back(delta?)` | 返回（navigateBack） | `router.back()` 或 `router.back(2)` |
| `isAuthenticated()` | 检查当前是否已鉴权 | `if (router.isAuthenticated()) { ... }` |

`params` 会自动序列化为 query 参数：

```typescript
router.push('/pages/detail/index', { id: 123, type: 'goods' })
// 等价于 uni.navigateTo({ url: '/pages/detail/index?id=123&type=goods' })
```

所有导航方法都会自动经过鉴权守卫和 beforeEach 守卫。

## 前置守卫 beforeEach

在 authCheck 之前执行，可注册多个，按顺序执行。

```typescript
router.beforeEach((to, from) => {
    // to:   目标路径（已归一化，含 '/' 前缀）
    // from: 当前路径（首次导航时为空字符串）
    // 返回值：
    //   true / undefined / 不 return → 放行
    //   false → 阻止导航
    //   string → 重定向到该路径
})
```

执行顺序：**beforeEach 守卫链 → authCheck 鉴权 → 执行跳转**

`beforeEach` 返回一个取消函数，调用后移除该守卫：

```typescript
const unregister = router.beforeEach(myGuard)
// 不再需要时：
unregister()
```

## 运行时更新配置

在 Pinia store 初始化后动态更新鉴权函数：

```typescript
// 单独更新 authCheck
router.setAuthCheck(() => {
    const userStore = useUserStore()
    return !!userStore.token
})

// 批量更新任意配置
router.setConfig({
    authCheck: () => !!useUserStore().token,
    list: ['/pages/index/index', '/pages/about/index'],
    onDenied: (url) => {
        uni.showToast({ title: '请先登录', icon: 'none' })
    },
})
```

## tabBar 原生点击拦截

`uni.addInterceptor('switchTab')` 只能拦截编程式调用，无法拦截用户点击原生底部导航栏。配置 `tabBarPages` 后，插件会通过 `app.mixin onShow` 自动拦截原生点击，且不会与普通页面冲突：

```typescript
app.use(tmRouter, {
    loginPage: '/pages/login/index',
    mode: 'whitelist',
    list: ['/pages/index/index'],
    tabBarPages: [
        '/pages/index/index',
        '/pages/cart/index',
        '/pages/my/index',
    ],
})
```

## 场景案例

### 1. 基础鉴权：未登录跳登录页

最简配置，默认读取 `uni.getStorageSync('token')` 判断登录状态：

```typescript
app.use(tmRouter, {
    loginPage: '/pages/login/index',
    mode: 'whitelist',
    list: ['/pages/index/index', '/pages/about/index'],
})
```

未登录用户访问任何非白名单页面，自动 `reLaunch` 到登录页，并携带 `?redirect=原始页面` 参数。

### 2. 登录后跳回原页面

登录页获取 redirect 参数，登录成功后跳回：

```typescript
// pages/login/index.vue
import { router } from '@/uni_modules/tm-ui/router'
import { onLoad } from '@dcloudio/uni-app'

const redirect = ref('')
onLoad((options) => {
    redirect.value = options?.redirect ? decodeURIComponent(options.redirect) : ''
})

async function handleLogin() {
    await doLogin()
    if (redirect.value) {
        router.reLaunch(redirect.value)
    } else {
        router.reLaunch('/pages/index/index')
    }
}
```

### 3. 使用 Pinia store 做鉴权

在 App.vue 中初始化，确保 Pinia 已就绪：

```typescript
// App.vue
import { router } from '@/uni_modules/tm-ui/router'
import { useUserStore } from '@/stores/user'

onLaunch(() => {
    router.setAuthCheck(() => {
        const userStore = useUserStore()
        return !!userStore.token && !userStore.isExpired
    })
})
```

### 4. 已登录用户访问登录页自动跳转首页

```typescript
router.beforeEach((to) => {
    if (to === '/pages/login/index' && router.isAuthenticated()) {
        return '/pages/index/index'
    }
})
```

### 5. VIP / 角色权限控制

```typescript
router.beforeEach((to) => {
    if (to.startsWith('/pages/vip/')) {
        const userStore = useUserStore()
        if (!userStore.isVip) {
            uni.showToast({ title: '需要 VIP 权限', icon: 'none' })
            return false
        }
    }
})
```

### 6. 实名认证拦截

```typescript
router.beforeEach((to) => {
    const needVerify = ['/pages/withdraw/index', '/pages/transfer/index']
    if (needVerify.includes(to) && !useUserStore().isVerified) {
        return '/pages/verify/index'
    }
})
```

### 7. 页面访问埋点

```typescript
router.beforeEach((to, from) => {
    trackEvent('page_view', { to, from, time: Date.now() })
    // 不 return，自动放行
})
```

### 8. 自定义鉴权失败处理

不跳登录页，改为弹窗提示：

```typescript
app.use(tmRouter, {
    loginPage: '/pages/login/index',
    mode: 'whitelist',
    list: ['/pages/index/index'],
    onDenied: (url) => {
        uni.showModal({
            title: '提示',
            content: '请先登录后再访问',
            confirmText: '去登录',
            success(res) {
                if (res.confirm) {
                    const redirect = encodeURIComponent(url)
                    uni.navigateTo({ url: `/pages/login/index?redirect=${redirect}` })
                }
            }
        })
    },
})
```

### 9. 有原生 tabBar 的电商应用

首页和分类页免登录，购物车和我的需要登录：

```typescript
app.use(tmRouter, {
    loginPage: '/pages/login/index',
    mode: 'whitelist',
    list: [
        '/pages/index/index',
        '/pages/category/index',
    ],
    tabBarPages: [
        '/pages/index/index',
        '/pages/category/index',
        '/pages/cart/index',
        '/pages/my/index',
    ],
})
```

用户点击底部"购物车"或"我的"时，如果未登录会自动跳转登录页。

### 10. 动态更新白名单

运营后台控制哪些页面需要登录：

```typescript
// 获取远程配置后更新
const config = await fetchRemoteConfig()
router.setConfig({
    list: config.whitelistPages,
    mode: config.authMode,
})
```
