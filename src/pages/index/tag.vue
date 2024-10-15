<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mt-16">标签 TmTag</tm-text>
            <view class="mb-16">
                <tm-text>样式丰富塑造性好。</tm-text>
            </view>
        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b">大小</tm-text>
            <view class="flex flex-row flex-row-top-start flex-wrap gap-15 mt-16">
                <tm-tag size="xs">极小</tm-tag>
                <tm-tag size="s">小</tm-tag>
                <tm-tag size="m">中等</tm-tag>
                <tm-tag>默认</tm-tag>
                <tm-tag size="g">大标签</tm-tag>
            </view>
        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b flex d-block mb-16">状态及样式</tm-text>
            <view class="flex flex-row flex-row-top-start flex-wrap gap-15">
                <tm-tag :disabled="true">禁用</tm-tag>
                <tm-tag skin="outlined">outlined</tm-tag>
                <tm-tag skin="thin">thin</tm-tag>
                <tm-tag skin="dashed">dashed</tm-tag>
                <tm-tag>normal</tm-tag>
                <tm-tag skin="text">text</tm-tag>

            </view>
        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">图标</tm-text>
            <view class="flex flex-row flex-row-top-start flex-wrap gap-15">
                <tm-tag icon="thumb-up-fill" round="42" style="padding: 0 24rpx;">图标</tm-tag>
                <tm-tag icon="reply-line" color="error" size="n">回复</tm-tag>
                <tm-tag icon="verified-badge-fill" skin="outlined" iconSize="52" size="n" btnIcon></tm-tag>
                <tm-tag skin="thin" icon="thumb-up-fill">为您点赞</tm-tag>
                <tm-tag skin="thin" color="info" icon="verified-badge-line">这是一个非常长的小标签</tm-tag>
                <tm-tag skin="outlined" icon="thumb-up-fill">为您点赞</tm-tag>
                <tm-tag skin="dashed" color="success" icon="thumb-up-fill">为您点赞</tm-tag>

            </view>
        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">其它自定样式</tm-text>
            <view class="flex flex-wrap gap-15">
                <tm-tag skin="outlined" :round="[20, 0, 20, 0]">加载中</tm-tag>
                <tm-tag skin="dashed" :round="[20, 0, 20, 0]">圆角半径</tm-tag>
                <tm-tag color="#4300B1" :linear="['45deg', '#A531DC', '#4300B1']" :round="[20, 0, 20, 0]">渐变</tm-tag>
                <tm-tag skin="thin">浅色</tm-tag>
                <tm-tag :linear="['to right', '#FFEB3A', '#4DEF8E']">渐变</tm-tag>
                <tm-tag :linear="['to right', '#FFC328', '#E20000']">渐变</tm-tag>
                <tm-tag :linear="['to right', '#DD7BFF', '#FF6C6C']">渐变</tm-tag>

            </view>
        </tm-sheet>

    </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style></style>
