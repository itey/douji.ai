<template>
	<div class="container">
		<img style="width: 100%;height:193px;"/>
		<div class="label text-color">
			dgsdgshgdgjsg'sgdsadgshgdsddfddhsjhjsh
		</div>
		<div class="bottom">
			<div>
				<span class="text-color">2500 MBD </span>
				<span class="text-sub-color">≈$0.57</span>
			</div>
			<div>
				<img style="width: 16px;height: 14px;" />
				<span class="text-sub-color">≈$0.57</span>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'ProductItem',
		props:{
			item:{
				type:Object,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.label{
			font-size: 14px;
			line-height: 14px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: #FFFFFF;
		}
		.bottom{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>