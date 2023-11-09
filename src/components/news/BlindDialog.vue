<template>
	<el-dialog custom-class="blind-dialog" :visible.sync="show" width="789px">
		<div class="title" slot="title">Open Blind Box</div>
		<img style="width: 789px;height: 800px;" src="@/assets/images/news/gift-bg.png" />
		<div class="content">
			<div class="time-container">
				<img style="width: 38px;height: 38px;" src="@/assets/images/news/blind-date.png" />
				<div class="time">59</div>
			</div>
			<img style="width: 388px;height: 347px;" src="@/assets/images/news/blind-box-icon.png" />
			<el-button class="btn">Open</el-button>
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
	.blind-dialog {
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

		.el-dialog__header {
			position: absolute;
			top: 76px;
			width: 789px;
			z-index: 10;
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
			padding-top: 158px;

			.time-container {
				width: 266px;
				height: 68px;
				background: rgba(18, 19, 21, 0.5);
				border-radius: 34px;
				font-size: 48px;
				font-family: Arial;
				font-weight: bold;
				color: #FFFFFF;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				margin-bottom: 46px;

				.time {
					margin-left: 14px;
				}
			}
			.btn{
				width: 188px;
				height: 50px;
				background: linear-gradient(0deg, #4195F6, #D0677D);
				border-radius: 25px;
				margin-top: 35px;
			}
		}
	}
</style>