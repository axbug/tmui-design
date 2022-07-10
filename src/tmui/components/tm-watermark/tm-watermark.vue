<template>
  <view>
      <slot></slot>
      <view style="position: fixed; left: -99999px">
        <!-- #ifdef APP-NVUE -->
        <gcanvas id="waterCanvas" ref="waterCanvasRef" :style="{ width: `${boxInfo.width}${props.unit}`, height: `${boxInfo.height}${props.unit}` }"></gcanvas>
        <!-- #endif -->
        <!-- #ifdef MP-WEIXIN || MP-ALIPAY || MP-QQ -->
        <canvas  id="waterCanvas" type="2d" :style="{ width: `${boxInfo.width}${props.unit}`, height: `${boxInfo.height}${props.unit}` }"></canvas>
        <!-- #endif -->
        <!-- #ifndef MP-WEIXIN || MP-ALIPAY || MP-QQ || APP-NVUE -->
        <canvas  id="waterCanvas" canvas-id="waterCanvas" :style="{ width: `${boxInfo.width}${props.unit}`, height: `${boxInfo.height}${props.unit}` }"></canvas>
        <!-- #endif -->
      </view>

    <view :class="props.fullscreen ?'fixed':'absolute'" :style="imageWaterStyle"></view>
  </view>
</template>
<script lang="ts" setup>
import {computed, getCurrentInstance, onMounted, ref, watchEffect} from "vue";
const props = defineProps({
  cross:Boolean,
  debug: Boolean,
  fullscreen: Boolean, width: {
    type: Number,
    default: 64
  }, height: {
    type: Number,
    default: 64
  }, zIndex: {
    type: Number,
    default: 999
  }, xGap: {
    type: Number,
    default: 0
  }, yGap: {
    type: Number,
    default: 0
  }, yOffset: {
    type: Number,
    default: 0
  }, xOffset: {
    type: Number,
    default: 0
  }, rotate: {
    type: Number,
    default: 0
  }, image: String, imageOpacity: { type: Number, default: 1 }, imageHeight: Number, imageWidth: Number, content: String, selectable: {
    type: Boolean,
    default: true
  }, fontSize: {
    type: Number,
    default: 28
  }, fontFamily: String, fontStyle: {
    type: String,
    default: 'normal'
  }, fontVariant: {
    type: String,
    default: ''
  }, fontWeight: {
    type: Number,
    default: 400
  }, fontColor: {
    type: String,
    default: 'rgba(128, 128, 128, .3)'
  }, fontStretch: {
    type: String,
    default: ''
  }, lineHeight: {
    type: Number,
    default: 28
  }, unit: {
    type: String,
    default: 'rpx'
  }
});

// #ifdef APP-NVUE
import { enable, WeexBridge} from '../../tool/gcanvas/index.js';
// #endif
const { proxy }:any = getCurrentInstance();
const waterCanvasRef = ref();
const boxInfo = ref({ width: props.width, height:props.height });
const base64UrlRef = ref();
const imageWaterStyle = computed(()=> {
  return {
    zIndex: props.zIndex,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    backgroundRepeat: 'repeat',
    top: 0,
    left: 0,
    backgroundSize: props.unit == 'rpx' ? `${uni.upx2px(props.xGap + props.width)} px` : `${props.xGap + props.width} px`,
    backgroundPosition: props.cross
        ? `${props.unit == 'rpx' ? uni.upx2px(props.width / 2) : (props.width / 2)}px ${props.unit == 'rpx' ? uni.upx2px(props.height / 2) : (props.height / 2)}px, 0 0`
        : '',
    backgroundImage: props.cross
        ? `url(${base64UrlRef.value}), url(${base64UrlRef.value})`
        : `url(${base64UrlRef.value})`
  }
})
function getRatio({context}: { context: any }) {
  if (!context) {
    return 1;
  }
  const backingStore = context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1;
  return  1 / backingStore;
}

