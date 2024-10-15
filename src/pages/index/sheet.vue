<template>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">容器 TmSheet</tm-text>
        <view>
            <tm-text>非常方便快速布局，可全局配置间隙投影，圆角这些。</tm-text>
        </view>
    </tm-sheet>
    <tm-sheet color="primary" :round="[0, 20]">
        <tm-text color="white">更改圆角</tm-text>
    </tm-sheet>
    <tm-sheet borderWidth="4" :borderColor="['#8A88FB', '#D079EE']" :round="[0, 20]">
        <tm-text>边线</tm-text>
    </tm-sheet>
    <tm-sheet :linear="['220.55deg', '#8A88FB', '#D079EE']" :round="[0, 20]">
        <tm-text color="white">渐变</tm-text>
    </tm-sheet>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b">允许让内容加载中...</tm-text>
    </tm-sheet>
    <tm-sheet :loading="true">
        <tm-sheet color="warn" :round="[0, 20]">
            <tm-text color="white">让内容处理加载中</tm-text>
        </tm-sheet>
    </tm-sheet>
</template>
<script setup lang="ts"></script>
<style lang="scss"></style>
