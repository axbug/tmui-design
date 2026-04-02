
<!-- #ifdef MP-WEIXIN -->
<!-- @ts-ignore -->
<script module="xfs" lang="wxs" src="./xfs.wxs"></script>
<!-- #endif -->

<script lang="ts" setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, getCurrentInstance } from 'vue'
import { covetUniNumber, getUid } from '../../libs/tool'
import { getDefaultColor } from '../../libs/colors'
import { useTmConfig } from '../../libs/config'

/**
 * @displayName 左滑菜单
 * @exportName tm-switch-slider
 * @category 反馈组件
 * @description 常用于对话聊天，订单列表等一些隐藏式按钮设计场景。如果子菜单无法定宽或者被挤夺请写style:flex-shrink: 0;避免。
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
	| --- | --- | --- | --- |
	| ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: 'TmSwitchSlider',options: {
		styleIsolation: 'apply-shared',
		virtualHost: true,
		addGlobalClass: true,
		multipleSlots: true
	} })
const { config } = useTmConfig()
const proxy = getCurrentInstance()?.proxy

const emit = defineEmits([
	/**
	 * 此函数会发现是否禁用你外部滚动的指示。
	 */
	'disabledScrollChange',
	/** 活动区域被点击时触发 */
	'click',
	/** 打开菜单时触发 */
	'open',
	/** 关闭时触发 */
	'close',
	/** 触摸开始 */
	'start',
	/** 触摸结束 */
	'end',
	/** 触摸中 */
	'move',
	/** 等同v-model:status */
	'update:status',
	/** 长按事件 */
	'longTimePress'
])

const props = defineProps({
	/** 被拖动层的自定义样式 */
	custonmStyle: { type: String, default: '' },
	/** 菜单容器层自定义样式 */
	custonmMenuStyle: { type: String, default: '' },
	/** 宽度 */
	width: { type: String, default: '100%' },
	/** 高度，单位随意 */
	height: { type: String, default: '50' },
	/** 是否禁用 */
	disabled: { type: Boolean, default: false },
	/** 当滑动时小于此值，会回弹到原位 */
	threshold: { type: Number, default: 15 },
	/** 当打开或者松开时的动画时间 */
	duration: { type: Number, default: 450 },
	/** 当前打开状态 */
	status: { type: Boolean, default: false },
	/** 下边线的颜色 */
	borderColor: { type: String, default: '#f5f5f5' },
	/** 下边线暗黑的颜色 */
	borderDarkColor: { type: String, default: '' },
	/**
	 * 让拖动层内容失去响应，拖动更流畅
	 * false关闭让内容响应事件，true让内容失去响应
	 */
	eventNone: { type: Boolean, default: true },
	/** 是否显示下边线 */
	showBottomBorder: { type: Boolean, default: true }
})

const id = ref('xSwitchSilder' + getUid())
const _opened = ref(false)
const _slideLeft = ref(0)
const _transDuration = ref(0)
const _menuWidth = ref(0)
const _isMove = ref(false)
const _dirs = ref('right')
const _isSwiper = ref<'none' | 'swiper' | 'off'>('none')

let _startX = 0
let _startY = 0
let _x = 0
let _y = 0
let _tempPopX = 0
let _tempPopY = 0
let _dateTime = 0
let _diffX = 0
let _lastTouchTime = 0
let _webLongPressTimer: any = null

const _height = computed(() => covetUniNumber(props.height, config.unit))
const _showBottomBorder = computed(() => props.showBottomBorder)
const _borderColor = computed(() => {
	if (config.mode === 'dark' && props.borderDarkColor === '') return getDefaultColor(config.borderDarkColor)
	if (config.mode === 'dark' && props.borderDarkColor !== '') return getDefaultColor(props.borderDarkColor)
	return getDefaultColor(props.borderColor)
})

function _queryMenuWidth(): Promise<number> {
	return new Promise(resolve => {
		uni.createSelectorQuery().in(proxy)
			.select('.xSwitchSilderItems')
			.boundingClientRect((rect: any) => {
				resolve(rect?.width ?? 0)
			}).exec()
	})
}

function _resetMove() {
	_startX = 0
	_startY = 0
	_transDuration.value = 0
}

function _transformStart(x: number, y: number) {
	_diffX = 0
	_dateTime = Date.now()
	_resetMove()
	if (props.disabled) return
	_startX = x - _slideLeft.value
	_x = x
	_y = y
	_startY = y
	_isMove.value = true
}

function _transformMove(x: number, y: number) {
	let newX = x - _startX
	const mw = _menuWidth.value
	if (newX > 0) newX = 0
	if (newX < -mw) newX = -mw
	newX = Math.min(0, newX)
	newX = Math.max(-mw, newX)
	_slideLeft.value = newX

	const diffX = x - _x
	_x = x

	if (Math.abs(newX) > props.threshold) {
		_dirs.value = diffX > 0 ? 'right' : 'left'
	}
	_diffX = diffX
}

