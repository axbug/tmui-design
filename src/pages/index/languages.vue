<template>
    <tm-sheet>
        <tm-text font-size="36" class="text-weight-b mb-n8 d-block">语言切换测试</tm-text>
        <view class="mb-n8">
            <tm-text>当前语言：{{ locale }}</tm-text>
            <tm-text>测试文案：{{ t("MyLanguages.test") }}</tm-text>
        </view>
        <view class="flex flex-wrap gap-16">
            <tm-button v-for="item in langList" :key="item.code" size="s" @click="switchLang(item.code)">
                {{ item.name }}
            </tm-button>
        </view>
    </tm-sheet>

    <tm-sheet class="mt-16">
        <tm-text font-size="36" class="text-weight-b mb-n8 d-block">动态添加字段测试</tm-text>
        <view class="mb-n8">
            <tm-text>当前语言：{{ locale }}</tm-text>
            <tm-text>动态文案：{{ added ? t("MyLanguages.dynamic") : "（点击下方按钮添加）" }}</tm-text>
        </view>
        <view class="flex flex-wrap gap-16">
            <tm-button size="s" color="primary" @click="addDynamicField">动态添加字段</tm-button>
        </view>
    </tm-sheet>
</template>
<script setup lang="ts">
// @ts-ignore
import { ref } from "vue";
// @ts-ignore
import { $i18n } from "@/uni_modules/tm-ui";

const { locale, t } = $i18n;

const langList = [
    { code: "zh-Hans", name: "简体中文" },
    { code: "zh-Hant", name: "繁體中文" },
    { code: "en", name: "English" },
    { code: "ja", name: "日本語" },
    { code: "ko", name: "한국어" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "es", name: "Español" },
    { code: "pt", name: "Português" },
    { code: "ru", name: "Русский" },
    { code: "ar", name: "العربية" },
];

const switchLang = (code: string) => {
    locale.value = code;
    uni.showToast({ title: `已切换到：${code}`, icon: "none" });
};

// 动态添加字段测试：运行时向各语言包注入 MyLanguages.dynamic
const added = ref(false);

const dynamicTexts: Record<string, string> = {
    "zh-Hans": "动态添加的中文测试文案",
    "zh-Hant": "動態添加的繁體中文測試文案",
    en: "Dynamically added English test text",
    ja: "動的に追加された日本語のテスト文",
    ko: "동적으로 추가된 한국어 테스트 문장",
    fr: "Texte de test français ajouté dynamiquement",
    de: "Dynamisch hinzugefügter deutscher Testtext",
    es: "Texto de prueba en español añadido dinámicamente",
    pt: "Texto de teste em português adicionado dinamicamente",
    ru: "Динамически добавленный русский тестовый текст",
    ar: "نص اختبار عربي مضاف ديناميكياً",
};

const addDynamicField = () => {
    langList.forEach((item) => {
        // @ts-ignore
        $i18n.mergeLocaleMessage(item.code, {
            MyLanguages: {
                dynamic: dynamicTexts[item.code],
            },
        });
    });
    added.value = true;
    uni.showToast({ title: "已动态添加字段", icon: "none" });
};
</script>
<style lang="scss"></style>
