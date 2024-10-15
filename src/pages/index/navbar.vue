<template>
    <view>
        <tm-navbar :scrollTop="scrollTop" lrWidth='56' :staticTransparent="staticTransparent" :linear-gradient="linear"
            :linearActiveGradient="bgcolor" bg-color="primary" @fiexdChange="navPosChange" title-color="white"
            active-bg-color="#ff5416" title-active-color="yellow" :isPlace="false">
            <template v-slot:title>
                <view class="flex flex-row flex-row-center-start relative flex-1" style="height:100%">
                    <tm-input focus-font-color="#ff5416" :focus-highlight="false" placeholder="搜索吧" icon-color="#ff5416"
                        round="76" v-if="ratio > 0" left-icon="search-2-line" dark-bg-color="white"
                        :style="{ opacity: ratio, width: (ratio * 400) + 'rpx' }" min-height="72">
                        <template v-slot:rightIcon>
                            <tm-button color="#ff5416" font-size="28" round="76" class="mr-2" height="68"
                                width="100">搜索</tm-button>
                        </template>
                    </tm-input>
                    <tm-text v-if="ratio < 1" :style="{ opacity: (1 - ratio), pointerEvents: 'none' }" color='white'
                        dark-color="white" class="absolute">NAVBAR 标题栏</tm-text>
                </view>
            </template>
            <template v-slot:right="{ isFiexd }">
                <tm-icon _class="mr-16" name="account-circle-line" size="40"
                    :color="(isFiexd as boolean) ? 'yellow' : 'white'"></tm-icon>
            </template>
        </tm-navbar>
        <tm-image src="https://store.tmui.design/api_v2/public/random_picture?random=183"></tm-image>

        <tm-sheet :margin="['16']">
            <tm-text font-size="36" class=" text-weight-b">标题导航 tmNavbar</tm-text>
            <tm-text class=" text-grey  line-8">可静态悬浮在顶部，也可动态悬浮顶部下拉动态改变背景</tm-text>
        </tm-sheet>
        <tm-sheet height="2000">
            <tm-text font-size="36" class=" text-weight-b ">滚动本页面，查看导航效果</tm-text>
            <tm-text class=" text-grey  my-20">可静态和悬浮时出现不同的渐变背景</tm-text>
            <tm-button :block="true" @click="setbgcolor">切换渐变导航</tm-button>
            <tm-text class=" text-grey  my-20">可静态和悬浮时出现不同的纯色背景</tm-text>
            <tm-button :block="true" @click="clearBgcolor">纯色背景</tm-button>
            <tm-text class=" text-grey  my-20">可静态时不透明</tm-text>
            <tm-button :block="true" @click="staticTransparent = !staticTransparent">{{ !staticTransparent ? '静态透明' :
                '静态不透明'
                }}</tm-button>
        </tm-sheet>
    </view>
</template>
<script setup lang="ts">
import { onPageScroll } from '@dcloudio/uni-app';

import { ref } from 'vue'
const ratio = ref(0)
const bgcolor = ref<string[]>([])
const linear = ref<string[]>([])
const staticTransparent = ref(true)
const scrollTop = ref(0)
const setbgcolor = () => {
    bgcolor.value = ['to right', '#ff338f', '#6b3eff'];
    linear.value = ['to right', '#02a7ff', '#22e192'];
}
const clearBgcolor = () => {
    bgcolor.value = [] as string[]
    linear.value = [] as string[]
}
const navPosChange = (posratio: number) => {
    ratio.value = posratio
}
onPageScroll((evt: Page.PageScrollOption) => {
    scrollTop.value = evt.scrollTop;
})
</script>
<style scoped></style>
