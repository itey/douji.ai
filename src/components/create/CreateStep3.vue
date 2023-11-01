<template>
	<div class="create-step3">
		<div class="title">
			{{edit?'Step 3     Preview NFT':'Step 3 Mint NFT'}}
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
							<el-button class="common-btn2 form-attr-mint">Mint</el-button>
							<div class="form-attr-tip">
								Owning <span class="text-color">1 BJxStar</span> To Get <span
									class="text-color">20%</span>
								discount
							</div>
						</div>
					</div>
					<div v-if="edit" class="form-attr-container">
						<div class="form-attr-title">
							<div class="text-color">Secondary Market</div>
							<div class="form-attr-action">+ List Your item</div>
						</div>
						<div class="form-second-market">
							<div class="second-market-column" style="width: 77px;padding-left: 10px;">
								<div class="second-market-header">
									From
								</div>
								<div class="second-market-td" v-for="(item,index) in 3">
									0x7Fa...4745d
								</div>
							</div>
							<div class="second-market-column" style="text-align: right;width: 75px;">
								<div class="second-market-header">
									Price(MBD)
								</div>
								<div class="second-market-td" v-for="(item,index) in 3">
									2790.0
								</div>
							</div>
							<div class="second-market-column"
								style="text-align: right;width: 75px;padding-right: 12px;">
								<div class="second-market-header">
									Available
								</div>
								<div class="second-market-td" v-for="(item,index) in 3">
									12
								</div>
							</div>
						</div>
					</div>
					<div v-if="edit" class="form-attr-container">
						<div class="form-attr-title text-color">
							DOUJI NFT DAO Governance
						</div>
						<div class="form-dao">
							<div class="dao-title text-color">
								NFT DAO Eamings
							</div>
							<div class="dao-sub">
								The NFT DAO members of this item will receive <span class="text-color">10%</span>
								forevery sale
							</div>
							<div class="dao-title text-color" style="margin-top: 26px;margin-bottom:3px">
								NFT DAO Income Distribution
							</div>
							<div class="dao-income-item">
								<div class="dao-income-label">Creators Earngings</div>
								<div class="dao-income-value text-color">80%</div>
							</div>
							<div class="dao-income-item">
								<div class="dao-income-label">NFT Stakers</div>
								<div class="dao-income-value text-color">80%</div>
							</div>
							<div class="dao-member dao-member-header">
								<div class="dao-member-left">Mermber</div>
								<div class="dao-member-right">Proportion of Revenue</div>
							</div>
							<div v-for="(item,index) in 2" class="dao-member dao-member-td">
								<div class="dao-member-left text-color">0x7Fa...4745d</div>
								<div class="dao-member-right">70%</div>
							</div>
							<div class="dao-title text-color" style="margin-top: 16px;">
								NFT DAO Govemance
							</div>
							<div class="dao-income-item" style="margin-top: 16px;">
								<div class="dao-income-label">Execution Threshold</div>
								<div class="dao-income-value text-color">80</div>
							</div>
							<div class="dao-title text-color" style="margin-top: 28px;">
								NFT Staker Bonus Dividend Pool
							</div>
							<div class="dividend-pool">
								<div class="dividend-pool-item">
									<div class="dividend-pool-label">Balance</div>
									<div class="dividend-pool-value text-color">2080.0808 MBD</div>
								</div>
								<div class="dividend-pool-item">
									<div class="dividend-pool-label">All members NFT Staked</div>
									<div class="dividend-pool-value text-color">168</div>
								</div>
								<div class="dividend-pool-item">
									<div class="dividend-pool-label">You NFT Staked</div>
									<div class="dividend-pool-value text-color">3 (17.86%)</div>
								</div>
								<div class="dividend-pool-item">
									<div class="dividend-pool-label">You NFT Staked Time</div>
									<div class="dividend-pool-value text-color">4 Days</div>
								</div>
							</div>
						</div>

					</div>
					<div class="form-attr-container">
						<div class="form-attr-title text-color">
							Optional Setting
						</div>
						<div class="form-attr-setting">
							<div class="form-attr-set" @click="showSetDialog">
								Set NFT Sales Promotion
							</div>
							<div class="form-attr-set">
								Set NFT DAO Governace
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="form-add" v-if="!edit">
				<div class="form-fee-count">
					Total Mint Service Fee (Fee radio 10%): <span class="text-color">2500 MBD</span>
				</div>
				<div class="btn-container">
					<el-button class="common-btn2" @click="backClick">Back</el-button>
					<el-button class="common-btn2" @click="mintClick">Mint</el-button>
				</div>
			</div>
			<div class="form-edit" v-else>
				<div class="btn-container">
					<el-button class="common-btn2" @click="backClick">Back</el-button>
					<el-button class="common-btn2" @click="updateClick">Update</el-button>
				</div>
			</div>
		</div>
		<set-sale-dialog ref="setSaleDialog"></set-sale-dialog>
	</div>
