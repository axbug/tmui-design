/**
 * 分享配置
 */
import { wxshareConfig } from "./interface"
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
export const share = (args : wxshareConfig = {}) => {
	let defaultWxshareConfig : wxshareConfig = {
		...args
	}
	// 分享朋友默认配置  
	let shareAppOptions = {}
	// 分享朋友圈默认配置  
	let shareTimeOptions = {}
	// onShareAppMessage  
	const shareApp = (options = {}) => {
		onShareAppMessage((res) => {
			return {
				...defaultWxshareConfig,
				...options,
				...shareAppOptions
			}
		})
	}
	// 添加onShareAppMessage参数  
	const setShareApp = (options = {}) => {
		shareAppOptions = options
	}
	// onShareTimeline  
	const shareTime = (options = {}) => {
		onShareTimeline(() => {
			return {
				...defaultWxshareConfig,
				...options,
				...shareTimeOptions
			}
		})
	}
	// 添加onShareTimeline参数  
	const setShareTime = (options = {}) => {
		shareTimeOptions = options
	}

	return {
		onShareAppMessage: shareApp,
		onShareTimeline: shareTime,
		setShareApp,
		setShareTime,
	}
}