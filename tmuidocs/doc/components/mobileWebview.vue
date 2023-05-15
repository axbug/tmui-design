<template>
	<div class="webviewbody">
		<div  @click="isopen = !isopen" class="detailwebview">
			<span style="padding-left:12px">{{ _title }}</span>
			<span style="padding-right:12px">{{ str }}</span>
		</div>
		<iframe scrolling="auto" v-if="isopen" class="webview" :src="url"></iframe>
		<!-- <div v-if="isShowLeftWin" class="leftWin">
			<iframe scrolling="auto" class="webview" :src="url"></iframe>
		</div> -->
	</div>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: "查看模拟效果"
		}
	},
	data() {
		return {
			isopen: false,
			isShowLeftWin: false,
		}
	},
	mounted() {
		let w = window.innerWidth;
		if (w >= 1600) this.isShowLeftWin = true;
		let t = this;
		window.addEventListener("resize", function (e) {
			w = window.innerWidth;
			if (w >= 1600) {
				// t.isShowLeftWin = true;
			} else {
				// t.isShowLeftWin = false;
			}
		})
	},
	computed: {
		str: function () {
			return this.isopen === true ? "－" : "＋"
		},
		_title: function () {
			return this.title
		}
	},
	methods: {

	}
}
</script>

<style>
.leftWin {
	position: fixed;
	right: 10px;
	top: calc(var(--navbar-height) + 30px);
	z-index: 8;
}

/* 	@media screen and (max-width: 1600px) {
		.leftWin {
			display: none;
			visibility: hidden;
		}
	} */
.webviewbody {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
}

.detailwebview {
	width: 100%;
	padding: 12px 0px;
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	border:1px solid rgba(200,200,200,0.4);
	background-color: rgba(193, 184, 255, 0.4);
	border-radius: 10px;
}

.webview {
	width: 100%;
	width: 375px;
	height: 686px;
	background: transparent;
	border: none;
	margin: auto;
	padding: 0;
	margin-top: 12px;
	border-radius: 32px;
	border: 6px solid rgba(22, 115, 255, 0.2);
    box-shadow: 2px 2px 24px rgba(22, 115, 255, 0.2);

}
</style>
