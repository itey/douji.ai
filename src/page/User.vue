<template>
	<div class="user-container">
		<div class="wrapper">
			<div class="left">
				<el-menu :router="true">
					<el-menu-item index="/balance">
						<i class="el-icon-setting"></i>
						<span slot="title">Balance</span>
					</el-menu-item>
					<el-menu-item index="/nfts">
						<i class="el-icon-setting"></i>
						<span slot="title">NFTs</span>
					</el-menu-item>
					<el-menu-item index="/profile">
						<i class="el-icon-setting"></i>
						<span slot="title">Profile</span>
					</el-menu-item>
				</el-menu>
			</div>
			<div class="right">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'user-view',
	}
</script>
<style lang="scss" scoped>
	.user-container {
		margin: 0 auto;
		max-width: 1440px;
		display: flex;
		height: 100vh;
		padding: 33px 0 50px 0;

		.wrapper {
			display: flex;
			flex-direction: row;
			justify-content: center;
			flex: 1;

			.left {
				width: 246px;
				background: #1A2027;
				border-radius: 8px;
			}

			.right {
				margin-left: 33px;
				flex: 1;
				background: #1A2027;
				border-radius: 8px;
			}
		}
	}
</style>