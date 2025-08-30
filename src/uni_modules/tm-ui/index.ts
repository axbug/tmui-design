import { i18n } from "./local/i18nStore";
import Axios from "./libs/axios";
import type {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosInstance,
    AxiosStatic,
    AxiosInterceptorManager
} from "./libs/axios";

let $i18n = i18n()

export { $i18n,Axios }
// 导出类型定义
export type {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosInstance,
    AxiosStatic,
    AxiosInterceptorManager
};
export default {
    /**
     * tmui3.2.x
     * @param app Vue
     * @param options tmui3.0配置
     */
    // @ts-ignore
    install: (app: App, options: TM.THEME_CONFIG | null = null) => {
		$i18n = i18n(options?.i18n)
		console.log('[tm-ui] 欢迎使用极具精致的UniApp组件包');
        app.mixin({
            onReady() {

            },
            onResize() {
                uni.$emit("onResize")
            },
            onPageScroll(e: any) {
                const pages = getCurrentPages();
                let page = undefined
                if (pages.length > 0) {
                    page = pages[pages.length - 1]?.route || undefined
                }
                uni.$emit("onPageScroll", { scrollTop: e.scrollTop, page: page })
            }
        })
    }
};