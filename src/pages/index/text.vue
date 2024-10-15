<template>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">文本 TmText</tm-text>
        <view>
            <tm-text>事实上，如果你没有特殊要求可以不用此组件，用自带的text配合我的css库一样比较方便轻巧</tm-text>
            <tm-text @item-click="testClick" class="line-10" :heightLight="['高亮显示', '正则', '邮箱']"
                label="支持多文本高亮显示，比如根据正则高亮电话号码，邮箱等，点击后打电话，发邮件。"></tm-text>
        </view>
    </tm-sheet>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">高亮文本,可自定样式</tm-text>
        <view>
            <tm-text>正则电话，邮箱高亮</tm-text>
            <tm-text @item-click="testClick" height-light-color="red" :height-light-reg="[
                '1[3456789]\\d{9}',
                '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}',
                '《(.*?)》',
            ]" label="邮箱等，点击后打电话:17970689633，发邮件:qq@qq.com。高文本可以被点击触《服务隐私协议》发事件,高亮事件触发目《隐私协议》前uniappx 3.99有bug待官方修复.">
            </tm-text>
        </view>
    </tm-sheet>

    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-16 d-block">使用插槽功能丢失</tm-text>
        <view>
            <tm-text :lines="2">
                使用插槽，当作普通text标签使用，高亮功能和后续的拓展将会失效。
                使用插槽，当作普通text标签使用，高亮功能和后续的拓展将会失效。
            </tm-text>
        </view>
    </tm-sheet>
</template>
<script setup lang="ts">
const testClick = (text: string) => {
    uni.showToast({ title: text, icon: "none" });
};
</script>
<style lang="scss"></style>
