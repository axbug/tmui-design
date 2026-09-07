<!--
  - Copyright (c) 2025. tmzdy by @https://tmui.design
  -->

<template>
    <view @click="prevImage" class="tmImage" :class="[idBox]" ref="tmImage" :id="idBox"
        :style="{ width: _place_size.width, height: _place_size.height }">
        <!-- @vue-skip -->
        <view class="tmImageBox"
            :style="{ width: _img_box_size.width, height: _img_box_size.height, borderRadius: _round, pointerEvents: 'none' }">
            <view v-if="isLoading || isError" class="tmImagePlace" :style="{ backgroundColor: _placeBgColor }">
                <tm-icon :size="iconSize" v-if="isError" color="error" name="landscape-line"></tm-icon>
                <tm-icon :size="iconSize" v-if="isLoading" name="loader-line" color="primary" :spin="true"></tm-icon>
            </view>
            <image :draggable="draggable" :lazy-load="lazy" :src="_src"
                :showMenuByLongpress="showMenuByLongpress"
                :class="[isLoading ? 'tmImageImgAbs' : '', fadeShow ? 'tmImageFadeShow' : '']" :mode="_model"
                :style="[_styleMap]" class="tmImageImg" @error="imgError" @load="imgLoad">
            </image>
        </view>
    </view>
</template>
<script setup lang="ts">
import { computed, getCurrentInstance, onMounted, onUnmounted, type PropType, ref, watch } from 'vue'
import { covetUniNumber, getUid } from '../../libs/tool'
import { getDefaultColor } from '../../libs/colors'
import { useTmConfig } from '../../libs/config'

/**
 * @displayName 图片
 * @exportName tm-image
 * @category 展示组件
 * @description 宽高可以设置，支持百分比，px,rpx，如果你用了auto,%这种就要注意：如果你把组件放到了容器中，容器设置为v-show,display:none,visible这种，
 * 那你一定要跟随vif组件，不然尺寸是不对的。因为小程序无法监测这种变化的情况，导致无法设置尺寸。如果你设定了固定尺寸则不用担心这个问题。
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: 'TmImage',options: {
  styleIsolation: "apply-shared",
  virtualHost: true,
  addGlobalClass: true,
  multipleSlots: true,
}});
const { config } = useTmConfig()
const props = defineProps({
    /**
     * 宽度，默认100%
     * 18rpx,18px,15%支持这三种单位，如果只写"18"就表示18rpx
     */
    width: {
        type: [String, Number],
        default: "100%"
    },
    /**
     * 高度,auto,%,rpx,px,string number
     * 18rpx,18px,15%支持这三种单位，如果只写"18"就表示18rpx
     */
    height: {
        type: [String, Number],
        default: "auto"
    },
    /** 图片源 */
    src: {
        type: String,
        default: ""
    },
    /**
     * 模式
     * @link https://uniapp.dcloud.net.cn/uni-app-x/component/image.html#mode-values
     */
    model: {
        type: String as PropType<"fill" | "top" | "bottom" | "center" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right" | "aspectFit" | "aspectFill" | "widthFix" | "heightFix" | "scaleToFill">,
        default: "scaleToFill"
    },
    /**
     * 点击后是否预览图片,默认为空值，采用全局的配置。
     */
    preview: {
        type: [Boolean],
        default: undefined
    },
    /**
     * 预览占位比例
     * 宽/高，当数据没加载前，如果你设置了一项值比如宽，高会自动根据这个比例计算
     * 当图片加载成功后，使用正确的原图片比例设置。
     * 默认是5/4=1.25
     */
    ratio: {
        type: Number,
        default: 1.25
    },
    /**
     * 圆角
     */
    round: {
        type: [String, Number],
        default: '0'
    },
    /**
     * 加载和失败时的图标大小。
     */
    iconSize: {
        type: [String, Number],
        default: "36"
    },
    /**
     * 占位背景色
     */
    placeBgColor: {
        type: String,
        default: "#F5F5F5"
    },
    /**
     * 点位暗黑时的背景，如果不填写默认填充inputDarkBgcolor
     */
    placeDarkBgColor: {
        type: String,
        default: ""
    },
    /**
     * 是否显示过渡动画
     */
    fadeShow: {
        type: Boolean,
        default: false
    },
	/**
	 * 在系统不支持webp的情况下是否单独启用webp。默认false，只支持网络资源。webp支持详见下面说明
	 */
	webp: {
	    type: Boolean,
	    default: false
	},
    /**
     * 图片懒加载
     */
    lazy: {
        type: Boolean,
        default: true
    },
    /**
     * 是否允许拖动。
     */
    draggable: {
        type: Boolean,
        default: false
    },
    showMenuByLongpress: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits<{
    (e: 'click'): void,
    (e: 'error',evt:any): void,
    (e: 'load',evt:any): void,
}>();

