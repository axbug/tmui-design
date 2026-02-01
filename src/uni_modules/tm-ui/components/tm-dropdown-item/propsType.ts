export type TmDropdownItemProps = {
	/**
	 * 菜单标题
	 */
	title?: string;
	/**
	 * 标识，变换或者点击时，会通过事件传回。不要与其它选项相同，必须是唯一
	 */
	keyName?: string|number;
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
	fontColor?: string;
	/**
	 * 暗黑时的默认的文字及图标颜色，
	 * 空取时白色
	 */
	darkFontColor?: string;
	/**
	 * 文字及图标大小
	 */
	fontSize?: string;
	/**
	 * 激活的文字及图标颜色
	 * 空值时取全局统一的主题色。
	 */
	activeFontColor?: string;
	/**
	 * 是否是按钮选项。
	 */
	isBtn?: boolean;
	

}



