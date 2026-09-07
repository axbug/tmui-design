<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(10)
</script>

<template>
	<view>
		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b mb-16 d-block">进度条 tmProgress</tm-text>
			<tm-text class="" color="#999999">
				配置灵活，自由度高。
			</tm-text>
		</tm-sheet>

		<tm-sheet>
			<tm-progress :model-value="50"></tm-progress>
		</tm-sheet>
		<tm-sheet>
			<tm-progress :model-value="50" color="error" size="18" show-label label-inside></tm-progress>
		</tm-sheet>

		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b d-block">受控及动画演示</tm-text>
			<tm-text color="#999999" class=" mb-n8 ">
				演示标签插槽，状态自定义，渐变，自定颜色等属性。
			</tm-text>
			<tm-progress v-model="value"></tm-progress>
			<tm-progress v-model="value" :color="value > 50 ? 'success' : 'primary'" class="mt-n8"
				show-label="true"></tm-progress>
			<tm-progress v-model="value" color="warn" size="12" class="mt-n8" show-label>
				<template v-slot:default="{ value, percentage }">
					<tm-icon color="success" v-if="percentage > 80" name="checkbox-circle-line"></tm-icon>
					<tm-icon color="warn" v-else name="close-circle-line"></tm-icon>
				</template>
			</tm-progress>
			<tm-progress v-model="value" linear-color="linear-gradient(to right, #FFEB3A 0%, #4DEF8E 100%)" size="12"
				class="mt-n8">
			</tm-progress>

			<view class="flex flex-row gap-10 mt-n8">
				<tm-tag @click="value = 10">10</tm-tag>
				<tm-tag @click="value = 50">50</tm-tag>
				<tm-tag @click="value = 100">100</tm-tag>
			</view>
		</tm-sheet>


	</view>

</template>

<style scoped></style>
