
import { Tmui4xI18n } from './i18n';

// 导入本地语言文件
import zhHans from "./localLanuage/zh-Hans.json";
import zhHant from "./localLanuage/zh-Hant.json";
import en from "./localLanuage/en.json";
import ja from "./localLanuage/ja.json";
import ko from "./localLanuage/ko.json";
import { I18nOptions } from "./interface";

export const i18n = (options?: I18nOptions) => {
    // 创建多语言实例
    let i18nInstance = new Tmui4xI18n(options);
    // 设置默认语言
    const defaultLanguage = options?.locale ?? 'zh-Hans';
    i18nInstance.setLocale(defaultLanguage);
    // 合并本地语言文件
    const localLanguages = {
        'zh-Hans': zhHans,
        'zh-Hant': zhHant,
        'en': en,
        'ja': ja,
        'ko': ko
    };

    // 循环合并所有本地语言
    Object.entries(localLanguages).forEach(([locale, messages]) => {
        try {
            i18nInstance.mergeLocaleMessage(locale, messages);
            // console.log(`[tm-ui] 语言包 ${locale} 加载成功`);
        } catch (error) {
            console.warn(`[tm-ui] 语言包 ${locale} 加载失败:`, error);
        }
    });
    // 合并options中的语言消息（如果存在）
    if (options?.messages) {
        Object.entries(options.messages).forEach(([locale, messages]) => {
            try {
                i18nInstance.mergeLocaleMessage(locale, messages);
                // console.log(`[tm-ui] 自定义语言包 ${locale} 加载成功`);
            } catch (error) {
                console.warn(`[tm-ui] 自定义语言包 ${locale} 加载失败:`, error);
            }
        });
    }
	
	
    return i18nInstance;
}

