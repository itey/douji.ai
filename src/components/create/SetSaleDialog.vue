<template>
	<div>
		<el-dialog v-model="show" width="30%">
			<div>
				<div class="label">
					Allows licensed tokens to be purchased at discounted prices for NFTs
				</div>
				<el-switch></el-switch>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'set-sale-dialog',
		data(){
			return {
				show:false
			}
		},
		methods: {
			showDialog(){
				console.log('showDialog--')
				this.show = true
			}
		}
	}
</script>

<style>
</style>