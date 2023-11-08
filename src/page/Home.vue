<template>
	<div class="home-container">
		<div class="top-container">
			<div class="news-img-container">
				<img style="width: 934px;height: 526px;" />
				<div class="news-text">
					<div class="title">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
					</div>
					<div class="bottom">
						<div class="text-sub-color">
							by <span class="text-primary-color text-color">Victor Deaw</span>
						</div>
						<div class="text-sub-color">
							September 21,2023
						</div>
					</div>
				</div>
			</div>
			<div class="news-tab-container">
				<el-tabs v-model="activeName" :stretch="true">
					<el-tab-pane label="Hot News" name="news">
						<div class="news-list">
							<news-tab-item v-for="(item,index) in 10" :key="index"></news-tab-item>
						</div>
					</el-tab-pane>
					<el-tab-pane label="Featured" name="feature">
						<div class="news-list">
							<news-tab-item v-for="(item,index) in 10" :key="index"></news-tab-item>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
		<div class="info-container">
			<div class="left">
				<div class="item">
					<div class="label">Creator</div>
					<div class="value">238,820</div>
				</div>
				<div class="item">
					<div class="label">User</div>
					<div class="value">238,820</div>
				</div>
				<div class="item">
					<div class="label">Navigation Items</div>
					<div class="value">238,820</div>
				</div>
			</div>
			<div class="nft-info-container">
				<div class="nft-column">
					<div class="title">
						ALL NFTs
					</div>
					<div class="value-container">
						<span class="value">437,238,820</span>
						<img src="@/assets/images/home/up.png" style="width: 6px;height: 4px;" />
						<span class="rate">+2.85%</span>
					</div>
					<div class="attr-container">
						<div class="attr-item">
							<div class="label">Market Cap</div>
							<div>
								<span class="value">$10,468,280</span>
								<img src="@/assets/images/home/up.png" style="width: 6px;height: 4px;" />
								<span class="rate">+2.85%</span>
							</div>
						</div>
						<div class="attr-item">
							<div class="label">NFT Volume</div>
							<div>
								<span class="value">$10,468,280</span>
								<img src="@/assets/images/home/up.png" style="width: 6px;height: 4px;" />
								<span class="rate">+2.85%</span>
							</div>
						</div>
						<div class="attr-item">
							<div class="label">Transfers</div>
							<div>
								<span class="value">$10,468,280</span>
								<img src="@/assets/images/home/up.png" style="width: 6px;height: 4px;" />
								<span class="rate">+2.85%</span>
							</div>
						</div>
						<div class="attr-item">
							<div class="label">Weekly Active Users</div>
							<div>
								<span class="value">$10,468,280</span>
								<img src="@/assets/images/home/up.png" style="width: 6px;height: 4px;" />
								<span class="rate">+2.85%</span>
							</div>
						</div>
					</div>
				</div>
				<div class="nft-column">
					<div class="title">
						MBD Price
					</div>
					<div class="value-container">
						<span class="value">
							$0.00011887
						</span>
						<img src="@/assets/images/home/up.png" style="width: 6px;height: 4px;" />
						<span class="rate">
							+0.25%
						</span>
					</div>
					<div class="attr-container">
						<div class="attr-item">
							<div class="label">MBD Circulation</div>
							<div>
								<span class="value">10,468,280</span>
								<img src="@/assets/images/home/up.png" style="width: 6px;height: 4px;" />
								<span class="rate">+2.85%</span>
							</div>
						</div>
						<div class="attr-item">
							<div class="label">24h NFT Volume</div>
							<div>
								<span class="value">$10,468,280</span>
								<img src="@/assets/images/home/up.png" style="width: 6px;height: 4px;" />
								<span class="rate">+2.85%</span>
							</div>
						</div>
						<div class="attr-item">
							<div class="label">24h Transfers</div>
							<div>
								<span class="value">1468,280</span>
								<img src="@/assets/images/home/up.png" style="width: 6px;height: 4px;" />
								<span class="rate">+2.85%</span>
							</div>
						</div>
						<div class="attr-item">
							<div class="label">24hNFTs</div>
							<div>
								<span class="value">8,280</span>
								<img src="@/assets/images/home/up.png" style="width: 6px;height: 4px;" />
								<span class="rate">+2.85%</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="latest-news-container">
			<div class="title">Latest News</div>
			<div class="list-container">
				<news-item class="item" v-for="(item,index) in 8" :key="index"></news-item>
			</div>
		</div>
		<div style="margin-top: 43px;">
			<img style="width: 653px;height: 71px;" />
		</div>
		<div class="news-list-container">
			<div class="news-item-container">
				<div class="top">
					<div class="title text-color">AI News</div>
					<div class="more">
						<span>Read more</span>
						<img style="width: 12px;height: 12px;" src="@/assets/images/home/more.png" />
					</div>
				</div>
				<div class="news-item-list-container">
					<news-item class="item" v-for="(item,index) in 4" :key="index"></news-item>
				</div>
			</div>
			<div class="news-item-container">
				<div class="top">
					<div class="title text-color">Web3 News</div>
					<div class="more">
						<span>Read more</span>
						<img style="width: 12px;height: 12px;" src="@/assets/images/home/more.png" />
					</div>
				</div>
				<div class="news-item-list-container">
					<news-item class="item" v-for="(item,index) in 4" :key="index"></news-item>
				</div>
			</div>
			<div class="news-item-container">
				<div class="top">
					<div class="title text-color">Crypto News</div>
					<div class="more">
						<span>Read more</span>
						<img style="width: 12px;height: 12px;" src="@/assets/images/home/more.png" />
					</div>
				</div>
				<div class="news-item-list-container">
					<news-item class="item" v-for="(item,index) in 4" :key="index"></news-item>
				</div>
			</div>
			<div class="news-item-container">
				<div class="top">
					<div class="title text-color">Metaverse News</div>
					<div class="more">
						<span>Read more</span>
						<img style="width: 12px;height: 12px;" src="@/assets/images/home/more.png" />
					</div>
				</div>
				<div class="news-item-list-container">
					<news-item class="item" v-for="(item,index) in 4" :key="index"></news-item>
				</div>
			</div>
		</div>
		<div style="margin-top: 48px;">
			<img style="width: 653px;height: 71px;" />
		</div>
		<div class="nft-list-container">
			<div class="top">
				<div class="title text-color">Featured Prompts NFT</div>
				<div class="more">
					<span>Read more</span>
					<img style="width: 12px;height: 12px;" src="@/assets/images/home/more.png" />
				</div>
			</div>
			<div class="list-container">
				<product-item class="item" v-for="(item,index) in 8" :key="index"></product-item>
			</div>
		</div>
		<div class="nft-list-container">
			<div class="top">
				<div class="title text-color">Featured Digital Arts NFT</div>
				<div class="more">
					<span>Read more</span>
					<img style="width: 12px;height: 12px;" src="@/assets/images/home/more.png" />
				</div>
			</div>
			<div class="list-container">
				<nft-item :style="{
					background: '#1A2027',
					border: '1px solid #2C3638',
					borderRadius: '6px',
				}" class="item" height="140px" v-for="(item,index) in 8" :key="index"></nft-item>
			</div>
		</div>
		<div style="margin-top: 46px;">
			<img style="width: 653px;height: 71px;" />
		</div>
		<div class="activity-container">
			<div class="top">Activity</div>
			<div class="title text-color">
				BJXStar NFT early bird pre-sale activity is in progress
			</div>
			<div class="text-sub-color">
				What is the value of BJXStar NFT?
			</div>
			<div class="activity-info">
				<img style="width: 224px;height:224px;margin-top: 35px;" src="@/assets/images/home/activity-info.png" />
				<div class="info">
					<div style="margin-left: 177px;">
						<div class="title">
							BJXStar NFT
						</div>
						<div class="label">
							BJXStar NFT
						</div>
						<div class="value text-color">
							157 / 5,000,000 sold
						</div>
						<div class="label">
							BJXStar NFT
						</div>
						<div class="value text-color">
							3.00 USDT
						</div>
						<div class="label">
							PRICE
						</div>
						<el-input class="input" placeholder=""></el-input>
					</div>
					<div class="text-sub-color tip">
						After the early bird event ends, the price of Mint will retum to the normal selling price of
						<span class="text-color">10 USDT</span>
					</div>
					<div style="margin-left: 127px;margin-top: 11px;">
						<el-button class="common-btn2">Buy</el-button>
					</div>
				</div>
			</div>
		</div>
		<div class="comparison-container">
			<div class="comparison-top">
				<div class="top">Comparison</div>
				<div class="title text-color">
					What is DOUJI.AI？
				</div>
				<div class="tip text-sub-color">
					DOUJI.AI is an AIGC&Web3 digital content creator economic ecosystem that reshapes digital content
					production
					and distribution methods and revenuedistribution rules for global content creators. With the support
					of
					artificial intelligence and blockchain technology, it makes content creation casier and more
					collaborative.
					Creation is more convenient, content copyright transactions are safer and faster, and profts are
					more
					lasting.
				</div>
			</div>
			<comparison-table></comparison-table>
			<comparison-tab></comparison-tab>
		</div>
		<div class="video-container">
			<div class="top">Video</div>
			<div class="title text-color">How to Use？</div>
			<video style="width: 1440px;height: 674px;"></video>
		</div>
	</div>
