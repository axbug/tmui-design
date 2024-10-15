<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class=" text-weight-b mb-16 d-block">选择器容器 PickerView</tm-text>
            <tm-text color="#999999" class="text-size-b">
                组件采用数组id式选择，非索引。考虑到实际实用中多以id为交互提交数据。因此摒弃了传统的索引选项
            </tm-text>
        </tm-sheet>

        <tm-sheet>
            <tm-picker-view v-model:model-str="selectedStr" @change="change" v-model="selecteds"
                :list="list"></tm-picker-view>
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
const list = [
    {
        "title": "1江西",
        "id": "1",
        "children": [
            {
                "title": "1南昌",
                "id": "1-1",
                "children": [
                    {
                        "title": "11青山湖区",
                        "id": "1-1-1"
                    },
                    {
                        "title": "11高新区",
                        "id": "1-1-2"
                    },
                    {
                        "title": "11红谷滩区",
                        "id": "1-1-3"
                    }
                ]
            },
            {
                "title": "1九江",
                "id": "1-2",
                "disabled": true
            },
            {
                "title": "1赣州",
                "id": "1-3",
            },
            {
                "title": "1吉安",
                "id": "1-4"
            },
            {
                "title": "1抚州",
                "id": "1-5"
            }
        ]
    },
    {
        "title": "2湖南",
        "id": "2",
        "children": [
            {
                "title": "21长沙",
                "id": "2-1",
                "children": [
                    {
                        "title": "21雨花区",
                        "id": "2-1-2"
                    },
                    {
                        "title": "21芙蓉区",
                        "id": "2-1-3"
                    },
                    {
                        "title": "21开福区",
                        "id": "2-1-4"
                    }
                ]
            },
            {
                "title": "2株洲",
                "id": "2-2",
                "disabled": true
            },
            {
                "title": "2湘潭",
                "id": "2-3"
            },
            {
                "title": "2衡阳",
                "id": "2-4"
            },
            {
                "title": "2郴州",
                "id": "2-5"
            }
        ]
    },
    {
        "title": "3广东",
        "id": "3",
        "children": [
            {
                "title": "3广州",
                "id": "3-1",
                "children": [
                    {
                        "title": "31天河区",
                        "id": "3-1-2"
                    },
                    {
                        "title": "31白云区",
                        "id": "3-1-3"
                    },
                    {
                        "title": "31黄埔区",
                        "id": "3-1-4"
                    }
                ]
            },
            {
                "title": "3深圳",
                "id": "3-2",
                "disabled": true
            },
            {
                "title": "3珠海",
                "id": "3-3"
            },
            {
                "title": "3佛山",
                "id": "3-4"
            },
            {
                "title": "3惠州",
                "id": "3-5"
            }
        ]
    }
];

const selecteds = ref(['2', '2-1', '2-1-3'])
const selectedStr = ref("")
const change = (ids: string[]) => {
    // console.log(ids)
}
</script>

<style lang="scss"></style>