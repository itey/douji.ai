<template>
	<div class="navigation-container">
		<div class="banner">
			<img style="width: 1209px;height: 94px;" />
		</div>
		<el-breadcrumb style="margin-top: 38px;" separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
			<el-breadcrumb-item>Navigation</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="text-color title">
			AIGC Navigation
		</div>
		<div class="content">
			<div class="list">
				<div v-for="(item,index) in list" :key="index" class="item">
					<navigation-item></navigation-item>
				</div>
			</div>
			<el-pagination style="width:100%;margin: 20px 0;" background layout="pager,next" next-text="下一页"
				:pager-count="4" :total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import NavigationItem from '@/components/NavigationItem'
	export default {
		name: 'navigation-view',
		components: {
			NavigationItem
		},
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
	.navigation-container {
		.banner {
			margin-top: 22px;
			display: flex;
			justify-content: center;
		}

		.title {
			font-size: 36px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			line-height: 36px;
			text-align: left;
			margin: 38px 0;
		}

		.content {
			flex: 1;

			.list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.item {
					width: calc((100% - 172px) / 4);
					min-width: 240px;
					margin: 0 24px 30px 0;

					&:nth-child(4n) {
						margin-right: 0;
					}
				}
			}
		}
	}
</style>