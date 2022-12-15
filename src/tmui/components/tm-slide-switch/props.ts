import {PropType} from "vue"
import {actionItem} from "./interface"
export const defaultProps = {
	width: {
		type: Number,
		default: 750
	},
	height: {
		type: Number,
		default: 88
	},

	disabled: {
		type: Boolean,
		default: false
	},
	transprent: {
		type: Boolean,
		default: false
	},
	color: {
		type: String,
		default: 'white'
	},
	round: {
		type: Number,
		default: 0
	},
	//当前打开的状态，可以使用v-model:open-status
	openStatus: {
		type: Boolean,
		default: false
	},
	/** 单位 px,为什么不rpx,原因在于uni的wxs暂时有bug,无法在wxs中去获取宽度,目前是死的120宽度 */
	leftWidth:{
		type: Number,
		default: 120
	},
	/** 单位 px,为什么不rpx,原因在于uni的wxs暂时有bug,无法在wxs中去获取宽度,目前是死的120宽度 */
	rightWidth:{
		type: Number,
		default: 120
	},
}