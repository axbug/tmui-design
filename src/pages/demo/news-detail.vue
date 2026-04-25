<template>
	<view>
		<tm-image
			v-if="detail.cover"
			width="100%"
			:height="400"
			:src="detail.cover"
			:preview="false"
		></tm-image>

		<view class="pa-24">
			<text class="text-weight-b d-block articleTitle">{{ detail.title }}</text>
			<view class="flex flex-row gap-12 mt-16">
				<text class="text-size-xs text-grey-darken-1">{{ detail.source }}</text>
				<text class="text-size-xs text-grey">{{ detail.time }}</text>
			</view>
		</view>

		<view class="px-24 pb-24">
			<tm-html :value="detail.content" selectable></tm-html>
		</view>

		<view class="flex flex-row flex-wrap gap-6 px-24 pb-24">
			<tm-tag v-for="tag in detail.tags" :key="tag" size="s" color="primary" skin="thin">{{ tag }}</tm-tag>
		</view>

		<view class="flex flex-row gap-20 pa-24 statRow">
			<view class="flex flex-row flex-row-center-start gap-4" v-for="stat in statList" :key="stat.icon">
				<tm-icon :name="stat.icon" size="32" color="#999999"></tm-icon>
				<text class="text-size-xs text-grey">{{ stat.text }}</text>
			</view>
		</view>

		<view class="bottomBarPlaceholder"></view>

		<view class="bottomBar">
			<view class="inputWrap flex flex-row flex-row-center-start gap-6" @click="onCommentTap">
				<tm-icon name="edit-line" size="28" color="#999999"></tm-icon>
				<text class="text-size-s text-grey">写评论...</text>
			</view>
			<view class="flex flex-row gap-4">
				<view class="actionBtn flex flex-center" @click="onLike">
					<tm-icon :name="isLiked ? 'thumb-up-fill' : 'thumb-up-line'" size="40" :color="isLiked ? '#ff4d4f' : '#666666'"></tm-icon>
				</view>
				<view class="actionBtn flex flex-center" @click="onCollect">
					<tm-icon :name="isCollected ? 'star-fill' : 'star-line'" size="40" :color="isCollected ? '#ffaa00' : '#666666'"></tm-icon>
				</view>
				<view class="actionBtn flex flex-center" @click="onShare">
					<tm-icon name="share-forward-line" size="40" color="#666666"></tm-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'

interface NewsDetail {
	id: number
	title: string
	source: string
	time: string
	cover: string
	content: string
	tags: string[]
	viewCount: number
	commentCount: number
	likeCount: number
}

const detail = ref<NewsDetail>({
	id: 0,
	title: '',
	source: '',
	time: '',
	cover: '',
	content: '',
	tags: [],
	viewCount: 0,
	commentCount: 0,
	likeCount: 0
})

const isLiked = ref(false)
const isCollected = ref(false)

const statList = computed(() => [
	{ icon: 'eye-line', text: `${detail.value.viewCount} 阅读` },
	{ icon: 'chat-3-line', text: `${detail.value.commentCount} 评论` },
	{ icon: 'thumb-up-line', text: `${detail.value.likeCount} 点赞` }
])

