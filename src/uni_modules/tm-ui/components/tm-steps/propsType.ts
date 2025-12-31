/*
 * Copyright (c) 2025. tmzdy by @https://tmui.design
 */

export interface PropsTypes {
  /** 绑定值，数字 */
  modelValue?: number,
  /** 默认图标 */
  icon?: string,
  /** 激活状态下的图标 */
  activeIcon?: string,
  /** 图标大小，可以是字符串或数字 */
  iconSize?: string | number,
  /** 标签文本大小，可以是字符串或数字 */
  labelSize?: string | number,
  /** 描述文本大小，可以是字符串或数字 */
  descSize?: string | number,
  /** 默认颜色 */
  color?: string,
  /** 激活状态下的颜色 */
  activeColor?: string,
  /** 是否垂直排列 */
  vertical?: boolean,
  /** 是否反转排列顺序 */
  reverse?: boolean,
  /** 是否禁用 */
  disabled?: boolean,
  /** 显示标题及辅助信息标签 */
  showFooter?: boolean,
}
