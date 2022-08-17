---
title: 自带JS工具库
---

<dirtoc></dirtoc>

##### router tmui.design

# 路由守卫   <Badge type="danger" text="v3.0.77+" vertical="middle" />


### :tada: 路由守卫 router 如何安装

请一定在应用目录/src/目录或者hbx项目目录创建router/index.ts<br>
index.ts内容如下，请直接复制到创建的文件中。

::: details 展开文件内容
@[code ts](router/index.ts)
:::

每个色子函数都会返回arg参数如下:

```ts
interface beforeRouterOpts {
	path:string,//当前页面路径，不含前缀 /
	opts?:any,//页面参数
	context:ComponentPublicInstance|null,
}
```

### :tada: 路由守卫 useTmRouterBefore

这个是在created（不含）之前执行的勾子函数。就每个访问页面前都将执行本函数，你可以在这里判断用户是否有权限访问本页面，导航至其它页面<br>
如下示例，访问user之前检查是否登录，本地是否有token值.
```
/**
 * 路由访问前执行的函数
 * @param path 页面路径，不带前缀/
 */
export const useTmRouterBefore = (arg:beforeRouterOpts):void=>{
    // 每一个页面在初化前都会执行
    if(!uni.$tm.u.getCookie('token')&&arg.path!='pages/wxaccount/login'){
        // 未登录，跳转到登录页面
        uni.$tm.u.routerTo('/pages/wxaccount/login','redirect')
    }
}

```



### :tada: 路由守卫 useTmRouterAfter

这是在onLoad页面完成后执行的勾子函数,使用同上方法。具体见源码中已经为你注释好在哪使用。