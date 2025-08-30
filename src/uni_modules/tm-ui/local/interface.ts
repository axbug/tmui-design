// 统一类型定义 - 替换联合类型
export type StringOrNull = string | null
export type NumberOrNull = number | null
export type StringOrNumber = string | number
export type StringOrNumberOrNull = string | number | null
export type DateOrNumberOrString = Date | number | string
export type UTSJSONObjectOrNull = Record<string,any> | null
export type UTSJSONObjectOrArray = Record<string,any> | Array<any>
export type AnyOrNull = any | null
export type StringOrMessageFunction = string | MessageFunction
export type StringOrVoid = string | void
export type GetAnyType = (obj : AnyOrNull) => AnyOrNull
export type I18nOptionsOrNull = I18nOptions | null
export type NumberFormatOrNull = NumberFormat | null
export type DateTimeFormatOrNull = DateTimeFormat | null
export type GetAnyTypeOrNull = GetAnyType | null

/**
 * 警告处理器类型 - 用于处理国际化过程中的警告信息
 * @param msg 警告消息内容
 * @param err 可选的错误对象
 */
export type WarnHandler = (msg : StringOrNumberOrNull, err ?: Error|null) => void

/**
 * 基础复数规则函数类型 - 定义基本的复数形式选择逻辑
 * @param choice 数量值
 * @param choicesLength 可选择的复数形式数量
 * @returns 选择的复数形式索引
 */
export type BasePluralRule = (choice : number, choicesLength : number) => number

/**
 * 复数规则类型 - 扩展的复数规则，支持回退到原始规则
 * @param choice 数量值
 * @param choicesLength 可选择的复数形式数量
 * @param orgRule 可选的原始复数规则
 * @returns 选择的复数形式索引
 */
export type PluralRule = (choice : number, choicesLength : number, orgRule ?: BasePluralRule|null) => number

/**
 * 消息上下文类型 - 包含消息处理所需的所有上下文信息
 */
export type MessageContext = {
	/** 列表参数 */
	list : Array<any>
	/** 命名参数对象 */
	named : Record<string,any>
	/** 复数索引 */
	pluralIndex : number
	/** 复数规则函数 */
	pluralRule ?: PluralRule
	/** 原始复数规则函数 */
	orgPluralRule ?: BasePluralRule
	/** 字符串修饰器函数 */
	modifier : (str : string) => string
	/** 消息内容或消息函数 */
	message : StringOrMessageFunction
	/** 消息类型 */
	type : string
	/** 插值函数 */
	interpolate : (val : any) => string
	/** 值标准化函数 */
	normalize : (values : Array<any>) => Array<any>
	/** 参数值数组 */
	values : Array<any>
}

/**
 * 消息函数类型 - 接收上下文并返回格式化后的字符串
 * @param ctx 消息上下文
 * @returns 格式化后的消息字符串
 */
export type MessageFunction = (ctx : MessageContext) => string

/**
 * 消息函数返回值类型
 */
export type MessageFunctionReturn = StringOrNumber

/**
 * 数字格式化选项类型 - 基于 ECMA-402 Intl.NumberFormat 标准
 */
export type NumberFormat = {
	/** 数字样式：'decimal'(十进制)、'currency'(货币)、'percent'(百分比) */
	style ?: string
	/** 货币代码，如 'USD'、'EUR'、'CNY' */
	currency ?: string
	/** 本地化代码 */
	local ?: string
	/** 货币显示方式：'symbol'(符号)、'code'(代码)、'name'(名称) */
	currencyDisplay ?: string
	/** 是否使用千分位分组 */
	useGrouping ?: boolean
	/** 最小整数位数 */
	minimumIntegerDigits ?: number
	/** 最小小数位数 */
	minimumFractionDigits ?: number
	/** 最大小数位数 */
	maximumFractionDigits ?: number
	/** 最小有效数字位数 */
	minimumSignificantDigits ?: number
	/** 最大有效数字位数 */
	maximumSignificantDigits ?: number
}
/**
 * 数字格式化选项类型（必填版本）- 所有字段都是必需的
 */
export type NumberFormatOpts = {
	/** 数字样式 */
	style : string
	/** 本地化代码 */
	local : string
	/** 货币代码 */
	currency : string
	/** 货币显示方式 */
	currencyDisplay : string
	/** 是否使用千分位分组 */
	useGrouping : boolean
	/** 最小整数位数 */
	minimumIntegerDigits : number
	/** 最小小数位数 */
	minimumFractionDigits : number | null
	/** 最大小数位数 */
	maximumFractionDigits : number | null
	/** 最小有效数字位数 */
	minimumSignificantDigits : number | null
	/** 最大有效数字位数 */
	maximumSignificantDigits : number | null
}

/**
 * 数字格式化配置映射 - 语言代码 -> 格式名称 -> 格式配置
 */
