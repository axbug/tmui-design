<script setup lang="ts">
import { computed, getCurrentInstance, nextTick, onBeforeUnmount, onMounted, ref, StyleValue, watch } from 'vue';
import { useTmConfig } from "../../libs/config";
import { covetUniNumber } from '../../libs/tool';
import { getDefaultColor } from '../../libs/colors';
import type { PropsType } from './propsType';

/**
 * @displayName 双向滑动条
 * @exportName tm-slider-double
 * @category 表单组件
 * @page tm-slider
 * @description 双向滑动条组件，用于双向滑动条中展示选项。
 * @constant 平台兼容
 *    | H5 | uniAPP | 小程序 | version |
 | --- | --- | --- | --- |
 | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({
    name: 'TmSliderDouble', options: {
        styleIsolation: "apply-shared",
        virtualHost: true,
        addGlobalClass: true,
        multipleSlots: true,
    }
});
const props = withDefaults(defineProps<PropsType>(), {
    modelValue: () => [0, 0],
    max: 100,
    min: 0,
    disabled: false,
    step: 1,
    stepCount: 0,
    color: '',
    linearColor:'',
    bgColor: 'info',
    size: '12',
    btnSize: '46',
    round: '12',
    showLabel: false,
    labelColor: 'white',
    labelFontSize: '18'
})
const emit = defineEmits([
    /**
     * 拖动变换时触发
     * @param {number[]} value - 当前的值
     */
    'change',
    'update:modelValue']);
const { config } = useTmConfig();

const instance = getCurrentInstance();
const isDragging = ref(false);
const draggingIndex = ref(-1);
const trackWidth = ref(0);
const trackLeft = ref(0);
const nowValue = ref<number[]>([...props.modelValue]);

// Web端鼠标事件处理函数
const handleGlobalMouseMove = (e: MouseEvent) => {
    if (_disabled.value || !isDragging.value) return;
    const clientX = e.clientX;
    updateValue(clientX, draggingIndex.value);
};

const handleGlobalMouseUp = () => {
    isDragging.value = false;
    draggingIndex.value = -1;
};

const _color = computed(() => {
    return props.color ? getDefaultColor(props.color) : getDefaultColor(config.color || 'primary');
});

const _bgColor = computed(() => {
    return getDefaultColor(props.bgColor);
});

const _round = computed(() => {
    if (props.round !== '') return covetUniNumber(props.round, config.unit);
    return covetUniNumber(config.buttonRadius, config.unit);
});

const _size = computed(() => {
    return covetUniNumber(props.size);
});

const _btnSize = computed(() => {
    return covetUniNumber(props.btnSize, config.unit);
});

const _labelColor = computed(() => {
    return getDefaultColor(props.labelColor);
});

const _labelFontSize = computed(() => {
    return covetUniNumber(props.labelFontSize, config.unit);
});

const _step = computed(() => {
    if (props.stepCount > 0) {
        return (props.max - props.min) / props.stepCount;
    }
    return props.step;
});

const _percent = computed({
    get() {
        const range = props.max - props.min;
        if (range <= 0) return [0, 0];
        let minPercent = ((nowValue.value[0] - props.min) / range) * 100;
        let maxPercent = ((nowValue.value[1] - props.min) / range) * 100;
        if (minPercent < 0) minPercent = 0;
        if (minPercent > 100) minPercent = 100;
        if (maxPercent < 0) maxPercent = 0;
        if (maxPercent > 100) maxPercent = 100;
        return [minPercent, maxPercent];
    },
    set(percents) {
        nowValue.value = [...percents];
        emit('update:modelValue', nowValue.value);
    }
});

