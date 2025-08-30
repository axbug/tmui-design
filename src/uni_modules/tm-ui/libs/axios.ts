// 类型定义
interface AxiosRequestConfig {
    url?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'TRACE' | 'CONNECT';
    baseURL?: string;
    headers?: Record<string, string>;
    params?: any;
    data?: any;
    timeout?: number;
    responseType?: 'text' | 'arraybuffer';
    dataType?: string;
    validateStatus?: (status: number) => boolean;
    useCache?: boolean; // 是否使用缓存
    cacheTime?: number; // 缓存时间（毫秒），默认为60000（1分钟）
    /**
     * 服务返回的数据结构中的data.code字段中包含下面哪些值表示成功，并启用缓存。
     * 默认值为：[200,0]
     */
    successCode?: number[],

    [key: string]: any;
}

interface AxiosResponse<T = any> {
    data: T;
    status: number;
    statusText: string | undefined;
    headers: Record<string, string>;
    config: AxiosRequestConfig;
}

// 拦截器管理器接口
interface AxiosInterceptorManager<V> {
    use(onFulfilled ?: (value: V) => V | Promise<V>, onRejected ?: (error: any) => any): number;

    eject(id: number): void;
}

// Axios 实例接口
interface AxiosInstance {
    defaults: AxiosRequestConfig;
    interceptors: {
        request: AxiosInterceptorManager<AxiosRequestConfig>;
        response: AxiosInterceptorManager<AxiosResponse>;
    };

