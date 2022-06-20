<template>
	<view class="flex flex-col relative"
		:style="[appConfig.theme ? { background: appConfig.theme } : '', { width: appConfig.width + 'px', minHeight: appConfig.height + 'px' }]">
		<!-- #ifndef APP-NVUE -->
		<!-- 	<image
			v-if="appConfig.bgImg"
			:class="[isDark ? 'opacity-1' : 'opacity-8']"
			:src="bgImg"
			:style="[{ zIndex: 0, width: appConfig.width + 'px', height: appConfig.height + 'px' }]"
		></image> -->
		<!-- #endif -->
		<view v-if="isSetThemeOk" class="flex flex-col flex-1" :class="[blur ? 'blur' : '']" :style="[
			{
				zIndex: 1,
				width: appConfig.width + 'px',
				minHeight: appConfig.height + 'px'
			},
			blur ? { backgroundColor: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(248, 248, 248, 0.7)' } : ''
		]">
			<slot name="default">
				<text>在这里放置内容</text>
			</slot>
		</view>
	</view>
</template>
<script lang="ts" setup>
	/**
	 * 应用容器
	 * @description 这是所有创建应用的最外层基础容器。
	 */
	import {
		provide,
		getCurrentInstance,
		computed,
		watchEffect,
		ref,
		watch,
		onBeforeMount
	} from 'vue';
	import {
		useTmpiniaStore
	} from '../../tool/lib/tmpinia';
	import {
		colorThemeType,
		cssstyle,
		tmVuetify
	} from '../../tool/lib/interface';
	import {
		custom_props,
		computedTheme,
		computedClass,
		computedStyle,
		computedDark
	} from '../../tool/lib/minxs';
	const store = useTmpiniaStore();
	const {
		proxy
	} = getCurrentInstance()
	// 混淆props共有参数
	const props = defineProps({
		...custom_props,
		//整体的主题色调同全局色一样。
		theme: {
			type: String,
			default: 'grey-5'
		},
		//应用的背景图。https://picsum.photos/750/1448
		bgImg: {
			type: String,
			default: ''
		},
		//应用的背景颜色。
		color: {
			type: String,
			default: 'grey-4'
		},
		blur: {
			type: [Boolean, String],
			default: false
		},
		navbar: {
			type: Object,
			default: () => {
				return {
					background: '#ffffff',
					fontColor: '#000000'
				};
			}
		},
		tabar: {
			type: Object,
			default: () => {
				return {
					background: '#ffffff',
					fontColor: '#222222'
				};
			}
		}
	});
	// 设置响应式全局组件库配置表。
	const tmcfg = computed(() => store.tmStore);
	const isSetThemeOk = ref(false)
	//自定义样式：
	// const customCSSStyle = computed(()=>computedStyle(props));
	//自定类
	// const customClass = computed(()=>computedClass(props));
	//是否暗黑模式。
	const isDark = computed(() => computedDark(props, tmcfg.value));
	//计算主题
	const tmcomputed = computed < cssstyle > (() => computedTheme(props, isDark.value));
	//返回应用背景和文件色值。

	const {
		safeArea,
		windowWidth,
		windowHeight,
		statusBarHeight,
		windowTop
	} = uni.getSystemInfoSync()
	const sysinfo = uni.getSystemInfoSync()
	// 视察的宽。
	const view_width = ref(safeArea?.width || windowWidth);
	//视窗的高度。
	let view_height = ref(windowHeight + (windowTop || 0));

	// #ifdef MP
	view_height.value = windowHeight
	// #endif
	// #ifdef H5
	// 由于在h5端根本无法判断当前是使用了nav还是没有使用。只能判断当前dom了。
	if (document.querySelector('.uni-page-head')) {
		view_height.value = windowHeight
	}
	// #endif
	// #ifdef APP 
	// 如果存在导航栏？
	if (sysinfo.safeArea.top > 0) {
		view_height.value = sysinfo.screenHeight
	} else {
		view_height.value = sysinfo.safeArea.height - Math.abs(statusBarHeight);
	}



	// #endif





	// //https://picsum.photos/750/1440
	let appConfig = ref({
		width: view_width,
		height: view_height,
		theme: tmcomputed.value.backgroundColor,
		bgImg: props.bgImg,
		dark: isDark.value
	});

	function setAppStyle() {
		if (isDark.value) {
			appConfig.value.theme = '#050505';
		} else {
			appConfig.value.theme = tmcomputed.value.backgroundColor;
		}
		// #ifdef MP-WEIXIN || MP-BAIDU || MP-QQ || MP-KUAISHOU || MP-LARK
		uni.setBackgroundColor({
			backgroundColor: appConfig.value.theme,
			backgroundColorBottom: appConfig.value.theme,
			backgroundColorTop: appConfig.value.theme
		}).catch(e => {});
		// #endif

		// #ifdef APP-NVUE ||  APP-VUE
		plus.webview.currentWebview().setStyle({
			background: appConfig.value.theme,
			backgroundColorTop: appConfig.value.theme,
			backgroundColorBottom: appConfig.value.theme,
			userSelect: true,
			webviewBGTransparent: true
		})
		// app安卓下设置底部虚拟区域的颜色。
		if (uni.getSystemInfoSync().osName == 'android') {
			var Color = plus.android.importClass("android.graphics.Color");
			plus.android.importClass("android.view.Window");
		 var mainActivity = plus.android.runtimeMainActivity();
			var window_android = mainActivity.getWindow();

			if (appConfig.dark) {
				window_android.setNavigationBarColor(Color.BLACK);
			} else {
				window_android.setNavigationBarColor(Color.WHITE);
			}
		}

		// #endif
		// #ifdef H5
		document.body.style.background = appConfig.value.theme;
		// #endif

		if (isDark.value) {
			uni.setNavigationBarColor({
				backgroundColor: appConfig.value.theme,
				frontColor: '#ffffff'
			}).catch(e => {});
			uni.setTabBarStyle({
				backgroundColor: '#000000',
				borderStyle: '#1a1a1a',
				color: '#ffffff'
			}).catch(e => {});
		} else {
			uni.setNavigationBarColor({
				backgroundColor: props.navbar.background,
				frontColor: props.navbar.fontColor
			}).catch(e => {});
			uni.setTabBarStyle({
				backgroundColor: props.navbar.background,
				borderStyle: '#888888',
				color: props.navbar.fontColor
			}).catch(e => {});
		}
		
		isSetThemeOk.value = true;
	}
	setAppStyle()
	// let textColor = ref(tmcomputed.value.textColor);
	//向下子组件传递，相关参数，可代替store使用。
	provide('appTextColor', computed(() => tmcomputed.value.textColor));
	//各个组件之间的间隙。
	provide('custom_space_size', [0, 0]);
	/**
	 * 设定主题
	 * @params colorName 主题名称
	 */
	function setTheme(colorName: string) {
		store.setTmVuetifyTheme(colorName)
	}

	//设定暗黑
	function setDark(dark ? : boolean) {
		let maindark = !isDark.value;
		if (typeof dark !== 'undefined' && typeof dark == 'boolean') {
			maindark = dark;
		}
		appConfig.value.dark = maindark;
		store.setTmVuetifyDark(maindark)
	}

	//向ref外层公开本组件的特定方法。
	defineExpose({
		setTheme: setTheme,
		setDark: setDark
	});
	//监视全局主题并立即执行。
	onBeforeMount(() => setAppStyle())
	watch([()=>tmcfg.value.color, isDark], () => {
		isSetThemeOk.value = false;
		setAppStyle();
	});
</script>
