<template>
	<div class="iconss">
		<div class="iconItem" v-for="(item,index) in icon" :key="index"
			style="padding:10px;margin-bottom:24px;text-align:center;width:calc(25% - 20px)">
			<span style="font-size:2rem" :class="'ri-'+item"></span>
			<div>
				<span style="font-size:0.8rem">{{item}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import icons from "../../../src/uni_modules/tm-ui/css/remixicon.json"

	export default {
		props: {

		},
		data() {
			return {
				icon: icons
			}
		},
		mounted() {},

		methods: {

		}
	}
</script>

<style>
	@import url(../../../src/uni_modules/tm-ui/css/remixicon.css);

	.iconss {
		display: flex;
		flex-flow: row wrap;
		
	}
	.iconItem{
		font-family: 'remixicon';
		transition: transform 0.3s linear;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>