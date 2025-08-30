import {Axios, AxiosInstance, AxiosResponse } from "@/uni_modules/tm-ui"
// 不需要授权的api接口.
const whiteApiNoAuth : string[] = []

// 是否正在进行微信授权
let isWxAuthorizing = false;
let pendingRequests : Array<{ resolve : Function, reject : Function, config : any }> = [];

// 微信自动登录授权函数,也可以改成其它需要刷新token等需求功能。
const wxAutoLogin = async () : Promise<string> => {
	return new Promise((resolve, reject) => {
		// 如果已经在授权中，直接返回
		if (isWxAuthorizing) {
			reject(new Error('正在授权中，请稍候'));
			return;
		}
		isWxAuthorizing = true;
		// 微信登录
		uni.login({
			provider: 'weixin',
			success: (loginRes) => {
				uni.request({
					// 自动授权的api组合名称。
					url: uni.apiHostUrl + '/user/auth/wxcode',
					method: 'POST',
					data: {
						code: loginRes.code
					},
					success: (res : any) => {
						if (res.data && res.data.code == 0) {
							const token = res.data.data;
							uni.setStorageSync('token', token);
							isWxAuthorizing = false;
							resolve(token);
						} else {
							isWxAuthorizing = false;
							reject(new Error(res.data?.msg || '登录失败'));
						}
					},
					fail: (err) => {
						isWxAuthorizing = false;
						reject(err);
					}
				});
			},
			fail: (err) => {
				console.error('微信登录失败:', err);
				isWxAuthorizing = false;
				reject(err);
			}
		});
	});
};

// 处理挂起的请求队列
const processPendingRequests = () => {
	const requests = [...pendingRequests];
	pendingRequests = [];
	requests.forEach(({ resolve, reject, config }) => {
		try {
			resolve();
		} catch (err) {
			console.error('处理挂起请求失败:', err);
			reject(err);
		}
	});
};
export const axiosCreateInstance = () => {
	return new Axios({
		baseURL: uni.apiHostUrl,
		timeout: 5000,
		useCache: false,
		cacheTime: 60000,
		successCode: [0],
		headers: {
			'Content-Type': 'application/json'
		}
	}) as unknown as AxiosInstance
}

export const ApiRequestSet = (opts ?: { showLoading ?: boolean, showError ?: boolean, showSuccess ?: boolean }) => {
	const defaultOpts = {
		showLoading: true,
		showError: true,
		showSuccess: false,
		...(opts || {})
	}
	// 请求前处理后的拦截器
	uni.axios.interceptors.request.use(async (config) => {
		const isWhiteName = whiteApiNoAuth.some((o) => (config.url || "").toLowerCase().indexOf(o.toLowerCase()) > -1)

		// 白名单接口不需要token
		if (isWhiteName) {
			config!.headers!['token'] = ""
			if (defaultOpts.showLoading) {
				uni.showLoading({
					title: '加载中',
					mask: true
				})
			}
			return config
		}
		let token = uni.getStorageSync('token')
		// 如果没有token且不在白名单中，需要进行微信授权
		if (!token) {
			// 如果正在授权中，将请求加入队列并返回一个Promise
			if (isWxAuthorizing) {
				return new Promise((resolve, reject) => {
					pendingRequests.push({
						resolve: () => {
							// 设置token到config中
							config.headers!['token'] = uni.getStorageSync('token');
							resolve(config);
						},
						reject,
						config
					});
				});
			}

			try {
				// 进行微信自动登录
				token = await wxAutoLogin();
				// 授权成功后，处理挂起的请求
				processPendingRequests();
			} catch (error) {
				console.error('微信授权失败:', error);
				// 授权失败，显示错误提示
				uni.showToast({
					title: '授权失败，请重试',
					icon: 'none'
				});
				return Promise.reject(error);
			}
		}

		// 设置token
		config!.headers!['token'] = `${token}`;

		if (defaultOpts.showLoading) {
			uni.showLoading({
				title: '加载中',
				mask: true
			})
		}

		return config
	}, (err) => {
		console.error('请求前配置错误:', err)
		uni.hideLoading()
		return Promise.reject(err)
	})
	// 响应成功后的处理拦截器
	uni.axios.interceptors.response.use(async (res : AxiosResponse<ResponseData<any>>) => {
		uni.hideLoading()
		// 401 未登录或者登录失败
		if (res.status !== 200) {
			if (defaultOpts.showError) {
				return new Promise((resolve, reject) => {
					uni.showToast({
						title: res.statusText || '请求失败',
						icon: 'none',
						duration: 1500,
						complete() {
							setTimeout(() => {
								reject(res)
							}, 1500)
						}
					})
				})
			}
			console.error('请求失败:', res)
			return Promise.reject(res)
		}
		if (res.status === 200 && !res.config.successCode?.includes(res.data?.code)) {
			const reqCode = res.data?.code ?? 5
			if (reqCode === -1) {
				uni.removeStorageSync('token')
				uni.showModal({
					title: "授权异常",
					content: '点我重新进入应用',
					showCancel: false,
					confirmText: "确认",
					success(res) {
						if (res.confirm) {
							uni.reLaunch({
								url: '/pages/home/home'
							})
						}
					}
				})
				return Promise.reject(res);
			}

			console.error('请求失败:', (res.status) + (res.data?.msg || '请求失败'), res.data)
			if (defaultOpts.showError) {
				return new Promise((resolve, reject) => {
					uni.showToast({
						title: (res.data?.msg || '') || res.statusText || '请求失败',
						icon: 'none',
						duration: 1500,
						complete() {
							setTimeout(() => {
								reject(res)
							}, 1500)
						}
					})
				})
			}
			return Promise.reject(res)
		}
		if (defaultOpts.showSuccess) {
			return new Promise((resolve) => {
				uni.showToast({
					title: res.data?.msg ?? '请成功',
					icon: 'none',
					duration: 1500,
					complete() {
						setTimeout(() => {
							resolve(res)
						}, 1500)
					}
				})
			})
		}
		return res
	}, (err) => {
		uni.hideLoading()

		if (defaultOpts.showError) {
			uni.showToast({
				title: err.data?.msg || '请求失败',
				icon: 'none'
			})
		}
		console.error('请求失败:', JSON.stringify(err))

		return Promise.reject(err)
	})

	return uni.axios;
}

// 导出清除授权状态的函数，用于手动重新授权
export const clearAuthAndRelogin = async () : Promise<string> => {
	// 清除本地token
	uni.removeStorageSync('token');
	// 重置授权状态
	isWxAuthorizing = false;
	pendingRequests = [];
	// 重新进行微信授权
	return await wxAutoLogin();
};

// 导出检查授权状态的函数
export const checkAuthStatus = () : boolean => {
	const token = uni.getStorageSync('token');
	return !!token;
};