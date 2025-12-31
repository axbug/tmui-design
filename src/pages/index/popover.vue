<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const dates = ref([])
</script>

<template>
	<view>
		<tm-sheet>
			<tm-text font-size="32" class=" text-weight-b mb-16 d-block">汽泡菜单 tmPopover</tm-text>
			<tm-text color="#999999">
				多达8个位置可选，当显示位置不足时可以自动反转位置。
			</tm-text>
		</tm-sheet>

		<tm-sheet class="flex flex-row gap-20 flex-row-center-between">
			<tm-popover position="bl">
				<tm-button :round="88" size="s" font-size="46" :btnIcon="true" icon='skip-right-fill'></tm-button>
				<template v-slot:menu="{isShow}">
					<tm-sheet  :margin="0" :padding="0" class="overflow" shadow="24">
						<tm-cell :bottomBorderInsert="true" :card="false" url="/pages/index/button" icon="stack-line"
								 desc="UTS版本tmui组件库,高质量库" title="常见组件库"></tm-cell>
						<tm-cell title="程序设置" :bottomBorderInsert="true" :card="false" url="/pages/index/icon"
								 icon="price-tag-3-line" label="+￥32" label-color="red" icon-color="red"></tm-cell>
						<tm-cell title="美丽的国度" :bottomBorderInsert="true" :card="false" icon="chat-smile-2-line"
								 url="/pages/index/tag" label="tmx测试" icon-color="orange"></tm-cell>
						<tm-cell title="标签页面" :bottomBorderInsert="true" :card="false" :show-bottom-border="false"
								 icon="calendar-schedule-line" url="/pages/index/tag" label="tmx测试" icon-color="orange"></tm-cell>
					</tm-sheet>
				</template>
			</tm-popover>
			<tm-popover v-model="show" :is-click-close="false" :show-mask="true" position="bc" triangle-color="primary">
				<template v-slot:default="{isShow}">
					<tm-button
						:round="88" size="s" :btnIcon="true"
						font-size="46"
					   :skin="isShow?'normal':'outlined'"
					   :icon="isShow?'arrow-up-s-fill':'arrow-down-s-fill'"
					   ></tm-button>
				</template>
				<template v-slot:menu="{isShow}">
					<tm-sheet  :margin="0" :padding="0" class="overflow" shadow="24" style="max-width:450px" width="90vw">
						<tm-calendar-multiple
							v-model="dates"
							:multiple-max="1"
							:show-footer="false" head-bg-color="primary" head-font-color="#fff" @click="show = false"></tm-calendar-multiple>
					</tm-sheet>
				</template>
			</tm-popover>
			<tm-popover position="br">
				<tm-button :round="88" size="s" font-size="46" :btnIcon="true" icon='skip-left-fill'></tm-button>
				<template v-slot:menu="{isShow}">
					<tm-sheet  :margin="0" :padding="0" class="overflow" shadow="24">
						<tm-cell :bottomBorderInsert="true" :card="false" url="/pages/index/button" icon="stack-line"
								 desc="UTS版本tmui组件库,高质量库" title="常见组件库"></tm-cell>
						<tm-cell title="程序设置" :bottomBorderInsert="true" :card="false" url="/pages/index/icon"
								 icon="price-tag-3-line" label="+￥32" label-color="red" icon-color="red"></tm-cell>
						<tm-cell title="美丽的国度" :bottomBorderInsert="true" :card="false" icon="chat-smile-2-line"
								 url="/pages/index/tag" label="tmx测试" icon-color="orange"></tm-cell>
						<tm-cell title="标签页面" :bottomBorderInsert="true" :card="false" :show-bottom-border="false"
								 icon="calendar-schedule-line" url="/pages/index/tag" label="tmx测试" icon-color="orange"></tm-cell>
					</tm-sheet>
				</template>
			</tm-popover>
		</tm-sheet>

		<tm-sheet class="flex flex-row gap-20 flex-row-center-between">
			<tm-popover position="tl" triangle-color="#000">
				<tm-button :btnIcon="true" :round="88" font-size="46" icon='skip-left-fill' size="s"></tm-button>
				<template v-slot:menu="{isShow}">
					<tm-sheet margin="0" shadow="24" color="#000">
						<tm-button>自定义内容</tm-button>
					</tm-sheet>
				</template>
			</tm-popover>
			<tm-popover position="tc">
				<tm-button
					:btnIcon="true"
					:round="88" color="error" font-size="46"
					icon="arrow-up-s-fill"
					size="s"
				></tm-button>
				<template v-slot:menu="{isShow}">
					<tm-sheet margin="0" shadow="24">
						<tm-button>自定义内容</tm-button>
					</tm-sheet>
				</template>
			</tm-popover>
			<tm-popover position="tr">
				<tm-button :btnIcon="true" :round="88" font-size="46" icon='skip-right-fill' size="s"></tm-button>
				<template v-slot:menu="{isShow}">
					<tm-sheet margin="0" shadow="24">
						<tm-button>自定义内容</tm-button>
					</tm-sheet>
				</template>
			</tm-popover>
		</tm-sheet>

		<tm-sheet class="flex flex-row flex-row-center-center gap-5">
			<tm-popover position="left" triangle-color="#000">
				<tm-button :btnIcon="true" :round="88" font-size="46" icon='skip-left-fill' size="s"></tm-button>
				<template v-slot:menu="{isShow}">
					<tm-sheet margin="0" padding="5" shadow="24" color="#000">
						<tm-button>向左显示</tm-button>
					</tm-sheet>
				</template>
			</tm-popover>

			<tm-popover position="right" triangle-color="#000">
				<tm-button :btnIcon="true" :round="88" font-size="46" icon='skip-right-fill' size="s"></tm-button>
				<template v-slot:menu="{isShow}">
					<tm-sheet margin="0" padding="5" shadow="24" color="#000">
						<tm-button>向右显示</tm-button>
					</tm-sheet>
				</template>
			</tm-popover>
		</tm-sheet>

	</view>

</template>

<style scoped>

</style>