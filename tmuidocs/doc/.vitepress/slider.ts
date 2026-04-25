import { autoNav } from './autonav'

export default [
	// SidebarItem
	{
		text: '关于TMUI3.2',
		link: '/start/介绍.md'
	},
	{
		text: '快速上手',
		link: '/start/快速上手.md'
	},
	{
		text: '脚手架Cli',
		link: '/start/cli.md'
	},
	{
		text: '国际化',
		link: '/start/国际化.md'
	},
	{
		text: '更新日志',
		link: '/start/更新日志.md'
	},
	{
		text: '可持续发展',
		link: '/zhanzhu/赞助.md'
	},
	{
		text: 'CSS库',
		link: '/CSSTool/css.md'
	},
	{
		text: '图标库',
		link: '/spec/系统图标.md'
	},
	{
		text: '路由Router',
		link: '/JSTool/router.md'
	},
	...autoNav,
	{
		text: 'TMUI3.2VUE',
		collapsed: true,
		items: [
			{
				text: '介绍',
				link: '/32vue/介绍.md'
			},
			{
				text: '安装',
				link: '/32vue/安装.md'
			},
			{
				text: '单位标签说明',
				link: '/32vue/单位标签说明.md'
			}
		]
	}
]
