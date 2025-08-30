import { BasePluralRule, Tmui4xI18nTml, DateTimeFormatReal, I18nOptions, I18nOptionsReally, NumberFormat, NumberFormatOpts, StringOrNull, NumberOrNull, StringOrNumber, StringOrNumberOrNull, DateOrNumberOrString, UTSJSONObjectOrNull, UTSJSONObjectOrArray, AnyOrNull, GetAnyType, I18nOptionsOrNull, NumberFormatOrNull, DateTimeFormatOrNull, GetAnyTypeOrNull } from "./interface";

/**
 * uniapp-x多语言插件
 * @author tmui4x
 * @copyright https://tmui.design
 * @date 2025/7/8
 * @description 可以有效解决app无法使用插值的尴尬。
 */

// 日期时间名称格式类型
type DateTimeNames = {
	long : string[],
	short : string[],
	narrow : string[]
}
type BestTimeTYpe = { unit : string, value : number }
type timeUnitsTYpe = { unit : string, ms : number, threshold : number }
export function mergeI18nOpts(args ?: I18nOptions) : I18nOptionsReally {
	let localLang = uni.getStorageSync("language")
	// 提供默认配置
	const currentLan = localLang != null && localLang != '' && typeof localLang == 'string' ? (localLang! as string) : "zh-Hans"
	const defaultOptions : I18nOptionsReally = {
		locale: currentLan,
		fallbackLocale: "en",
		messages: {},
		datetimeFormats: new Map(),
		numberFormats: new Map(),
		modifiers: new Map(),
		pluralRules: new Map(),
		missing: null,
		missingWarn: true,
		fallbackWarn: true,
		fallbackRoot: true,
		fallbackFormat: false,
		unresolving: true,
		postTranslation: null,
		warnHtmlMessage: true,
		escapeParameter: true,
		inheritLocale: true,
		warnHandler: (v, e) => {
			console.warn(`[tmui4x]:${v}`, e || '');
		},
		pluralRule: (choice : number, choicesLength : number, orgRule ?: BasePluralRule | null) : number => {
			// 默认英语复数规则实现
			// 参考 Vue I18n 标准实现：https://vue-i18n.intlify.dev/guide/essentials/pluralization
			// 如果提供了原始规则函数，优先使用
			if (orgRule) {
				return orgRule(choice, choicesLength);
			}

			// 确保索引在有效范围内
			if (choicesLength <= 1) {
				return 0;
			}
			return choice;
			// 标准英语复数规则
			// 当只有2个选项时: 0=复数形式, 1=单数形式
			// 当有3个或更多选项时: 0=零, 1=单数, 2=复数
			// if (choicesLength == 2) {
			// 	// 二元模式: [复数, 单数]
			// 	return choice == 1 ? 1 : 0;
			// } else {
			// 	// 多元模式: [零, 单数, 复数, ...]
			// 	if (choice == 0) {
			// 		return 0; // 零
			// 	} else if (choice == 1) {
			// 		return 1; // 单数
			// 	} else {
			// 		return Math.min(2, choicesLength - 1); // 复数或最后一个选项
			// 	}
			// }
		},
		globalInjection: true,
		allowComposition: true,
		legacy: true
	};

	// 如果没有传入参数，返回默认配置
	if (!args) {
		return defaultOptions;
	}

	// 合并用户配置和默认配置
	return {
		locale: args.locale ?? defaultOptions.locale,
		fallbackLocale: args.fallbackLocale ?? defaultOptions.fallbackLocale,
		messages: args.messages ?? defaultOptions.messages,
		datetimeFormats: args.datetimeFormats ?? defaultOptions.datetimeFormats,
		numberFormats: args.numberFormats ?? defaultOptions.numberFormats,
		modifiers: args.modifiers ?? defaultOptions.modifiers,
		pluralRules: args.pluralRules ?? defaultOptions.pluralRules,
		missing: args.missing ?? defaultOptions.missing,
		missingWarn: args.missingWarn ?? defaultOptions.missingWarn,
		fallbackWarn: args.fallbackWarn ?? defaultOptions.fallbackWarn,
		fallbackRoot: args.fallbackRoot ?? defaultOptions.fallbackRoot,
		fallbackFormat: args.fallbackFormat ?? defaultOptions.fallbackFormat,
		unresolving: args.unresolving ?? defaultOptions.unresolving,
		postTranslation: args.postTranslation ?? defaultOptions.postTranslation,
		warnHtmlMessage: args.warnHtmlMessage ?? defaultOptions.warnHtmlMessage,
		escapeParameter: args.escapeParameter ?? defaultOptions.escapeParameter,
		inheritLocale: args.inheritLocale ?? defaultOptions.inheritLocale,
		warnHandler: args.warnHandler ?? defaultOptions.warnHandler,
		pluralRule: args.pluralRule ?? defaultOptions.pluralRule,
		globalInjection: args.globalInjection ?? defaultOptions.globalInjection,
		allowComposition: args.allowComposition ?? defaultOptions.allowComposition,
		legacy: args.legacy ?? defaultOptions.legacy
	} as I18nOptionsReally;


}
export class Tmui4xI18n implements Tmui4xI18nTml {
	ops : I18nOptionsReally;
	private static instance : Tmui4xI18n;
	constructor(args ?: I18nOptions) {
		this.ops = mergeI18nOpts(args)
	}
	/**
	 * 单例模式
	 */
	public static getInstance(args ?: I18nOptions) : Tmui4xI18n {
		if (Tmui4xI18n.instance) {
			return Tmui4xI18n.instance
		}
		return new Tmui4xI18n(args);
	}
	// 语言
	setLocale(local : string) {
		uni.setStorageSync('language', local)
		this.ops.locale = local
	}
	//设置语言
	getLocale() : string {
		return this.ops.locale
	}
	getFallbackLocale() : string {
		return this.ops.fallbackLocale
	}

	setFallbackLocale(local : string) {
		this.ops.fallbackLocale = local
	}
	setOptions(args : I18nOptions) {
		this.ops = mergeI18nOpts(args)
	}
	/**
	 * 翻译方法 - 参考 Vue I18n 实现（UTS类型安全优化版本）
	 * @param key 翻译键
	 * @param args 可选参数：数字(用于复数)、对象(用于插值)、字符串(locale)等同原vueI18n使用方式
	 * @param opts 可选的第二个参数当args为复数数字，key中函数 | 时，此opts起效且必须为utsjsonobject格式等同原vueI18n使用方式
	 * @returns 翻译后的字符串
	 */
	t(key : string, ...argsopts : Array<any>) : string {
		let repeatCount : NumberOrNull = null;
		let values : UTSJSONObjectOrArray = {};
		let locale : string = this.ops?.locale??'zh-Hans';
		if (argsopts.length > 0) {
			// 严格的类型检查和参数解析
			let args : AnyOrNull = argsopts[0]
			let opts : AnyOrNull = null;
			if (argsopts.length > 1) {
				opts = argsopts[1]
			}

			if (args != null && opts == null) {
				if (typeof args == 'number') {
					// args 是数字类型
					const numArgs : number = args;
					values = { count: numArgs, n: numArgs };
					repeatCount = numArgs
				} else if (typeof args == 'string') {
					// args 是字符串类型（locale）
					const strArgs : string = args;
					locale = strArgs;

				} else if (args instanceof Object && args != null) {
					const objArgs : Record<string, any> = args;
					values = objArgs;

				} else if (Array.isArray(args)) {
					const arrArgs : Array<any> = args;
					values = arrArgs;
				}
			} else if (typeof args == 'number' && opts instanceof Object && opts != null) {
				const objOpts : Record<string, any> = opts;
				values = objOpts;
				const numArgs : number = args;
				repeatCount = numArgs
			}
		}


		// 类型安全的消息获取
		let message : StringOrNull = this.getMessage(key, locale);

		// 如果没有找到消息，尝试回退语言
		if (message == null && locale != this.ops.fallbackLocale) {
			message = this.getMessage(key, this.ops.fallbackLocale);
			if (this.ops.fallbackWarn && message != null) {
				this.ops.warnHandler(`Fall back to translate the key '${key}' with '${this.ops.fallbackLocale}' locale.`, null);
			}
		}

		// 如果仍然没有找到消息
		if (message == null) {
			this.ops.warnHandler(`Not found '${key}' key in '${locale}' locale messages.`, null);
			return key; // 返回键名作为默认值
		}

		// 类型安全的复数处理
		if (repeatCount != null && typeof message == 'string' && message.includes('|')) {
			const safeCount : number = repeatCount;
			message = this.handlePlural(message, safeCount, locale);
		}

		// 类型安全的插值处理
		if (typeof message == 'string') {
			message = this.interpolate(message, values);
		}

		// 类型安全的后处理
		if (this.ops.postTranslation != null && typeof message == 'string') {
			const processedMessage : string = this.ops.postTranslation(message, key);
			message = processedMessage;
		}

		// 确保返回字符串类型
		return typeof message == 'string' ? message : key;
	}

