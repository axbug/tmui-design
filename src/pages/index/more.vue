<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-n8 d-block">金额栅格 TmMoney</tm-text>
            <view>
                <tm-text>考虑到这个比较常用，输入金额为数字即可，可以放心的使用保证精度，不采用toFiexd，保证金额精度无舍入</tm-text>
            </view>
        </tm-sheet>
   
        <tm-sheet class="flex flex-row flex-row-center-between">
            <tm-more>
                新华社北京12月30日电 国家主席习近平将于31日晚7时通过中央广播电视总台和互联网，发表二〇二六年新年贺词。中央广播电视总台所属中央电视台综合频道、新闻频道、中文国际频道、4K频道，中国国际电视台各外语频道，中央人民广播电台，中国国际广播电台，以及人民网、新华网、央视新闻客户端等中央主要新闻媒体所属网站、新媒体平台将准时播出。
            </tm-more>
        </tm-sheet>

        <tm-sheet class="flex flex-row flex-row-center-between">
            <tm-more v-model="open" :text="['付费解锁','关闭']" unActiveColor="error" :disabled="true" @click="openClick">
                新华社北京12月30日电 国家主席习近平将于31日晚7时通过中央广播电视总台和互联网，发表二〇二六年新年贺词。中央广播电视总台所属中央电视台综合频道、新闻频道、中文国际频道、4K频道，中国国际电视台各外语频道，中央人民广播电台，中国国际广播电台，以及人民网、新华网、央视新闻客户端等中央主要新闻媒体所属网站、新媒体平台将准时播出。
            </tm-more>
        </tm-sheet>

        
    </view>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const open = ref(false)
const openClick = () => {
    if(open.value){
        open.value = false;
        return
    }
    uni.showModal({
        title: '提示',
        content: '确定要付费打开吗？',
        success: (res) => {
            if (res.confirm) {
                open.value = true
            }

        }
    })


}
</script>
<style lang="scss" scoped></style>
