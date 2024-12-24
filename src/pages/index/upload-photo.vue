<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mt-16">图片上传 TmUploadPhoto</tm-text>
            <view class="mb-16">
                <tm-text>样式丰富塑造性好。</tm-text>
            </view>
        </tm-sheet>
        <tm-sheet>
            <tm-upload-photo v-model="modelvalue"></tm-upload-photo>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b">自定样式,列,上传位置</tm-text>
        </tm-sheet>
        <tm-sheet>
            <tm-upload-photo v-model="modelvalue2" add-pos="before" :column="3" img-height="200">
                <tm-sheet style="box-sizing: border-box;"  round="10" width="100%" height="100%" class="flex flex-row flex-row-center-center" border-color="primary" border-width="1" margin="0" padding="0">
                    <tm-icon size="64" color="primary" name="inbox-unarchive-fill"></tm-icon>
                </tm-sheet>
            </tm-upload-photo>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b">限定一个</tm-text>
        </tm-sheet>
        <tm-sheet>
            <tm-upload-photo :column="1" img-height="200" :max-count="1">
                <tm-sheet style="box-sizing: border-box;" round="10" width="100%" height="100%" class="flex flex-row flex-row-center-center" color="#e7f2ff" border-style="dashed" border-color="primary" border-width="1" margin="0" padding="0">
                    <tm-icon size="74" color="primary" name="sticky-note-add-line"></tm-icon>
                </tm-sheet>
            </tm-upload-photo>
        </tm-sheet>
    </view>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const modelvalue = ref<Array<Record<string, any> | string>>(['https://img-cdn-tx.dcloud.net.cn/stream/plugin_screens/0306ed00-b46d-11ee-800c-6f5e9833f51b_0.jpg?&v=1716952063'])
const modelvalue2 = ref<Array<Record<string, any> | string>>(['https://img-cdn-tx.dcloud.net.cn/stream/plugin_screens/0306ed00-b46d-11ee-800c-6f5e9833f51b_0.jpg?&v=1716952063'])
</script>