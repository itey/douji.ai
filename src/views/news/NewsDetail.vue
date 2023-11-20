<template>
  <div class="news-container">
    <el-breadcrumb style="margin-top: 27px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/news' }">News</el-breadcrumb-item>
      <el-breadcrumb-item v-if="metadata.title">{{ metadata.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <NftDaoVote
      v-if="tokenSupplyInfo.isVoting && !voteOverTime && userOwned > 0"
      @handleReload="dataLoad"
      :tokenOwner="tokenOwner"
      :tokenInfo="tokenSupplyInfo"
      :tokenId="tokenId"
    />
    <div class="form-container">
      <div class="form-top">
        <div class="form-left">
          <div class="form-title text-color">{{ metadata.title }}</div>
          <NftAuthorInfo v-if="tokenOwner" :tokenId="tokenId" :creator="tokenOwner" />
          <img style="width: 940px;height: 532px;margin-top:36px;" :src="metadata.image" />
          <div class="form-desc">{{ metadata.description }}</div>
          <div class="form-label-sub" style="margin-top: 16px;">
            <img style="width: 14px;height: 14px;" src="@/assets/images/create/website.png" />
            <div class="form-label-sub-text">Open to Access</div>
          </div>
          <div class="form-content text-color">
            <div class="md-reader" v-html="metadata.openContent"></div>
          </div>
          <template v-if="metadata.protected">
            <div class="form-label-sub">
              <img style="width: 14px;height: 14px;" src="@/assets/images/create/protect.png" />
              <div class="form-label-sub-text">Protected</div>
            </div>
            <div class="form-content text-color" v-if="metadata.protectedContent">
              <div class="md-reader" v-html="metadata.protectedContent"></div>
            </div>
            <div style="display: flex;flex-direction: column;align-items: center;" v-else>
              <div class="text-color" style="font-size: 14px;">
                Owning At Least 1 DOUJ NFT (
                <span style="color: #00F9E5;">Token ID: {{ tokenId }}</span>) And Clicking
                “
                <span style="color: #00F9E5;">Unlock</span>”
              </div>
              <el-button @click="handleUnlock()" class="common-btn2" style="border-radius: 25px;margin-top: 29px;">Unlock</el-button>
            </div>
          </template>

          <div class="form-tag" v-if="metadata.keyword && metadata.keyword.length">
            <div class="form-tag-label text-color">Tags:</div>
            <div class="form-tag-item text-color" v-for="(item,index) in metadata.keyword" :key="index">{{ item }}</div>
          </div>
          <div class="dao-container" v-if="userAccount && userOwned > 0">
            <div class="dao-title text-color">NFT DAO Governance</div>
            <div class="dao-set">
              <div class="dao-set-item" style="width: 158px;" @click="handleUpdate(1)">
                <div class="dao-set-item-label">Update NFT Attributes</div>
                <i class="el-icon-arrow-right"></i>
              </div>
              <div class="dao-set-item" style="width: 158px;" @click="handleUpdate(2)">
                <div class="dao-set-item-label">Update Content</div>
                <i class="el-icon-arrow-right"></i>
              </div>
              <div class="dao-set-item" style="width: 178px;" @click="handleUpdateSale()">
                <div class="dao-set-item-label">Set NFT Sales Promotion</div>
                <i class="el-icon-arrow-right"></i>
              </div>
              <div class="dao-set-item" style="width: 190px;" @click="handleUpdateDao()">
                <div class="dao-set-item-label">Set NFT DAO Governance</div>
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <div class="dao-set-tip">
              Last Edited : September 21, 2023, 22:18:07
              <span
                class="text-color"
                style="cursor: pointer;"
                @click="$refs['revisionHistoryDialog'].showDialog()"
              >View History</span>
            </div>
          </div>
          <div class="transactions-container">
            <div class="transactions-title text-color">
              <span>Latest Transactions</span>
              <!-- <span style="font-size: 16px;color: #ACBCC9;">(3)</span> -->
            </div>
            <div class="transactions-head">
              <div class="transactions-column">Transactions ID</div>
              <div class="transactions-column">From</div>
              <div class="transactions-column">To</div>
              <div class="transactions-column">Amount</div>
            </div>
            <template v-if="transactionHistory.length">
              <div class="transactions-item" v-for="(item,index) in transactionHistory" :key="index">
                <div class="transactions-column text-color">{{ item.hash | omitTxHash }}</div>
                <div class="transactions-column text-color">{{ item.from | omitAddress }}</div>
                <div class="transactions-column text-color">{{ item.to | omitAddress }}</div>
                <div class="transactions-column text-color">{{ item.amount }}</div>
              </div>
            </template>
            <div class="transactions-item" v-else>No transactions</div>
          </div>
          <div class="more-container">
            <div class="more-title text-color">More from this creator</div>
            <div class="more-list">
              <div v-for="(item,index) in 6" :key="index" class="more-item">
                <news-item></news-item>
              </div>
            </div>
          </div>
        </div>
        <div class="form-right">
          <NftAttributes :metadata="metadata" :tokensInfo="tokenSupplyInfo" />
          <NftPrimaryMarket @handleReload="dataLoad" :tokenId="tokenId" :metadata="metadata" :tokensInfo="tokenSupplyInfo" :userOwned="userOwned" />
          <MarketOrderList :tokenId="tokenId" />
          <NftDaoGovernance :userOwned="userOwned" :tokenId="tokenId" :operable="true" />
          <NftInformation :metadata="metadata" :tokenOwner="tokenOwner" :tokenId="tokenId" />
          <ReadingReward v-if="ifCheckedIn" />
        </div>
      </div>
    </div>

    <RevisionHistoryDialog :tokenId="tokenId" ref="revisionHistoryDialog" />
    <CheckInDialog @onCheckedIn="checkIn()" ref="checkInDialog" />
    <BlindDialog @handleReceive="handleReceiveBox" :tokenId="tokenId" :boxFlag="boxFlagInfo" ref="blindDialog" />
    <BlindOpenDialog @handleReload="dataLoad" :tokenId="tokenId" :blindBox="blindBox" ref="blindOpenDialog" />
    <SetSaleDialog @handleReload="dataLoad" :tokenInfo="tokenSupplyInfo" :tokenId="tokenId" ref="setSaleDialog" />
    <SetDaoDialog @handleReload="dataLoad" :tokenId="tokenId" ref="setDaoDialog" />
  </div>
</template>

<script>
import NewsItem from '@/components/NewsItem'
import SetDaoDialog from '@/components/create/SetDaoDialog'
import SetSaleDialog from '@/components/create/SetSaleDialog'
import BlindDialog from '@/components/news/BlindDialog'
import BlindOpenDialog from '@/components/news/BlindOpenDialog'
import CheckInDialog from '@/components/news/CheckInDialog'
import MarketOrderList from '@/components/news/MarketOrderList'
import NftAttributes from '@/components/news/NftAttributes'
import NftAuthorInfo from '@/components/news/NftAuthorInfo'
import NftDaoGovernance from '@/components/news/NftDaoGovernance'
import NftDaoVote from '@/components/news/NftDaoVote'
import NftInformation from '@/components/news/NftInformation'
import NftPrimaryMarket from '@/components/news/NftPrimaryMarket'
import ReadingReward from '@/components/news/ReadingReward'
import RevisionHistoryDialog from '@/components/news/RevisionHistoryDialog'
import {
  boxCount2Time,
  getBlindBoxCache,
  getBlindBoxFlagCache,
  getBoxCountToday,
  ifCheckInToday,
  setBlindBoxCache,
  setBlindBoxFlagCache,
} from '@/utils/common'
import {
  checkBlindBox,
  getNftTransactions,
  loadFromUrl,
  unlockContent,
} from '@/utils/http'
import { balanceOf } from '@/utils/web3/nft'
import { getTokenOwner, tokenURI, tokensData } from '@/utils/web3/open'
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
})
export default {
  name: 'news-detail-view',
  components: {
    NewsItem,
    RevisionHistoryDialog,
    CheckInDialog,
    BlindDialog,
    BlindOpenDialog,
    SetSaleDialog,
    SetDaoDialog,
    NftDaoVote,
    NftDaoGovernance,
    MarketOrderList,
    NftAuthorInfo,
    NftAttributes,
    NftPrimaryMarket,
    NftInformation,
    ReadingReward,
  },
  computed: {
    canUpdate() {
      if (
        this.userAccount &&
        this.tokenOwner.toLowerCase() == this.userAccount.toLowerCase()
      ) {
        return true
      }
      return false
    },
    voteOverTime() {
      if (!this.tokenSupplyInfo.isVoting) {
        return true
      }
      return (
        Number(this.tokenSupplyInfo.vote.startTime) +
          Number(this.voteKeepTime) <
        this.nowTime / 1000
      )
    },
    userAccount() {
      return this.$store.state.user.account
    },
  },
  watch: {
    '$store.state.user.userId': function (val, od) {
      if (val != od) {
        this.dataLoad()
        this.checkIn()
      }
    },
  },
  data() {
    return {
      nftContract: process.env.VUE_APP_NFT,
      voteKeepTime: process.env.VUE_APP_VOTE_TIME,
      nowTime: new Date().getTime(),
      tokenId: undefined,
      tokenOwner: undefined,
      tokenMetaUrl: undefined,
      metadata: {
        language: undefined,
        title: undefined,
        image: undefined,
        description: undefined,
        openContent: undefined,
        keyword: [],
        maxSupply: undefined,
        initialQuantity: undefined,
        protectedContent: undefined,
        contentType: undefined,
        category: undefined,
        prompt: undefined,
        Birthday: undefined,
        UpdateDay: undefined,
      },
      tokenSupplyInfo: {
        isVoting: false,
      },
      userOwned: undefined,
      ifCheckedIn: false,
      blindBoxToday: {},
      blindBoxTimerTask: undefined,
      blindBox: {},
      boxFlagInfo: {},
      transactionHistory: [],
      timeTask: undefined,
    }
  },
  created() {
    this.tokenId = this.$route.query.tokenId
    this.timeTask = setInterval(() => {
      this.nowTime = new Date().getTime()
    }, 1000)
  },
  mounted() {
    if (!this.tokenId) {
      return
    }
    var loadingInstance = this.$loading({
      background: 'rgba(0, 0, 0, 0.8)',
    })
    setTimeout(() => {
      this.dataLoad()
      this.checkIn()
      this.checkBlindBox()
      this.blindBoxTimerTask = setInterval(() => {
        this.checkBlindBox()
      }, 1000 * 20)
      loadingInstance.close()
    }, 4000)
  },
  destroyed() {
    if (this.blindBoxTimerTask) {
      clearInterval(this.blindBoxTimerTask)
    }
    if (this.timeTask) {
      clearInterval(this.timeTask)
    }
  },
  methods: {
    /** 检查每日签到 */
    checkIn() {
      if (!this.$store.state.user.userId) {
        this.ifCheckedIn = false
        return
      }
      if (ifCheckInToday(this.$store.state.user.userId)) {
        this.ifCheckedIn = true
        return
      }
      this.ifCheckedIn = false
      this.$refs.checkInDialog.showDialog()
    },
    /** 检查盲盒奖励 */
    checkBlindBox() {
      if (
        this.$store.state.user.userId &&
        ifCheckInToday(this.$store.state.user.userId)
      ) {
        var haveBox = false
        const blindBox = getBlindBoxCache(this.$store.state.user.userId)
        if (blindBox && blindBox.time) {
          const timeGet = Number(blindBox.time)
          const nowTime = new Date().getTime()
          if (nowTime - timeGet > 1000 * 120) {
            setBlindBoxCache(this.$store.state.user.userId, blindBox.box, true)
            haveBox = false
          } else if (!blindBox.invalid) {
            this.blindBox = blindBox
            haveBox = true
            this.$refs['blindOpenDialog'].showDialog()
            return
          }
        }
        var haveFlag = false
        if (!haveBox) {
          const flag = getBlindBoxFlagCache(this.$store.state.user.userId)
          if (flag && flag.time) {
            const timeGet = Number(flag.time)
            const nowTime = new Date().getTime()
            if (nowTime - timeGet > 1000 * 120) {
              setBlindBoxFlagCache(
                this.$store.state.user.userId,
                flag.flag,
                true
              )
              haveFlag = false
            } else if (!flag.invalid) {
              this.boxFlagInfo = flag
              haveFlag = true
              this.$refs['blindDialog'].showDialog()
            }
          }
        }
        if (!haveFlag) {
          checkBlindBox()
            .then((r) => {
              if (r.code == 1) {
                const boxFlag = r.data.get_box_flag
                if (boxFlag) {
                  const currentFlag = getBlindBoxFlagCache(
                    this.$store.state.user.userId
                  )
                  if (!currentFlag || currentFlag.flag != boxFlag) {
                    setBlindBoxFlagCache(
                      this.$store.state.user.userId,
                      boxFlag,
                      false
                    )
                    this.boxFlagInfo = getBlindBoxFlagCache(
                      this.$store.state.user.userId
                    )
                    this.$refs['blindDialog'].showDialog()
                  }
                }
              }
            })
            .catch((e) => {
              console.log(e)
            })
        }
      }
    },
    /** 获取当日盲盒数据 */
    getBlindBoxToday() {
      if (this.$store.state.user.userId) {
        this.blindBoxToday.boxCount = getBoxCountToday(
          this.$store.state.user.userId
        )
        this.blindBoxToday.readTime = boxCount2Time(this.blindBoxToday.boxCount)
      }
    },
    /** 点击接收盲盒 */
    handleReceiveBox() {
      this.blindBox = getBlindBoxCache(this.$store.state.user.userId)
      this.$refs['blindOpenDialog'].showDialog()
    },
    /** 加载数据 */
    async dataLoad() {
      var loadingInstance = this.$loading({
        background: 'rgba(0, 0, 0, 0.8)',
      })
      const promiseAll = Promise.all([
        this.getOwner(),
        this.loadSupplyInfo(),
        this.loadMetadata(),
        this.getUserOwned(),
        this.loadTransactionHistory(),
      ])
      try {
        await promiseAll
      } catch (error) {
        this.$toast.error(error)
      } finally {
        loadingInstance.close()
      }
    },
    /** 获取用户拥有数量 */
    getUserOwned() {
      if (!this.tokenId || !this.$store.state.user.userId) {
        return
      }
      return new Promise((resolve, reject) => {
        balanceOf(this.tokenId)
          .then((balance) => {
            this.userOwned = balance
            return resolve()
          })
          .catch((e) => {
            return reject(e)
          })
      })
    },
    /** 点击解锁 */
    handleUnlock() {
      this.$store.dispatch('CheckLogin', true).then((c) => {
        if (!c) {
          return
        }
        var loadingInstance = this.$loading({
          background: 'rgba(0, 0, 0, 0.8)',
        })
        if (this.userOwned && this.userOwned > 0) {
          this.loadProtectedContent(this.metadata.protected)
            .then((protectedContent) => {
              this.$set(
                this.metadata,
                'protectedContent',
                md.render(protectedContent)
              )
              this.$toast.success(this.$t('news-detail.unlock_success'))
              loadingInstance.close()
            })
            .catch((e) => {
              console.log(e)
              this.$toast.error(this.$t('news-detail.unlock_failed'))
              loadingInstance.close()
            })
        } else {
          this.$toast.info(this.$t('news-detail.have_no_nft'))
          loadingInstance.close()
        }
      })
    },
    /** 点击更新1 */
    handleUpdate(step) {
      this.$store.dispatch('CheckLogin', true).then((c) => {
        if (!c) {
          return
        }
        if (!this.canUpdate) {
          this.$toast.info(this.$t('news-detail.update_unable'))
          return
        }
        if (this.tokenSupplyInfo.isVoting && !this.voteOverTime) {
          this.$toast.info(this.$t('create.nft_voting'))
          return
        }
        this.$router.push({
          path: '/update',
          query: { tokenId: this.tokenId, step: step },
        })
      })
    },
    /** 点击更新销售策略 */
    handleUpdateSale() {
      this.$store.dispatch('CheckLogin', true).then((c) => {
        if (!c) {
          return
        }
        if (!this.canUpdate) {
          this.$toast.info(this.$t('news-detail.update_unable'))
          return
        }
        if (this.tokenSupplyInfo.isVoting && !this.voteOverTime) {
          this.$toast.info(this.$t('create.nft_voting'))
          return
        }
        this.$refs['setSaleDialog'].showDialog()
      })
    },
    /** 点击更新Dao策略 */
    handleUpdateDao() {
      this.$store.dispatch('CheckLogin', true).then((c) => {
        if (!c) {
          return
        }
        if (!this.canUpdate) {
          this.$toast.info(this.$t('news-detail.update_unable'))
          return
        }
        if (this.tokenSupplyInfo.isVoting && !this.voteOverTime) {
          this.$toast.info(this.$t('create.nft_voting'))
          return
        }
        this.$refs['setDaoDialog'].showDialog()
      })
    },
    /** 获取token拥有者 */
    getOwner() {
      return new Promise((resolve, reject) => {
        if (!this.tokenId) {
          return reject()
        }
        getTokenOwner(this.tokenId)
          .then((owner) => {
            this.tokenOwner = owner
            return resolve()
          })
          .catch(() => {
            return reject()
          })
      })
    },
    /** 加载数据 */
    loadSupplyInfo() {
      return new Promise((resolve, reject) => {
        if (!this.tokenId) {
          return reject()
        }
        tokensData(this.tokenId)
          .then((res) => {
            this.tokenSupplyInfo = res
            return resolve()
          })
          .catch((e) => {
            console.log(e)
            return reject(e)
          })
      })
    },
    /** 加载元数据 */
    loadMetadata() {
      return new Promise((resolve, reject) => {
        if (!this.tokenId) {
          return reject()
        }
        tokenURI(this.tokenId)
          .then((uri) => {
            this.tokenMetaUrl = uri
            loadFromUrl(this.tokenMetaUrl).then((r) => {
              if (r.status !== 200) {
                return reject(r.statusText)
              }
              this.metadata = r.data
              if (this.metadata.contentUrl) {
                this.loadOpenContent(this.metadata.contentUrl)
                  .then((openContent) => {
                    this.$set(
                      this.metadata,
                      'openContent',
                      md.render(openContent)
                    )
                    return resolve()
                  })
                  .catch((e) => {
                    return reject(e)
                  })
              }
            })
          })
          .catch(() => {
            return reject()
          })
      })
    },
    /** 加载公开数据 */
    loadOpenContent(url) {
      return new Promise((resolve, reject) => {
        loadFromUrl(url).then((res) => {
          if (res.status !== 200) {
            return reject(res.statusText)
          }
          return resolve(res.data)
        })
      })
    },
    /** 加载私有数据 */
    loadProtectedContent(data) {
      return new Promise((resolve, reject) => {
        unlockContent(data, this.tokenId).then((res) => {
          if (res.code != 1) {
            return reject(res.message)
          }
          const ipfsUrl = res.data.url
          loadFromUrl(ipfsUrl).then((r) => {
            if (r.status !== 200) {
              return reject(r.statusText)
            }
            return resolve(r.data)
          })
        })
      })
    },
    /** 加载交易历史数据 */
    loadTransactionHistory() {
      if (!this.tokenId) {
        return
      }
      return new Promise((resolve, reject) => {
        getNftTransactions(this.tokenId).then((res) => {
          if (res.code == 1) {
            this.transactionHistory = res.data.list
            return resolve()
          } else {
            return reject(res.message)
          }
        })
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.news-container {
  .banner {
    margin-top: 16px;
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 26px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    line-height: 26px;
    text-align: left;
    margin: 27px 0 40px 0;
  }

  .form-container {
    margin-top: 28px;
    background: #1a2027;
    border-radius: 6px;
    padding: 30px 20px;

    .form-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: left;

      .form-left {
        width: 940px;
        margin-right: 41px;

        .form-title {
          font-size: 23px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          line-height: 35px;
        }

        .form-desc {
          padding-left: 14px;
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
          line-height: 22px;
          border-left: 2px solid;
          border-image: linear-gradient(0deg, #50ced5, #46d1af) 1;
          margin-top: 32px;
        }

        .form-label-sub {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin: 40px 0 18px 0;

          .form-label-sub-text {
            font-size: 13px;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #00f9e5;
            margin-left: 8px;
          }
        }

        .form-content {
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          line-height: 22px;
          margin: 40px 0;

          img {
            max-width: 100%;
            height: auto;
          }
        }

        .form-tag {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 58px;

          .form-tag-label {
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: bold;
          }

          .form-tag-item {
            font-size: 14px;
            line-height: 17px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            height: 17px;
            background: #434d56;
            border-radius: 4px;
            padding: 0 9px;
            min-width: 36px;
            margin-left: 9px;
            text-align: center;
          }
        }

        .dao-container {
          background: #252d36;
          border-radius: 8px;
          margin-top: 42px;
          width: 940px;

          .dao-title {
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: bold;
            padding: 26px 0 16px 23px;
            border-bottom: 1px solid #2b353f;
          }

          .dao-set {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 22px 34px 16px 18px;

            .dao-set-item {
              cursor: pointer;
              height: 42px;
              padding: 0 20px 0 22px;
              background: #1d242b;
              border: 1px solid #313838;
              border-radius: 8px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;

              .dao-set-item-label {
                font-size: 14px;
                font-family: Arial;
                font-weight: 400;
                color: #9ab8db;
              }

              .el-icon-arrow-right {
                color: #9ab8db;
                font-size: 14px;
              }
            }
          }

          .dao-set-tip {
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #acbcc9;
            padding: 0 0 22px 24px;
          }
        }

        .transactions-container {
          .transactions-title {
            margin-top: 54px;
            display: flex;
            flex-direction: row;
            align-items: baseline;
            font-size: 24px;
            font-family: Arial;
            font-weight: bold;
          }
          .transactions-head .transactions-column {
            color: #9ab8db;
          }
          .transactions-head,
          .transactions-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .transactions-column {
              padding: 0 20px;
              text-align: left;
              font-size: 14px;
              font-family: Arial;
              font-weight: 400;

              &:last-child {
                text-align: right;
              }
            }
          }

          .transactions-head {
            height: 42px;
            line-height: 42px;
            background: #252d36;
            font-size: 14px;
            font-family: Arial;
            font-weight: 400;
            color: #acbcc9;
            margin-top: 54px;
          }

          .transactions-item {
            height: 46px;
            line-height: 46px;
            border-bottom: 1px solid 1F262E;
          }
        }

        .more-container {
          .more-title {
            font-size: 24px;
            font-family: Arial;
            font-weight: bold;
            margin-top: 53px;
          }

          .more-list {
            display: flex;
            flex-wrap: wrap;
            margin-top: 31px;

            .more-item {
              width: 295px;
              margin: 0 26px 29px 0;

              &:nth-child(3n) {
                margin-right: 0;
              }
            }
          }
        }
      }

      .form-right {
        width: 385px;
      }
    }

    .form-add {
      margin-top: 40px;

      .form-fee-count {
        font-size: 13px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #acbcc9;
        margin-top: 48px;
        margin-bottom: 22px;
      }

      .btn-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .common-btn2 {
          margin-right: 59px;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }

    .form-edit {
      margin-top: 178px;
    }
  }
}
</style>

<style>
.md-reader img {
  max-width: 100%;
  max-height: auto;
}

.md-reader a {
  color: #7ea4ea;
  text-decoration: none;
}
</style>
