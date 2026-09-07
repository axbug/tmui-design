<template>
    <view>
        <tm-sheet>
            <tm-text font-size="36" class="text-weight-b mb-n8 d-block">全局配置测试 setConfig</tm-text>
            <tm-text color="#999999">通过 setConfig 动态修改全局主题、主题色、圆角，实时生效</tm-text>
        </tm-sheet>

        <tm-sheet class="mt-16">
            <tm-text font-size="32" class="text-weight-b mb-n8 d-block">主题模式 mode</tm-text>
            <view class="flex flex-wrap gap-16">
                <tm-button :color="config.mode === 'light' ? 'primary' : ''" size="s" @click="setMode('light')">
                    亮色模式
                </tm-button>
                <tm-button :color="config.mode === 'dark' ? 'primary' : ''" size="s" @click="setMode('dark')">
                    暗色模式
                </tm-button>
            </view>
            <tm-text class="mt-16">当前模式：{{ config.mode }}</tm-text>
        </tm-sheet>

        <tm-sheet class="mt-16">
            <tm-text font-size="32" class="text-weight-b mb-n8 d-block">主题色覆盖 theme</tm-text>
            <tm-text color="#999999">点击后覆盖全局 primary 主题色，下面按钮会跟随变色</tm-text>
            <view class="flex flex-wrap gap-16">
                <tm-button
                    v-for="c in themeColors"
                    :key="c.value"
                    size="s"
                    :color="c.value"
                    @click="setTheme(c.value)"
                >
                    {{ c.name }}
                </tm-button>
            </view>
        </tm-sheet>

        <tm-sheet class="mt-16">
            <tm-text font-size="32" class="text-weight-b mb-n8 d-block">圆角 radius</tm-text>
            <tm-text color="#999999">同步修改按钮/容器/列表/输入框圆角</tm-text>
            <view class="flex flex-wrap gap-16">
                <tm-button
                    v-for="r in radiusList"
                    :key="r.value"
                    size="s"
                    :color="config.buttonRadius === r.value ? 'primary' : ''"
                    @click="setRadius(r.value)"
                >
                    {{ r.label }}
                </tm-button>
            </view>
        </tm-sheet>

        <tm-sheet class="mt-16">
            <tm-text font-size="32" class="text-weight-b mb-n8 d-block">效果预览</tm-text>
            <view class="mb-16">
                <tm-button>默认按钮</tm-button>
            </view>
            <tm-button color="primary">primary 按钮（跟随主题色）</tm-button>
            <tm-cell class="mt-16" title="cell 圆角"></tm-cell>
        </tm-sheet>
    </view>
</template>

<script setup lang="ts">
// @ts-ignore
import { setConfig } from "@/uni_modules/tm-ui";
import { useTmConfig } from "@/uni_modules/tm-ui/libs/config";

const { config } = useTmConfig();

const setMode = (mode: "light" | "dark") => {
    setConfig({ mode });
};

const themeColors = [
    { name: "默认蓝", value: "#0579FF" },
    { name: "红", value: "#FF0000" },
    { name: "绿", value: "#07d73d" },
    { name: "橙", value: "#ff6411" },
];

const setTheme = (value: string) => {
    setConfig({ theme: new Map([["primary", value]]) });
};

const radiusList = [
    { label: "直角 0", value: 0 },
    { label: "小圆角 8", value: 8 },
    { label: "默认 24", value: 24 },
    { label: "大圆角 64", value: 64 },
];

const setRadius = (radius: number) => {
    setConfig({
        buttonRadius: radius,
        sheetRadius: radius,
        cellRadius: radius,
        inputRadius: radius,
    });
};
</script>

<style lang="scss" scoped></style>
