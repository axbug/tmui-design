import { createSSRApp } from "vue";
import * as Pinia from 'pinia';
import App from "./App.vue";
import tmUi from "./uni_modules/tm-ui";
import routerMixins, { invokeRouter } from "./libs/router";
import { axiosCreateInstance } from "./libs/request";

// @ts-ignore
if (process.env.NODE_ENV === 'development') {
	uni.apiHostUrl = "https://a.com/api"
	uni.imgHostUrl = "https://cdn.a.com/"
	uni.uploadHost = uni.apiHostUrl + "/uploadImage"

}
// @ts-ignore
if (process.env.NODE_ENV === 'production') {
	uni.apiHostUrl = "https://b.com/api"
	uni.imgHostUrl = "https://cdn.b.com/"
	uni.uploadHost = uni.apiHostUrl + "/uploadImage"
}
// 任意位置使用此方法可以快速请求。但建议在api路由中使用。
uni.axios = axiosCreateInstance()
//路由拦截。
invokeRouter()

export function createApp() {
	const app = createSSRApp(App);
	// 全局store存储
	app.use(Pinia.createPinia());
	// tmui组件
	app.use(tmUi);
	/**
	 * routerMixins 会开启所有页面微信分享或者其它自己的混淆操作。自己改源文件。
	 * showPagePathLog 表示在开发阶段会打印当前访问的页面地址。
	 */
	app.use(routerMixins, { showPagePathLog: true })

	return {
		app,
		Pinia
	};
}