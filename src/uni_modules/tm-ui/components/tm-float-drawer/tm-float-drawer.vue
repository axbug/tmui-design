<script setup lang="ts">
import { PropType, computed, nextTick, ref, watch, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue';
import { useTmConfig } from "../../libs/config";
import { getDefaultColor } from '../../libs/colors';
import { covetUniNumber } from '../../libs/tool';

/**
 * @displayName 浮动面板
 * @exportName tm-float-drawer
 * @category 反馈组件
 * @description 浮动面板组件，用于显示浮动的抽屉式内容区域。
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: "TmFloatDrawer" });
const { config } = useTmConfig();
const proxy = getCurrentInstance()?.proxy

const emits = defineEmits([
    /**
     * 关闭时执行
     */
    'close',
    /**
     * 打开执行的事件
     */
    'open',
    /**
     * 打开前执行
     */
    'beforeOpen',
    /**
     * 关闭前执行
     */
    'beforeClose',
    /**
     * 高度位置变化时触发这个差值.返回参数evt是个百分比,0%是最低下,100%代表是在最顶部.
     */
    'heightChange',
    /**
     * 开始拖动
     */
    'movestart',
    /**
     * 结束拖动
     */
    'moveend',
    /**
     * 等同v-model:show
     */
    'update:show'
]);

const props = defineProps({
    /**
     * 控制面板打开状态，可v-model:show双向绑定
     * true=展开到最高位置，false=默认最小位置
     */
    show: {
        type: Boolean,
        default: false
    },
    /**
     * 是否仅允许通过标题栏拖动。
     */
    onlyHeader: {
        type: Boolean,
        default: false
    },
    /**
     * 动画时间
     */
    duration: {
        type: Number,
        default: 350
    },
    /**
     * 向上的圆角
     * 空值时，取全局配置的圆角。
     */
    round: {
        type: String,
        default: ""
    },
    /**
     * 百分比，数字字符或者带单位,
     * 默认露出的内容高度
     */
    size: {
        type: String,
        default: "20%"
    },
    /**
     * 弹层最大的高度值，默认为屏幕的可视高
     * 提供值时不能为百分比，可以是px,rpx单位数字。如果你不带单位，默认转换为rpx单位。
     */
    maxHeight: {
        type: String,
        default: "80%"
    },
    /**
     * 当拖动时，触发打开和关闭时的临界值，单位是px
     * 如果没有达到此临界值时，将会回弹至原始位置。
     */
    triggerDy: {
        type: Number,
        default: 50
    },
    /**
     * 当拖动时，如果已经达到了关闭和打开时的临界值时
     * 可以继续拖拉时缓动阻尼值
     */
    threshold: {
        type: Number,
        default: 0.15
    },
    /**
     * 内容层的背景色
     */
    bgColor: {
        type: String,
        default: "white"
    },
    /**
     * 暗黑的背景色,空时，取全局的sheetDarkColor
     */
    darkBgColor: {
        type: String,
        default: ""
    },
    /**
     * 拖动标题栏的横线背景色
     */
    actionColor: {
        type: String,
        default: "#888888"
    },
    /**
     * 禁用内部的容器并采用view容器
     */
    disabledScroll: {
        type: Boolean,
        default: false
    },
    /**
     * 没有禁用disabledScroll生效
     * 容器内部使用的类型
     * scroll :scroll-view
     * list : list-view
     */
    containerType: {
        type: String,
        default: 'scroll'
    },
    /**
     * 是否禁用用户滚动等来触发关闭或者打开。
     */
    disabled: {
        type: Boolean,
        default: false
    },
    /**
     * 层级
     */
    zIndex: {
        type: Number,
        default: 100
    },
    /**
     * 控制内容的边跑,有时需要自定布局时非常有用.
     * 请直接使用style css规则写margin,
     */
    contentMargin: {
        type: String,
        default: "0 16px 16px 16px"
    }
});

// 状态管理
// #ifdef H5
const drawerRef = ref<HTMLElement | null>(null);
// #endif
const headerRect = ref<DOMRect | null>(null);
const isDragging = ref(false);
const isAnimating = ref(false);
const translateY = ref(0);
const startY = ref(0);
const startTranslateY = ref(0);
const viewportHeight = ref(0);
const hasMoved = ref(false);
const isDraggingChange = ref(false);

