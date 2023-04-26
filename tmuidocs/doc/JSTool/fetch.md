---
title: 自带JS工具库
---

<dirtoc></dirtoc>

##### JSTool tmui.design

# JS工具库  <Badge type="danger" text="v3.0.5+" vertical="middle" />

**文档还未完成**

### :tada: 如何调用

在全局任意位置均可调用，部分方法需要你导入相关包（主要是为了包大小考虑）<br>
***为什么在uni中是$tm而在上下文中使用tm。因为$tm在上下文里被系统使用了***

在vue或者nvue页面中调用
```vue
<script lang="ts" setup>
import {getCurrentInstance} from "vue"
const {proxy} = getCurrentInstance();

//可以在任意js中调用
uni.$tm.fetch.get(url) //访问网络请求
//只在本上下文件中可以用如下：
proxy.tm.fetch.get(url)

</script>

```

### :tada: 参数说明
请求返回的数据类型：
```ts
type fetchConfigResponseType= "arraybuffer"|"text";
```
请求的数据类型fetchConfigDataType：
```ts
type fetchConfigDataType = "json"|"text";
```
合法请求类型fetchConfigMethod如下：
```ts

type fetchConfigMethod= "GET"|"POST"|"PUT"|"DELETE"|"CONNECT"|"HEAD"|"OPTIONS"|"TRACE";

```
请求中的fetchConfig类型如下：
```ts
interface fetchConfig {
    url?:string,
    data?:object|string|ArrayBuffer,
	/** 定义成功的服务器返回的状态码成功的标志 */
	statusCode?:number,
    header?:object,
    method?:fetchConfigMethod,
    timeout?:number,
    dataType?:fetchConfigDataType,
    responseType?:fetchConfigResponseType,
    sslVerify?:boolean,
    withCredentials?:boolean,
    firstIpv4?:boolean,
    success?:Function,
    fail?:Function,
    complete?:Function
}

```

请求成功后,success(result),其中result结构：
```ts
interface fetchConfigSuccessType{
    data:object|string|ArrayBuffer,
    statusCode:number,
    header:object,
    cookies:Array<string>
}
```

### :tada: GET请求
```ts
uni.$tm.fetch.get(url:string,data:object={},opts:fetchConfig={})

```
### :tada: POST请求
```ts
uni.$tm.fetch.post(url:string,data:object={},opts:fetchConfig={})

```
### :tada: 自定义请求
`request`为自定义访问请求。
```ts
uni.$tm.fetch.request(cog:fetchConfig = config,beforeFun?:Function,afterFun?:Function,complete?:Function)

```

其中beforeFun：访问请求前执行的勾子函数。可以是`Promise<fetchConfig>`，请一定要返回一个请求配置，可以直接返回 {},也可以返回false，将阻止请求。这里的作用，主要是用来
请求前的一些参数配置。
```ts
beforeFun(cog:fetchConfig)
```
afterFun:请求链接成功statusCode==200,的情况下。立即执行的勾子函数。可以是`Promise<fetchConfigSuccessType>`,可以直接返回 {}。这里的作用，主要是用来
对返回的结果数据进行修改。如果不修改请直接返回{}。
```ts
afterFun(result:fetchConfigSuccessType)
```
complete：请求完成后执行。
```ts
complete(result:fetchConfigSuccessType)
```

### lwu-request请求库
本库需要你自行import使用，与我上方自带的fetch不是同一个库。
该库原作者链接:[访问](https://ext.dcloud.net.cn/plugin?id=11409)
在3.1.04新添加一个第三方请求库，位置：tmui->tool->lwu-request.ts,暂时没有文档。代码非常工整。且条理清晰。请查看源码使用。由于大小原因。这个库合并为单独使用。如果需要使用，请自行导入使用。
该请求库，有队列请求，错误重试控制请求，中断请求，拦截器配置等特性，功能强。