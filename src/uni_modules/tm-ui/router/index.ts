/**
 * tm-ui 路由守卫插件
 *
 * 功能：
 * - 对 navigateTo / redirectTo / reLaunch / switchTab 注册鉴权拦截
 * - 支持 whitelist（默认全部需要鉴权，list 中免鉴权）和 authlist（默认全部免鉴权，list 中需要鉴权）两种模式
 * - 通过 app.mixin onShow 拦截原生底部导航栏点击（uni.addInterceptor 无法拦截原生 tabBar 点击）
 * - 导出便捷 router 实例用于编程式导航
 *
 * @example
 * ```ts
 * import tmRouter, { router } from '@/uni_modules/tm-ui/router'
 *
 * app.use(tmRouter, {
 *     loginPage: '/pages/login/index',
 *     mode: 'whitelist',
 *     list: ['/pages/index/index', '/pages/login/index'],
 *     tabBarPages: ['/pages/index/index', '/pages/my/index'],
 * })
 * ```
 */

// ─── 类型定义 ───────────────────────────────────────────────

export interface TmRouterConfig {
	/** 登录页路径，如 '/pages/login/index' */
	loginPage: string;
	/** token 在本地存储中的 key，默认 'token' */
	tokenKey?: string;
	/**
	 * 鉴权模式
	 * - whitelist：默认所有页面需要鉴权，list 中的页面免鉴权
	 * - authlist：默认所有页面免鉴权，仅 list 中的页面需要鉴权
	 */
	mode?: 'whitelist' | 'authlist';
	/** 白名单或鉴权列表（路径格式与 pages.json 一致，带不带 '/' 前缀均可） */
	list?: string[];
	/** 自定义鉴权函数，返回 true 表示有权限；默认检查 uni.getStorageSync(tokenKey) */
	authCheck?: () => boolean;
	/** tabBar 页面路径列表，用于原生底部导航栏点击拦截 */
	tabBarPages?: string[];
	/** 鉴权失败时的自定义回调；不提供则默认 reLaunch 到 loginPage 并携带 redirect 参数 */
	onDenied?: (url: string) => void;
}

/**
 * beforeEach 守卫函数
 * @param to   - 目标页面路径（已归一化，含 '/' 前缀）
 * @param from - 当前页面路径（已归一化，含 '/' 前缀；首次导航时为空字符串）
 * @returns
 *   - true / undefined / void → 放行
 *   - false → 阻止导航
 *   - string → 重定向到该路径
 */
export type BeforeEachGuard = (to: string, from: string) => boolean | string | void;

interface ResolvedConfig {
	loginPage: string;
	tokenKey: string;
	mode: 'whitelist' | 'authlist';
	list: string[];
	authCheck: () => boolean;
	tabBarPages: string[];
	onDenied: ((url: string) => void) | null;
}

// ─── 内部状态 ────────────────────────────────────────────────

let _config: ResolvedConfig = {
	loginPage: '/pages/login/index',
	tokenKey: 'token',
	mode: 'whitelist',
	list: [],
	authCheck: () => !!uni.getStorageSync('token'),
	tabBarPages: [],
	onDenied: null,
};

let _initialized = false;
let _programmaticSwitch = false;
const _beforeEachGuards: BeforeEachGuard[] = [];
let _redirecting = false;

// ─── 工具函数 ────────────────────────────────────────────────

function normalizePath(url: string): string {
	let path = url.split('?')[0].split('#')[0];
	if (!path.startsWith('/')) path = '/' + path;
	return path;
}

function serializeParams(params?: Record<string, any>): string {
	if (!params) return '';
	const keys = Object.keys(params);
	if (keys.length === 0) return '';
	return '?' + keys
		.map(k => `${encodeURIComponent(k)}=${encodeURIComponent(String(params[k]))}`)
		.join('&');
}

function _getCurrentRoute(): string {
	const pages = getCurrentPages();
	if (pages.length === 0) return '';
	return '/' + (pages[pages.length - 1].route || '');
}

// ─── 守卫核心 ────────────────────────────────────────────────

function _isLoginPage(url: string): boolean {
	return normalizePath(url) === normalizePath(_config.loginPage);
}

function _needsAuth(url: string): boolean {
	const path = normalizePath(url);
	if (_isLoginPage(path)) return false;

	const inList = _config.list.some(p => normalizePath(p) === path);

	if (_config.mode === 'whitelist') {
		return !inList;
	}
	return inList;
}

function _checkAuth(): boolean {
	return _config.authCheck();
}

function _handleDenied(url: string): void {
	if (_config.onDenied) {
		_config.onDenied(url);
		return;
	}
	const redirect = encodeURIComponent(url);
	_redirecting = true;
	uni.reLaunch({
		url: `${_config.loginPage}?redirect=${redirect}`,
	});
	_redirecting = false;
}

function _runBeforeEach(to: string): boolean | string {
	if (_beforeEachGuards.length === 0) return true;
	const from = _getCurrentRoute();
	const toPath = normalizePath(to);
	for (let i = 0; i < _beforeEachGuards.length; i++) {
		const result = _beforeEachGuards[i](toPath, from);
		if (result === false) return false;
		if (typeof result === 'string') return result;
	}
	return true;
}

