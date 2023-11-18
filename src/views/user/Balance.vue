<template>
  <div class="container">
    <div class="balance">
      <div class="text-big text-color">Balances</div>
      <div class="balance-address-container">
        <img style="width: 16px; height: 16px;" src="@/assets/images/user/user.png" />
        <div class="balance-address">{{ $store.state.user.account | omitAddress }}</div>
        <img style="width: 14px; height: 14px;" src="@/assets/images/user/copy.png" />
      </div>
    </div>
    <div class="balance-value">
      <div class="item">
        <div class="value text-color" :style="{ fontSize: fontSize + 'px' }">{{ $store.state.chain.balanceMbd | decimalPlace4 }}</div>
        <div class="sub-value text-sub-color">≈${{ $store.state.chain.balanceMbd * $store.state.chain.mbdPrice || '0.0000' }}</div>
        <div class="unit text-color">MBD</div>
      </div>
      <div class="item">
        <div class="value text-color">0.0000</div>
        <div class="sub-value text-sub-color">≈$0.00</div>
        <div class="unit text-color">MS</div>
      </div>
      <div class="item">
        <div class="value text-color">{{ bjxBalance }}</div>
        <div class="sub-value text-color">&nbsp;</div>
        <div class="unit text-color">BJX NFT</div>
      </div>
      <div class="item">
        <div class="value text-color">0</div>
        <div class="sub-value text-color">&nbsp;</div>
        <div class="unit text-color">DJPlanate</div>
      </div>
    </div>
    <div class="divider"></div>
    <template v-if="false">
      <div class="text-middle text-color">Distributes income to be settled</div>
      <div class="settle-container">
        <div class="unit text-color">MBD</div>
        <div class="value text-color">0.0000</div>
        <div class="sub-value text-sub-color">≈$0.0000</div>
      </div>
      <div class="settle-button">
        <el-button class="common-btn1" type="primary">Settlement</el-button>
      </div>
    </template>
    <div class="divider"></div>
    <div class="text-middle text-color">NFT Stake income settlement</div>
    <!-- <div class="settle-container">
      <div class="unit text-color">MBD</div>
      <div class="value text-color">68415.5684</div>
      <div class="sub-value text-sub-color">≈$27.57</div>
    </div>-->
    <div class="settle-button">
      <el-button @click="$refs['incomeDialog'].showDialog()" class="common-btn1" type="primary">Go Settlement</el-button>
    </div>
    <div class="divider"></div>
    <div class="text-middle text-color">Platform rewards to be settled</div>
    <div class="settle-containers">
      <div class="settle-container">
        <div class="unit text-color">MBD</div>
        <div class="value text-color">0.0000</div>
        <div class="sub-value text-sub-color">≈$0.00</div>
      </div>
      <div class="settle-container" style="margin-left: 32px;">
        <div class="unit text-color">BJXStar NFT</div>
        <div class="value text-color">0</div>
        <div class="sub-value text-sub-color">≈$0.00</div>
      </div>
    </div>
    <div class="settle-button">
      <el-button class="common-btn1" type="primary">Settlement</el-button>
    </div>
    <div class="text-color settle-label">
      Settlement Fee: 5000 MBD Number of fee-free times:
      <span style="color: #47D1AF;">3</span>
    </div>
    <income-dialog ref="incomeDialog"></income-dialog>
  </div>
</template>

<script>
import IncomeDialog from '@/components/user/IncomeDialog'
import { getBjxBalanceOf } from '@/utils/web3/open'
export default {
  name: 'balance-view',
  components: {
    IncomeDialog,
  },
  computed: {
    userAccount() {
      return this.$store.state.user.account
    },
    fontSize() {
      if (!this.$store.state.chain.balanceMbd) {
        return 24
      }
      const r = this.$store.state.chain.balanceMbd.toString()
      const fs = (r.length * 1.1).toFixed()
      return fs > 24 ? 24 : fs
    },
  },
  data() {
    return {
      bjxBalance: 0,
    }
  },
  mounted() {
    this.getBjxBalance()
  },
  methods: {
    async getBjxBalance() {
      this.bjxBalance = await getBjxBalanceOf(this.userAccount)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .text-big {
    font-size: 32px;
    line-height: 32px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    margin-bottom: auto;
  }

  .text-middle {
    font-size: 24px;
    line-height: 24px;
    font-family: Arial;
    font-weight: bold;
    color: #ffffff;
  }

  .balance {
    display: flex;
    align-items: flex-end;
    margin-top: 44px;

    .balance-address-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 24px;
      background: #232a32;
      border-radius: 5px;
      padding: 0 9px;
      cursor: pointer;
      margin-left: 21px;

      .balance-address {
        font-size: 14px;
        font-family: Arial;
        font-weight: bold;
        color: #99b1c4;
        padding: 0 10px 0 7px;
      }
    }
  }

  .balance-value {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 34px;

    .item {
      min-width: 150px;
      border: 1px solid #28313c;
      border-radius: 8px;
      padding: 28px 27px 31px 27px;
      flex: 1;
      margin-right: 33px;
      text-align: left;

      &:last-child {
        margin-right: 0;
      }

      .value {
        line-height: 24px;
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
      }

      .sub-value {
        line-height: 40px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #a9b7c3;
      }

      .unit {
        line-height: 16px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #00f9e5;
      }
    }
  }

  .divider {
    height: 1px;
    background: #1e252d;
    margin-top: 37px;
  }

  .settle-containers {
    display: flex;
    flex-direction: row;
  }

  .settle-container {
    padding: 32px 31px 38px 31px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 416px;
    background: #212932;
    border-radius: 8px;
    margin-top: 39px;

    .unit {
      line-height: 16px;
      font-size: 16px;
      font-family: Arial;
      font-weight: bold;
      color: #87a2b7;
    }

    .value {
      line-height: 24px;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      margin-top: 20px;
    }

    .sub-value {
      line-height: 14px;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      margin-top: 38px;
    }
  }

  .settle-button {
    display: flex;
    flex-direction: row;
    align-items: left;
    margin-top: 24px;
  }

  .settle-label {
    line-height: 12px;
    font-size: 12px;
    font-family: Arial;
    font-weight: 400;
    color: #ffffff;
    margin: 12px 0 44px 0;
  }
  .common-btn1 {
    height: auto;
  }
}
</style>
