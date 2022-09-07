import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import tmuiCss from "./src/tmui/tool/vitePlugs/tmuiCss";
import {resolve} from "path"
// import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
	dts: true,
	resolve:{
		alias:[
			{
				find:"@",
				replacement:resolve(__dirname,'src')
			}
		]
	},
	plugins: [
		uni(),
		
	],
});
