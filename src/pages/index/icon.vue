<template>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">文本 TmText</tm-text>
        <view>
            <tm-text>可以自定义图标,也可以使用内置图标库.</tm-text>
        </view>
    </tm-sheet>
    <tm-sheet class="gap-16 flex">
        <tm-icon name="home-4-fill"></tm-icon>
        <tm-icon name="ancient-gate-fill"></tm-icon>
        <tm-icon name="archive-2-fill"></tm-icon>
        <tm-icon name="verified-badge-fill"></tm-icon>
        <tm-icon name="printer-fill"></tm-icon>
    </tm-sheet>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">定义大小及颜色</tm-text>
        <view class="gap-16 flex">
            <tm-icon size="42" color="error" name="home-4-fill"></tm-icon>
            <tm-icon size="42" color="success" name="ancient-gate-fill"></tm-icon>
            <tm-icon size="42" color="#21d1c5" name="archive-2-fill"></tm-icon>
            <tm-icon size="42" color="warn" name="stack-fill"></tm-icon>
        </view>
    </tm-sheet>

    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">角度</tm-text>
        <view class="gap-16 flex">
            <tm-icon size="42" name="arrow-right-line"></tm-icon>
            <tm-icon size="42" rotate="90deg" name="arrow-right-line"></tm-icon>
            <tm-icon size="42" rotate="180deg" name="arrow-right-line"></tm-icon>
            <tm-icon size="42" rotate="270deg" name="arrow-right-line"></tm-icon>
        </view>
    </tm-sheet>

    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">旋转</tm-text>
        <view class="gap-16 flex">
            <tm-icon size="42" color="error" spin name="loader-line"></tm-icon>
        </view>
    </tm-sheet>

    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">图片图标</tm-text>
        <view class="gap-16 flex">
            <tm-icon size="42" color="error" name="https://tmui.design/images/logoGreat.png"></tm-icon>
            <tm-icon size="42" color="error" spin name="https://tmui.design/images/logoGreat.png"></tm-icon>
        </view>
    </tm-sheet>

    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">自定义图标</tm-text>
        <view class="gap-16 flex">
            <tm-icon font-family="myicon" prefix="myicon-" size="42" name="camera"></tm-icon>

            <tm-icon font-family="myicon" prefix="myicon-" size="42" name="music"></tm-icon>
            <tm-icon font-family="myicon" prefix="myicon-" size="42" name="phone"></tm-icon>
        </view>
    </tm-sheet>
</template>
<script setup lang="ts">
const testClick = (text: string) => {
    uni.showToast({ title: text, icon: "none" });
};
</script>
<style lang="scss"></style>