	/**
	 * 数字格式化方法 - 参考 Vue I18n 实现
	 * @param val 要格式化的数字
	 * @param name 格式化名称模板，如果不存在以opts为准，如果opts也没有则取默认值。
	 * @param opts 格式化选项
	 * @returns 格式化后的字符串
	 */
	n(val : number, formatName ?: StringOrNull, opts ?: NumberFormatOrNull) : string {
		let currentLocale = (opts?.local ?? this.ops.locale)!;
		let formatOptions : NumberFormatOpts = {
			style: 'decimal',
			currency: 'CNY',
			local: currentLocale,
			currencyDisplay: 'symbol',
			useGrouping: false,
			minimumIntegerDigits: 1,
			minimumFractionDigits: 0,
			maximumFractionDigits: 3,
			minimumSignificantDigits: null,
			maximumSignificantDigits: null,
		};
		if (opts != null) {
			formatOptions = {
				style: opts?.style ?? formatOptions.style,
				currency: opts?.currency ?? formatOptions.currency,
				local: opts?.local ?? formatOptions.local,
				currencyDisplay: opts?.currencyDisplay ?? formatOptions.currencyDisplay,
				useGrouping: opts?.useGrouping ?? formatOptions.useGrouping,
				minimumIntegerDigits: opts?.minimumIntegerDigits ?? formatOptions.minimumIntegerDigits,
				minimumFractionDigits: opts?.minimumFractionDigits ?? formatOptions.minimumFractionDigits,
				maximumFractionDigits: opts?.maximumFractionDigits ?? formatOptions.maximumFractionDigits,
				minimumSignificantDigits: opts?.minimumSignificantDigits ?? formatOptions.minimumSignificantDigits,
				maximumSignificantDigits: opts?.maximumSignificantDigits ?? formatOptions.maximumSignificantDigits
			};
		}

		// 处理参数
		if (typeof formatName == 'string') {
			// 如果是字符串，从预定义格式中获取
			const formatNameReal = formatName!;
			if (this.ops.numberFormats.has(currentLocale)) {
				const localeFormats = this.ops.numberFormats.get(currentLocale)!;
				if (localeFormats.has(formatNameReal)) {
					const formatOptions_templ = localeFormats.get(formatNameReal)!;
					formatOptions = {
						style: formatOptions_templ?.style ?? formatOptions.style,
						currency: formatOptions_templ?.currency ?? formatOptions.currency,
						local: formatOptions_templ?.local ?? formatOptions.local,
						currencyDisplay: formatOptions_templ?.currencyDisplay ?? formatOptions.currencyDisplay,
						useGrouping: formatOptions_templ?.useGrouping ?? formatOptions.useGrouping,
						minimumIntegerDigits: formatOptions_templ?.minimumIntegerDigits ?? formatOptions.minimumIntegerDigits,
						minimumFractionDigits: formatOptions_templ?.minimumFractionDigits ?? formatOptions.minimumFractionDigits,
						maximumFractionDigits: formatOptions_templ?.maximumFractionDigits ?? formatOptions.maximumFractionDigits,
						minimumSignificantDigits: formatOptions_templ?.minimumSignificantDigits ?? formatOptions.minimumSignificantDigits,
						maximumSignificantDigits: formatOptions_templ?.maximumSignificantDigits ?? formatOptions.maximumSignificantDigits
					};
				} else {
					this.ops.warnHandler(`Number format '${formatNameReal}' not found for locale '${currentLocale}'`, null);
				}
			} else {
				this.ops.warnHandler(`Number formats not found for locale '${currentLocale}'`, null);
			}
		}

		currentLocale = formatOptions.local
		// 执行数字格式化
		return this.formatNumber(val, formatOptions, currentLocale);
	}

