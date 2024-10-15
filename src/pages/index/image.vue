<template>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">图片 tmImage</tm-text>
        <tm-text color="#999999">
            图片自带加载功能，宽和高可以不设置，自动以父级宽度为最大值，如果只设置了宽，高会自动设置，免去了大家设置图片宽高的麻烦
            支持百分比，px,rpx单位宽高设置
        </tm-text>
    </tm-sheet>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b  d-block mb-16">自动占位宽和高</tm-text>
        <view class="flex flex-row" style="justify-content: space-between;align-items: flex-start;">
            <tm-image width="18%" src="https://store.tmui.design/api_v2/public/random_picture?random=183"></tm-image>
            <tm-image width="18%" src="https://store.tmui.design/api_v2/public/random_picture?random=0239"></tm-image>
            <tm-image width="18%" src="https://store.tmui.design/api_v2/public/random_picture?random=22233"></tm-image>
            <tm-image width="18%" src="https://store.tmui.design/api_v2/public/random_picture?random=9654"></tm-image>
            <tm-image width="18%" src="https://store.tmui.design/api_v2/public/random_picture?random=212"></tm-image>
        </view>
    </tm-sheet>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b  d-block mb-16">指定高宽</tm-text>
        <tm-image height="150" src="https://store.tmui.design/api_v2/public/random_picture?random=183"></tm-image>
        <tm-image width="100%" src="https://store.tmui.design/api_v2/public/random_picture?random=183"></tm-image>
        <tm-image width="120" height="120"
            src="https://store.tmui.design/api_v2/public/random_picture?random=183"></tm-image>
    </tm-sheet>
    <view class="py-32"></view>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const testClick = (text: string) => {
    uni.showToast({ title: text, icon: "none" });
};
</script>
<style lang="scss"></style>
