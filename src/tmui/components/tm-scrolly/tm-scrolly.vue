<template>
	<view class="relative">
		<view v-if="refreshType=='top'&&_openPull" 
		:style="{top:0+'px',width:_width,height:(reFresh==2?-refreshJuli:_sc_top_height)+'px',opacity:_cOpacitye}" 
		class="zIndex-17 overflow absolute l-0 flex flex-row flex-row-center-center contentOp content_opacity" :class="[reFresh==0?'content_height':'']">
			<view class=" contentxRotate" :class="[sc_top<=(refreshJuli)&&reFresh!=2?'contentxRotate_deg':'']">
				<tm-icon v-if="reFresh!=2" name="tmicon-long-arrow-down"></tm-icon>
				<!-- <tm-icon v-if="sc_top<=(refreshJuli)&&reFresh!=2" name="tmicon-long-arrow-up"></tm-icon> -->
				<tm-icon  v-if="reFresh==2" spin color="keDuiColor" :font-size="42" name="tmicon-iosfootball"></tm-icon>
			</view>
			<view class="pl-32">
				<tm-text  v-if="sc_top>(refreshJuli)" _class="text-align-center" label="下拉刷新"></tm-text>
				<tm-text  v-if="sc_top<=(refreshJuli)" _class="text-align-center" label="松开立即刷新"></tm-text>
				<tm-text  _class="text-align-center" :label="_label"></tm-text>
			</view>
		</view>
		<scroll-view @scrolltolower="onScrollBootom" @scroll="onScroll" :scroll-y="true" enable-flex class="flex-col"
			:style="{ width: _width ,height:_height }">
			<view @touchStart="onScrollStart" @touchend="onScrollEnd" 
				:style="{transform:`translateY(${reFresh==2&&refreshType=='top'?-refreshJuli:0}px)`}" class="flex contentx">
				<slot></slot>
			</view>
			
			
			<!-- 底部触底刷新 -->
			<view v-if="refreshType=='bottom'&&reFresh==2&&_openBootom" class="flex flex-row flex-row-center-center my-32">
				<tm-icon  spin color="keDuiColor" :font-size="32" name="tmicon-iosfootball"></tm-icon>
				<tm-text  _class="text-align-center pl-24" label="加载更多"></tm-text>
			</view>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
	/**
	 * 纵向滚动条
	 */
	import {
		ref,PropType,
		computed,
		watch,Ref
	} from "vue";
	import tmIcon from "../tm-icon/tm-icon.vue";
	import tmText from "../tm-text/tm-text.vue";
	const props = defineProps({
		width:{
			type:[String,Number],
			default:'750rpx'
		},
		height:{
			type:[String,Number],
			default:'750rpx'
		},
		//是否打开下拉刷新
		openPull:{
			type:Boolean,
			default:true
		},
		//是否打开触底刷新
		openBootom:{
			type:Boolean,
			default:false
		},
		pullFun: {
			type: [Function] as PropType < (type: 'top' | 'bottom') => boolean > ,
			default: () => {
				return (type: 'top' | 'bottom') => {
					return new Promise((res)=>{
						setTimeout(function() {
							res(true)
						}, 1500);
					})
				}
				
			}
		},
		label:{
			type:[String],
			default:'已最近更新'
		}
	})
	const _width = computed(()=>{
		if(typeof props.width=='number') return props.width+'rpx'
		return props.width
	})
	const _height = computed(()=>{
		if(typeof props.height=='number') return props.height+'rpx'
		return props.height
	})
	const _openBootom = computed(()=>props.openBootom)
	const _openPull = computed(()=>props.openPull)
	const _label = computed(()=>props.label)
	//---scroll下拉刷新---------
	//0未初始化/松手可能未被触发，没有达到刷新的条件（即被中止了），1下拉手势中还未放开手。2松开手触发下拉刷新，3复位刷新完成
	type reFreshType = 0|1|2|3
	const sc_top = ref(0)
	const refreshJuli = -100;//达到120才能被刷新
	const reFresh:Ref<reFreshType> = ref(0)
	const isyesResh = ref(false) //是否达到了规定刷新条件。
	const isUpToogle = ref(true) //手指是否放开。
	const _sc_top_height = computed(()=>Math.ceil(Math.abs(sc_top.value)))
	const refreshType = ref('top')
	//---------------
	const _cOpacitye = computed(()=>{
		let jl = Math.abs(reFresh.value==2?-refreshJuli:_sc_top_height.value)
		return jl / 100
		
	})
	//=====
	function onScroll(e:any){
		if(e.detail.scrollTop>0||!_openPull) return
		if(e.detail.scrollTop<0){
			refreshType.value = 'top'
		}
		// 切换页面中不允许下拉。
		// if(tabsSwiperIsMoveing.value) return
		if(reFresh.value==2&&isUpToogle.value) return;
		if(sc_top.value<=refreshJuli){
			isyesResh.value = true
		}else{
			isyesResh.value = false
		}
		
		sc_top.value = e.detail.scrollTop
		reFresh.value =1;
	}
	function onScrollStart(){
		// 切换页面中不允许下拉。
		// if(tabsSwiperIsMoveing.value) return
		isUpToogle.value = false;
	}
	async function onScrollEnd(){
		isUpToogle.value = true;
		if(reFresh.value ==2||!_openPull) return;
		if(refreshType.value =='bottom'){
			return
		}
		// 切换页面中不允许下拉。
		// if(tabsSwiperIsMoveing.value) return
		if(isyesResh.value){
			reFresh.value =2
			refreshType.value = 'top'
			let p = await funPull('top')
			reFresh.value = 0;
		}else{
			reFresh.value =0;
		}
		sc_top.value = 0
	}
	async function onScrollBootom(){
		refreshType.value = 'bottom'
		if(!_openBootom.value) return;
		if(reFresh.value ==2) return;
		reFresh.value =2
		await funPull('bottom')
		reFresh.value =0;
		
	}
	async function funPull(type: 'top' | 'bottom') {
		if (typeof props.pullFun === 'function') {
			// uni.showLoading({
			// 	title: "...",
			// 	mask: true
			// })
			let p = await props.pullFun(type);
			if (typeof p === 'function') {
				p = await p(type);
			}
			isyesResh.value = false
			// uni.hideLoading();
			return p;
		}
	}
</script>

<style scoped>
.contentOp{
	transition-duration: 0.5s;
	transition-timing-function: ease;
	transition-delay: 0s;
}
.content_opacity{
	transition-property: opacity;
}
.content_height{
	transition-property: opacity , height;
}
.contentx{
	transition-duration: 0.5s;
	transition-timing-function: ease;
	transition-delay: 0s;
	transform: translateY(0px);
	transition-property: transform,top,opacity;
}
.contentxRotate{
	transition-duration: 0.5s;
	transition-timing-function: ease;
	transition-delay: 0s;
	transform: rotate(0deg);
	transition-property: transform;
}
.contentxRotate_deg{
	transform: rotate(180deg);
}
</style>
