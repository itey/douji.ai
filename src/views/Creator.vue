<template>
	<div class="create-container">
		<div class="create-label">Create</div>
		<div class="create-title">Create Your Conent DOUJI NFT Collection</div>
		<div class="type-container">
			<div class="type-item">
				<img style="width: 72px;height: 67px;" src="@/assets/images/create/article.png" />
				<div class="article">Article</div>
			</div>
			<div class="type-item">
				<img style="width: 77px;height: 68px;" src="@/assets/images/create/prompt.png" />
				<div class="prompt">Prompt</div>
			</div>
			<div class="type-item">
				<img style="width: 67px;height: 72px;" src="@/assets/images/create/art.png" />
				<div class="art">Digital Art</div>
			</div>
		</div>
		<div class="tip">
			The rest will be available soon
		</div>
		<div class="question">
			How to Create
		</div>
	</div>
</template>

<script>
	export default {
		name: 'creator-view',
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
	.create-container {
		display: flex;
		flex-direction: column;

		.create-label {
			font-size: 14px;
			font-family: Arial;
			font-weight: bold;
			color: #00F9E5;
			margin-top: 47px;
		}

		.create-title {
			margin-top: 19px;
			font-size: 26px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: #FFFFFF;
		}

		.type-container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 68px;

			.type-item {
				width: 245px;
				height: 179px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				background: #1A2027;
				border: 1px solid #2C3638;
				border-radius: 4px;
			}

			.article {
				margin-top: 25px;
				font-size: 16px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #FFFFFF;
				background: linear-gradient(-73deg, #00ABF1 0%, #01EEFF 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			.prompt {
				margin-top: 24px;
				font-size: 16px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #FFFFFF;
				background: linear-gradient(-73deg, #3874FC 0%, #8A8DFF 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			.art {
				margin-top: 22px;
				font-size: 16px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #FFFFFF;
				background: linear-gradient(-73deg, #00D487 0%, #00DAFD 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}

		.tip {
			font-size: 8px;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: #99B5C4;
			margin-top: 40px;
		}

		.question {
			font-size: 9px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: #FFFFFF;
			margin: 15px;
		}
	}
</style>