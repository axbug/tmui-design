<template>
	<view class="page">
		<view class="cover">
			<view class="safe-statusbar"></view>
			<text class="ghost">3.2</text>
			<view class="coverBar" :style="{ height: navBarHeight + 'px' }">
				<text class="brand">TMUI3.2</text>
			</view>
			<view class="coverSearch">
				<tm-input
					v-model="keyword"
					placeholder="搜索组件"
					left-icon="search-2-line"
					icon-color="#0579FF"
					show-clear
					color="white"
					round="40"
					height="80"
					confirm-type="search"
				></tm-input>
			</view>
		</view>

		<view class="stage">
			<view class="tabsWrap">
				<tm-tabs
					v-model="activeTab"
					:list="tabList"
					mode="start"
					color="transparent"
					title-color="#9a9a9a"
					active-title-color="#111111"
					:font-size="28"
					:active-font-size="32"
					:height="100"
					:show-line="false"
					@change="onTabChange"
				></tm-tabs>
			</view>

			<swiper
				v-if="keyword.trim() === ''"
				class="contentSwiper"
				:current="activeTab"
				:style="{ height: swiperHeight + 'px' }"
				@change="onSwiperChange"
			>
				<swiper-item v-for="tab in tabKeys" :key="tab">
					<scroll-view scroll-y class="paneScroll">
						<tm-cell
							v-for="item in itemsOfCategory(tab)"
							:key="item.url"
							:title="item.title"
							:desc="item.name"
							:url="item.url"
							:icon="item.icon"
						></tm-cell>
					</scroll-view>
				</swiper-item>
			</swiper>

			<template v-else>
				<view v-if="filteredGroups.length === 0" class="emptyBox flex flex-col flex-col-center-center">
					<tm-text color="#b0b0b0" font-size="26">没有这个组件</tm-text>
				</view>
				<view v-for="group in filteredGroups" :key="group.key">
					<view class="groupTitle">{{ group.title }}</view>
					<tm-cell
						v-for="item in group.list"
						:key="item.url"
						:title="item.title"
						:desc="item.name"
						:url="item.url"
						:icon="item.icon"
					></tm-cell>
				</view>
			</template>
		</view>
	</view>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from "vue";

type CategoryKey = "base" | "form" | "feedback" | "nav" | "picker" | "display" | "other";

type CompItem = {
	title: string;
	name: string;
	url: string;
	icon: string;
	category: CategoryKey;
};

const keyword = ref("");
const activeTab = ref(0);
const navBarHeight = ref(44);
const swiperHeight = ref(400);

onMounted(() => {
	const sys = typeof uni.getWindowInfo === "function" ? uni.getWindowInfo() : uni.getSystemInfoSync();
	navBarHeight.value = 44;
	try {
		const menu = uni.getMenuButtonBoundingClientRect();
		const statusH = sys.statusBarHeight || 0;
		if (menu && menu.height) {
			navBarHeight.value = menu.height + (menu.top - statusH) * 2;
		}
	} catch (e) {
		navBarHeight.value = 44;
	}
	nextTick(() => measureSwiper());
});

// swiper 需要确定高度，这里量出 tabs 底部到屏幕底部的剩余空间
const measureSwiper = () => {
	const win = typeof uni.getWindowInfo === "function" ? uni.getWindowInfo() : uni.getSystemInfoSync();
	const query = uni.createSelectorQuery();
	query.select(".tabsWrap").boundingClientRect();
	query.exec((res: any) => {
		const rect = res && res[0];
		if (rect && typeof rect.bottom === "number") {
			swiperHeight.value = Math.max(win.windowHeight - rect.bottom, 200);
		}
	});
};

const itemsOfCategory = (key: CategoryKey) => componentList.filter((item) => item.category === key);

const onSwiperChange = (e: any) => {
	const current = e?.detail?.current;
	if (typeof current === "number" && current !== activeTab.value) {
		activeTab.value = current;
	}
};

const categoryMeta: Record<CategoryKey, { title: string }> = {
	base: { title: "基础" },
	form: { title: "表单" },
	feedback: { title: "反馈" },
	nav: { title: "导航" },
	picker: { title: "选择器" },
	display: { title: "展示" },
	other: { title: "其他" },
};

const tabKeys = ["base", "form", "feedback", "nav", "picker", "display", "other"] as const;
const tabList = ["基础", "表单", "反馈", "导航", "选择器", "展示", "其他"];

