<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-8 d-block">日期选择器 PickerDate</tm-text>
            <tm-text color="#999999">日期选择，可以控制显示精确到秒。默认的开始时间为当前时间的上一年，结束时间为默认当前时间</tm-text>
        </tm-sheet>


        <tm-sheet>
            <tm-picker-date v-model="modelValue" start="2024-1-1" end="2024-9-5" v-model:model-str="nowVal"
                format="YYYY-MM-DD">
                <tm-button :block="true">打开时间</tm-button>
            </tm-picker-date>

            <tm-sheet :margin="['0', '24', '0', '0']" color="#f5f5f5" dark-color="#333">
                <tm-text color="#999999">选中的值：{{ modelValue }}</tm-text>
                <tm-text color="#999999">经format的值：{{ nowVal }}</tm-text>
            </tm-sheet>
        </tm-sheet>
        <tm-sheet>
            <tm-button skin='thin' :block="true" @click="modelValue = '2024-3-21'">赋值2024-3-21</tm-button>
        </tm-sheet>

        <tm-sheet>
        
            <tm-text font-size="36" class=" text-weight-b mb-8">内嵌日期选择器 xDateView</tm-text>
            <tm-date-view v-model="nowVal2" start="2022-3-1" end="2024-9-5"></tm-date-view>
            <tm-sheet :margin="['0', '24', '0', '0']" color="#f5f5f5" dark-color="#333">
                <tm-text color="#999999">选中的值：{{ nowVal2 }}</tm-text>
            </tm-sheet>
            
        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b">精确到秒</tm-text>
        </tm-sheet>
        <tm-sheet>
            <tm-picker-date type="second">
                <tm-button :block="true">打开时间</tm-button>
            </tm-picker-date>
        </tm-sheet>
    </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const nowVal = ref("")
const nowVal2 = ref("")
const modelValue = ref("")
</script>

<style lang="scss"></style>