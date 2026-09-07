<template>
    <view :disabled="attrs.disabled" @click="onClick" class="tmTag" :class="[attrs.disabled ? 'tmTagLoading' : '']" :style="[
        {
            minWidth: _width,
            height: _height,
            fontSize: _fontSize,
        },
        buttonStyle,
    ]">

        <!-- 
          @slot icon图标
        -->
        <slot name="icon">
            <tm-icon v-if="attrs.icon" :name="attrs.icon" :size="attrs.iconSize || _fontSize"
                :color="buttonStyle.color"></tm-icon>
        </slot>
        <!--
          @slot 默认插槽
          -->
        <slot></slot>
    </view>
</template>

<script lang="ts" setup>
import { PropType, computed } from "vue";
import { arrayNumberValidByStyleMP, arrayNumberValidByBorderWidth, covetUniNumber, arrayNumberValidByStyleBorderColor, arrayNumberValidByStyleBorderStyle, linearValid } from "../../libs/tool";
import { useTmConfig } from "../../libs/config";
import { getDefaultColor, getOutlineColorObj, getTextColorObj, getThinColorObj,getDefaultColorObj, hexToRgb } from "../../libs/colors";

/**
 * @displayName 标签
 * @exportName tm-tag
 * @category 常用组件
 * @description 标签组件,用来展示一些标签信息.
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: 'TmTag', options: { styleIsolation: 'apply-shared', virtualHost: true, addGlobalClass: true, multipleSlots: true } });
const { config } = useTmConfig()
const emits = defineEmits([
    /**
     * 点击事件
     */
    'click',

])
const attrs = defineProps({
    /** 
     * 尺寸大小,可选值：s/m/n/g/xs
     */
    size: {
        type: String as PropType<"s" | "g" | "xs" | "m" | "n">,
        default: "n"
    },
    /**
     * 样式
     * 可选值：thin/outlined/text/normal/dashed
     */
    skin: {
        type: String as PropType<"thin" | "outlined" | "text" | "normal" | "dashed">,
        default: "normal"
    },
    /**
     * 遵循规则：
     * string或者[x]：全部边线
     * [x,x]左右边线，上下边线
     * [x,x,x] 左，上，右
     * [x,x,x,x] 左，上，右,下
     */
    borderColor: {
        type: [String, Array<string>],
        default: ""
    },
    darkBorderColor: {
        type: [String, Array<string>],
        default: "transparent"
    },
    /** 规则同borderColor */
    borderWidth: {
        type: [String, Number, Array<string | number>],
        default: 1
    },
    /** 规则同borderColor */
    borderStyle: {
        type: [String, Array<string>],
        default: "solid"
    },

    /**
     * 圆角半径
     * 左上，右上，右下，左下
     */
    round: {
        type: [String, Number, Array<string | number>],
        default: '10'
    },
    /**宽度 */
    width: {
        type: [String, Number],
        default: ""
    },
    /**高度 */
    height: {
        type: [String, Number],
        default: ""
    },
    /**开放能力 */
    openType: {
        type: String,
        default: ""
    },
    /**是否禁用 */
    disabled: {
        type: Boolean,
        default: false
    },
    /**图标名称 */
    icon: {
        type: String,
        default: ""
    },
    /**图标大小 */
    iconSize: {
        type: String,
        default: ""
    },

    fontSize: {
        type: String,
        default: ""
    },
    /** 自定义主题颜色 */
    color: {
        type: String,
        default: ""
    },
    /** 自定义背景 */
    bgColor: {
        type: String,
        default: ""
    },
    /**自定义暗黑背景 */
    darkBgColor: {
        type: String,
        default: ""
    },
    /**自定义字体颜色 */
    fontColor: {
        type: String,
        default: ""
    },
    /**自定义暗黑字体颜色 */
    darkFontColorColor: {
        type: String,
        default: ""
    },
    /** 渐变，前面的color,bgColor,darkBgColor失效 */
    linear: {
        type: Array as PropType<string[]>,
        default: () => []
    },
    /**
     * 数字或者字符串时自动计算投影,它会投影大小
     * 数组时(必须为4),第一个x,第二为y,第三个为大小 ,第四个为投影颜色
     * 空字符串时,取全局配置,如果不想投影设置为none即可.
     */
    shadow: {
        type: [String, Number, Array<string>],
        default: ''
    }
})
type PropsKeyType = keyof typeof attrs;

const _tagWidths: Record<string, string> = { xs: '48', s: '76', m: '88', n: '100', g: '140' };
const _tagHeights: Record<string, string> = { xs: '36', s: '42', m: '52', n: '62', g: '72' };
const _tagFontSizes: Record<string, string> = { xs: '20', s: '22', m: '24', n: '28', g: '32' };

