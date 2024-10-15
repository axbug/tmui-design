<template>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mt-16">按钮 TmButton</tm-text>
        <view class="mb-16">
            <tm-text>样式丰富塑造性好。</tm-text>
        </view>

        <view class="gap-15 flex flex-col">
            <tm-button block>正常</tm-button>
            <tm-button block color="warn">警告</tm-button>
            <tm-button block color="error">错误</tm-button>
            <tm-button block color="success">成功</tm-button>
            <tm-button block color="danger">危险</tm-button>
            <tm-button block color="info">次要</tm-button>
        </view>
    </tm-sheet>

    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b">大小</tm-text>
        <view class="flex flex-row flex-row-top-start flex-wrap gap-15 mt-16">
            <tm-button size="xs">极小</tm-button>
            <tm-button size="s">小</tm-button>
            <tm-button size="m">中等</tm-button>
            <tm-button>默认</tm-button>
            <tm-button size="g">大按钮</tm-button>
        </view>
    </tm-sheet>

    <tm-sheet class="gap-15 flex flex-col">
        <tm-text font-size="36" class="text-weight-b flex">状态</tm-text>
        <tm-button block :loading="true">加载中</tm-button>
        <tm-button block :disabled="true">禁用</tm-button>
    </tm-sheet>

    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">图标按钮</tm-text>
        <view class="flex flex-row flex-row-top-start flex-wrap gap-15">
            <tm-button icon="thumb-up-fill" size="n" btnIcon width="80" rounded></tm-button>
            <tm-button icon="reply-line" color="error" size="n" btnIcon width="80" rounded></tm-button>
            <tm-button icon="verified-badge-fill" skin="outlined" iconSize="52" size="n" btnIcon width="80"
                rounded></tm-button>
            <tm-button loading skin="outlined" btnIcon width="80" rounded></tm-button>
        </view>
    </tm-sheet>

    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">按钮样式</tm-text>
        <view class="flex flex-row flex-row-top-start flex-wrap gap-15">
            <tm-button loading skin="outlined">加载中</tm-button>
            <tm-button skin="dashed" :round="[20, 0, 20, 0]">异形</tm-button>
            <tm-button color="#4300B1" :linear="['45deg', '#A531DC', '#4300B1']">渐变</tm-button>
            <tm-button skin="text">文本</tm-button>
            <tm-button skin="thin">浅色</tm-button>
        </view>
    </tm-sheet>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">渐变按钮</tm-text>
        <view class="gap-15 flex flex-col">
            <tm-button block :linear="['to right', '#FFEB3A', '#4DEF8E']">按钮</tm-button>
            <tm-button block :linear="['to right', '#00B960', '#00552C']">按钮</tm-button>
            <tm-button block :linear="['to right', '#DD7BFF', '#FF6C6C']">按钮</tm-button>
            <tm-button block :linear="['to right', '#FFC328', '#E20000']">按钮</tm-button>
        </view>
    </tm-sheet>
</template>

<script setup>
import { ref } from "vue";
</script>

<style></style>