const idBox = ref(`tmImage-${getUid()}`);
const isLoading = ref(true);
const isError = ref(false);
const imgrealWidth = ref(0);
const imgrealHeight = ref(0);
const boxWidth = ref(0);
const boxHeight = ref(0);

const isLoaded = ref(false);
const proxy = getCurrentInstance()?.proxy
// 每次换图递增，用于丢弃测量期间发生的过期load结果（列表复用/快速切图时防串图）
let loadToken = 0;

const _model = computed(() => props.model);
const _placeBgColor = computed(() => {
    let bgcolor = props.placeBgColor;
    if (config.mode == 'dark') {
        bgcolor = props.placeDarkBgColor;
        if (props.placeDarkBgColor == '') {
            bgcolor = config.inputDarkColor;
        }
    }
    return getDefaultColor(bgcolor);
});

const _round = computed(() => covetUniNumber(props.round, config.unit));
const _src = computed(() => {
    if (!props.src) return '';
    return props.src;
});

const _isWidthPercent = computed(() => {
    return typeof props.width === 'string' && props.width.indexOf('%') > -1;
});
const _isHeightPercent = computed(() => {
    return typeof props.height === 'string' && props.height.indexOf('%') > -1;
});
const _isAutoWidth = computed(() => props.width === 'auto');
const _isAutoHeight = computed(() => props.height === 'auto');
const _unitWidth = computed(() => covetUniNumber(props.width, config.unit));
const _unitHeight = computed(() => covetUniNumber(props.height, config.unit));
// 解析固定高度（数值+rpx/px），供宽auto时按比例估算占位宽
const _heightCalc = computed(() => {
    const m = /^([\d.]+)(rpx|px|upx)?$/.exec(_unitHeight.value);
    if (!m) return null;
    return { num: m[1], unit: m[2] || 'rpx' };
});

const _place_size = computed(() => ({
    width: _unitWidth.value,
    height: _unitHeight.value,
}));

const _img_size = computed(() => {
    if (!isLoaded.value) {
        return { width: "10px", height: "10px" };
    }

    // 百分比在盒子层用100%表示（相对外层解析，实时跟随容器，不产生二次缩小），固定单位原样使用
    let w = _isWidthPercent.value ? '100%' : _unitWidth.value;
    let h = _isHeightPercent.value ? '100%' : _unitHeight.value;

    const hasReal = imgrealWidth.value > 0 && imgrealHeight.value > 0;

    // 高auto：参照宽（测量值）×图片真实高宽比；测量或detail不完整时保持占位，不输出0尺寸
    if (_isAutoHeight.value && hasReal && boxWidth.value > 0) {
        h = `${Math.round(boxWidth.value * imgrealHeight.value / imgrealWidth.value)}px`;
    }
    // 宽auto：参照高（测量值）×图片真实宽高比
    if (_isAutoWidth.value && hasReal && boxHeight.value > 0) {
        w = `${Math.round(boxHeight.value * imgrealWidth.value / imgrealHeight.value)}px`;
    }

    return { width: w, height: h };
});

