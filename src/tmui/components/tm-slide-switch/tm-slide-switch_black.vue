<template>
	<view :attr="attr" :leftWidth="leftWidth" :rightWidth="rightWidth" :opened="opened" :closed="closed"
		@touchstart="_disabled || action.startDrag" :style="`width:${attr.width}px;height:${attr.height}px `"
		class="overflow" :class="[attr.disabled ? 'opacity-7' : '']">
		<view>
			<slot name="left">9999</slot>
		</view>
		<view>
			<slot name="right"></slot>
		</view>
		{{ action }}
	</view>
</template>
<script module="action" lang="wxs" src="./action.wxs"></script>
<script lang="ts" setup>
/**
 * 左滑操作栏
 * @description  向左滑动显示底部操作按钮栏。
 */
import { computed, nextTick, onMounted, PropType, ref, watch, watchEffect } from "vue";
import { custom_props } from "../../tool/lib/minxs";
import { actionItem } from "./interface";
import { defaultProps } from "./props";
import tmSheet from "../tm-sheet/tm-sheet.vue";
import tmText from "../tm-text/tm-text.vue";
import tmIcon from "../tm-icon/tm-icon.vue";
const props = defineProps({
	...custom_props,
	...defaultProps,
});
const emits = defineEmits(["click", "action-click", "update:open-status"])

const _disabled = ref(props.disabled);
const opened = ref(false)
const closed = ref(false)
const attr = computed(() => {
	return {
		width: Math.ceil(uni.$tm.u.topx(props.width)),
		height: Math.ceil(uni.$tm.u.topx(props.height)),
		disabled: props.disabled,
	};
});

const list_left = computed(() => {
	let lp = props.leftMenu.map((el) => {
		return {
			text: el?.text ?? "",
			color: el?.color ?? "white",
			width: el?.width ?? 180,
			icon: el?.icon ?? "",
			...el,
		};
	});
	return lp;
});
const list_right = computed(() => {
	let lp = props.rightMenu.map((el) => {
		return {
			text: el?.text ?? "",
			color: el?.color ?? "white",
			width: el?.width ?? 180,
			icon: el?.icon ?? "",
			...el,
		};
	});
	return lp;
});

const leftWidth = computed(() => {
	let w = 0;
	list_left.value.forEach(el => w += el.width)
	return w;
})

const rightWidth = computed(() => {
	let w = 0;
	list_right.value.forEach(el => w += el.width)
	return w;
})


function close() {
	opened.value = false;
}
function open() {
	opened.value = true;
}
function tap() {
	close()
}

</script>

<style>

</style>
