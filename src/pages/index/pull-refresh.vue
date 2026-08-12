<template>
    <view style="height: calc(100vh - 44px);" class="flex flex-col">
        <tm-pull-refresh :frist-load="false" style="height: 100%;"
        :pull-refresh="handleRefresh" 
        :bottom-refresh="bootmHandleRefresh" >
            <tm-sheet>
                <tm-text font-size="36" class="text-weight-b mb-n8 d-block">下拉刷新</tm-text>
                <view>
                    <tm-text>请拖拉下拉刷新</tm-text>
                </view>
            </tm-sheet>
            <tm-sheet height="800px">
                <tm-text font-size="36" class="text-weight-b mb-n8 d-block">触底刷新</tm-text>
                <view>
                    <tm-text>上拖触底刷新</tm-text>
                </view>
            </tm-sheet>
        </tm-pull-refresh>
    </view>
</template>
<script setup lang="ts">
const handleRefresh = ():Promise<boolean> => {
    console.log('刷新');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('完成');
            resolve(true);
        }, 3*1000);
    })
}
const bootmHandleRefresh = async ():Promise<boolean> => {
    console.log('刷新');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('完成');
            resolve(true);
        }, 3000);
    })
}
</script>
<style lang="scss"></style>
