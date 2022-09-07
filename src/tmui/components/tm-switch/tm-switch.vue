<template>
	<tm-sheet 
	@click="switchClick"
	:no-level="!_value"
	:followTheme="props.followTheme"
	:followDark="props.followDark"
	:dark="props.dark"
	:shadow="props.shadow"
	:outlined="props.outlined"
	:borderStyle="props.borderStyle"
	:borderDirection="props.borderDirection"
	:linearDeep="props.linearDeep"
	:linear="_value?props.linear:''" :round="viewSize.round" 
	:color="_value?props.color:props.unCheckedColor" 
	:height="viewSize.height" 
	:width="viewSize.width" 
	parenClass="switchbgani"
	:_class="['flex  relative flex-col',props.disabled?'opacity-4':'']" 
	:text="_value?false:props.text"
	unit="px"
	:padding="[0,0]" :margin="props.margin">
		<view class="relative flex  relative flex-col" :style="{padding:'2px',width:`${viewSize.width}px`,height:`${viewSize.height}px`}">
			<view :userInteractionEnabled="false"  class="flex flex-row flex-between "
			:style="[{width:viewSize.coenteWidth+'px',height:viewSize.innerHeight+'px'}]">
				<view class="flex-1 flex-row flex-row-center-center"><tm-text :font-size="viewSize.fontSize" :label="props.label[0]"></tm-text></view>
				<view class="flex-1 flex-row flex-row-center-center"><tm-text :font-size="viewSize.fontSize" :label="props.label[1]"></tm-text></view>
			</view>
			<view :userInteractionEnabled="false" :class="['absolute base nvue',_value?'on':'off',]" 
			ref="switch"
			:style="{
				width:viewSize.innerWidth+'px',
				height:viewSize.innerHeight+'px',
				
			}" 
			class="flex flex-col">
				<tm-sheet
				:userInteractionEnabled="false"
				:padding="[0,0]"
				:margin="[0,0]"
				:height="viewSize.innerHeight"
				:width="viewSize.innerWidth"
				:color="props.barColor"
				:follow-dark="false"
				:round="viewSize.round"
				unit="px"
				_class="flex flex-center flex-row"
				>
				   <tm-icon :followTheme="props.followTheme" v-if="_load" :font-size="viewSize.fontSize" :color="props.color"  name="tmicon-loading" spin></tm-icon>
				   <tmTranslate name="zoom" v-if="!_load&&_value">
					   <tm-icon :followTheme="props.followTheme" :font-size="viewSize.fontSize" :color="props.color"   :name="props.barIcon"></tm-icon>
				   </tmTranslate>
				</tm-sheet>
			</view>
		</view>
	</tm-sheet>
</template>

<script lang="ts" setup>
/**
 * 开关
 * @description 便捷的选择框。可以加载中，异步开关。
 */
import { computed,ref,getCurrentInstance,onMounted,toRaw, watchEffect, watch, nextTick ,inject, PropType} from 'vue';
import { inputPushItem, rulesItem } from "./../tm-form-item/interface"
import { custom_props } from '../../tool/lib/minxs';
import tmSheet from '../tm-sheet/tm-sheet.vue';
import tmText from '../tm-text/tm-text.vue';
import tmIcon from '../tm-icon/tm-icon.vue';
import tmTranslate from '../tm-translate/tm-translate.vue';
// #ifdef APP-PLUS-NVUE
const animation = uni.requireNativePlugin('animation')
// #endif
/**
 * 事件说明
 * update:modelValue v-model双向绑定数据。
 */
const emits = defineEmits(['update:modelValue','change','click'])
const proxy = getCurrentInstance()?.proxy??null;
const props = defineProps({
	...custom_props,
	//是否跟随全局主题的变换而变换
	followTheme: {
		type: [Boolean, String],
		default: true
	},
	margin:{
		type:Array as PropType<Array<number>>,
		default:()=>[0,0]
	},
	transprent:{
		type:Boolean,
		default:false
	},
	defaultValue:{
		type:Boolean,
		default:false
	},
	modelValue:{
		type:Boolean,
		default:false
	},
	width:{
		type:Number,
		default:0
	},
	height:{
		type:Number,
		default:0
	},
	size:{
		type:String,
		default:'normal' //mini,normal,large
	},
	//激活后的主题色
	color:{
		type:String,
		default:'primary'
	},
	//未激活的背景色
	unCheckedColor:{
		type:String,
		default:'grey-3'
	},
	// 小圆球冒的背景色。
	barColor:{
		type:String,
		default:'white'
	},
	round:{
		type:Number,
		default:10
	},
	load:{
		type:Boolean,
		default:false
	},
	beforeChecked:{
		type:[Function,Boolean,String],
		default:()=>false
	},
	/**
	 * 自定义打开成功后的bar上的小图标。
	 */
	barIcon:{
		type:String,
		default:'tmicon-check'
	},
	disabled:{
		type:Boolean,
		default:false
	},
	label:{
		type:Array as PropType<Array<string>>,
		default:()=>["",""]
	}
})