const covetButtonSize = (ops: PropsKeyType, s: TM.BUTTON_SIZE) => {
    if (ops === 'width') return covetUniNumber(_tagWidths[s]);
    if (ops === 'height') return covetUniNumber(_tagHeights[s]);
    return covetUniNumber(_tagFontSizes[s]);
}
const _width = computed(() => {
    return attrs.width === '' ? covetButtonSize('width', attrs.size) : covetUniNumber(attrs.width)
})
const _height = computed(() => attrs.height === '' ? covetButtonSize('height', attrs.size) : covetUniNumber(attrs.height))
const _fontSize = computed(() => attrs.fontSize === '' ? covetButtonSize('fontSize', attrs.size) : covetUniNumber(attrs.fontSize))


const _colorObj = computed(() => {
    const isDark = config.mode == 'dark';
    const color = attrs.color || config.color;
    if (attrs.skin == 'text') return getTextColorObj(color, color, isDark);
    if (attrs.skin == 'thin') return getThinColorObj(color, color, isDark);
    if (attrs.skin == 'outlined' || attrs.skin == 'dashed') return getOutlineColorObj(color, color);
    return getDefaultColorObj(color, color);
});

const buttonStyle = computed(() => {
    let style = {
        borderColor: ``,
        borderWidth: ``,
        borderStyle: ``,
        background: ``,
        color: ``,
        borderRadius: ``,
        boxShadow: `none`,
        padding: `none`,
    }
    let isDark = config.mode == 'dark';
    let linear = linearValid(attrs.linear)
    let background = linear || (attrs.bgColor ? getDefaultColor(attrs.bgColor) : '')
    let fontColor = attrs.fontColor ? getDefaultColor(attrs.fontColor) : ''
    let borderWidth = arrayNumberValidByStyleMP(attrs.borderWidth)
    let borderStyle = arrayNumberValidByStyleBorderStyle(attrs.borderStyle).join(" ")
    let borderRadius = arrayNumberValidByBorderWidth(attrs.round || config.sheetRadius)

    if (isDark) {
        if (attrs.darkBgColor) {
            background = getDefaultColor(attrs.darkBgColor)
        }
        if (attrs.darkFontColorColor) {
            fontColor = getDefaultColor(attrs.darkFontColorColor)
        }
    }

    const obj = _colorObj.value;
    if (attrs.skin == 'dashed') {
        borderStyle = 'dashed'
    }
    if (attrs.skin == 'outlined') {
        borderStyle = 'solid'
    }

    

    if (obj) {
        let borderColor = arrayNumberValidByStyleBorderColor(attrs.borderColor||obj.default.borderColor)

        style.color = linear ? '#ffffff' : fontColor || obj.default.fontColor;
        style.background = background || obj.default.background;
        style.borderStyle = borderStyle;
        style.borderColor =  borderColor.join(" ");
        style.borderWidth = linear ? '0px' : borderWidth.join(" ")
        style.borderRadius =  borderRadius.join(" ")
        

        if (attrs.skin=='normal') {
            let shadow = 'none';
            let shadowColor = obj.default.background;
            let linearColors = attrs.linear.length>=3?attrs.linear[1]:''
            if (Array.isArray(attrs.shadow)&&attrs.shadow.length>=3) {
                if(attrs.shadow.length>=4){
                    shadowColor = attrs.shadow[3]
                }else{
                    shadowColor = linearColors||shadowColor
                }
                const rgb = hexToRgb(shadowColor)
                shadow = `${attrs.shadow.join(' ')} rgba(${rgb.r},${rgb.g},${rgb.b},0.3)`;
            } else if (attrs.shadow !== '' && attrs.shadow!=0 && attrs.shadow != 'none'&&(typeof attrs.shadow == 'number'||typeof attrs.shadow == 'string')) {
                shadowColor = linearColors||shadowColor;
                const rgb = hexToRgb(shadowColor)
                shadow = `0 2px ${covetUniNumber(attrs.shadow,'px')} rgba(${rgb.r},${rgb.g},${rgb.b},0.3)`;
            } else if (Array.isArray(config.tagShadow)&&config.tagShadow.length>=3) {
                let shadowFix = config.tagShadow.map(el=>covetUniNumber(el,'px'))
                shadowColor = linearColors||shadowColor
                const rgb = hexToRgb(shadowColor)
                shadow = `${shadowFix.join(' ')} rgba(${rgb.r},${rgb.g},${rgb.b},0.3)`;
            }
            style.boxShadow = shadow;
        }

    }
    // padding: 0px 10rpx;
    if(attrs.size === 'xs'||attrs.size === 's'){
        style.padding = '0 6rpx'
    }else if(attrs.size == 'm'){
        style.padding = '0 12rpx'
    }else{
        style.padding = '0 20rpx'
    }
    return style;
});

const onClick = ()=>{
    if(attrs.disabled) return;
    emits('click');
}
</script>


<style lang="scss" scoped>
.tmTag {
    position: relative;
    display: inline-flex;
    line-height: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    box-sizing: border-box;
    &[disabled = true]{
        cursor: no-drop;
    }
    &[disabled = false]{
        /* #ifdef H5 */
        cursor: pointer;
        /* #endif */
    }

    &.tmTagLoading {
        opacity: 0.5;

        .tmTagBlock,
        & {
            cursor: no-drop;
        }
    }


}
</style>