// ─── 触摸事件（APP / H5 Mobile）──────────────────────────

function mStart(evt: any) {
	emit('start')
	_lastTouchTime = Date.now()
	_dateTime = Date.now()
	const touch = evt.changedTouches[0]
	_tempPopX = touch.clientX
	_tempPopY = touch.clientY
	_resetMove()
	if (props.disabled) return
	_isMove.value = true
	_isSwiper.value = 'none'
	_transformStart(touch.clientX, touch.clientY)
}

function mMove(evt: any) {
	emit('move')
	const touch = evt.changedTouches[0]
	if (props.disabled) return

	const dy = Math.abs(touch.clientY - _tempPopY)
	const dx = Math.abs(touch.clientX - _tempPopX)
	const hasDir = Math.max(dx, dy) > 10
	const isHoriz = dx > dy

	if (hasDir && _isSwiper.value === 'none') {
		_isSwiper.value = isHoriz ? 'swiper' : 'off'
	}

	if (_isSwiper.value === 'swiper') {
		if (evt.preventDefault) evt.preventDefault()
		if (evt.stopPropagation) evt.stopPropagation()
		_transformMove(touch.clientX, touch.clientY)
	}
}

function mEnd(evt: any) {
	emit('end')
	const touch = evt.changedTouches[0]
	const diffdate = Date.now() - _dateTime
	const diffx = touch.clientX - _tempPopX
	const diffy = touch.clientY - _tempPopY
	if (Math.abs(diffx) === Math.abs(diffy) && diffx === 0 && diffdate > 5 && diffdate <= 250) {
		emit('click')
	}

	_isMove.value = false
	if (props.disabled || _isSwiper.value === 'off') return

	const wasOpened = _opened.value
	_transDuration.value = props.duration
	if (_dirs.value === 'left') {
		_slideLeft.value = -_menuWidth.value
		_opened.value = true
		if (!wasOpened) emit('open')
	} else {
		_slideLeft.value = 0
		_opened.value = false
		if (wasOpened) emit('close')
	}
}


// ─── 鼠标事件（H5 PC）────────────────────────────────────
// #ifdef H5
function _mmStart(evt: MouseEvent) {
	// 过滤触摸后补发的兼容鼠标事件，避免 click 重复触发
	if (Date.now() - _lastTouchTime < 500) return
	emit('start')
	_dateTime = Date.now()
	_tempPopX = evt.clientX
	_tempPopY = evt.clientY
	_resetMove()
	if (props.disabled) return
	_isSwiper.value = 'none'
	_isMove.value = true
	_transformStart(evt.clientX, evt.clientY)

	_webLongPressTimer = setTimeout(() => {
		if (_isMove.value && !_opened.value) emit('longTimePress')
	}, 500)

	if (typeof document !== 'undefined') {
		document.addEventListener('mousemove', _mmMove)
		document.addEventListener('mouseup', _mmEnd)
	}
}

function _mmMove(evt: MouseEvent) {
	if (_webLongPressTimer) { clearTimeout(_webLongPressTimer); _webLongPressTimer = null }
	if (props.disabled || !_isMove.value) return
	emit('move')

	const dy = Math.abs(evt.clientY - _tempPopY)
	const dx = Math.abs(evt.clientX - _tempPopX)
	const hasDir = Math.max(dx, dy) > 10

	if (hasDir && _isSwiper.value === 'none') {
		_isSwiper.value = dx > dy ? 'swiper' : 'off'
	}

	if (_isSwiper.value === 'swiper') {
		evt.preventDefault()
		_transformMove(evt.clientX, evt.clientY)
	}
}

function _mmEnd(evt: MouseEvent) {
	if (_webLongPressTimer) { clearTimeout(_webLongPressTimer); _webLongPressTimer = null }
	if (typeof document !== 'undefined') {
		document.removeEventListener('mousemove', _mmMove)
		document.removeEventListener('mouseup', _mmEnd)
	}
	if (!_isMove.value) return
	emit('end')

	const diffdate = Date.now() - _dateTime
	const diffx = evt.clientX - _tempPopX
	const diffy = evt.clientY - _tempPopY
	if (Math.abs(diffx) === Math.abs(diffy) && diffx === 0 && diffdate > 5 && diffdate <= 250) {
		emit('click')
		_isMove.value = false
		return
	}

	_isMove.value = false
	if (props.disabled || _isSwiper.value === 'off') return

	const wasOpened = _opened.value
	_transDuration.value = props.duration
	if (_dirs.value === 'left') {
		_slideLeft.value = -_menuWidth.value
		_opened.value = true
		if (!wasOpened) emit('open')
	} else {
		_slideLeft.value = 0
		_opened.value = false
		if (wasOpened) emit('close')
	}
}
// #endif

