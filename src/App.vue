<template>
	<el-container id="app" class="theme-container">
		<el-header style="height: auto;">
			<div class="app-content">
				<NavBar />
			</div>
		</el-header>
			<div class="banner">
				<img style="width: 653px;height: 71px;" />
			</div>
		<el-container>
			<el-main>
				<div class="app-content">
					<router-view />
				</div>
			</el-main>
			<el-footer style="height: auto;">
				<div class="app-content">
					<NavFooter />
				</div>
			</el-footer>
		</el-container>
	</el-container>
</template>
<script>
	import NavBar from '@/components/NavBar'
	import NavFooter from '@/components/NavFooter'
	export default {
		components: {
			NavBar,
			NavFooter,
		},
	}
</script>
<style lang="scss" scoped>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;

		.el-header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: #1a2027;
			border-bottom: 1px solid #29383f;
		}

	.banner {
		margin-top: 16px;
		display: flex;
		justify-content: center;
	}
		// height: 100vh;
		.el-main {
			padding: 0 0;
			overflow-x: hidden;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.el-footer {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.app-content {
			width: 100%;
			max-width: 1037px;
		}

	}
</style>