export type NumberFormats = Map<string, Map<string, NumberFormat>>

/**
 * 日期时间格式化选项类型 - 基于 ECMA-402 Intl.DateTimeFormat 标准
 */
export type DateTimeFormat = {
	/** 本地化匹配算法：'lookup' 或 'best fit' */
	localeMatcher ?: string
	/** 本地化代码 */
	local ?: string
	/** 日历系统，如 'gregory'、'chinese'、'islamic'、'buddhist'、'coptic'、'dangi'、'ethioaa'、'ethiopic'、'hebrew'、'indian'、'iso8601'、'japanese'、'persian'、'roc' */
	calendar ?: string
	/** 数字系统，如 'arab'、'arabext'、'bali'、'beng'、'deva'、'fullwide'、'gujr'、'guru'、'hanidec'、'khmr'、'knda'、'laoo'、'latn'、'limb'、'mlym'、'mong'、'mymr'、'orya'、'tamldec'、'telu'、'thai'、'tibt' */
	numberingSystem ?: string
	/** 时区标识符，如 'UTC'、'Asia/Shanghai'、'America/New_York' */
	timeZone ?: string
	/** 是否使用12小时制 */
	hour12 ?: boolean
	/** 小时周期：'h11'(0-11 with AM/PM)、'h12'(1-12 with AM/PM)、'h23'(0-23)、'h24'(1-24) */
	hourCycle ?: string
	/** 格式匹配算法：'basic' 或 'best fit' */
	formatMatcher ?: string
	/** 日期分隔符：用于连接年月日的字符，如 '-'、'/'、'.' 等。设置后将输出纯数字格式（如 2025-5-3），忽略语言默认的文字后缀 */
	dateSeparator ?: string
	/** 星期显示：'long'(Monday)、'short'(Mon)、'narrow'(M) */
	weekday ?: string
	/** 纪元显示：'long'(Anno Domini)、'short'(AD)、'narrow'(A) */
	era ?: string
	/** 年份显示：'numeric'(2023)、'2-digit'(23) */
	year ?: string
	/** 月份显示：'numeric'(1)、'2-digit'(01)、'long'(January)、'short'(Jan)、'narrow'(J) */
	month ?: string
	/** 日期显示：'numeric'(1)、'2-digit'(01) */
	day ?: string
	/** 时段显示：'long'(in the morning)、'short'(AM)、'narrow'(a) */
	dayPeriod ?: string
	/** 小时显示：'numeric'(1)、'2-digit'(01) */
	hour ?: string
	/** 分钟显示：'numeric'(1)、'2-digit'(01) */
	minute ?: string
	/** 秒显示：'numeric'(1)、'2-digit'(01) */
	second ?: string
	/** 小数秒位数：0-3，控制毫秒显示精度 */
	fractionalSecondDigits ?: number
	/** 时区名称显示：'long'(Pacific Standard Time)、'short'(PST)、'shortOffset'(GMT-8)、'longOffset'(GMT-08:00)、'shortGeneric'(PT)、'longGeneric'(Pacific Time) */
	timeZoneName ?: string
	/** 日期样式：'full'、'long'、'medium'、'short' - 与单独的日期组件选项互斥 */
	dateStyle ?: string
	/** 时间样式：'full'、'long'、'medium'、'short' - 与单独的时间组件选项互斥 */
	timeStyle ?: string
}

