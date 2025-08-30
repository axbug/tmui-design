// 白名单页面路径
const whiteList = [];

export const invokeRouter = () => {
    // 页面权限判断函数
    const checkPagePermission = (url: string): boolean => {
        // 如果在白名单中，直接返回true
        // if (whiteList.some(page => url.indexOf(page) !== -1)) {
        //     return true;
        // }
        // 获取用户token，判断是否登录
        // const token = uni.getStorageSync('token');
        // if (!token) {
        //     uni.navigateTo({
        //         url: '/pages/login/index'
        //     });
        //     return false;
        // }

        return true;
    };

    // 添加路由拦截器
    uni.addInterceptor('navigateTo', {
        invoke(params) {
            return checkPagePermission(params.url);
        },
        fail(err) {
            console.error('路由拦截器错误:', err);
            uni.showToast({
                title: '页面访问失败',
                icon: 'none'
            });
        }
    });

    uni.addInterceptor('redirectTo', {
        invoke(params) {
            return checkPagePermission(params.url);
        },
        fail(err) {
            console.error('路由拦截器错误:', err);
            uni.showToast({
                title: '页面访问失败',
                icon: 'none'
            });
        }
    });

    uni.addInterceptor('reLaunch', {
        invoke(params) {
            return checkPagePermission(params.url);
        },
        fail(err) {
            console.error('路由拦截器错误:', err);
            uni.showToast({
                title: '页面访问失败',
                icon: 'none'
            });
        }
    });

    uni.addInterceptor('switchTab', {
        invoke(params) {
            return checkPagePermission(params.url);
        },
        fail(err) {
            console.error('路由拦截器错误:', err);
            uni.showToast({
                title: '页面访问失败',
                icon: 'none'
            });
        }
    });

}

export default {
    // @ts-ignore
    install: (app: App, opts: { showPagePathLog: boolean }) => {
        app.mixin({
            onShareAppMessage(){
                return {}
            },
            onShareTimeline(){
                return {}
            },
            onReady() {
                uni.$emit('onReady')
                if (opts.showPagePathLog) {
                    const pages = getCurrentPages();
                    if (pages.length > 0) {
                        const currentPage = pages[pages.length - 1];
                        const currentRoute = currentPage.route;
                        console.info(`当前页面路径：${currentRoute}`);
                    }
                }

            }
        })
    }
}
