<template>
	<view>
		<tm-sheet>
			<tm-text font-size="36" class="text-weight-b mb-8">骨架屏 tmSkeleton</tm-text>
			<tm-text color="#999999">骨架屏就是一个单view，允许你自由组合骨架效果，建议单独使用本组件自己封装一个想要的骨架效果。</tm-text>
			<tm-text color="#999999">由于每个人的app占位样式不一样，我认为这种非常自由式的组合非常符合扩展。</tm-text>
		</tm-sheet>
		<tm-sheet>
			<tm-skeleton></tm-skeleton>
		</tm-sheet>
		<tm-sheet>
			<tm-text font-size="36" class="text-weight-b ">动手组合一个骨架</tm-text>
		</tm-sheet>
		<tm-sheet>
			<view class="flex flex-row">
				<tm-skeleton width="90" height="90" round="90"></tm-skeleton>
				<view class="flex-1 ml-8">
					<tm-skeleton class="mb-8" v-for="item in 6" :key="item"></tm-skeleton>
				</view>
			</view>
		</tm-sheet>
		<tm-sheet>
			<tm-text font-size="36" class="text-weight-b ">再组合一个吧</tm-text>
		</tm-sheet>
		<tm-sheet>
			<view class="flex flex-row flex-row-center-between">
				<view v-for="item1 in 3" :key="item1" style="width:30%">
					<tm-skeleton height="90"></tm-skeleton>
					<view class="mt-8">
						<tm-skeleton height="20" class="mb-8" v-for="item in 3" :key="item"></tm-skeleton>
					</view>
				</view>
			</view>
		</tm-sheet>
		<view style="height:50px"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>