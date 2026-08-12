<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(10)
</script>

<template>
    <view>
        <tm-sheet>
            <tm-text font-size="32" class=" text-weight-b mb-16 d-block">圆环进度条 TmCircleProgress</tm-text>
            <tm-text class="" color="#999999">
                配置灵活，自由度高。
            </tm-text>
        </tm-sheet>


        <tm-sheet class="flex gap-10 flex-row">
            <tm-circle-progress :model-value="50" line-width="20" color="primary"></tm-circle-progress>
            <tm-circle-progress :model-value="50" line-width="16" color="warn"></tm-circle-progress>
            <tm-circle-progress :model-value="50" line-width="8" color="error"></tm-circle-progress>
            <tm-circle-progress :model-value="50" label-color="#FF6C6C"
            linear-color="linear-gradient(to right, #DD7BFF 0%, #FF6C6C 100%)"></tm-circle-progress>
        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="32" class=" text-weight-b mb-n8 d-block">改变它的起始角度</tm-text>

            <view class="flex gap-10">
                <tm-circle-progress :model-value="50" :start-angle="-90"></tm-circle-progress>
                <tm-circle-progress :model-value="50" :start-angle="90"></tm-circle-progress>
                <tm-circle-progress :model-value="50" :start-angle="180"></tm-circle-progress>
            </view>
        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="32" class=" text-weight-b n8 d-block">受控及动画演示</tm-text>
            <tm-text color="#999999" class=" mb-n8 ">
                演示标签插槽，状态自定义，渐变，自定颜色等属性。
            </tm-text>
            <view class="flex flex-row gap-10 mt-n8">
                <tm-circle-progress v-model="value"></tm-circle-progress>
                <tm-circle-progress v-model="value" :color="value > 50 ? 'success' : 'primary'"></tm-circle-progress>
                <tm-circle-progress v-model="value" :color="value > 50 ? 'success' : 'warn'">
                    <template v-slot:default="{ value, percentage }">
                        <tm-icon color="success" v-if="percentage > 80" name="checkbox-circle-line"></tm-icon>
                        <tm-icon color="warn" v-else name="close-circle-line"></tm-icon>
                    </template>
                </tm-circle-progress>
                <tm-circle-progress v-model="value" label-color="#4DEF8E"
                    linear-color="linear-gradient(to right, #FFEB3A 0%, #4DEF8E 100%)"></tm-circle-progress>

            </view>
            <view class="flex flex-row gap-10 mt-n8">
                <tm-tag @click="value = 10">10</tm-tag>
                <tm-tag @click="value = 50">50</tm-tag>
                <tm-tag @click="value = 100">100</tm-tag>
            </view>
        </tm-sheet>


    </view>

</template>

<style scoped></style>
