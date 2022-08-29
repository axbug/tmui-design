<template>
	<view  v-if="showMask" :style="[{ width: width + 'px', height: height + 'px',top:top+'px',position:'fixed'},zIndex ? { zIndex: zIndex } : '']">
		<view ref="overlay"
			:class="[bgColor_rp&&!props.transprent&&ani?'blurOn':'blurOff','overlay']"
			:style="[bgColor_rp&&!props.transprent ? { backgroundColor: showMask?bgColor_rp:'' } : '',
			{ width: width + 'px', height: height + 'px',transitionDuration: props.duration+'ms'} ]"
			>
		</view>
		<view @click.stop="closeByclick" :class="[align_rpx,' absolute flex flex-col  l-0 t-0 ',customClass]" 
		:style="[{ width: width + 'px', height: height + 'px'},customCSSStyle]">
			<slot></slot>
		</view>
	</view>
</template>
<script lang="ts" setup>
	/**
	 * 遮罩层
	 * @description 遮罩层全屏弹出。
	 */
	import {
		getCurrentInstance,
		computed,
		ref,
		provide,
		inject,
		onMounted,
		onUnmounted,
		nextTick,
		watch,
		ComponentInternalInstance
	} from 'vue';
	import {
		cssstyle,
		tmVuetify
	} from '../../tool/lib/interface';
	import {
		custom_props,
		computedClass,
		computedStyle
	} from '../../tool/lib/minxs';
	// #ifdef APP-PLUS-NVUE
	const animation = uni.requireNativePlugin('animation')
	// #endif
	// 混淆props共有参数
	const props = defineProps({
		...custom_props,
		// 内容的对齐方式的类
		align: {
			type: String,
			default: 'flex-center'
		},
		//当前组件的主题。可以是颜色值，也可以是主题名称。
		bgColor: {
			type: String,
			default: 'rgba(0,0,0,0.3)'
		},
		zIndex: {
			type: [Number, String],
			default: 999
		},
		show: {
			type: Boolean,
			default: false
		},
		overlayClick: {
			type: Boolean,
			default: true
		},
		transprent: {
			type: [Boolean, String],
			default: false
		},
		duration: {
			type: Number,
			default: 200
		},
	});
	const emits = defineEmits(['click', 'open', 'close', 'update:show']);
	const proxy = getCurrentInstance()?.proxy ?? null;
	//自定义样式：
	const customCSSStyle = computedStyle(props);
	//自定类
	const customClass = computedClass(props);
	const sysinfo = inject("tmuiSysInfo",{bottom:0,height:750,width:uni.upx2px(750),top:0,isCustomHeader:false,sysinfo:null})
	const width = ref(sysinfo.width);
	const height = ref(sysinfo.height);
	const top = ref(sysinfo.top);
	const isAniing = ref(false)
	let timids = uni.$tm.u.getUid(1);
	let timerId = NaN;
	const animationData = ref(null)
	const showMask = ref(false)
	const ani = ref(false)
	onUnmounted(() => clearTimeout(timerId))
	const align_rpx = computed(() => props.align)
	const bgColor_rp = computed(() => {
		if (!props.bgColor || props.transprent) return 'rgba(0,0,0,0)';
		return props.bgColor || 'rgba(0,0,0,0.3)';
	})
	onMounted(() => {
		if (!props.show) return;
		open(props.show)
	})

	function debounce(func: Function, wait = 500, immediate = false) {
		// 清除定时器
		if (!isNaN(timerId)) clearTimeout(timerId);
		// 立即执行，此类情况一般用不到
		if (immediate) {
			var callNow = !timerId;
			timerId = setTimeout(() => {
				timerId = NaN;
			}, wait);
			if (callNow) typeof func === "function" && func();
		} else {
			// 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
			timerId = setTimeout(() => {
				typeof func === "function" && func();
			}, wait);
		}
	}

	function close() {

		if (timerId) {
			clearTimeout(timerId)
			timerId = NaN
		}
		open(false)
	}

	function closeByclick(e: Event) {
		try {
			e.stopPropagation()
			e.stopImmediatePropagation()
		} catch (e) {
			//TODO handle the exception
		}
		emits('click', e);
		if (timerId) {
			clearTimeout(timerId)
			timerId = NaN
		}
		if (!props.overlayClick) return;
		open(false)
	}

	function open(off: boolean) {
		if (off == true) {
			uni.hideKeyboard()
		}
		// #ifdef APP-NVUE
		fadeInNvue(off);
		// #endif

		// #ifndef APP-NVUE
		fadeInVue(off)
		// #endif
	}



	function fadeInNvue(off: boolean = false) {
		if (off == false) {
			if (showMask.value == off) return;
			var testEl = proxy?.$refs?.overlay;
			animation.transition(testEl, {
				styles: {
					backgroundColor: bgColor_rp.value,
					opacity: 0
				},
				duration: props.duration || 1, //ms
				timingFunction: 'linear',
				delay: 0 //ms
			}, () => {
				showMask.value = off;
				emits('close');
				emits('update:show', false);
				// isAniing.vale = false;
			})
		} else {
			showMask.value = off;
			emits('open');
			timids = setTimeout(function() {
				var testEl = proxy?.$refs.overlay;
				animation.transition(testEl, {
					styles: {
						backgroundColor: bgColor_rp.value,
						opacity: 1
					},
					duration: props.duration || 1, //ms
					timingFunction: 'linear',
					delay: 0 //ms
				}, () => {

				})
			}, 50);


		}

	}

	function fadeInVue(off = false) {
		
		if (showMask.value == off) return;
		debounce(function() {
			if (off == false) {
				ani.value = false;
				setTimeout(function() {
					showMask.value = off;
					emits('close');
					emits('update:show', false);
				}, props.duration);
			} else {
				showMask.value = true
				setTimeout(function() {
					ani.value = true;
				}, 10);
				emits('open');
				setTimeout(function() {
					emits('update:show', true);
				}, props.duration);
			}
		}, props.duration, true)
	}
	watch(() => props.show, (newval) => {
		open(newval)
	})
	defineExpose({
		close: close,
		open: open
	})
</script>

<style scoped="scoped">
.overlay{
	transition-timing-function:linear;
	transition-property: opacity;
	transition-delay: 0;
	opacity: 0;
}
.blurOn{
	/* #ifndef APP-PLUS-NVUE */
	backdrop-filter: blur(2px);
	/* #endif */
	opacity: 1;
}
.blurOff{
	/* #ifndef APP-PLUS-NVUE */
	backdrop-filter: blur(2px);
	/* #endif */
	opacity: 0;
}
</style>
