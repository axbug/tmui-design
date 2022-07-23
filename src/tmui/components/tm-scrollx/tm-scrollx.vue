<template>
	<view class="relative flex" :style="{width:props.width+'rpx',height:(props.height+32)+'rpx'}">
		<!-- #ifdef APP-NVUE -->
		<scroll-view @scroll="onScroll" :show-scrollbar="false" :scroll-x="true" class="flex flex-row flex-nowrap nowrap" :style="{width:props.width+'rpx',height:props.height+'rpx'}">
			<slot name="default"></slot>
		</scroll-view>
		<!-- #endif -->
		<!-- #ifndef APP-NVUE -->
		<scroll-view @scroll="onScroll" :scroll-x="true" class="flex flex-row flex-nowrap nowrap" :style="{width:props.width+'rpx',height:props.height+'rpx'}">
			<view class="flex-1 flex-row flex-nowrap">
				<slot name="default"></slot>
			</view>
		</scroll-view>
		<!-- #endif -->
		<view v-if="_showBar" class="absolute l-0 b-10 flex flex-center" :style="{width:props.width+'rpx',height:32+'rpx'}">
			<tm-sheet no-level :round="6" :width="160" :height="8" :color="props.bgColor" :margin="[0,0]" :padding="[0,0]">
				<view class="bar" :style="{
					transform: `translateX(${left}px)`
				}">
					<tm-sheet :round="6"  :width="80" :height="8" :color="props.color"  :margin="[0,0]" :padding="[0,0]"></tm-sheet>
				</view>
			</tm-sheet>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref,computed } from "vue"
	import tmSheet from "../tm-sheet/tm-sheet.vue";
	import tmText from "../tm-text/tm-text.vue";
	const props = defineProps({
		width:{
			type:Number,
			default:636
		},
		height:{
			type:Number,
			default:300
		},
		/**
		 * 是否显示底部导航条
		 */
		showBar:{
			type:Boolean,
			default:true
		},
		bgColor:{
			type:String,
			default:'grey-2'
		},
		color:{
			type:String,
			default:'red'
		}
	})
	const left = ref(0)
	const totalWidth = uni.upx2px(80)
	const totalContWidth = uni.upx2px(props.width)
	const _showBar = computed(()=>props.showBar)
	const onScroll = (e:Event)=>{
		if(!_showBar.value) return;
		let sL = e.detail.scrollLeft;
		let sT = e.detail.scrollWidth;
		let maxLeft = Math.abs(sT-totalContWidth)
		let nowLeft = sL/maxLeft * totalWidth
		if(sL<=0) nowLeft=0;
		if(Math.abs(sL)>=maxLeft) {
			nowLeft =totalWidth
		}
		left.value = nowLeft;
	}
</script>

<style scoped>
	.bar{
		transition-property: transform;
		transition-delay: 0;
		transition-duration: 0.05s;
		transition-timing-function:linear;
		transform: translateX(0px);
	}
</style>