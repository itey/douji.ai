<template>
	<div class="comparison-content">
		<el-table class="comparison-table" :header-row-class-name="'table-header'" :row-class-name="'table-row'"
			row-class-name="table-row" :data="tableData" border style="width: 1396px">
			<el-table-column prop="column0" label="Feature" width="296px">
			</el-table-column>
			<el-table-column prop="column1" label="Web2 Creator economic platform" width="374px">
			</el-table-column>
			<el-table-column prop="column2" label="Regular Web3 creator economic platform" width="380px">
			</el-table-column>
			<el-table-column prop="column3" label="DOUJI.AI" width="338px">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: 'comparison-tab',
		data() {
			return {
				tableData: [{
					column0: 'Creation Threshold',
					column1: 'Low',
					column2: 'Higher',
					column3: 'Low',
				}, {
					column0: 'Content Data Ownership',
					column1: 'None',
					column2: 'Owned',
					column3: 'Owned',
				}, {
					column0: 'User Data Ownership',
					column1: 'None',
					column2: 'none',
					column3: 'Owned and Customizable',
				}, {
					column0: 'Revenue Distribution Rights',
					column1: 'None,Depend on platform distribution',
					column2: 'None,Depend on platform distribution',
					column3: 'Owned, Planned and Controlled',
				}, {
					column0: 'Revenue Model',
					column1: 'Mainly Advertising Sponsorship',
					column2: 'limited',
					column3: 'Diversified Revenue Models',
				}, {
					column0: 'Content Co-Creation',
					column1: 'Uncontrollable',
					column2: 'None',
					column3: 'Owned and Customizable',
				}, {
					column0: 'Content Value Sharing',
					column1: 'None',
					column2: 'None',
					column3: 'Owned and Customizable',
				}, {
					column0: 'DAO Govemance',
					column1: 'None',
					column2: 'None',
					column3: 'Owned',
				}]
			}
		},
	}
</script>

<style lang="scss">
	.comparison-content {
		padding: 24px 23px 21px 21px;
		background: #1A2027;
		border: 1px solid #2C3638;
		border-radius: 8px;
	}

	.el-table {
		background-color: transparent;
	}

	.el-table th.el-table__cell {
		background-color: #1A2027;
	}

	.el-table tr {
		background-color: #1A2027;
	}

	.el-table .el-table__cell {
		height: 62px;
		font-size: 16px;
		font-family: Arial;
		font-weight: bold;
		color: #FFFFFF;
		padding: 0 0;
		text-align: center;
	}
	.el-table .table-header .el-table__cell {
		height: 45px;
	}

	.el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell {
		background-color: transparent;
	}

	.el-table--border,
	.el-table--group {
		border: 1px solid #1F262E;
	}

	.el-table td.el-table__cell,
	.el-table th.el-table__cell.is-leaf {
		border-right: 1px solid #1F262E;
		border-bottom: 1px solid #1F262E;
	}

	.el-table th.el-table__cell.is-leaf {
		border-right: 0px solid #1F262E;
	}

	.el-table--scrollable-x .el-table__body-wrapper {
		overflow-x: initial;
	}

	.el-table--border::after,
	.el-table--group::after,
	.el-table::before {
		background-color: transparent;
	}

	.el-table th.el-table__cell:first-child {
		background: #5ba0fb;
		border-top-left-radius: 8px;
	}

	.el-table th.el-table__cell:nth-child(2n) {
		background: #7191F3;
	}

	.el-table th.el-table__cell:nth-child(3n) {
		background: #6E69D0;
	}

	.el-table th.el-table__cell:nth-child(4n) {
		background: #1DDBDB;
		border-top-right-radius: 8px;
	}

	.el-table td.el-table__cell:nth-child(2n) {
		color: #8799A9;
	}

	.el-table td.el-table__cell:nth-child(3n) {
		color: #8799A9;
	}

	.el-table td.el-table__cell:nth-child(4n) {
		color: #00F9E5;
	}
</style>