<template>
	<view class="fixed l-0 b-0 " :style="{ width: _width + 'px', height: 95 + 'px',transform:`translateY(${props.bottom}rpx)` }">
		<tm-sheet
			@click="emits('click', $event)"
			:blur="_blur"
			:color="props.color"
			_class="relative"
			_style="top:25px;"
			:followTheme="props.followTheme"
			:dark="props.dark"
			:round="props.round"
			:shadow="props.shadow"
			:outlined="props.outlined"
			:border="1"
			borderDirection="top"
			:text="props.text"
			:transprent="props.transprent"
			:linear="props.linear"
			:linearDeep="props.linearDeep"
			:margin="[0, 0]"
			:padding="[0, 0]"
			:height="70"
			:width="_width"
			unit="px"
		>
			<view class="relative barcont flex flex-row flex-row-center-center flex-around" :style="{ width: _width + 'px', height: 50 + 'px' }"><slot></slot></view>
			<view v-if="props.showSafe" class="statusHeight" :style="{ height: '20px' }"></view>
		</tm-sheet>
	</view>
</template>

<script lang="ts" setup>
/**
 * 底部导航栏
 * @description 内部只能放置,tm-tabbar-item
 */
import tmSheet from '../tm-sheet/tm-sheet.vue';
import tmText from '../tm-text/tm-text.vue';
import tmIcon from '../tm-icon/tm-icon.vue';
import { custom_props } from '../../tool/lib/minxs';
import { getCurrentInstance, computed,Ref, ref, provide, inject, onUpdated, onMounted, onUnmounted, nextTick, watch, PropType } from 'vue';
import { useTmpiniaStore } from '../../tool/lib/tmpinia';
const store = useTmpiniaStore();
const emits = defineEmits(['click']);
const { proxy } = getCurrentInstance();
const props = defineProps({
	...custom_props,
	transprent: {
		type: [Boolean, String],
		default: false
	},
	color: {
		type: [String],
		default: 'white'
	},
	text: {
		type: [Boolean],
		default: false
	},
	round: {
		type: [Number, String],
		default: 0
	},
	shadow: {
		type: [Number],
		default: 0
	},
	//如果为0取当前窗口宽度。
	width:{
		type: [Number],
		default: 0
	},
	//底部偏移
	bottom:{
		type: [Number],
		default: 0
	},
	//是否显示安全区域
	showSafe:{
		type: [Boolean],
		default: true
	}
	
});
const _width = uni.upx2px(props.width)||uni.getSystemInfoSync().windowWidth;
const _blur = computed(()=>props.blur)
const _activeUrl:Ref<string> = ref(undefined)
const tmTabbarId = "tmTabbarId";
const _cachlist = ref([])
function setNowurl(url:string){
	_activeUrl.value = url;
}
function pushKey(uid:number){
	_cachlist.value = [...new Set([..._cachlist.value,uid])]
}
function delKey(uid:number){
	_cachlist.value = _cachlist.value.filter(el=>el!=uid)
}
defineExpose({tmTabbarId,setNowurl,pushKey,delKey})
provide('tmTabbarUrl',computed(()=>_activeUrl.value))
provide('tmTabbarWidth',computed(()=>Math.ceil(_width/_cachlist.value.length)))
provide('tmTabbarItemList',computed(()=>_cachlist.value))
</script>

<style>
/* #ifdef APP-NVUE */
.barcont {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}
/* #endif */
/* #ifndef APP-NVUE */
.barcont {
	display: flex;
	flex-direction: row !important;
	justify-content: space-around !important;
	align-items: center !important;
}
/* #endif */
</style>