</template>

<script>
	import SetSaleDialog from '@/components/create/SetSaleDialog'
	export default {
		name: 'create-step3',
		components: {
			SetSaleDialog,
		},
		props: {
			edit: {
				type: Boolean,
				default: false
			},
		},
		data(){
			return {
				setSaleShow:false
			}
		},
		methods: {
			backClick() {
				this.$emit('backClick')
			},
			mintClick() {
				this.$emit('mintClick')
			},
			updateClick() {
				this.$emit('updateClick')
			},
			showSetDialog(){
				this.$refs['setSaleDialog'].showDialog()
			}
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
						height: auto;

						.form-attr-title {
							height: 48px;
							line-height: 48px;
							padding: 0 17px;
							background: #37434D;
							font-size: 13px;
							font-family: Arial;
							font-weight: bold;
							color: #FFFFFF;
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: space-between;

							.form-attr-action {
								font-size: 10px;
								font-family: Arial;
								font-weight: bold;
								color: #ACBCC9;
								line-height: 48px;
								cursor: pointer;
							}
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

						.form-second-market {
							display: flex;
							flex-direction: row;
							padding: 17px 12px;

							.second-market-column {
								line-height: 24px;
								background: #252D36;
								font-size: 9px;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: #ACBCC9;
							}

							.second-market-header {
								height: 24px;
							}

							.second-market-td {
								font-size: 10px;
								font-family: Arial;
								font-weight: 400;
								color: #FFFFFF;
								line-height: 37px;
								border-bottom: 1px solid #252D36;
							}
						}

						.form-dao {
							padding: 17px 12px;

							.dao-title {
								padding: 0 6px;
								font-size: 12px;
								font-family: Arial;
								font-weight: bold;
								color: #FFFFFF;
							}

							.dao-sub {
								padding: 0 6px;
								font-size: 10px;
								font-family: Arial;
								font-weight: 400;
								color: #ACBCC9;
								line-height: 14px;
								margin-top: 9px;
							}

							.dao-income-item {
								padding: 0 6px;
								margin-top: 12px;
								display: flex;
								flex-direction: row;
								align-items: center;
								justify-content: space-between;

								.dao-income-label {
									font-size: 10px;
									font-family: Arial;
									font-weight: bold;
									color: #9AB8DB;
								}

								.dao-income-value {
									font-size: 10px;
									font-family: Arial;
									font-weight: bold;
									color: #FFFFFF;
								}
							}

							.dao-member {
								padding: 0 10px;
								display: flex;
								flex-direction: row;
								align-items: center;
								justify-content: space-between;

								&.dao-member-header {
									margin-top: 14px;
									height: 24px;
									background: #1E252D;

									.dao-member-left {
										font-size: 9px;
										font-family: Source Han Sans CN;
										font-weight: 400;
										color: #ACBCC9;
										line-height: 24px;
									}

									.dao-member-right {
										font-size: 9px;
										font-family: Source Han Sans CN;
										font-weight: 400;
										color: #ACBCC9;
										line-height: 24px;
									}
								}

								&.dao-member-td {
									height: 33px;

									.dao-member-left {
										font-size: 10px;
										font-family: Arial;
										font-weight: 400;
										line-height: 33px;
									}

									.dao-member-right {
										font-size: 10px;
										font-family: Arial;
										font-weight: 400;
										color: #ACBCC9;
										line-height: 33px;
									}
								}
							}

							.dividend-pool {
								.dividend-pool-item {
									padding: 14px 6px;
									display: flex;
									flex-direction: row;
									align-items: center;
									justify-content: space-between;
									border-bottom: 1px solid #1F262E;

									&:last-child {
										border: none;
									}

									.dividend-pool-label {
										font-size: 10px;
										font-family: Arial;
										font-weight: bold;
										color: #9AB8DB;
									}

									.dividend-pool-value {
										font-size: 10px;
										font-family: Arial;
										font-weight: bold;
										color: #FFFFFF;
									}
								}
							}

						}

						.form-attr-setting {
							padding: 16px 13px;

							.form-attr-set {
								cursor: pointer;
								height: 26px;
								line-height: 26px;
								background: linear-gradient(-16deg, #848D98, #97A8A7);
								border-radius: 4px;
								font-size: 12px;
								font-family: Source Han Sans CN;
								font-weight: bold;
								color: #ACBCC9;
								padding: 0 17px;

								&:first-child {
									margin-bottom: 10px;
								}

								&:hover {
									color: #00F9E5;
								}
							}
						}
					}
				}
			}

			.form-add {
				.form-fee-count {
					font-size: 13px;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #ACBCC9;
					margin-top: 48px;
					margin-bottom: 22px;
				}

				.btn-container {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;

					.common-btn2 {
						margin-right: 59px;

						&:last-child {
							margin-right: 0;
						}
					}
				}
			}

			.form-edit {
				margin-top: 178px;
			}
		}

	}
</style>