	/**
	 * 日期时间格式化方法 - 参考 Vue I18n 实现
	 * @param val 要格式化的日期时间值（Date对象、时间戳数字或日期字符串）
	 * @param formatName 格式化名称模板，如果不存在以opts为准，如果opts也没有则取默认值
	 * @param opts 格式化选项
	 * @returns 格式化后的字符串
	 */
	d(val : DateOrNumberOrString, formatName ?: StringOrNull, opts ?: DateTimeFormatOrNull) : string {
		let currentLocale = (opts?.local ?? this.ops.locale)!;
		let formatOptions : DateTimeFormatReal = {
			localeMatcher: 'best fit',
			local: currentLocale,
			calendar: 'gregory',
			numberingSystem: 'latn',
			dateSeparator: "",
			timeZone: 'UTC',
			hour12: false,
			hourCycle: 'h23',
			formatMatcher: 'best fit',
			weekday: '',
			era: '',
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			dayPeriod: '',
			hour: '',
			minute: '',
			second: '',
			fractionalSecondDigits: 0,
			timeZoneName: '',
			dateStyle: '',
			timeStyle: ''
		};

		if (opts != null) {
			formatOptions = {
				localeMatcher: opts?.localeMatcher ?? formatOptions.localeMatcher,
				local: opts?.local ?? formatOptions.local,
				dateSeparator: opts?.dateSeparator ?? formatOptions.dateSeparator,
				calendar: opts?.calendar ?? formatOptions.calendar,
				numberingSystem: opts?.numberingSystem ?? formatOptions.numberingSystem,
				timeZone: opts?.timeZone ?? formatOptions.timeZone,
				hour12: opts?.hour12 ?? formatOptions.hour12,
				hourCycle: opts?.hourCycle ?? formatOptions.hourCycle,
				formatMatcher: opts?.formatMatcher ?? formatOptions.formatMatcher,
				weekday: opts?.weekday ?? formatOptions.weekday,
				era: opts?.era ?? formatOptions.era,
				year: opts?.year ?? formatOptions.year,
				month: opts?.month ?? formatOptions.month,
				day: opts?.day ?? formatOptions.day,
				dayPeriod: opts?.dayPeriod ?? formatOptions.dayPeriod,
				hour: opts?.hour ?? formatOptions.hour,
				minute: opts?.minute ?? formatOptions.minute,
				second: opts?.second ?? formatOptions.second,
				fractionalSecondDigits: opts?.fractionalSecondDigits ?? formatOptions.fractionalSecondDigits,
				timeZoneName: opts?.timeZoneName ?? formatOptions.timeZoneName,
				dateStyle: opts?.dateStyle ?? formatOptions.dateStyle,
				timeStyle: opts?.timeStyle ?? formatOptions.timeStyle
			};
		}

		// 处理参数
		if (typeof formatName == 'string') {
			// 如果是字符串，从预定义格式中获取
			const formatNameReal = formatName!;
			if (this.ops.datetimeFormats.has(currentLocale)) {
				const localeFormats = this.ops.datetimeFormats.get(currentLocale)!;
				if (localeFormats.has(formatNameReal)) {
					const formatOptions_templ = localeFormats.get(formatNameReal)!;
					formatOptions = {
						localeMatcher: formatOptions_templ?.localeMatcher ?? formatOptions.localeMatcher,
						local: formatOptions_templ?.local ?? formatOptions.local,
						calendar: formatOptions_templ?.calendar ?? formatOptions.calendar,
						numberingSystem: formatOptions_templ?.numberingSystem ?? formatOptions.numberingSystem,
						timeZone: formatOptions_templ?.timeZone ?? formatOptions.timeZone,
						hour12: formatOptions_templ?.hour12 ?? formatOptions.hour12,
						hourCycle: formatOptions_templ?.hourCycle ?? formatOptions.hourCycle,
						formatMatcher: formatOptions_templ?.formatMatcher ?? formatOptions.formatMatcher,
						dateSeparator: formatOptions_templ?.dateSeparator ?? formatOptions.dateSeparator,
						weekday: formatOptions_templ?.weekday ?? formatOptions.weekday,
						era: formatOptions_templ?.era ?? formatOptions.era,
						year: formatOptions_templ?.year ?? formatOptions.year,
						month: formatOptions_templ?.month ?? formatOptions.month,
						day: formatOptions_templ?.day ?? formatOptions.day,
						dayPeriod: formatOptions_templ?.dayPeriod ?? formatOptions.dayPeriod,
						hour: formatOptions_templ?.hour ?? formatOptions.hour,
						minute: formatOptions_templ?.minute ?? formatOptions.minute,
						second: formatOptions_templ?.second ?? formatOptions.second,
						fractionalSecondDigits: formatOptions_templ?.fractionalSecondDigits ?? formatOptions.fractionalSecondDigits,
						timeZoneName: formatOptions_templ?.timeZoneName ?? formatOptions.timeZoneName,
						dateStyle: formatOptions_templ?.dateStyle ?? formatOptions.dateStyle,
						timeStyle: formatOptions_templ?.timeStyle ?? formatOptions.timeStyle
					};
				} else {
					this.ops.warnHandler(`DateTime format '${formatNameReal}' not found for locale '${currentLocale}'`, null);
				}
			} else {
				this.ops.warnHandler(`DateTime formats not found for locale '${currentLocale}'`, null);
			}
		}
		currentLocale = formatOptions.local

		// 执行日期时间格式化
		return this.formatDateTime(val, formatOptions, currentLocale);
	}
	/**
	 * 动态添加语言的新字段
	 * @param {string} local 语言
	 * @param {Record<string,any>} newMessage 键值及字段。
	 */
	mergeLocaleMessage(local : string, newMessage : Record<string, any>) {
		let nowmessage = this.ops.messages?.[local]??null;
		if (nowmessage != null) {
			nowmessage = { ...nowmessage, ...newMessage }
			this.ops.messages[local] = {...this.ops.messages.local,...newMessage}
		} else {
			this.ops.messages[local]  = newMessage
		}
	}
	/**
	 * 检测翻译键是否存在 - 参考 Vue I18n 的 te 方法实现
	 * @param {string} key 翻译键，支持嵌套路径如 'user.name'
	 * @param {string} locale 可选的语言代码，不提供则使用当前语言
	 * @returns {boolean} 存在返回true，不存在返回false
	 */
	te(key : string, locale ?: string | null) : boolean {
		// 确定要检查的语言
		const targetLocale = (locale != null ? locale : this.ops.locale);

		// 检查语言包是否存在
		const messages = this.ops.messages;
		if (messages[targetLocale] == null) {
			return false;
		}

		// 获取指定语言的消息
		const localeMessages = messages[targetLocale] as UTSJSONObjectOrNull;
		if (localeMessages == null) {
			return false;
		}

		// 检查翻译键是否存在
		const message = this.getNestedValue(localeMessages, key);
		return message != null;
	}
	/**
	 * 相对时间
	 * @param {string，number，Date} timeValue 时间差（毫秒）
	 * @param {string} unit 首选单位,它会自动进阶更高的维度，比如提供秒，超过60秒以分为单位进阶。
	 * @param {string} locale 可选语言，不提供以默认创建的设置为准。
	 * @returns {string} 格式化后的时间字符串
	 */
	rt(timeValues ?: number | Date | string | null, units ?: string | null, locale ?: string | null) : string {
		const targetLocale = (locale != null ? locale : this.ops.locale)
		const timeValue = (timeValues != null ? new Date() : timeValues!)
		const unit = (units != null ? 'minute' : units!)


		try {
			// 获取目标时间的时间戳
			let targetTimestamp = 0;
			if (typeof timeValue == 'number') {
				targetTimestamp = timeValue;
			} else if (timeValue instanceof Date) {
				targetTimestamp = timeValue.getTime();
			} else if (typeof timeValue == 'string') {
				targetTimestamp = new Date(timeValue.replace(/-/g, '/')).getTime();
			}

			// 获取当前时间戳
			const currentTimestamp = new Date().getTime();

			// 计算时间差（毫秒）
			const timeDiff = targetTimestamp - currentTimestamp;

			// 验证单位参数
			const validUnits = ['year', 'years', 'quarter', 'quarters', 'month', 'months', 'week', 'weeks', 'day', 'days', 'hour', 'hours', 'minute', 'minutes', 'second', 'seconds'];
			let normalizedUnit = unit.toLowerCase();

			// 标准化单位名称（移除复数形式）
			if (normalizedUnit.endsWith('s') && normalizedUnit != 'seconds') {
				normalizedUnit = normalizedUnit.slice(0, -1);
			}

			// 处理特殊单位名称
			switch (normalizedUnit) {
				case 'yr':
				case 'y':
					normalizedUnit = 'year';
					break;
				case 'mo':
				case 'm':
					normalizedUnit = 'month';
					break;
				case 'w':
					normalizedUnit = 'week';
					break;
				case 'd':
					normalizedUnit = 'day';
					break;
				case 'h':
					normalizedUnit = 'hour';
					break;
				case 'min':
					normalizedUnit = 'minute';
					break;
				case 's':
				case 'sec':
					normalizedUnit = 'second';
					break;
				case 'q':
					normalizedUnit = 'quarter';
					break;
			}

			// 验证单位是否有效
			if (!validUnits.includes(normalizedUnit) && !validUnits.includes(normalizedUnit + 's')) {
				this.ops.warnHandler(`Invalid unit '${unit}' for relative time formatting. Valid units are: ${validUnits.join(', ')}`, null);
				return `${timeValue} ${unit}`; // 返回原始格式作为回退
			}

			// 智能选择最合适的时间单位和数值
			const bestTime = this.getBestTimeUnit(timeDiff, normalizedUnit);

			// 使用自定义实现，确保跨平台兼容性
			return this.formatRelativeTimeFallback(bestTime.value, bestTime.unit, targetLocale);

		} catch (e) {
			this.ops.warnHandler(`Relative time formatting failed for value ${timeValue} ${unit}`, e as Error);
			return `${timeValue} ${unit}`; // 返回原始格式作为回退
		}
	}

	/**
	 * 获取可用语言列表
	 * @returns {string[]}
	 */
	availableLocales() : string[] {
		return Object.keys(this.ops.messages)
	}
	/**
	 * 智能选择最合适的时间单位和数值
	 * @param timeDiff 时间差（毫秒）
	 * @param preferredUnit 首选单位
	 * @returns 包含最佳单位和数值的对象
	 */
	private getBestTimeUnit(timeDiff : number, preferredUnit : string) : BestTimeTYpe {
		const absTimeDiff = Math.abs(timeDiff);

		// 定义时间单位的毫秒值和优先级
		const timeUnits : timeUnitsTYpe[] = [
			{ unit: 'second', ms: 1000, threshold: 60 },
			{ unit: 'minute', ms: 1000 * 60, threshold: 60 },
			{ unit: 'hour', ms: 1000 * 60 * 60, threshold: 24 },
			{ unit: 'day', ms: 1000 * 60 * 60 * 24, threshold: 7 },
			{ unit: 'week', ms: 1000 * 60 * 60 * 24 * 7, threshold: 4.33 },
			{ unit: 'month', ms: 1000 * 60 * 60 * 24 * 30.44, threshold: 3 },
			{ unit: 'quarter', ms: 1000 * 60 * 60 * 24 * 30.44 * 3, threshold: 4 },
			{ unit: 'year', ms: 1000 * 60 * 60 * 24 * 365.25, threshold: Infinity }
		];

		// 找到首选单位的索引
		let startIndex = timeUnits.findIndex(tu => tu.unit === preferredUnit);
		if (startIndex === -1) startIndex = 0; // 如果找不到，从秒开始

		// 从首选单位开始，向上查找最合适的单位
		for (let i = startIndex; i < timeUnits.length; i++) {
			const currentUnit = timeUnits[i];
			const value = Math.round(timeDiff / currentUnit.ms);
			const absValue = Math.abs(value);

			// 如果当前单位的值在合理范围内，或者已经是最大单位
			if (absValue < currentUnit.threshold || i === timeUnits.length - 1) {
				return { unit: currentUnit.unit, value: value } as BestTimeTYpe;
			}
		}

		// 回退到首选单位
		const fallbackUnit = timeUnits[startIndex];
		return {
			unit: fallbackUnit.unit,
			value: Math.round(timeDiff / fallbackUnit.ms)
		} as BestTimeTYpe;
	}

