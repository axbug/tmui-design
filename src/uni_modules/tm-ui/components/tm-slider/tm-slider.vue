<script setup lang="ts">
import { computed, getCurrentInstance, nextTick, onBeforeUnmount, onMounted, ref, StyleValue, watch } from 'vue';
import { useTmConfig } from "../../libs/config";
import { covetUniNumber } from '../../libs/tool';
import { getDefaultColor } from '../../libs/colors';
import type { PropsType } from './propsType';

/**
 * @displayName 滑动条
 * @exportName tm-slider
 * @category 表单组件
 * @description 滑动条组件，用于滑动条中展示选项。
 * @constant 平台兼容
 *    | H5 | uniAPP | 小程序 | version |
 | --- | --- | --- | --- |
 | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({
    name: 'TmSlider', options: {
        styleIsolation: "apply-shared",
        virtualHost: true,
        addGlobalClass: true,
        multipleSlots: true,
    }
});
const props = withDefaults(defineProps<PropsType>(), {
    modelValue: 0,
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
     * @param {number} value - 当前的值
     */
    'change',
    'update:modelValue']);
const { config } = useTmConfig();

const instance = getCurrentInstance();
const isDragging = ref(false);
const trackWidth = ref(0);
const trackLeft = ref(0);
const nowValue = ref(props.modelValue);

// Web端鼠标事件处理函数
const handleGlobalMouseMove = (e: MouseEvent) => {
    if (_disabled.value || !isDragging.value) return;
    const clientX = e.clientX;
    updateValue(clientX);
};

const handleGlobalMouseUp = () => {
    isDragging.value = false;
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
        if (range <= 0) return 0;
        let percent = ((nowValue.value - props.min) / range) * 100;
        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;
        return percent;
    },
    set(percent) {
        nowValue.value = percent;
        emit('update:modelValue', nowValue.value);
    }
});

const _thumbStyle = computed((): StyleValue => {
    const size = _btnSize.value;
    const barSize = _size.value;
    return {
        left: _percent.value + '%',
        width: _btnSize.value,
        height: _btnSize.value,
        marginTop: `calc((${size} - ${barSize}) / -2)`,
        marginLeft: `calc(${size} / -2)`,
        color: _color.value,
        border: `calc(${_btnSize.value} / 5) solid #fff`
    };
});

const _fillStyle = computed(() => {
    return {
        width: _percent.value + '%',
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
        // left: _percent.value + '%',
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

function calculateValue(clientX: number) {
    if (trackWidth.value === 0) {
        getTrackRect();
        return props.modelValue;
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

function updateValue(clientX: number) {
    const value = calculateValue(clientX);
    _percent.value = value;
    // emit('update:modelValue', value);
    emit('change', value);
}

function onTrackClick(e: any) {
    // if (_disabled.value) return;
    // const clientX = e.detail?.x || e.touches?.[0]?.clientX || e.clientX;
    // updateValue(clientX);
}

function onTrackTouchStart(e: any) {
    if (_disabled.value) return;
    isDragging.value = true;
    getTrackRect();
    const clientX = e.touches?.[0]?.clientX;
    updateValue(clientX);
}

function onTrackTouchMove(e: any) {
    if (_disabled.value || !isDragging.value) return;
    const clientX = e.touches?.[0]?.clientX;
    updateValue(clientX);
}

function onTrackTouchEnd() {
    isDragging.value = false;
}

function onTrackMouseDown(e: any) {
    if (_disabled.value) return;
    isDragging.value = true;
    getTrackRect();
    const clientX = e.clientX;
    updateValue(clientX);
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
    let realVal = val;
    if (val < props.min) {
        realVal = props.min;
    } else if (val > props.max) {
        realVal = props.max;
    }
    _percent.value = realVal;
});
</script>

<template>
    <view class="tm-slider" :class="{ 'tm-slider-disabled': _disabled }" :style="{ opacity: _opacity }"
        @click="onTrackClick">
        <view class="tm-slider-track" :style="[_trackStyle, { cursor: _cursor }]"
            @touchstart.stop.prevent="onTrackTouchStart" @touchmove.stop.prevent="onTrackTouchMove"
            @touchend.stop="onTrackTouchEnd" @touchcancel.stop="onTrackTouchEnd"
            @mousedown.stop.prevent="onTrackMouseDown">
            <view class="tm-slider-fill" :style="_fillStyle"></view>
            <view class="tm-slider-thumb" :class="{ 'tm-slider-thumb-dragging': isDragging }" :style="_thumbStyle"
                @touchstart.stop.prevent="onTrackTouchStart" @touchmove.stop.prevent="onTrackTouchMove"
                @touchend.stop="onTrackTouchEnd" @touchcancel.stop="onTrackTouchEnd"
                @mousedown.stop.prevent="onTrackMouseDown">
                <view v-if="showLabel" class="tm-slider-label" :style="_labelStyle">
                    <text :style="{ color: _labelColor }">{{ nowValue }}</text>
                </view>
            </view>
        </view>

    </view>
</template>

<style scoped lang="scss">
.tm-slider {
    width: 100%;
    position: relative;
    // padding: 40rpx 0;
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
    left: 0;
    top: 0;
    // transition: width 0s;
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
    // border: 8px solid #fff;
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
    // font-weight: lighter;
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