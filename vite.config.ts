import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { existsSync, readdirSync, writeFileSync } from "fs"
import { resolve } from "path"

const TM_COMPONENTS_DIR = resolve(__dirname, 'src/uni_modules/tm-ui/components')
const COMPONENTS_DTS_FILE = resolve(__dirname, 'components.d.ts')

const toPascalCase = (name: string) => name
	.split('-')
	.filter(Boolean)
	.map(part => part.charAt(0).toUpperCase() + part.slice(1))
	.join('')

const loadTmComponentNames = () => {
	if (!existsSync(TM_COMPONENTS_DIR)) return []

	return readdirSync(TM_COMPONENTS_DIR, { withFileTypes: true })
		.filter(item => item.isDirectory() && item.name.startsWith('tm-'))
		.map(item => item.name)
		.filter(name => existsSync(resolve(TM_COMPONENTS_DIR, name, `${name}.vue`)))
		.sort((a, b) => a.localeCompare(b))
}

const generateTmComponentsDts = () => {
	const entries = loadTmComponentNames()
		.flatMap(name => {
			const pascalName = toPascalCase(name)
			const importPath = `./src/uni_modules/tm-ui/components/${name}/${name}.vue`

			return [
				`    ${pascalName}: typeof import('${importPath}')['default']`,
				`    '${name}': typeof import('${importPath}')['default']`
			]
		})

	const content = `/* eslint-disable */
// @ts-nocheck
// Generated from src/uni_modules/tm-ui/components
export {}

/* prettier-ignore */
declare module 'vue' {
  export interface GlobalComponents {
   
${entries.join('\n')}
  }
}
`

	writeFileSync(COMPONENTS_DTS_FILE, content)
}

const tmComponentsDtsPlugin = () => ({
	name: 'tm-components-dts',
	buildStart: generateTmComponentsDts,
	configureServer: generateTmComponentsDts,
	closeBundle: generateTmComponentsDts
})

export default defineConfig({
	define: {
		__VUE_I18N_FULL_INSTALL__: true,
		__VUE_I18N_LEGACY_API__: true,
		__VUE_I18N_PROD_DEVTOOLS__: false,
	},
	build: {
		target: "es6"
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				silenceDeprecations: ['legacy-js-api']
			}
		}
	},
	resolve: {
		alias: [
			{
				find: "@",
				replacement: resolve(__dirname, 'src')
			}
		]
	},
	server: {
		port: 2626,
		// 选项写法
		proxy: {
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
		tmComponentsDtsPlugin()
	],
	
});