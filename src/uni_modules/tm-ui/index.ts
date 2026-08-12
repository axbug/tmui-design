import { createI18nFun } from "./local/i18nStore";
import Axios from "./libs/axios";
import type {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosInstance,
    AxiosStatic,
    AxiosInterceptorManager
} from "./libs/axios";
import { reactive } from "vue";
import { setConfig } from "./libs/config";

let $i18nv1 = createI18nFun()
let $i18n: TM.I18nGlobal = $i18nv1.global as TM.I18nGlobal


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
    install: (app: App, options?: Partial<TM.THEME_CONFIG>) => {
		$i18nv1 = createI18nFun(options?.i18n)
		$i18n = $i18nv1.global as TM.I18nGlobal
        app.use($i18nv1);
        const temcfg = {...options}
        if(temcfg?.i18n){
            delete temcfg.i18n
        }
        setConfig(temcfg)
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

export { 
    $i18n,
    Axios,
    setConfig
}