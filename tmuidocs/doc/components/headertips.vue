
<template>
	<div class="tips">
		<div>你当前查看的文档是tmui3.2.0（已不再支持NVUE）</div>

		<a class="itema" target="_blank" href="https://tmui.tmui.design" >
			[tmui3.1.x nvue点我]
		</a>
		<a  class="itema" target="_blank" href="https://xui.tmui.design" >
			[tmui4.x uniappx原生开发代替nvue]
		</a>
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
.tips{
	width: 100%;
	box-sizing: border-box;
	
	padding: 6px 16px;
	display: block;
	border-radius: 6px;
	margin-bottom: 20px;

	border-color: var(--vp-custom-block-tip-border);
    color: var(--vp-custom-block-tip-text);
    background-color: var(--vp-custom-block-tip-bg);
}
.itema{
	color: rgb(93, 113, 143);
	text-decoration:none;
	font-size: 14px;
}

</style>

