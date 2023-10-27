<template>
  <div class="home-container">
	  <div class="flex-row">
		  <img style="width: 673px;height: 379px;"/>
		  <div style="width: 357px;height: 379px;">
			  
		  </div>
	  </div>
	  <div class="info-container flex-row">
		  <div class="left">
			  <div class="item">
				  <div class="label">Creator</div>
				  <div class="value">238,820</div>
			  </div>
			  <div class="item">
				  <div class="label">User</div>
				  <div class="value">238,820</div>
			  </div>
			  <div class="item">
				  <div class="label">Navigation Items</div>
				  <div class="value">238,820</div>
			  </div>
		  </div>
		  <div>
			  
		  </div>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'home-view',
}
</script>
<style lang="scss" scoped>
	.home-container{
		.flex-row{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
		.info-container{
			margin-top: 50px;
			.item{
				width: 346px;
				height: 86px;
				margin-bottom: 17px;
				padding: 17px 24px 14px 24px;
				text-align: left;
				background: #1A2027;
				border: 1px solid #2C3638;
				border-radius: 6px;
				&:last-child{
					margin-bottom: 0;
				}
				.label{
					font-size: 12px;
					font-family: Arial;
					font-weight: bold;
					color: #BAD2D0;
				}
				.value{
					font-size: 24px;
					font-family: Source Han Sans CN;
					font-weight: 800;
					color: #FFFFFF;
					margin-top: 22px;
				}
			}
		}
	}
</style>
