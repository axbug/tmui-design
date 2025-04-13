<script setup lang="ts">
import { ref } from "vue"
const show = ref(false)
const beforeClose = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 3000)
    })
}
</script>
<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-16 d-block">抽屉 Drawer</tm-text>
            <tm-text color="#999999">
                提供四个方向的弹出，如果要居中显示，请使用overlay组件。可以设置高为auto,百分比,最大值
                可以是插槽触发或者变量控制触发
            </tm-text>
        </tm-sheet>

        <tm-sheet class="flex flex-row flex-row-center-between">
            <tm-drawer style="width:24%" size="80%" position="left">
                <template #trigger><tm-button :block="true">左弹出</tm-button></template>

            </tm-drawer>
            <tm-drawer style="width:24%" position="right">
                <template #trigger><tm-button :block="true">右弹出</tm-button></template>
            </tm-drawer>
            <tm-drawer :swiper-len-close="100" style="width:24%" :show-title="false" :show-close="true" position="top">
                <tm-text>此弹层有内容开启了事件协商和手势关闭,向上滑一定的距离能关闭弹层。</tm-text>
                <template #trigger><tm-button :block="true">顶弹出</tm-button></template>
            </tm-drawer>
            <tm-drawer style="width:24%" :show-close="true" position="bottom">
                <template #trigger>
                    <tm-button :block="true">底弹出</tm-button>
                </template>
            </tm-drawer>
        </tm-sheet>


        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-24 d-block">嵌套</tm-text>
            <tm-drawer :show-footer="true" size="auto">
                <template v-slot:trigger><tm-button color="success" :block="true">打开嵌套</tm-button></template>
				
                <tm-drawer size="auto">
                    <template v-slot:trigger><tm-button :block="true">打开嵌套1</tm-button></template>
                    <tm-text class="text-size-m text-grey  line-8">当前弹层内容为自动高度</tm-text>
                    <tm-drawer size="auto">
                        <template v-slot:trigger><tm-button color="success" :block="true">打开嵌套2</tm-button></template>
                        <tm-text class="text-size-m text-grey  line-8">当前弹层内容为自动高度</tm-text>
                    </tm-drawer>
                </tm-drawer>
            </tm-drawer>

        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-24 d-block">确认前异步执行beforeClose</tm-text>
            <tm-drawer :beforeClose="beforeClose" :show-footer="true">
                <template v-slot:trigger><tm-button color="warn" :block="true">打开</tm-button></template>
                <tm-text>点确认 按钮，会等待3秒再关闭。</tm-text>
            </tm-drawer>
        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-10 d-block">默认高度，禁用遮罩关闭</tm-text>
            <tm-text color="#999999" class="mb-24 d-block">
                点击遮罩禁用关闭,同时内容出现弹跳提示
            </tm-text>

            <tm-drawer :overlayClick="false" :show-close="true" :showCancel="false" size="550rpx" title="请阅读协议"
                confirmText="我已阅读" position="right">
                <template #trigger><tm-button :block="true" color="error">禁用遮罩,弹跳提醒</tm-button></template>
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
            </tm-drawer>
        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-24 d-block">底部插槽及变量控制显示</tm-text>
            <tm-button @click="show = true" :block="true">打开</tm-button>
            <tm-drawer v-model:show="show" title="内容可滚动" size="30%" position="bottom" :show-footer="true">
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
            </tm-drawer>
        </tm-sheet>

        <view style="height:50px"></view>

    </view>
</template>