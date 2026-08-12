<template>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b d-block">单向滑块 TmSlider</tm-text>
        <view>
            <tm-text>分单向和双向滑动条</tm-text>
        </view>
    </tm-sheet>
    
    <tm-sheet>
        <view class="mt-n8">
            <tm-slider v-model="val" ></tm-slider>
        </view>
        <view class="mt-n16">
            <tm-slider v-model="val" color="success" ></tm-slider>
        </view>
        <view class="mt-n16">
            <tm-slider v-model="val" size="36" color="error" btn-size="36" round="36"></tm-slider>
        </view>
        <view class="mt-n16">
            <tm-button @click="val=80" block>手动赋值</tm-button>
        </view>
    </tm-sheet>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-n8 d-block">显示标签及渐变背景</tm-text>
        <view class="mt-n16">
            <tm-slider showLabel color="#4DEF8E" btn-size="50" linear-color="linear-gradient(to right, #FFEB3A 0%, #4DEF8E 100%)"></tm-slider>
        </view>
    </tm-sheet>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-n8 d-block">步进值20</tm-text>
        <view class="mt-n16">
            <tm-slider showLabel  color="error" :step="20" ></tm-slider>
        </view>
    </tm-sheet>
    <tm-sheet>
        <tm-text font-size="36"  class="text-weight-b d-block ">双向向滑块 TmSlider</tm-text>
    </tm-sheet>

     <tm-sheet>
        <view class="mt-n16">
            <tm-slider-double showLabel color="#4DEF8E" btn-size="50" linear-color="linear-gradient(to right, #FFEB3A 0%, #4DEF8E 100%)"></tm-slider-double>
        </view>
    </tm-sheet>
    <view style="height: 80px;"></view>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const val = ref(50)
</script>
<style lang="scss"></style>