const mockDetail: Record<string, NewsDetail> = {
	'1': {
		id: 1,
		title: '央行发布重要通知：2026年货币政策将维持稳健偏宽松基调',
		source: '财经日报',
		time: '2026-03-22 09:30',
		cover: 'https://picsum.photos/750/400?random=10',
		content: `
			<h2>政策背景</h2>
			<p>中国人民银行于今日发布2026年度货币政策执行报告，明确指出将继续实施<strong>稳健偏宽松</strong>的货币政策基调，以支持实体经济高质量发展。</p>
			<p>报告显示，2025年全年社会融资规模增量累计为<em>35.6万亿元</em>，同比增长12.3%。M2余额同比增长9.8%，保持合理充裕。</p>
			<h2>核心要点</h2>
			<p>本次报告的核心要点包括以下几个方面：</p>
			<ul>
				<li><strong>降准空间充足</strong>：当前存款准备金率仍有下调空间，预计年内将实施1-2次定向降准。</li>
				<li><strong>LPR继续引导下行</strong>：通过改革完善贷款市场报价利率形成机制，推动实际贷款利率稳中有降。</li>
				<li><strong>结构性工具发力</strong>：加大对科技创新、绿色发展、普惠小微等领域的精准支持力度。</li>
			</ul>
			<h2>市场反应</h2>
			<p>消息发布后，A股三大指数集体高开。上证指数涨0.8%，深证成指涨1.2%，创业板指涨1.5%。银行板块普遍上涨，其中工商银行、建设银行涨幅居前。</p>
			<blockquote>
				<p>分析师指出，本次政策信号明确，有利于稳定市场预期，预计将对资本市场形成持续的正面支撑。</p>
			</blockquote>
			<h2>专家解读</h2>
			<p>国务院发展研究中心金融研究所副所长表示："当前经济恢复基础尚不牢固，货币政策保持适度宽松是必要的。未来应更加注重结构性政策工具的运用，提高金融服务的精准性和直达性。"</p>
			<p>中国社科院经济研究所研究员认为，此次政策定调体现了<strong>逆周期调节</strong>的政策取向，预计下半年将有更多针对性措施出台。</p>
		`,
		tags: ['央行', '货币政策', '金融', '经济'],
		viewCount: 52840,
		commentCount: 3842,
		likeCount: 1256
	},
	'2': {
		id: 2,
		title: '全球首款量产飞行汽车正式亮相，售价曝光引发行业震动',
		source: '科技前沿',
		time: '2026-03-22 08:15',
		cover: 'https://picsum.photos/750/400?random=11',
		content: `
			<h2>产品发布</h2>
			<p>在今天举行的全球移动出行大会上，国内头部飞行汽车企业正式发布了旗下首款<strong>量产型飞行汽车</strong>——"云鹤X1"。这款产品集地面行驶与低空飞行于一体，标志着飞行汽车正式进入商用阶段。</p>
			<h2>核心参数</h2>
			<p>云鹤X1的核心技术参数如下：</p>
			<ul>
				<li>最大飞行速度：<strong>200km/h</strong></li>
				<li>最大飞行高度：<strong>1000米</strong></li>
				<li>纯电续航里程：飞行模式 <em>150公里</em>，地面模式 <em>600公里</em></li>
				<li>座位数：<strong>4座</strong></li>
				<li>起降方式：<strong>垂直起降（eVTOL）</strong></li>
			</ul>
			<h2>售价公布</h2>
			<p>令人瞩目的是，云鹤X1的官方指导价定为<strong>198万元</strong>，远低于此前行业预期的300-500万元区间。这一定价策略被认为将极大加速飞行汽车的市场普及。</p>
			<blockquote>
				<p>"我们的目标是让飞行汽车从奢侈品变为消费品。"——创始人在发布会上表示。</p>
			</blockquote>
			<h2>行业影响</h2>
			<p>消息公布后，低空经济概念股全线大涨。多家券商发布研报认为，飞行汽车量产将开启一个<strong>万亿级</strong>的新市场。相关基础设施建设、空域管理系统、保险服务等配套产业链也将迎来发展机遇。</p>
		`,
		tags: ['飞行汽车', '科技', '新能源', '低空经济'],
		viewCount: 86320,
		commentCount: 5621,
		likeCount: 3890
	}
}

const loadDetail = (id: string) => {
	const data = mockDetail[id]
	if (data) {
		detail.value = data
	} else {
		detail.value = {
			...mockDetail['1'],
			id: parseInt(id),
			title: `新闻详情（ID: ${id}）`,
		}
	}
}

const onLike = () => {
	isLiked.value = !isLiked.value
	detail.value.likeCount += isLiked.value ? 1 : -1
	uni.showToast({ title: isLiked.value ? '已点赞' : '取消点赞', icon: 'none' })
}

const onCollect = () => {
	isCollected.value = !isCollected.value
	uni.showToast({ title: isCollected.value ? '已收藏' : '取消收藏', icon: 'none' })
}

const onShare = () => {
	uni.showToast({ title: '分享功能开发中', icon: 'none' })
}

const onCommentTap = () => {
	uni.showToast({ title: '评论功能开发中', icon: 'none' })
}

onMounted(() => {
	const pages = getCurrentPages()
	const currentPage = pages[pages.length - 1] as any
	const id = currentPage?.options?.id || '1'
	loadDetail(id)
})
</script>

<style lang="scss" scoped>
.articleTitle {
	font-size: 40rpx;
	color: #333333;
	line-height: 1.4;
}

.statRow {
	border-top: 1rpx solid #eeeeee;
}

.bottomBarPlaceholder {
	height: calc(96rpx + env(safe-area-inset-bottom));
}

.bottomBar {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	gap: 16rpx;
	padding: 16rpx 24rpx;
	padding-bottom: calc(16rpx + env(safe-area-inset-bottom));
	background-color: #ffffff;
	box-shadow: 0 -2rpx 12rpx rgba(0, 0, 0, 0.05);
	z-index: 10;
	.inputWrap {
		flex: 1;
		height: 64rpx;
		padding: 0 24rpx;
		background: #f5f5f5;
		border-radius: 32rpx;
	}
	.actionBtn {
		width: 72rpx;
		height: 64rpx;
	}
}
</style>
