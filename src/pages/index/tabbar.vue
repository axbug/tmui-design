<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->

<script lang="ts" setup>
import { ref } from 'vue';

const outIndex = ref(2)
const list: TM.TABBAR_ITEM_INFO[] = [
	{ title: '首页', icon: 'home-smile-2-line', selectedIcon: 'home-smile-2-fill', dotType: 'dot' },
	{ title: '分类', icon: 'cloud-line', selectedIcon: 'cloud-fill' },
	{ title: '购物车', icon: 'shopping-basket-line', selectedIcon: 'shopping-basket-fill' },
	{ title: '统计数据', icon: 'bar-chart-2-line', selectedIcon: 'bar-chart-2-fill', dotLabel: '99+' },
	{ title: '我的', icon: 'group-line', selectedIcon: 'group-fill' }
]
</script>

<template>
	
	<tm-sheet >
		<tm-text font-size="36" class="text-weight-b d-block">底部导航 TmTabbar</tm-text>
		<view class="mb-n8">
		    <tm-text>可以设置凸起，也可以关闭，用于底部导航使用，多页面导航等。</tm-text>
		</view>
		<tm-button block @click="outIndex = 3">切换outIndex</tm-button>
	</tm-sheet>
	<tm-tabbar
		:list="list"
		:outIndex="outIndex"
		color="rgba(0,0,0,0.64)"
		out-bg-color="#000000"
		out-icon-color="#eeeeee"
		position="fixed"
		selected-color="#000000"
	>
	</tm-tabbar>
</template>

<style scoped>

</style>
