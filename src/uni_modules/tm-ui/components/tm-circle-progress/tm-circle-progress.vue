<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->

<script setup lang="ts">
import { computed, getCurrentInstance, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useTmConfig } from '../../libs/config'
import { getDefaultColor } from '../../libs/colors'
import { PropsType } from './propsType'
import { debounce, throttle } from '../../useFun/toolUse'
import { covetUniNumber } from '../../libs/tool'

/**
 * @displayName 圆环进度条
 * @exportName tm-circle-progress
 * @category 反馈组件
 * @description 通用进度条组件。
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({
    name: 'TmCircleProgress', options: {
        styleIsolation: "apply-shared",
        virtualHost: true,
        addGlobalClass: true,
        multipleSlots: true,
    }
});
const { config } = useTmConfig()

const props = withDefaults(defineProps<PropsType>(), {
    modelValue: 0,
    min: 0,
    max: 100,
    color: "",
    bgColor: "info",
    darkBgColor: "",
    showLabel: true,
    labelColor: "#333",
    labelFontSize: 24,
    size: 100,
    duration: 500,
    startAngle:0,
    linearColor: '',
    lineWidth: 10,
    labelUnit: '%'
})
const emit = defineEmits<{
    /**
     * 等同v-model
     * @description 进度条值改变事件
     */
    (e: 'update:modelValue', val: number): void
}>()
const _props = computed(() => props);
const uid = 'TmCircleProgress' + Math.random().toString(36).substring(4)
const instance = getCurrentInstance()
const timeid = ref<null | number>(null)
const contentCtx = ref<UniApp.CanvasContext|null>(null)
const _bgColor = computed(() => {
    let color = props.bgColor;
    if (config.mode == 'dark') {
        if (props.darkBgColor) {
            color = props.darkBgColor
        } else {
            color = config.inputDarkColor
        }
    } else if (!color) {
        color = 'info'
    }
    return getDefaultColor(color);
})
const _color = computed(() => {
    let color = props.color || 'primary';
    return getDefaultColor(color);
})
const _labelColor = computed(() => {
    return getDefaultColor(props.labelColor || "#333");
})

const _size = computed(() => {
    let linewidth = covetUniNumber(props.size, config.unit);
    let lineNumber = parseInt(linewidth)
    if (linewidth.indexOf('rpx') > -1) {
        lineNumber = uni.upx2px(lineNumber)
    }
    return lineNumber
})
const _labelUnit = computed(() => props.labelUnit)

const _lineWidth = computed(() => {
    let linewidth = covetUniNumber(props.lineWidth, config.unit);
    let lineNumber = parseInt(linewidth)
    if (linewidth.indexOf('rpx') > -1) {
        lineNumber = uni.upx2px(lineNumber)
    }
    return lineNumber
})
const _labelFontSize = computed(() => {
    return covetUniNumber(props.labelFontSize, config.unit)
})
const getPercent = (val: number) => {
    let percent = (val - props.min) / (props.max - props.min)
    return percent
}
const getPercentVal = (percent: number) => {
    return percent * (props.max - props.min) + props.min
}
const currentVal = ref(props.modelValue)
const _currentVal = computed({
    get() {
        return currentVal.value
    },
    set(val) {
        currentVal.value = val
        emit('update:modelValue', val)
    }
})
const percent = computed(() => {
    return getPercent(_currentVal.value) * 100
})



const getCanvasCtx = (): Promise<UniApp.CanvasContext> => {
	if(contentCtx.value!=null) return Promise.resolve(contentCtx.value)
    return new Promise((resolve)=>{
		uni.createSelectorQuery()
			.in(instance)
		    .select('#'+uid)  
		      .fields({ node: true, size: true ,context:true})  
		      .exec((res) => {  
		        const canvas = res[0].node  
		        const ctx = canvas.getContext('2d')  
		        const dpr = uni.getWindowInfo().pixelRatio;
		        // #ifndef WEB
				canvas.width = res[0].width * dpr
				canvas.height = res[0].height * dpr  
				ctx.scale(dpr, dpr)  
				// #endif
				contentCtx.value = ctx;
				
				resolve(ctx)
		})  
	})
}


const currentPercent = ref(0)

// 解析渐变色
const parseLinearGradient = (linearColor: string) => {
    if (!linearColor || linearColor.indexOf('linear-gradient') === -1) {
        return null
    }
    // 匹配 linear-gradient(to right, #FFEB3A 0%, #4DEF8E 100%) 格式
    const match = linearColor.match(/linear-gradient\(([^,]+),\s*([^)]+)\)/)
    if (!match) return null
    
    const direction = match[1].trim()
    const colorStops = match[2].trim()
    
    // 解析颜色和位置 - 简单按逗号分割
    const stops = colorStops.split(',').map(stop => stop.trim())
    const colors = stops.map(stop => {
        const colorMatch = stop.match(/(^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})|rgba?\([^)]+\)|[a-zA-Z]+)/)
        return colorMatch ? colorMatch[1] : stop
    }).filter(color => color)
    
    if (colors.length < 2) return null
    
    return {
        colors: colors,
        hasGradient: true
    }
}

