<template>
	<div class="container">
		<div class="top">
			<div>
				<span class="text-big text-color">
					My DOUJI NFTs
				</span>
				<span class="sub-value">
					308 Items
				</span>
			</div>
			<div>
				<el-input placeholder="Search by name or Token ID">
					<i slot="prefix" class="el-input__icon el-icon-search"></i>
				</el-input>
			</div>
		</div>
		<div class="content">
			<div class="list">
				<div v-for="(item,index) in list" :key="index" class="item">
					<product-item></product-item>
				</div>
			</div>
			<el-pagination background layout="prev, pager, next" :total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import ProductItem from '@/components/ProductItem'
	export default {
		name: 'nfts-view',
		components: {
			ProductItem
		},
		data() {
			return {
				list: []
			}
		},
		created() {
			for (let i = 0; i < 20; i++) {
				this.list.push({})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 0 50px;
		height: 100vh;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;

		.top {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding: 50px 0;

			.text-big {
				font-size: 32px;
				line-height: 32px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				margin-bottom: auto;
			}

			.sub-value {
				line-height: 40px;
				font-size: 14px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #A9B7C3;
			}
		}

		.content {
			flex: 1;

			.list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.item {
					width: 342px;
					margin: 0 24px 27px 0;

					&:last-child {
						margin-right: 0;
					}
				}
			}
		}
	}
</style>