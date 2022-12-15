import {ComponentInternalInstance} from "vue"
import CanvasRenderingContext2D from '../gcanvas/context-2d/RenderingContext.js';
// #ifdef APP-NVUE
import {enable,WeexBridge,} from '../gcanvas/index.js';
// #endif

export function getCanvas(proxy:ComponentInternalInstance,canvasid:string,w?:number,h?:number):Promise<{ctx:CanvasRenderingContext2D,node:HTMLCanvasElement|null}>{
	return new Promise((resv,rejv)=>{
		// #ifdef APP-NVUE
		setTimeout(async function () {
			
			/*获取元素引用*/
			var ganvas = proxy?.$refs[canvasid];
			/*通过元素引用获取canvas对象*/
			var canvasObj = enable(ganvas, {
				bridge: WeexBridge
			});
			resv({ctx:canvasObj.getContext('2d'),node:canvasObj})
		}, 100)
		// #endif
		
		
		// #ifdef MP-WEIXIN
		setTimeout(async function () {
			const query = uni.createSelectorQuery().in(proxy)
			query.select('#'+canvasid)
				.fields({
					node: true,
					size: true,
					context:true
				})
				.exec((res) => {
					
					const canvas = res[0].node
					// console.log(res[0])
					const ctxvb = canvas
					// const ctxvb = canvas.getContext('2d')
					const dpr = uni.getSystemInfoSync().pixelRatio
					// canvas.width = res[0].width * dpr
					// canvas.height = res[0].height * dpr
					// canvas.scale(dpr, dpr)
					resv({ctx:ctxvb,node:res[0].node})
			})
		}, 100)
		// #endif
		
		// #ifdef MP-ALIPAY
		
		setTimeout(async function () {
			const query = uni.createSelectorQuery().in(proxy)
			query.select('#'+canvasid).node().exec((res2) => {
			    const canvas = res2[0].node;
				let ctxvb:UniApp.CanvasContext = canvas.getContext('2d');
				resv({ctx:ctxvb,node:canvas})
			})
		}, 100)
		
		// #endif
		
		// #ifdef MP-QQ
		setTimeout(async function () {
			const query = uni.createSelectorQuery().in(proxy)
			query.select('#'+canvasid)
				.fields({
					node: true,
					size: true,
					context:true
				})
				.exec((res) => {
					resv({ctx:res[0].context,node:null})
			})
		}, 100)
		// #endif
		
		
		
		// #ifdef H5
		setTimeout(async function () {
			const query = uni.createSelectorQuery().in(proxy)
			query.select('#'+canvasid)
				.fields({
					node: true,
					size: true,
					context:true
				})
				.exec((res) => {
					const dpr = uni.getSystemInfoSync().pixelRatio
					let canvas = proxy.$el.querySelector('canvas').getContext('2d')
					let canvasEl = proxy.$el.querySelector('canvas')
					// canvas.width = res[0].width * dpr
					// canvas.height = res[0].height * dpr
					canvas.scale(0.1, 0.1)
				
					resv({ctx:canvas,node:proxy.$el.querySelector('canvas')})
			})
		}, 50)
		
		// #endif
		
	})
}



