<template>
	<view class="flex flex-col newsPage">
		<tm-tabs
			v-model="activeTab"
			:list="tabList"
			rang-key="title"
			rang-id="id"
			mode="start"
			color="white"
			title-color="#666666"
			active-title-color="#333333"
			:active-font-size="32"
			:font-size="28"
			:height="80"
			@change="onTabChange"
		></tm-tabs>

		<swiper
			class="flex-1"
			:current="activeTab"
			@change="onSwiperChange"
			:duration="250"
		>
			<swiper-item v-for="(tab, tabIdx) in tabList" :key="tab.id">
				<tm-pull-refresh
					v-if="loadedTabs.has(tabIdx)"
					height="100%"
					:pull-refresh="() => onRefresh(tabIdx)"
					:bottom-refresh="() => onLoadMore(tabIdx)"
					:show-scrollbar="false"
				>
					<view v-for="item in tabDataMap[tabIdx]" :key="item.id" class="pa-24 newsItem" @click="onNewsClick(item)">
						<view v-if="item.isTop || item.isHot" class="flex flex-row gap-6 mb-8">
							<tm-tag v-if="item.isTop" size="xs" color="danger" skin="text" font-color="#ff4d4f">置顶</tm-tag>
							<tm-tag v-if="item.isHot" size="xs" color="warn" skin="text" font-color="#ff7d00">热</tm-tag>
						</view>

						<view v-if="item.type === 'text'">
							<text class="text-size-g text-weight-b newsTitle">{{ item.title }}</text>
						</view>

						<view v-else-if="item.type === 'right-image'" class="flex flex-row gap-10">
							<text class="flex-1 text-size-g text-weight-b newsTitle">{{ item.title }}</text>
							<tm-image
								:width="228"
								:height="152"
								:src="item.images[0]"
								:preview="false"
								round="8"
							></tm-image>
						</view>

						<view v-else-if="item.type === 'three-image'">
							<text class="text-size-g text-weight-b d-block mb-n4 newsTitle">{{ item.title }}</text>
							<view class="flex flex-row gap-5">
								<tm-image
									v-for="(img, idx) in item.images"
									:key="idx"
									width="33%"
									:height="160"
									:src="img"
									:preview="false"
									round="6"
								></tm-image>
							</view>
						</view>

						<view class="flex flex-row flex-row-center-start gap-8 mt-16">
							<text class="text-size-xxs text-grey">{{ item.source }}</text>
							<text class="text-size-xxs text-grey">{{ item.commentCount }}评论</text>
							<text class="text-size-xxs text-grey">{{ item.time }}</text>
							<view class="ml-auto">
								<tm-icon name="close-line" size="24" color="#cccccc"></tm-icon>
							</view>
						</view>

						<view class="divider mt-24"></view>
					</view>
				</tm-pull-refresh>
			</swiper-item>
		</swiper>
	</view>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'

interface NewsItem {
	id: number
	type: 'text' | 'right-image' | 'three-image'
	title: string
	source: string
	commentCount: number
	time: string
	images: string[]
	isTop?: boolean
	isHot?: boolean
}

const activeTab = ref(0)
const loadedTabs = ref<Set<number>>(new Set())
const tabDataMap = reactive<Record<number, NewsItem[]>>({})

const tabList = ref([
	{ id: 0, title: '推荐' },
	{ id: 1, title: '热点' },
	{ id: 2, title: '科技' },
	{ id: 3, title: '财经' },
	{ id: 4, title: '体育' },
	{ id: 5, title: '娱乐' },
	{ id: 6, title: '军事' },
	{ id: 7, title: '教育' },
	{ id: 8, title: '汽车' },
	{ id: 9, title: '健康' }
])

const mockImages = [
	'https://picsum.photos/400/300?random=1',
	'https://picsum.photos/400/300?random=2',
	'https://picsum.photos/400/300?random=3',
	'https://picsum.photos/400/300?random=4',
	'https://picsum.photos/400/300?random=5',
	'https://picsum.photos/400/300?random=6'
]

