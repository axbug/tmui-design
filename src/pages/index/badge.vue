<template>

	<tm-sheet>
		<tm-text font-size="32" class=" text-weight-b mb-16 d-block">角标 Badge</tm-text>
		<tm-text color="#999999">
			内联模式布局，方便角标布局和排版。
		</tm-text>
	</tm-sheet>

	<tm-sheet class="flex flex-row flex-row-center-center flex-wrap ">

		<view class="flex-1 flex flex-row flex-row-center-center ">
			<tm-badge :label="true">
				<view style="width: 100rpx;height:100rpx;background: #f3f3f3;"></view>
			</tm-badge>
		</view>
		<view class="flex-1 flex flex-row flex-row-center-center">
			<tm-badge bg-color="danger" :label="1">
				<view style="width: 100rpx;height:100rpx;background: #f3f3f3;"></view>
			</tm-badge>
		</view>

		<view class="flex-1 flex flex-row flex-row-center-center">
			<tm-badge bg-color="success" label="HOT">
				<view style="width: 100rpx;height:100rpx;background: #f3f3f3;"></view>
			</tm-badge>
		</view>
		<view class="flex-1 flex flex-row flex-row-center-center">
			<tm-badge bg-color="primary" :label="150">
				<view style="width: 100rpx;height:100rpx;background: #f3f3f3;"></view>
			</tm-badge>

		</view>
	</tm-sheet>

	<tm-sheet>
		<tm-text font-size="32" class=" text-weight-b ">左上，右上，左下，右下，上中，下中</tm-text>
	</tm-sheet>

	<tm-sheet class="flex flex-row flex-row-center-center flex-wrap  gap-16">

		<tm-badge position="left" :label="true">
			<view style="width: 100rpx;height:100rpx;background: #f3f3f3;"></view>
		</tm-badge>
		<tm-badge position="right" bg-color="danger" :label="36">
			<view style="width: 100rpx;height:100rpx;background: #f3f3f3;"></view>
		</tm-badge>
		<tm-badge position="bottomLeft" bg-color="success" label="HOT">
			<view style="width: 100rpx;height:100rpx;background: #f3f3f3;"></view>
		</tm-badge>
		<tm-badge position="bottomRight" bg-color="primary" :label="150">
			<view style="width: 100rpx;height:100rpx;background: #f3f3f3;"></view>
		</tm-badge>
		<tm-badge position="top" bg-color="success" label="HOT">
			<view style="width: 100rpx;height:100rpx;background: #f3f3f3;"></view>
		</tm-badge>
		<tm-badge position="bottom" bg-color="error" :label="150">
			<view style="width: 100rpx;height:100rpx;background: #f3f3f3;"></view>
		</tm-badge>
	</tm-sheet>

	<tm-sheet>
		<tm-text font-size="32" class=" text-weight-b d-block">应用在其它组件上</tm-text>
	</tm-sheet>
	<tm-sheet class="flex flex-row flex-row-center-center gap-19">

		<tm-badge label="50%SALE">
			<tm-button>按钮</tm-button>
		</tm-badge>
		<tm-badge label="HOT">
			<tm-icon name="ancient-gate-fill"></tm-icon>
		</tm-badge>
		<tm-badge  :label="true">
			<tm-icon name="verified-badge-fill"></tm-icon>

		</tm-badge>

	</tm-sheet>

	<view class="py-32"></view>
</template>

<script lang="ts" setup>
import { ref } from "vue"
</script>

<style></style>