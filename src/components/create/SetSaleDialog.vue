<template>
	<el-dialog custom-class="set-sale-dialog" :visible.sync="show" width="946px">
		<div class="set-sale-header text-color" slot="title">
			Set NFT Sales Promotion
		</div>
		<div class="set-sale-top">
			<div class="label text-color">
				Allows licensed tokens to be purchased at discounted prices for NFTs
			</div>
			<el-switch></el-switch>
			<div class="set-sale-form">
				<div class="set-sale-title">
					Licensed tokens information
				</div>
				<div class="set-sale-label text-color">
					BSC Chain token standard
				</div>
				<div class="set-sale-value">
					<div class="type-item" :class="{
					light:item==form.type
				}" v-for="item in typeList" :key="item" @click="form.type = item">
						{{item}}
					</div>
				</div>
				<div class="set-sale-label text-color">
					BSC Chain token smart contract address
				</div>
				<div class="set-sale-value">
					<el-input class="input" placeholder="" style="width: 640px;"></el-input>
					<i class="el-icon-circle-check" style="color: #00F9E5;margin-left: 4px;"></i>
					<i class="el-icon-delete" style="color: #87A2B7;margin-left: 12px;"></i>
					<div class="verify">Verify</div>
				</div>
				<div class="set-sale-tip">
					Alows oken smart contraces that support <span class="text-color">BEP-20, BEP-721, and BEP-1155
						standards</span>
				</div>
				<div class="set-sale-label text-color">
					Token ID
				</div>
				<div class="set-sale-value">
					<el-input class="input" placeholder="" style="width: 376px;"></el-input>
				</div>
				<div class="set-sale-label text-color">
					How many discounts can a user get by holding one Licensed token?
				</div>
				<div class="set-sale-value">
					<el-input class="input" placeholder="" style="width: 271px;"></el-input>
				</div>
				<div class="set-sale-label text-color">
					Discounts for purchasing NFTs
				</div>
				<div class="set-sale-value">
					<el-input class="input" placeholder="" style="width: 100px;"></el-input>
					<div class="set-sale-unit">%</div>
				</div>
			</div>
			<div class="btn-container">
				<el-button class="common-border-btn" plain @click="show = false">Cancel</el-button>
				<el-button class="common-btn2" style="margin-left: 82px;">Apply</el-button>
			</div>
		</div>
	</el-dialog>
</template>

<script>
	export default {
		name: 'set-sale-dialog',
		data() {
			return {
				show: false,
				typeList: ['BEP-20', 'BEP-721', 'BEP-1155'],
				form: {
					type: 'BEP-20'
				}
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
	.set-sale-dialog {
		background: #1A2027;
		border: 1px solid #2C3638;
		border-radius: 12px 6px 6px 6px;

		.set-sale-header {
			text-align: left;
			font-size: 24px;
			font-family: Arial;
			font-weight: bold;
		}

		.set-sale-top {
			border: 1px solid #1F272F;
			padding: 33px 46px 0 46px;
			text-align: left;

			.label {
				font-size: 18px;
				font-family: Arial;
				font-weight: bold;
				color: #FFFFFF;
				margin-bottom: 20px;
			}
		}

		.set-sale-form {
			background: #212831;
			border-radius: 11px;
			margin: 30px 0 84px 0;
			padding: 38px 0 44px 0;

			.set-sale-title {
				font-size: 20px;
				font-family: Arial;
				font-weight: bold;
				color: #9FAEC0;
				margin: 0 35px;
			}

			.set-sale-label {
				font-size: 18px;
				font-family: Arial;
				font-weight: bold;
				margin: 42px 36px 0 36px;
			}

			.set-sale-value {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin: 20px 36px 0 36px;

				.type-item {
					min-width: 160px;
					height: 48px;
					line-height: 48px;
					background: #0E161D;
					border: 1px solid #313838;
					border-radius: 8px;
					font-size: 14px;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #FFFFFF;
					margin-right: 9px;
					text-align: center;
					cursor: pointer;

					&.light {
						background: #18252F;
						border: 1px solid #2FC9BD;
						border-radius: 8px;
						font-size: 14px;
						font-family: Source Han Sans CN;
						font-weight: bold;
						color: #00FBE6;
					}
				}

				.set-sale-unit {
					margin-left: 6px;
					font-size: 14px;
					font-family: Arial;
					font-weight: bold;
					color: #00F9E5;
				}

				.verify {
					width: 100px;
					height: 48px;
					line-height: 48px;
					background: #31CAD7;
					border: 1px solid #313838;
					border-radius: 8px;
					font-size: 12px;
					font-family: Arial;
					font-weight: bold;
					color: #212831;
					text-align: center;
					margin-left: 4px;
				}
			}

			.set-sale-tip {
				font-size: 12px;
				font-family: Arial;
				font-weight: 400;
				color: #747C7C;
				margin: 12px 36px 0 36px;
			}
		}

		.btn-container {
			margin-top: 60px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			margin-bottom: 36px;

			.common-border-btn,
			.common-btn2 {
				width: 135px;
			}

			.common-border-btn {
				border: 1px solid #26BEEF;
				border-radius: 7px;
				font-size: 12px;
				font-family: Arial;
				font-weight: bold;
				color: #14DAEB;
				background: transparent;
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

		.el-switch.is-checked .el-switch__core {
			border-color: #00F9E5;
			background-color: #00F9E5;
		}
	}
</style>