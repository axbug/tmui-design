/**
 * @description 进度条组件属性类型定义
 */
export interface PropsType {
    /**
     * 线颜色
     */
    strokeColor?: string;
	/**
	 * 线颜色
	 */
	backgroundColor?: string;
 
    /**
     * 线宽
     */
    strokeWidth?: string | number;

    /**
     * 画布宽和高，不允许%，只能是数字或者带单位的数字如:4,'4',20px,750rpx
     */
    width?: string | number;
	/**
	 * 画布宽和高，不允许%，只能是数字或者带单位的数字如:4,'4',20px,750rpx
	 */
	height?: string | number;
}