const viewSize = computed(()=>{
	let width = 0;
	let height = 0;
	let fontSize = 24;
	let gutter =  2
	
	let round = props.round;
	if(props.width&&props.height){
		width = props.width;
		height = props.height;
		fontSize = height*0.45
		
	}else{
		if(props.size == 'normal'){
			width = 100;
			height = 50
			fontSize = 26
		}else if(props.size == 'mini'){
			width = 80;
			height = 40
			fontSize = 22
		}else if(props.size == 'large'){
			width = 120;
			height = 60
			fontSize = 32
			round = 24;
		}
	}
	let gutterPx = gutter
	width = Math.ceil(uni.upx2px(width))
	height = Math.ceil(uni.upx2px(height))
	let obj = {
		width:width,
		height:height,
		innerHeight:height-gutterPx*2,
		innerWidth:(width)/2-gutterPx*2,
		coenteWidth:width-gutterPx*2,
		conentWidthPx:width-gutterPx*2,
		fontSize:fontSize,
		round:round
	}
	
	return obj
})

const _value = ref(false);
if(props.defaultValue){
	_value.value = props.defaultValue;
	
}
const _load = ref(false)
watchEffect(()=>{
	_load.value = props.load;
})
async function switchClick(){
	emits('click')
	if(_load.value||props.disabled) return;
	 if (typeof props.beforeChecked === 'function') {
        _load.value=true;
        let p = await props.beforeChecked();
        if(typeof p === 'function'){
            p = await p();
        }
        _load.value=false;
        if (!p) return;
    }
	_value.value = !_value.value
	spinNvueAni(_value.value)
	emits('change',_value.value)
	emits('update:modelValue',_value.value)
	pushFormItem()
}
watch(()=>props.modelValue,(newval:boolean)=>{
	_value.value = newval;
	spinNvueAni(newval);
})
onMounted(()=>{
	nextTick(()=>spinNvueAni(_value.value))
})

function spinNvueAni(reveser=false) {
	// #ifdef APP-NVUE
	if (!proxy?.$refs['switch']) return;
	
	var testEl = proxy?.$refs.switch;
	animation.transition(testEl, {
		styles: {
			transform: reveser?`translateX(${viewSize.value.innerWidth+4}px)`:'translateX(0px)',
			transformOrigin: 'center center'
		},
		duration: 250, //ms
		timingFunction: 'ease',
		delay: 0 //ms
	},()=>{
		
	})
	// #endif

}


/** -----------form专有------------ */
//父级方法。
const rulesObj = inject("tmFormItemRules",computed<Array<rulesItem>>(()=>{
    return [
        {
            message:"请选择",
            required:false,
            validator:false
        }
    ]
}))
//父级方法。
let parentFormItem:any = proxy?.$parent
while (parentFormItem) {
    if (parentFormItem?.tmFormComnameFormItem == 'tmFormComnameFormItem' || !parentFormItem) {
        break;
    } else {
        parentFormItem = parentFormItem?.$parent ?? undefined
       
    }
}
const validate =(rules:Array<rulesItem>)=>{
    rules = rules.map(el=>{
        if(typeof el.validator === "function" && el.required===true){
            return el
        }else if(typeof el.validator === "boolean" && el.required===true){
            return {
                ...el,
                validator:(val:boolean)=>{
                    return val===true?true:false
                }
            }
        }else{
            return {
                ...el,
                validator:(val:string|number)=>{
                    return true
                }
            }
        }
        
    })
    let rules_filter:Array<rulesItem> = rules.filter(el=>{
        return typeof el.validator === "function" && el.required===true
    })
    let rules_fun:Array<Promise<rulesItem>> = rules_filter.map(el=>{
        return new Promise(async (res,rej)=>{
            if(typeof el.validator ==='function'){
                let vr = await el.validator(_value.value)
                if(vr){
                    res({
                        message:String(el.message),
                        validator:true
                    })
                }else{
                    rej({
                        message:el.message,
                        validator:false
                    })
                }
            }else{
                res({
                    message:el.message,
                    validator:true
                })
            }
        })
    })
    return Promise.all(rules_fun)
}
async function pushFormItem(isCheckVail = true){
	if (parentFormItem) {
        if (isCheckVail) {
            validate(toRaw(rulesObj.value)).then(ev => {
                parentFormItem.pushCom({
                    value: _value.value,
                    isRequiredError: false,//true,错误，false正常 检验状态
                    componentsName: 'tm-switch',//表单组件类型。
                    message: ev.length==0?"":ev[0].message,//检验信息提示语。
                })
            }).catch(er => {
                parentFormItem.pushCom({
                    value: _value.value,
                    isRequiredError: true,//true,错误，false正常 检验状态
                    componentsName: 'tm-switch',//表单组件类型。
                    message: er.message,//检验信息提示语。
                })
                
            })
        }
    }
}
pushFormItem()

const tmFormFun = inject("tmFormFun",computed(()=>""))
watch(tmFormFun,()=>{
    if(tmFormFun.value=='reset'){
		_value.value = false
		emits('update:modelValue',_value.value)
		pushFormItem(false)
    }
})
/** -----------end------------ */
</script>
<style scoped>
/* #ifndef APP-NVUE */
	.base{
		transform:translateX(0%);
		transition: 0.2s ease;
		left: 0;
	}
	.on{
		left:calc(50% + 2px)
	}
	.off{
		left:2px
	}
	/* #endif */
</style>
<style>
	.switchbgani{
		transition-timing-function: ease;
		transition-property: background-color;
		transition-duration: 0.3s;
		transition-delay: 0ms;
	}
</style>

