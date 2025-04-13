<template>
	<view>
		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b mb-8">验证码输入 tmCodeInput</tm-text>
			<tm-text  color="#999999" >提供了两种方式，自带输入框输入，以及配合我的keyborad键盘。</tm-text>
		</tm-sheet>
		
		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b mb-8">自动拉起系统键盘</tm-text>
			<tm-code-input @confirm="ok" gutter="4" :maxlength="6" width="88" height="88" :autoFocus="true"></tm-code-input>
		</tm-sheet>
		
<!-- 		<tm-sheet>
			<tm-text font-size="36" class=" text-weight-b mb-12">关闭系统键盘使用组件键盘</tm-text>
			<tm-code-input place-shape="line" @click="showkey=true" @confirm="showkey = false" v-model="value" :useSysKeyborad="false" skin="fill"></tm-code-input>
		</tm-sheet>
		<tm-keyboard-number :max-len="4" v-model:modelShow="showkey" v-model="value"></tm-keyboard-number> -->
		<view style="height: 400px;"></view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				value:"",
				showkey:false
			}
		},
		methods: {
			ok(){
				uni.showToast({
					title:"验证成功",
					mask:true
				})
			}
		}
	}
</script>

<style>

</style>
