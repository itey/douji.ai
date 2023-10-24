<template>
	<div class="navbar-container">
		<img style="width: 168px; height: 38px" src="@/assets/logo.png"></img>
		<div class="navbar-divider"></div>
		<div class="navbar-menu">
			<el-menu mode="horizontal" :router="true">
				<el-menu-item index="/">{{$t('common.home')}}</el-menu-item>
				<el-menu-item>{{$t('common.news')}}</el-menu-item>
				<el-menu-item>{{$t('common.navigation')}}</el-menu-item>
				<el-menu-item>{{$t('common.marketplace')}}</el-menu-item>
				<el-menu-item>{{$t('common.create')}}</el-menu-item>
			</el-menu>
		</div>
		<div v-if="!$store.state.user.logout">
			<el-button type="primary" @click="connectClick">Connect Wallet</el-button>
		</div>
		<div v-else class="user-container">
			<div class="wallet">
				<img class="icon" src="@/assets/images/user-wallet.png"></img>
				<div>25468.55 MBD</div>
				<div class="divider"></div>
				<div>68.8457 BNB</div>
			</div>
			<div @click="userMenuVisible = true">
				<el-popover placement="bottom-end" :visible-arrow="false" v-model="userMenuVisible">
					<div class="menu-container">
						<img @click="userMenuVisible = false" class="close" src="@/assets/images/menu-close.png"></img>
						<div class="item">
							<div class="icon">
								<img style="width: 23px; height: 23px;" src="@/assets/images/user-icon.png"></img>
							</div>
							<span>0xD98...72872</span>
						</div>
						<div class="item item-light" @click="menuClick('/usercenter')">
							<div class="icon">
								<img style="width: 17px; height: 16px;" src="@/assets/images/menu-user.png"></img>
							</div>
							<span>User Center</span>
						</div>
						<router-link to="/usercenter">About</router-link>
						<div class="item">
							<div class="icon">
								<img style="width: 17px; height: 13px;" src="@/assets/images/menu-wallet.png"></img>
							</div>
							<span>Wallet</span>
						</div>
						<div class="item">
							<div class="icon">
								<img style="width: 18px; height: 14px;" src="@/assets/images/menu-currency.png"></img>
							</div>
							<span>Buy Crypto Currency</span>
						</div>
						<div class="item">
							<div class="icon">
								<img style="width: 17px; height: 17px;" src="@/assets/images/menu-copy.png"></img>
							</div>
							<span>Copy Address</span>
						</div>
						<div class="item" @click="signOutClick">
							<div class="icon">
								<img style="width: 19px; height: 17px;" src="@/assets/images/menu-exit.png"></img>
							</div>
							<span>Sign Out</span>
						</div>
					</div>
					<div slot="reference" class="user">
						<img style="width: 23px; height: 23px;" src="@/assets/images/user-icon.png"></img>
						<span class="text">
							0xD98...72872<i class="el-icon-caret-bottom el-icon--right"></i>
						</span>
					</div>
				</el-popover>
			</div>
		</div>
		<div class="navbar-language" @click="languageVisible = true">
			<el-popover placement="bottom" width="110px" height="110px" :visible-arrow="false"
				v-model="languageVisible">
				<div class="language-select">
					<div @click="languageClick('en')" class="select"
						:class="$store.state.common.language=='en'?'select-light':''">
						English
					</div>
					<div @click="languageClick('zh_hant')" class="select"
						:class="$store.state.common.language=='zh_hant'?'select-light':''">
						繁體中文
					</div>
				</div>
				<img slot="reference" style="width: 22px; height: 22px;padding: 6px 6px;"
					src="@/assets/images/language.png"></img>
			</el-popover>
		</div>
		<div v-if="$store.state.common.theme=='light'" style="margin-right:20px;cursor: pointer;"
			@click="themeClick('dark')">
			<img style="width: 24px; height: 24px;" src="@/assets/images/theme-light.png"></img>
		</div>
		<div v-else style="margin-right:20px;cursor: pointer;" @click="themeClick('light')">
			<img style="width: 18px; height: 18px;padding: 3px 3px;" src="@/assets/images/theme-dark.png"></img>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'nav-bar',
		components: {},
		data() {
			return {
				languageVisible: false,
				userMenuVisible: false
			}
		},
		methods: {
			themeClick(theme) {
				this.$store.commit('SET_THEME', theme)
			},
			languageClick(locale) {
				this.languageVisible = false
				this.$i18n.locale = locale
				this.$store.commit('SET_LANGUAGE', locale)
			},
			connectClick() {
				this.$store.commit('setLogout', true)
			},
			menuClick(path){
				this.userMenuVisible = false
				if(!this.$route.path.includes(path)){
					this.$router.push(path)
				}
			},
			signOutClick() {
				this.$store.commit('setLogout', false)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.navbar-container {
		width: 100%;
		max-width: 1440px;
		display: flex;
		flex-direction: row;
		align-items: center;

		.navbar-divider {
			margin-left: 41px;
			margin-right: 15px;
			height: 20px;
			width: 1px;
			background: #FFFFFF;
		}

		.navbar-menu {
			flex: 1;
		}

		.navbar-language {
			width: 34px;
			height: 34px;
			background: #2A333E;
			border-radius: 7px;
			cursor: pointer;
			margin: 0 18px;
		}

		.user-container {
			display: flex;
			flex-direction: row;
			align-items: center;

			.wallet {
				display: flex;
				flex-direction: row;
				align-items: center;
				background: #212A35;
				border-radius: 19px;
				height: 38px;
				font-size: 14px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #90A9C6;
				padding: 0 19px;

				.icon {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 17px;
					height: 16px;
					margin-right: 11px;
				}

				.divider {
					width: 1px;
					height: 18px;
					background: #2C3846;
					margin: 0 11px;
				}
			}

			.user {
				font-size: 14px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-left: 18px;
				cursor: pointer;

				.text {
					margin: 0 13px 0 9px;
				}
			}
		}
	}


	.el-popover {
		.language-select {
			margin: 20px;

			.select {
				width: 90px;
				font-size: 14px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				text-align: center;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				justify-content: center;

				&:not(:last-child) {
					margin-bottom: 20px;
				}

				&.select-light {
					height: 43px;
					background: #3A4A5C;
					border-radius: 10px;
					color: #00FBE6;
					line-height: 43px;
				}

			}
		}

		.menu-container {
			position: relative;
			width: 329px;
			padding: 11px 0;

			.close {
				width: 12px;
				height: 12px;
				padding: 10px;
				position: absolute;
				top: 13px;
				right: 10px;
				cursor: pointer;
			}

			.item {
				display: flex;
				flex-direction: row;
				align-items: center;
				line-height: 43px;
				cursor: pointer;
				padding: 0 20px;

				.icon {
					width: 23px;
					height: 23px;
					margin-right: 10px;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				span {
					font-size: 14px;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #FFFFFF;
				}
			}

			.item-light {
				background: #3A4A5C;
			}
		}


	}
</style>