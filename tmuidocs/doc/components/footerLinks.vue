<template>
	<div class="footLinksBox">
		<a href="https://www.uxframe.cn" target="_blank">
			<img alt="UxFrame 低代码高性能UI框架" src="https://www.uxframe.cn/source/links/link.png" />
		</a>
		<a href="https://wx.geeks.ink" target="_blank">
			<img alt="WXUI 基于uni-app x开发的高性能混合UI库" src="/public/images/logoad1.png" />
		</a>
		<a href="https://www.flowerui.com/" target="_blank">
			<img alt="Flower Library" src="/public/images/logoad2.png" />
		</a>
	</div>
</template>

<script>
export default {
	props: {
	
	},
	data() {
		return {
			
		}
	},
	mounted() {
		
	},
	computed: {
		
	},
	methods: {

	}
}
</script>

<style>
.footLinksBox {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 12px;
	justify-content: center;
	padding: 8px 24px 40px;
}

.footLinksBox a {
	display: block;
	border: 1px solid var(--vp-c-border, #2a2822);
	border-radius: 0.625rem;
	overflow: hidden;
	background: var(--vp-c-bg-alt, #1b1913);
	transition: border-color 0.22s cubic-bezier(0.22, 1, 0.36, 1),
		transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
}

.footLinksBox a:hover {
	border-color: rgba(235, 86, 0, 0.45);
	transform: translateY(-2px);
}

.footLinksBox img {
	display: block;
	height: 88px;
	width: auto;
}
</style>