const _thumbStyle = computed((): StyleValue[] => {
    const size = _btnSize.value;
    const barSize = _size.value;
    const baseStyle = {
        width: _btnSize.value,
        height: _btnSize.value,
        marginTop: `calc((${size} - ${barSize}) / -2)`,
        marginLeft: `calc(${size} / -2)`,
        color: _color.value,
        border: `calc(${_btnSize.value} / 5) solid #fff`
    };
    return [
        {
            ...baseStyle,
            left: _percent.value[0] + '%'
        },
        {
            ...baseStyle,
            left: _percent.value[1] + '%'
        }
    ];
});

const _fillStyle = computed(() => {
    return {
        left: _percent.value[0] + '%',
        width: (_percent.value[1] - _percent.value[0]) + '%',
        height: _size.value,
        background: props.linearColor || _color.value,
        borderRadius: _round.value
    };
});

const _trackStyle = computed(() => {
    return {
        height: _size.value,
        backgroundColor: _bgColor.value,
        borderRadius: _round.value
    };
});

const _labelStyle = computed((): StyleValue => {
    return {
        color: _color.value,
        backgroundColor: _color.value,
        fontSize: _labelFontSize.value
    };
});

const _disabled = computed(() => props.disabled);

const _cursor = computed(() => {
    return _disabled.value ? 'not-allowed' : 'pointer';
});

const _opacity = computed(() => {
    return _disabled.value ? 0.5 : 1;
});

function getTrackRect() {
    nextTick(() => {
        const query = uni.createSelectorQuery().in(instance);
        query.select('.tm-slider-track').boundingClientRect();
        query.exec((res) => {
            if (res && res[0]) {
                trackWidth.value = res[0].width || 0;
                trackLeft.value = res[0].left || 0;
            }
        });
    });
}

function calculateValue(clientX: number, index: number) {
    if (trackWidth.value === 0) {
        getTrackRect();
        return props.modelValue[index];
    }

    const offsetX = clientX - trackLeft.value;
    let percent = offsetX / trackWidth.value;
    if (percent < 0) percent = 0;
    if (percent > 1) percent = 1;

    const range = props.max - props.min;
    let value = props.min + percent * range;

    const step = _step.value;
    if (step > 0) {
        value = Math.round((value - props.min) / step) * step + props.min;
    }

    if (value < props.min) value = props.min;
    if (value > props.max) value = props.max;

    return value;
}

function updateValue(clientX: number, index: number) {
    const value = calculateValue(clientX, index);
    const newValues = [...nowValue.value];
    newValues[index] = value;
    
    if (index === 0) {
        if (newValues[0] > newValues[1]) {
            newValues[0] = newValues[1];
        }
    } else {
        if (newValues[1] < newValues[0]) {
            newValues[1] = newValues[0];
        }
    }
    
    nowValue.value = newValues;
    emit('change', newValues);
}

const getIndexValue = (val: number) => {
    const midValue = (nowValue.value[0] + nowValue.value[1]) / 2;
    if (val < midValue) {
        return 0;
    } else {
        return 1;
    }
}

function onTrackClick(e: any) {
    // if (_disabled.value) return;
    // const clientX = e.detail?.x || e.touches?.[0]?.clientX || e.clientX;
    // const value = calculateValue(clientX, 0);
    // console.log(getIndexValue(clientX));
    // const midValue = (nowValue.value[0] + nowValue.value[1]) / 2;
    // if (value < midValue) {
    //     updateValue(clientX, 0);
    // } else {
    //     updateValue(clientX, 1);
    // }
}

function onTrackTouchStart(e: any, index: number) {
    if (_disabled.value) return;
    isDragging.value = true;
    const clientX = e.touches?.[0]?.clientX;
    if (index === -1) {
        const tempVal = calculateValue(clientX,0);
        index = getIndexValue(tempVal);
    }
    draggingIndex.value = index;
    getTrackRect();
    updateValue(clientX, index);
}

function onTrackTouchMove(e: any) {
    if (_disabled.value || !isDragging.value) return;
    const clientX = e.touches?.[0]?.clientX;
    updateValue(clientX, draggingIndex.value);
}

