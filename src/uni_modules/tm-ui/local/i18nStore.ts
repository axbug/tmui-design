
// @ts-ignore
import en from "./localLanuage/en.json"
// @ts-ignore
import zhHans from "./localLanuage/zh-Hans.json"
// @ts-ignore
import zhHant from "./localLanuage/zh-Hant.json"
// @ts-ignore
import ko from "./localLanuage/ko.json"
// @ts-ignore
import ja from "./localLanuage/ja.json"
// @ts-ignore
import fr from "./localLanuage/fr.json"
// @ts-ignore
import de from "./localLanuage/de.json"
// @ts-ignore
import es from "./localLanuage/es.json"
// @ts-ignore
import pt from "./localLanuage/pt.json"
// @ts-ignore
import ru from "./localLanuage/ru.json"
// @ts-ignore
import ar from "./localLanuage/ar.json"
// @ts-ignore
import { createI18n } from "./vue-i18n";


const BUILTIN_I18N_MESSAGES = {
	en: en,
	"zh-Hans": zhHans,
	"zh-Hant": zhHant,
	ko: ko,
	ja: ja,
	fr: fr,
	de: de,
	es: es,
	pt: pt,
	ru: ru,
	ar: ar
}

function isI18nMessageNode(value : any | null) : boolean {
	if (value == null) return false
	return typeof value === "object" && !Array.isArray(value)
}

/** 深度合并单个语言包：base 为内置文案，override 仅覆盖同名 key */
function mergeI18nLocale(base : {[key:string]:any}, override : {[key:string]:any} | null) : Object {
	if (override == null) return base

	const result:{[key:string]:any} = {}
	for (const key in base) {
		result[key] = base[key]
	}
	for (const key in override) {
		const nextVal = override[key]
		const prevVal = result[key]
		if (isI18nMessageNode(prevVal) && isI18nMessageNode(nextVal)) {
			result[key] = mergeI18nLocale(prevVal, nextVal)
		} else {
			result[key] = nextVal
		}
	}
	return result
}

/**
 * 合并 messages：
 * 1. 内置 en/zh-Hans/... 作为基础
 * 2. 用户 messages 只做增量/覆盖，不会整包替换内置语言
 * 3. 用户新增的语言包会保留
 */
function mergeI18nMessages(
	defaults : {[key:string]:any},
	userMessages : {[key:string]:any} | null,
) : {[key:string]:any} {
	const result:{[key:string]:any} = {}

	for (const locale in defaults) {
		const userLocale = userMessages != null ? (userMessages[locale]) : null
		result[locale] = mergeI18nLocale(defaults[locale], userLocale)
	}

	if (userMessages != null) {
		for (const locale in userMessages) {
			if (result[locale] == null) {
				result[locale] = userMessages[locale]
			}
		}
	}

	return result
}

function createTmuiI18n(options : {[key:string]:any}) : any {
	const merged = {
		legacy: false,
		globalInjection: true,
		...options,
	};
	return createI18n(merged);
}

export const createI18nFun = (i18nOptions?: TM.I18nOptions) => {
	
    if (i18nOptions != null && i18nOptions != undefined) {
        const mergedOptions = {
            locale: "zh-Hans",
            fallbackLocale: "en",
            ...i18nOptions,
            messages: mergeI18nMessages(
                BUILTIN_I18N_MESSAGES,
                i18nOptions.messages||null,
            ),
        }
		
        const i18n = createTmuiI18n(mergedOptions);
        return i18n
    } else {
        const i18n = createTmuiI18n({
            locale: "zh-Hans",
            fallbackLocale: "en",
            messages: BUILTIN_I18N_MESSAGES,
        });
		        console.log(i18nOptions)
        return i18n
    }
}

