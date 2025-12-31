/**
 * @description 进度条组件属性类型定义
 */
export interface PropsType {
    /**
     * 当前进度值
     */
    modelValue?: number;

    /**
     * 最小值
     */
    min?: number;

    /**
     * 最大值
     */
    max?: number;

    /**
     * 进度条颜色
     */
    color?: string;

    /**
     * 线性渐变颜色
     */
    linearColor?: string;

    /**
     *  背景颜色
     */
    bgColor?: string;

    /**
     * 暗黑模式背景颜色
     */
    darkBgColor?: string;

    /**
     * 是否显示进度标签
     */
    showLabel?: boolean | string;

    /**
     * 标签文字颜色
     */
    labelColor?: string;

    /**
     * 标签字体大小
     */
    labelFontSize?: string | number;

    /**
     * 进度条高度
     */
    size?: string | number;

    /**
     * 圆角大小
     */
    round?: number | string;

    /**
     * 动画持续时间（毫秒）
     */
    duration?: number,
    
    /**
     * 标签显示在进度条内部
     */
    labelInside?: boolean | string;
}