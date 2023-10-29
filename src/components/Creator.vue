<template>
	<div class="creator-container">
		<div class="content-container">
			<div class="creator-img">
				<img style="width: 118px;height: 118px" />
			</div>
			<div class="creator-info">
				<div class="creator-info-top">
					<div class="user text-color">Balances</div>
					<div class="balance-address-container">
						<div class="balance-address">OxD98232ed4...5334347287</div>
						<img style="width: 14px; height: 14px;" src="@/assets/images/user/copy.png"></img>
					</div>
				</div>
				<div class="text-sub-color desc">
					I am a highly skilled and talented prompt engineerwith exceptional ability in creating prompts
					models such as chatgpt Bing, ancBard. My focus on quality and accuracy allows me to produce
					effective and engaging prompts that capture the user' s attention and enhancethe user experience. As
					an up-and-coming prompt engineer, I am committed to continually improving my skils and bringing
					value to the fheld.
				</div>
				<div class="subscription" v-if="subscription" @click="subscription = false">
					<img style="width: 9px;height: 9px;" src="@/assets/images/creator/add.png" />
					<span>Subscription</span>
				</div>
				<div class="subscription" v-else @click="subscription = true">
					<img style="width: 13px;height: 9px;" src="@/assets/images/creator/add.png" />
					<span>Subscription</span>
				</div>
				<div class="tag-container">
					<block v-for="(item,index) in tagList" :key="index">
						<div class="tag" :class="{
							light:item.light
						}">
							<img :src="require(`@/assets/images/creator/`+item.icon+(item.light?'light':'')+`.png`)" />
							<span>{{item.text}}</span>
						</div>
					</block>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'creator',
		data() {
			return {
				languageVisible: false,
				userMenuVisible: false,
			}
		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped>
	.creator-container {
		padding: 37px 0 32px 0;
		display: flex;
		align-items: center;
		justify-content: center;

		.content-container {
			width: 100%;
			max-width: 1037px;
			display: flex;
			flex-direction: row;

			.creator-img {
				width: 118px;
				height: 118px;
				background: #00F9E5;
				border: 3px solid #2C3642;
				border-radius: 14px;
			}

			.creator-info {}
		}

	}
</style>