function onTrackTouchEnd() {
    isDragging.value = false;
    draggingIndex.value = -1;
}

function onTrackMouseDown(e: any, index: number) {
    if (_disabled.value) return;
    isDragging.value = true;
    draggingIndex.value = index;
    getTrackRect();
    const clientX = e.clientX;
    updateValue(clientX, index);
}

onMounted(() => {
    getTrackRect();
    // #ifdef H5
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    // #endif
});

onBeforeUnmount(() => {
    // #ifdef H5
    window.removeEventListener('mousemove', handleGlobalMouseMove);
    window.removeEventListener('mouseup', handleGlobalMouseUp);
    // #endif
});

watch(() => props.modelValue, (val) => {
    let realMinVal = val[0];
    let realMaxVal = val[1];
    if (val[0] < props.min) {
        realMinVal = props.min;
    } else if (val[0] > props.max) {
        realMinVal = props.max;
    }
    if (val[1] < props.min) {
        realMaxVal = props.min;
    } else if (val[1] > props.max) {
        realMaxVal = props.max;
    }
    nowValue.value = [realMinVal, realMaxVal];
});
</script>

<template>
    <view class="tm-slider" :class="{ 'tm-slider-disabled': _disabled }" :style="{ opacity: _opacity }"
        >
        <view class="tm-slider-track" :style="[_trackStyle, { cursor: _cursor }]"
            @touchstart.stop.prevent="(e) => onTrackTouchStart(e, -1)" @touchmove.stop.prevent="onTrackTouchMove"
            @touchend.stop="onTrackTouchEnd" @touchcancel.stop="onTrackTouchEnd"
            @mousedown.stop.prevent="(e) => onTrackMouseDown(e, 0)">
            <view class="tm-slider-fill" :style="_fillStyle"></view>
            <view 
                v-for="(_, index) in [0, 1]" 
                :key="index"
                class="tm-slider-thumb" 
                :class="{ 'tm-slider-thumb-dragging': isDragging && draggingIndex === index }" 
                :style="_thumbStyle[index]"
                @touchstart.stop.prevent="(e) => onTrackTouchStart(e, index)"
                @touchmove.stop.prevent="onTrackTouchMove"
                @touchend.stop="onTrackTouchEnd"
                @touchcancel.stop="onTrackTouchEnd"
                @mousedown.stop.prevent="(e) => onTrackMouseDown(e, index)"
            >
                <view v-if="showLabel" class="tm-slider-label" :style="_labelStyle">
                    <text :style="{ color: _labelColor }">{{ nowValue[index] }}</text>
                </view>
            </view>
        </view>

    </view>
</template>

<style scoped lang="scss">
.tm-slider {
    width: 100%;
    position: relative;
    box-sizing: border-box;
}

.tm-slider-track {
    position: relative;
    width: 100%;
    transition: background-color 0.3s;
    touch-action: none;
    user-select: none;
    -webkit-user-select: none;
}

.tm-slider-fill {
    position: absolute;
    top: 0;
    pointer-events: none;
}

.tm-slider-thumb {
    position: absolute;
    top: 0;
    border-radius: 50%;
    background-color: currentColor;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    transform: scale(1);
    box-sizing: border-box;
}

.tm-slider-thumb-dragging {
    transform: scale(1.2);
}

.tm-slider-label {
    position: absolute;
    transform: translateY(calc(-100% - 10px)) translateX(-50%);
    left: 50%;
    white-space: nowrap;
    pointer-events: none;
    width: 42rpx;
    height: 42rpx;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    box-sizing: border-box;

    &::after {
        content: '';
        position: absolute;
        display: block;
        left: 50%;
        top: calc(100% - 1px);
        transform: translateX(-50%);
        border: 8rpx solid transparent;
        border-top-color: currentColor;
    }

}

.tm-slider-disabled {
    pointer-events: none;
}
</style>