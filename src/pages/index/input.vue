<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">输入框 TmInput</tm-text>
            <view>
                <tm-text>可以全局配置圆角风格,可扩展性高,样式精美完全对标tmui4.0</tm-text>
            </view>
        </tm-sheet>
        <tm-sheet>
            <tm-input v-model="val" placeholder="请输入值.."></tm-input>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">文本域</tm-text>
            <tm-input v-model="val" :maxlength="150" placeholder="请输入" type="textarea" show-char-count></tm-input>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">聚焦样式</tm-text>
            <tm-input class="mb-24" v-model="val" focusHighlight
            focusHighlightStyle="border:2px dashed rgb(255, 0, 0);"
             placeholder="我有自动聚焦边框点我"></tm-input>
            <tm-input v-model="val" focusHighlight
                focusHighlightStyle="border:2px dashed rgb(5, 121, 255);box-shadow:0 0 10px rgba(5, 121, 255,0.2) inset;"
                placeholder="自定聚焦点我"></tm-input>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">前缀图标显示清除图标</tm-text>
            <tm-input v-model="val" placeholder="请输入" left-icon="shield-check-fill" show-clear></tm-input>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">显示标签及输入类型</tm-text>
            <tm-input class="mb-16" type="digit" left-text="价格: " placeholder="请输入价格" left-icon="money-cny-circle-line"
                right-text="万元"></tm-input>
            <tm-input type="number" left-text="数量: " placeholder="请输入数量整数" left-icon="shopping-bag-4-line"
                right-text="万元"></tm-input>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">输入框样式</tm-text>
            <tm-input left-icon="user-shared-fill" class="mb-16" color="transparent"
                style="border:2px solid rgb(233 233 233);border-radius: 24rpx;" :focus-highlight="false"  placeholder="请输入用户名"></tm-input>
            <tm-input class="mb-24" left-icon="lock-password-fill" color="transparent" password
                style="border:2px solid rgb(233 233 233);border-radius: 24rpx;" :focus-highlight="false" placeholder="请输入密码"></tm-input>
            <tm-button block icon="check-double-line">提交</tm-button>
        </tm-sheet>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-16 d-block">插槽自定义</tm-text>
            <tm-input round="88" class="mb-16" :maxlength="4" placeholder="请输入价格" left-icon="money-cny-circle-line">
                <template v-slot:leftIcon>
                    <tm-text class="pl-24" color="primary">验证码</tm-text>
                </template>
                <template v-slot:rightIcon>
                    <tm-button class="mr-6" height="76" width="100" round="88" color="primary" size="s">获取</tm-button>
                </template>
            </tm-input>
        </tm-sheet>

        <view style="height: 100rpx;"></view>
    </view>

</template>
<script setup lang="ts">
import { ref } from "vue";

const val = ref('');
</script>
<style lang="scss"></style>
