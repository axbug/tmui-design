<template>
	<tm-overlay ref="Overlay" @open="overlayOpen" @close="msgOver"  :duration="280" :transprent="!showMask"  :_style="zindex" :overlayClick="false" v-model:show="showValue">
		<tm-translate :initByWechat="initByWechat"  :reverse="reverse" ref="tranAni" name="zoom" :duration="200" :auto-play="false">
			<tm-sheet blur :_style="props._style"  
			:_class="props._class" :color="bgColor" 
			:border="1" :shadow="10" 
			:width="props.width"
			:height="props.height"
			:margin="[40,40]" :round="props.round"  :padding="props.padding">
				<view class="flex flex-center flex-col ma-30" style="line-height: normal">
					<slot>
						<tm-icon _style="line-height: normal" style="line-height: normal" _class="pa-10" :spin="model_ref == 'load'"
							:color="color_ref" :fontSize="72" :name="icon_ref"></tm-icon>
						<tm-text :font-size="30" _class="pt-8 text-overflow-1" :label="text_ref"></tm-text>
					</slot>
				</view>
			</tm-sheet>
		</tm-translate>
	</tm-overlay>
</template>

<script lang="ts" setup>
	/**
	 * 消息提示
	 * @description 消息提示，属于全局阻断式提醒，会打断用户操作。
	 */
	import {language} from "../../tool/lib/language"
	import tmSheet from "../tm-sheet/tm-sheet.vue";
	import tmText from "../tm-text/tm-text.vue";
	import tmIcon from "../tm-icon/tm-icon.vue";
	import tmTranslate from "../tm-translate/tm-translate.vue";
	import tmOverlay from "../tm-overlay/tm-overlay.vue";
	import { config,modelType } from "./interface";
	import { useTmpiniaStore } from '../../tool/lib/tmpinia';
	import { getCurrentInstance, computed, ref, provide, inject, ComponentInternalInstance, onUnmounted, nextTick ,watch, Ref, PropType } from 'vue';
	const store = useTmpiniaStore();
	const tranAni  = ref<InstanceType<typeof tmTranslate> | null>(null)
	const Overlay  = ref<InstanceType<typeof tmOverlay> | null>(null)
	const emits = defineEmits(['click'])
	const proxy = getCurrentInstance()?.proxy??null;
	const props = defineProps({
		//自定义的样式属性
		_style: {
			type: [Array, String, Object],
			default: () => { }
		},
		round:{
			type: Number,
			default: 12
		},
		padding:{
			type:Array as PropType<Array<number>>,
			default:()=>[24, 0]
		},
		//自定义类名
		_class: {
			type: [Array, String],
			default: 'flex-center'
		},
		//是否显示遮罩
		mask: {
			type: [Boolean],
			default: true
		},
		//自动关闭时,需要显示多久关闭,单位ms
		duration: {
			type: Number,
			default: 1500
		},
		width:{
			type:Number,
			default:300
		},
		height:{
			type:Number,
			default:300
		}
	})
	const uid = ref(uni.$tm.u.getUid(5))
	const bgColor = ref('white')
	const model_ref:Ref<modelType> = ref("info")
	const showValue = ref(false)
	const icon_ref = ref('')
	const text_ref = ref('')
	const color_ref = ref('')
	const reverse = ref(false)
	const dur = ref(0)
	const initByWechat = ref(true)
	const showMask = ref(props.mask)
	const dark_ref = ref(false)
	
	onUnmounted(()=>clearTimeout(uid.value))
	watch(()=>props.mask,(val)=>showMask.value=val)
	let zindex = {};
	// #ifndef APP-NVUE
	zindex = {zIndex:'1000 !important'}
	// #endif
	const modelIcon = computed(()=>{
		
		return {
				load: {
					icon: 'tmicon-loading',
					color: 'primary',
					text: language("message.load.text")
				},
				error: {
					icon: 'tmicon-times-circle',
					color: 'red',
					text: language("message.error.text")
				},
				info: {
					icon: 'tmicon-info-circle',
					text: language("message.info.text"),
					color: 'black'
				},
				warn: {
					icon: 'tmicon-exclamation-circle',
					text: language("message.warn.text"),
					color: 'orange'
				},
				quest: {
					icon: 'tmicon-question-circle',
					text: language("message.quest.text"),
					color: 'pink'
				},
				success: {
					icon: 'tmicon-check-circle',
					text: language("message.success.text"),
					color: 'green'
				},
				disabled: {
					icon: 'tmicon-ban',
					text: language("message.disabled.text"),
					color: 'red'
				},
				wait: {
					icon: 'tmicon-ios-alarm',
					text: language("message.wait.text"),
					color: 'black'
				}
		}
	})
	//动画播放结束。
	function msgOver(){
			tranAni.value?.stop()
			tranAni.value?.reset()
			
	}
		//显示
	function show(argFs:config) {
		//显示所需要的参数
		let arg = argFs||{};
		let { duration, icon, text, color, dark, model ,mask} = arg;
		model_ref.value = typeof model=="undefined"?model_ref.value:model;
		icon_ref.value = icon = icon??modelIcon.value[model_ref.value].icon;
		text_ref.value = text = text??modelIcon.value[model_ref.value].text;
		color_ref.value = color = color??modelIcon.value[model_ref.value].color;
		showMask.value = typeof mask ==='boolean' ?mask:showMask.value
		if (dark === true) {
			bgColor.value = 'black';
		}
		if(typeof dark !== 'boolean'){
			dark = store.tmStore.dark;
		}
		if(color_ref.value=='white'||color_ref.value=="black"){
			color_ref.value=""
		}
		
		dark_ref.value = dark;
		if (typeof duration === 'undefined') {
			duration = props.duration;
		}
		dur.value = isNaN(parseInt(String(duration))) ? 1500 : parseInt(String(duration));
		reverse.value = false;
		showValue.value = true;
	}
	
	function overlayOpen(){
		reverse.value = false;
		nextTick(()=>{
			tranAni.value?.stop()
			tranAni.value?.reset()
			tranAni.value?.play()
			clearTimeout(uid.value)
			uid.value = setTimeout(function() {
				if (dur.value > 0 && model_ref.value != 'load'){
					reverse.value = true;
					showValue.value= false;
					tranAni.value?.stop()
					tranAni.value?.reset()
					nextTick(()=>{
						
						tranAni.value?.play()
					})
				}
			}, dur.value);
		})
	}

	
	//隐藏
	function hide(){
		showValue.value = false;
	}
	defineExpose({show:show,hide:hide})

</script>

<style></style>
