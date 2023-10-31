<template>
	<div class="create-step3">
		<div class="title">
			Step 3 Mint NFT
		</div>
		<div class="form-container">
			<div class="form-top">
				<div class="form-left">
					<div class="form-title text-color">
						Enterprise Metaverse Users Prefer Simplifed Digital Avatars Over Hyper-Realistic Alternatives
					</div>
					<img style="width: 676px;height: 383px;margin-top:36px;" />
					<div class="form-desc">
						The easy-to-use prompt to generate the portrait photography with sea activity scene. You can
						modify the characteractivity and location of the sea as per your preference.
					</div>
					<div class="form-label-sub" style="margin-top: 16px;">
						<img style="width: 14px;height: 14px;" src="@/assets/images/create/website.png" />
						<div class="form-label-sub-text">Open to Access</div>
					</div>
					<div class="form-content text-color">
						Virtual Reality (VR) has opened up exciting new possibilities,
					</div>
					<div class="form-label-sub">
						<img style="width: 14px;height: 14px;" src="@/assets/images/create/protect.png" />
						<div class="form-label-sub-text">Protected</div>
					</div>
					<div class="form-content text-color">
						Virtual Reality (VR) has opened up exciting new possibilities,
					</div>
					<div class="form-tag">
						<div class="form-tag-label text-color">Tags:</div>
						<div class="form-tag-item text-color" v-for="(item,index) in 4">NFT</div>
					</div>
				</div>
				<div class="form-right">
					<div class="form-attr-container">
						<div class="form-attr-title text-color">
							DOUJI NFT Attributes
						</div>
						<div class="form-attr-list">
							<div class="form-attr-item">
								<div class="form-attr-label">Content Type</div>
								<div class="form-attr-value">Airticle</div>
							</div>
							<div class="form-attr-item">
								<div class="form-attr-label">Category</div>
								<div class="form-attr-value">AIGC</div>
							</div>
							<div class="form-attr-item">
								<div class="form-attr-label">Platform</div>
								<div class="form-attr-value">GPT</div>
							</div>
							<div class="form-attr-item">
								<div class="form-attr-label">Language</div>
								<div class="form-attr-value">English</div>
							</div>
							<div class="form-attr-item">
								<div class="form-attr-label">Max Supply</div>
								<div class="form-attr-value">50,000</div>
							</div>
							<div class="form-attr-item">
								<div class="form-attr-label">Available Supply</div>
								<div class="form-attr-value">50,000</div>
							</div>
							<div class="form-attr-item">
								<div class="form-attr-label">Initial Mint Quantity</div>
								<div class="form-attr-value">50,000</div>
							</div>
						</div>
					</div>
					<div class="form-attr-container">
						<div class="form-attr-title text-color">
							Primary Market
						</div>
						<div class="form-attr-market">
							<div class="form-attr-available">
								Available : <span class="text-color">46528</span>
							</div>
							<div class="form-attr-mbd">
								<div class="mbd-value text-color">2590.0 MBD</div>
								<div class="mbd-transform">≈$26.57</div>
							</div>
							<div class="form-attr-mint">Mint</div>
							<div class="form-attr-tip">
								Owning <span class="text-color">1 BJxStar</span> To Get <span
									class="text-color">20%</span>
								discount
							</div>
						</div>
					</div>
					<div class="form-attr-container">
						<div class="form-attr-title text-color">
							Optional Setting
						</div>
						<div class="form-attr-setting">
							<div class="form-attr-sale">
								Set NFT Sales Promotion
							</div>
							<div class="form-attr-dao">
								Set NFT DAO Governace
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="form-fee-count">
				Total Mint Service Fee (Fee radio 10%): <span class="text-color">2500 MBD</span>
			</div>
			<div class="btn-container">
				<el-button class="common-btn2" @click="backClick">Back</el-button>
				<el-button class="common-btn2" @click="nextClick">Next</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'create-step3',
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.create-step3 {
		.title {
			margin-top: 63px;
			margin-bottom: 12px;
			font-size: 14px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: #FFFFFF;
			text-align: left;
		}

		.form-container {
			background: #1A2027;
			border-radius: 6px;
			padding: 30px 20px;

			.form-top {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				text-align: left;

				.form-left {
					width: 683px;

					.form-title {
						font-size: 23px;
						font-family: Source Han Sans CN;
						font-weight: bold;
						line-height: 35px;
					}

					.form-desc {
						padding-left: 12px;
						font-size: 12px;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #FFFFFF;
						line-height: 22px;
						border-left: 2px solid;
						border-image: linear-gradient(0deg, #50CED5, #46D1AF) 1;
						margin-top: 32px;
					}

					.form-label-sub {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: center;

						.form-label-sub-text {
							font-size: 13px;
							font-family: Source Han Sans CN;
							font-weight: bold;
							color: #00F9E5;
							margin-left: 8px;
						}
					}

					.form-content {
						font-size: 12px;
						font-family: Source Han Sans CN;
						font-weight: 400;
						line-height: 22px;
						margin: 40px 0;
					}

					.form-tag {
						display: flex;
						flex-direction: row;
						align-items: center;

						.form-tag-label {
							font-size: 10px;
							font-family: Source Han Sans CN;
							font-weight: bold;
						}

						.form-tag-item {
							font-size: 9px;
							line-height: 17px;
							font-family: Source Han Sans CN;
							font-weight: 400;
							height: 17px;
							background: #434D56;
							border-radius: 4px;
							padding: 0 9px;
							min-width: 36px;
							margin-left: 9px;
							text-align: center;
						}
					}
				}

				.form-right {
					width: 277px;

					.form-attr-container {
						border: 1px solid #363E3E;
						border-radius: 6px;
						margin-bottom: 22px;

						.form-attr-title {
							height: 48px;
							line-height: 48px;
							padding: 0 17px;
							background: #37434D;
							font-size: 13px;
							font-family: Arial;
							font-weight: bold;
							color: #FFFFFF;
						}

						.form-attr-list {
							display: flex;
							flex-direction: row;
							flex-wrap: wrap;
							justify-content: space-between;
							padding: 17px 12px 4px 12px;

							.form-attr-item {
								width: 122px;
								padding: 14px 0;
								background: #1E252D;
								border-radius: 6px;
								margin-bottom: 13px;

								.form-attr-label {
									font-size: 10px;
									font-family: Source Han Sans CN;
									font-weight: 400;
									color: #88A2B8;
									margin-left: 9px;
								}

								.form-attr-value {
									font-size: 12px;
									font-family: Source Han Sans CN;
									font-weight: bold;
									color: #FFFFFF;
									margin-top: 7px;
									margin-left: 9px;
								}
							}
						}

						.form-attr-market {
							display: flex;
							flex-direction: column;
							align-items: center;
							padding: 17px 17px 22px 17px;
							text-align: center;
							.form-attr-available {
								background: #1E252D;
								border-radius: 6px;
								height: 24px;
								line-height: 24px;
								font-size: 10px;
								font-family: Source Han Sans CN;
								font-weight: bold;
								color: #ACBCC9;
								min-width: 122px;
								text-align: center;
								padding: 0 17px;
								margin-top: 17px;
							}

							.form-attr-mbd {
								display: flex;
								flex-direction: row;
								align-items: baseline;
								margin-top: 20px;

								.form-attr-mbd-value {
									font-size: 26px;
									font-family: Arial;
									font-weight: bold;
								}

								.form-attr-mbd-value {
									font-size: 10px;
									font-family: Arial;
									font-weight: 400;
									color: #88A2B8;
								}
							}

							.form-attr-mint {
								margin: 17px 0 9px 0;
								height: 36px;
								line-height: 36px;
								background: linear-gradient(-16deg, #848D98, #97A8A7);
								border-radius: 18px;
								font-size: 13px;
								font-family: Arial;
								font-weight: bold;
								color: #4B5760;
								width: 100%;
							}

							.form-attr-tip {
								font-size: 10px;
								font-family: Arial;
								font-weight: 400;
								color: #88A2B8;
							}
						}
						.form-attr-setting{
							padding: 16px 13px;
							
						}
					}
				}
			}

			.form-fee-count {
				font-size: 13px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #ACBCC9;
				margin-top: 48px;
			}

			.btn-container {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				margin-top: 22px;

				.common-btn2 {
					margin-right: 59px;

					&:last-child {
						margin-right: 0;
					}
				}
			}
		}

	}
</style>