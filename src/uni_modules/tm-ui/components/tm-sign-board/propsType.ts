/**
 * @description 签名画板组件属性类型定义
 */
export interface PropsType {
    /**
     * 线颜色
     */
    strokeColor?: string;
	/**
	 * 画板背景颜色
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