	/**
	 * 相对时间格式化的回退实现
	 * @param value 数值
	 * @param unit 单位
	 * @param locale 语言代码
	 * @returns 格式化后的相对时间字符串
	 */
	private formatRelativeTimeFallback(value : number, unit : string, locale : string) : string {
		const absValue = Math.abs(value);
		const isPast = value < 0;
		const isFuture = value > 0;
		const isNow = value == 0;

		// 获取语言代码
		const langCode = locale.split('-')[0].toLowerCase();

		// 处理特殊情况（今天、昨天、明天等）
		if (unit == 'day') {
			if (isNow) {
				return langCode == 'zh' ? '今天' : langCode == 'ja' ? '今日' : langCode == 'ko' ? '오늘' : 'today';
			} else if (value == -1) {
				return langCode == 'zh' ? '昨天' : langCode == 'ja' ? '昨日' : langCode == 'ko' ? '어제' : 'yesterday';
			} else if (value == 1) {
				return langCode == 'zh' ? '明天' : langCode == 'ja' ? '明日' : langCode == 'ko' ? '내일' : 'tomorrow';
			}
		}

		// 获取单位的本地化名称
		const unitName = this.getLocalizedUnitName(unit, absValue, langCode);

		// 构建相对时间字符串
		if (langCode == 'zh') {
			if (isPast) {
				return `${absValue}${unitName}前`;
			} else if (isFuture) {
				return `${absValue}${unitName}后`;
			} else {
				return `现在`;
			}
		} else if (langCode == 'ja') {
			if (isPast) {
				return `${absValue}${unitName}前`;
			} else if (isFuture) {
				return `${absValue}${unitName}後`;
			} else {
				return `今`;
			}
		} else if (langCode == 'ko') {
			if (isPast) {
				return `${absValue}${unitName} 전`;
			} else if (isFuture) {
				return `${absValue}${unitName} 후`;
			} else {
				return `지금`;
			}
		} else {
			// 英语和其他语言
			if (isPast) {
				return `${absValue} ${unitName} ago`;
			} else if (isFuture) {
				return `in ${absValue} ${unitName}`;
			} else {
				return `now`;
			}
		}
	}

	/**
	 * 获取本地化的单位名称
	 * @param unit 单位
	 * @param value 数值（用于确定单复数）
	 * @param langCode 语言代码
	 * @returns 本地化的单位名称
	 */
	private getLocalizedUnitName(unit : string, value : number, langCode : string) : string {
		const isPlural = value != 1;

		switch (langCode) {
			case 'zh':
				switch (unit) {
					case 'year': return '年';
					case 'quarter': return '季度';
					case 'month': return '个月';
					case 'week': return '周';
					case 'day': return '天';
					case 'hour': return '小时';
					case 'minute': return '分钟';
					case 'second': return '秒';
					default: return unit;
				}
			case 'ja':
				switch (unit) {
					case 'year': return '年';
					case 'quarter': return '四半期';
					case 'month': return 'ヶ月';
					case 'week': return '週間';
					case 'day': return '日';
					case 'hour': return '時間';
					case 'minute': return '分';
					case 'second': return '秒';
					default: return unit;
				}
			case 'ko':
				switch (unit) {
					case 'year': return '년';
					case 'quarter': return '분기';
					case 'month': return '개월';
					case 'week': return '주';
					case 'day': return '일';
					case 'hour': return '시간';
					case 'minute': return '분';
					case 'second': return '초';
					default: return unit;
				}
			default:
				// 英语和其他语言
				switch (unit) {
					case 'year': return isPlural ? 'years' : 'year';
					case 'quarter': return isPlural ? 'quarters' : 'quarter';
					case 'month': return isPlural ? 'months' : 'month';
					case 'week': return isPlural ? 'weeks' : 'week';
					case 'day': return isPlural ? 'days' : 'day';
					case 'hour': return isPlural ? 'hours' : 'hour';
					case 'minute': return isPlural ? 'minutes' : 'minute';
					case 'second': return isPlural ? 'seconds' : 'second';
					default: return unit;
				}
		}
	}

	/**
	 * 内部日期时间格式化实现
	 * @param value 日期时间值
	 * @param options 格式化选项
	 * @param locale 语言代码
	 * @returns 格式化后的字符串
	 */
	private formatDateTime(value : DateOrNumberOrString, options : DateTimeFormatReal, locale : string) : string {
		try {
			// 转换输入值为Date对象
			let dateObj : Date = new Date();
			if (value instanceof Date) {
				dateObj = value;
			} else if (typeof value == 'number') {
				dateObj = new Date(value);
			} else if (typeof value == 'string') {
				dateObj = new Date(value.replace(/-/g, '/'));
			}

			// 检查日期是否有效
			if (isNaN(dateObj.getTime())) {
				this.ops.warnHandler(`Invalid date: ${value}`, null);
				return value.toString();
			}

			// 处理预定义样式
			if (options.dateStyle != '' || options.timeStyle != '') {
				return this.formatWithPredefinedStyle(dateObj, options, locale);
			}

			// 自定义格式化
			return this.formatWithCustomOptions(dateObj, options, locale);

		} catch (e) {
			this.ops.warnHandler(`DateTime formatting failed for value ${value}`, e as Error);
			return value.toString();
		}
	}

	/**
	 * 使用预定义样式格式化日期时间
	 * @param date Date对象
	 * @param options 格式化选项
	 * @param locale 语言代码
	 * @returns 格式化后的字符串
	 */
	private formatWithPredefinedStyle(date : Date, options : DateTimeFormatReal, locale : string) : string {
		let result = '';

		// 处理日期样式
		if (options.dateStyle != '') {
			switch (options.dateStyle) {
				case 'full':
					result += this.getFullDateFormat(date, locale);
					break;
				case 'long':
					result += this.getLongDateFormat(date, locale);
					break;
				case 'medium':
					result += this.getMediumDateFormat(date, locale);
					break;
				case 'short':
					result += this.getShortDateFormat(date, locale);
					break;
				default:
					result += this.getMediumDateFormat(date, locale);
					break;
			}
		}

		// 处理时间样式
		if (options.timeStyle != '') {
			if (result != '') result += ' ';
			switch (options.timeStyle) {
				case 'full':
					result += this.getFullTimeFormat(date, options, locale);
					break;
				case 'long':
					result += this.getLongTimeFormat(date, options, locale);
					break;
				case 'medium':
					result += this.getMediumTimeFormat(date, options, locale);
					break;
				case 'short':
					result += this.getShortTimeFormat(date, options, locale);
					break;
				default:
					result += this.getMediumTimeFormat(date, options, locale);
					break;
			}
		}

		return result;
	}

