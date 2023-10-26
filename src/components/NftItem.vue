<template>
	<div class="nft-container">
		<img style="width: 100%;height:193px;" />
		<div class="label text-color">
			dgsdgshgdgjsg'sgdsadgshgdsddfddhsjhjsh
		</div>
		<div class="bottom">
			<div>
				<span class="value text-color">2500 MBD </span>
				<span class="transform text-sub-color">≈$0.57</span>
			</div>
			<div>
				<img style="width: 16px;height: 14px;" />
				<span class="star text-sub-color">12345</span>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'NftItem',
		props: {
			item: {
				type: Object,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nft-container {
		cursor: pointer;
		.label {
			font-size: 14px;
			line-height: 14px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			text-align: left;
			margin: 20px 15px 0 15px;
			word-wrap: break-word;
		}

		.bottom {
			padding: 15px 15px 17px 15px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			.value {
				font-size: 14px;
				line-height: 14px;
				font-family: Source Han Sans CN;
				font-weight: bold;
			}

			.transform {
				font-size: 14px;
				line-height: 14px;
				font-family: Source Han Sans CN;
				font-weight: 400;
			}

			.star {
				font-size: 14px;
				line-height: 14px;
				font-family: Source Han Sans CN;
				font-weight: 400;
			}
		}
	}
</style>