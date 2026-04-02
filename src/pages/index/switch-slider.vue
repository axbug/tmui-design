<template>
	<view>
		<tm-sheet>
			<tm-text font-size="36" class="text-weight-b mb-8">左滑菜单 SwitchSlider</tm-text>
			<tm-text color="#999999"> 通过插槽可完全自定义布局，自由度非常高。如果子菜单无法定宽或者被挤夺请写style:flex-shrink: 0;避免。 </tm-text>
		</tm-sheet>
		<tm-sheet :padding="['0px']" class="overflow">
			<tm-switch-slider
				:status="item.opened"
				@open="onopen(index)"
				@close="onclose(index)"
				height="116"
				@disabledScrollChange="disablechange"
				@click="onclick(index)"
				v-for="(item, index) in testList"
				:key="index"
				:disabled="item.disabled"
			>
				<tm-cell
					round="0"
					tbPadding="16"
					minHeight="100"
					:showBottomBorder="false"
					:card="false"
					:title="item.title"
					:desc="item.subtext"
				></tm-cell>
				<template #menu>
					<view class="flex flex-row flex-row-center-end" style="height: 100%">
						<view @click="share" class="flex flex-row flex-row-center-center" style="width: 110px; background: black; height: 100%">
							<text class="text-white">分享</text>
						</view>
						<view @click="remvoe" class="flex flex-row flex-row-center-center" style="width: 110px; background: red; height: 100%">
							<text class="text-white">删除</text>
						</view>
					</view>
				</template>
			</tm-switch-slider>
		</tm-sheet>
	</view>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const testList = ref<
	{
		title: string
		subtext: string
		disabled: boolean
		opened: boolean
	}[]
>([])
const closeAll = () => {
	let oldlist = testList.value.slice(0)
	oldlist = oldlist.map((el, from: number) => {
		el.opened = false
		return el
	})
	testList.value = oldlist.slice(0)
}
const onopen = (index: number) => {
	let oldlist = testList.value.slice(0)
	oldlist = oldlist.map((el, from: number) => {
		if (from != index) {
			el.opened = false
		} else {
			el.opened = true
		}
		return el
	})
	testList.value = oldlist.slice(0)
}
const onclose = (index: number) => {
	console.log(index)
}
const disablechange = () => {
	console.log('disablechange')
}
const onclick = (index: number) => {
	console.log(index, '--')
	closeAll()
}
const share = () => {
	console.log('share')
    uni.showToast({
        title: '分享',
        icon: 'success'
    })
    closeAll()
}
const remvoe = () => {
	console.log('remvoe')
    uni.showToast({
        title: '删除',
        icon: 'success'
    })
    closeAll()
}

onMounted(() => {
	for (let i = 0; i < 6; i++) {
		testList.value.push({
			title: '标题' + i,
			subtext: i == 1 ? '被禁用' : '描述' + i,
			disabled: i == 1,
			opened: false
		})
	}
})
</script>

<style lang="scss"></style>