const componentList: CompItem[] = [
	{ title: "按钮", name: "TmButton", url: "/pages/index/button", icon: "toggle-line", category: "base" },
	{ title: "文本", name: "TmText", url: "/pages/index/text", icon: "text", category: "base" },
	{ title: "图标", name: "TmIcon", url: "/pages/index/icon", icon: "remixicon-line", category: "base" },
	{ title: "容器", name: "TmSheet", url: "/pages/index/sheet", icon: "layout-2-line", category: "base" },
	{ title: "标签", name: "TmTag", url: "/pages/index/tag", icon: "price-tag-3-line", category: "base" },
	{ title: "角标", name: "TmBadge", url: "/pages/index/badge", icon: "notification-badge-line", category: "base" },
	{ title: "栅格", name: "TmRow / TmCol", url: "/pages/index/row", icon: "layout-grid-line", category: "base" },
	{ title: "列表", name: "TmCell", url: "/pages/index/cell", icon: "list-check-2", category: "base" },
	{ title: "图片", name: "TmImage", url: "/pages/index/image", icon: "image-line", category: "base" },

	{ title: "输入框", name: "TmInput", url: "/pages/index/input", icon: "input-method-line", category: "form" },
	{ title: "复选框", name: "TmCheckbox", url: "/pages/index/checkbox", icon: "checkbox-line", category: "form" },
	{ title: "单选框", name: "TmRadio", url: "/pages/index/radio", icon: "radio-button-line", category: "form" },
	{ title: "开关", name: "TmSwitch", url: "/pages/index/switch", icon: "toggle-line", category: "form" },
	{ title: "滑动开关", name: "TmSwitchSlider", url: "/pages/index/switch-slider", icon: "equalizer-line", category: "form" },
	{ title: "表单", name: "TmForm", url: "/pages/index/form", icon: "file-list-3-line", category: "form" },
	{ title: "步进器", name: "TmStepper", url: "/pages/index/stepper", icon: "add-box-line", category: "form" },
	{ title: "评分", name: "TmRate", url: "/pages/index/rate", icon: "star-line", category: "form" },
	{ title: "滑块", name: "TmSlider", url: "/pages/index/slider", icon: "sound-module-line", category: "form" },
	{ title: "验证码", name: "TmCodeInput", url: "/pages/index/code-input", icon: "shield-keyhole-line", category: "form" },
	{ title: "图片上传", name: "TmUploadPhoto", url: "/pages/index/upload-photo", icon: "image-add-line", category: "form" },
	{ title: "视频上传", name: "TmUploadVideo", url: "/pages/index/upload-video", icon: "video-add-line", category: "form" },
	{ title: "签名板", name: "TmSignBoard", url: "/pages/index/sign-board", icon: "ball-pen-line", category: "form" },
	{ title: "规格选择", name: "TmSku", url: "/pages/index/sku", icon: "shopping-bag-3-line", category: "form" },

	{ title: "警告提示", name: "TmAlert", url: "/pages/index/alert", icon: "error-warning-line", category: "feedback" },
	{ title: "对话框", name: "TmModal", url: "/pages/index/modal", icon: "window-2-line", category: "feedback" },
	{ title: "抽屉", name: "TmDrawer", url: "/pages/index/drawer", icon: "side-bar-line", category: "feedback" },
	{ title: "浮动抽屉", name: "TmFloatDrawer", url: "/pages/index/float-drawer", icon: "inbox-unarchive-line", category: "feedback" },
	{ title: "气泡弹出", name: "TmPopover", url: "/pages/index/popover", icon: "chat-smile-3-line", category: "feedback" },
	{ title: "骨架屏", name: "TmSkeleton", url: "/pages/index/skeleton", icon: "loader-line", category: "feedback" },
	{ title: "进度条", name: "TmProgress", url: "/pages/index/progress", icon: "percent-line", category: "feedback" },
	{ title: "环形进度", name: "TmCircleProgress", url: "/pages/index/circle-progress", icon: "pie-chart-line", category: "feedback" },
	{ title: "下拉刷新", name: "TmPullRefresh", url: "/pages/index/pull-refresh", icon: "refresh-line", category: "feedback" },

	{ title: "导航栏", name: "TmNavbar", url: "/pages/index/navbar", icon: "layout-top-2-line", category: "nav" },
	{ title: "标签页", name: "TmTabs", url: "/pages/index/tabs", icon: "stack-line", category: "nav" },
	{ title: "底部导航", name: "TmTabbar", url: "/pages/index/tabbar", icon: "layout-bottom-2-line", category: "nav" },
	{ title: "吸顶布局", name: "TmSticky", url: "/pages/index/sticky", icon: "pushpin-2-line", category: "nav" },
	{ title: "折叠面板", name: "TmCollapse", url: "/pages/index/collapse", icon: "menu-fold-line", category: "nav" },
	{ title: "下拉菜单", name: "TmDropdownMenu", url: "/pages/index/dropdown-menu", icon: "arrow-down-s-line", category: "nav" },
	{ title: "滑动菜单", name: "TmSliderMenu", url: "/pages/index/slider-menu", icon: "menu-2-line", category: "nav" },
	{ title: "步骤条", name: "TmSteps", url: "/pages/index/steps", icon: "timeline-view", category: "nav" },

	{ title: "选择器", name: "TmPicker", url: "/pages/index/picker", icon: "list-settings-line", category: "picker" },
	{ title: "日期选择", name: "TmPickerDate", url: "/pages/index/picker-date", icon: "calendar-line", category: "picker" },
	{ title: "时间选择", name: "TmPickerTime", url: "/pages/index/picker-time", icon: "time-line", category: "picker" },
	{ title: "滚轮视图", name: "TmPickerView", url: "/pages/index/picker-view", icon: "list-ordered-2", category: "picker" },
	{ title: "已选选择", name: "TmPickerSelected", url: "/pages/index/picker-selected", icon: "checkbox-multiple-line", category: "picker" },
	{ title: "日历", name: "TmCalendarMultiple", url: "/pages/index/calendar-multiple", icon: "calendar-check-line", category: "picker" },
	{ title: "时间区间", name: "TmBetweenTime", url: "/pages/index/between-time", icon: "hourglass-2-line", category: "picker" },

	{ title: "图表", name: "TmEchart", url: "/pages/index/echart", icon: "bar-chart-2-line", category: "display" },
	{ title: "富文本", name: "TmHtml", url: "/pages/index/html", icon: "code-view", category: "display" },
	{ title: "金额", name: "TmMoney", url: "/pages/index/money", icon: "money-cny-circle-line", category: "display" },
	{ title: "展开更多", name: "TmMore", url: "/pages/index/more", icon: "more-2-line", category: "display" },
	{ title: "倒计时", name: "TmCountdown", url: "/pages/index/countdown", icon: "timer-line", category: "display" },
	{ title: "头像组", name: "TmAvatarGroup", url: "/pages/index/avatar-group", icon: "group-line", category: "display" },

	{ title: "多语言", name: "Languages", url: "/pages/index/languages", icon: "translate-2", category: "other" },
	{ title: "全局配置", name: "Config", url: "/pages/index/config", icon: "settings-3-line", category: "other" },
	{ title: "登录页", name: "Demo", url: "/pages/demo/login", icon: "login-circle-line", category: "other" },
	{ title: "新闻页", name: "Demo", url: "/pages/demo/news", icon: "newspaper-line", category: "other" },
];

