<template>

	<view>
		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b mb-8">头像组 tmAvatarGroup</tm-text>
			<tm-text color="#999999">
				平铺和堆叠方式。如果想要单头像建议使用：tmSheet+tmImage配合，+tmBadge达到效果，因此我不再提供单头像组件，没有意义。
			</tm-text>
		</tm-sheet>
		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b mb-8">堆叠</tm-text>
			<tm-avatar-group :list="list" :max-count="8"></tm-avatar-group>
		</tm-sheet>
		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b mb-8">平铺</tm-text>
			<tm-avatar-group :list="list" :flat="true" :max-count="8" gutter="3"></tm-avatar-group>
		</tm-sheet>
		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b mb-8">控制圆角及显示数量</tm-text>
			<tm-avatar-group :list="list" round="8" :flat="true" :max-count="8" :count="1000"
				gutter="3"></tm-avatar-group>
		</tm-sheet>
		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b mb-8">文本头像</tm-text>
			<tm-avatar-group :list="list2" round="8" :flat="true" :max-count="8" :count="1000"
				gutter="3"></tm-avatar-group>
		</tm-sheet>
		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b mb-8">文本头像随机颜色</tm-text>
			<tm-avatar-group :randomBgColor="true" :list="list2" round="8" :flat="true" :max-count="8" :count="1000"
				gutter="3"></tm-avatar-group>
		</tm-sheet>
		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b mb-8">头像与文本混搭,空时图标占位</tm-text>
			<tm-avatar-group :randomBgColor="true" :list="list3" round="8" :flat="true" :max-count="8" :count="1000"
				gutter="3"></tm-avatar-group>
		</tm-sheet>
		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b mb-8">插槽定制more</tm-text>
			<tm-avatar-group :list="list" round="8" :flat="true" :max-count="4" :count="1000" gutter="6">
				<template v-slot:more>
					<tm-sheet class="flex flex-center" width="64" height="64" :round="['8']" :margin="['0']"
						:padding="['0']" color="primary">
						<tm-icon size="32" color="white" name="add-line"></tm-icon>
					</tm-sheet>
				</template>
			</tm-avatar-group>
		</tm-sheet>
		<view style="height: 32px;"></view>
	</view>

</template>

<script setup lang="ts">
	const list = [
		"https://store.tmui.design/api_v2/public/random_picture?random=183",
		"https://store.tmui.design/api_v2/public/random_picture?random=13",
		"https://store.tmui.design/api_v2/public/random_picture?random=8",
		"https://store.tmui.design/api_v2/public/random_picture?random=83",
		"https://store.tmui.design/api_v2/public/random_picture?random=18",
		"https://store.tmui.design/api_v2/public/random_picture?random=3",
		"https://store.tmui.design/api_v2/public/random_picture?random=8",
		"https://store.tmui.design/api_v2/public/random_picture?random=83",
		"https://store.tmui.design/api_v2/public/random_picture?random=18",
		"https://store.tmui.design/api_v2/public/random_picture?random=3",
	] as string[]
	const list2 = [
		"同名自定义",
		"Dclound",
		"ak",
		"sk",
		"国家",
		"天清色",
		"漂亮",
		"相爱一家人",
		"北京",
		"厉害了我的哥",
		"呃",
	] as string[]
	const list3 = [
		"同名自定义",
		"https://store.tmui.design/api_v2/public/random_picture?random=8",
		"",
		"sk",
		"https://store.tmui.design/api_v2/public/random_picture?random=3",
		"",
		"漂亮",
		"https://store.tmui.design/api_v2/public/random_picture?random=3",
		"北京",
		"https://store.tmui.design/api_v2/public/random_picture?random=83",
		"呃",
	] as string[]
</script>

<style>

</style>