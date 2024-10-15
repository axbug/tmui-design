<template>
	<view>
		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b mb-16 d-block">警告 tmAlert</tm-text>
			<tm-text color="#999999">
				样式丰富，用于警告信息的提醒。
			</tm-text>
		</tm-sheet>
		<tm-alert>默认为thin浅色样式，可以自适应暗黑</tm-alert>
		<tm-alert skin='normal'>也可以把skin改成normal变成纯背景</tm-alert>
		<tm-alert icon="thumb-up-line" skin='normal' color="#000000">也可以把skin改成normal变成纯背景</tm-alert>
		<tm-alert icon="thumb-up-line" skin='normal' color="#dee3e7">也可以把skin改成normal变成纯背景</tm-alert>

		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b ">可以使用默认的状态来管理颜色</tm-text>
		</tm-sheet>
		<tm-alert icon="alarm-line" status="success" skin='normal'>自定义图标</tm-alert>
		<tm-alert status="error" skin='normal'>错误提醒</tm-alert>
		<tm-alert status="warn" closeIcon="arrow-right-line" skin='normal'>警告提醒</tm-alert>
		<tm-alert icon="money-cny-circle-fill" color="#728398" skin='normal'>自定义背景色</tm-alert>
		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b ">比如改些圆角，边线啥的,样式丰富请自行设计</tm-text>
		</tm-sheet>
		<tm-alert status="warn" skin='normal' :round="['6']">警告提醒</tm-alert>
		<tm-alert status="error" skin='normal' :round="['12', '0']">改下圆角</tm-alert>
		<tm-alert :border="['2']">加个小边框</tm-alert>
		<tm-alert :border="['2']" :showClose="false" :borderColor="['#89c0ff']"
			:darkBorderColor="['#3b5066']">加个小边框,隐藏关闭</tm-alert>
	</view>
</template>

<script lang="ts" setup>
import { ref } from "vue"
</script>

<style></style>
