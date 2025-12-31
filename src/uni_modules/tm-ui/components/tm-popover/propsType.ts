/*
 * Copyright (c) 2025. tmzdy by @https://tmui.design
 */

export type PositionType = 'tr' | 'tc' | 'tl' | 'br' | 'bc' | 'bl' | 'left' | 'right';
export  interface propsType {
	/**
	 * tr:左上；tc:上中；tl:右上；br:左下；bc:下中；bl:右下；left:左边；right:右边
	 */
	position?:PositionType,
	/**
	 * 是否显示
	 */
	modelValue?:boolean,
	/**
	 * 是否点击内容区域关闭
	 */
	isClickClose?:boolean,
	/**
	 * 遮罩背景色
	 */
	showMask?:boolean,
	/**
	 * 层级
	 */
	zIndex?:number|string,
	/**
	 * 是否显示三角
	 */
	showTriangle?:boolean,
	/**
	 * 三角颜色
	 */
	triangleColor?:string,
	/**
	 * 三角暗黑时的颜色
	 */
	triangleDarkColor?:string
}