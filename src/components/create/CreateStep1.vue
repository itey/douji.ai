<template>
	<div class="create-step1">
		<div class="title">
			Step 1 Set NFT Mint Infomation
		</div>
		<div class="form-container">
			<div class="label">
				Type
			</div>
			<div class="type-container">
				<div class="item" :class="{
					light:form.type=='article'
				}" @click="form.type = 'article'">
					<img style="width: 14px;height: 13px;"
						:src="require(`@/assets/images/create/type-article${form.type=='article'?'-light':''}.png`)" />
					<div>Article</div>
				</div>
				<div :class="{
					light:form.type=='prompt'
				}" class="item text-color" @click="form.type = 'prompt'">
					<img style="width: 14px;height: 13px;"
						:src="require(`@/assets/images/create/type-prompt${form.type=='prompt'?'-light':''}.png`)" />
					<div>Prompt</div>
				</div>
				<div :class="{
					light:form.type=='art'
				}" class="item" @click="form.type = 'art'">
					<img style="width: 14px;height: 13px;"
						:src="require(`@/assets/images/create/type-art${form.type=='art'?'-light':''}.png`)" />
					<div>Dgital Art</div>
				</div>
			</div>
			<div class="label">
				Category
			</div>
			<div class="category-container">
				<div class="item" :class="{
					light:item==form.category
				}" v-for="item in categoryList" :key="item" @click="form.category = item">
					{{item}}
				</div>
			</div>
			<div class="tip">
				Not allowed to chage after mint.
			</div>
			<div class="label">
				NFT Max Supply
			</div>
			<div class="input-container">
				<el-input class="input" placeholder="50000"></el-input>
			</div>
			<div class="tip">
				NFT Maximum Available Supply Quantity <span class="text-color">50,000</span>
			</div>
			<div class="label">
				NFT Initial Mint Quantity
			</div>
			<div class="input-container">
				<el-input class="input" placeholder="250"></el-input>
			</div>
			<div class="tip">
				Not allowed to chage after mint.NFT Maximum Initial Mint Quantity<span class="text-color">250</span>
			</div>
			<div class="label">
				NFT Initial Mint Price
			</div>
			<div class="input-container">
				<el-input class="input" placeholder="0"></el-input>
				<div class="unit">MBD</div>
			</div>
			<div class="tip">
				Allowed to chage after mint.Price set to 0,anyone can mint for free,access protected content.
			</div>
			<div class="btn-container">
				<el-button class="common-btn2" @click="backClick">Back</el-button>
				<el-button class="common-btn2" @click="saveClick">Save</el-button>
				<el-button class="common-btn2" @click="nextClick">Next</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'create-step1',
		data() {
			return {
				categoryList: ['AI', 'AIGC', 'ChatGPT', 'Metaverse', 'NFT', 'Web3', 'Fashion', 'Digital Art', 'BlockChain',
					'Crypto', 'Bitcoin', 'Ethereum'
				],
				form: {
					type: 'article',
					category: 'AI'
				}
			}
		},
		methods: {
			backClick() {
				this.$emit('backClick')
			},
			saveClick() {
				this.$emit('saveClick')
			},
			nextClick() {
				this.$emit('nextClick')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.create-step1 {
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
			padding: 15px 0 55px 97px;

			.label {
				text-align: left;
				margin-top: 40px;
				font-size: 13px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #9FAEC0;
				margin-bottom: 12px;
			}

			.type-container {
				display: flex;
				flex-direction: row;

				.item {
					width: 210px;
					height: 49px;
					background: #0E161D;
					border: 1px solid #313838;
					border-radius: 6px;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					margin-right: 14px;

					font-size: 13px;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #88A2B8;

					img {
						margin-right: 6px;
					}

					&.light {
						background: #18252F;
						border: 1px solid #2FC9BD;

						font-family: Arial;
						color: #00F9E5;
					}
				}
			}

			.category-container {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				.item {
					width: 131px;
					height: 27px;
					line-height: 27px;
					background: #0E161D;
					border: 1px solid #313838;
					border-radius: 4px;
					margin: 0 9px 10px 0;

					font-size: 10px;
					font-family: Arial;
					font-weight: bold;

					&.light {
						background: #18252F;
						border: 1px solid #2FC9BD;

						font-family: Arial;
						color: #00F9E5;
					}
				}
			}

			.tip {
				margin-top: 13px;
				font-size: 9px;
				font-family: Arial;
				font-weight: 400;
				color: #707D8C;
				text-align: left;
			}

			.input-container {
				display: flex;
				align-items: center;

				.input {
					width: 271px;
					font-size: 10px;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #FFFFFF;
					line-height: 25px;

					&:focus {
						background: #0E161D;
						border: 1px solid #00F9E5;
						border-radius: 6px;
					}
				}

				.unit {
					font-size: 13px;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #00F9E5;
					margin-left: 5px;
				}
			}

			.btn-container {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				margin-top: 73px;
				padding-right: 98px;
				.common-btn2{
					margin-right: 59px;
					&:last-child{
						margin-right: 0;
					}
				}
			}
		}
	}
</style>