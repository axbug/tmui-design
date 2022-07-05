import { fetchNet } from './tool/lib/fetch';
import themeTool from './tool/theme/theme';
import preview,* as util from './tool/function/util';
import {language,languageByGlobal} from "./tool/lib/language"
import { share } from "./tool/lib/share"
import { App, nextTick} from "vue"
const $tm = {
	isColor: themeTool.isCssColor,
	u: {...util,preview},
	language:language,
	fetch:fetchNet
};
uni.$tm = $tm
export default {
	install: (app:App, options:object) => {
		// #ifndef APP-NVUE
		app.use(languageByGlobal())
		// #endif
		// #ifdef MP
		const {onShareAppMessage,onShareTimeline} = share()
		app.mixin({
			onShareAppMessage,
			onShareTimeline
		})
		// #endif
		app.config.globalProperties.tm = $tm;
	}
};