function _guard(url: string): boolean {
	if (_redirecting) return true;

	const beforeResult = _runBeforeEach(url);
	if (beforeResult === false) return false;
	if (typeof beforeResult === 'string') {
		_redirecting = true;
		uni.reLaunch({ url: beforeResult });
		_redirecting = false;
		return false;
	}

	if (_isLoginPage(url)) return true;
	if (!_needsAuth(url)) return true;
	if (_checkAuth()) return true;
	_handleDenied(url);
	return false;
}

// ─── 导出：router 实例 ──────────────────────────────────────

export const router = {
	push(url: string, params?: Record<string, any>) {
		uni.navigateTo({ url: url + serializeParams(params) });
	},
	replace(url: string, params?: Record<string, any>) {
		uni.redirectTo({ url: url + serializeParams(params) });
	},
	reLaunch(url: string, params?: Record<string, any>) {
		uni.reLaunch({ url: url + serializeParams(params) });
	},
	switchTab(url: string) {
		uni.switchTab({ url });
	},
	back(delta: number = 1) {
		uni.navigateBack({ delta });
	},
	isAuthenticated(): boolean {
		return _checkAuth();
	},
	/**
	 * 注册前置守卫，在 authCheck 之前执行；可注册多个，按顺序执行
	 * @returns 取消注册函数
	 * @example
	 * ```ts
	 * // 已登录用户访问登录页 → 重定向首页
	 * const unregister = router.beforeEach((to, from) => {
	 *     if (to === '/pages/login/index' && router.isAuthenticated()) {
	 *         return '/pages/index/index'
	 *     }
	 * })
	 *
	 * // VIP 页面权限检查
	 * router.beforeEach((to) => {
	 *     if (to.startsWith('/pages/vip/') && !useUserStore().isVip) {
	 *         uni.showToast({ title: '需要VIP权限', icon: 'none' })
	 *         return false
	 *     }
	 * })
	 * ```
	 */
	beforeEach(guard: BeforeEachGuard): () => void {
		_beforeEachGuards.push(guard);
		return () => {
			const idx = _beforeEachGuards.indexOf(guard);
			if (idx !== -1) _beforeEachGuards.splice(idx, 1);
		};
	},
	/**
	 * 更新鉴权函数（可在 Pinia store 初始化后调用，内部可安全使用 useStore）
	 * @example
	 * ```ts
	 * import { useUserStore } from '@/stores/user'
	 * router.setAuthCheck(() => !!useUserStore().token)
	 * ```
	 */
	setAuthCheck(fn: () => boolean) {
		_config.authCheck = fn;
	},
	/**
	 * 运行时更新任意配置项
	 * @example
	 * ```ts
	 * router.setConfig({
	 *     authCheck: () => !!useUserStore().token,
	 *     list: ['/pages/index/index', '/pages/about/index'],
	 * })
	 * ```
	 */
	setConfig(partial: Partial<TmRouterConfig>) {
		if (partial.loginPage !== undefined) _config.loginPage = partial.loginPage;
		if (partial.tokenKey !== undefined) _config.tokenKey = partial.tokenKey;
		if (partial.mode !== undefined) _config.mode = partial.mode;
		if (partial.list !== undefined) _config.list = partial.list;
		if (partial.authCheck !== undefined) _config.authCheck = partial.authCheck;
		if (partial.tabBarPages !== undefined) _config.tabBarPages = partial.tabBarPages;
		if (partial.onDenied !== undefined) _config.onDenied = partial.onDenied;
	},
};

// ─── 导出：Vue 插件 ─────────────────────────────────────────

export default {
	// @ts-ignore
	install(app: App, config: TmRouterConfig) {
		if (_initialized) return;
		_initialized = true;

		const tokenKey = config.tokenKey || 'token';
		_config = {
			loginPage: config.loginPage || '/pages/login/index',
			tokenKey,
			mode: config.mode || 'whitelist',
			list: config.list || [],
			authCheck: config.authCheck || (() => !!uni.getStorageSync(tokenKey)),
			tabBarPages: config.tabBarPages || [],
			onDenied: config.onDenied || null,
		};

		const interceptedMethods = ['navigateTo', 'redirectTo', 'reLaunch'] as const;
		for (const method of interceptedMethods) {
			uni.addInterceptor(method, {
				invoke(params: any) {
					if (!_guard(params.url)) return false;
				},
			});
		}

		uni.addInterceptor('switchTab', {
			invoke(params: any) {
				_programmaticSwitch = true;
				if (!_guard(params.url)) {
					_programmaticSwitch = false;
					return false;
				}
			},
		});

		if (_config.tabBarPages.length > 0) {
			app.mixin({
				onShow() {
					if (_programmaticSwitch) {
						_programmaticSwitch = false;
						return;
					}
					if (_config.tabBarPages.length === 0) return;
					const pages = getCurrentPages();
					if (pages.length === 0) return;
					const currentPage = pages[pages.length - 1];
					const currentRoute = '/' + (currentPage.route || '');
					const isTabBar = _config.tabBarPages.some(p => normalizePath(p) === currentRoute);
					if (!isTabBar) return;
					if (!_needsAuth(currentRoute)) return;
					if (_checkAuth()) return;
					_handleDenied(currentRoute);
				},
			});
		}
	},
};
