<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->

<script setup lang="ts">
import { ref } from 'vue'

const current = ref(3)
const  onChange = (index:number)=>{
	console.log(index)
}
</script>

<template>
	<tm-sheet>
		<tm-text class=" text-weight-b  d-block" font-size="32">步骤条 tmSteps</tm-text>
		<tm-text color="#999999">
			子组件独立，方便灵活自定义。
		</tm-text>
	</tm-sheet>

	<tm-sheet>
		<tm-text class=" text-weight-b mb-n8 d-block" font-size="32">隐藏标签</tm-text>
		<tm-steps :model-value="2" :show-footer="false">
			<tm-steps-item v-for="item in 5" :key="item"></tm-steps-item>
		</tm-steps>
	</tm-sheet>
	<tm-sheet>
		<tm-text class=" text-weight-b mb-n8 d-block" font-size="32">完全自定义状态</tm-text>
		<tm-steps :model-value="1" :show-footer="false" icon-size="36">
			<tm-steps-item v-for="item in 5" :key="item">
				<template v-slot:icon="{active}" >
					<tm-sheet
						:color="active?'primary':'#f5f5f5'"
						class="flex flex-center" height="100%" margin="0" padding="0" round="50%" width="100%">
						<tm-text :color="active?'#fff':'#888'" fontSize="22" >{{item}}</tm-text>
					</tm-sheet>
				</template>
			</tm-steps-item>
		</tm-steps>
	</tm-sheet>
	<tm-sheet>
		<tm-text class=" text-weight-b  d-block" font-size="32">显示标签</tm-text>
		<tm-text class="mb-n8" color="#999999">
			自定状态及进度。并允许点击交互改变进度。
		</tm-text>
		<tm-steps v-model="current" :disabled="false">
			<tm-steps-item>注册帐号</tm-steps-item>
			<tm-steps-item >审核</tm-steps-item>
			<tm-steps-item active-color="error" active-icon="user-unfollow-line">发放牌证</tm-steps-item>
			<tm-steps-item active-color="error" active-icon="close-circle-line">结算</tm-steps-item>
		</tm-steps>
	</tm-sheet>

	<tm-sheet>
		<tm-text class=" text-weight-b  d-block" font-size="32">显示标签</tm-text>
		<tm-text class="mb-n8" color="#999999">
			自定状态及进度。并允许点击交互改变进度。
		</tm-text>
		<tm-steps v-model="current" :disabled="false" :reverse="true" :vertical="true" @change="onChange">
			<tm-steps-item>注册帐号</tm-steps-item>
			<tm-steps-item >
				<template v-slot:default="{active}">
					<tm-sheet :color="active?'primary':'#fff'" :margin="[0,0,0,16]" shadow="20">
						<tm-text :color="active?'#fff':''">自定义布局外观</tm-text>
					</tm-sheet>
				</template>
			</tm-steps-item>
			<tm-steps-item active-color="error" active-icon="user-unfollow-line" desc="发放失败，资料不齐全，请重新提交资料">发放牌证</tm-steps-item>
			<tm-steps-item active-color="error" active-icon="close-circle-line" desc="无法结算">结算</tm-steps-item>
		</tm-steps>
	</tm-sheet>
</template>

<style scoped>

</style>