	/**
	 * 使用自定义选项格式化日期时间
	 * @param date Date对象
	 * @param options 格式化选项
	 * @param locale 语言代码
	 * @returns 格式化后的字符串
	 */
	private formatWithCustomOptions(date : Date, options : DateTimeFormatReal, locale : string) : string {
		const dateParts : string[] = [];
		const timeParts : string[] = [];

		// 根据语言环境确定日期组件的排列顺序
		const langCode = locale.split('-')[0].toLowerCase();
		const isUSFormat = langCode == 'en' && (locale.toLowerCase().includes('us') || locale.toLowerCase() == 'en');

		// 处理非日期组件（星期和纪元）
		if (options.weekday != '') {
			dateParts.push(this.formatWeekday(date, options.weekday, locale));
		}

		if (options.era != '') {
			dateParts.push(this.formatEra(date, options.era, locale));
		}

		// 根据语言环境按正确顺序添加日期组件
		if (isUSFormat) {
			// 美式英语：月/日/年
			if (options.month != '') {
				dateParts.push(this.formatMonth(date, options.month, locale, options.numberingSystem, options.dateSeparator));
			}
			if (options.day != '') {
				dateParts.push(this.formatDay(date, options.day, locale, options.numberingSystem, options.dateSeparator));
			}
			if (options.year != '') {
				dateParts.push(this.formatYear(date, options.year, locale, options.numberingSystem, options.dateSeparator));
			}
		} else {
			// 其他语言（包括中文、英式英语等）：年/月/日 或 日/月/年
			if (langCode == 'zh' || langCode == 'ja' || langCode == 'ko') {
				// 东亚语言：年/月/日
				if (options.year != '') {
					dateParts.push(this.formatYear(date, options.year, locale, options.numberingSystem, options.dateSeparator));
				}
				if (options.month != '') {
					dateParts.push(this.formatMonth(date, options.month, locale, options.numberingSystem, options.dateSeparator));
				}
				if (options.day != '') {
					dateParts.push(this.formatDay(date, options.day, locale, options.numberingSystem, options.dateSeparator));
				}
			} else {
				// 欧洲语言（英式英语、德语、法语等）：日/月/年
				if (options.day != '') {
					dateParts.push(this.formatDay(date, options.day, locale, options.numberingSystem, options.dateSeparator));
				}
				if (options.month != '') {
					dateParts.push(this.formatMonth(date, options.month, locale, options.numberingSystem, options.dateSeparator));
				}
				if (options.year != '') {
					dateParts.push(this.formatYear(date, options.year, locale, options.numberingSystem, options.dateSeparator));
				}
			}
		}

		// 处理时间组件
		if (options.hour != '') {
			timeParts.push(this.formatHour(date, options.hour, options.hour12, options.hourCycle, options.numberingSystem));
		}

		if (options.minute != '') {
			timeParts.push(this.formatMinute(date, options.minute, options.numberingSystem));
		}

		if (options.second != '') {
			timeParts.push(this.formatSecond(date, options.second, options.fractionalSecondDigits, options.numberingSystem));
		}

		// 组合时间部分（用冒号连接）
		let timeStr = '';
		if (timeParts.length > 0) {
			timeStr = timeParts.join(':');

			// 添加 AM/PM
			if (options.dayPeriod != '' && options.hour12) {
				timeStr += ` ${this.formatDayPeriod(date, options.dayPeriod, locale)}`;
			}

			// 添加时区
			if (options.timeZoneName != '') {
				timeStr += ` ${this.formatTimeZone(date, options.timeZoneName, options.timeZone)}`;
			}
		}

		// 组合日期和时间
		const result : string[] = [];
		if (dateParts.length > 0) {
			result.push(this.combineDateTimeParts(dateParts, locale, options.dateSeparator));
		}
		if (timeStr != '') {
			result.push(timeStr);
		}

		return result.join(' ');
	}

	/**
	 * 内部数字格式化实现
	 * @param value 数字值
	 * @param options 格式化选项
	 * @param locale 语言代码
	 * @returns 格式化后的字符串
	 */
	private formatNumber(value : number, options : NumberFormatOpts, locale : string) : string {
		try {
			// 基础格式化逻辑
			let result = value.toString();

			// 处理有效数字位数（优先级高于小数位数）
			if (options.minimumSignificantDigits != null || options.maximumSignificantDigits != null) {
				result = this.formatWithSignificantDigits(value, options);
			} else {
				// 处理小数位数
				if (options.minimumFractionDigits != null || options.maximumFractionDigits != null) {
					const minDigits = options.minimumFractionDigits == null ? 0 : options.minimumFractionDigits!;
					const maxDigits = options.maximumFractionDigits == null ? 3 : options.maximumFractionDigits!;
					result = value.toFixed(Math.max(minDigits, Math.min(maxDigits, 10)));

					// 移除尾随零（如果maxDigits允许）
					if (maxDigits > minDigits) {
						result = parseFloat(result).toString();
						// 确保最小小数位数
						if (minDigits > 0) {
							const parts = result.split('.');
							if (parts.length == 1) {
								result += '.' + '0'.repeat(minDigits);
							} else {
								const decimalPart = parts[1];
								if (decimalPart.length < minDigits) {
									result += '0'.repeat(minDigits - decimalPart.length);
								}
							}
						}
					}
				}

				// 处理最小整数位数
				if (options.minimumIntegerDigits != null && options.minimumIntegerDigits > 1) {
					result = this.formatWithMinimumIntegerDigits(result, options.minimumIntegerDigits);
				}
			}

			// 处理千分位分隔符
			if (options.useGrouping == true) {
				result = this.addThousandsSeparator(result, locale);
			}

			// 处理样式
			if (options.style != null) {
				switch (options.style) {
					case 'currency':
						result = this.formatCurrency(result, options, locale);
						break;
					case 'percent':
						result = this.formatPercent(result, value);
						break;
					case 'decimal':
					default:
						// 已经是十进制格式
						break;
				}
			}

			return result;
		} catch (e) {
			this.ops.warnHandler(`Number formatting failed for value ${value}`, e as Error);
			return value.toString();
		}
	}

	/**
	 * 使用有效数字位数格式化数字
	 * @param value 数字值
	 * @param options 格式化选项
	 * @returns 格式化后的字符串
	 */
	private formatWithSignificantDigits(value : number, options : NumberFormatOpts) : string {
		const minSigDigits = options.minimumSignificantDigits ?? 1;
		const maxSigDigits = options.maximumSignificantDigits ?? 21;

		// 确保有效数字位数在合理范围内
		const actualMinSigDigits = Math.max(1, Math.min(minSigDigits, 21));
		const actualMaxSigDigits = Math.max(actualMinSigDigits, Math.min(maxSigDigits, 21));

		// 使用toPrecision方法格式化有效数字
		let result = value.toPrecision(actualMaxSigDigits);

		// 移除科学计数法表示（如果不是很大或很小的数）
		if (!result.includes('e') && !result.includes('E')) {
			// 移除尾随零，但保持最小有效数字位数
			const num = parseFloat(result);
			result = num.toPrecision(actualMinSigDigits);

			// 如果结果不包含科学计数法，转换为普通数字格式
			if (!result.includes('e') && !result.includes('E')) {
				result = parseFloat(result).toString();
			}
		}

		return result;
	}

	/**
	 * 使用最小整数位数格式化数字
	 * @param numStr 数字字符串
	 * @param minIntegerDigits 最小整数位数
	 * @returns 格式化后的字符串
	 */
	private formatWithMinimumIntegerDigits(numStr : string, minIntegerDigits : number) : string {
		const parts = numStr.split('.');
		const integerPart = parts[0];
		const decimalPart = parts.length > 1 ? parts[1] : '';

		// 在整数部分前面补零
		const paddedInteger = integerPart.padStart(minIntegerDigits, '0');

		return decimalPart == '' ? `${paddedInteger}.${decimalPart}` : paddedInteger;
	}

	// ==================== 日期时间格式化辅助方法 ====================