// 计算属性
const roundValue = computed(() => {
    const round = props.round || config.drawerRadius || '24rpx';
    return covetUniNumber(round,config.unit);
});

const bgColorValue = computed(() => {
    if (config.mode == 'dark' && props.darkBgColor) {
        return getDefaultColor(props.darkBgColor);
    }
    if (config.mode == 'dark') {
        return '#252525';
    }
    return getDefaultColor(props.bgColor);
});

// 将百分比转换为像素值
function parseSizeToPx(size: string): number {
    if (size.includes('%')) {
        return (parseFloat(size) / 100) * viewportHeight.value;
    }
    const num = parseFloat(size);
    if (!isNaN(num)) {
        if (size.includes('rpx') || size.includes('px')) {
            const unit = size.includes('rpx') ? 'rpx' : 'px';
            const pxValue = unit === 'rpx' ? uni.upx2px(num) : num;
            return pxValue;
        }
        // 默认为rpx
        return uni.upx2px(num);
    }
    return 0;
}

// 计算默认显示的高度（底部露出）
const defaultHeight = computed(() => parseSizeToPx(props.size));

// 计算最大高度
const maxHeightValue = computed(() => parseSizeToPx(props.maxHeight));

// 计算各个位置的 translateY 值
const positions = computed(() => {
    // 最小位置：露出默认高度
    const defaultY = maxHeightValue.value - defaultHeight.value;
    // 展开位置：顶部贴顶
    const expandedY = 0;

    return { defaultY, expandedY };
});

// 抽屉样式
const drawerStyle = computed(() => {
    const y = translateY.value;

    return {
        height: `${maxHeightValue.value}px`,
        transform: `translateY(${y}px)`,
        borderRadius: `${roundValue.value} ${roundValue.value} 0 0`,
        backgroundColor: bgColorValue.value,
        zIndex: props.zIndex,
        transition: isAnimating.value ? `transform ${props.duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)` : 'none'
    };
});

// 获取触摸点Y坐标
function getTouchY(e: TouchEvent | MouseEvent): number {
    if ('touches' in e) {
        return e.touches[0].clientY;
    }
    return e.clientY;
}

// 头部点击切换
function handleHeaderClick() {
    if (props.disabled) return;
    emits('update:show', !props.show);
}

// 开始拖动
function handleTouchStart(e: TouchEvent) {
    if (props.disabled) return;

    const touchY = getTouchY(e);

    // 检查触摸是否在 header 内（或其子元素）
    let inHeader = false;

    if (props.onlyHeader) {
        // #ifdef H5
        let target = e.target as HTMLElement;
        if (target) {
            while (target && target !== drawerRef.value) {
                if (target.classList && target.classList.contains('tm-float-drawer-header')) {
                    inHeader = true;
                    break;
                }
                target = target.parentElement as HTMLElement;
            }
            if (!inHeader) return;
        }

        isDragging.value = true;
        hasMoved.value = false;
        isAnimating.value = false;
        startY.value = touchY;
        startTranslateY.value = translateY.value;
        emits('movestart');

        // #endif
        // #ifndef H5

        const query = uni.createSelectorQuery();
        query.in(proxy);
        query.select('.tm-float-drawer-header')
            .boundingClientRect((rect: any) => {
                if (rect) {
                    headerRect.value = rect;
                    if (touchY >= rect.top && touchY <= rect.bottom) {
                        inHeader = true;
                    }
                }
                if (inHeader) {
                    isDragging.value = true;
                    hasMoved.value = false;
                    isAnimating.value = false;
                    startY.value = touchY;
                    startTranslateY.value = translateY.value;
                    emits('movestart');
                }

            })
            .exec();

        // #endif


    } else {
        isDragging.value = true;
        hasMoved.value = false;
        isAnimating.value = false;
        startY.value = touchY;
        startTranslateY.value = translateY.value;
        emits('movestart');
    }



}