const getMockData = (tabIdx: number): NewsItem[] => {
	const categoryNames = ['推荐', '热点', '科技', '财经', '体育', '娱乐', '军事', '教育', '汽车', '健康']
	const category = categoryNames[tabIdx] || '推荐'
	return [
		{
			id: tabIdx * 100 + 1,
			type: 'right-image',
			title: `【${category}】央行发布重要通知：2026年货币政策将维持稳健偏宽松基调`,
			source: '财经日报',
			commentCount: 3842,
			time: '1小时前',
			images: [mockImages[0]],
			isTop: true
		},
		{
			id: tabIdx * 100 + 2,
			type: 'three-image',
			title: `【${category}】全球首款量产飞行汽车正式亮相，售价曝光引发行业震动`,
			source: '科技前沿',
			commentCount: 5621,
			time: '2小时前',
			images: [mockImages[1], mockImages[2], mockImages[3]],
			isHot: true
		},
		{
			id: tabIdx * 100 + 3,
			type: 'text',
			title: `【${category}】教育部：2026年高考报名人数再创新高，多项政策调整值得关注`,
			source: '教育在线',
			commentCount: 1253,
			time: '3小时前',
			images: []
		},
		{
			id: tabIdx * 100 + 4,
			type: 'right-image',
			title: `【${category}】国足世预赛关键一战今晚打响，主教练赛前透露首发阵容`,
			source: '体育周刊',
			commentCount: 8914,
			time: '4小时前',
			images: [mockImages[4]]
		},
		{
			id: tabIdx * 100 + 5,
			type: 'three-image',
			title: `【${category}】春季出游报告发布：这五个城市成为最受欢迎目的地`,
			source: '旅行家',
			commentCount: 2156,
			time: '5小时前',
			images: [mockImages[2], mockImages[5], mockImages[0]]
		},
		{
			id: tabIdx * 100 + 6,
			type: 'text',
			title: `【${category}】多地出台房地产新政，专家解读：市场信心正在逐步回暖`,
			source: '地产观察',
			commentCount: 4327,
			time: '5小时前',
			images: [],
			isHot: true
		},
		{
			id: tabIdx * 100 + 7,
			type: 'right-image',
			title: `【${category}】新一代国产芯片性能跑分曝光，部分指标已超越国际主流产品`,
			source: '芯片内参',
			commentCount: 6789,
			time: '6小时前',
			images: [mockImages[3]]
		},
		{
			id: tabIdx * 100 + 8,
			type: 'text',
			title: `【${category}】北京地铁新线路规划公示，覆盖多个重点发展区域`,
			source: '北京晚报',
			commentCount: 921,
			time: '7小时前',
			images: []
		}
	]
}

const loadTabData = (tabIdx: number) => {
	if (loadedTabs.value.has(tabIdx)) return
	loadedTabs.value = new Set([...loadedTabs.value, tabIdx])
	tabDataMap[tabIdx] = getMockData(tabIdx)
}

const onTabChange = (item: { id: number }) => {
	const idx = tabList.value.findIndex(t => t.id === item.id)
	if (idx > -1) {
		activeTab.value = idx
		loadTabData(idx)
	}
}

const onSwiperChange = (e: any) => {
	const idx = e.detail.current
	activeTab.value = idx
	loadTabData(idx)
}

const onRefresh = (tabIdx: number): Promise<boolean> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			tabDataMap[tabIdx] = getMockData(tabIdx)
			resolve(true)
		}, 1000)
	})
}

const onLoadMore = (tabIdx: number): Promise<boolean> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true)
		}, 1000)
	})
}

const onNewsClick = (item: NewsItem) => {
	uni.navigateTo({ url: `/pages/demo/news-detail?id=${item.id}` })
}

onMounted(() => {
	loadTabData(0)
})
</script>

<style lang="scss" scoped>
.newsPage {
	height: 100vh;
}

.newsTitle {
	color: #333333;
	line-height: 1.4;
}

.ml-auto {
	margin-left: auto;
}

.divider {
	height: 1rpx;
	background: #eeeeee;
}
</style>
