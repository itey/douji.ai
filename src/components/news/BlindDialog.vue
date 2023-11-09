<template>
	<el-dialog custom-class="blind-dialog" :visible.sync="show" width="789px">
		<div class="title" slot="title">Open Blind Box</div>
		<img style="width: 789px;height: 800px;" src="@/assets/images/news/gift-bg.png" />
		<div class="content">
			<div class="value-container">
				<img style="width: 38px;height: 38px;" src="@/assets/images/news/blind-date.png" />
			</div>
			<div class="tip">Your gift will be transferred to your pending settlement account</div>
			<img style="width: 102px;height: 102px;" src="@/assets/images/news/mbd-icon.png" />
			<div class="value">100 MBD</div>
		</div>
	</el-dialog>
</template>

<script>
	export default {
		name: 'blind-dialog',
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
	.congratulations-dialog {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;

		&.el-dialog {
			background: transparent;
			border: none;
		}
		.el-dialog__header{
			position: absolute;
			top: 76px;
			width: 789px;
			padding-top: 0;
			.el-dialog__headerbtn {
				top: 0;
			}
		}

		.title {
			font-size: 30px;
			font-family: Arial;
			font-weight: bold;
			color: #FFFFFF;

			background: linear-gradient(0deg, #4195F6 0%, #00F9E5 48.2421875%, #14E7A9 83.3251953125%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		.content {
			position: absolute;
			top: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 789px;


			.value-container {
				margin-top: 22px;
				background: rgba(18,19,21,0.5);
				border-radius: 34px;
			}
			.tip {
				font-size: 18px;
				font-family: Arial;
				font-weight: bold;
				color: #FFFFFF;
				margin: 226px 0 68px 0;
			}
		}
	}
</style>