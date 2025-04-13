<template>
	<tm-sheet>
		<tm-text class="text-weight-b mb-16 d-block" font-size="36">规格选择器 TmSku</tm-text>
		<view>
			<tm-text>支持多规格单规格模式,快速的商品规格选择.</tm-text>
		</view>
	</tm-sheet>
	<tm-sheet>
		<tm-button block @click="openSku">打开sku</tm-button>
	</tm-sheet>
	<tm-sku v-model="selectedVal" v-model:model-show="show" :data="product"></tm-sku>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)
	const selectedVal = ref('b-2')
	const product : TM.SKU_DATA = {
		data: [
			{
				id: 'color',
				title: '颜色外观',
				children: [
					{ id: 'a', title: '沙漠色' },
					{ id: 'b', title: '原色钛' }
				]
			},
			{
				id: 'size',
				title: '容量',
				children: [
					{ id: '1', title: '256GB' },
					{ id: '2', title: '512GB', inventory_quantity: 0 },
					{ id: '3', title: '1TB' }
				]
			}
		],
		product: [
			{
				title: '沙漠色-256GB',
				id: 'a-1',
				inventory_quantity: 50,
				max_buy_quantity: 1,
				min_buy_quantity: 1,
				original_price: 5999,
				price: 4999,
				img: 'https://img10.360buyimg.com/n1/s800x800_jfs/t1/264648/17/5056/33086/67715a61Ff394bd13/fc6bec790465ee36.png'
			},
			{
				title: '沙漠色-512GB',
				id: 'a-2',
				inventory_quantity: 0,
				max_buy_quantity: 2,
				min_buy_quantity: 1,
				original_price: 6999,
				price: 5999,
				img: 'https://img10.360buyimg.com/n1/s800x800_jfs/t1/264648/17/5056/33086/67715a61Ff394bd13/fc6bec790465ee36.png'
			},
			{
				title: '沙漠色-1TB',
				id: 'a-3',
				inventory_quantity: 20,
				max_buy_quantity: 1,
				min_buy_quantity: 1,
				original_price: 9999,
				price: 8999,
				img: 'https://img10.360buyimg.com/n1/s800x800_jfs/t1/264648/17/5056/33086/67715a61Ff394bd13/fc6bec790465ee36.png'
			},
			{
				title: '原色钛-256GB',
				id: 'b-1',
				inventory_quantity: 50,
				max_buy_quantity: 3,
				min_buy_quantity: 1,
				original_price: 5999,
				price: 4999,
				img: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/260596/18/5137/32821/67715a71F1daf206d/103e0ea83209d416.png'
			},
			{
				title: '原色钛-512GB',
				id: 'b-2',
				inventory_quantity: 0,
				max_buy_quantity: 1,
				min_buy_quantity: 1,
				original_price: 6999,
				price: 5999,
				img: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/260596/18/5137/32821/67715a71F1daf206d/103e0ea83209d416.png'
			},
			{
				title: '原色钛-1TB',
				id: 'b-3',
				inventory_quantity: 50,
				max_buy_quantity: 2,
				min_buy_quantity: 1,
				original_price: 9999,
				price: 8999,
				img: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/260596/18/5137/32821/67715a71F1daf206d/103e0ea83209d416.png'
			}

		]
	}
	const openSku = () => {
		show.value = true
	}
</script>
<style lang="scss"></style>