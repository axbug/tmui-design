<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mt-16">视频上传 TmUploadVideo</tm-text>
            <view class="mb-16">
                <tm-text>样式丰富塑造性好。</tm-text>
            </view>
        </tm-sheet>
        <tm-sheet>
            <tm-upload-video v-model="modelvalue2" add-pos="before" :column="3" img-height="200">
                <tm-sheet  round="10" width="100%" height="100%" class="flex flex-row flex-row-center-center" border-color="primary" border-width="1" margin="0" padding="0">
                    <tm-icon size="64" color="primary" name="camera-line"></tm-icon>
                </tm-sheet>
            </tm-upload-video>
        </tm-sheet>

        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b d-block mb-16">限定一个</tm-text>

            <tm-upload-video :column="1" img-height="200" :max-count="1">
            </tm-upload-video>
        </tm-sheet>
    </view>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const modelvalue2 = ref<Array<Record<string, any> | string>>(['https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'])
</script>