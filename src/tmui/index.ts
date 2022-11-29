import { fetchNet } from './tool/lib/fetch';
import themeTool from './tool/theme/theme';
import fontJson from './tool/tmicon/fontJson';
import {setDomDarkOrWhite} from './tool/theme/util';
import preview, * as util from './tool/function/util';
import { language, languageByGlobal } from "./tool/lib/language"
import { share } from "./tool/lib/share"
import { App, nextTick } from "vue"
import PageJsonInit from "../pages.json"

import {
	useTmRouterAfter,
	useTmRouterBefore
} from "../router/index"
let pages:Array<pagesType> = [];
if(typeof PageJsonInit?.pages =='undefined'){
	PageJsonInit.pages = [];
}
PageJsonInit.pages.forEach(el => {
	let customType:pagesCustomType = <pagesCustomType>(el?.style?.navigationStyle ?? "default");
	let bg = (el.style?.navigationBarBackgroundColor??PageJsonInit?.globalStyle?.navigationBarBackgroundColor??'#FFFFFF')||'#FFFFFF'
	let txtColor = (el.style?.navigationBarTextStyle??PageJsonInit?.globalStyle?.navigationBarTextStyle??'black')||'black'
	pages.push({
		path: el.path,
		custom: customType,
		navigationBarBackgroundColor:bg,
		navigationBarTextStyle:txtColor
	})
})
if (Array.isArray(PageJsonInit?.subPackages??null)) {
	PageJsonInit?.subPackages.forEach((el:any) => {
		let rootPath = el.root;
		el.pages.forEach((el2:any) => {
			let elany:any = el2;
			let bg = (el2.style?.navigationBarBackgroundColor??PageJsonInit?.globalStyle?.navigationBarBackgroundColor??'#FFFFFF')||'#FFFFFF'
			let txtColor = (el2.style?.navigationBarTextStyle??PageJsonInit?.globalStyle?.navigationBarTextStyle??'black')||'black'
			pages.push({
				path: rootPath + "/" + elany.path,
				custom: elany?.style?.navigationStyle ?? "default",
				navigationBarBackgroundColor:bg,
				navigationBarTextStyle:txtColor
			})
		})
	})
}
let pagers:any = PageJsonInit;
let tabBar:tabBarType = pagers?.tabBar?? {
	color: "",
	selectedColor: "",
	borderStyle: "",
	backgroundColor: "",
	list:[]
}

// custom icon
let cusutomIconList = [];
// #ifdef APP
cusutomIconList = fontJson;
// #endif
const $tm = {
	tabBar: tabBar,
	pages: pages,
	isColor: themeTool.isCssColor,
	u: { ...util, preview },
	language: language,
	fetch: fetchNet,
	tmicon:[
		{
			font:"tmicon",
			prefix:"tmicon-",
			fontJson:cusutomIconList
		}
	]
};

uni.$tm = $tm;
export default {
	install: (app: App, options: object) => {
		uni.addInterceptor('navigateTo', {
			invoke(result){
				nextTick(()=>{
					linsInko({
						path: result.url,
						context: null,
						openType:'navigateTo'
					})
				})
			},
			success(result){
				
			}
		})
		uni.addInterceptor('redirectTo', {
			success(result){
				let pages = getCurrentPages().pop()
				let path = pages?.route ?? "";
				let msg = result.errMsg??"";
				let opentype = msg.split(":")[0]??"";
				linsInko({
					path: path,
					context: null,
					openType:opentype
				})
			}
		})
		uni.addInterceptor('reLaunch', {
			success(result){
				let pages = getCurrentPages().pop()
				let path = pages?.route ?? "";
				let msg = result.errMsg??"";
				let opentype = msg.split(":")[0]??"";
				// 这里的链接是去往的链接
				linsInko({
					path: path,
					context: null,
					openType:opentype
				})
			}
		})
		uni.addInterceptor('navigateBack', {
			invoke(result){
				nextTick(()=>{
					let pages = getCurrentPages().pop()
					let path = pages?.route ?? "";
					let msg = result.errMsg??"";
					let opentype = msg.split(":")[0]??"";
					// 这里返回的链接是返回前的链接，并非返回后的链接。
					//这里在h5端不需要监测，因为有全局监测实现。
					// #ifndef H5
					linsInko({
						path: path,
						context: null,
						openType:"navigateBack"
					})
					// #endif
				})
			},
			success(result){
				
			}
		})
		// #ifdef H5
		window.addEventListener('popstate',(ev)=>{
			linsInko({
				path: ev.state.forward,
				context: null,
				openType:"navigateBack"
			})
		})
		// #endif
		//路由拦截
		function linsInko(obj:any){
			// #ifdef H5
			setDomDarkOrWhite();
			// #endif
			obj.path = obj.path[0]=="/"?obj.path.substr(1):obj.path
			useTmRouterBefore(obj)
		}
		// #ifndef APP-NVUE
		app.use(languageByGlobal())
		// #endif
		let appconfig = {};
		// #ifdef MP
		const { onShareAppMessage, onShareTimeline } = share()
		appconfig = { ...appconfig, onShareAppMessage, onShareTimeline }
		// #endif

		app.mixin({
			...appconfig,
		})
		app.config.globalProperties.tm = $tm;
	}
};
