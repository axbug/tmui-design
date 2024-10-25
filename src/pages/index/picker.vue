<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-8 d-block">选择器 tmPicker</tm-text>
            <tm-text color="#999999" class="text-size-b">
                这是tmPickerView封装的弹出式，详细可见tmPickerView文档
            </tm-text>
        </tm-sheet>
        <tm-sheet>

            <tm-picker :list="list">
                <tm-button :block="true">打开选项</tm-button>
            </tm-picker>

        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-8 d-block">城市选择器</tm-text>
            <tm-picker @change="change" rang-key="code" rang-text="name" v-model="selecteds" v-model:model-str="str"
                :list="city">
                <tm-button :block="true">打开选项</tm-button>
            </tm-picker>

            <tm-sheet :margin="['0', '24']" color="#f5f5f5" dark-color="#333">
                <tm-text color="#999999">选中的值：{{ selecteds.join(',') }}</tm-text>
                <tm-text color="#999999">选中的值回显文本：{{ str }}</tm-text>
            </tm-sheet>
            <tm-button skin="thin" :block="true" @click="fuzhi">赋值</tm-button>
        </tm-sheet>
        <view style="height: 50px;"></view>
    </view>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import city from "@/uni_modules/tm-ui/static/pca-code.json"
const list = [
    {
        title: '江西',
        id: "9-1",
        children: [
            {
                title: '南昌',
                id: "132",
                children: [
                    { title: '青山湖区', id: "1-2" },
                    { title: '高新区', id: "1-3", disabled: true },
                    { title: '红谷滩区', id: "1-4" },
                ],

            },
            {

                title: '九江', id: "222",
                children: [
                    { title: '2青山湖区', id: "1-32" },
                    { title: '2高新区', id: "1-33" },
                    { title: '3红谷滩区', id: "1-34" },
                ],
            },
        ],
    },
    {
        title: '安徽',
        id: "10-13",
        children: [
            {
                title: '5南昌',
                id: "3",
                children: [
                    { title: '5青山湖区', id: "1-52" },
                    { title: '5高新区', id: "1-53" },
                    { title: '5红谷滩区', id: "1-54" },
                ],

            },
            {
                title: '5南昌',
                id: "36",
                children: [
                    { title: '6青山湖区', id: "61-52" },
                    { title: '6高新区', id: "61-53" },
                    { title: '6红谷滩区', id: "61-54" },
                ],

            },
        ],
    },

];
const selecteds = ref(['15', '1504', '150404'])
const str = ref("")
const change = (ids: string[]) => {
    console.log(ids)
}
const fuzhi = () => {
    selecteds.value = ['14', '1403', '140311']
}
</script>

<style lang="scss"></style>