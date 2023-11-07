<template>
	<el-dialog custom-class="stake-dialog" :visible.sync="show" width="946px">
		<div class="stake-header text-color" slot="title">
			Stake Your NFTs
		</div>
		<div class="stake-content">
			<div class="stake-desc">
				By staking your NFT, you can settle the NFT DAO dividend bonus once a week.Each time you stake NFT, your
				staking time will restart.NFTs that have been staked cannot be sold, but protected content can continue
				to be unlockedThe number of NFTs that have been staked is the number of your voting rights.
			</div>
			<div class="stake-label text-color">
				Stake NFT Quantity
			</div>
			<div class="stake-input">
				<el-input class="input" placeholder="" style="width: 640px;"></el-input>
			</div>
			<div class="stake-tip">
				Maximum NFT Stake quantity <span class="text-color">3</span>
			</div>
		</div>
		<div class="btn-container">
			<el-button class="common-btn2">Stake</el-button>
		</div>
	</el-dialog>
</template>

<script>
	export default {
		name: 'stake-dialog',
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
	.stake-dialog {
		background: #1A2027;
		border: 1px solid #2C3638;
		border-radius: 16px 8px 8px 8px;

		.stake-header {
			text-align: left;
			font-size: 24px;
			font-family: Arial;
			font-weight: bold;
		}

		.stake-content {
			background: #212831;
			border-radius: 15px;
			padding: 38px 36px;
			margin: 36px 47px;
			text-align: left;

			.stake-desc {
				font-size: 16px;
				font-family: Arial;
				font-weight: bold;
				color: #9FAEC0;
				line-height: 24px;
			}

			.stake-label {
				margin-top: 45px;
				font-size: 18px;
				font-family: Arial;
				font-weight: bold;
			}

			.stake-input {
				margin-top: 17px;
			}

			.stake-tip {
				margin-top: 12px;
				font-size: 12px;
				font-family: Arial;
				font-weight: 400;
				color: #747C7C;
			}
		}

		.btn-container {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 84px;
			margin-bottom: 54px;

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

	.el-dialog__header {
		padding: 39px 48px 29px 48px;
	}

	.el-dialog__headerbtn {
		top: 47px;
		right: 45px;
		font-size: 26px;
	}

	.el-dialog__body {
		padding: 0 0;
	}

	.el-input__inner {
		height: 48px;
		line-height: 48px;
	}
</style>