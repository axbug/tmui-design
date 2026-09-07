<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->

<template>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">图片 tmImage</tm-text>
        <tm-text class="mb-n8" color="#999999">
            图片自带加载功能，宽和高可以不设置，自动以父级宽度为最大值，如果只设置了宽，高会自动设置，免去了大家设置图片宽高的麻烦
            支持百分比，px,rpx单位宽高设置
        </tm-text>
    </tm-sheet>
    <tm-sheet>

        <tm-text font-size="36" class="text-weight-b d-block mb-n8">自动占位宽和高</tm-text>
        <view class="flex flex-row" style="justify-content: space-between;align-items: flex-start;">
            <tm-image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=200&fit=crop" width="18%"></tm-image>
            <tm-image width="18%" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=200&fit=crop"></tm-image>
            <tm-image width="18%" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop"></tm-image>
            <tm-image width="18%" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=200&fit=crop"></tm-image>
            <tm-image width="18%" src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200&h=200&fit=crop"></tm-image>
        </view>
    </tm-sheet>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b d-block mb-n8">指定高宽</tm-text>
        <tm-image height="150" src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=225&fit=crop"></tm-image>
        <tm-image width="100%" src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=400&fit=crop"></tm-image>
        <tm-image width="120" height="120"
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=120&h=120&fit=crop"></tm-image>
    </tm-sheet>
    <view class="py-32"></view>
</template>
<script setup lang="ts">
const testClick = (text: string) => {
    uni.showToast({ title: text, icon: "none" });
};
</script>
<style lang="scss"></style>
