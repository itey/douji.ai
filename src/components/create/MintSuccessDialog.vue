<template>
	<el-dialog custom-class="mint-success-dialog" :visible.sync="show" width="681px">
		<img style="width: 75px;height: 75px;margin-top: 61px;" src="@/assets/images/create/mint-success.png" />
		<div class="mint-success-title">Congratulations</div>
		<div class="mint-success-label text-color">Your content NFT has been minted successfully!</div>
		<div class="mint-success-content">
			<div class="mint-success-info">
				<div class="label">Transcantion ID</div>
				<div class="value">0x87Fa515e6EFFOF296914D444E5512c3F70c47A3</div>
			</div>
			<div class="mint-success-info">
				<div class="label">Token Address</div>
				<div class="value">0x87Fa515e6EFFOF296914D444E5512c3F70c47A3</div>
			</div>
			<div class="mint-success-info">
				<div class="label">Token ID</div>
				<div class="value">4820</div>
			</div>
		</div>
		<div class="btn-container">
			<el-button class="common-btn2">View NFT</el-button>
		</div>
	</el-dialog>
</template>

<script>
	export default {
		name: 'mint-success-dialog',
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
	.mint-success-dialog {
		background: #1A2027;
		border: 1px solid #2C3638;
		border-radius: 12px 6px 6px 6px;
		display: flex;
		flex-direction: column;
		align-items: center;

		.mint-success-title {
			font-size: 22px;
			font-family: Arial;
			font-weight: bold;
			color: #00F9E5;
			margin-top: 25px;
		}

		.mint-success-label {
			font-size: 13px;
			font-family: Arial;
			font-weight: bold;
			margin-top: 17px;
		}

		.mint-success-content {
			background: #212831;
			border-radius: 11px;
			padding: 35px 0 37px 0;
			margin-top: 40px;
			width: 611px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			

			.mint-success-info {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-bottom: 16px;

				&:last-child {
					margin-bottom: 0;
				}

				.label {
					font-size: 10px;
					font-family: Arial;
					font-weight: 400;
					color: #87A2B7;
					width: 101px;
				text-align: left;
				}

				.value {
					font-size: 10px;
					font-family: Arial;
					font-weight: bold;
					color: #FFFFFF;
				text-align: left;
				}
			}
		}
		.btn-container{
			margin: 35px 0 50px;
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
</style>