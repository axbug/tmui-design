<!--
- Copyright (c) 2025. tmzdy by @https://tmui.design
-->
<script setup lang="ts">
	import { computed, getCurrentInstance, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
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
	const timeid = ref<null | number>(null)
	const contentCtx = ref<UniApp.CanvasContext | null>(null)
	let contentCancanvs:any|null = null
	const canvasDomRect = ref({ top: 0, left: 0, width: 0, height: 0 })
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
	const x = ref(0)
	const y = ref(0)
	const lastX = ref(0)
	const lastY = ref(0)
	const isDrawing = ref(false)
	const strokes = ref<number[][][]>([])
	const currentStroke = ref<number[][]>([])

	const getCanvasCtx = () : Promise<UniApp.CanvasContext> => {
		if (contentCtx.value != null) return Promise.resolve(contentCtx.value)
		return new Promise((resolve) => {
			uni.createSelectorQuery()
				.in(instance)
				.select('#' + uid)
				// @ts-ignore
				.fields({ node: true, size: true, context: true, rect: true })
				.exec((res : UniApp.NodeField[]) => {
					const styleNode = res[0];
					const canvas = styleNode.node
					// @ts-ignore
					const ctx = canvas.getContext('2d')
					const dpr = uni.getWindowInfo().pixelRatio;
					// #ifndef WEB
					// @ts-ignore
					canvas.width = styleNode.width * dpr
					// @ts-ignore
					canvas.height = styleNode.height * dpr
					ctx.scale(dpr, dpr)
					// #endif
					contentCtx.value = ctx;
					// @ts-ignore
					canvasDomRect.value.height = styleNode.height
					// @ts-ignore
					canvasDomRect.value.width = styleNode.width
					// + uni.getWindowInfo().windowTop
					// @ts-ignore
					canvasDomRect.value.top = styleNode.top + uni.getWindowInfo().windowTop
					// @ts-ignore
					canvasDomRect.value.left = styleNode.left
					contentCancanvs = canvas

					resolve(ctx)
				})
		})
	}

	const getTouchPosition = (evt : TouchEvent) => {
		const touch = evt.touches[0] || evt.changedTouches[0]
		const clientX = touch.clientX
		const clientY = touch.clientY
		return {
			x: clientX - canvasDomRect.value.left,
			y: clientY - canvasDomRect.value.top
		}
	}

	const drawLine = (x1 : number, y1 : number, x2 : number, y2 : number) => {
		const ctx = contentCtx.value
		if (!ctx) return

		ctx.beginPath()
		ctx.moveTo(x1, y1)
		ctx.lineTo(x2, y2)
		ctx.strokeStyle = _lineColor.value
		ctx.lineWidth = _lineWidth.value
		ctx.lineCap = 'round'
		ctx.lineJoin = 'round'
		ctx.stroke()
		// @ts-ignore
		if (typeof ctx?.draw === 'function') {
			ctx.draw()
		}
	}

	const redrawAll = () => {
		const ctx = contentCtx.value
		if (!ctx) return

		// 清空画布
		ctx.clearRect(0, 0, _width.value, _height.value)

		// 重绘所有笔画
		strokes.value.forEach(stroke => {
			if (stroke.length < 2) return
			ctx.beginPath()
			ctx.moveTo(stroke[0][0], stroke[0][1])
			for (let i = 1; i < stroke.length; i++) {
				ctx.lineTo(stroke[i][0], stroke[i][1])
			}
			ctx.strokeStyle = _lineColor.value
			ctx.lineWidth = _lineWidth.value
			ctx.lineCap = 'round'
			ctx.lineJoin = 'round'
			ctx.stroke()
		})

		// 重绘当前笔画
		if (currentStroke.value.length >= 2) {
			ctx.beginPath()
			ctx.moveTo(currentStroke.value[0][0], currentStroke.value[0][1])
			for (let i = 1; i < currentStroke.value.length; i++) {
				ctx.lineTo(currentStroke.value[i][0], currentStroke.value[i][1])
			}
			ctx.strokeStyle = _lineColor.value
			ctx.lineWidth = _lineWidth.value
			ctx.lineCap = 'round'
			ctx.lineJoin = 'round'
			ctx.stroke()
		}
	
		// @ts-ignore
		if (typeof ctx?.draw === 'function') {
			ctx.draw()
		}
	}
	const clearDraw = async () => {
		await getCanvasCtx()
		const ctx = contentCtx.value
		if (!ctx) return
		// 清空画布
		ctx.clearRect(0, 0, _width.value, _height.value)
		currentStroke.value = []
		strokes.value = []
	}
	const touchstart = async (evt : TouchEvent) => {
		evt.preventDefault()
		await getCanvasCtx()
		const pos = getTouchPosition(evt)
		isDrawing.value = true
		lastX.value = pos.x
		lastY.value = pos.y
		currentStroke.value = [[pos.x, pos.y]]
		x.value = pos.x
		y.value = pos.y
	}

	const touchmove = (evt : TouchEvent) => {
		if (!isDrawing.value) return
		const pos = getTouchPosition(evt)
		const ctx = contentCtx.value
		if (!ctx) return
		if (_backgroundColor.value) {
			ctx.fillStyle = _backgroundColor.value
			ctx.fillRect(0, 0, _width.value, _height.value)
			ctx?.draw?.()
		}
		drawLine(lastX.value, lastY.value, pos.x, pos.y)
		currentStroke.value.push([pos.x, pos.y])
		lastX.value = pos.x
		lastY.value = pos.y
		x.value = pos.x
		y.value = pos.y
	}

	const touchend = () => {
		if (!isDrawing.value) return
		isDrawing.value = false
		if (currentStroke.value.length > 0) {
			strokes.value.push([...currentStroke.value])
		}
		// currentStroke.value = []
		
	}
	onMounted(() => {
		nextTick(async () => {
			await getCanvasCtx()
		})
	})

	onBeforeUnmount(() => {
		currentStroke.value = []
		strokes.value = []
		if (timeid.value) {
			clearTimeout(timeid.value)
			timeid.value = null
		}
	})


	defineExpose({
		/**
		 * 清空画布
		 */
		clear: async () => {
			await clearDraw()
		},
		/** 绘制 */
		// draw: async () => {
		// 	await clearDraw()
		// },
		/**
		 * 获取签名图片
		 */
		getImage: () => {
			return new Promise((reslove,rej)=>{
				uni.canvasToTempFilePath({
					canvasId:uid,
					id:uid,
					canvas:contentCancanvs,
					success:function(res){
						const src = res.tempFilePath;
						uni.getImageInfo({
							src,
							success:function(jg){
								reslove({src,width:jg.width,height:jg.height})
							},
							fail() {
								reslove({src})
							}
						})
					},
					fail:function(err){
						console.error(err.errMsg)
						rej(err)
					}
				},instance?.proxy)
			})
		}
	})
</script>
<template>
	<canvas @touchstart.stop="touchstart" @touchmove.stop="touchmove" @touchend.stop="touchend"
		@touchcancel.stop="touchend" :style="{ width: _width + 'px', height: _height + 'px' }" :id="uid"
		:canvas-id="uid" :hidpi="true" type="2d"></canvas>
</template>
<style>
</style>