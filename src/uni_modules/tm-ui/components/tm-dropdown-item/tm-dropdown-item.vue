<script setup lang="ts">
import { computed, ComputedRef, getCurrentInstance, inject, onBeforeMount, onBeforeUnmount, onMounted, PropType, ref, watch } from 'vue';
import { useTmConfig } from "../../libs/config";
import TmDropdownMenu from '../tm-dropdown-menu/tm-dropdown-menu.vue';
import { covetUniNumber, findParent } from '../../libs/tool';
import { getDefaultColor } from '../../libs/colors';
import { TmDropdownItemProps } from './propsType';
import { type tmDropDownMenuItemType, type tmDropdownMenuTypeProide } from '../tm-dropdown-menu/propsType';
type TmDropdownMenuType = InstanceType<typeof TmDropdownMenu>
/**
 * @displayName 下拉项子组件
 * @exportName tm-dropdown-item
 * @category 表单组件
 * @page tm-dropdown-menu
 * @description 下拉项子组件，用于下拉菜单中展示选项。
 * @constant 平台兼容
 *    | H5 | uniAPP | 小程序 | version |
 | --- | --- | --- | --- |
 | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({
	name: 'TmDropdownItem', options: {
		styleIsolation: "apply-shared",
		virtualHost: true,
		addGlobalClass: true,
		multipleSlots: true,
	}
});
const { config } = useTmConfig();
const proxy = getCurrentInstance()?.proxy;
const props = withDefaults(defineProps<TmDropdownItemProps>(), {
	title: '标题',
	keyName: '',
	icon: 'arrow-down-s-fill',
	activeIcon: 'arrow-up-s-fill',
	fontColor: '#333333',
	darkFontColor: '',
	fontSize: '28',
	activeFontColor: '',
	isBtn: false,
	color: 'white',
	darkColor: '',
	render: false
});
const _keyName = computed(() => {
	return props.keyName || Math.random().toString(36).substring(2)
})
const pubshChildren = () => {
	const parent = findParent<TmDropdownMenuType>(proxy || null, 'TmDropdownMenu')
	if (parent == null) return;
	
	const data: tmDropDownMenuItemType = {
		title: props.title || '标题',
		keyName: _keyName.value,
		icon: props.icon || 'arrow-down-s-fill',
		activeIcon: props.activeIcon || 'arrow-up-s-fill',
		fontColor: getDefaultColor(props.fontColor || '#333333'),
		darkFontColor: getDefaultColor(props.darkFontColor || '#ffffff'),
		fontSize: covetUniNumber(props.fontSize, config.unit),
		activeFontColor: getDefaultColor(props.activeFontColor || config.color),
		isBtn: props.isBtn,
	}
	parent.addChildren(data)
}
const removeChildren = () => {
	const parent = findParent<TmDropdownMenuType>(proxy || null, 'TmDropdownMenu')
	if (parent == null) return;
	parent.removeChildren(_keyName.value)
}
const sys = uni.getWindowInfo()
const tmDropdownMenu = inject<ComputedRef<tmDropdownMenuTypeProide> | null>('tmDropdownMenu', null);
const _topPos = ref<UniNamespace.NodeInfo|null>(null)
const _isActive = computed(()=>{
	return tmDropdownMenu?.value?.activeName == _keyName.value
})
watch(() => tmDropdownMenu?.value?.activeName, (newVal, oldVal) => {
	tmDropdownMenu?.value?.getNodes().then((res)=>{
		_topPos.value =res
	})
})
watch(():any => props,()=>{
	pubshChildren()
})
onBeforeMount(() => {
	pubshChildren()
})
onBeforeUnmount(() => {
	removeChildren()
})
</script>
<template>
	<view class="tmDropdownItem" v-if="_isActive">
		<view class="tmDropdownItemInner">
			<slot></slot>
		</view>
		<view class="tmDropdownItemFooter">
			<slot name="footer"></slot>
		</view>
	</view>
</template>
<style lang="scss" scoped>
	.tmDropdownItem{
		height: 100%;
		display: flex;
		flex-direction: row;
	}
	.tmDropdownItemInner{
		flex: 1;
	}

	.tmDropdownItemFooter{
		flex-shrink: 0;
	}
</style>
