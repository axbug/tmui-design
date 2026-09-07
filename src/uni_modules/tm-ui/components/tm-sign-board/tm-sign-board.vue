<!--
- Copyright (c) 2025. tmzdy by @https://tmui.design
-->
<script setup lang="ts">
	import { computed, getCurrentInstance, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
	import { useTmConfig } from '../../libs/config'
	import { getDefaultColor } from '../../libs/colors'
	import { PropsType } from './propsType'
	import { covetUniNumber } from '../../libs/tool'

	/**
	 * @displayName 签名画板
	 * @exportName tm-sign-board
	 * @category 反馈组件
	 * @description 通用签名画板组件，支持手写签名功能。
	 * @constant 平台兼容
	 *	| H5 | uniAPP | 小程序 | version |
		| --- | --- | --- | --- |
		| ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
	 */
	defineOptions({
		name: 'TmSignBoard', options: {
			styleIsolation: "apply-shared",
			virtualHost: true,
			addGlobalClass: true,
			multipleSlots: true,
		}
	});
	const { config } = useTmConfig()
	const props = withDefaults(defineProps<PropsType>(), {
		backgroundColor: '',
		strokeColor: '',
		strokeWidth: 8,
		width: 300,
		height: 300
	})
	const uid = 'TmSignBoard' + Math.random().toString(36).substring(4)
	const instance = getCurrentInstance()
	const proxy = instance?.proxy
	const contentCtx = ref<UniApp.CanvasContext | null>(null)
	let contentCanvas:any|null = null
	const canvasDomRect = ref({ top: 0, left: 0, width: 0, height: 0 })
	let ctxConfigured = false
	const _backgroundColor = computed(() => {
		let color = props.backgroundColor || '';
		if (color == 'transparent' || color == '') return ''
		return getDefaultColor(color);
	})
	const _lineColor = computed(() => {
		let color = props.strokeColor || 'primary';
		return getDefaultColor(color);
	})
	const _lineWidth = computed(() => {
		let linewidth = covetUniNumber(props.strokeWidth, config.unit);
		let lineNumber = parseInt(linewidth)
		if (linewidth.indexOf('rpx') > -1) {
			lineNumber = uni.upx2px(lineNumber)
		}
		return lineNumber
	})

	const configureCtx = (ctx: UniApp.CanvasContext) => {
		// #ifdef MP-WEIXIN || MP-ALIPAY || MP-QQ || H5
		ctx.strokeStyle =  _lineColor.value
		ctx.lineWidth = _lineWidth.value
		ctx.lineCap = 'round'
		ctx.lineJoin = 'round'
		// #endif
		// #ifndef MP-WEIXIN || MP-ALIPAY || MP-QQ || H5
		ctx.setStrokeStyle(_lineColor.value)
		ctx.setLineWidth(_lineWidth.value)
		ctx.setLineCap('round')
		ctx.setLineJoin('round')
		// #endif
		
		ctxConfigured = true
		
	}
	const _width = computed(() => {
		let width = covetUniNumber(props.width, config.unit);
		let widthNumber = parseInt(width)
		if (width.indexOf('rpx') > -1) {
			widthNumber = uni.upx2px(widthNumber)
		}
		return widthNumber
	})
	const _height = computed(() => {
		let width = covetUniNumber(props.height, config.unit);
		let widthNumber = parseInt(width)
		if (width.indexOf('rpx') > -1) {
			widthNumber = uni.upx2px(widthNumber)
		}
		return widthNumber
	})
	let lastX = 0
	let lastY = 0
	const isDrawing = ref(false)
	const strokes = ref<number[][][]>([])
	const currentStroke = ref<number[][]>([])

	const getCanvasCtx = () : Promise<UniApp.CanvasContext> => {
		if (contentCtx.value != null) return Promise.resolve(contentCtx.value)
		
		return new Promise((resolve) => {
			// App-Vue 必须使用旧版 canvas（无 type="2d"）+ createCanvasContext(canvasId, proxy)；
			// 与 type="2d" + 节点取 2d 上下文混用会导致 App 上无法绘制（Web/小程序正常）。
			// #ifdef APP-NVUE
			resolve(null as unknown as UniApp.CanvasContext)
			return
			// #endif
			// #ifdef APP-PLUS
			// #ifndef APP-NVUE
			function appVueLegacyCanvas() {
				// 第一个参数为 canvas-id，不能带 #；第二个参数为组件实例 proxy（Vue3 setup）
				const ctx = uni.createCanvasContext(uid, proxy)
				uni.createSelectorQuery()
					.in(proxy)
					.select('#' + uid)
					.boundingClientRect((result) => {
						const nodeinfo = result as UniApp.NodeInfo
						if (!nodeinfo) {
							resolve(ctx)
							return
						}
						configureCtx(ctx)

						contentCtx.value = ctx
						const winInfo = uni.getWindowInfo()
						canvasDomRect.value.height = nodeinfo.height ?? 0
						canvasDomRect.value.width = nodeinfo.width ?? 0
						canvasDomRect.value.top = (nodeinfo.top ?? 0) + winInfo.windowTop
						canvasDomRect.value.left = nodeinfo.left ?? 0

						resolve(ctx)
					})
					.exec()
			}
			appVueLegacyCanvas()
			// #endif
			// #endif
			// #ifdef MP-WEIXIN || MP-ALIPAY || MP-QQ || H5
			uni.createSelectorQuery()
				.in(proxy)
				.select('#' + uid)
				// @ts-ignore
				.fields({ node: true, size: true, context: true, rect: true })
				.exec((res : UniApp.NodeField[]) => {
					if (!res || !res[0]) {
						resolve(null as unknown as UniApp.CanvasContext)
						return
					}
					const styleNode = res[0];
					const canvas = styleNode.node
					// @ts-ignore
					let ctx =canvas.getContext('2d');
					const dpr = uni.getWindowInfo().pixelRatio;
					// #ifndef WEB
					// @ts-ignore
					canvas.width = styleNode.width * dpr
					// @ts-ignore
					canvas.height = styleNode.height * dpr
					ctx.scale(dpr, dpr)
					// #endif
					
					configureCtx(ctx)
					contentCtx.value = ctx;
					const winInfo = uni.getWindowInfo()
					// @ts-ignore
					canvasDomRect.value.height = styleNode.height
					// @ts-ignore
					canvasDomRect.value.width = styleNode.width
					// @ts-ignore
					canvasDomRect.value.top = styleNode.top + winInfo.windowTop
					// @ts-ignore
					canvasDomRect.value.left = styleNode.left
					contentCanvas = canvas
					resolve(ctx)
				})
			// #endif
		})
	}

	const getTouchPosition = (evt : TouchEvent) => {
		const touch = evt.touches[0] || evt.changedTouches[0]
		
		// @ts-ignore 跨平台 Touch 扩展属性（小程序/APP 可能提供 x/y）
		const clientX = touch?.clientX??touch?.x??0
		// @ts-ignore 跨平台 Touch 扩展属性（小程序/APP 可能提供 x/y）
		const clientY = touch?.clientY??touch?.y??0
		let top = canvasDomRect.value.top;
		// #ifdef APP
		top = 0
		// #endif
		return {
			x: clientX - canvasDomRect.value.left,
			y: clientY - top
		}
	}

	const ensureCtxConfig = () => {
		if (ctxConfigured) return
		const ctx = contentCtx.value
		if (!ctx) return
		configureCtx(ctx)
	}

	const drawLine = (x1 : number, y1 : number, x2 : number, y2 : number) => {
		const ctx = contentCtx.value
		
		if (!ctx) return
		ensureCtxConfig()
		ctx.beginPath()
		ctx.moveTo(x1, y1)
		ctx.lineTo(x2, y2)
		ctx.stroke()
		// 旧版 canvas（App-Vue）需 draw 才会上屏；Web/小程序 2d 无 draw
		// @ts-ignore
		if (typeof ctx.draw === 'function') {
			ctx.draw(true)
		}
	}

	const drawStroke = (ctx: any, stroke: number[][]) => {
		if (stroke.length < 2) return
		ctx.beginPath()
		ctx.moveTo(stroke[0][0], stroke[0][1])
		for (let i = 1; i < stroke.length; i++) {
			ctx.lineTo(stroke[i][0], stroke[i][1])
		}
		ctx.stroke()
	}

	const redrawAll = () => {
		const ctx = contentCtx.value
		if (!ctx) return
		ensureCtxConfig()

		ctx.clearRect(0, 0, _width.value, _height.value)

		if (_backgroundColor.value) {
			// @ts-ignore 旧版 API 用 setFillStyle；type="2d" 用 fillStyle
			if (typeof ctx.setFillStyle === 'function') {
				ctx.setFillStyle(_backgroundColor.value)
			} else {
				ctx.fillStyle = _backgroundColor.value
			}
			ctx.fillRect(0, 0, _width.value, _height.value)
		}

		for (let s = 0; s < strokes.value.length; s++) {
			drawStroke(ctx, strokes.value[s])
		}

		if (currentStroke.value.length >= 2) {
			drawStroke(ctx, currentStroke.value)
		}

		// @ts-ignore
		if (typeof ctx.draw === 'function') {
			ctx.draw(true)
		}
	}
	const clearDraw = async () => {
		await getCanvasCtx()
		const ctx = contentCtx.value
		if (!ctx) return
		// 清空画布
		ctx.clearRect(0, 0, _width.value, _height.value)
		// @ts-ignore App 旧版 canvas 需 draw 刷新
		if (typeof ctx.draw === 'function') ctx.draw(false)
		currentStroke.value = []
		strokes.value = []
	}
	const touchstart = async (evt : TouchEvent) => {
		evt?.preventDefault?.()
		evt?.stopImmediatePropagation?.()
		evt?.stopPropagation?.()
		await getCanvasCtx()
		const pos = getTouchPosition(evt)
		isDrawing.value = true
		lastX = pos.x
		lastY = pos.y
		currentStroke.value = [[pos.x, pos.y]]
	}

	const touchmove = (evt : TouchEvent) => {
		evt?.preventDefault?.()
		evt?.stopImmediatePropagation?.()
		evt?.stopPropagation?.()
		if (!isDrawing.value) return
		const pos = getTouchPosition(evt)
		const ctx = contentCtx.value
		if (!ctx) return
		if (_backgroundColor.value) {
			redrawAll()
		}
		
		drawLine(lastX, lastY, pos.x, pos.y)
		currentStroke.value.push([pos.x, pos.y])
		lastX = pos.x
		lastY = pos.y
	}

	const touchend = () => {
		if (!isDrawing.value) return
		isDrawing.value = false
		if (currentStroke.value.length > 0) {
			strokes.value.push([...currentStroke.value])
		}
	}
	
	const getMousePosition = (evt : MouseEvent) => {
		const clientX = evt.clientX
		const clientY = evt.clientY
		return {
			x: clientX - canvasDomRect.value.left,
			y: clientY - canvasDomRect.value.top + uni.getWindowInfo().windowTop
		}
	}

	const mouseDown = async (evt:MouseEvent) => {
		evt.preventDefault()
		await getCanvasCtx()
		const pos = getMousePosition(evt)
		isDrawing.value = true
		lastX = pos.x
		lastY = pos.y
		currentStroke.value = [[pos.x, pos.y]]
	}
	const mouseMove = (evt:MouseEvent) => {
		if (!isDrawing.value) return
		const pos = getMousePosition(evt)
		const ctx = contentCtx.value
		if (!ctx) return
		if (_backgroundColor.value) {
			redrawAll()
		}
		drawLine(lastX, lastY, pos.x, pos.y)
		currentStroke.value.push([pos.x, pos.y])
		lastX = pos.x
		lastY = pos.y
	}
	const mouseUp = () => {
		if (!isDrawing.value) return
		isDrawing.value = false
		if (currentStroke.value.length > 0) {
			strokes.value.push([...currentStroke.value])
		}
	}
	
	onMounted(() => {
		nextTick(async () => {
			await getCanvasCtx()
		})
	})

	watch([_lineColor, _lineWidth], () => {
		ctxConfigured = false
	})

	onBeforeUnmount(() => {
		currentStroke.value = []
		strokes.value = []
	})


	defineExpose({
		/**
		 * 清空画布
		 */
		clear: async () => {
			await clearDraw()
		},
		/**
		 * 获取签名图片
		 */
		getImage: ():Promise<{src:string,width:number,height:number}> => {
			return new Promise((resolve,rej)=>{
				uni.canvasToTempFilePath({
					canvasId:uid,
					// @ts-ignore
					id:uid,
					canvas:contentCanvas,
					success:function(res){
						const src = res.tempFilePath;
						uni.getImageInfo({
							src,
							success:function(jg){
								resolve({src,width:jg.width,height:jg.height})
							},
							fail() {
								resolve({src,width:0,height:0})
							}
						})
					},
					fail:function(err){
						console.error(err.errMsg)
						rej(err)
					}
				}, proxy)
			})
		}
	})
</script>
<template>
	<!-- 小程序 / H5：type="2d" 节点画布 -->
	<!-- #ifdef MP-WEIXIN || MP-ALIPAY || MP-QQ || H5 -->
	<canvas
		@mousedown="mouseDown"
		@mousemove="mouseMove"
		@mouseup="mouseUp"
		@touchstart.stop="touchstart"
		@touchmove.stop="touchmove"
		@touchend.stop="touchend"
		@touchcancel.stop="touchend"
		:style="{ width: _width + 'px', height: _height + 'px' }"
		:id="uid"
		:canvas-id="uid"
		:hidpi="true"
		type="2d"
	></canvas>
	<!-- #endif -->
	<!-- App-Vue：旧版 canvas，与 createCanvasContext 配套；不可写 type="2d" -->
	<!-- #ifdef APP -->
	<canvas
		@touchstart="touchstart"
		@touchmove="touchmove"
		@touchend="touchend"
		@touchcancel="touchend"
		:style="{ width: _width + 'px', height: _height + 'px' }"
		:id="uid"
		:canvas-id="uid"
		class="tm-sign-board-canvas"
	></canvas>
	<!-- #endif -->
</template>