// 拖动中
function handleTouchMove(e: TouchEvent) {
    if (!isDragging.value || props.disabled) return;

    e.preventDefault();
    e.stopPropagation();
    const currentTouchY = getTouchY(e);
    const deltaY = currentTouchY - startY.value;
    const { defaultY, expandedY } = positions.value;

    let newY = startTranslateY.value + deltaY;

    // 应用阻尼效果（向下拖动超过默认位置时）
    if (newY > defaultY) {
        const diff = newY - defaultY;
        newY = defaultY + diff * props.threshold;
    }
    // 向上拖动超过最大高度时也应用阻尼
    else if (newY < expandedY) {
        const diff = expandedY - newY;
        newY = expandedY - diff * props.threshold;
    }

    translateY.value = newY;
    hasMoved.value = true;

    // 触发高度变化事件（0%在最顶部，100%在最小位置）
    let percent = ((newY - expandedY) / (defaultY - expandedY)) * 100;
    // 限制在 0-100 之间
    percent = Math.max(0, Math.min(100, percent));
    emits('heightChange', percent);
}

// 结束拖动（统一处理触摸和鼠标）
function handleDragEnd() {
    if (!isDragging.value || props.disabled) return;

    isDragging.value = false;
    isDraggingChange.value = true;
    isAnimating.value = true;
    const { defaultY, expandedY } = positions.value;
    const currentY = translateY.value;
    const currentShow = props.show;
    // 计算实际移动距离（从开始拖动到结束拖动的位移）
    const actualDeltaY = startTranslateY.value - currentY;

    // 判断是应该到最小位置还是最大位置
    if (Math.abs(actualDeltaY) > props.triggerDy) {
        // 移动距离超过阈值，根据移动方向判断
        if (actualDeltaY > 0) {
            // 向上移动，打开
            if (!currentShow) {
                emits('beforeOpen');
                translateY.value = expandedY;
                emits('update:show', true);
                emits('open');
                // 触发最终高度变化事件（0%在最顶部）
                emits('heightChange', 0);
            } else {
                translateY.value = expandedY;
                // 触发最终高度变化事件（0%在最顶部）
                emits('heightChange', 0);
            }
        } else {
            // 向下移动，关闭
            if (currentShow) {
                emits('beforeClose');
                translateY.value = defaultY;
                emits('update:show', false);
                emits('close');
                // 触发最终高度变化事件（100%在最小位置）
                emits('heightChange', 100);
            } else {
                translateY.value = defaultY;
                // 触发最终高度变化事件（100%在最小位置）
                emits('heightChange', 100);
            }
        }
    } else {
        // 移动距离未超过阈值，回弹到原来的位置
        if (currentShow) {
            translateY.value = expandedY;
            // 触发最终高度变化事件（0%在最顶部）
            emits('heightChange', 0);
        } else {
            translateY.value = defaultY;
            // 触发最终高度变化事件（100%在最小位置）
            emits('heightChange', 100);
        }
    }

    setTimeout(() => {
        emits('moveend');
        isAnimating.value = false;
        isDraggingChange.value = false;
    }, props.duration);
}

// 触摸结束
function handleTouchEnd(e: TouchEvent) {
    if (hasMoved.value) {
        handleDragEnd();
    } else {
        isDragging.value = false;
        emits('moveend');
    }
}

