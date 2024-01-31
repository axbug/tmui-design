export default  [
	// SidebarItem
	{
		text: '开发指南',
		collapsed: true,
		items: [
			{
				text: '关于我TMUI',
				link: '/start/介绍.md',
				items: [],
			},
			{
				text: '贡献者',
				link: '/start/贡献者.md',
			},
			{
				text: '快速上手',
				link: '/start/快速上手.md',
				items: [],
			},
			{
				text: 'tmui-cli',
				link: '/start/cli.md',
				items: [],
			},
			{
				text: '基本页面结构',
				link: '/start/基本页面结构.md',
				items: [],
			},{
				text: '兼容性',
				link: '/start/兼容性.md',
				items: [],
			},{
				text: '国际化',
				link: '/start/国际化.md',
				items: [],
			},
			{
				text: '小程序分享',
				link: '/start/小程序分享.md',
				items: [],
			},
			{
				text: '更新日志',
				link: '/start/更新日志.md',
				items: [],
			},
			{
				text: '常见问题',
				link: '/start/常见问题.md',
				items: [],
			}
			
		],
	},
	{
		"text": "设计指南",
		collapsed: true,
		items: [
			
			{
				text: '主题色彩',
				"link": "/spec/主题色彩.md",
				items: [],
			},
			{
				text: '组件公共样式',
				"link": "/spec/组件公共样式.md",
				items: [],
			},
			{
				text: '系统图标',
				"link": "/spec/系统图标.md",
				items: [],
			},
			{
				text: '自定图标',
				"link": "/spec/自定图标.md",
				items: [],
			},
			{
				text: '自定主题',
				"link": "/spec/自定主题.md",
				items: [],
			},
			{
				text: '切换暗黑',
				"link": "/spec/切换暗黑.md",
				items: [],
			},{
				text: '切换主题',
				"link": "/spec/切换主题.md",
				items: [],
			},{
				text: '阻止主题切换',
				"link": "/spec/阻止主题切换.md",
				items: [],
			},
		],
	},
	{
		text: '进阶指南',
		collapsed: true,
		items: [
			{
				text: '全局配置',
				link: '/advanced/tmui全局配置.md',
				items: [],
			},{
				text: '主题配置',
				link: '/advanced/theme.md',
				items: [],
			},{
				text: '路由配置',
				link: '/advanced/router.md',
				items: [],
			},{
				text: 'vscode配置',
				link: '/advanced/vscode配置.md',
				items: [],
			},{
				text: 'TS TMUI类型',
				link: '/advanced/interface.md',
				items: [],
			},{
				text: '扩展Interface',
				link: '/advanced/扩展类型文件.md',
				items: [],
			},{
				text: '自定义组件',
				link: '/advanced/自定义组件.md',
				items: [],
			},
			
			
		],
	},
	{
		text: '可持续发展',
		link: '/zhanzhu/赞助.md',
	},
	{
		text: 'CSS库',
		link: '/CSSTool/css.md',
	},
	{
		text: 'JS工具库',
		collapsed: true,
		items:[
			{
				text: 'JS工具库',
				link: '/JSTool/javascript.md',
			},
			{
				text: 'Fetch网络请求',
				link: '/JSTool/fetch.md',
			}
			
		]
		
	},
	{
		text: 'VueUse',
		collapsed: true,
		items:[
			{
				text: 'useFetch 接口请求',
				link: '/useHooks/useFetch.md',
			},
			{
				text: 'useSize 元素尺寸',
				link: '/useHooks/useSize.md',
			},
			{
				text: 'useTheme 主题定制',
				link: '/useHooks/useTheme.md',
			},
			{
				text: 'useTouchFinger 手势库',
				link: '/useHooks/useTouchFinger.md',
			},
			{
				text: 'useTimer 倒计时',
				link: '/useHooks/useTimer.md',
			},
			{
				text: 'useUploadFile 文件上传',
				link: '/useHooks/useUploadFile.md',
			},
			{
				text: 'useWindowInfo 窗口信息',
				link: '/useHooks/useWindowInfo.md',
			},
		]
		
	},
	{
		text: 'TmCv渲染库',
		collapsed: true,
		items:[
			{
				text: 'TmCv介绍',
				link: '/render/介绍.md'
			},
			{
				text: '使用TmCv',
				collapsed: true,
				items:[
					{
						text: '开始使用',
						link: '/render/render/开始使用.md',
					}
				]
			}
			
			
		]
		
	},
	{
		text: '组件库',
		collapsed: true,
		items: [
			{
				text: '通用组件',
				items: [
					{
						text: '应用节点 App ',
						link: '/com/App.md',
					},
					{
						text: '按钮 Button ',
						link: '/com/Button.md',
					},
					{
						text: '图标 Icon ',
						link: '/com/Icon.md',
					},
					{
						text: '文本 Text ',
						link: '/com/Text.md',
					},
				],
			},
			{
				text: '布局',
				items: [
					{
						text: '分割线 Divider ',
						link: '/com/Divider.md',
					},
					{
						text: '宫格 Grid ',
						link: '/com/Grid.md',
					},
					{
						text: '布局 Row ',
						link: '/com/Row.md',
					},
					{
						text: '容器 Sheet ',
						link: '/com/Sheet.md',
					},
				],
			},
			{
				text: '展示组件',
				items: [
					{
						text: '头像 Avatar',
						link: '/com/Avatar.md',
					},
					{
						text: '二维码 Qrcode',
						link: '/com/Qrcode.md',
					},
					{
						text: '徽标 Badge',
						link: '/com/Badge.md',
					},
					{
						text: '卡片 Card',
						link: '/com/Card.md',
					},
					{
						text: '轮播 Carousel',
						link: '/com/Carousel.md',
					},
					{
						text: '折叠面板 Collapse',
						link: '/com/Collapse.md',
					},
					{
						text: '评论 Comment',
						link: '/com/Comment.md',
					},
					{
						text: '单元格 Cell',
						link: '/com/Cell.md',
					},
					{
						text: '倒计时 Countdown',
						link: '/com/Countdown.md',
					},
					{
						text: '描述 Descriptions',
						link: '/com/Descriptions.md',
					},
					{
						text: '图片 Image',
						link: '/com/Image.md',
					},
					{
						text: '列表索引 Indexes',
						link: '/com/Indexes.md',
					},
					{
						text: '显示更多 More',
						link: '/com/More.md',
					},
					{
						text: '结果页 Result',
						link: '/com/Result.md',
					},
					{
						text: '汽泡卡片 Popover',
						link: '/com/Popover.md',
					},
					{
						text: '数值显示 Statistic',
						link: '/com/Statistic.md',
					},
					{
						text: '表格 Table',
						link: '/com/Table.md',
					},
					{
						text: '选项卡 Tabs',
						link: '/com/Tabs.md',
					},
					{
						text: '标签 Tag',
						link: '/com/Tag.md',
					},
					{
						text: '时间轴 Timeline',
						link: '/com/Timeline.md',
					},
					{
						text: '树 Tree',
						link: '/com/Tree.md',
					},
					{
						text: '虚拟列表 Virtual',
						link: '/com/Virtual.md',
					},
					{
						text: '瀑布流 Waterfall',
						link: '/com/Waterfall.md',
					},
				],
			},
			{
				text: '表单录入',
				items: [
					{
						text: '级联器(点选) Cascader',
						link: '/com/Cascader.md',
					},
					{
						text: '复选框 Checkbox ',
						link: '/com/Checkbox.md',
					},
					{
						text: '日历 Calendar',
						link: '/com/Calendar.md',
					},
					{
						text: '城市选择 City',
						link: '/com/City.md',
					},
					{
						text: '表单 Form',
						link: '/com/Form.md',
					},
					{
						text: '输入框 Input',
						link: '/com/Input.md',
					},
					{
						text: '键盘 keyboard',
						link: '/com/Keyborad.md',
					},
					{
						text: '选择器 Picker',
						link: '/com/Picker.md',
					},
					{
						text: '评分 Rate',
						link: '/com/Rate.md',
					},
					{
						text: '单选框 Radio',
						link: '/com/Radio.md',
					},
					{
						text: '步进器 Stepper',
						link: '/com/Stepper.md',
					},
					{
						text: '滑块 Slider',
						link: '/com/Slider.md',
					},
					{
						text: '开关 Switch',
						link: '/com/Switch.md',
					},
					{
						text: '时间选择器 Time',
						link: '/com/Time.md',
					},
					{
						text: '图片上传 Upload',
						link: '/com/Upload.md',
					},
					{
						text: '文件上传 UploadFile',
						link: '/com/UploadFile.md',
					},
					{
						text: '时间周 Weekbar',
						link: '/com/Weekbar.md',
					},
					{
						text: '时间范围选择器 TimeBetween',
						link: '/com/Timebetween.md',
					},
				],
			},
			{
				text: '反馈组件',
				items: [
					{
						text: '警告提示 Alert',
						link: '/com/Alert.md',
					},
					{
						text: '抽屉 Drawer ',
						link: '/com/Drawer.md',
					},
					{
						text: '列表拖动排序 DragList',
						link: '/com/DragList.md',
					},
					{
						text: '对话框 Modal',
						link: '/com/Modal.md',
					},
					{
						text: '全局提示 Message',
						link: '/com/Message.md',
					},
					{
						text: '遮罩 Overlay',
						link: '/com/Overlay.md',
					},
					{
						text: '进度条 Progress',
						link: '/com/Progress.md',
					},
					{
						text: '加载中 Spin',
						link: '/com/Spin.md',
					},
					{
						text: '左滑操作栏 SlideSwitch',
						link: '/com/SlideSwitch.md',
					},
					{
						text: '骨架屏 Skeleton',
						link: '/com/Skeleton.md',
					},
					{
						text: '动效 Translate',
						link: '/com/Translate.md',
					},
					{
						text: '通知提醒 Notification',
						link: '/com/Notification.md',
					},
					{
						text: '滚动消息通知 RollNotice',
						link: '/com/RollNotice.md',
					}
				],
			},
			{
				text: '导航组件',
				items: [
					{
						text: '底部操作栏 ActionMenu',
						link: '/com/ActionMenu.md',
					},
					{
						text: '下拉选项 Dropdown',
						link: '/com/Dropdown.md',
					},
					{
						text: '标题导航栏 Navbar',
						link: '/com/Navbar.md',
					},
					{
						text: '分页 Pagination',
						link: '/com/Pagination.md',
					},
					{
						text: '分段器 Segtab',
						link: '/com/Segtab.md',
					},
					{
						text: '步骤条 Steps',
						link: '/com/Steps.md',
					},
					{
						text: '底部导航 Tabbar',
						link: '/com/Tabbar.md',
					},
					{
						text: '下拉筛选器 FilterMenu',
						link: '/com/FilterMenu.md',
					},
					{
						text: '侧边栏导航 Sidemenu',
						link: '/com/Sidemenu.md',
					}
				],
			},
			{
				text: '其它',
				items: [
					{
						text: '验证码输入框 Codeinput',
						link: '/com/Codeinput.md',
					},
					{
						text: '图片裁剪 Cropimg',
						link: '/com/Cropimg.md',
					},
					{
						text: '悬浮按钮 FloatButton',
						link: '/com/FloatButton.md',
					},
					{
						text: '吸顶 Sticky',
						link: '/com/Sticky.md',
					},
					{
						text: '百度图表 Echart',
						link: '/com/Echart.md',
					},
					{
						text: '签名板 SignBoard',
						link: '/com/SignBoard.md',
					},
					{
						text: '条形码 Barcode',
						link: '/com/Barcode.md',
					},
					{
						text: '横向滚动 Scrollx',
						link: '/com/Scrollx.md',
					},
					{
						text: '纵向滚动 Scrolly',
						link: '/com/Scrolly.md',
					},
					{
						text: '水印 Watermark',
						link: '/com/Watermark.md',
					},
					{
						text: '富文本 Html',
						link: '/com/Html.md',
					},
					{
						text: '颜色选择器 Color',
						link: '/com/Colorview.md',
					},
					{
						text: '吸附器 Adsorb',
						link: '/com/Adsorb.md',
					},
					{
						text: '飞元素 FlyView',
						link: '/com/FlyView.md',
					}
				],
			},
			{
				text: '业务组件',
				items: [
					{
						text: '优惠券 Coupon',
						link: '/com/Coupon.md',
					},
					{
						text: '商品属性选择 Sku',
						link: '/com/Sku.md',
					},
				],
			},
		],
	}
]