    <T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    <T = any>(url: string, config ?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    get<T = any>(url: string, config ?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    delete<T = any>(url: string, config ?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    head<T = any>(url: string, config ?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    options<T = any>(url: string, config ?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    post<T = any>(url: string, data ?: any, config ?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    put<T = any>(url: string, data ?: any, config ?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    patch<T = any>(url: string, data ?: any, config ?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}

// Axios 静态接口
interface AxiosStatic extends AxiosInstance {
    defaults: AxiosRequestConfig;
    interceptors: {
        request: AxiosInterceptorManager<AxiosRequestConfig>;
        response: AxiosInterceptorManager<AxiosResponse>;
    };

    create(config ?: AxiosRequestConfig): AxiosInstance;
}

// 拦截器接口
interface Interceptor<V> {
    fulfilled: ((value: V) => V | Promise<V>) | null;
    rejected: ((error: any) => any) | null;
}

// 拦截器管理器类
class InterceptorManager<V> implements AxiosInterceptorManager<V> {
    private handlers: Array<Interceptor<V> | null> = [];

    use(onFulfilled ?: (value: V) => V | Promise<V>, onRejected ?: (error: any) => any): number {
        this.handlers.push({
            fulfilled: onFulfilled || null,
            rejected: onRejected || null
        });
        return this.handlers.length - 1;
    }

    eject(id: number): void {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    }

    forEach(fn: (h: Interceptor<V>) => void|Promise<any>): void {
        this.handlers.forEach(async h => {
            if (h !== null) {
                await fn(h);
            }
        });
    }
    clear(): void {
        this.handlers = [];
    }
}


// defaultConfig

const defaultAxiosConfig: AxiosRequestConfig = {
    baseURL: '',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: 'text',
    validateStatus: (status: number) => status >= 200 && status < 300,
    useCache: false,
    cacheTime: 60000,
};

// 确保值是Object对象
const isObject = (val: any): boolean => {
    if (typeof val !== 'object' || val == null || val == undefined || Array.isArray(val)) {
        return false;
    }
    const prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
};

// 合并配置
function mergeConfig(config1: AxiosRequestConfig, config2: AxiosRequestConfig = {}): AxiosRequestConfig {
    const config: AxiosRequestConfig = {};

    function getMergedValue(target: any, source: any) {
        if (isObject(target) && isObject(source)) {
            return {...target, ...source};
        } else if (source !== undefined) {
            return source;
        } else {
            return target;
        }
    }

    ['url', 'method', 'params', 'data', 'useCache', 'cacheTime', 'successCode'].forEach((prop) => {
        config[prop] = getMergedValue(config1[prop], config2[prop]);
    });

    config.headers = getMergedValue(config1.headers, config2.headers);
    config.baseURL = config2.baseURL || config1.baseURL;
    config.timeout = config2.timeout || config1.timeout;

    return config;
}

// 缓存管理器
class CacheManager {
    private cache: Record<string, { data: any; timestamp: number }> = {};

    constructor() {
        this.cache = uni.getStorageSync('AxiosCaches') || {};
    }

    // 生成缓存键
    generateCacheKey(config: AxiosRequestConfig): string {
        const {url, method} = config;
        let keyQ = url?.split('?')[0] ?? url
        // 简化缓存键生成，避免复杂对象序列化可能导致的不一致
        let key = `${method || 'GET'}_${keyQ}`;

        // 对params进行处理，只取关键字段作为键的一部分
        if (config.params) {
            // 将params转为排序后的字符串
            const paramKeys = Object.keys(config.params).sort();
            const paramValues = paramKeys.map(k => {
                const val = config.params[k];
                // 简单类型直接使用，复杂类型使用类型标识
                return typeof val === 'object' ? (Array.isArray(val) ? 'array' : 'object') : val;
            });
            key += `_p:${paramKeys.join(',')}-${paramValues.join(',')}`;
        }

        // 对data进行类似处理
        if (config.data) {
            // 如果是简单类型，直接使用
            if (typeof config.data !== 'object') {
                key += `_d:${config.data}`;
            } else {
                // 对于对象，只使用键名作为缓存键的一部分
                const dataKeys = Object.keys(config.data).sort();
                key += `_d:${dataKeys.join(',')}`;
            }
        }

        return key;
    }

    // 设置缓存
    set(config: AxiosRequestConfig, response: any): void {
        const key = this.generateCacheKey(config);
        this.cache[key] = {
            data: response,
            timestamp: Date.now()
        };

        try {
            uni.setStorageSync('AxiosCaches', this.cache);
        } catch (error) {
            // 如果存储失败，可能是缓存太大，清理一部分
            this.pruneCache();
            try {
                uni.setStorageSync('AxiosCaches', this.cache);
            } catch (e) {
                console.error('二次缓存设置失败');
            }
        }
    }

    // 获取缓存
    get(config: AxiosRequestConfig): any | null {
        const key = this.generateCacheKey(config);
        const cacheItem = this.cache[key];

        if (!cacheItem) return null;

        const cacheTime = config.cacheTime || 60000; // 默认1分钟
        const now = Date.now();

        // 检查缓存是否过期
        if (now - cacheItem.timestamp > cacheTime) {
            delete this.cache[key];
            return null;
        }

        // console.log('命中缓存:', key);
        return cacheItem.data;
    }

    // 清除缓存
    clear(): void {
        this.cache = {};
        uni.removeStorageSync('AxiosCaches');
    }

    private normalizeObject(obj: any): any {
        // 如果不是对象或为null，直接返回
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }

        // 如果是数组，对每个元素进行规范化
        if (Array.isArray(obj)) {
            return obj.map(item => this.normalizeObject(item));
        }

        // 如果是普通对象，对属性进行排序
        const sortedKeys = Object.keys(obj).sort();
        const result: Record<string, any> = {};

        // 按照排序后的键重新构建对象
        for (const key of sortedKeys) {
            // 过滤掉undefined和null值，减少不必要的差异
            if (obj[key] !== undefined && obj[key] !== null) {
                result[key] = this.normalizeObject(obj[key]);
            }
        }

        return result;
    }

    // 清理部分缓存
    private pruneCache(): void {
        const keys = Object.keys(this.cache);
        if (keys.length > 20) { // 如果缓存项超过20个
            // 按时间戳排序，删除最旧的一半
            const sortedKeys = keys.sort((a, b) =>
                this.cache[a].timestamp - this.cache[b].timestamp
            );

            const toRemove = sortedKeys.slice(0, Math.floor(keys.length / 2));
            toRemove.forEach(key => delete this.cache[key]);
            console.log(`已清理${toRemove.length}个旧缓存项`);
        }
    }
}

// 主要请求类
class Axios {
    defaults: AxiosRequestConfig;
    interceptors: {
        request: InterceptorManager<AxiosRequestConfig>;
        response: InterceptorManager<AxiosResponse>;
    };
    private cacheManager: CacheManager;

    constructor(defaultConfig ?: AxiosRequestConfig) {
        this.defaults = defaultConfig ?? defaultAxiosConfig;
        this.interceptors = {
            request: new InterceptorManager<AxiosRequestConfig>(),
            response: new InterceptorManager<AxiosResponse>()
        };
        this.cacheManager = new CacheManager();
    }

    request<T = any>(configOrUrl: string | AxiosRequestConfig, config ?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        if (typeof configOrUrl === 'string') {
            config = config || {};
            config.url = configOrUrl;
        } else {
            config = configOrUrl;
        }

        // 合并配置
        config = mergeConfig(this.defaults, config);

        // 确保有 method
        config.method = (config.method || 'get').toUpperCase() as any;

        // 处理 baseURL
        if (config.baseURL && config.url && !config.url.startsWith('http')) {
            config.url = config.baseURL.replace(/\/+$/, '') + '/' + config.url.replace(/^\/+/, '');
        }

        // 检查是否使用缓存,只针对post及get方式进行缓存.
        if (config.useCache && (config.method === 'GET' || config.method === 'POST')) {
            // 尝试从缓存获取响应
            const cachedResponse = this.cacheManager.get(config);

            if (cachedResponse) {
                console.info('缓存接口:', config.url)
                return Promise.resolve(cachedResponse);
            }
        }

        // 执行请求处理链
        let promise = Promise.resolve(config);

      
        const processRequest = (config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
            return new Promise((resolve, reject) => {
                if (!config.url) {
                    reject(new Error('URL is required'));
                    return;
                }

                // 处理查询参数
                if (config.params) {
                    const queryString = Object.entries(config.params)
                        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
                        .join('&');
                    config.url += (config.url.includes('?') ? '&' : '?') + queryString;
                }
                const cachedResponse = this.cacheManager
                uni.request({
                    url: config.url,
                    method: config.method as any,
                    data: config.data,
                    header: config.headers,
                    timeout: config.timeout,
                    dataType: config.dataType || 'json',
                    responseType: config.responseType as any,
                    success: (res) => {
                        const response: AxiosResponse<T> = {
                            data: res.data as T,
                            status: res.statusCode,
                            statusText: res.errMsg,
                            headers: res.header as Record<string, string>,
                            config: config
                        };

                        const validateStatus = config.validateStatus || ((status: number) => status >= 200 && status < 300);

                        if (!validateStatus(response.status)) {
                            reject(new Error(`Request failed with status code ${response.status}`));
                        } else {
                            //设置请求数据缓存
                            if (config.useCache && (config.method === 'GET' || config.method === 'POST')) {
                                // 根据设置的请求code进行缓存，因为每个人有服务器数据成功code不一样.
                                const codes = config.successCode || [];

                                if (codes.length > 0) {
                                    let serverDataCode = (response.data as any)?.code ?? null;
                                    if (typeof serverDataCode == 'number') {
                                        if (codes.some(el => el == serverDataCode)) {
                                            cachedResponse.set(config, response);
                                        }
                                    }
                                }
                            }
                            resolve(response);
                        }
                    },
                    fail: (err) => {
                        reject(new Error(err.errMsg));
                    }
                });
            });
        };

        // 构建请求链
        const chain: Array<any> = [];

        // 添加请求拦截器
        this.interceptors.request.forEach(interceptor => {
            chain.unshift(interceptor.fulfilled, interceptor.rejected);
        });

        // 添加实际请求处理函数
        chain.push(processRequest, undefined);

        // 添加响应拦截器
        this.interceptors.response.forEach(interceptor => {
            chain.push(interceptor.fulfilled, interceptor.rejected);
        });

        // 执行请求链
        while  (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
        }
        // 每次请求完后清除拦截器,以避免重复执行.
        this.interceptors.request.clear();
        this.interceptors.response.clear();
        return promise as Promise<AxiosResponse<T>>;
    }

    get<T = any>(url: string, config ?: AxiosRequestConfig & {
        useCache?: boolean,
        cacheTime?: number
    }): Promise<AxiosResponse<T>> {
        return this.request<T>({
            ...config,
            method: 'GET',
            url,
            useCache: config?.useCache,
            cacheTime: config?.cacheTime
        });
    }

    post<T = any>(url: string, data ?: any, config ?: AxiosRequestConfig & {
        useCache?: boolean,
        cacheTime?: number
    }): Promise<AxiosResponse<T>> {
        return this.request<T>({
            ...config,
            method: 'POST',
            url,
            data,
            useCache: config?.useCache,
            cacheTime: config?.cacheTime
        });
    }

    put<T = any>(url: string, data ?: any, config ?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.request<T>({...config, method: 'PUT', url, data});
    }

    delete<T = any>(url: string, config ?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.request<T>({...config, method: 'DELETE', url});
    }

    clear() {
        uni.removeStorageSync("AxiosCaches")
    }
}


export default Axios;

// 导出类型定义
export type {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosInstance,
    AxiosStatic,
    AxiosInterceptorManager
};