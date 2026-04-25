<template>
	<view class="flex flex-col">
		<view class="headerSection flex flex-col flex-col-top-center gap-8">
			<view class="logoWrap flex flex-center round-16">
				<tm-icon name="building-2-line" size="72" color="#ffffff"></tm-icon>
			</view>
			<text class="brandTitle">Enterprise Portal</text>
			<text class="brandSubtitle">安全 · 高效 · 专业</text>
		</view>

		<view class="formSection">
			<view class="formCard round-6 shadow-5">
				<text class="text-weight-b mb-n10 d-block formTitle">账号登录</text>

				<tm-form v-model="formData" :rules="rules" @submit="onSubmit" direction="vertical" gap="20">
					<tm-form-item name="account" :required="false" :show-bottom="false">
						<tm-input
							v-model="formData.account"
							placeholder="请输入手机号/邮箱"
							left-icon="user-3-line"
							show-clear
							:round="[12]"
							height="96"
							font-size="28"
						></tm-input>
					</tm-form-item>

					<tm-form-item name="password" :required="false" :show-bottom="false">
						<tm-input
							v-model="formData.password"
							placeholder="请输入密码"
							password
							show-eye
							left-icon="lock-line"
							:round="[12]"
							height="96"
							font-size="28"
						></tm-input>
					</tm-form-item>

					<view class="flex flex-row flex-row-center-between py-n8">
						<tm-checkbox
							v-model="rememberMe"
							:value="true"
							label="记住账号"
							size="36"
							icon-size="34"
							label-font-size="24"
						></tm-checkbox>
						<text class="text-size-xs forgotLink" @click="onForgotPassword">忘记密码？</text>
					</view>

					<tm-button
						form-type="submit"
						block
						color="#1a3a5c"
						font-color="#ffffff"
						:round="[12]"
						size="g"
						:loading="loading"
					>登录</tm-button>
				</tm-form>

				<view class="flex flex-row flex-row-center-center gap-10 mt-n10 mb-n8">
					<view class="dividerLine flex-1"></view>
					<text class="text-size-xs text-grey">其他方式</text>
					<view class="dividerLine flex-1"></view>
				</view>

				<view class="flex flex-row flex-center socialRow">
					<view class="socialBtn flex flex-center rounded" @click="onSocialLogin('wechat')">
						<tm-icon name="wechat-line" size="44" color="#07c160"></tm-icon>
					</view>
					<view class="socialBtn flex flex-center rounded" @click="onSocialLogin('dingtalk')">
						<tm-icon name="dingding-line" size="44" color="#0089ff"></tm-icon>
					</view>
					<view class="socialBtn flex flex-center rounded" @click="onSocialLogin('mail')">
						<tm-icon name="mail-line" size="44" color="#1a3a5c"></tm-icon>
					</view>
				</view>
			</view>

			<view class="flex flex-row flex-center gap-4 py-n10">
				<text class="text-size-xs text-grey">还没有账号？</text>
				<text class="text-size-xs text-weight-b registerLink" @click="onRegister">立即注册</text>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const formData = ref({
	account: '',
	password: ''
})
const rememberMe = ref(false)
const loading = ref(false)

const rules: Record<string, TM.FORM_RULE[]> = {
	account: [{ required: true, message: '请输入手机号或邮箱', type: 'phone' }],
	password: [{ required: true, message: '密码为6-18位字母或数字', rule: /^[a-zA-Z0-9]{6,18}$/ }]
}

const onSubmit = (result: TM.FORM_SUBMIT_RESULT) => {
	if (!result.isPass) return
	loading.value = true
	setTimeout(() => {
		loading.value = false
		uni.showToast({ title: '登录成功', icon: 'success' })
	}, 1500)
}

const onForgotPassword = () => {
	uni.showToast({ title: '请联系管理员', icon: 'none' })
}

const onRegister = () => {
	uni.showToast({ title: '注册功能开发中', icon: 'none' })
}

const onSocialLogin = (type: string) => {
	uni.showToast({ title: `${type} 登录开发中`, icon: 'none' })
}
</script>

<style lang="scss" scoped>
.headerSection {
	padding: 120rpx 48rpx 80rpx;
	background: linear-gradient(160deg, #1a3a5c 0%, #2c5f8a 100%);
	.logoWrap {
		width: 128rpx;
		height: 128rpx;
		background: rgba(255, 255, 255, 0.15);
		margin-bottom: 12rpx;
	}
	.brandTitle {
		font-size: 44rpx;
		font-weight: bold;
		color: #ffffff;
		letter-spacing: 4rpx;
	}
	.brandSubtitle {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.7);
		letter-spacing: 8rpx;
	}
}

.formSection {
	flex: 1;
	padding: 0 40rpx;
	margin-top: -50rpx;
	.formCard {
		background: #ffffff;
		padding: 48rpx 36rpx 40rpx;
		.formTitle {
			font-size: 36rpx;
			color: #1a3a5c;
		}
	}
}

.dividerLine {
	height: 1rpx;
	background: #e8e8e8;
}

.forgotLink {
	color: #2c5f8a;
}

.socialRow {
	gap: 60rpx;
}

.socialBtn {
	width: 88rpx;
	height: 88rpx;
	background: #f5f7fa;
}

.registerLink {
	color: #1a3a5c;
}
</style>
