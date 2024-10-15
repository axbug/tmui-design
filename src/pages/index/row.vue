<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">布局 TmRow TmCol</tm-text>
            <view>
                <tm-text>快速排版布局利器,内只能放置tmCol组件,默认是5列栅格,可以自行更改</tm-text>
            </view>
        </tm-sheet>
        <tm-sheet>
            <tm-row>
                <tm-col v-for="(index, item) in 5" :key="index"
                    :style="{ backgroundColor: `rgb(21, ${135 - item * 20}, ${235 - item * 20})` }"
                    class=" text-align-center py-24 text-white">{{ item }}</tm-col>
            </tm-row>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">上下左右间隙</tm-text>
            <tm-row gutter="2">
                <tm-col v-for="item in 10" :key="item" :style="{ backgroundColor: `rgb(230, ${item * 20}, ${165 - item * 20})` }"
                    class=" text-align-center py-24 text-white">{{ item % 5 == 0 ? 5 : item % 5 }}</tm-col>
            </tm-row>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">设置各自的栅格</tm-text>
            <tm-row>
                <tm-col v-for="(item, index) in [2, 1, 2, 5]" :key="item" :span="item"
                    :style="{ backgroundColor: `rgb(0, ${index * 20}, ${index * 20})` }"
                    class=" text-align-center py-24 text-white">{{ item }}</tm-col>
            </tm-row>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">改为10栅格</tm-text>
            <tm-row column="10">
                <tm-col v-for="(item, index) in [1, 3, 1, 5]" :key="item" :span="item"
                    :style="{ backgroundColor: `rgb(${item * 20}, ${95 - item * 20}, ${165 - item * 10})` }"
                    class=" text-align-center py-24 text-white">{{ item }}</tm-col>
            </tm-row>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">向右对齐</tm-text>
            <tm-row column="10" justify="flex-end">
                <tm-col v-for="(item, index) in [2, 5, 3, 3, 2]" :key="item" :span="item"
                    :style="{ backgroundColor: `rgb(0, ${index * 20}, ${index * 10})` }"
                    class=" text-align-center py-24 text-white">{{ item }}</tm-col>
            </tm-row>
        </tm-sheet>
    </view>
</template>
<script setup lang="ts">
import { ref } from 'vue';
</script>
<style lang="scss" scoped></style>