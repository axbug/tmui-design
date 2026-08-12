<template>
	<view>
		<tm-sheet>
			<tm-text font-size="36" class="text-weight-b d-block">浮动面板</tm-text>
			<view>
				<tm-text>可以拖拉上下关闭和打开状态</tm-text>
			</view>
		</tm-sheet>
		<view class="flex flex-center">
			<image :style="{ width: percentProg / 100 * 310 + 'px', height: percentProg / 100 * 410 + 'px' }"
				src="https://cdn.tmui.design/public/design/weixinQR2.jpg?v=1768982911560"></image>
		</view>
		<tm-float-drawer v-model:show="show" @heightChange="onHeightChange" @open="onOpen" @close="onClose">
			<view class="mb-n8">
				<tm-button @click="show = !show" block>打开/关闭浮动面板</tm-button>
			</view>

			<tm-sheet class="gap-16 flex flex-row">
				<tm-icon size="64" name="home-4-fill"></tm-icon>
				<tm-icon size="64" name="ancient-gate-fill"></tm-icon>
				<tm-icon size="64" name="archive-2-fill"></tm-icon>
				<tm-icon size="64" name="verified-badge-fill"></tm-icon>
				<tm-icon size="64" name="printer-fill"></tm-icon>
			</tm-sheet>
		</tm-float-drawer>
	</view>
</template>
<script setup lang="ts">
	import { ref } from 'vue';
	const percentProg = ref(0)
	const show = ref(false);

	const onHeightChange = (percent : number) => {
		// console.log('高度变化:', percent + '%');
		percentProg.value = percent;
	};
	const onOpen = () => {
		console.log('打开');
	};

	const onClose = () => {
		console.log('关闭');
	};
</script>
<style lang="scss"></style>
