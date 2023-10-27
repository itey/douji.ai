<template>
	<div class="product-container">
		<img style="width: 100%;height:140px;" />
		<span class="type">Midjourney</span>
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
		name: 'ProductItem',
		props: {
			item: {
				type: Object,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.product-container {
		position: relative;
		cursor: pointer;
		.type{
			position: absolute;
			top: 9px;
			left: 11px;
			padding: 4px 9px;
			background: rgba(13,18,18,0.66);
			border-radius: 3px;
			font-size: 10px;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 22px;
		}
		.label {
			font-size: 10px;
			line-height: 10px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			text-align: left;
			margin: 11px 8px 0 8px;
			word-wrap: break-word;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 1;
		}

		.bottom {
			padding: 14px 10px 10px 10px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			.value {
				font-size: 10px;
				line-height: 10px;
				font-family: Source Han Sans CN;
				font-weight: bold;
			}

			.transform {
				font-size: 10px;
				line-height: 10px;
				font-family: Source Han Sans CN;
				font-weight: 400;
			}

			.star {
				font-size: 10px;
				line-height: 10px;
				font-family: Source Han Sans CN;
				font-weight: 400;
			}
		}
	}
</style>