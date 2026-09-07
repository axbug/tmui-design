<template>
	<div class="tips">
		<div class="tips-title">你当前查看的文档是 tmui 3.2.0（已不再支持 NVUE）</div>
		<div class="tips-links">
			<a class="itema" target="_blank" href="https://tmui.tmui.design">
				tmui 3.1.x nvue
			</a>
			<a class="itema" target="_blank" href="https://xui.tmui.design">
				tmui 4.x uni-app x
			</a>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isopen: false,
			isShowLeftWin: false,
		}
	},
}
</script>

<style>
.tips {
	width: 100%;
	box-sizing: border-box;
	padding: 12px 16px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	border-radius: 8px;
	margin-bottom: 28px;
	border: 1px solid var(--vp-custom-block-tip-border);
	border-left-width: 2px;
	color: var(--vp-custom-block-tip-text);
	background-color: var(--vp-custom-block-tip-bg);
}

.tips-title {
	font-size: 13.5px;
	line-height: 1.5;
	letter-spacing: -0.01em;
	font-weight: 500;
}

.tips-links {
	display: flex;
	flex-wrap: wrap;
	gap: 12px 16px;
}

.itema {
	color: var(--vp-c-brand-1);
	text-decoration: none;
	font-size: 12.5px;
	font-weight: 500;
	letter-spacing: -0.01em;
	border-bottom: 1px solid rgba(235, 86, 0, 0.28);
}

.itema:hover {
	border-bottom-color: rgba(235, 86, 0, 0.55);
}
</style>
