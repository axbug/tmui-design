import { createSSRApp } from "vue";
import * as Pinia from 'pinia';
import App from "./App.vue";
import tmUi from "./uni_modules/tm-ui";
import routerMixins from "./libs/router";
import tmRouter, { router } from "./uni_modules/tm-ui/router";
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

export function createApp() {
	const app = createSSRApp(App);
	// 全局store存储
	app.use(Pinia.createPinia());
	// tmui组件
	app.use(tmUi);
	/**
	 * 路由鉴权守卫
	 * mode: 'whitelist' — 默认所有页面需要鉴权，list 中的页面免鉴权
	 * mode: 'authlist' — 默认所有页面免鉴权，仅 list 中的页面需要鉴权
	 * loginPage 始终免鉴权，无需加入 list
	 */
	app.use(tmRouter, {
		loginPage: '',
		tokenKey: 'token',
		mode: 'authlist',
		list: [],
		tabBarPages: []
		// authCheck: () => !!uni.getStorageSync('token'),
		// onDenied: (url) => { console.log('鉴权失败:', url) },
	})

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