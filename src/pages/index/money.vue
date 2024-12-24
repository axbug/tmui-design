<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">金额栅格 TmMoney</tm-text>
            <view>
                <tm-text>考虑到这个比较常用，输入金额为数字即可，可以放心的使用保证精度，不采用toFiexd，保证金额精度无舍入</tm-text>
            </view>
        </tm-sheet>
   
        <tm-sheet class="flex flex-row flex-row-center-between">
            <tm-text>默认2位小数</tm-text>
            <tm-money :modelValue="1568"></tm-money>
        </tm-sheet>

        <tm-sheet class="flex flex-row flex-row-center-between">
            <tm-text>开启千分位,小数位为3</tm-text>
            <tm-money :thousand="true" :digit="3" fontSize="30" :modelValue="15568.398"></tm-money>
        </tm-sheet>
        <tm-sheet class="flex flex-row flex-row-center-between">
            <tm-text>千分位为4分割</tm-text>
            <tm-money :thousand="true" :thousandLen="4" :digit="3" :modelValue="15568.398"></tm-money>
        </tm-sheet>
        <tm-sheet class="flex flex-row flex-row-center-between">
            <tm-text>字号控制</tm-text>
            <tm-money :thousand="true" fontSize="48" :digit="3" :modelValue="15568.398"></tm-money>
        </tm-sheet>
        <tm-sheet>
            <tm-text>大写金额（仅到厘,不要超过后4位）</tm-text>
            <view class="flex flex-row flex-row-center-start">
                <tm-money color="warn" darkColor="warn" :showCn="false" fontSize="48" :digit="4"
                :modelValue="money"></tm-money>
                <tm-money class="ml-8" :showCn="true" :digit="4" :modelValue="money"></tm-money>
            </view>
            <tm-button class="mt-n8" :block="true" @click="money = money == 1568.3984 ? 1548.36 : 1568.3984">试试修改金额</tm-button>
        </tm-sheet>
        <tm-sheet>
            <tm-text>去除小数，把小数置0即可，要注意我不会舍入，是直接丢掉小数</tm-text>
            <tm-money :showCn="false" :digit="0" :modelValue="1568.398"></tm-money>
            <tm-text>可以直接写style修改样式</tm-text>
            <tm-money style="font-weight: bold;" :showCn="false" fontSize="48" preFontSize="24"
                :digit="1" :modelValue="1568.398"></tm-money>
        </tm-sheet>

        <tm-sheet>
            <tm-text>自定义货币符号</tm-text>
            <tm-money symbolText="$" fontSize="40" :modelValue="1568" preFontSize="24"></tm-money>
            <tm-money symbolText=" / 美元" fontSize="40" preFontSize="24" symbolPosition='right'
                :modelValue="1568"></tm-money>
            <tm-money symbolText=" 元/个" fontSize="40" preFontSize="24" symbolPosition='right'
                :modelValue="1568"></tm-money>
            <tm-money symbolText="人民币: " fontSize="40" preFontSize="24" symbolPosition='left'
                :modelValue="1568"></tm-money>
        </tm-sheet>
    </view>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const money = ref(1568.3984)
</script>
<style lang="scss" scoped></style>