	/**
	 * 获取完整日期格式
	 */
	private getFullDateFormat(date : Date, locale : string) : string {
		const langCode = locale.split('-')[0].toLowerCase();
		const isUSFormat = langCode == 'en' && (locale.toLowerCase().includes('us') || locale.toLowerCase() == 'en');

		if (langCode == 'zh') {
			return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${this.formatWeekday(date, 'long', locale)}`;
		} else if (langCode == 'ja') {
			return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${this.formatWeekday(date, 'long', locale)}`;
		} else if (langCode == 'ko') {
			return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${this.formatWeekday(date, 'long', locale)}`;
		} else if (isUSFormat) {
			// 美式英语：dddd, MMMM d, yyyy
			return `${this.formatWeekday(date, 'long', locale)}, ${this.formatMonth(date, 'long', locale)} ${date.getDate()}, ${date.getFullYear()}`;
		} else {
			// 欧洲语言：dddd, d MMMM yyyy
			return `${this.formatWeekday(date, 'long', locale)}, ${date.getDate()} ${this.formatMonth(date, 'long', locale)} ${date.getFullYear()}`;
		}
	}

	/**
	 * 获取长日期格式
	 */
	private getLongDateFormat(date : Date, locale : string) : string {
		const langCode = locale.split('-')[0].toLowerCase();
		const isUSFormat = langCode == 'en' && (locale.toLowerCase().includes('us') || locale.toLowerCase() == 'en');

		if (langCode == 'zh') {
			return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
		} else if (langCode == 'ja') {
			return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
		} else if (langCode == 'ko') {
			return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
		} else if (isUSFormat) {
			// 美式英语：MMMM d, yyyy
			return `${this.formatMonth(date, 'long', locale)} ${date.getDate()}, ${date.getFullYear()}`;
		} else {
			// 欧洲语言：d MMMM yyyy
			return `${date.getDate()} ${this.formatMonth(date, 'long', locale)} ${date.getFullYear()}`;
		}
	}

	/**
	 * 获取中等日期格式
	 */
	private getMediumDateFormat(date : Date, locale : string) : string {
		const langCode = locale.split('-')[0].toLowerCase();
		const isUSFormat = langCode == 'en' && (locale.toLowerCase().includes('us') || locale.toLowerCase() == 'en');

		if (langCode == 'zh' || langCode == 'ja' || langCode == 'ko') {
			// 东亚语言：YYYY-MM-dd
			return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
		} else if (isUSFormat) {
			// 美式英语：MMM d, yyyy
			return `${this.formatMonth(date, 'short', locale)} ${date.getDate()}, ${date.getFullYear()}`;
		} else {
			// 欧洲语言：d MMM yyyy
			return `${date.getDate()} ${this.formatMonth(date, 'short', locale)} ${date.getFullYear()}`;
		}
	}

	/**
	 * 获取短日期格式
	 */
	private getShortDateFormat(date : Date, locale : string) : string {
		const langCode = locale.split('-')[0].toLowerCase();
		const isUSFormat = langCode == 'en' && (locale.toLowerCase().includes('us') || locale.toLowerCase() == 'en');
		const year = date.getFullYear().toString().slice(-2);
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');

		if (isUSFormat) {
			// 美式英语：MM/dd/yy
			return `${month}/${day}/${year}`;
		} else if (langCode == 'zh' || langCode == 'ja' || langCode == 'ko') {
			// 东亚语言：yy/MM/dd
			return `${year}/${month}/${day}`;
		} else {
			// 欧洲语言（英式英语、德语、法语等）：dd/MM/yy
			return `${day}/${month}/${year}`;
		}
	}

	/**
	 * 获取完整时间格式
	 */
	private getFullTimeFormat(date : Date, options : DateTimeFormatReal, locale : string) : string {
		const timeStr = this.getMediumTimeFormat(date, options, locale);
		const timeZone = this.formatTimeZone(date, 'long', options.timeZone);
		return `${timeStr} ${timeZone}`;
	}

	/**
	 * 获取长时间格式
	 */
	private getLongTimeFormat(date : Date, options : DateTimeFormatReal, locale : string) : string {
		const timeStr = this.getMediumTimeFormat(date, options, locale);
		const timeZone = this.formatTimeZone(date, 'short', options.timeZone);
		return `${timeStr} ${timeZone}`;
	}

	/**
	 * 获取中等时间格式
	 */
	private getMediumTimeFormat(date : Date, options : DateTimeFormatReal, locale : string) : string {
		const hour = this.formatHour(date, 'numeric', options.hour12, options.hourCycle);
		const minute = this.formatMinute(date, '2-digit');
		const second = this.formatSecond(date, '2-digit', 0);
		const dayPeriod = options.hour12 ? ` ${this.formatDayPeriod(date, 'short', locale)}` : '';
		return `${hour}:${minute}:${second}${dayPeriod}`;
	}

	/**
	 * 获取短时间格式
	 */
	private getShortTimeFormat(date : Date, options : DateTimeFormatReal, locale : string) : string {
		const hour = this.formatHour(date, 'numeric', options.hour12, options.hourCycle);
		const minute = this.formatMinute(date, '2-digit');
		const dayPeriod = options.hour12 ? ` ${this.formatDayPeriod(date, 'short', locale)}` : '';
		return `${hour}:${minute}${dayPeriod}`;
	}

	/**
	 * 格式化星期
	 */
	private formatWeekday(date : Date, style : string, locale : string) : string {
		const weekdays = this.getWeekdayNames(locale);
		const dayIndex = date.getDay();

		switch (style) {
			case 'long':
				return weekdays.long[dayIndex];
			case 'short':
				return weekdays.short[dayIndex];
			case 'narrow':
				return weekdays.narrow[dayIndex];
			default:
				return weekdays.long[dayIndex];
		}
	}

	/**
	 * 格式化纪元
	 */
	private formatEra(date : Date, style : string, locale : string) : string {
		const year = date.getFullYear();
		const langCode = locale.split('-')[0].toLowerCase();

		if (langCode == 'zh') {
			return year > 0 ? '公元' : '公元前';
		} else {
			switch (style) {
				case 'long':
					return year > 0 ? 'Anno Domini' : 'Before Christ';
				case 'short':
				case 'narrow':
				default:
					return year > 0 ? 'AD' : 'BC';
			}
		}
	}

	/**
	 * 数字系统转换
	 * @param number 数字字符串
	 * @param numberingSystem 数字系统
	 * @returns 转换后的数字字符串
	 */
	private convertNumberingSystem(number : string, numberingSystem : string) : string {
		if (numberingSystem == 'latn' || numberingSystem == '') {
			return number; // 拉丁数字（默认）
		}

		// 数字系统映射表
		const numberingSystems = new Map<string, string[]>();
		numberingSystems.set('arab', ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']); // 阿拉伯-印度数字
		numberingSystems.set('arabext', ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']); // 扩展阿拉伯-印度数字
		numberingSystems.set('deva', ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']); // 天城文数字
		numberingSystems.set('fullwide', ['０', '１', '２', '３', '４', '５', '６', '７', '８', '９']); // 全角数字
		numberingSystems.set('hanidec', ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']); // 汉字数字
		numberingSystems.set('thai', ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙']); // 泰文数字

		const digits = numberingSystems.get(numberingSystem);
		if (digits == null) {
			return number; // 不支持的数字系统，返回原数字
		}

		// 转换每个数字字符
		let result = '';
		for (let i = 0; i < number.length; i++) {
			const char = number.charAt(i);
			if (char >= '0' && char <= '9') {
				const digitIndex = parseInt(char);
				result += digits[digitIndex];
			} else {
				result += char; // 非数字字符保持不变
			}
		}

		return result;
	}

	/**
	 * 格式化年份
	 */
	private formatYear(date : Date, style : string, locale : string = '', numberingSystem : string = 'latn', dateSeparator : string = '') : string {
		const year = date.getFullYear();
		const langCode = locale.split('-')[0].toLowerCase();

		let yearStr = '';
		switch (style) {
			case 'numeric':
				yearStr = this.convertNumberingSystem(year.toString(), numberingSystem);
				// 如果提供了分隔符，返回纯数字；否则中文环境下添加"年"字
				return (dateSeparator != '' || langCode != 'zh') ? yearStr : `${yearStr}年`;
			case '2-digit':
				const shortYear = year.toString().slice(-2).padStart(2, '0');
				yearStr = this.convertNumberingSystem(shortYear, numberingSystem);
				return (dateSeparator != '' || langCode != 'zh') ? yearStr : `${yearStr}年`;
			default:
				yearStr = this.convertNumberingSystem(year.toString(), numberingSystem);
				return (dateSeparator != '' || langCode != 'zh') ? yearStr : `${yearStr}年`;
		}
	}

	/**
	 * 格式化月份
	 */
	private formatMonth(date : Date, style : string, locale : string, numberingSystem : string = 'latn', dateSeparator : string = '') : string {
		const month = date.getMonth();
		const monthNames = this.getMonthNames(locale);
		const langCode = locale.split('-')[0].toLowerCase();

		switch (style) {
			case 'numeric':
				// 如果提供了分隔符，返回纯数字；否则中文环境下添加"月"字
				const monthStr = this.convertNumberingSystem((month + 1).toString(), numberingSystem);
				return (dateSeparator != '' || langCode != 'zh') ? monthStr : `${monthStr}月`;
			case '2-digit':
				const paddedMonth = (month + 1).toString().padStart(2, '0');
				const paddedMonthStr = this.convertNumberingSystem(paddedMonth, numberingSystem);
				return (dateSeparator != '' || langCode != 'zh') ? paddedMonthStr : `${paddedMonthStr}月`;
			case 'long':
				return monthNames.long[month];
			case 'short':
				return monthNames.short[month];
			case 'narrow':
				return monthNames.narrow[month];
			default:
				const defaultMonthStr = this.convertNumberingSystem((month + 1).toString(), numberingSystem);
				return (dateSeparator != '' || langCode != 'zh') ? defaultMonthStr : `${defaultMonthStr}月`;
		}
	}

	/**
	 * 格式化日期
	 */
	private formatDay(date : Date, style : string, locale : string = '', numberingSystem : string = 'latn', dateSeparator : string = '') : string {
		const day = date.getDate();
		const langCode = locale.split('-')[0].toLowerCase();

		switch (style) {
			case 'numeric':
				// 如果提供了分隔符，返回纯数字；否则中文环境下添加"日"字
				const dayStr = this.convertNumberingSystem(day.toString(), numberingSystem);
				return (dateSeparator != '' || langCode != 'zh') ? dayStr : `${dayStr}日`;
			case '2-digit':
				const paddedDay = day.toString().padStart(2, '0');
				const paddedDayStr = this.convertNumberingSystem(paddedDay, numberingSystem);
				return (dateSeparator != '' || langCode != 'zh') ? paddedDayStr : `${paddedDayStr}日`;
			default:
				const defaultDayStr = this.convertNumberingSystem(day.toString(), numberingSystem);
				return (dateSeparator != '' || langCode != 'zh') ? defaultDayStr : `${defaultDayStr}日`;
		}
	}

	/**
	 * 格式化小时
	 */
	private formatHour(date : Date, style : string, hour12 : boolean, hourCycle : string, numberingSystem : string = 'latn') : string {
		let hour = date.getHours();

		if (hour12) {
			if (hourCycle == 'h11') {
				hour = hour % 12;
			} else { // h12
				hour = hour % 12;
				if (hour == 0) hour = 12;
			}
		} else {
			if (hourCycle == 'h11') {
				hour = hour % 12;
			} else if (hourCycle == 'h24') {
				if (hour == 0) hour = 24;
			}
			// h23 保持原样
		}

		switch (style) {
			case 'numeric':
				return this.convertNumberingSystem(hour.toString(), numberingSystem);
			case '2-digit':
				return this.convertNumberingSystem(hour.toString().padStart(2, '0'), numberingSystem);
			default:
				return this.convertNumberingSystem(hour.toString(), numberingSystem);
		}
	}

	/**
	 * 格式化分钟
	 */
	private formatMinute(date : Date, style : string, numberingSystem : string = 'latn') : string {
		const minute = date.getMinutes();
		switch (style) {
			case 'numeric':
				return this.convertNumberingSystem(minute.toString(), numberingSystem);
			case '2-digit':
				return this.convertNumberingSystem(minute.toString().padStart(2, '0'), numberingSystem);
			default:
				return this.convertNumberingSystem(minute.toString(), numberingSystem);
		}
	}

	/**
	 * 格式化秒
	 */
	private formatSecond(date : Date, style : string, fractionalDigits : number, numberingSystem : string = 'latn') : string {
		const second = date.getSeconds();
		const millisecond = date.getMilliseconds();

		let result = '';
		switch (style) {
			case 'numeric':
				result = this.convertNumberingSystem(second.toString(), numberingSystem);
				break;
			case '2-digit':
				result = this.convertNumberingSystem(second.toString().padStart(2, '0'), numberingSystem);
				break;
			default:
				result = this.convertNumberingSystem(second.toString(), numberingSystem);
				break;
		}

		// 添加小数秒
		if (fractionalDigits > 0) {
			const fractional = millisecond.toString().padStart(3, '0').slice(0, fractionalDigits);
			const convertedFractional = this.convertNumberingSystem(fractional, numberingSystem);
			result += `.${convertedFractional}`;
		}

		return result;
	}

	/**
	 * 格式化时段（AM/PM）
	 */
	private formatDayPeriod(date : Date, style : string, locale : string) : string {
		const hour = date.getHours();
		const isAM = hour < 12;
		const langCode = locale.split('-')[0].toLowerCase();

		if (langCode == 'zh') {
			switch (style) {
				case 'long':
					return isAM ? '上午' : '下午';
				case 'short':
				case 'narrow':
				default:
					return isAM ? '上午' : '下午';
			}
		} else {
			switch (style) {
				case 'long':
					return isAM ? 'AM' : 'PM';
				case 'short':
				case 'narrow':
				default:
					return isAM ? 'AM' : 'PM';
			}
		}
	}

	/**
	 * 格式化时区
	 */
	private formatTimeZone(date : Date, style : string, timeZone : string) : string {
		// 简化实现，实际应用中可能需要更复杂的时区处理
		switch (style) {
			case 'long':
				return timeZone == 'UTC' ? 'Coordinated Universal Time' : timeZone;
			case 'short':
			default:
				return timeZone == 'UTC' ? 'UTC' : timeZone;
		}
	}

	/**
	 * 组合日期时间各部分
	 */
	private combineDateTimeParts(parts : string[], locale : string, dateSeparator : string = '') : string {
		const langCode = locale.split('-')[0].toLowerCase();

		// 如果设置了自定义分隔符，使用自定义分隔符连接
		if (dateSeparator != '') {
			return parts.join(dateSeparator);
		}

		if (langCode == 'zh') {
			// 中文习惯：直接连接（年份和日期已包含单位字符）
			return parts.join('');
		} else {
			// 英文习惯：用空格分隔
			return parts.join(' ');
		}
	}

	/**
	 * 获取星期名称
	 */
	private getWeekdayNames(locale : string) : DateTimeNames {
		const langCode = locale.split('-')[0].toLowerCase();

		if (langCode == 'zh') {
			return {
				long: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
				short: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
				narrow: ['日', '一', '二', '三', '四', '五', '六']
			};
		} else {
			return {
				long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
			};
		}
	}

	/**
	 * 获取月份名称
	 */
	private getMonthNames(locale : string) : DateTimeNames {
		const langCode = locale.split('-')[0].toLowerCase();

		if (langCode == 'zh') {
			return {
				long: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
				short: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
			};
		} else {
			return {
				long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
			};
		}
	}

	/**
	 * 添加千分位分隔符
	 * @param numStr 数字字符串
	 * @param locale 语言代码
	 * @returns 带千分位分隔符的字符串
	 */
	private addThousandsSeparator(numStr : string, locale : string) : string {
		const parts = numStr.split('.');
		const integerPart = parts[0];
		const decimalPart = parts.length > 1 ? parts[1] : '';

		// 根据语言选择分隔符
		const separator = this.getThousandsSeparator(locale);

		// 添加千分位分隔符
		const formattedInteger = integerPart.replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${separator}`);

		return decimalPart == '' ? `${formattedInteger}.${decimalPart}` : formattedInteger;
	}

