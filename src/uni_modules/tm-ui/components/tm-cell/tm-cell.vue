<template>
    <!-- @vue-ignore -->
    <view @click="onclick" :hover-start-time="_clickable ? 50 : 0" :hover-stay-time="_clickable ? 100 : 0"
        :hover-class="_clickable ? 'cellHover' : ''" class="tmCell "
        :class="[attrs.card ? 'cellCard' : 'cardInset']" :style="{
            backgroundColor: _color,
            borderRadius: _cardRadius,
            minHeight: _minHeight,
            borderBottom: attrs.showBottomBorder && !attrs.card && !bottomBorderInsert ? `1px solid ${_bottomBorderColor}` : 'none',
            padding: `0px ${_lrPadding}`
        }">

            <!--
            @slot 头像图标
            @binding {string} icon 图标名称
            -->
            <slot name="avatar" :icon="attrs.icon">
                <view v-if="attrs.icon != ''" class="tmCellAvatar" :style="{ width: _leftSize, height: _leftSize, borderRadius: _avatarRound }">
                   <tm-icon :color="_iconColor" :size="_iconSize" :name="attrs.icon"></tm-icon>
                </view>
            </slot>
        <view class="tmCellWrap" :style="{
            padding: `${_tbPadding} 0px `,
            borderBottom: attrs.showBottomBorder && !attrs.card && bottomBorderInsert ? `1px solid ${_bottomBorderColor}` : 'none'
        }">
            <view class="center">
                <!--
                @slot 默认标题插槽
                -->
                <slot>
                    <view class="title" :style="{ color: _titleColor, fontSize: _titleSize }">
                        <text>{{ attrs.title }}</text>
                    </view>
                </slot>
                <!--
                @slot 简介
                @binding {string} desc 简介
                -->
                <slot name="desc" :desc="attrs.desc">
                    <tm-text v-if="attrs.desc != ''" size="28" :color="_descColor" class="desc">{{
                        attrs.desc }}</tm-text>
                </slot>
            </view>
            <view class="tmCellRight" :style="{maxWidth: _rightWidth}">
                <!--
                @slot 右边文字
                @binding {string} label 标签内容
                -->
                <slot name="label" :label="attrs.label">
                    <text v-if="attrs.label != ''" :style="{ color: _labelColor, fontSize: _rightLableSize }"
                        class="rightLabel">{{ attrs.label }}</text>

                </slot>
                <!--
                @slot 右插槽
                -->
                <slot name="right"></slot>
                <tm-icon v-if="attrs.url != '' || attrs.link" :color="_descColor" size="36" :name="attrs.linkIcon"
                    _style="paddingLeft:12rpx"></tm-icon>
            </view>

        </view>

    </view>
</template>
<script lang="ts" setup>
import { computed, getCurrentInstance, PropType } from "vue"
import { arrayNumberValidByStyleMP, covetUniNumber, getUnit } from "../../libs/tool";
import { getDefaultColor, setTextColorLightByDark } from "../../libs/colors";
import { useTmConfig } from "../../libs/config";
/**
 * @displayName 列表
 * @exportName tm-cell
 * @category 展示组件
 * @description 样式丰富常用警告提醒
 * @constant 平台兼容
 *	| H5 | uniAPP | 小程序 | version |
    | --- | --- | --- | --- |
    | ☑️| ☑️ | ☑️ | ☑️ | ☑️ | 1.0.0 |
 */
defineOptions({ name: 'TmCell',options: {
    styleIsolation: "apply-shared",
    virtualHost: true,
    addGlobalClass: true,
    multipleSlots: true,
} });
const { config } = useTmConfig()
const instance = getCurrentInstance()
const emits = defineEmits(
    [
        /**
         * 项目点击
         */
        "click"
    ]
)
const attrs = defineProps({
    /**
     * 左图标
     */
    icon: {
        type: String,
        default: ""
    },
    /**
     * 左侧图标、头像圆角。默认为8
     */
    avatarRound: {
        type: String,
        default: "8"
    },
    /**
     * 背景的主题色
     */
    color: {
        type: String,
        default: 'white'
    },
    /**
     * 暗黑背景的主题色，空值时取sheetDarkColor
     */
    darkColor: {
        type: String,
        default: ''
    },
    /**
     * 图标色,空值时取全局主题值。
     */
    iconColor: {
        type: String,
        default: ""
    },
    /**
     * 标题
     */
    title: {
        type: String,
        default: "标题"
    },
    /**
     * 标题颜色
     */
    titleColor: {
        type: String,
        default: "black"
    },
    /**
     * 暗黑标题颜色，如果不填写取白
     */
    darkTitleColor: {
        type: String,
        default: "white"
    },
    /**
     * 标题大小
     */
    titleSize: {
        type: [String, Number],
        default: "32"
    },
    /**
     * 左边图标大小
     */
    iconSize: {
        type: [String, Number],
        default: "42"
    },
    /**
     * 右边文本
     */
    label: {
        type: String,
        default: ""
    },
    /**
     * 右边文本颜色
     */
    labelColor: {
        type: String,
        default: "#bfbfbf"
    },
    /**
     * 右侧label文字大小
     */
    labelSize: {
        type: [String, Number],
        default: "24"
    },
    /**
     * 标题正文的简介文本
     */
    desc: {
        type: String,
        default: ""
    },
    /**
     * 是否显示下边线
     */
    showBottomBorder: {
        type: Boolean,
        default: true
    },
    /**
     * 是否让下边线显示居右，不贯穿到左边。
     */
    bottomBorderInsert: {
        type: Boolean,
        default: false
    },
    /**
     * 下边线的颜色。如果你设定了的话。
     * 暗黑的边颜色失效，采用你自定的颜色。
     */
    bottomBorderColor: {
        type: String,
        default: ""
    },
    /**
     * 是否显示链接状态，有点按效果。包括出现右边跳转指示。
     * 关闭的话，事件反应和跳转会更快。
     * 如果true右侧箭头图标会显示
     */
    link: {
        type: Boolean,
        default: true
    },
    /**
     * 需要跳转的页面地址。
     * 如果填写了右侧箭头图标会显示
     */
    url: {
        type: String,
        default: ""
    },
    openType: {
        type: String as PropType<"navigate" | "redirect" | "switchTab" | "reLaunch" | "navigateBack">,
        default: "navigate"
    },
    /**
     * 是否是卡片模式
     */
    card: {
        type: Boolean,
        default: true
    },
    /**
     * 卡片模式圆角,不填写采用全局的cardRadius属性值.
     */
    round: {
        type: [String, Number],
        default: ""
    },
    /**
     * 左边图标区域宽和高的大小。
     */
    leftSize: {
        type: [String, Number],
        default: '60'
    },
    /**
     * 最小高度，主要是用来统一风格高度不至于让点击范围过小
     * 如果你需要紧凑型可以设置为auto
     */
    minHeight: {
        type: [String, Number],
        default: "88"
    },
    /**
     * 左右的间隙。
     */
    lrPadding: {
        type: [String, Number],
        default: "32"
    },
    linkIcon: {
        type: String,
        default: "arrow-right-s-line"
    },
    /**
     * 上下间隙
     */
    tbPadding: {
        type: [String, Number],
        default: "28"
    },
    /**
     * 右侧最大宽
     */
    rightWidth:{
        type: [String, Number],
        default: "50%"
    }
})