const _img_box_size = computed(() => {
    if (isLoaded.value && imgrealWidth.value > 0 && imgrealHeight.value > 0) {
        return _img_size.value;
    }

    // 占位阶段
    let w: string;
    if (_isWidthPercent.value) {
        w = '100%';
    } else if (_isAutoWidth.value) {
        // 宽auto：按 高/ratio（ratio=宽/高）估算占位宽，避免塌陷成一条线
        const hc = _heightCalc.value;
        w = hc ? `${Math.round(parseFloat(hc.num) / props.ratio)}${hc.unit}` : 'auto';
    } else {
        w = _unitWidth.value;
    }

    let h = 'auto';
    if (!_isAutoHeight.value && !_isHeightPercent.value) {
        h = _unitHeight.value;// 固定高直接使用
    } else if (boxWidth.value > 0) {
        // 高auto或百分比：按ratio估算占位高，加载后换成真实比例
        h = `${Math.round(boxWidth.value / props.ratio)}px`;
    } else {
        h = '200rpx';// 未测到参照宽时的兑底
    }

    return { width: w, height: h };
});

const _styleMap = computed(() => {
    let styleMap: Record<string, any> = {}
    styleMap["width"] = _img_size.value.width
    styleMap["height"] = _img_size.value.height
    styleMap["visibility"] = isLoading.value ? 'visible' : (!isError.value ? 'visible' : 'hidden')
    styleMap["opacity"] = isLoading.value ? '0' : '1'
    styleMap["border-radius"] = _round.value
    return styleMap;
});

const prevImage = () => {
    emit('click');
    if (((props.preview===undefined||props.preview===null)&&config.previewImage)||props.preview===true) {
        uni.previewImage({
            current: props.src,
            urls: [props.src]
        });
    }
};


const imgLoad = async (e:any) => {
	const token = loadToken;
	emit('load',e)
	const width = e?.detail?.width || 0;
	const height = e?.detail?.height || 0;
	if (!width || !height) return;
	// 应用前先测量最新容器尺寸作为参照
	await getNodes();
	// 测量期间src又变化了：本次是旧图的结果，丢弃，防止串图
	if (token !== loadToken) return;

	isLoading.value = false;
	isError.value = false;
	isLoaded.value = true;
	imgrealWidth.value = width;
	imgrealHeight.value = height;
};

const imgError = (e:any) => {

	emit('error',e)
    isError.value = true;
    isLoading.value = false;
};

const getNodes = (): Promise<any> => {
    return new Promise((res) => {
        uni.createSelectorQuery().in(proxy)
            .select(".tmImage")
            .boundingClientRect().exec((ret) => {
                // v-show/display:none或节点不存在时可能为null，保留上次有效值，不抛错不挂起
                const nodeinfo = ret && ret[0] ? (ret[0] as UniApp.NodeInfo) : null;
                if (nodeinfo && typeof nodeinfo.width === 'number' && nodeinfo.width > 0) {
                    boxWidth.value = nodeinfo.width;
                    boxHeight.value = nodeinfo.height || 0;
                }
                res(true)
            });
    })
};

/**
 * 容器尺寸变化后可手动调用，重新测量参照宽高
 */
const resize = (): Promise<any> => {
    return getNodes();
};

defineExpose({ resize });

const onWinResize = () => {
    getNodes();
};

onMounted(() => {
    getNodes();
    if (!props.src) {
        isLoading.value = false;
        isError.value = true;
    }
    // 窗口尺寸变化（旋转、拖动窗口等）时重测参照宽，auto尺寸自动修正
    uni.onWindowResize?.(onWinResize);
});

onUnmounted(() => {
    uni.offWindowResize?.(onWinResize);
});

watch(() => props.src, (newSrc) => {
    loadToken++;
    imgrealWidth.value = 0;
    imgrealHeight.value = 0;
    if (!newSrc) {
        isLoading.value = false;
        isError.value = true;
        isLoaded.value = false;
        return;
    }
    isLoading.value = true;
    isError.value = false;
    isLoaded.value = false;
});

</script>

<style scoped>
.tmImage {
    position: relative;
    overflow: hidden;
    display: inline-flex;
}

.tmImageBox {
    pointer-events: none;
    overflow: hidden;

}

.tmImageImg {
    opacity: 0;
}

@keyframes animateFadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.tmImageFadeShow {
    animation: animateFadeIn 0.2s linear forwards;
}

.tmImagePlace {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%
}

.tmImageImgAbs {
    position: absolute;
	opacity: 0;
	pointer-events: none;
	left: 0;
	top: 0;
}
</style>
