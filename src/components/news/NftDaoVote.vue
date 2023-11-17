<template>
  <div class="proposal-container">
    <div class="proposal-left">
      <div class="proposal-left-title text-color">NFT DAO Proposal</div>
      <div class="proposal-left-sub">
        <span class="text-color">{{ tokenOwner | omitAddress }}</span> has initiated a proposato modify the content and rules
        of this NFT at
        <span class="text-color">{{ tokenInfo.vote.startTime | stamp2Time}}</span>. Pleasereview the proposal
        before
        <span class="text-color">{{ (Number(tokenInfo.vote.startTime) + 259200).toString() | stamp2Time}}</span>. It expires. After that, the proposal
        will be invalidated.
      </div>
      <div class="proposal-left-link" @click="$refs['nftStakeDialog'].showDialog()">View the latest NFT infomation >></div>
    </div>
    <div class="proposal-right">
      <div class="proposal-right-title">{{tokenInfo.vote.count}}/{{ this.tokenInfo.maxSupply }}</div>
      <div class="proposal-right-sub">
        Threshold:
        <span class="text-color">{{ tokenInfo.mVoteCount }}</span>
      </div>
      <div class="proposal-right-btn">
        <el-button style="width: 118px;height: 42px;" class="common-btn2" @click="handleApprove()">Approve</el-button>
        <el-button style="margin-left: 24px;width: 118px;height: 42px;" class="common-btn2" :disabled="!canExecute" @click="handleExecute()">Execute</el-button>
      </div>
      <div class="proposal-right-tip" v-if="userAccount">
        Your Voting:
        <span class="text-color">{{ userVoteCount }}</span>
      </div>
    </div>
    <NftUpdateInfoDialog ref="nftStakeDialog" :tokenOwner="tokenOwner" :tokenId="tokenId" />
  </div>
</template>

<script>
import NftUpdateInfoDialog from '@/components/news/NftUpdateInfoDialog'
import { eventBus } from '@/utils/event-bus'
import {
  isAlreadyVote,
  setDaoRuleDao,
  setNspDao,
  setTokenPriceDao,
  setTokenURIDao,
  userPledgeCount,
  voteByBallot,
} from '@/utils/web3/nft'
export default {
  name: 'nft-dao-vote',
  props: {
    tokenId: {
      type: String,
      default: '',
    },
    tokenInfo: {
      type: Object,
      default: () => {
        return {
          vote: {},
        }
      },
    },
    tokenOwner: {
      type: String,
      default: '',
    },
    userOwned: {
      type: String,
      default: '',
    },
  },
  components: {
    NftUpdateInfoDialog,
  },
  computed: {
    canExecute() {
      if (
        this.userAccount &&
        this.tokenInfo.vote.count &&
        this.tokenInfo.vote.count > this.tokenInfo.mVoteCount
      ) {
        return true
      } else {
        return false
      }
    },
    userVoteCount() {
      if (this.userAccount) {
        if (this.userAccount.toLowerCase() === this.tokenOwner.toLowerCase()) {
          return (
            Number(this.tokenInfo.availableSupply) + Number(this.stakeCount)
          )
        } else {
          return this.stakeCount
        }
      } else {
        return 0
      }
    },
    userAccount() {
      return this.$store.state.user.account
    },
  },
  data() {
    return {
      stakeCount: 0,
    }
  },
  mounted() {
    this.getUserPledgeCount()
    eventBus.$on('refresh_stake_info', this.getUserPledgeCount)
  },
  destroyed() {
    eventBus.$off('refresh_stake_info')
  },
  methods: {
    /** 点击投票 */
    handleApprove() {
      this.$store.dispatch('CheckLogin', true).then((c) => {
        if (!c) {
          return
        }
        var loadingInstance = this.$loading({
          background: 'rgba(0, 0, 0, 0.8)',
        })
        isAlreadyVote(this.tokenInfo.vote.no)
          .then((r) => {
            if (r) {
              this.$toast.info(this.$t('news-detail.vote_already'))
              loadingInstance.close()
              return
            }
            voteByBallot(this.tokenId)
              .then((tx) => {
                console.log(tx)
                this.$toast.success(this.$t('news-detail.vote_success'))
              })
              .catch((e) => {
                this.$toast.error(e)
              })
              .finally(() => {
                loadingInstance.close()
                this.$emit('handleReload')
              })
          })
          .catch((e) => {
            this.$toast.error(e)
            loadingInstance.close()
          })
      })
    },
    /** 点击执行 */
    async handleExecute() {
      const c = await this.$store.dispatch('CheckLogin', true)
      if (!c) {
        return
      }
      var loadingInstance = this.$loading({
        background: 'rgba(0, 0, 0, 0.8)',
      })
      try {
        const voteType = this.tokenInfo.vote.voteType
        if (voteType == '0') {
          await setTokenURIDao(this.tokenId)
        }
        if (voteType == '1') {
          await setDaoRuleDao(this.tokenId)
        }
        if (voteType == '2') {
          await setTokenPriceDao(this.tokenId)
        }
        if (voteType == '3') {
          await setNspDao(this.tokenId)
        }
        this.$toast.success(this.$t('news-detail.execute_success'))
      } catch (error) {
        this.$toast.error(error)
      } finally {
        loadingInstance.close()
        this.$emit('handleReload')
        eventBus.$emit('refresh_stake_info')
      }
    },
    /** 获取我的质押数量 */
    getUserPledgeCount() {
      if (!this.userAccount) {
        return
      }
      userPledgeCount(this.tokenId).then((res) => {
        this.stakeCount = res[0]
      })
    },
  },
}
</script>

<style lang="scss">
.proposal-container {
  display: flex;
  flex-direction: row;
  background: #37434d;
  border: 1px solid #74939e;
  border-radius: 10px;
  margin-top: 29px;

  .proposal-left {
    text-align: left;
    margin-top: 30px;
    margin-left: 42px;
    margin-bottom: 34px;
    padding-left: 19px;
    border-left: 2px solid;
    border-image: linear-gradient(0deg, #50ced5, #46d1af) 1;

    .proposal-left-title {
      font-size: 24px;
      line-height: 24px;
      font-family: Arial;
      font-weight: bold;
    }

    .proposal-left-sub {
      margin-top: 32px;
      font-size: 14px;
      line-height: 17px;
      font-family: Arial;
      font-weight: bold;
      color: #acbcc9;
    }

    .proposal-left-link {
      margin-top: 17px;
      font-size: 12px;
      line-height: 12px;
      font-family: Arial;
      font-weight: bold;
      color: #4097f5;
      cursor: pointer;
    }
  }

  .proposal-right {
    padding: 43px 109px 22px 88px;

    .proposal-right-title {
      font-size: 30px;
      line-height: 23px;
      font-family: Arial;
      font-weight: bold;
      color: #ffffff;
    }

    .proposal-right-sub {
      margin-top: 11px;
      font-size: 12px;
      line-height: 10px;
      font-family: Arial;
      font-weight: 400;
      color: #acbcc9;
    }

    .proposal-right-btn {
      margin-top: 19px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .proposal-right-tip {
      margin-top: 8px;
      font-size: 12px;
      line-height: 10px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #acbcc9;
      text-align: left;
    }
  }
}
</style>
