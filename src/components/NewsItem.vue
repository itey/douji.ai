<template>
	<div class="news-container">
		<img style="width: 100%;height:193px;" />
		<div class="label text-color">
			dgsdgshgdgjsg'sgdsadgshgdsdd fddhsjhj shdgsdgshgdgj dgsdgshgdgjsg'sgdsadgshgdsdd fddhsjhj shdgsdgshgdgj
			sg'sgdsadgshg dsddfddhsjhjsh
		</div>
		<div class="bottom">
			<div class="transform text-sub-color">
				by Victor Deaw
			</div>
			<div class="star text-sub-color">
				September 21,2023
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'NewsItem',
		props: {
			item: {
				type: Object,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news-container {
		cursor: pointer;

		.label {
			height: 66px;
			font-size: 14px;
			line-height: 22px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			text-align: left;
			margin: 20px 15px 0 15px;
			word-wrap: break-word;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 3;
		}

		.bottom {
			padding: 15px 15px 17px 15px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			.value {
				font-size: 14px;
				line-height: 14px;
				font-family: Source Han Sans CN;
				font-weight: bold;
			}

			.transform {
				font-size: 14px;
				line-height: 14px;
				font-family: Source Han Sans CN;
				font-weight: 400;
			}

			.star {
				font-size: 14px;
				line-height: 14px;
				font-family: Source Han Sans CN;
				font-weight: 400;
			}
		}
	}
</style>