// 搜索时才用：按分组展示全部匹配结果，浏览态由 swiper 按 tab 展示
const filteredGroups = computed(() => {
	const word = keyword.value.trim().toLowerCase();
	if (!word) return [];

	const list = componentList.filter((item) => {
		return (
			item.title.toLowerCase().includes(word) ||
			item.name.toLowerCase().includes(word) ||
			item.url.toLowerCase().includes(word)
		);
	});

	const order: CategoryKey[] = ["base", "form", "feedback", "nav", "picker", "display", "other"];
	return order
		.map((key) => {
			const items = list.filter((item) => item.category === key);
			return {
				key,
				title: categoryMeta[key].title,
				list: items,
			};
		})
		.filter((group) => group.list.length > 0);
});

const onTabChange = () => {
	keyword.value = "";
};

</script>

<style lang="scss" scoped>
.page {
	box-sizing: border-box;
	height: 100vh;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.cover {
	flex-shrink: 0;
	position: relative;
	padding:0 24rpx 36px 24rpx;
	overflow: hidden;
	background: #0579ff;
	box-sizing: border-box;
}

.ghost {
	position: absolute;
	right: -12rpx;
	top: 40rpx;
	font-size: 220rpx;
	font-weight: bold;
	color: rgba(255, 255, 255, 0.14);
	letter-spacing: -8rpx;
	line-height: 1;
	pointer-events: none;
}

.coverBar {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
}

.brand {
	font-size: 36rpx;
	font-weight: bold;
	color: #ffffff;
	letter-spacing: 2rpx;
}

.coverSearch {
	margin-top: 12rpx;
	position: relative;
	z-index: 1;
}

.stage {
	margin-top: -24rpx;
	background: #f5f5f5;
	border-radius: 32rpx 32rpx 0 0;
	flex: 1;
	min-height: 0;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	box-sizing: border-box;
	position: relative;
	z-index: 2;
}

.tabsWrap {
	flex-shrink: 0;
}

.paneScroll {
	height: 100%;
	box-sizing: border-box;
	padding-bottom: calc(40rpx + env(safe-area-inset-bottom));
}

.groupTitle {
	padding: 12rpx 32rpx 20rpx;
	font-size: 22rpx;
	color: #b0b0b0;
	letter-spacing: 4rpx;
	box-sizing: border-box;
}


.emptyBox {
	padding: 80rpx 0;
}
</style>
