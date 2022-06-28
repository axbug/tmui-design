import { fetchNet } from './tool/lib/fetch';
import themeTool from './tool/theme/theme';
import preview,* as util from './tool/function/util';
import {language,languageByGlobal} from "./tool/lib/language"

const $tm = {
	isColor: themeTool.isCssColor,
	u: {...util,preview},
	language:language,
	fetch:fetchNet
};
uni.$tm = $tm
export default {
	install: (app:any, options:object) => {
		// #ifndef APP-NVUE
		app.use(languageByGlobal())
		// #endif
		app.config.globalProperties.tm = $tm;
	}
};
