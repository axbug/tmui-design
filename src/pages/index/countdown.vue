<template>
	<view>
		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b mb-8">倒计时 tmCountdown</tm-text>
			<tm-text  color="#999999" >倒计时，可以精确到秒，毫秒，尽量通过插槽来布局样式。</tm-text>
		</tm-sheet>
		<tm-sheet >
			<view class="flex flex-row flex-row-center-center" >
				<tm-countdown font-size="40" color="primary" :time="1000*59" v-model:actions="actions"></tm-countdown>
			</view>
			<view class="flex flex-row flex-row-center-center mt-n8">
				<tm-button width="26%" @click="actions = 'play'">开始</tm-button>
				<tm-button width="26%" @click="actions = 'pause'" class="mx-20">暂停</tm-button>
				<tm-button width="26%" @click="actions = 'reset'">重置</tm-button>
			</view>
		</tm-sheet>
		
		<tm-sheet >
			<view class="flex flex-row flex-row-center-center" >
				<tm-countdown  font-size="40" color="error" unit="ms" format="SS:MS" :time="1000*5" v-model:actions="actions2"></tm-countdown>
			</view>
			<view class="flex flex-row flex-row-center-center mt-n8">
				<tm-button width="26%" @click="actions2 = 'play'">开始</tm-button>
				<tm-button width="26%" @click="actions2 = 'pause'" class="mx-20">暂停</tm-button>
				<tm-button width="26%" @click="actions2 = 'reset'">重置</tm-button>
			</view>
		</tm-sheet>
</view>
</template>

<script>
	export default {
		data() {
			return {
				actions:"",
				actions2:"",
			};
		}
	}
</script>

<style lang="scss">

</style>