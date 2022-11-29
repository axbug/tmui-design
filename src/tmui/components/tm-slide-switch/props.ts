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
	leftMenu:{
		type: Array as PropType < Array < actionItem >> ,
		default: () => []
	},
	rightMenu:{
		type: Array as PropType < Array < actionItem >> ,
		default: () => []
	}
}