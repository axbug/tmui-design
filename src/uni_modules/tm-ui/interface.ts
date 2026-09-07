
import { AxiosInstance } from "./libs/axios";


/*
 * Copyright (c) 2025. tmzdy by @https://tmui.design
 */

/**
 * 上传的文件状态
 * 0未上传，1上传中，2上传成功，3上传失败（网络错误），4已取消（终止，上到一半取消了）,5超过大小
 * 0 Not uploaded, 1 Uploading, 2 Upload successful, 3 Upload failed (network error), 4 Cancelled (terminated, canceled halfway), 5 Exceeds size limit,
 */
export enum TMUPLOAD_PHOTO_STATUS {
	NOT = 0,
	UPLOADING = 1,
	UPLOAD_SUCCESS = 2,
	UPLOAD_FAILED = 3,
	CANCELLED = 4,
	EXCEEDS_SIZE_LIMIT = 5,
}

declare global {
	interface Uni {
		/**
		 * api接口的域名
		 */
		apiHostUrl: string;
		/**
		 * 图片地地址域名
		 */
		imgHostUrl: string;
		/**
		 * 上传文件的地址链接
		 */
		uploadHost: string;

		/**
		 * 获取图片的域名连接
		 * localImgName 图片名称如：a.jpg,也可以是本地的地址如/static/xxx或者https开头，会忽略域名的拼接，直接返回本身。
		 * hostname可以为空，取全局的uni.imgHostUrl
		 */
		getHostImg: (localImgName: string, hostname?: string) => string;
		// 导航跳转
		navTo: (url: string, type: 'navigate' | 'redirect' | 'switchTab' | 'reLaunch') => void;
		// 全局的请求实例
		axios: AxiosInstance;

	}

	/**
	 * TMUI3.2.x类型命名空间
	 * @author tmzdy
	 * @date 2024-8-1
	 */
	namespace TM {

		export type NAVIGATE_TYPE = 'navigate' | 'redirect' | 'switchTab' | 'reLaunch' | 'navigateBack';
		/** 按钮尺寸大小 */
		export type BUTTON_SIZE = "xs" | "s" | "m" | "n" | "g"
		/** 按钮或者标签的主题样式 */
		export type BUTTON_THEME = "thin" | "outlined" | "text" | "normal" | "dashed"
		/** 主题状态 */
		export type THEME_STATUS = "warn" | "success" | "info" | "error" | "error"
		/** 主题样式 */
		export type THEME_MODE = "auto" | "dark" | "light"

		export type I18nOptions = {
			/** 当前语言代码，如 'en-US'、'zh-CN' */
			locale?: string;
			/** 回退语言代码，当当前语言缺少翻译时使用 */
			fallbackLocale?: string;
			/** 翻译消息对象，按语言代码组织 */
			messages?: Record<string, any>;
			/** 日期时间格式化配置 */
			datetimeFormats?: any;
			/** 数字格式化配置 */
			numberFormats?: any;
			/** 字符串修饰器映射 */
			modifiers?: Map<string, any>;
			/** 复数规则映射，按语言代码组织 */
			pluralRules?: Map<string, any>;
			/** 缺失翻译处理函数 */
			missing?: ((locale: string, key: string, instance?: any, type?: string) => any) | null;
			/** 是否显示缺失翻译警告 */
			missingWarn?: boolean;
			/** 是否显示回退语言警告 */
			fallbackWarn?: boolean;
			/** 是否回退到根实例 */
			fallbackRoot?: boolean;
			/** 是否启用回退格式化 */
			fallbackFormat?: boolean;
			/** 是否允许未解析的翻译键 */
			unresolving?: boolean;
			/** 翻译后处理函数 */
			postTranslation?: ((str: string, key: string) => string) | null;
			/** 是否警告HTML消息 */
			warnHtmlMessage?: boolean;
			/** 是否转义参数 */
			escapeParameter?: boolean;
			/** 是否继承父级语言设置 */
			inheritLocale?: boolean;
			/** 警告处理器 */
			warnHandler?: any;
			/** 默认复数规则 */
			pluralRule?: any;
			/** 是否全局注入 */
			globalInjection?: boolean;
			/** 是否允许组合式API */
			allowComposition?: boolean;
			/** 是否使用遗留模式 */
			legacy?: boolean;
		};

		export type I18nGlobal = {
			/** 翻译文本。`t(key)` / `t(key, named)` / `t(key, list)` / `t(key, plural)` 多重载 */
			t: (key: string, ...args: any[]) => string;
			/** 解析已编译消息（rt: resolve translation），通常配合 tm() 使用 */
			rt?: (message: any, ...args: any[]) => string;
			/** 日期/时间格式化。`d(value)` / `d(value, key)` / `d(value, key, locale)` / `d(value, options)` */
			d?: (value: any, ...args: any[]) => string;
			/** 数字格式化。`n(value)` / `n(value, key)` / `n(value, key, locale)` / `n(value, options)` */
			n?: (value: any, ...args: any[]) => string;
			/** 判断 key 是否存在 */
			te?: (key: string, locale?: string) => boolean;
			/** 取整段消息子树（返回对象/数组结构） */
			tm?: (key: string) => any;

			/** 当前语言（Ref<string>，可读写） */
			locale?: any;
			/** 回退语言（Ref<string | string[] | ...>） */
			fallbackLocale?: any;
			/** 当前已注册的所有语言代码（只读） */
			availableLocales?: string[];
			/** 全部 messages（只读，结构与 createI18n 的 messages 一致） */
			messages?: any;
			/** 全部日期时间格式配置（只读） */
			datetimeFormats?: any;
			/** 全部数字格式配置（只读） */
			numberFormats?: any;

			/** 取指定语言的 messages */
			getLocaleMessage?: (locale: string) => any;
			/** 整包覆盖指定语言的 messages */
			setLocaleMessage?: (locale: string, message: any) => void;
			/** 深度合并指定语言的 messages（不会清空原有 key） */
			mergeLocaleMessage?: (locale: string, message: any) => void;

			/** 取指定语言的日期时间格式 */
			getDateTimeFormat?: (locale: string) => any;
			/** 整包覆盖指定语言的日期时间格式 */
			setDateTimeFormat?: (locale: string, format: any) => void;
			/** 深度合并指定语言的日期时间格式 */
			mergeDateTimeFormat?: (locale: string, format: any) => void;

			/** 取指定语言的数字格式 */
			getNumberFormat?: (locale: string) => any;
			/** 整包覆盖指定语言的数字格式 */
			setNumberFormat?: (locale: string, format: any) => void;
			/** 深度合并指定语言的数字格式 */
			mergeNumberFormat?: (locale: string, format: any) => void;
		};



		export interface THEME_CONFIG {
			i18n: I18nOptions,
			/** 主题模式 */
			mode: THEME_MODE,
			/**主题列表，可以覆盖内置同名主题 */
			theme:Map<string,string>,
			color: string,
			unit: 'rpx' | 'px',
			// 默认相对字号
			fontSizeBase: string | number,
			// 默认相对字号fontSizeBase倍数
			fontSizeScale: 1,
			buttonRadius: number | string,

			sheetRadius: number | string | Array<string | number>,
			sheetShadow: number | string | Array<string>,
			sheetMargin: number | string | Array<string | number>,
			sheetPadding: number | string | Array<string | number>,

			//列表默认的圆角。
			cellRadius: number | string | Array<string | number>,

			/** 一般容器sheet的暗黑背景 */
			sheetDarkColor: string,
			/** 一般容器边线颜色如果你布局自己写了默认的边线色，但忘记填写组件上的暗黑线时，会取这里的值 */
			sheetDarkBorderColor: string[],

			/** 输入框,表单，常规灰背景待统一的二级暗黑背景 */
			inputDarkColor: string,
			/**输入框默认全局的亮系背景. */
			inputLightColor: string,
			/**输入框全局圆角 */
			inputRadius: number | string | Array<string | number>,
			/** 一般的表单，列表底的暗黑统一边线颜色 */
			borderDarkColor: string,
			/**对话框圆角 */
			modalRadius: number | string,
			/**形状圆角 */
			switchRadius: number | string,
			/**抽屉圆角 */
			drawerRadius: number | string,
			unRadioAndCheckBoxColor: string,

			/**部分组件统一的动画差值。 */
			animation: string,

			backgroundColorContentDark: string,

			/** 默认图片预览是否开启 */
			previewImage: boolean,
			/** drawer,modal弹层默认的按钮是否是半圆，如果关闭就是1.x的风格 */
			modalActionsHalfRound: boolean,
			/** 统一的按钮投影[x,y,blur]，建议值：[0,3,10],另外由于布局因此，投影它需要padding来空出投影值否则被裁剪 */
			buttonShadow: Array<number|string>,
			/** 统一的按钮投影[x,y,blur]，建议值：[0,3,10],另外由于布局因此，投影它需要padding来空出投影值否则被裁剪 */
			tagShadow: Array<number|string>
		}
		export type tmDateDayInfoType = {
			/** 年 */
			year: number,
			/** 月0-11 */
			month: number,
			/** 天 */
			day: number,
			/** 小时0-23 */
			hours: number,
			/** 分钟0-59 */
			minutes: number,
			/** 秒0-59 */
			seconds: number,
			/** 本年的第几周 */
			weeks: number,
			/** 本周星期几 */
			week: number,
			/** 本周星期几,中文名称 */
			weekCn: string,
			/** 格式化的日期字符串 */
			date: string,
			/** 是否渲染显示 */
			isRender?: boolean
		}

		/**
		 * 上传的文件类型
		 */
		export type TMUPLOAD_PHOTO_INFO = {
			id: string,
			/** 文件大小 */
			size?: number,
			/** 文件路径 */
			path: string,
			url?: string,
			progress: number,
			statusText: string,
			status: TMUPLOAD_PHOTO_STATUS,
			response: any
		}
		export type FORM_RULE_TYPE = {
			/** 校验正则,如果同时提供了valid,以valid为准,默认为null */
			rule: RegExp | null,
			/** 校验失败提示,默认提示词:请正在选择/填写 */
			message: string,
			/**校验函数,如果不提供,默认以min,max来判断. */
			validator: null | ((val: any) => boolean),
			/**
			 * 如果校验的值类型是数字是起作用,默认为1,至少要大于0
			 * 如果预期是数组,那长度至少要大于0
			 * 如果是字符串,长度要大于0
			 */
			min: number,
			//默认为-1最长/大值不限制
			max: number,
			//预期值的类型,如果不提供自动推断，不提供默认是auto
			type: "string" | "number" | "array" | "boolean" | "date" | "email" | "phone" | "auto",
			//必填项,是否校验本值
			required: boolean
		}
		export type FORM_RULE = { [Property in keyof FORM_RULE_TYPE]?: FORM_RULE_TYPE[Property] } & { required: boolean }
		export type FORM_RESULT_TYPE = { key: string, isPass: boolean, message: string, data: any }
		export type FORM_SUBMIT_RESULT = {
			/**是否校验通过 */
			isPass: boolean,
			/**校验不通过的第一条信息 */
			firstValid: FORM_RESULT_TYPE | null,
			/**校验结果集 */
			result: FORM_RESULT_TYPE[]
		}

		export type SKU_DATA_ITEM = {
			/** 产品id */
			id: string | number,
			/** 分类/规格名称 */
			title: string,
			/** 库存数量 */
			inventory_quantity?: number,
			/** 规格数组 */
			children?: Array<SKU_DATA_ITEM>,
			/** 自定义数据 */
			[p: string]: any
		}
		export type SKU_PRODUCT = {
			/** 唯一id值,必须是规格产品id组合,以 - 连接符连接,比如22-23-24 */
			id: string | number,
			/** 产品图片 */
			img: string,
			/** 库存数量 */
			inventory_quantity: number,
			/** 最大购买量 */
			max_buy_quantity: number,
			/** 最小购买量 */
			min_buy_quantity: number,
			/** 产品原价 */
			original_price: number,
			/** 产品现行售价 */
			price: number,
			/** 产品规格名称 */
			title: string,
			/** 自定义数据 */
			[p: string]: any
		}
		export type SKU_DATA = {
			/** 规格分组产品 */
			data: Array<SKU_DATA_ITEM>,
			/** 平铺产品列表 */
			product: SKU_PRODUCT[] | null
		}

		/**
		 * 底部导航项目信息tabbar
		 */
		export type TABBAR_ITEM_INFO = {
			/**
			 * 标题
			 * @type {string}
			 */
			title?: string;
			/**
			 * 图标
			 * @type {string}
			 */
			icon?: string;
			/**
			 * 被选中时的图标
			 * @type {string}
			 */
			selectedIcon?: string;
			/**
			 * 是否禁用
			 * @type {boolean}
			 */
			disabled?: boolean;

			/**
			 * 默认颜色
			 * @type {string}
			 */
			color?: string;
			/**
			 * 选中时的颜色
			 * @type {string}
			 */
			selectedColor?: string;

			/**
			 * 打开方式
			 * @type {NAVIGATE_TYPE}
			 */
			openType?: NAVIGATE_TYPE;
			/**
			 * 链接地址
			 * @type {string}
			 */
			url?: string;
			/**
			 * 是否显示角标。如果为dot，dotLabel不为空优先展示文本角标
			 * dot,
			 * label
			 */
			dotType?: string,
			/**
			 * 文本角标。空不展示。
			 */
			dotLabel?: string
		}

		export type TABBAR_ITEM = {
			title: string,
			icon: string,
			selectedIcon: string,
			disabled: boolean,
			color: string,
			selectedColor: string,
			openType: string,
			url: string,
			/**
			 * 是否显示角标。如果为dot，dotLabel不为空优先展示文本角标
			 * dot,
			 * label
			 */
			dotType?: string,
			/**
			 * 文本角标。空不展示。
			 */
			dotLabel?: string
		}


		/**
		 * 日期的对象属性
		 */
		export type xDateDayInfoType = {
			/** 年 */
			year: number,
			/** 月0-11 */
			month: number,
			/** 天 */
			day: number,
			/** 小时0-23 */
			hours: number,
			/** 分钟0-59 */
			minutes: number,
			/** 秒0-59 */
			seconds: number,
			/** 本年的第几周 */
			weeks: number,
			/** 本周星期几 */
			week: number,
			/** 本周星期几,中文名称 */
			weekCn: string,
			/** 格式化的日期字符串 */
			date: string,
			/** 是否渲染显示 */
			isRender?: boolean
		}

		/**
		 * 日历单个日期的样式对象
		 */
		export type tmCalendarDateStyle_type = {
			/** 是否显示右角标 */
			dot?: boolean,
			/** 右角标背景颜色 */
			dotColor?: string,
			/** 右角标文字颜色 */
			dotLabelColor?: string,
			/** 注意如果dot为true，此内容为空就会显示小圆点。如果有内容优先显示本文本 */
			dotLabel?: string,
			/** 底部文本 */
			label?: string,
			/** 背景颜色 */
			color?: string,
			/** 日期文字颜色 */
			fontColor?: string,
			/** 设置的日期 */
			date: string
		}

		export type tmCalendarDateStyleStatus = {
			date: string,
			color: string
		}

		export type tmCalendarDateStyleBetweenStatus = {
			/** 指定了start和end，那么处于这两个日期（含起始）之间的会显示状态点 */
			start?: string,
			/** 指定了start和end，那么处于这两个日期（含起始）之间的会显示状态点 */
			end?: string,
			/** start和end间条件达成时的状态颜色 */
			color?: string,
			/* 区间内排除的指定日期 */
			notDate?: string[],
		}
		/**
		 * 状态结构对象
		 */
		export type tmCalendarDateStyleStatusType = {
			/** 启用日期区间设置连续性的状态,它与下面的参数不冲突，如果日期不在区间内，但又在指定的日期内，也会启用状态显示。 */
			between?: tmCalendarDateStyleBetweenStatus,
			/** 指定单独的日期状态,高于between优先权 */
			date?: tmCalendarDateStyleStatus[]
		}

	}
}
export { }

