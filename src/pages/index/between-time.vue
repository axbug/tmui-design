<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-8 d-block">时间区间选择 xBetweenTime</tm-text>
            <tm-text color="#999999">快速的时间区间选择器，方便时间选择自动判断前后时间大小并校正。</tm-text>
        </tm-sheet>

        <tm-sheet>

            <tm-between-time start="2020-1-9" end="2026-5-26" v-model="newdata" v-model:model-str="nowVal">
                <tm-button :block="true">打开时间</tm-button>
            </tm-between-time>

            <tm-sheet :margin="['0', '24']" color="#f5f5f5" dark-color="#333">
                <tm-text color="#999999">选中的值：{{ newdata }}</tm-text>
                <tm-text color="#999999">经format的值：{{ nowVal }}</tm-text>
            </tm-sheet>
            <tm-button skin='thin' :block="true" @click="newdata = ['2024-3-21', '2026-1-13']">赋值</tm-button>
        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-20 d-block">设置快捷按钮</tm-text>
            <tm-between-time :quick-date="['d', 'y', '7', '30']" start="2020-1-9" end="2026-5-26" v-model="newdata"
                v-model:model-str="nowVal">
                <tm-button :block="true">打开时间</tm-button>
            </tm-between-time>

        </tm-sheet>

    </view>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const nowVal = ref("")
const newdata = ref<string[]>([])
</script>

<style lang="scss"></style>