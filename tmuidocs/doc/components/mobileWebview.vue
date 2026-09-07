
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
			isopen: true,
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
	padding: 11px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	border: 1px solid var(--vp-c-border);
	color: var(--vp-c-text-2);
	background-color: var(--vp-c-bg-alt);
	border-radius: 8px;
	font-size: 13px;
	letter-spacing: -0.01em;
	font-weight: 500;
}

.webview {
	width: 375px;
	height: 686px;
	background: var(--vp-c-bg-alt);
	margin: 16px auto 8px;
	padding: 0;
	border-radius: 28px;
	border: 8px solid var(--vp-c-text-1);
	box-shadow: none;
}
</style>

