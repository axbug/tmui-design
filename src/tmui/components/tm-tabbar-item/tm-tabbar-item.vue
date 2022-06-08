<template>
	<tm-sheet 
	 :height='50'
	 :width='_width'
	 :round='24'
	 unit='px'
	 _class='flex-center flex '
	 :_style="_styletop"
	 :transprent="_transprent" :color="props.color" :border="0"  :margin="[0,0]" 
	 :padding="_padding" hover-class="opacity-7"
	 @click="itemClick"
	 >
		<tm-badge
		:fontSize="20"
		 :color="c_font_style.dotColor" 
		 :eventPenetrationEnabled="true" 
		 :dot="props.dot" :count="props.count" 
		 :icon="props.dotIcon" 
		 :maxCount="props.maxCount">
			<view  class="flex flex-col flex-col-center-center " :style="{width:65+'px',height:'32px'}">
				<slot>
					<tm-icon  
					_style="line-height: normal;" 
					:color="_color" 
					:font-size="c_font_style.iconSize" 
					:name="(_active?c_font_style.icon:(c_font_style.unicon||c_font_style.icon))"></tm-icon>
					
				</slot>
			</view>
		</tm-badge>
		<tm-text v-if="c_font_style.text!==''" :color="_color" _class="pt-4" :font-size="c_font_style.textSize" :label='c_font_style.text'></tm-text>
	</tm-sheet>
</template>

<script lang="ts" setup>
	import tmBadge from "../tm-badge/tm-badge.vue";
	import tmText from "../tm-text/tm-text.vue";
	import tmIcon from "../tm-icon/tm-icon.vue";
	import tmSheet from "../tm-sheet/tm-sheet.vue";
	import {
		custom_props,
	} from '../../tool/lib/minxs';
	import { getCurrentInstance, computed,watchEffect, ref, provide, inject , onUpdated, onMounted, onUnmounted, nextTick ,watch, PropType } from 'vue';
	const emits = defineEmits(["click","beforeClick"])
	const {proxy} = getCurrentInstance();
	const props = defineProps({
		...custom_props,
		transprent:{
			type:Boolean,
			default:true,
		},
		color:{
			type:String,
			default:'white'
		},
		fontColor:{
			type:String,
			default:'grey-darken-1'
		},
		activeColor:{
			type:String,
			default:'primary'
		},
		//当前是否是活动项。
		active:{
			type:Boolean,
			default:false,
		},
		//是否开启向上凸起的按钮。
		btnTop:{
			type:Boolean,
			default:false,
		},
		text:{
			type:String,
			default:''
		},
		icon:{
			type:String,
			default:''
		},
		//未选中时的图标，如果不填写默认使用相同的图标。
		unicon:{
			type:String,
			default:''
		},
		textSize:{
			type:Number,
			default:20
		},
		iconSize:{
			type:Number,
			default:38
		},
		dot:{
			type:[Boolean, String],
			default:false
		},
		dotColor:{
			type:[String],
			default:"red"
		},
		dotIcon:{
			type:[Boolean, String],
			default:false
		},
		//如果count为数字时，显示数字角标，如果为string是显示文本角标。
		count:{
			type:[Number, String],
			default:0
		},
		maxCount:{
			type:[Number, String],
			default:99
		},
		url:{
			type:[String],
			default:""
		},
		//链接打开方式同官方。
		openType:{
			type:[String],
			default:"navigate"
		},
		//打开链接之前执行的勾子函数，返回fase阻止打开。也可以返回new Promise.
		beforeClick:{
			type:[Function,Boolean],
			default:()=>false
		}
	})
	
	const _transprent = computed(()=>{
		if(props.btnTop===true) return false;
		return props.transprent;
	})
	const _styletop = computed(()=>{
		if(props.btnTop===true) return 'top:-15px';
		return '';
	})
	
	const _padding = computed(()=>{
		return [0,0];
	})
	const _active = ref(props.active||false)
	const c_font_style = computed(()=>{
		return {dotColor:props.dotColor,text:props.text,icon:props.icon,textSize:props.textSize,iconSize:props.iconSize,unicon:props.unicon}
	})
	const uid = uni.$tm.u.getUid(1);
	const tmTabbarWidth = inject("tmTabbarWidth",computed(()=>50))
	const _width = computed(()=>{
		if(props.btnTop===true) return 50;
		return tmTabbarWidth.value;
	})
	const nowUrl = inject("tmTabbarUrl",computed(()=>""))
	const _color = computed(()=>{
		if(_active.value===true) return props.activeColor
		return props.fontColor
	})
	
	//父级方法。
	let parent = proxy.$parent
	while (parent) {
	    if(parent?.tmTabbarId=='tmTabbarId'||!parent){
	        break;
	    }else{
	        parent = parent?.$parent??undefined
	    }
	}
	if(parent){
		parent.pushKey(uid)
	}
	onUnmounted(()=>{
		if(parent){
			parent.delKey(uid)
		}
	})
	function setActive(){
		if(typeof nowUrl.value == 'undefined' || nowUrl.value==""){
			return;
		}
		_active.value=nowUrl.value==props.url?true:false;
		
	}
	
	
	watch([nowUrl,()=>props.active],()=>{
		setActive()
	})
	async function itemClick(){
		emits("click");
		if (typeof props.beforeClick === 'function') {
		    uni.showLoading({title:"...",mask:true})
		    let p = await props.beforeClick();
		    if(typeof p === 'function'){
		        p = await p();
		    }
		    uni.hideLoading();
		    if (!p) return;
		}
		if(parent){
		    parent.setNowurl(props.url)
		}
		nextTick(()=>{
			setActive()
			if(props.url=="") return
			if(props.openType=='navigate'){
				uni.navigateTo({
					url:props.url,
					fail(er) {
						console.error(er)
					}
				})
			}else if(props.openType=='redirect'){
				uni.redirect({
					url:props.url,
					fail(er) {
						console.error(er)
					}
				})
			}else if(props.openType=='switchTab'){
				uni.switchTab({
					url:props.url,
					fail(er) {
						console.error(er)
					}
				})
			}else if(props.openType=='reLaunch'){
				uni.reLaunch({
					url:props.url,
					fail(er) {
						console.error(er)
					}
				})
			}else if(props.openType=='navigateBack'){
				uni.navigateBack({
					url:props.url,
					fail(er) {
						console.error(er)
					}
				})
			}
		})
		
	}
</script>

<style scoped>

</style>