</template>

<script>
	import NewsTabItem from '@/components/home/NewsTabItem'
	import ProductItem from '@/components/ProductItem'
	import NewsItem from '@/components/NewsItem'
	import NftItem from '@/components/NftItem'
	import ComparisonTab from '@/components/home/ComparisonTab'
	import ComparisonTable from '@/components/home/ComparisonTable'
	export default {
		name: 'home-view',
		components: {
			NewsTabItem,
			ProductItem,
			NewsItem,
			NftItem,
			ComparisonTab,
			ComparisonTable
		},
		data() {
			return {
				activeName: 'news',

			}
		},
	}
</script>
<style lang="scss" scoped>
	.home-container {
		.top-container {
			margin-top: 16px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			.news-img-container {
				position: relative;

				.news-text {
					position: absolute;
					bottom: 30px;
					left: 34px;
					right: 38px;

					.title {
						font-size: 28px;
						font-family: Microsoft YaHei;
						font-weight: bold;
						color: #FFFFFF;
						line-height: 36px;
						text-align: left;
					}

					.bottom {
						margin-top: 11px;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.text-sub-color {
							font-size: 12px;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #B2B9B9;
							line-height: 12px;
						}
					}
				}
			}
			.news-tab-container {
				padding: 0 35px;
				background: #212932;
				border-radius: 8px;
				flex: 1;
				height: 526px;
				margin-left: 11px;

				.news-list {
					height: 478px;
					overflow: auto;
				}

				.news-list::-webkit-scrollbar {
					width: 0;
					background-color: transparent;
				}
			}
		}

		.info-container {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			margin-top: 70px;

			.left {
				height: 408px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.item {
					width: 380px;
					padding: 23px 33px 19px 33px;
					text-align: left;
					background: #1A2027;
					border: 1px solid #2C3638;
					border-radius: 8px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.label {
						font-size: 16px;
						line-height: 13px;
						font-family: Arial;
						font-weight: bold;
						color: #BAD2D0;
					}

					.value {
						font-size: 34px;
						line-height: 34px;
						font-family: Source Han Sans CN;
						font-weight: 800;
						color: #FFFFFF;
						margin-top: 30px;
					}
				}
			}

			.nft-info-container {
				height: 408px;
				margin-left: 28px;
				flex: 1;
				text-align: left;
				display: flex;
				flex-direction: row;
				background: #1A2027;
				border: 1px solid #2C3638;
				border-radius: 8px;

				.nft-column {
					display: flex;
					flex-direction: column;
					width: 50%;
					padding: 35px 32px;

					.title {
						font-size: 16px;
						line-height: 12px;
						font-family: Arial;
						font-weight: bold;
						color: #BAD2D0;
					}

					.value-container {
						display: flex;
						flex-direction: row;
						align-items: baseline;
						margin-top: 30px;
						margin-bottom: 8px;

						.value {
							font-size: 34px;
							line-height: 34px;
							font-family: Source Han Sans CN;
							font-weight: 800;
							color: #FFFFFF;
							margin-right: 15px;
						}

						.rate {
							font-size: 12px;
							line-height: 12px;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #B2B9B9;
							margin-left: 4px;
						}
					}

					.attr-container {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						flex: 1;
						margin-top: 36px;

						.attr-item {
							display: flex;
							flex-direction: row;
							justify-content: space-between;

							.label {
								font-size: 16px;
								font-family: Arial;
								font-weight: bold;
								color: #BAD2D0;
							}

							.value {
								font-size: 16px;
								font-family: Arial;
								font-weight: bold;
								color: #FFFFFF;
								margin-right: 13px;
							}

							.rate {
								font-size: 9px;
								font-family: Arial;
								font-weight: 400;
								color: #B2B9B9;
								margin-left: 4px;
							}
						}

					}
				}
			}
		}

		.latest-news-container {
			.title {
				font-size: 26px;
				font-family: Source Han Sans CN;
				font-weight: 800;
				color: #FFFFFF;
				text-align: left;
				margin: 90px 0 30px 0;
			}

			.list-container {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.item {
					width: 342px;
					margin: 0 24px 24px 0;

					&:nth-child(4n) {
						margin-right: 0;
					}
				}
			}
		}

		.news-list-container {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-top: 29px;
			margin-bottom: 39px;

			.news-item-container {
				width: 705px;
				background: #1A2027;
				border: 1px solid #2C3638;
				border-radius: 8px;
				margin-bottom: 28px;

				&:nth-child(2n) {
					margin-right: 0;
				}

				.top {
					margin: 33px 27px 23px 33px;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					.title {
						font-size: 22px;
						line-height: 22px;
						font-family: Source Han Sans CN;
						font-weight: 800;
					}

					.more {
						font-size: 14px;
						font-family: Arial;
						font-weight: bold;
						color: #00F9E5;
						line-height: 14px;
						display: flex;
						flex-direction: row;
						align-items: center;

						img {
							margin-left: 11px;
						}
					}
				}

				.news-item-list-container {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					padding: 26px;

					.item {
						width: 312px;

						&:nth-child(2n) {
							margin-right: 0;
						}
					}
				}
			}
		}

		.nft-list-container {

			.top {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.title {
					font-size: 26px;
					font-family: Source Han Sans CN;
					font-weight: 800;
					color: #FFFFFF;
					text-align: left;
					margin: 31px 0 40px 0;
				}

				.more {
					font-size: 16px;
					font-family: Arial;
					font-weight: bold;
					color: #00F9E5;
					line-height: 16px;
					display: flex;
					flex-direction: row;
					align-items: center;

					img {
						margin-left: 11px;
					}
				}
			}

			.list-container {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.item {
					width: 342px;
					margin: 0 24px 24px 0;

					&:nth-child(4n) {
						margin-right: 0;
					}
				}
			}
		}

		.activity-container {
			margin-top: 98px;

			.top {
				font-size: 26px;
				line-height: 26px;
				font-family: Source Han Sans CN;
				font-weight: 800;
				color: #00F9E5;
			}

			.title {
				font-size: 48px;
				line-height: 48px;
				font-family: Source Han Sans CN;
				font-weight: 800;
				margin-top: 23px;
				margin-bottom: 27px;
			}

			.tip {
				font-size: 20px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				line-height: 17px;
			}

			.activity-info {
				background: #1A2027;
				border: 1px solid #2C3638;
				border-radius: 6px;
				padding: 58px 0 69px 274px;
				margin-top: 60px;
				display: flex;
				flex-direction: row;
				justify-content: left;

				.info {
					text-align: left;

					.title {
						font-size: 24px;
						line-height: 24px;
						font-family: Arial;
						font-weight: bold;
						color: #8DAED5;
					}

					.label {
						font-size: 14px;
						line-height: 14px;
						font-family: Arial;
						font-weight: bold;
						color: #809DBE;
						margin-top: 27px;

						&:first {
							margin-top: 60px;
						}
					}

					.value {
						font-size: 30px;
						line-height: 30px;
						font-family: Arial;
						font-weight: bold;
						color: #FFFFFF;
						margin-top: 15px;
					}

					.input {
						width: 300px;
						height: 50px;
						font-size: 18px;
						line-height: 50px;
						font-family: Arial;
						font-weight: bold;
						color: #FFFFFF;
						background: #0E161D;
						border: 1px solid #313838;
						border-radius: 8px;
						margin-top: 16px;
					}

					.tip {
						margin-left: 13px;
						font-size: 12px;
						margin-top: 63px;
					}
				}
			}
		}

		.comparison-container {

			.comparison-top {
				.top {
					margin-top: 179px;
					font-size: 26px;
					font-family: Source Han Sans CN;
					font-weight: 800;
					color: #00F9E5;
				}

				.title {
					margin-top: 29px;
					font-size: 48px;
					font-family: Source Han Sans CN;
					font-weight: 800;
				}

				.tip {
					margin: 21px 106px 58px 128px;
					font-size: 20px;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #A1B5C6;
					line-height: 29px;
				}
			}

		}

		.video-container {

			.top {
				margin-top: 164px;
				font-size: 26px;
				font-family: Source Han Sans CN;
				font-weight: 800;
				color: #00F9E5;
			}

			.title {
				margin-top: 37px;
				font-size: 48px;
				font-family: Source Han Sans CN;
				font-weight: 800;
			}
		}
	}
</style>