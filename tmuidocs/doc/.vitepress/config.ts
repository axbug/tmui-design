import { defineConfig } from 'vitepress'
import { createRequire } from 'module'
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'
import nav from './nav'
import slider from './slider'
const require = createRequire(import.meta.url)
const pkg = require('./../../package.json')


export default defineConfig({
	title: "TMUI " + pkg.version + `(${new Date().getMonth() + 1}-${new Date().getDate()})`,
	description: "uni通用组件库 tmui.design 微信小程序 tmu3.0 UI组件 跨端通用组件 app应用组件框架",

	lastUpdated: true,
	ignoreDeadLinks: true,
	vite: {
		plugins: [pagefindPlugin({
			forceLanguage: 'zh-cn',
			btnPlaceholder: '键入关键记事',
			placeholder: '搜索tmui文档',
			emptyText: '空空如也，啥也没有',
			// 自定义搜索查询处理，使用chineseSearchOptimize优化中文搜索
			customSearchQuery(input) {
				// 先使用chineseSearchOptimize优化中文搜索
				const optimizedInput = chineseSearchOptimize(input);
				// 进一步优化：将搜索的每个中文单字两侧加上空格，提升搜索精度
				return optimizedInput.replace(/[\u4e00-\u9fa5]/g, ' $& ')
					.replace(/\s+/g, ' ')
					.trim();
			},
			// 启用结果优化
			resultOptimization: true,
			// 显示文档最后修改日期
			showDate: true,
			// 设置时区为UTC+8（中国时区）
			timeZone: 8,
			// 排除一些不需要搜索的元素
			excludeSelector: [
				'div.aside',
				'a.header-anchor',
				'.search-exclude',
				'.no-search'
			]
		})],
	},
	head: [
		["meta", {
			name: "baidu_union_verify",
			content: "1e1e991e188e7d18a6bd17e43225b352"
		}],
		["link", {
			rel: "icon",
			href: "images/tmui-black.png"
		}],
		[
			'script', {},
			`
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "https://hm.baidu.com/hm.js?8bfa31a263e6b08bb02ee72f05109784";
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			`
		],

	],

	markdown: {
	},
	themeConfig: {
		nav,
		sidebar: slider,
		// 设置默认主题为暗黑模式
		appearance: 'dark',
		// 主题切换按钮配置
		themeToggle: {
			// 暗黑模式下的图标
			dark: '🌙',
			// 亮色模式下的图标
			light: '☀️',
			// 系统主题下的图标
			system: '💻'
		},
		editLink: {
			pattern: 'https://gitee.com/LYTB/tmui-design/tree/master/tmuidocs/doc/:path',
			text: '帮我纠错，点击编辑。',
		},
		lastUpdatedText: "更新时间",
		socialLinks: [
			{ icon: 'github', link: 'https://gitee.com/LYTB/tmui-design', }
		],
		search: {
			provider: 'local'
		},
		footer: {
			message: `
			<a href="https://tmui.design">tmui.design</a>
			 | 
			<a href="https://jx2d.cn" target="_blank">TMUI 3.2.0</a>
			 | 
			<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">赣ICP备16005577号-4</a> 
			<br>
			<a style="margin-top:12px;">
				<span style="font-size:12px">友情链接：</span>
				<a style="font-size:12px" href="https://www.diygw.com/" target="_blank">UniApp可视化源码</a>
				| 
				<a style="font-size:12px" href="https://4xx.me" target="_blank">For XX - 专注于技术本身</a>
				|
				<a style="font-size:12px" href="https://www.uxframe.cn" target="_blank">
				UxFrame 低代码高性能UI框架</a>
				|
				<a style="font-size:12px" href="https://wx.geeks.ink" target="_blank">
				WXUI 基于uni-app x开发的高性能混合UI库</a>
			 </a>
			`,
		}
	}
})