<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->

<script lang="ts" setup>

const outIndex = 2
const list: TM.TABBAR_ITEM_INFO[] = [
	{ title: '首页', icon: 'home-smile-2-line', selectedIcon: 'home-smile-2-fill', dotType: 'dot' },
	{ title: '分类', icon: 'drive-line', selectedIcon: 'drive-fill' },
	{ title: '购物车', icon: 'shopping-basket-line', selectedIcon: 'shopping-basket-fill' },
	{ title: '统计', icon: 'bar-chart-2-line', selectedIcon: 'bar-chart-2-fill', dotLabel: '99+' },
	{ title: '我的', icon: 'group-line', selectedIcon: 'group-fill' }
]
</script>

<template>
	<tm-tabbar
		:list="list"
		:outIndex="2"
		class="mb-24"
		color="rgba(0,0,0,0.64)"
		out-bg-color="#ffffff"
		out-icon-color="#16ee9c"
		position="relative"
		selected-color="#000000"
	>
	</tm-tabbar>
</template>

<style scoped>

</style>