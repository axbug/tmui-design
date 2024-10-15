<template>
	<view>
		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b mb-16 d-block">评分 tmRate</tm-text>
			<tm-text color="#999999">
				评分组件，只读和禁用等属性
			</tm-text>
		</tm-sheet>
		<tm-sheet>
			<tm-rate></tm-rate>
		</tm-sheet>
		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b mb-16 d-block">半星</tm-text>
			<tm-rate :half="true" :model-value="2.5" ></tm-rate>
		</tm-sheet>
		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b mb-16 d-block">只读</tm-text>
			<tm-rate color="warn"  :half="true" :model-value="4.5" :readonly="true"></tm-rate>
		</tm-sheet>
		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b mb-16 d-block">禁用</tm-text>
			<tm-rate color="success" :model-value="3" :disabled="true"></tm-rate>
		</tm-sheet>
		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b mb-16 d-block">显示分数</tm-text>
			<tm-rate color="error" :model-value="3" :show-score="true"></tm-rate>
		</tm-sheet>
	</view>
</template>

<script lang="ts" setup>
import { ref } from "vue"
</script>

<style></style>