function _onAniEnd() {
	// #ifndef MP-WEIXIN
	if (_dirs.value === 'left') {
		emit('update:status', true)
		_isMove.value = false
	} else if (_dirs.value === 'right') {
		emit('update:status', false)
		_isMove.value = false
	}
	// #endif
}

function _longTimePress() {
	if (_isMove.value || _opened.value) return
	emit('longTimePress')
}

/**
 * 打开菜单
 * @public
 */
function open() {
	_opened.value = true
	_dirs.value = 'left'
	_transDuration.value = props.duration
	_slideLeft.value = -_menuWidth.value
}

/**
 * 关闭菜单
 * @public
 */
function close() {
	_opened.value = false
	_dirs.value = 'right'
	_transDuration.value = props.duration
	_slideLeft.value = 0
}

// ─── MP-WEIXIN 桥接函数 ──────────────────────────────────

function setOpts(opts: any) {
	if (opts?.isMove != null) _isMove.value = opts.isMove
	if (opts?.opened != null) _opened.value = opts.opened
	if (opts?.isSwiper != null) _isSwiper.value = opts.isSwiper
}

function callEmits(args: any) {
	if (!args.name) return
	if (args.args != null && args.args !== undefined) {
		emit(args.name, args.args)
	} else {
		emit(args.name)
		if (args.name === 'open' || args.name === 'close') {
			emit('update:status', args.name === 'open')
		}
	}
}


watch(() => props.status, (newval) => {
	if (newval === _opened.value) return
	if (newval) open(); else close()
})

onMounted(async () => {
	await nextTick()
	_menuWidth.value = await _queryMenuWidth()
	if (props.status) {
		_opened.value = false
		_dirs.value = 'left'
		_transDuration.value = props.duration
		_slideLeft.value = -_menuWidth.value
	}
})

onBeforeUnmount(() => {
	if (_webLongPressTimer) clearTimeout(_webLongPressTimer)
	// #ifdef H5
	if (typeof document !== 'undefined') {
		document.removeEventListener('mousemove', _mmMove)
		document.removeEventListener('mouseup', _mmEnd)
	}
	// #endif
})


defineExpose({ open, close,setOpts,callEmits })
</script>

<template>
	<view>
    <!-- @vue-ignore -->
		<view class="xSwitchSilder" :style="{ height: _height,opacity:(props?.disabled ?0.5:1) }">
			<view
				@longpress="_longTimePress"

				<!-- #ifndef MP-WEIXIN -->
				@touchstart="mStart"
				@touchmove="mMove"
				@touchend="mEnd"
				@touchcancel="mEnd"
				<!-- #endif -->

				<!-- #ifdef H5 -->
				@mousedown="_mmStart"
				<!-- #endif -->

				<!-- #ifdef MP-WEIXIN -->
				@touchstart="xfs.mStart"
				@touchmove="xfs.mMove"
				@touchend="xfs.mEnd"
				@touchcancel="xfs.mEnd"
				:data-opts="{
					disabled: props.disabled,
					slideX: _slideLeft,
					duration: props.duration,
					animationFun: config.animation,
					opened: _opened,
					threshold: props.threshold
				}"
				:change:prop="xfs.propObserver"
				:prop="_opened"
				<!-- #endif -->

				:id="id"
				ref="xSwitchSilder"
				:style="[
					{
						transitionTimingFunction: config.animation,
						left: _slideLeft + 'px',
						transitionDuration: _transDuration + 'ms'
					},
					custonmStyle
				]"
				class="xSwitchSilderWrap"
				@transitionend="_onAniEnd">
				<view :class="[eventNone ? 'noEventBySwitchSlider' : '']" style="width:100%;height:100%">
					<!--
					 @slot 默认插槽，你的顶层布局可以在这里
					 -->
					<slot></slot>
				</view>
			</view>
			<view class="xSwitchSilderItemsWrap">
				<view ref="xSwitchSilderItems" class="xSwitchSilderItems" :style="custonmMenuStyle">
					<!--
					 @slot 菜单插槽
					 @prop {boolean} status - 当前打开的状态
					 -->
					<slot name="menu" :status="_opened"></slot>
				</view>
			</view>
		</view>
		<view v-if="_showBottomBorder" :style="{ backgroundColor: _borderColor, height: '1px' }"></view>
	</view>
</template>
<style>
.noEventBySwitchSlider {
	pointer-events: none;
}

.xSwitchSilder {
    position: relative;
	display: flex;
	flex-direction: column;
	/* #ifdef H5 */
	cursor: grab;
	/* #endif */
}

/* #ifdef H5 */
.xSwitchSilder:active {
	cursor: grabbing;
}
/* #endif */

.xSwitchSilderWrap {
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 2;
	right: 0px;
	transition-property: left;
	transition-duration: 0ms;
}

.xSwitchSilderItemsWrap {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
}

.xSwitchSilderItems {
	flex-shrink: 0;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	/* #ifdef H5 */
	cursor: pointer;
	/* #endif */
}
</style>