export type DateTimeFormatReal = {
	/** 本地化匹配算法：'lookup' 或 'best fit' */
	localeMatcher : string
	/** 本地化代码 */
	local : string
	/** 日历系统，如 'gregory'、'chinese'、'islamic'、'buddhist'、'coptic'、'dangi'、'ethioaa'、'ethiopic'、'hebrew'、'indian'、'iso8601'、'japanese'、'persian'、'roc' */
	calendar : string
	/** 数字系统，如 'arab'、'arabext'、'bali'、'beng'、'deva'、'fullwide'、'gujr'、'guru'、'hanidec'、'khmr'、'knda'、'laoo'、'latn'、'limb'、'mlym'、'mong'、'mymr'、'orya'、'tamldec'、'telu'、'thai'、'tibt' */
	numberingSystem : string
	/** 时区标识符，如 'UTC'、'Asia/Shanghai'、'America/New_York' */
	timeZone : string
	/** 是否使用12小时制 */
	hour12 : boolean
	/** 小时周期：'h11'(0-11 with AM/PM)、'h12'(1-12 with AM/PM)、'h23'(0-23)、'h24'(1-24) */
	hourCycle : string
	/** 格式匹配算法：'basic' 或 'best fit' */
	formatMatcher : string
	/** 日期分隔符：用于连接年月日的字符，如 '-'、'/'、'.' 等。设置后将输出纯数字格式（如 2025-5-3），忽略语言默认的文字后缀 */
	dateSeparator : string
	/** 星期显示：'long'(Monday)、'short'(Mon)、'narrow'(M) */
	weekday : string
	/** 纪元显示：'long'(Anno Domini)、'short'(AD)、'narrow'(A) */
	era : string
	/** 年份显示：'numeric'(2023)、'2-digit'(23) */
	year : string
	/** 月份显示：'numeric'(1)、'2-digit'(01)、'long'(January)、'short'(Jan)、'narrow'(J) */
	month : string
	/** 日期显示：'numeric'(1)、'2-digit'(01) */
	day : string
	/** 时段显示：'long'(in the morning)、'short'(AM)、'narrow'(a) */
	dayPeriod : string
	/** 小时显示：'numeric'(1)、'2-digit'(01) */
	hour : string
	/** 分钟显示：'numeric'(1)、'2-digit'(01) */
	minute : string
	/** 秒显示：'numeric'(1)、'2-digit'(01) */
	second : string
	/** 小数秒位数：0-3，控制毫秒显示精度 */
	fractionalSecondDigits : number
	/** 时区名称显示：'long'(Pacific Standard Time)、'short'(PST)、'shortOffset'(GMT-8)、'longOffset'(GMT-08:00)、'shortGeneric'(PT)、'longGeneric'(Pacific Time) */
	timeZoneName : string
	/** 日期样式：'full'、'long'、'medium'、'short' - 与单独的日期组件选项互斥 */
	dateStyle : string
	/** 时间样式：'full'、'long'、'medium'、'short' - 与单独的时间组件选项互斥 */
	timeStyle : string
}

/**
 * 日期时间格式化配置映射 - 语言代码 -> 格式名称 -> 格式配置
 */
export type DateTimeFormats = Map<string, Map<string, DateTimeFormat>>
/**
 * I18n配置选项类型（可选版本）- 用于初始化国际化实例
 */
export type I18nOptions = {
	/** 当前语言代码，如 'en-US'、'zh-CN' */
	locale ?: string
	/** 回退语言代码，当当前语言缺少翻译时使用 */
	fallbackLocale ?: string
	/** 翻译消息对象，按语言代码组织 */
	messages ?: Record<string,any>
	/** 日期时间格式化配置 */
	datetimeFormats ?: DateTimeFormats
	/** 数字格式化配置 */
	numberFormats ?: NumberFormats
	/** 字符串修饰器映射 */
	modifiers ?: Map<string, MessageFunction>
	/** 复数规则映射，按语言代码组织 */
	pluralRules ?: Map<string, PluralRule>
	/** 缺失翻译处理函数 */
	missing ?: ((locale : string, key : string, instance ?: any, type ?: string) => StringOrVoid) | null
	/** 是否显示缺失翻译警告 */
	missingWarn ?: boolean
	/** 是否显示回退语言警告 */
	fallbackWarn ?: boolean
	/** 是否回退到根实例 */
	fallbackRoot ?: boolean
	/** 是否启用回退格式化 */
	fallbackFormat ?: boolean
	/** 是否允许未解析的翻译键 */
	unresolving ?: boolean
	/** 翻译后处理函数 */
	postTranslation ?: ((str : string, key : string) => string) | null
	/** 是否警告HTML消息 */
	warnHtmlMessage ?: boolean
	/** 是否转义参数 */
	escapeParameter ?: boolean
	/** 是否继承父级语言设置 */
	inheritLocale ?: boolean
	/** 警告处理器 */
	warnHandler ?: WarnHandler
	/** 默认复数规则 */
	pluralRule ?: PluralRule
	/** 是否全局注入 */
	globalInjection ?: boolean
	/** 是否允许组合式API */
	allowComposition ?: boolean
	/** 是否使用遗留模式 */
	legacy ?: boolean
}
/**
 * I18n配置选项类型（必填版本）- 内部使用的完整配置对象
 * 参考语言代码标准：https://xnxy.github.io/2024/06/11/%E5%9B%BD%E9%99%85%E5%8C%96%E4%B8%AD%E5%B8%B8%E7%94%A8BCP-47%20Code%E5%92%8C%E8%AF%AD%E8%A8%80%E5%AF%B9%E7%85%A7%E8%A1%A8/
 */
