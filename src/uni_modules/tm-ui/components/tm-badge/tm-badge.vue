<script setup lang="ts">
import { computed, PropType } from 'vue'
import { covetUniNumber, getUnit } from "../../libs/tool";
import { getDefaultColor } from "../../libs/colors";
import { useTmConfig } from "../../libs/config";
/**
 * @displayName 角标
 * @exportName tm-badge
 * @category 展示组件
 * @description 角标,位置丰富。
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: 'TmBadge', options: { styleIsolation: 'apply-shared', virtualHost: true, addGlobalClass: true, multipleSlots: true } });
const { config } = useTmConfig()

const attrs = defineProps({
    /**
     * 字体大小
     */
    fontSize: {
        type: [String, Number],
        default: "20"
    },
    /**
     * 背景颜色
     * @default error
     */
    bgColor: {
        type: String,
        default: "error"
    },
    /**
     * 字体颜色
     * @default white
     */
    fontColor: {
        type: String,
        default: "white"
    },
    maxCount: {
        type: [String, Number],
        default: 99
    },
    /**
     * 如果是boolean就显示角标小红点
     * 如果是string显示文本标签
     * 如果是数字显示数字并启用maxCount
     */
    label: {
        type: [String, Number,Boolean],
        default: ""
    },
    /**
     * 角标出现的位置
     * right:右上角 left:左上角 bottomLeft:左下角 bottomRight:右下角 top:顶部居中 bottom:底部居中
     */
    position: {
        type: String as PropType<"right" | "left" | "bottomLeft" | "bottomRight" | 'top' | 'bottom'>,
        default: "right"
    },
    /**
     * 角标偏移量[x,y]，单位px，可为负值，所有位置均生效
     * @default [0, 0]
     */
    offset: {
        type: Array as PropType<number[]>,
        default: (): number[] => [0, 0] as number[],
        validator(val: number[]): boolean {
            if (val.length == 0 || val.length == 2) return true
            console.error("x:必须是长度为2的数字数组参数或者空数组")
            return false
        }
    }
})


const _offset = computed((): number[] => {
    // 归一化：空数组、长度不足或非数字时兜底为0，避免渲染崩溃
    const x = Number(attrs.offset?.[0])
    const y = Number(attrs.offset?.[1])
    return [isNaN(x) ? 0 : x, isNaN(y) ? 0 : y]
})
const _isDot = computed(() => {
    if(typeof attrs.label === 'boolean') return attrs.label
    return false;
})

const _cStyles = computed(() => {
    // 各位置的默认锚点与中心平移（保持原版定位语义不变）
    let trs = ''
    let top = ''
    let bottom = ''
    let left = ''
    let right = ''
    let ox = _offset.value[0].toString() + 'px'
    let oy = _offset.value[1].toString() + 'px'

    if (attrs.position == 'right') {
        trs = 'translate(50%, -50%)'
        top = oy
        right = ox
    } else if (attrs.position == 'left') {
        trs = 'translate(-50%, -50%)'
        top = oy
        left = ox
    } else if (attrs.position == 'bottomLeft') {
        trs = 'translate(-50%, 50%)'
        bottom = oy
        left = ox
    } else if (attrs.position == 'bottomRight') {
        trs = 'translate(50%, 50%)'
        bottom = oy
        right = ox
    } else if (attrs.position == 'top') {
        trs = `translate(${ox}, -50%)`
        top = oy
    } else if (attrs.position == 'bottom') {
        trs = `translate(${ox}, 50%)`
        bottom = oy
    }

    let baseCs:{[key:string]:any} = {}
    baseCs['background'] = getDefaultColor(attrs.bgColor)
    baseCs['left'] = left
    baseCs['right'] = right
    baseCs['top'] = top
    baseCs['bottom'] = bottom
    baseCs['transform'] = trs

    let labelMapCs:{[key:string]:any} = {...baseCs}
    // min-width = 1.5 × fontSize（与行高等值），保证0-9单数字时宽=高呈圆形
    labelMapCs['minWidth'] = getMinWidth()
    labelMapCs['visibility'] = _label.value == "" ? "hidden" : "visible"

    return [baseCs, labelMapCs]

})

const _fontColor = computed(() => getDefaultColor(attrs.fontColor))
const _fontSize = computed(() => covetUniNumber(attrs.fontSize, config.unit))
const getMinWidth = (): string => {
    // fontSize × 1.5（与文本行高等值），保留原单位(rpx/px)，em在小程序端不可靠
    let fontSize = _fontSize.value
    let num = parseFloat(fontSize)
    if (isNaN(num)) num = 10
    return (num * 1.5).toString() + getUnit(fontSize)
}
const _label = computed((): string => {
    if(typeof attrs.label === 'boolean') return ''
    if(typeof attrs.label === 'string') return attrs.label
    let count = attrs.label
    let maxCount = typeof attrs.maxCount == "number" ? attrs.maxCount : parseInt(attrs.maxCount)
    if (isNaN(count) || isNaN(maxCount)) return ""
    if (count > 0 && count <= maxCount) return count.toString();
    if (count <= 0) return ""
    return maxCount.toString() + "+"
})




</script>

<template>
    <view class="tmBadge">
        <view class="tmBadgeWrap">
            <text :style='_cStyles[0]' class="tmBadge-dot" :class="[_isDot ? 'noneShow' : 'nonex']"></text>
            <view id="tmBadge-countAndLabel" class="tmBadge-countAndLabel" :class="[_isDot ? 'nonex' : 'noneShow']"
                :style='_cStyles[1]'>
                <text class="tmBadge-countAndLabelText" :style='{ color: _fontColor, fontSize: _fontSize }'>{{ _label}}</text>
            </view>
            <!-- 
            @slot 默认内容插槽
             -->
            <slot></slot>
        </view>
    </view>
</template>

<style scoped>
.tmBadge {
    overflow: visible;
    display: inline-flex;
    position: relative;

}

.tmBadge-countAndLabel {
    position: absolute;
    z-index: 3;
    border-radius: 100px;
    box-sizing: border-box;
    padding: 0rpx 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.tmBadge-countAndLabelText {
    line-height: 1.5;
    text-align: center;
}

.tmBadge-dot {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 18px;
    z-index: 3;
    opacity: 0;
}

.noneShow {
    opacity: 1;
}

.nonex {
    opacity: 0;
}

.tmBadgeWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: visible;
}
</style>