<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-16 d-block">选择器容器 PickerView</tm-text>
            <tm-text color="#999999" class="text-size-b">
                组件采用数组id式选择，非索引。考虑到实际实用中多以id为交互提交数据。因此摒弃了传统的索引选项
            </tm-text>
        </tm-sheet>

        <tm-sheet>
            <tm-picker-view v-model:model-str="selectedStr" rang-key="code" rang-text="name" @change="change" 
            v-model="selecteds"
                :list="city"></tm-picker-view>
            <!-- list -->
            <tm-sheet :margin="['0', '24', '0', '0']" color="#f5f5f5" dark-color="#333">
                <tm-text color="#999999">选中的值：{{ selecteds.join(',') }}</tm-text>
                <tm-text color="#999999">选中项的文本：{{ selectedStr }}</tm-text>
            </tm-sheet>
        </tm-sheet>
        <view style="height:50px"></view>
    </view>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import city from "@/uni_modules/tm-ui/static/pca-code.json"


const selecteds = ref<string[]>([])
const selectedStr = ref("")
const change = (ids: string[]) => {
    console.log(ids)
}
</script>

<style lang="scss"></style>