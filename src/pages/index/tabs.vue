<script setup lang="ts">
import { ref, computed, onMounted, watch, PropType } from 'vue';
const data2 = ref(['待配送', '售后中', { id: 'tmui', title: '待收款', dot: 'hot' }])
const data3 = ref(['待配送', { id: 'tmui', title: '待收款', dot: 22 }, '售后中'])
const data = ref(['全部',{title:'禁用项',disabled:true}, { id: 'tmui', title: '待收款', dot: 'hot' }, '待配送', '售后中', { title: '已退款', dot: 3 }, '待配送', '售后中', '已退款'])

</script>
<template>
    <view>
        <tm-sheet :margin="['0', '0', 0, 20]">
            <tm-text font-size="36" class=" text-weight-b mb-16 d-block">标签导航 tmTabs</tm-text>
            <tm-text color="#999999">tabs标签导航组件,样式非常丰富可以完成你想要的自定义样式.</tm-text>
        </tm-sheet>
        <tm-tabs :list="data"></tm-tabs>
        <tm-sheet :margin="['0', '20', 0, 20]">
            <tm-text font-size="36" class=" text-weight-b">均分</tm-text>
        </tm-sheet>
        <tm-tabs item-width="33.33%" :list="data2"></tm-tabs>
        <tm-sheet :margin="['0', '20', 0, 20]">
            <tm-text font-size="36" class=" text-weight-b">均分线等宽修改激活色</tm-text>
        </tm-sheet>
        <tm-tabs item-width="33.33%" gap="0" line-full line-height="2px" active-title-color="warn"
            :list="data2"></tm-tabs>
        <tm-sheet :margin="['0', '20', 0, 20]">
            <tm-text font-size="36" class=" text-weight-b">自定背景相关</tm-text>
        </tm-sheet>
        <tm-tabs item-width="33.33%" gap="0" line-full line-height="2px" color="primary" dot-bg-color="warn"
            title-color="#acdaff" active-title-color="white" :list="data3"></tm-tabs>
        <tm-sheet :margin="['0', '20', 0, 20]">
            <tm-text font-size="36" class=" text-weight-b">使用自定style完全覆盖样式</tm-text>
        </tm-sheet>
        <tm-tabs 
        custom-item-style="color:#000;"
        active-item-style="background:#f5f5f5"
        :list="data"></tm-tabs>
    </view>
</template>
<style scoped>
.tmTabsWrapBox {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 200px;
    height: 44px;
}
</style>