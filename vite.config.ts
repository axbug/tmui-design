import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import vueJsx from "@vitejs/plugin-vue-jsx";
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
	server:{
		// 选项写法
		proxy:{
			'/pag': {
				target: 'https://cdn.tmui.design',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '/api')
			},
		}
	},
	plugins: [
		uni(),
		vueJsx(),
		tmuiCss()
	]
});
