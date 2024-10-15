<template>
	<view>
		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b mb-16 d-block">列表 tmCell</tm-text>
			<tm-text color="#999999">
				承载通用列表使用
			</tm-text>
		</tm-sheet>
		<tm-cell url="/pages/index/button" icon="apps-line" title="常见组件库"></tm-cell>
		<tm-cell url="/pages/index/icon" icon="archive-2-line" label="+￥32非卡片模式非卡片模式" label-color="red"
			icon-color="red"></tm-cell>
		<tm-cell title="APP赊购" url="/pages/index/tag" icon="price-tag-3-line" label="tmx测试"
			icon-color="green"></tm-cell>

		<tm-sheet :margin="['24']">
			<tm-text font-size="32" class=" text-weight-b d-block">非卡片模式 Cell</tm-text>
			<tm-text color="#999999">
				底边线可以左对齐或者右内对齐。
			</tm-text>
		</tm-sheet>

		<tm-sheet :padding="['0']" class="overflow">
			<tm-cell :bottomBorderInsert="true" :card="false" url="/pages/index/button" icon="stack-line"
				desc="UTS版本tmui组件库,高质量库" title="常见组件库"></tm-cell>
			<tm-cell title="程序设置" :bottomBorderInsert="true" :card="false" url="/pages/index/icon"
				icon="price-tag-3-line" label="+￥32" label-color="red" icon-color="red"></tm-cell>
			<tm-cell title="美丽的国度" :bottomBorderInsert="true" :card="false" icon="chat-smile-2-line"
				url="/pages/index/tag" label="tmx测试" icon-color="orange"></tm-cell>
			<tm-cell title="标签页面" :bottomBorderInsert="true" :card="false" :show-bottom-border="false"
				icon="calendar-schedule-line" url="/pages/index/tag" label="tmx测试" icon-color="orange"></tm-cell>
		</tm-sheet>
	</view>
</template>

<script lang="ts" setup>
import { ref } from "vue"
</script>

<style></style>