export type I18nOptionsReally = {
	/** 当前语言代码，如 'en-US'、'zh-CN' */
	locale : string
	/** 回退语言代码，当当前语言缺少翻译时使用 */
	fallbackLocale : string
	/** 翻译消息对象，按语言代码组织 */
	messages : Record<string,any>
	/** 日期时间格式化配置 */
	datetimeFormats : DateTimeFormats
	/** 数字格式化配置 */
	numberFormats : NumberFormats
	/** 字符串修饰器映射 */
	modifiers : Map<string, MessageFunction>
	/** 复数规则映射，按语言代码组织 */
	pluralRules : Map<string, PluralRule>
	/** 缺失翻译处理函数 */
	missing : ((locale : string, key : string, instance ?: AnyOrNull, type ?: StringOrNull) => StringOrVoid) | null
	/** 是否显示缺失翻译警告 */
	missingWarn : boolean
	/** 是否显示回退语言警告 */
	fallbackWarn : boolean
	/** 是否回退到根实例 */
	fallbackRoot : boolean
	/** 是否启用回退格式化 */
	fallbackFormat : boolean
	/** 是否允许未解析的翻译键 */
	unresolving : boolean
	/** 翻译后处理函数 */
	postTranslation : ((str : string, key : string) => string) | null
	/** 是否警告HTML消息 */
	warnHtmlMessage : boolean
	/** 是否转义参数 */
	escapeParameter : boolean
	/** 是否继承父级语言设置 */
	inheritLocale : boolean
	/** 警告处理器 */
	warnHandler : WarnHandler
	/** 默认复数规则 */
	pluralRule : PluralRule
	/** 是否全局注入 */
	globalInjection : boolean
	/** 是否允许组合式API */
	allowComposition : boolean
	/** 是否使用遗留模式 */
	legacy : boolean
}
/**
 * uniapp-x下的tmui4x附带的多语言插件，现面向所有用户开放本语言插件。
 * @author tmui4x
 * @copyright https://tmui.design
 * @date 2025/7/8
 */
export interface  Tmui4xI18nTml {
	/** 实例配置,可以动态修改本配置 **/
	ops : I18nOptionsReally
	
	/** 设置语言 */
	setLocale(local : string) : void;
	/**
	 * 获取语言
	 * @returns {string} 当前设置的语言
	 */
	getLocale()  : string;
	/**
	 * 获取回退语言
	 * @returns {string} 当前回退的语言
	 */
	getFallbackLocale()  :  string;
	/** 设置回退语言 */
	setFallbackLocale(local : string) :void;
	/** 全量填充配置 **/
	setOptions(args : I18nOptions|null):void;
	/**
	 * 翻译方法 - 参考 Vue I18n 实现（UTS类型安全优化版本）
	 * @param key 翻译键
	 * @param args 可选参数：数字(用于复数)、对象(用于插值)、字符串(locale)等同原vueI18n使用方式
	 * @param opts 可选的第二个参数当args为复数数字，key中函数 | 时，此opts起效且必须为Record<string,any>格式等同原vueI18n使用方式
	 * @returns 翻译后的字符串
	 */
	t(key : string, ...argsopts : Array<any>) :  string;
	/**
	 * 数字格式化方法 - 参考 Vue I18n 实现
	 * @param val 要格式化的数字
	 * @param name 格式化名称模板，如果不存在以opts为准，如果opts也没有则取默认值。
	 * @param opts 格式化选项
	 * @returns 格式化后的字符串
	 */
	n(val : number, formatName ?: StringOrNull, opts ?: NumberFormatOrNull) : string;
	/**
	 * 日期时间格式化方法 - 参考 Vue I18n 实现
	 * @param val 要格式化的日期时间值（Date对象、时间戳数字或日期字符串）
	 * @param formatName 格式化名称模板，如果不存在以opts为准，如果opts也没有则取默认值
	 * @param opts 格式化选项
	 * @returns 格式化后的字符串
	 */
	d(val : DateOrNumberOrString, formatName ?: StringOrNull, opts ?: DateTimeFormatOrNull) : string;
	/**
	 * 动态添加语言的新字段
	 * @param {string} local 语言
	 * @param {Record<string,any>} newMessage 键值及字段。
	 */
	mergeLocaleMessage (local : string, newMessage : Record<string,any>) : void;
	/**
	 * 检测翻译键是否存在 - 参考 Vue I18n 的 te 方法实现
	 * @param {string} key 翻译键，支持嵌套路径如 'user.name'
	 * @param {string} locale 可选的语言代码，不提供则使用当前语言
	 * @returns {boolean} 存在返回true，不存在返回false
	 */
	te(key : string, locale ?: string | null) : boolean;
	/**
	 * 相对时间
	 * @param {string，number，Date} timeValue 时间差（毫秒）
	 * @param {string} unit 首选单位,它会自动进阶更高的维度，比如提供秒，超过60秒以分为单位进阶。
	 * @param {string} locale 可选语言，不提供以默认创建的设置为准。
	 * @returns {string} 格式化后的时间字符串
	 */
	rt(timeValues ?: number | Date | string | null, units ?: string | null, locale ?: string | null) : string;
	/**
	 * 获取可用语言列表
	 * @returns {string[]}
	 */
	availableLocales() : string[]
}


