<template>
	<el-dialog custom-class="blind-dialog" :visible.sync="show" @close="handleClose" width="789px">
		<div class="title" slot="title">Open Blind Box</div>
		<img style="width: 789px;height: 800px;" src="@/assets/images/news/gift-bg.png" />
		<div class="content">
			<div class="time-container">
				<img style="width: 38px;height: 38px;" src="@/assets/images/news/blind-date.png" />
				<div class="time">{{ countdown }}</div>
			</div>
			<img style="width: 388px;height: 347px;" src="@/assets/images/news/blind-box-icon.png" />
			<el-button :disabled="countdown<=0" @click="handleReceiveBox()" class="btn">Receive</el-button>
		</div>
	</el-dialog>
</template>

<script>
	import {
		setBlindBoxFlagCache
	} from '@/utils/common'
	import {
		getBlindBox
	} from '@/utils/http'
	import {
		getBlindBoxSign
	} from '@/utils/web3/chain'
	export default {
		name: 'blind-dialog',
		data() {
			return {
				show: false,
				countdown: 60,
				timer: undefined,
			}
		},
		mounted() {
			this.countdownTime()
		},
		destroyed() {
			if (this.timer) {
				clearInterval(this.timer)
			}
		},
		methods: {
			/** 打开盲盒 */
			handleReceiveBox() {
				getBlindBoxSign().then((signed) => {
					var loadingInstance = this.$loading({
						background: 'rgba(0, 0, 0, 0.8)',
					})
					getBlindBox(signed, this.boxFlag.flag, this.tokenId)
						.then((r) => {
							if (r.code == 1) {
								const openFlag = r.data.open_box_flag
							} else {
								console.log(r.message)
								this.$toast.error(this.$t('news-detail.get_blind_box_failed'))
							}
						})
						.catch((e) => {
							console.log(e)
							this.$toast.error(this.$t('news-detail.get_blind_box_failed'))
						})
						.finally(() => {
							loadingInstance.close()
						})
				})
			},
			showDialog() {
				this.show = true
			},
			countdownTime() {
				this.timer = setInterval(() => {
					if (this.boxFlag && this.boxFlag.time) {
						const time = Number(this.boxFlag.time) + 60000
						const now = new Date().getTime()
						this.countdown = Math.floor((time - now) / 1000)
						if (this.countdown < 0) {
							this.countdown = 0
							setBlindBoxFlagCache(
								this.$store.state.user.userId,
								this.boxFlag.flag,
								true
							)
							this.show = false
						}
					} else {
						this.countdown = 0
						this.show = false
					}
				}, 1000)
			},
			/** 用户关闭 */
			handleClose() {
				var flag = JSON.parse(JSON.stringify(this.boxFlag))
				setBlindBoxFlagCache(this.$store.state.user.userId, flag.flag, true)
			},
		},
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
			color: #ffffff;

			background: linear-gradient(0deg,
					#4195f6 0%,
					#00f9e5 48.2421875%,
					#14e7a9 83.3251953125%);
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
				color: #ffffff;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				margin-bottom: 46px;

				.time {
					margin-left: 14px;
				}
			}

			.btn {
				width: 188px;
				height: 50px;
				background: linear-gradient(0deg, #4195f6, #d0677d);
				border-radius: 25px;
				margin-top: 35px;
				cursor: pointer;
				color: #FFFFFF;
			}
		}
	}
</style>