const _color = computed(() => {
    if (config.mode === 'dark') {
        if (attrs.darkColor !== '') return getDefaultColor(attrs.darkColor)
        return getDefaultColor(config.sheetDarkColor)
    }
    return getDefaultColor(attrs.color)
})

const _titleColor = computed(() => {
    if (config.mode === 'dark') {
        if (attrs.darkTitleColor !== '') return getDefaultColor(attrs.darkTitleColor)
        return '#ffffff'
    }
    return getDefaultColor(attrs.titleColor)
})

const _leftSize = computed(() => covetUniNumber(attrs.leftSize))
const _lrPadding = computed(() => covetUniNumber(attrs.lrPadding))
const _tbPadding = computed(() => covetUniNumber(attrs.tbPadding))
const _rightWidth = computed(() => covetUniNumber(attrs.rightWidth))

const _avatarRound = computed(() => covetUniNumber(attrs.avatarRound))

const _minHeight = computed(() => covetUniNumber(attrs.minHeight))

const _bottomBorderColor = computed(() => {
    if (attrs.bottomBorderColor !== '') return getDefaultColor(attrs.bottomBorderColor)
    if (config.mode === 'dark') return config.borderDarkColor
    return "#f5f5f5"
})

const _iconColor = computed(() => getDefaultColor(attrs.iconColor || config.color))
const _labelColor = computed(() => {
    if (config.mode === 'dark') return setTextColorLightByDark(attrs.labelColor)
    return getDefaultColor(attrs.labelColor)
})
const _descColor = computed(() => config.mode === 'dark' ? setTextColorLightByDark('#bfbfbf') : '#bfbfbf')

const _cardRadius = computed(() => {
    if (attrs.round === '') return arrayNumberValidByStyleMP(config.cellRadius)
    return arrayNumberValidByStyleMP(attrs.round, config.unit)
})

const scaledFontSize = (size: string | number, nanFallback: number): string => {
    let fontSize = covetUniNumber(size, config.unit);
    if (config.fontSizeScale === 1) return fontSize;
    let sizeNumber = parseInt(fontSize)
    if (isNaN(sizeNumber)) {
        sizeNumber = nanFallback
    }
    return (sizeNumber * config.fontSizeScale).toString() + getUnit(fontSize)
}

const _titleSize = computed(() => scaledFontSize(attrs.titleSize, 16))
const _iconSize = computed(() => scaledFontSize(attrs.iconSize, 17))
const _rightLableSize = computed(() => scaledFontSize(attrs.labelSize, 13))

const _clickable = computed(() => attrs.link || attrs.url != '' || !!instance?.vnode?.props?.onClick)

const onclick = () => {
    /**
     * 整个列表被点击
     */
    emits("click");
    if (attrs.openType == 'navigateBack') {
        uni.navigateBack({})
        return
    }
    if (attrs.url != "") {
        if (attrs.openType == 'navigate') {
            uni.navigateTo({
                url: attrs.url
            })
        } else if (attrs.openType == 'reLaunch') {
            uni.reLaunch({
                url: attrs.url
            })
        } else if (attrs.openType == 'redirect') {
            uni.redirectTo({
                url: attrs.url
            })
        } else if (attrs.openType == 'switchTab') {
            uni.switchTab({
                url: attrs.url
            })
        }

    }
}


</script>
<style scoped lang="scss">
.cellHover {
    filter: contrast(90%);
}

.tmCell {

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}



.cellCard {
    // padding: 0 32rpx;
    margin-bottom: 12rpx;
    margin-left: 24rpx;
    margin-right: 24rpx;
}

.cardInset {
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
}

.tmCellWrap {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    min-width: 0;
    overflow: hidden;
    // padding: 32rpx 0rpx;
}



.title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    min-width: 0;
}

.desc {
    font-size: 24rpx;
    padding-top: 4rpx;
}

.tmCellAvatar {
    margin-right: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    overflow: hidden;
}

.center {
    flex: 1;
    min-width: 0;
    overflow: hidden;
}

.tmCellRight {
    padding-left: 32rpx;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
}

.rightLabel {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    font-size: 24rpx;
    text-align: right;
}
</style>