	/**
	 * 千分位分隔符映射配置
	 */
	private static readonly THOUSANDS_SEPARATOR_MAP = new Map<string, string>([
		// 使用逗号的语言
		['en', ','],    // 英语
		['zh', ','],    // 中文
		['zh-Hant', ','],    // 中文
		['zh', ','],    // 中文
		['ja', ','],    // 日语
		['ko', ','],    // 韩语
		['pt', ','],    // 葡萄牙语
		['th', ','],    // 泰语
		['vi', ','],    // 越南语
		['id', ','],    // 印尼语
		['ms', ','],    // 马来语
		['tl', ','],    // 菲律宾语
		['he', ','],    // 希伯来语
		['ar', ','],    // 阿拉伯语
		// 使用空格的语言
		['de', ' '],    // 德语
		['fr', ' '],    // 法语
		['ru', ' '],    // 俄语
		['sv', ' '],    // 瑞典语
		['no', ' '],    // 挪威语
		['da', ' '],    // 丹麦语
		['fi', ' '],    // 芬兰语
		['cs', ' '],    // 捷克语
		['sk', ' '],    // 斯洛伐克语
		['pl', ' '],    // 波兰语
		// 使用点号的语言
		['es', '.'],    // 西班牙语
		['it', '.'],    // 意大利语
		['nl', '.'],    // 荷兰语
		['tr', '.'],    // 土耳其语
		// 使用撇号的语言
		['ch', "'"],   // 瑞士德语
	]);

	/**
	 * 获取千分位分隔符
	 * @param locale 语言代码
	 * @returns 分隔符字符
	 */
	private getThousandsSeparator(locale : string) : string {
		// 提取语言代码前缀（如 'en-US' -> 'en'）
		const langCode = locale.split('-')[0].toLowerCase();

		// 从映射中获取分隔符
		const separator = Tmui4xI18n.THOUSANDS_SEPARATOR_MAP.get(langCode);

		// 如果找到对应的分隔符则返回，否则返回默认的逗号
		return separator ?? ',';
	}

