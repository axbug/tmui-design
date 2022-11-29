<template>
<!-- 侧边栏菜单 导航 。 -->
	<view class="flex flex-row">
		<tm-sheet no-level :color="props.bgColor" :height="props.height " :unit="props.unit" :margin="[0,0]" :padding="[0,0]" >
		<scroll-view  scroll-y :style="{ height: props.height + props.unit,width:props.sliderWidth+'rpx' }">
				<tm-sheet 
				@click="menuClick(item,index)" 
				:transprent="_active!==index"
				:color="props.activeColor" 
				_class="flex flex-row flex-row-center-start" 
				:margin="[0,0]" :height="props.itemHeight" 
				:padding="[0,0]" :width="props.sliderWidth" 
				borderDirection="bottom"
				v-for="(item,index) in _list" :key="index">
					<!-- <tm-sheet :userInteractionEnabled="false" v-if="_active==index" :height="props.itemHeight"  :margin="[0,0]" :padding="[0,0]" :color="props.sliderBarColor" :width="4"></tm-sheet> -->
					<tm-badge :userInteractionEnabled="false" color="red" :count="item.dotCount" >
						<view class="flex-1 px-10 flex flex-row flex-row-center-center py-16 text-align-center" :style="{width:`${props.sliderWidth-28}rpx`}">
							<tm-text _class="text-align-center" :color="_active==index?props.sliderBarColor:'black'" :font-size="props.fontSize" :label="item.text"></tm-text>
						</view>
						<tm-divider v-if="_active!==index" color="grey-4" real-color :margin="[0,0]"></tm-divider>
					</tm-badge>
					
				</tm-sheet>
		</scroll-view>
		</tm-sheet>
		<tm-sheet :margin="[0,0]" :padding="[0,0]" :color="props.rightBgColor">
			<scroll-view :refresher-triggered="_refresh" 
			@scrolltolower="onBottom" 
			@refresherrefresh="onRefresh" 
			@refresherrestore="onRestore" 
			@refresherabort="onAbort" 
			refresher-enabled 
			scroll-y 
			:style="{ height: props.height + props.unit,width:(props.width-slidWidthPx)+props.unit }"
			>
				<slot name="default"></slot>
				<view v-if="_pullStauts=='bottom'&&_isLoadding" class="my-40 flex flex-row flex-row-center-center">
					<tm-icon spin name="tmicon-shuaxin" :font-size="22" color="primary"></tm-icon>
					<tm-text :font-size="22" color="grey" _class="pl-20" label="加载中..."></tm-text>
				</view>
			</scroll-view>
		</tm-sheet>
	</view>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance, nextTick, Ref, computed, PropType, watch } from "vue"
interface listItem {
	text:string,
	dotCount?:number|string
	[prop:string]:any
}
/**事件 */
const emits = defineEmits<{
  (e: 'click', item:listItem,index:number): void
  (e: 'change', index:number): void
  (e: 'update:active', index:number): void
  (e: 'load', type:'loading'|'success'|any): void
  (e: 'restore'): void
}>()

const props = defineProps({
	height:{
		type:Number,
		default:500
	},
	width:{
		type:Number,
		default:500
	},
	sliderWidth:{
		type:Number,
		default:190
	},
	itemHeight:{
		type:Number,
		default:70
	},
	fontSize:{
		type:Number,
		default:26
	},
	active:{
		type:Number,
		default:0
	},
	activeColor:{
		type:String,
		default:'white'
	},
	bgColor:{
		type:String,
		default:'white'
	},
	sliderBarColor:{
		type:String,
		default:'primary'
	},
	rightBgColor:{
		type:String,
		default:'white'
	},
	//只针对整体的宽和高，项目的高还是rpx.
	unit:{
		type:String,
		default:'rpx'
	},
	list:{
		type:Array as PropType<Array<listItem>>,
		default:()=>[]
	},
	refresh:{
		type:Boolean,
		default:false
	},
	/**触发加载函数 */
	load:{
		type:Function as PropType<(type: 'pull'|'bottom'|'menu',item:listItem,index:number)=>void>,
		default:()=>null
	},
	/**首次是否进行load数据加载触发状态. */
	firstLoad:{
		type:Boolean,
		default:true
	},
	/**是否禁用下拉刷新功能. */
	disabledBottom:{
		type:Boolean,
		default:false
	}
})
const slidWidthPx = uni.upx2px(props.sliderWidth)
const _list = computed(()=>{
	return props.list.map(el=>{
		return {...el,dotCount:el?.dotCount??0}
	})
})
/**设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发 */
const _refresh:Ref<boolean|string> = ref(true);
const _isLoadding = ref(false);//是否刷新中.
const _pullStauts:Ref<'pull'|'bottom'|'menu'|''> = ref('')
const _active = ref(props.active);
watch(()=>props.active,()=>{
	if(props.active==_active.value) return;
	_active.value = props.active;
})

watch(_active,()=>{
	emits("update:active",_active.value)
	emits("change",_active.value)
})
const menuClick = async (item:listItem,index:number)=>{
	_active.value = index;
	nextTick(async ()=>{
		emits("click",item,index)
		emits("load",'loading')
		_isLoadding.value = true;
		_pullStauts.value = 'menu'
		await actionLoad('menu',item,index)
		_isLoadding.value = false;
		emits("load",'success')
	})
}
async function onRefresh(){
	if(_isLoadding.value){
		_refresh.value = false;
		return;
	}
	emits('restore')
	emits("load",'loading')
	_isLoadding.value = true;
	_pullStauts.value = 'pull'
	await actionLoad('pull')
	// _refresh.value = false;
	_refresh.value = true;
	setTimeout(function(){
		_isLoadding.value = false;
		_refresh.value = false;
	},300)
}
async function onBottom() {
	
	if(_isLoadding.value||props.disabledBottom) return;
	emits("load",'loading')
	_isLoadding.value = true;
	_pullStauts.value = 'bottom'
	await actionLoad('bottom')
	emits("load",'success')
	_isLoadding.value = false;
	
}

async function actionLoad(type:'pull'|'bottom'|'menu',item:listItem|null=null,index:number=NaN){
	let fun = props.load;
	let p:any = true;
	uni.showLoading({title:'...',mask:true})
	if(typeof fun === 'function'){
		p = await fun(type,item,index)
		if(typeof p === 'function'){
			await p(type,item,index)
		}
	}

	uni.hideLoading()
}

function onAbort(){
	_refresh.value = false;
}
function onRestore(){
	_refresh.value = false;
	// console.error('restore')
}
</script>

<style>
</style>
