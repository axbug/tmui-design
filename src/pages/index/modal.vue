<script setup lang="ts">
import { ref } from "vue"
const show = ref(false)
</script>
<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">对话框 tmModal</tm-text>
            <tm-text color="#999999">可全局统一更改风格。</tm-text>
        </tm-sheet>
        <tm-sheet class="flex flex-row flex-row-center-center">
            <tm-modal style="flex:1;margin-right:24rpx" height="auto">
                <template v-slot:trigger><tm-button :block="true">自动内容高</tm-button></template>
                <tm-input dark-bg-color="" placeholder="请输入密码"></tm-input>
                <tm-input dark-bg-color="" class="my-12" placeholder="请输入密码"></tm-input>
                <view class="flex flex-row flex-row-center-between">
                    <tm-text class="text-size-m text-grey">同意协议</tm-text>
                    <tm-switch ></tm-switch>
                </view>
            </tm-modal>

            <tm-modal style="flex:1" position="right" :show-close="true" :show-footer="false">
                <template v-slot:trigger><tm-button :block="true" color="warn">显示关闭</tm-button></template>
                <tm-text color="#999999">
                    精致美观的对话框，可全局配置风格
                </tm-text>
            </tm-modal>

        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-24 d-block">嵌套</tm-text>
            <tm-modal height="auto">
                <template v-slot:trigger><tm-button color="success" :block="true">打开嵌套</tm-button></template>
                <tm-modal height="auto">
                    <template v-slot:trigger><tm-button :block="true">打开嵌套1</tm-button></template>
                    <tm-text class="text-size-m text-grey  line-8">当前弹层内容为自动高度</tm-text>
                    <tm-modal height="auto">
                        <template v-slot:trigger><tm-button color="success" :block="true">打开嵌套2</tm-button></template>
                        <tm-text class="text-size-m text-grey  line-8">当前弹层内容为自动高度</tm-text>
                    </tm-modal>
                </tm-modal>
            </tm-modal>

        </tm-sheet>

        <tm-sheet>
			<tm-text font-size="36" class=" text-weight-b mb-10 d-block">默认高度，禁用遮罩关闭</tm-text>
			<tm-text color="#999999" class="mb-24 d-block">
				点击遮罩禁用关闭,同时内容出现弹跳提示
			</tm-text>
			
			<tm-modal :overlayClick="false" :showCancel="false" height="550rpx" title="请阅读协议" confirmText="我已阅读" position="right">
				<template #trigger><tm-button :block="true" color="error">禁用遮罩,弹跳提醒</tm-button></template>
				<tm-text color="#999999" >
					精致美观的对话框，可全局配置风格
					精致美观的对话框，可全局配置风格
					精致美观的对话框，可全局配置风格
					精致美观的对话框，可全局配置风格
					精致美观的对话框，可全局配置风格
					精致美观的对话框，可全局配置风格
					精致美观的对话框，可全局配置风格
					精致美观的对话框，可全局配置风格
					精致美观的对话框，可全局配置风格
					精致美观的对话框，可全局配置风格
					精致美观的对话框，可全局配置风格
					精致美观的对话框，可全局配置风格
					精致美观的对话框，可全局配置风格
					精致美观的对话框，可全局配置风格
				</tm-text>
			</tm-modal>
		</tm-sheet>

        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-24 d-block">底部插槽及变量控制显示</tm-text>
            <tm-button @click="show = true" :block="true">打开</tm-button>
            <tm-modal v-model:show="show" title="内容可滚动" height="500rpx" position="bottom" :show-footer="true">
                <tm-text color="#999999">
                    精致美观的对话框，可全局配置风格
                    精致美观的对话框，可全局配置风格
                    精致美观的对话框，可全局配置风格
                    精致美观的对话框，可全局配置风格
                    精致美观的对话框，可全局配置风格
                    精致美观的对话框，可全局配置风格
                    精致美观的对话框，可全局配置风格
                    精致美观的对话框，可全局配置风格
                    精致美观的对话框，可全局配置风格
                    精致美观的对话框，可全局配置风格
                    精致美观的对话框，可全局配置风格
                    精致美观的对话框，可全局配置风格
                    精致美观的对话框，可全局配置风格
                    精致美观的对话框，可全局配置风格
                </tm-text>
                <template #footer>
                    <tm-button @click="show = false" :block="true" color="red" class="flex-1">定义底部插槽</tm-button>
                </template>
            </tm-modal>
        </tm-sheet>

        <view style="height:50px"></view>

    </view>
</template>