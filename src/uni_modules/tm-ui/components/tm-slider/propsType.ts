export interface PropsType {
    /**
     * 等同v-model当前值
     */
    modelValue?: number;
    /**
     * 最大值
     */
    max?: number;
    /**
     * 最小值
     */
    min?: number;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 步进值
     */
    step?: number;
    /**
     * 步进值刻度值
     * 比如max-min为100总值,刻度为20,那么setpCount就是4,
     */
    stepCount?: number;
    /**
     * 激活时的颜色，空值取全局值，linearColor不空时取背景色会取linearColor，但其它label和按钮焦点色还是这个值。
     */
    color?: string;
    /**
     * 默认的背景色
     */
    bgColor?: string;
    /**
     * 滑条的大小
     */
    size?: string;
    /**
     * 滑块的尺寸
     */
    btnSize?: string;
    /**
     * 滑条的圆角。
     * 为空值时，取全局的进度条值
     */
    round?: string;
    /**
     * 是否显示进度条上的label文本
     */
    showLabel?: boolean;
    /**
     * 文本颜色
     */
    labelColor?: string;
    /**
     * 文本文字大小
     */
    labelFontSize?: string;
    /**
     * 线性渐变背景颜色
     */
    linearColor?: string;
}