// 纯绘制函数
const drawProgress = async () => {
    const ctx =  contentCtx.value
	
	if(ctx==null) return;
    // 绘制圆环进度条的逻辑
    let size = _size.value;
    let lineWidth = _lineWidth.value;
    let linearBgColor = _bgColor.value;
    let linearActiveBgColor = _color.value;
    ctx.clearRect(0, 0, size, size);

    // 计算圆环参数
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = centerX - lineWidth / 2;

    // 背景圆环
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = linearBgColor
    ctx.lineCap = 'round'
    ctx.stroke();

    // 进度圆环
    if (currentPercent.value > 0) {
        ctx.beginPath();
        // 使用自定义起始角度，Web标准：0度为正上方，顺时针为正
        const startAngle = (-90 + _props.value.startAngle) * Math.PI / 180;
        const endAngle = startAngle + (2 * Math.PI * currentPercent.value / 100);
        
        // 检查是否使用渐变色
        const gradientData = parseLinearGradient(_props.value.linearColor)
      
        if (gradientData && gradientData.hasGradient) {
            
            // 创建渐变
            const gradient = ctx.createLinearGradient(0, 0, size, size)
            gradientData.colors.forEach((color, index) => {
                gradient.addColorStop(index / (gradientData.colors.length - 1), color)
            })
            // @ts-ignore
            ctx.strokeStyle = gradient
        } else {
            ctx.strokeStyle = linearActiveBgColor
        }
        
        ctx.lineWidth = lineWidth
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.lineCap = 'round'
        ctx.stroke();
    }
	if(typeof ctx?.draw == 'function'){
		ctx.draw()
	}
}

// 带动画的函数
const drawCirle = (targetPercent: number) => {
    // 如果已经在动画中，先清理之前的定时器
    if (timeid.value) {
        clearTimeout(timeid.value)
    }

    const duration = _props.value.duration // 动画时长（毫秒）
    const frameRate = 16 // 每帧时间（毫秒）
    const totalFrames = Math.max(1, Math.floor(duration / frameRate)) // 总帧数
    
    let currentFrame = 0
    const startValue = currentPercent.value
    const totalDiff = targetPercent - startValue

    const animate = () => {
        currentFrame++
        
        if (currentFrame <= totalFrames) {
            // 使用缓动函数 (ease-out)
            const progress = currentFrame / totalFrames
            const easeProgress = 1 - Math.pow(1 - progress, 3) // cubic ease-out
            currentPercent.value = startValue + totalDiff * easeProgress
            
            drawProgress() // 只绘制，不触发新的动画
            timeid.value = setTimeout(animate, frameRate)
        } else {
            currentPercent.value = targetPercent
            drawProgress() // 最终绘制
            timeid.value = null
        }
    }

    // 如果目标值和当前值相同，直接绘制
    if (targetPercent === currentPercent.value || totalDiff === 0) {
        drawProgress()
    } else {
        animate()
    }
}

watch(() => props.modelValue, (val: number) => {
    if (val == currentVal.value) return;
    _currentVal.value = val
})

watch(() => percent.value,async (val: number) => {
	await getCanvasCtx()
    drawCirle(val)
})
onMounted(() => {
    nextTick(async () => {
		await getCanvasCtx()
		drawCirle(percent.value)
    })
})

onBeforeUnmount(() => {
    if (timeid.value) {
        clearTimeout(timeid.value)
        timeid.value = null
    }
})
</script>
<template>
    <view class="tmCircleProgress" :style="{ width: _size + 'px', height: _size + 'px' }">
        <canvas :style="{ width: _size + 'px', height: _size + 'px' }" :id="uid" :canvas-id="uid" :hidpi="true" type="2d"></canvas>
        <view v-if="_props.showLabel" class="tmCircleProgressLabel" :style="{ color: _labelColor, fontSize: _labelFontSize }">
            <!-- 
            @slot 标签插槽
            @binding {value} number 值
            @binding {percentage} number 百分比
            -->
            <slot :percentage="percent" :value="_currentVal">
                {{ percent.toFixed(0) }}{{ _labelUnit }}
            </slot>
        </view>
    </view>
</template>
<style lang="scss" scoped>
.tmCircleProgress {
    position: relative;
}

.tmCircleProgressLabel {
    line-height: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

}
</style>