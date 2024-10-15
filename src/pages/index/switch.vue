<template>
	<view>
		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b mb-16 d-block">开关 tmSwitch</tm-text>
			<tm-text color="#999999">样式可全局配置，统一修改风格</tm-text>
		</tm-sheet>
		<tm-sheet class="flex flex-row gap-10">
			<tm-switch size="small"></tm-switch>
			<tm-switch ></tm-switch>
			<tm-switch @change="onchange" v-model="kaiguan" size="large"></tm-switch>
		</tm-sheet>

		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b ">显示内文字</tm-text>
		</tm-sheet>
		<tm-sheet class="flex flex-row gap-10">
			<tm-switch :label='["开", "关"]'></tm-switch>
			<tm-switch  :label='["ON", "OFF"]'></tm-switch>
		</tm-sheet>

		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b">修改颜色</tm-text>
		</tm-sheet>
		<tm-sheet class="flex flex-row gap-10">
			<tm-switch :modelValue="true" color="danger"></tm-switch>
			<tm-switch :modelValue="true"  color="success"></tm-switch>
			<tm-switch :modelValue="true" color="error"></tm-switch>
		</tm-sheet>

		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b">状态</tm-text>
		</tm-sheet>
		<tm-sheet class="flex flex-row gap-10">
			<tm-switch :modelValue="true" :disabled="true"></tm-switch>
			<tm-switch :modelValue="true"  :loading="true"></tm-switch>
		</tm-sheet>

		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b">圆角风格,及修改间隙</tm-text>
		</tm-sheet>
		<tm-sheet class="flex flex-row gap-10">
			<tm-switch round="4" space="6px"></tm-switch>
			<tm-switch round="6" ></tm-switch>
		</tm-sheet>

		<view class="py-20"></view>
	</view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const kaiguan = ref(false)
const onchange = (open: boolean) => {

}
</script>

<style></style>