function handleMouseDown(e: MouseEvent) {
    if (props.disabled) return;
    // 检查点击是否在 header 内（或其子元素）

    let target = e.target as HTMLElement;
    let inHeader = false;

    // #ifdef H5

    if (props.onlyHeader && target) {
        while (target && target !== drawerRef.value) {
            if (target.classList && target.classList.contains('tm-float-drawer-header')) {
                inHeader = true;
                break;
            }
            target = target.parentElement as HTMLElement;
        }
        if (!inHeader) return;
    }
    // #endif
    isDragging.value = true;
    hasMoved.value = false;
    isAnimating.value = false;
    startY.value = e.clientY;
    startTranslateY.value = translateY.value;
    emits('movestart');
    e.preventDefault();
    e.stopPropagation();

    const handleMouseMove = (ev: MouseEvent) => {
        if (!isDragging.value || props.disabled) return;

        const deltaY = ev.clientY - startY.value;
        const { defaultY, expandedY } = positions.value;

        let newY = startTranslateY.value + deltaY;

        // 向下拖动超过默认位置时应用阻尼
        if (newY > defaultY) {
            const diff = newY - defaultY;
            newY = defaultY + diff * props.threshold;
        }
        // 向上拖动超过最大高度时也应用阻尼
        else if (newY < expandedY) {
            const diff = expandedY - newY;
            newY = expandedY - diff * props.threshold;
        }

        translateY.value = newY;
        hasMoved.value = true;

        let percent = ((newY - expandedY) / (defaultY - expandedY)) * 100;
        // 限制在 0-100 之间
        percent = Math.max(0, Math.min(100, percent));
        emits('heightChange', percent);
    };

    const handleMouseUp = () => {
        if (hasMoved.value) {
            handleDragEnd();
        } else {
            isDragging.value = false;
            emits('moveend');
        }
        // #ifdef H5
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        // #endif
    };
    // #ifdef H5
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    // #endif

}
function defaultChange(val: boolean) {
    
    nextTick(() => {
        const { defaultY, expandedY } = positions.value;
        if (val) {
            translateY.value = expandedY; // 打开到最高位置
            // 触发最终高度变化事件（0%在最顶部）
            emits('heightChange', 0);
        } else {
            translateY.value = defaultY; // 回到最小位置
            // 触发最终高度变化事件（100%在最小位置）
            emits('heightChange', 100);
        }
        setTimeout(() => {
            isAnimating.value = false;
        }, props.duration);
    });
}
// 监听 show 变化
const prevShow = ref(props.show);
watch(() => props.show, (val, oldVal) => {
    isAnimating.value = true;
    if (!isDraggingChange.value) {
        if (val === true && oldVal === false) {
            emits('beforeOpen');
            emits('open');
        } else if (val === false && oldVal === true) {
            emits('beforeClose');
            emits('close');
        }
    }
    defaultChange(val);
    prevShow.value = val;
}, { immediate: false });

// 计算视口高度
function updateViewportHeight() {
    viewportHeight.value = uni.getWindowInfo().windowHeight;
}

onMounted(() => {
    updateViewportHeight();
    // 缓存 header 位置信息
    if (props.onlyHeader) {
        nextTick(() => {
            const query = uni.createSelectorQuery();
            query.in(proxy);
            query.select('.tm-float-drawer-header')
                .boundingClientRect((rect: any) => {
                    if (rect) {
                        headerRect.value = rect;
                    }
                    defaultChange(props.show)

                })
                .exec();
        });
    } else {
        // 非onlyHeader模式下直接初始化状态
        nextTick(() => {
            defaultChange(props.show);
        });
    }
    if (typeof window !== 'undefined') {
        window.addEventListener('resize', updateViewportHeight);
    }
});

onBeforeUnmount(() => {
    if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateViewportHeight);
    }
});
</script>

<template>
    <view ref="drawerRef" class="tm-float-drawer" :style="drawerStyle" @touchstart="handleTouchStart"
        @touchmove.stop.prevent="handleTouchMove" @touchend="handleTouchEnd" @touchcancel="handleTouchEnd"
        @mousedown="handleMouseDown">
        <view ref="headerRef" class="tm-float-drawer-header" @click="handleHeaderClick">
            <view class="tm-float-drawer-handle" :style="{ backgroundColor: actionColor }"></view>
        </view>
        <view v-if="!disabledScroll"
            :class="['tm-float-drawer-content', containerType === 'list' ? 'tm-float-drawer-list' : 'tm-float-drawer-scroll']"
            :style="{ margin: contentMargin }">
            <slot></slot>
        </view>
        <view v-else class="tm-float-drawer-content tm-float-drawer-view" :style="{ margin: contentMargin }">
            <slot></slot>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.tm-float-drawer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    // overflow: hidden;
    // box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
    will-change: transform;
}

.tm-float-drawer-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    cursor: grab;
    flex-shrink: 0;

    &:active {
        cursor: grabbing;
    }
}

.tm-float-drawer-handle {
    width: 40px;
    height: 4px;
    border-radius: 2px;
}

.tm-float-drawer-content {
    flex: 1;
    min-height: 0;
    overflow: auto;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
}

.tm-float-drawer::after {
    content: "";
    background-color: inherit;
    width: 100vw;
    height: 100vh;
    display: block;
    position: absolute;
    bottom: -100vh;
}

.tm-float-drawer-scroll {
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
}

.tm-float-drawer-list {
    overflow-y: auto;
    overflow-x: hidden;
}

.tm-float-drawer-view {
    overflow: visible;
}
</style>
