<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-8 d-block">日期选择器 PickerDate</tm-text>
            <tm-text color="#999999">日期选择，可以控制显示精确到秒。默认的开始时间为当前时间的上一年，结束时间为默认当前时间</tm-text>
        </tm-sheet>


        <tm-sheet>
            <tm-picker-time v-model="modelValue"  v-model:model-str="nowVal"
                format="hh时mm分ss秒">
                <tm-button :block="true">打开时间</tm-button>
            </tm-picker-time>

            <tm-sheet :margin="['0', '24', '0', '0']" color="#f5f5f5" dark-color="#333">
                <tm-text color="#999999">选中的值：{{ modelValue }}</tm-text>
                <tm-text color="#999999">经format的值：{{ nowVal }}</tm-text>
            </tm-sheet>
        </tm-sheet>
        <tm-sheet>
            <tm-button skin='thin' :block="true" @click="modelValue = '14:30:26'">赋值14:30:26</tm-button>
        </tm-sheet>

       

        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b">精确到分{{ modelValue2 }}</tm-text>
        </tm-sheet>
        <tm-sheet>
            <tm-picker-time v-model="modelValue2" v-model:model-str="nowVal2" start="08:30:00" end="22:00:00" type="minute">
                <tm-button :block="true">打开时间</tm-button>
            </tm-picker-time>
        </tm-sheet>
        
    </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const nowVal = ref("")
const nowVal2 = ref("")
const modelValue = ref("")
const modelValue2 = ref("")
</script>

<style lang="scss"></style>