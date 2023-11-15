<template>
  <div class="reward-container">
    <div class="reward-top-title">Reading Reward</div>
    <div class="reward-value text-color" style="margin-top: 31px;">00:23:46</div>
    <div class="reward-tip">Total reading time today</div>
    <div class="reward-value text-color" style="margin-top: 58px;">01/12</div>
    <div class="reward-tip">Receive blind box mission today</div>
    <div class="reward-mbd">
      <div class="reward-mbd-value">100 MBD</div>
      <div class="reward-mbd-transform">≈$626 57</div>
    </div>
    <div class="reward-tip">Receive blind box mission today</div>
    <el-button class="common-btn2" style="width: 338px;margin: 31px 0 48px 0;">Settlement</el-button>
  </div>
</template>

<script>
export default {
  name: 'reading-reward',
  data() {
    return {
      nftContract: process.env.VUE_APP_NFT,
    }
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
      font-size: 36px;
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
