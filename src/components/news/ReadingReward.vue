<template>
  <div class="reward-container" v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.3)">
    <div class="reward-top-title">Reading Reward</div>
    <div class="reward-value text-color" style="margin-top: 31px;">{{ readReward.duration_sum | readSecondsFormat }}</div>
    <div class="reward-tip">Total reading time today</div>
    <div class="reward-value text-color" style="margin-top: 58px;">{{readReward.reads_count | zeroPadding2}}/12</div>
    <div class="reward-tip">Receive blind box mission today</div>
    <div class="reward-mbd">
      <div class="reward-mbd-value">{{ readReward.income_sum | decimalPlace4 }} MBD</div>
      <div class="reward-mbd-transform">≈${{ (readReward.income_sum * $store.state.chain.mbdPrice) | decimalPlace8 }}</div>
    </div>
    <div class="reward-tip">Receive blind box mission today</div>
    <el-button class="common-btn2" style="width: 338px;margin: 31px 0 48px 0;">Settlement</el-button>
  </div>
</template>

<script>
import { getTodayReadData } from '@/utils/http'
export default {
  name: 'reading-reward',
  data() {
    return {
      loading: false,
      userId: this.$store.state.user.userId,
      timer: undefined,
      readReward: {
        income_sum: 0,
        duration_sum: 0,
        reads_count: 0,
      },
    }
  },
  mounted() {
    this.getTodayReadData()
    this.timer = setInterval(() => {
      this.getTodayReadData()
    }, 10000)
  },
  destroyed() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    async getTodayReadData() {
      if (!this.userId) {
        return
      }
      const res = await getTodayReadData()
      if (res.code == 1) {
        this.readReward = res.data
      } else {
        this.$toast.error(res.message)
      }
    },
  },
}
</script>

<style lang="scss">
.reward-container {
  border: 1px solid #17e7d6;
  border-radius: 8px;
  height: auto;
  text-align: center;

  .reward-top-title {
    height: 66px;
    line-height: 66px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background: linear-gradient(-16deg, #4195f6, #17e7d6);
    font-size: 18px;
    font-family: Arial;
    font-weight: bold;
    color: #1a2027;
    padding-left: 23px;
    text-align: left;
  }

  .reward-value {
    font-size: 36px;
    font-family: Arial;
    font-weight: bold;
  }

  .reward-tip {
    font-size: 14px;
    font-family: Arial;
    font-weight: 400;
    color: #88a2b8;
    margin-top: 16px;
  }

  .reward-mbd {
    margin-top: 53px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;

    .reward-mbd-value {
      font-size: 30px;
      font-family: Arial;
      font-weight: bold;
      color: #00f9e5;
    }

    .reward-mbd-transform {
      font-size: 14px;
      font-family: Arial;
      font-weight: 400;
      color: #88a2b8;
    }
  }
}
</style>
