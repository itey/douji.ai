<template>
	<div class="navigation-container">
		<img style="width: 56px;height:56px;" />
		<div class="content">
			<div class="label text-color">Goodbite</div>
			<div class="sub text-sub-color">
				Cisco to Acquire Splunkfor $28 Billion in Major AlCloud Security Deal Acquire
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'NavigationItem',
		props: {
			item: {
				type: Object,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navigation-container {
		height: 141px;
		background: #1A2027;
		box-shadow: 0px 8px 18px 0px rgba(9, 11, 12, 0.85);
		border-radius: 8px;
		padding: 22px 18px;
		display: flex;
		flex-direction: row;
		cursor: pointer;

		.content {
			flex: 1;
			margin-left: 15px;

			.label {
				font-size: 18px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				line-height: 18px;
				text-align: left;
			}

			.sub {
				line-height: 22px;
				font-size: 14px;
				font-family: Arial;
				font-weight: 400;
				color: #B2B9B9;
				margin-top: 19px;
				text-align: left;
				word-wrap: break-word;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 3;
			}
		}


	}
</style>