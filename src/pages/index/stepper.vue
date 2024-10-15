<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-8 d-block">步进器 Stepper</tm-text>
            <tm-text color="#999999">可整数，小数步进</tm-text>
        </tm-sheet>

        <tm-sheet class="flex fletm-row">
            <tm-stepper width="220"></tm-stepper>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b d-block">小数点</tm-text>
        </tm-sheet>
        <tm-sheet class="flex fletm-row">
            <tm-stepper :decimal-len="1" :step="0.1" width="220"></tm-stepper>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b d-block">圆角类型</tm-text>
        </tm-sheet>
        <tm-sheet class="flex fletm-row">
            <tm-stepper :splitBtn="true" :model-value="50" width="220"></tm-stepper>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b d-block">更换颜色</tm-text>
        </tm-sheet>
        <tm-sheet class="flex fletm-row">
            <tm-stepper darkBtnColor="primary" btn-color="primary" btn-font-color="white" font-color="primary"
                :splitBtn="true" :model-value="10" width="220"></tm-stepper>
        </tm-sheet>



    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>
