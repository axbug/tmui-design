<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->
<script setup lang="ts">
import { ref } from 'vue'
import TmSignBoard from "@/uni_modules/tm-ui/components/tm-sign-board/tm-sign-board.vue"
const signBoardRef = ref<InstanceType<typeof TmSignBoard>|null>(null)
const getimage = async ()=>{
	let org = await signBoardRef.value?.getImage();
	if(!org) return;
	uni.previewImage({
		urls:[org.src],
		current:org.src
	})
}
const clear = async ()=>{
	await signBoardRef.value?.clear();
}

</script>

<template>
    <view>
        <tm-sheet>
            <tm-text font-size="32" class=" text-weight-b  d-block">签名版 TmSignBoard</tm-text>
        </tm-sheet>

        <tm-sheet >
            <tm-sheet width="660" height="660" padding="0" margin="0" color="info">
				<tm-sign-board ref="signBoardRef" width="660" height="660"></tm-sign-board>
			</tm-sheet>
			
			<view class="pa-12 flex flex-row gap-10 mt-n8">
				<tm-button @click="clear" class="flex-1">清空</tm-button>
				<tm-button @click="getimage" class="flex-1">获取图片</tm-button>
			</view>
        </tm-sheet>

    </view>

</template>

<style scoped></style>