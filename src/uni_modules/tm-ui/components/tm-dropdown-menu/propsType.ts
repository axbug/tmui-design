export type TmDropdownMenuPropsPositions = "static" | "fixed";
export type TmDropdownMenuProps = {
	/**
	 * 展现方式。
	 * static静态
	 * fixed展开后悬浮在顶部。
	 */
	position?: TmDropdownMenuPropsPositions;
	/**
	 * 顶部的偏移量,如果你要让出顶部距离可以设置此值。
	 * 数字字符，prx,px等单位
	 * 如果position=static此属性失效。
	 */
	offsetTop?: string;
	/**
	 * 当前激活的索引标识，就是你子项上的keyName值
	 * 匹配不到时关闭。所以要关闭，只要填充一个不存在的keyName值即可。
	 */
	modelValue?: number|string;
	/**
	 * 菜单栏的高度
	 */
	height?: string;
	/**
	 * 宽度
	 */
	width?: string;
	/**
	 * 背景颜色
	 */
	color?: string;
	/**
	 * 暗黑时的背景颜色
	 */
	darkColor?: string;
	/**
	 * 层级
	 */
	zIndex?: number;
	/**
	 * 对于要把此组件嵌套在布局组件时，应该要隐藏遮罩，否则不好看。
	 */
	hidnMask?: boolean;
	/**
	 * 内容背景颜色
	 */
	contentColor?: string;
	/**
	 * 暗黑时的内容背景颜色,空值取sheetDarkColor
	 */
	contentDarkColor?: string;
	/**
	 * 圆角值，要注意：开启后：菜单也会有圆角，但有区别：默认未展开时四周圆角。
	 * 当展开时，内容底部圆角，菜单顶部圆角，这样形成上下一体的外观。
	 */
	round?: string;
	/**
	 * 内容样式padding,请使用css规则
	 */
	contentPadding?: string;
}
export type tmDropDownMenuItemType={
	/**
	 * 菜单标题
	 */
	title: string;
	/**
	 * 标识，变换或者点击时，会通过事件传回。
	 */
	keyName: string|number;
	/**
	 * 未选中时的图标
	 */
	icon?: string;
	/**
	 * 激活时的图标
	 */
	activeIcon?: string;
	/**
	 * 默认的文字及图标颜色
	 */
	fontColor: string;
	/**
	 * 暗黑时的默认的文字及图标颜色，
	 * 空取时白色
	 */
	darkFontColor: string;
	/**
	 * 文字及图标大小
	 */
	fontSize: string;
	/**
	 * 激活的文字及图标颜色
	 * 空值时取全局统一的主题色。
	 */
	activeFontColor: string;
	/**
	 * 是否是按钮选项。
	 */
	isBtn: boolean;

}


export type tmDropdownMenuTypeProide = {
	activeName: number|string;
	getNodes():Promise<UniNamespace.NodeInfo>;
	zIndex:number;
}