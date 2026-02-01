<script setup lang="ts">
	import { type PropType, computed, nextTick, ref, watch, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue';
	import { useTmConfig } from "../../libs/config";
	import { getDefaultColor } from '../../libs/colors';
	import { covetUniNumber } from '../../libs/tool';

	/**
	 * @displayName 下拉刷新
	 * @exportName tm-pull-refresh
	 * @category 反馈组件
	 * @description 下拉刷新组件，支持自定义下拉和触底刷新的内容。
	 * @constant 平台兼容
	 *	| H5 | uniAPP | 小程序 | version |
	 *  | --- | --- | --- | --- |
	 *  | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
	 */
	defineOptions({ name: "tmPullRefresh" });
	const { config } = useTmConfig();
	const proxy = getCurrentInstance()?.proxy;
	const emit = defineEmits([

		/**
		 * 滚动的时候触发
		 * @param {UniScrollEvent}  evt - 滚动事件参数
		 */
		'scroll',
		/**
		 * 滚动的时候触发
		 * @param {string:up,down}  type - 当前的滚动方向up表示往下拉，内容向上滚动，down表示往上拉，内容向下滚动
		 */
		'scrollDirection'
	]);
	const props = defineProps({
		/**
		 * 高，可以是百分比，px,rpx等单位数字或者字符串。
		 */
		height: {
			type: String,
			default: '100%'
		},
		/**
		 * 下拉区域触发刷新的高度
		 */
		pullHeight: {
			type: Number,
			default: 60
		},
		/**
		 * 图标颜色,空值时，取全局主题色。
		 */
		color: {
			type: String,
			default: ""
		},
		/**
		 * 文字颜色,空值时，取全局主题色。
		 */
		textColor: {
			type: String,
			default: ""
		},
		/**
		 * 是否显示滚动条
		 */
		showScrollbar: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否禁用下拉刷新
		 */
		disabledPull: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否禁用触底刷新
		 */
		disabledBottom: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否进入就刷新数据
		 */
		fristLoad: {
			type: Boolean,
			default: false
		},
		/** 触下拉刷新时执行本事件，返回true成功，false失败 */
		pullRefresh: {
			type: Function as PropType<(() => Promise<boolean>)>,
			default: () => (() => Promise.resolve(true))
		},
		/** 触底刷新时执行本事件，返回true成功，false失败 */
		bottomRefresh: {
			type: Function as PropType<(() => Promise<boolean>)>,
			default: () => (() => Promise.resolve(true))
		}
	});

	// 状态管理
	const scrollTop = ref(0);
	const pullStatus = ref<'normal' | 'pulling' | 'refreshing' | 'success' | 'error'>('normal');
	const bottomStatus = ref<'normal' | 'loading' | 'success' | 'error'>('normal');
	const pullDy = ref(0);
	const bottomStatusViewId = ref('');
	const pulling = ref(false)
	const bottomPulling = ref(false)
	const refreshId = ref(56)
	const refreshIdWait = ref(56)
	const bottomRefreshId = ref(56)
	// 计算属性
	const colorValue = computed(() => {
		if (props.color) return getDefaultColor(props.color);
		return getDefaultColor(config?.color || '#007aff');
	});

	const textColorValue = computed(() => {
		if (props.textColor) return getDefaultColor(props.textColor);
		return getDefaultColor(config?.color || '#007aff');
	});

	const pullText = computed(() => {
		switch (pullStatus.value) {
			case 'pulling':
				if (pullDy.value >= props.pullHeight) return '释放刷新';
				return '下拉刷新';
			case 'refreshing':
				return '刷新中...';
			case 'success':
				return '刷新完成';
			case 'error':
				return '刷新失败，点击重试';
			default:
				return '';
		}
	});

	const bottomText = computed(() => {
		switch (bottomStatus.value) {
			case 'loading':
				return '加载中...';
			case 'success':
				return '加载完成';
			case 'error':
				return '加载失败，点击重试';
			default:
				return '';
		}
	});

	const contentStyle = computed(() => {
		return {
			height: props.height
		};
	});

	// 方法
	const setScrollTop = (top : number) => {
		scrollTop.value = top;
	};

	const setScrollIntoView = (id : string) => {
		bottomStatusViewId.value = id
	};

	const handleScroll = (e : any) => {
		emit('scroll', e);
		// 计算滚动方向
		const currentScrollTop = e.detail.scrollTop;
		let dir = e.detail.deltaY < 0 ? 'up' : 'down'
		emit('scrollDirection', dir);
		scrollTop.value = currentScrollTop;
	};

	const handleScrollToLower = () => {
		if (!props.disabledBottom && !bottomPulling.value) {
			handleBottomRefresh();
		}
	};

	const handleRefresherPulling = (e : any) => {
		pullDy.value = e.detail.dy
		pullStatus.value = 'pulling';
	};

	const handleRefresherRefresh = async () => {
		if (props.disabledPull || pulling.value) return;
		pulling.value = true;
		pullStatus.value = 'refreshing';
		// 调用刷新回调
		clearTimeout(refreshId.value);
		refreshId.value = setTimeout(() => {
			pullStatus.value = 'error'

			console.log('下拉刷新失败---');
		}, 10 * 1000);
		const pullSuccess = await props.pullRefresh();
		if (pullSuccess) {
			pullStatus.value = 'success';
			clearTimeout(refreshIdWait.value);
			refreshIdWait.value = setTimeout(() => {
				pulling.value = false;
				pullStatus.value = 'normal';
				pullDy.value = 0
			}, 1200);
		} else {
			pullStatus.value = 'error';
			setTimeout(() => {
				pulling.value = false;
			}, 1200);
		}
	};

	const handleRefresherRestore = () => {
		clearTimeout(refreshIdWait.value);
		clearTimeout(refreshId.value);
		pullStatus.value = 'normal';
		pullDy.value = 0
		pulling.value = false;
	};

	const handleBottomRefresh = async () => {
		if (props.disabledBottom) return;
		bottomStatus.value = 'loading';
		bottomPulling.value = true;
		// 调用触底刷新回调
		clearTimeout(bottomRefreshId.value);
		bottomRefreshId.value = setTimeout(() => {
			bottomStatus.value = 'error';
		}, 10 * 1000);
		nextTick(() => {
			bottomStatusViewId.value = 'bottom-refresh';
		})
		const pullSuccess = await props.bottomRefresh();
		if (pullSuccess) {
			bottomStatus.value = 'success';
			setTimeout(() => {
				bottomPulling.value = false;
				bottomStatus.value = 'normal';
			}, 1200);
		} else {
			bottomStatus.value = 'error';
		}


	};
	const _topullPos = computed(()=>{
		let top = 0
		// #ifdef MP
		top = -props.pullHeight
		// #endif
		return top
	})
	const retryRefresh = () => {
		if (pullStatus.value === 'error') {
			pulling.value = false;
			handleRefresherRefresh();
		}
	};

	const retryBottomRefresh = () => {
		if (bottomStatus.value === 'error') {
			bottomPulling.value = false;
			handleBottomRefresh();
		}
	};

	// 暴露方法
	defineExpose({
		/** 滚动到指定位置 */
		setScrollTop,
		/** 滚动到指定id元素 */
		setScrollIntoView
	});

	onMounted(() => {
		// 初始化时如果modelValue为true，触发刷新
		if (props.fristLoad) {
			pullStatus.value = 'refreshing';
		}
	});

	onBeforeUnmount(() => {
		clearTimeout(bottomRefreshId.value);
		clearTimeout(refreshId.value);
	});
</script>

<template>
	<view class="tm-pull-refresh" :style="contentStyle">
		<!-- 内容区域 -->
		<scroll-view class="tm-pull-refresh__content" :scroll-into-view="bottomStatusViewId" 
			:style="{ pointerEvents:pullStatus!='refreshing'?'auto':'none' }"  :show-scrollbar="showScrollbar" @scroll="handleScroll"
			@scrolltolower="handleScrollToLower"
			:refresher-triggered="pullStatus === 'success' || pullStatus === 'refreshing' || pullStatus === 'error'"
			@refresherrefresh="handleRefresherRefresh" @refresherpulling="handleRefresherPulling"
			@refresherrestore="handleRefresherRestore" @refresherabort="handleRefresherRestore"
			:refresher-enabled="!disabledPull" :refresher-threshold="pullHeight" :refresher-default-style="'none'"
			:refresher-background="'transparent'" scroll-y enable-back-to-top>
			<!-- 顶部下拉刷新区域 -->
			<view style="position: relative;">
				<!-- v-if="pullStatus !== 'normal'" -->
				<view  class="tm-pull-refresh__pull" @click="retryRefresh"
				:style="{
				    height: pullHeight+ 'px',
					top:'0'
				}">
					<!-- 
				    顶部下拉刷新插槽
				    @binding {pullStatus} status - 状态：normal、pulling、refreshing、error、success
				    -->
					<slot name="pull" :status="pullStatus">
						<view class="tm-pull-refresh__pull-content">
							<view class="tm-pull-refresh__pull-icon" :class="{ 'refreshing': pullStatus === 'refreshing' }">
								<tm-icon v-if="pullDy < props.pullHeight && pullStatus == 'pulling'" name="arrow-down-line"
									size="36" :color="colorValue"></tm-icon>
								<tm-icon v-if="pullDy >= props.pullHeight && pullStatus == 'pulling'" size="36"
									name="arrow-up-line" :color="colorValue"></tm-icon>
								<tm-icon v-if="pullStatus === 'refreshing'" size="36" name="loader-line"
									:color="colorValue"></tm-icon>
								<tm-icon v-if="pullStatus === 'success'" size="36" name="checkbox-circle-line"
									:color="colorValue"></tm-icon>
								<tm-icon v-if="pullStatus == 'error'" size="36" name="information-line"
									color="error"></tm-icon>
							</view>
							<view class="tm-pull-refresh__pull-text"
								:style="{ color: pullStatus == 'error' ? 'red' : textColorValue }">
								{{ pullText }}
							</view>
						</view>
					</slot>
				</view>
			</view>

			<slot></slot>

			<!-- 底部触底刷新区域 -->
			<view @click="retryBottomRefresh" id="bottom-refresh" v-if="bottomStatus !== 'normal'"
				class="tm-pull-refresh__bottom">
				<!-- 
                底部触底刷新插槽
                @binding {bottomStatus} status - 状态：normal、loading、error、success
                -->
				<slot name="bottom" :status="bottomStatus">
					<view class="tm-pull-refresh__bottom-content">
						<view class="tm-pull-refresh__bottom-icon"
							:class="{ 'refreshing': bottomStatus === 'loading' }">
							<tm-icon v-if="bottomStatus == 'loading'" spin name="loader-line" size="36"
								:color="colorValue"></tm-icon>
							<tm-icon v-if="bottomStatus == 'error'" size="36" name="information-line"
								color="error"></tm-icon>
							<tm-icon v-if="bottomStatus == 'success'" size="36" name="checkbox-circle-line"
								:color="colorValue"></tm-icon>

						</view>
						<view class="tm-pull-refresh__bottom-text"
							:style="{ color: bottomStatus == 'error' ? 'red' : textColorValue }">
							{{ bottomText }}
						</view>
					</view>
				</slot>
			</view>
		</scroll-view>
	</view>
</template>

<style lang="scss" scoped>
	.tm-pull-refresh {
		width: 100%;
		position: relative;
		&__pull {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			transition: transform 0.3s ease;
			transform: translateY(-100%);
			width: 100%;
			z-index: 8;

			&-content {
				display: flex;
				align-items: center;
				
				&:active {
					opacity: 0.8;
				}
			}

			&-icon {
				margin-right: 8px;
				transition: transform 0.3s ease;

				&.refreshing {
					animation: spin 1s linear infinite;
				}
			}

			&-text {
				font-size: 14px;
				cursor: pointer;
			}
		}

		&__content {
			width: 100%;
			position: absolute;
			top:0;
			left: 0;
			height: 100%;
			z-index: 5;
		}

		&__bottom {
			padding: 20px 0;
			display: flex;
			justify-content: center;
			align-items: center;

			&-content {
				display: flex;
				align-items: center;

				&:active {
					opacity: 0.8;
				}
			}

			&-icon {
				margin-right: 8px;

				&.refreshing {
					animation: spin 1s linear infinite;
				}
			}

			&-text {
				font-size: 14px;
				cursor: pointer;
			}
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
</style>