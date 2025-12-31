<script lang="ts" setup>
import { ref, computed, onBeforeUnmount, onMounted, watch, type PropType, nextTick, getCurrentInstance } from 'vue';
import { arrayNumberValid, arrayNumberValidByStyleMP, covetUniNumber, linearValid } from '../../libs/tool'
import { useTmConfig } from '../../libs/config'
import { getDefaultColor } from '../../libs/colors'
import { $i18n } from "@/uni_modules/tm-ui"

/**
 * @displayName 查看更多
 * @exportName tm-more
 * @category 展示组件
 * @description 让内容超过指定高时自动隐藏内容.
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
	| --- | --- | --- | --- |
	| ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: "tmMore" })


defineSlots<{
	default(props: { isOpened: boolean }): any
}>()

const emits = defineEmits([
	/**
	 * 状态切换时变换
	 * @param { boolean } opened - 当前打开的状态
	 */
	'change',
	/**
	 * 点击展开的按钮时触发
	 * @param {boolean} opened - 当前打开的状态,可以通过此判断是点打开还是点关闭
	 */
	'click',
	'update:modelValue'
])

type tmMorePropsType = {
	/**
	 * 组件宽度
	 */
	width?: string,
	/**
	 * 被关闭时的高度。
	 */
	height?: string,
	/**
	 * 当前打开的状态
	 */
	modelValue?: boolean,
	/**
	 * 激活后的文本色,默认是读取全局色
	 */
	activeColor?: string,
	/**
	 * 未激活后的文本色
	 */
	unActiveColor?: string,
	/**
	 * 打开和关闭状态的文本
	 * "展开更多", "收起更多"
	 */
	text?: string[],
	/**
	 * 遮罩的渐变的背景色
	 */
	maskBgColor?: string[],
	/**
	 * 暗黑时遮罩的渐变的背景色
	 */
	darkMaskBgColor?: string[],
	/**
	 * 是否禁用展开。
	 */
	disabled?: boolean,
	/**
	 * 是否显示开启和关闭按钮,
	 * 因为各个手机屏幕可能不一样,可能会根据行数自行决定是否
	 * 要显示展开和关闭按钮,请通过此自行判断.
	 */
	showMoreBtn?: boolean
}

const props = withDefaults(defineProps<tmMorePropsType>(), {
	width: "auto",
	height: "60",
	modelValue: false,
	activeColor: "",
	unActiveColor: "#a6a6a6",
	text: () => [] as string[],
	maskBgColor: () => ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.3)'],
	darkMaskBgColor: () => ['rgba(24, 24, 24, 1.0)', 'rgba(24, 24, 24, 0.3)'],
	disabled: false,
	showMoreBtn: true
})
const { config } = useTmConfig()
const proxy = getCurrentInstance()?.proxy
// 响应式数据
const boxHeight = ref(0)
const opened = ref(false)
// 计算属性
const _showMoreBtn = computed((): boolean => props.showMoreBtn)
const _disabled = computed((): boolean => props.disabled)
const _width = computed((): string => covetUniNumber(props.width, config.unit))
const _height = computed((): string => covetUniNumber(props.height, config.unit))
const _activeColor = computed((): string => {
	if (props.activeColor == "") return getDefaultColor(config.color);
	return getDefaultColor(props.activeColor);
})
const _unActiveColor = computed((): string => {
	return getDefaultColor(props.unActiveColor);
})

const _text = computed((): string[] => {
	if (props.text.length == 0) {
		let arg: string[] = [$i18n.t('tmui32x.tmMore.off'), $i18n.t('tmui32x.tmMore.on')]
		return arg;
	}
	return props.text
})
const _maskBgColor = computed((): string => {
	if (config.mode == 'dark') {
		return `linear-gradient(to top, ${props.darkMaskBgColor[0]}, ${props.darkMaskBgColor[1]})`
	}
	return `linear-gradient(to top, ${props.maskBgColor[0]}, ${props.maskBgColor[1]})`
})

// 方法
function getNodeInfoByreset(): void {
	uni.createSelectorQuery()
		.in(proxy)
		.select(".tmMoreWrap")
		.boundingClientRect().exec((ret) => {
			let nodeinfo = ret[0] as UniApp.NodeInfo
			boxHeight.value = nodeinfo.height!
		})
}

function getNodeInfo(istrue: boolean): void {
	uni.createSelectorQuery()
		.in(proxy)
		.select(".tmMoreWrap")
		.boundingClientRect().exec((ret) => {
			let nodeinfo = ret[0] as UniApp.NodeInfo
			boxHeight.value = nodeinfo.height!
			opened.value = istrue
			/**
			 * 等同v-model
			 */
			emits("update:modelValue", istrue)
		})
}

function onClick(): void {
	emits('click', opened.value)

	if (_disabled.value) return;
	let ctrue = !opened.value
	getNodeInfo(ctrue);
	/**
	 * 状态切换时变换
	 * @param opened { boolean } 当前打开的状态
	 */
	emits("change", ctrue)
}

// 监听器
watch((): boolean => props.modelValue, (newvalue: boolean) => {
	if (opened.value == newvalue) return;
	getNodeInfo(newvalue);
})

// 生命周期
onMounted(() => {
	getNodeInfo(props.modelValue)

	getNodeInfoByreset()
})


</script>
<template>
	<view>
		<view class="tmMore" :style="{ width: _width, height: opened ? boxHeight + 'px' : _height }">
			<view class="tmMoreWrap">
				<!-- 
				@slot 默认插槽 
				@prop {boolean} isOpened - 当前是否打开
				 -->
				<slot :isOpened="opened"></slot>
			</view>
			<view v-if="!opened && _showMoreBtn" class="tmMoreMasker" :style="{ 'background-image': _maskBgColor }">
			</view>
		</view>
		<view v-if="_showMoreBtn" class="tmMoreTextBox" @click="onClick" :disabled="_disabled">
			<text class="tmMoreText" :style="{ color: opened ? _activeColor : _unActiveColor }">
				{{ opened ? _text[1] : _text[0] }}
			</text>
			<tm-icon size="28" :color="opened ? _activeColor : _unActiveColor"
				:name="opened ? 'arrow-up-s-line' : 'arrow-down-s-line'"></tm-icon>
		</view>

	</view>
</template>
<style scoped>
.tmMoreTextBox {
	/* background-color: rgba(255, 255, 255, 0.8); */
	padding: 20rpx 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	/* #ifdef WEB */
	cursor: pointer;
	/* #endif */
}

/* #ifdef WEB */

.tmMoreTextBox[disabled=true] {
	cursor: no-drop;
}

/* #endif */
.tmMoreText {
	font-size: 14px;
	color: #a6a6a6;
	text-align: center;
}

.tmMore {
	overflow: hidden;
	transition-duration: 350ms;
	transition-property: height;
	transition-timing-function: cubic-bezier(0, 0.55, 0.45, 1);
	position: relative;
}

.tmMoreWrap {}

.tmMoreMasker {
	position: absolute;
	left: 0px;
	bottom: 0px;
	width: 100%;
	height: 100%;
	/* background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.3)); */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
}
</style>