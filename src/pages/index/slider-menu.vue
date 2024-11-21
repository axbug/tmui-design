<template>
	<view class="flex-1 flex flex-col" style="height: 100%;">
		<tm-sheet>
			<tm-text font-size="36" class="text-weight-b mb-16 d-block">侧边菜单 TmSliderMenu</tm-text>
			<view>
				<tm-text>方便侧边菜单右边内容管理，示例写了个双向定位展示的样板，方便大家复制直接使用。样式非常灵活，可以任意定制你想要的格式，也兼容PC端</tm-text>
			</view>
		</tm-sheet>
		<view class="flex-1 mx-n6 round-4 overflow">
			<tm-slider-menu
				v-model="defaultSelected"
				height="100%"
				:list='list'
				slider-bg-color="#efefef"
				:menuSelectedStyle="{
					backgroundColor:'#ffffff',
					borderLeft:'none',
					fontWeight:'bold'
				}"
			>
				<template v-slot:default="{item}">
					<view class="sticky t-0 l-0 fulled px-20 white flex flex-row flex-row-center-start text-weight-b"
						  style="height: 88rpx;background-color: white;">
						<tm-text font-size="32">#{{item.id}}{{item.title}}</tm-text>
					</view>
					<view class="px-20 white flex flex-wrap flex-row gap-10">
						<view class="flex-shrink flex flex-center"
							  style="height:120px;width:calc(33% - 20rpx);background-color: #f5f5f5;"
							  v-for="(item2,index2) in 8" :key="index2">
							{{item2}}
						</view>
					</view>
				</template>

			</tm-slider-menu>
		</view>
	</view>

</template>
<script setup lang="ts">
import { ref } from "vue"
const defaultSelected = ref(2)
const list = ref([
	{ id: 1, title: "水果" },
	{ id: 2, title: "蔬菜" },
	{ id: 3, title: "肉类" },
	{ id: 4, title: "海鲜" },
	{ id: 5, title: "酒水" },
	{ id: 6, title: "饮料" },
	{ id: 7, title: "零食" },
	{ id: 8, title: "水果" },
	{ id: 9, title: "蔬菜" },
	{ id: 10, title: "肉类" },
	{ id: 11, title: "海鲜" },
	{ id: 12, title: "酒水" },
	{ id: 13, title: "饮料" },
	{ id: 14, title: "零食" },
	{ id: 15, title: "水果" },
])
</script>

<style lang="scss">
page,
body,
html {
	height: 100%;
	display: flex;
	flex-direction: column;
}
</style>