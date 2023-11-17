<template>
  <div>
    <el-dialog custom-class="check-in-dialog" top="0vh" :show-close="false" :visible.sync="show" width="789px">
      <img style="width: 789px;height: 800px;" src="@/assets/images/news/gift-bg.png" />
      <div class="content">
        <div class="title">Daily Check-in Gift</div>
        <img style="width: 244px;height: 256px;" src="@/assets/images/news/gift-icon.png" />
        <el-button @click="handleCheckIn()" class="common-btn2">Get it</el-button>
      </div>
    </el-dialog>
    <CheckRewardDialog ref="rewardDialog" :amount="rewardAmount" />
  </div>
</template>

<script>
import CheckRewardDialog from './CheckRewardDialog'
export default {
  name: 'check-in-dialog',
  data() {
    return {
      show: false,
      rewardAmount: undefined,
    }
  },
  components: {
    CheckRewardDialog,
  },
  methods: {
    showDialog() {
      this.show = true
    },
    /** 点击签到 */
    handleCheckIn() {
      var loadingInstance = this.$loading({
        background: 'rgba(0, 0, 0, 0.8)',
      })
      this.$store
        .dispatch('CheckInDaily')
        .then((r) => {
          this.$toast.success(this.$t('common.check_in_success'))
          this.$emit('onCheckedIn')
          this.rewardAmount = r.data.amount
          this.$refs['rewardDialog'].showDialog()
          this.show = false
        })
        .catch((e) => {
          console.log(e)
          this.$toast.error(this.$t('common.check_in_failed'))
        })
        .finally(() => {
          loadingInstance.close()
        })
    },
  },
}
</script>

<style lang="scss">
.check-in-dialog {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.el-dialog {
    background: transparent;
    border: none;
  }

  .content {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 789px;
    .title {
      margin-top: 150px;
      font-size: 30px;
      font-family: Arial;
      font-weight: bold;
      color: #ffffff;

      background: linear-gradient(
        0deg,
        #4195f6 0%,
        #00f9e5 48.2421875%,
        #14e7a9 83.3251953125%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 120px;
    }
    .common-btn2 {
      margin-top: 69px;
      width: 188px;
      height: 50px;
      background: linear-gradient(-16deg, #4195f6, #c469e1);
      border-radius: 25px;
      font-size: 18px;
      font-family: Arial;
      font-weight: bold;
      color: #ffffff;
    }
  }
}
</style>
