<template>
	<el-dialog custom-class="check-in-dialog" :show-close="false" :visible.sync="show" width="789px">
		<img style="width: 789px;height: 800px;" src="@/assets/images/news/gift-bg.png" />
		<div class="content">
			<div class="title">Daily Check-in Gift</div>
			<img style="width: 244px;height: 256px;" src="@/assets/images/news/gift-icon.png" />
			<el-button class="common-btn2" @click="show = false">Get it</el-button>
		</div>
	</el-dialog>
</template>

<script>
	export default {
		name: 'check-in-dialog',
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
	.check-in-dialog {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		&.el-dialog {
			background: transparent;
			border: none;
		}

		.content {
			position: absolute;
			top: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 789px;
			.title {
				margin-top: 150px;
				font-size: 30px;
				font-family: Arial;
				font-weight: bold;
				color: #FFFFFF;
				
				background: linear-gradient(0deg, #4195F6 0%, #00F9E5 48.2421875%, #14E7A9 83.3251953125%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				margin-bottom: 120px;
			}
			.common-btn2{
				margin-top: 69px;
				width: 188px;
				height: 50px;
				background: linear-gradient(-16deg, #4195F6, #C469E1);
				border-radius: 25px;
				font-size: 18px;
				font-family: Arial;
				font-weight: bold;
				color: #FFFFFF;
			}
		}
	}
</style>