onMounted(async () => {
  // #ifdef APP-NVUE
  const canvasObj = enable(waterCanvasRef.value, {
    bridge: WeexBridge
  });
  const ctx = canvasObj.getContext('2d');
  // #endif
  // #ifdef MP-WEIXIN || MP-ALIPAY || MP-QQ
  const {ctx2d: ctx, canvas}: any = await mp_init();
  // #endif
  // #ifndef MP-WEIXIN || MP-ALIPAY || MP-QQ || APP-NVUE
  const ctx = uni.createCanvasContext("waterCanvas", proxy);
  // const canvas = document.createElement('canvas');
  // const ctx = canvas.getContext('2d');
  // #endif

  const fontsReadyRef = ref(false);

  watchEffect(() => {
    void fontsReadyRef.value;
    const ratio = getRatio({context: ctx});

    const {
      xGap,
      yGap,
      width,
      height,
      yOffset,
      xOffset,
      rotate,
      image,
      content,
      fontColor,
      fontStyle,
      fontVariant,
      fontStretch,
      fontWeight,
      fontFamily,
      fontSize,
      lineHeight,
      debug
    } = props;
    const canvasWidth = (xGap + width) * ratio;
    const canvasHeight = (yGap + height) * ratio;
    const canvasOffsetLeft = xOffset * ratio;
    const canvasOffsetTop = yOffset * ratio;
    boxInfo.value = { width : canvasWidth ,height : canvasHeight  }
    const canvasWidthPx = props.unit == 'rpx'?uni.upx2px(canvasWidth):canvasWidth;
    const canvasHeightPx = props.unit == 'rpx'?uni.upx2px(canvasHeight):canvasHeight;
    // canvas.width = canvasWidthPx;
    // canvas.height = canvasHeightPx;

    if (ctx) {
      ctx.translate(0, 0);
      const markWidth = props.unit == 'rpx'? uni.upx2px(width * ratio) : (width * ratio);
      const markHeight =  props.unit == 'rpx'? uni.upx2px(height * ratio) : (height * ratio);
      if (debug) {
        ctx.strokeStyle = 'grey';
        ctx.strokeRect(0, 0, markWidth, markHeight);
      }
      ctx.rotate(rotate * (Math.PI / 180));
      if (image) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.referrerPolicy = 'no-referrer';
        img.src = image;
        img.onload = () => {
          ctx.globalAlpha = props.imageOpacity;
          const {imageWidth, imageHeight} = props;
          ctx.drawImage(img, canvasOffsetLeft, canvasOffsetTop, (props.imageWidth ||
              (imageHeight
                  ? (img.width * imageHeight) / img.height
                  : img.width)) * ratio, (props.imageHeight ||
              (imageWidth
                  ? (img.height * imageWidth) / img.width
                  : img.height)) * ratio);
        };
      } else if (content) {
        if (debug) {
          ctx.strokeStyle = 'green';
          ctx.strokeRect(0, 0, markWidth, markHeight);
        }
        const fontSizePx = props.unit == 'rpx'? uni.upx2px(fontSize * ratio) : (fontSize * ratio);
        const fontLineHeightPx =  props.unit == 'rpx'? uni.upx2px(lineHeight * ratio) :( lineHeight * ratio);
        const ySize = props.unit == 'rpx'? uni.upx2px(canvasOffsetTop + lineHeight * ratio) : (canvasOffsetTop + lineHeight * ratio);
        ctx.font = `${fontStyle} ${fontWeight} ${fontSizePx}px/${fontLineHeightPx}px ${fontStretch} ${fontVariant} ${fontFamily || 'sans-serif'}`;
        ctx.fillStyle = fontColor;
        ctx.fillText(content, canvasOffsetLeft, ySize);
      }
      // #ifndef MP-WEIXIN || MP-ALIPAY || MP-QQ
      ctx.draw();
      // #endif
      // #ifdef APP-NVUE
      ctx.toTempFilePath(0,0,canvasWidthPx,canvasHeightPx,canvasWidthPx,canvasHeightPx,"png",1,function(res: { errMsg: string; tempFilePath: any; }){
        base64UrlRef.value = res.tempFilePath;
      })
      // #endif
      // #ifndef APP-NVUE
      uni.canvasToTempFilePath({
        destWidth: canvasWidthPx,
        destHeight: canvasHeightPx,
        canvasId: 'waterCanvas',
        success: function(res) {
          base64UrlRef.value = res.tempFilePath;
        }
      })
      // #endif

      // base64UrlRef.value = canvas.toDataURL();

    } else {

    }
  });
})

//支付宝和微信，QQ 支持2d渲染。
function mp_init() {
  return new Promise((resolve,rej)=>{
    const query = uni.createSelectorQuery().in(proxy)
    query.select('#waterCanvas')
        .fields({
          node: true,
          size: true
        })
        .exec((res) => {
          const canvas = res[0].node
          const ctxvb = canvas.getContext('2d')
          const dpr = uni.getSystemInfoSync().pixelRatio
          canvas.width = res[0].width * dpr
          canvas.height = res[0].height * dpr
          ctxvb.scale(dpr, dpr)
          resolve({ctx2d:ctxvb,canvas:canvas})
        })
  })
}
</script>