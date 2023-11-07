<template>
	<el-dialog custom-class="list-your-item-dialog" :visible.sync="show" width="946px">
		<div class="list-your-item-header text-color" slot="title">
			List Your Item
		</div>
		<div class="list-your-item-content">
			<div class="item-input-container">
				<div class="item-label text-color">
					NFT Sale Price
				</div>
				<div class="item-value">
					<div class="item-input">
						<el-input class="input" placeholder="" style="width: 200px;"></el-input>
						<div class="item-unit">MBD</div>
					</div>
					<div class="item-tip">
						The minimum selling price of NFT must be greater than 0 MBD
					</div>
				</div>
			</div>
			<div class="item-input-container">
				<div class="item-label text-color">
					Item Quantity
				</div>
				<div class="item-value">
					<div class="item-input">
						<el-input class="input" placeholder="" style="width: 200px;"></el-input>
					</div>
					<div class="item-tip">
						TMaximum NFT sale quantity <span class="text-color">250</span>
					</div>
				</div>
			</div>
			<div class="btn-container">
				<el-button class="common-btn2">Create Order</el-button>
			</div>
		</div>
	</el-dialog>
</template>

<script>
	export default {
		name: 'list-your-item-dialog',
		data() {
			return {
				show: false
			}
		},
		methods: {
			showDialog() {
				this.show = true
			}
		}
	}
</script>

<style lang="scss">
	.list-your-item-dialog {
		background: #1A2027;
		border: 1px solid #2C3638;
		border-radius: 12px 6px 6px 6px;

		.list-your-item-header {
			text-align: left;
			font-size: 17px;
			font-family: Arial;
			font-weight: bold;
		}

		.list-your-item-content {
			margin-top: 21px;

			.item-input-container {
				margin-top: 34px;
				display: flex;
				flex-direction: row;

				.item-label {
					margin-left: 193px;
					width: 152px;
					font-size: 18px;
					line-height: 48px;
					font-family: Arial;
					font-weight: bold;
					color: #9FAEC0;
				}

				.item-value {
					.item-input {
						display: flex;
						flex-direction: row;
						align-items: center;

						.input {
							background: #0E161D;
							border: 1px solid #313838;
							border-radius: 8px;
						}

						.item-unit {
							font-size: 14px;
							line-height: 48px;
							font-family: Arial;
							font-weight: bold;
							color: #00F9E5;
							margin-left: 10px;
						}
					}

					.item-tip {
						font-size: 12px;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #747C7C;
						margin-top: 16px;
					}
				}
			}
		}

		.btn-container {
			margin: 71px 0 89px 351px;
			text-align: left;

			.common-btn2 {
				width: 188px;
			}
		}
	}

	.el-dialog {
		background: #1A2027;
		border: 1px solid #2C3638;
		border-radius: 12px 6px 6px 6px;
	}

	.el-dialog__body {
		padding: 0 0;
	}

	.el-input__inner {
		height: 48px;
		line-height: 48px;
	}
</style>