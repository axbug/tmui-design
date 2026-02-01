<template>
	<view>
		<tm-sheet>
			<tm-text font-size="36" class="text-weight-b mb-16 d-block">下拉菜单 tmDropdownMenu</tm-text>
			<view>
				<tm-text>支持静态与悬浮，支持嵌套在其它组件中使用时可定位内容宽。</tm-text>
			</view>
		</tm-sheet>
		<view style="margin: 20rpx 20rpx;">
			<tm-dropdown-menu :hidnMask="true" round="24">
				<tm-dropdown-item title="按距离" key-name="1">
					<tm-text>这里由用户自由布局内容，实现逻辑。</tm-text>
				</tm-dropdown-item>
				<tm-dropdown-item title="综合条件" key-name="2">
					<tm-text>你还可以实现更多更复杂的功能.</tm-text>
				</tm-dropdown-item>
				<tm-dropdown-item title="所有项目" key-name="3">
					<view style="height: 100px;">
						<tm-text>完全插槽实现灵活度极高。</tm-text>
					</view>
				</tm-dropdown-item>
				<tm-dropdown-item title="按价格" icon="radio-button-line" activeIcon="radio-button-fill" key-name="4" :is-btn="true"></tm-dropdown-item>
			</tm-dropdown-menu>
		</view>

		<tm-sheet>
			<tm-text font-size="36" class="text-weight-b d-block">显示背景,自动悬浮顶部</tm-text>
		</tm-sheet>
		<view style="margin: 20rpx 0;">
			<tm-dropdown-menu v-model="active" position="fixed">
				<tm-dropdown-item title="按距离" key-name="1">
					<tm-text>这里由用户自由布局内容，实现逻辑。</tm-text>
				</tm-dropdown-item>
				<tm-dropdown-item title="综合条件" key-name="2">
					<tm-text>你还可以实现更多更复杂的功能.</tm-text>
				</tm-dropdown-item>
				<tm-dropdown-item title="项目" key-name="3">
					<view style="height: 100px;">
						<tm-text>完全插槽实现灵活度极高。</tm-text>
					</view>
				</tm-dropdown-item>
				<tm-dropdown-item title="滚动" key-name="4" icon="sun-line" activeIcon="sun-fill">
					<view style="max-height: 300px;overflow-y: scroll;">
						<tm-text>完全插槽实现灵活度极高。</tm-text>
						<view style="height: 500px;"></view>
					</view>
				</tm-dropdown-item>
			</tm-dropdown-menu>
		</view>
		<tm-sheet>
			<tm-button @click="active='3'" block>手动切换</tm-button>
		</tm-sheet>
	</view>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const active = ref('')
</script>
<style lang="scss"></style>