	/**
	 * 格式化货币
	 * @param numStr 数字字符串
	 * @param options 格式化选项
	 * @param locale 语言代码
	 * @returns 格式化后的货币字符串
	 */
	private formatCurrency(numStr : string, options : NumberFormatOpts, locale : string) : string {
		const currency = options.currency ?? 'USD';
		const currencyDisplay = options.currencyDisplay ?? 'symbol';

		let currencySymbol = currency;
		if (currencyDisplay == 'symbol') {
			// 全球主要经济体货币符号映射
			switch (currency.toUpperCase()) {
				// 美洲
				case 'USD':
					currencySymbol = '$';
					break;
				case 'CAD':
					currencySymbol = 'C$';
					break;
				case 'BRL':
					currencySymbol = 'R$';
					break;
				case 'MXN':
					currencySymbol = '$';
					break;
				// 欧洲
				case 'EUR':
					currencySymbol = '€';
					break;
				case 'GBP':
					currencySymbol = '£';
					break;
				case 'CHF':
					currencySymbol = 'CHF';
					break;
				case 'RUB':
					currencySymbol = '₽';
					break;
				// 亚太地区
				case 'JPY':
					currencySymbol = '¥';
					break;
				case 'CNY':
				case 'RMB':
					currencySymbol = '¥';
					break;
				case 'KRW':
					currencySymbol = '₩';
					break;
				case 'INR':
					currencySymbol = '₹';
					break;
				case 'AUD':
					currencySymbol = 'A$';
					break;
				case 'SGD':
					currencySymbol = 'S$';
					break;
				case 'HKD':
					currencySymbol = 'HK$';
					break;
				case 'TWD':
					currencySymbol = 'NT$';
					break;
				case 'THB':
					currencySymbol = '฿';
					break;
				case 'MYR':
					currencySymbol = 'RM';
					break;
				case 'VND':
					currencySymbol = '₫';
					break;
				case 'IDR':
					currencySymbol = 'Rp';
					break;
				case 'PHP':
					currencySymbol = '₱';
					break;
				// 中东地区
				case 'SAR':
					currencySymbol = '﷼';
					break;
				case 'AED':
					currencySymbol = 'د.إ';
					break;
				case 'ILS':
					currencySymbol = '₪';
					break;
				case 'TRY':
					currencySymbol = '₺';
					break;
				// 非洲
				case 'ZAR':
					currencySymbol = 'R';
					break;
				default:
					currencySymbol = currency;
					break;
			}
		}

		// 根据货币和地区决定货币符号位置（参考国际标准）
		return this.getCurrencyPosition(currencySymbol, numStr, currency, locale);
	}

	/**
	 * 获取货币符号位置
	 * @param symbol 货币符号
	 * @param numStr 数字字符串
	 * @param currency 货币代码
	 * @param locale 语言代码
	 * @returns 格式化后的货币字符串
	 */
	private getCurrencyPosition(symbol : string, numStr : string, currency : string, locale : string) : string {
		const currencyCode = currency.toUpperCase();

		// 符号在前面的货币（无空格）
		const prefixNoSpace = ['USD', 'CAD', 'AUD', 'HKD', 'SGD', 'TWD', 'GBP', 'CNY', 'RMB', 'JPY'];
		// 符号在前面的货币（有空格）
		const prefixWithSpace = ['BRL', 'MXN', 'KRW', 'INR', 'THB', 'VND', 'IDR', 'PHP', 'ILS', 'TRY'];
		// 符号在后面的货币（有空格）
		const suffixWithSpace = ['EUR', 'CHF', 'RUB', 'MYR', 'SAR', 'AED', 'ZAR'];

		if (prefixNoSpace.includes(currencyCode)) {
			return `${symbol}${numStr}`;
		} else if (prefixWithSpace.includes(currencyCode)) {
			return `${symbol} ${numStr}`;
		} else if (suffixWithSpace.includes(currencyCode)) {
			return `${numStr} ${symbol}`;
		} else {
			// 默认根据语言决定
			if (locale.startsWith('en') || locale.startsWith('zh')) {
				return `${symbol}${numStr}`;
			} else {
				return `${numStr} ${symbol}`;
			}
		}
	}

	/**
	 * 格式化百分比
	 * @param numStr 数字字符串
	 * @param originalValue 原始数值
	 * @returns 格式化后的百分比字符串
	 */
	private formatPercent(numStr : string, originalValue : number) : string {
		// 将数值乘以100并添加百分号
		const percentValue = originalValue * 100;
		return `${percentValue}%`;
	}
	/**
	 * 获取翻译消息
	 * @param key 翻译键
	 * @param locale 语言代码
	 * @returns 翻译消息或null
	 */
	private getMessage(key : string, locale : string) : StringOrNull {
		const messages = this.ops.messages;
		if (messages[locale] == null) {
			return null;
		}

		const localeMessages = messages[locale] as UTSJSONObjectOrNull;
		return this.getNestedValue(localeMessages, key);
	}

	/**
	 * 获取嵌套对象的值
	 * @param obj 对象
	 * @param path 路径，如 'user.name'
	 * @returns 值或null
	 */
	private getNestedValue(obj : UTSJSONObjectOrNull, path : string) : StringOrNull {
		const keys = path.split('.');

		let getAny : GetAnyTypeOrNull = (objdata : AnyOrNull) : AnyOrNull => {
			let realGetAny = getAny!;
			let path : StringOrNull = keys.shift() || null
			if (objdata == null) return null;
			if (
				typeof objdata == 'string' ||
				typeof objdata == 'number'
			) return objdata
			if (path == null) return null;
			return realGetAny((objdata! as Record<string, any>)?.[path]??null);
		}

		let current : AnyOrNull = getAny(obj);

		if (typeof current == 'number') return current.toString()
		return typeof current == 'string' ? current : null;
	}

	/**
	 * 处理复数形式
	 * @param message 包含复数的消息
	 * @param count 数量
	 * @param locale 语言代码
	 * @returns 选择的复数形式
	 */
	private handlePlural(message : string, count : number, locale : string) : string {
		const choices = message.split('|').map((choice : string) : string => choice.trim());
		const choicesLength = choices.length;

		// 获取复数规则
		let pluralRule = this.ops.pluralRule;
		if (this.ops.pluralRules.has(locale)) {
			pluralRule = this.ops.pluralRules.get(locale)!;
		}

		// 应用复数规则
		let index = 0;
		if (pluralRule != null) {
			// 第有理数无法类型嵌套，暂不支持设置为null
			index = pluralRule(count, choicesLength, null);
		}

		// 确保索引在有效范围内
		const safeIndex = Math.max(0, Math.min(index, choicesLength - 1));
		let result = choices[safeIndex]
		if (result == '' || result == null) {
			result = choices[0]
		}
		if (result == '' || result == null) {
			result = message
		}

		return result;
	}

	/**
	 * 字符串插值处理
	 * @param message 消息模板
	 * @param values 插值参数
	 * @returns 插值后的字符串
	 */
	private interpolate(message : string, values : UTSJSONObjectOrArray) : string {
		let msg = message;
		if (Array.isArray(values)) {
			// 处理位置插值 {0}, {1}, {2}...
			// #ifndef APP-ANDROID
			msg = message.replace(/\{(\d+)\}/g, (match : string, key : string, index : number) : string => {
				const value = values[parseInt(key)];

				if (value != null) {
					let result = typeof value == 'number' ? value.toString() : value as string
					return result;
				}
				return match; // 保持原样如果没有找到值
			});
			// #endif
			// #ifdef APP-ANDROID
			msg = message.replace(/\{(\d+)\}/g, (match : string, key : string, offset : number, str : string) : string => {
				const value = values[parseInt(key)];
				if (value != null) {
					let result = typeof value == 'number' ? value.toString() : value as string
					return result;
				}
				return match; // 保持原样如果没有找到值
			});
			// #endif
		} else if (typeof values == 'object' && values != null) {
			if (Object.keys(values).length == 0) {
				return message;
			}
			// 处理命名插值 {name}比如{count},{n}等
			// #ifndef APP-ANDROID
			msg = message.replace(/\{([^}]+)\}/g, (match : string, key : string, index : number) : string => {
				const value = values[key];
				if (value != null) {
					return value as string;
				}
				return match; // 保持原样如果没有找到值
			});
			// #endif
			// #ifdef APP-ANDROID
			msg = message.replace(/\{([^}]+)\}/g, (match : string, key : string, offset : number, str : string) : string => {
				const value = values[key];
				if (value != null) {
					if (typeof value == 'string') return value;
					if (typeof value == 'number') return value.toString();

				}
				return match; // 保持原样如果没有找到值
			});
			// #endif
		}



		return msg;
	}
}