<template>
	<el-row class="footer-container" type="flex" justify="space-between">
		<el-col :span="8">
			<div>
				<p>AIGC & Web3 Digital Content Creator Economlc Ecology</p>
				<p>Copyright @ 2023 ALL Rights Roserved.</p>
			</div>
		</el-col>
		<el-col :span="4">
			<div>
				<p class="title">Video</p>
				<el-menu>
					<el-menu-item>About</el-menu-item>
					<el-menu-item>Contact</el-menu-item>
					<el-menu-item>Advertise</el-menu-item>
					<el-menu-item>Creator Editiorral Policics</el-menu-item>
					<el-menu-item>Report content</el-menu-item>
					<el-menu-item>Freelance contribtors</el-menu-item>
				</el-menu>
			</div>
		</el-col>
		<el-col :span="4">
			<div>
				<p class="title">Legal</p>
				<el-menu>
					<el-menu-item>About</el-menu-item>
					<el-menu-item>Contact</el-menu-item>
					<el-menu-item>Advertise</el-menu-item>
					<el-menu-item>Creator Editiorral Policics</el-menu-item>
					<el-menu-item>Report content</el-menu-item>
					<el-menu-item>Freelance contribtors</el-menu-item>
				</el-menu>
			</div>
		</el-col>
		<el-col :span="4">
			<div>
				<p class="title">About us</p>
				<el-menu>
					<el-menu-item>About</el-menu-item>
					<el-menu-item>Contact</el-menu-item>
					<el-menu-item>Advertise</el-menu-item>
					<el-menu-item>Creator Editiorral Policics</el-menu-item>
					<el-menu-item>Report content</el-menu-item>
					<el-menu-item>Freelance contribtors</el-menu-item>
				</el-menu>
			</div>
		</el-col>
		<el-col :span="4">
			<div>
				<p class="title">Follow us</p>
			</div>
		</el-col>
	</el-row>
</template>


<script>
	export default {
		name: 'nav-footer',
		components: {},

		methods: {

		},
	}
</script>

<style lang="scss" scoped>
	.footer-container{
		.title{
			height: 17px;
			font-size: 20px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: #FFFFFF;
			line-height: 32px;
		}
	}
	.el-menu-item{
		
	}
</style>