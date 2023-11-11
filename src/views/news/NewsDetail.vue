<template>
  <div class="news-container">
    <el-breadcrumb style="margin-top: 27px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/news' }">News</el-breadcrumb-item>
      <el-breadcrumb-item v-if="metadata.title">{{ metadata.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="proposal-container" v-if="tokenSupplyInfo.isVoting">
      <div class="proposal-left">
        <div class="proposal-left-title text-color">NFT DAO Proposal</div>
        <div class="proposal-left-sub">
          <span class="text-color">0x87Fa...47485</span>has initiated a proposato modify the content and rules
          of this NFT at
          <span class="text-color">2023/03/22 17:20:18</span>. Pleasereview the proposal
          before
          <span class="text-color">2023/03/22 17:20:18</span>. It expires. After that, the proposal
          will be invalidated.
        </div>
        <div class="proposal-left-link" @click="$refs['nftStakeDialog'].showDialog()">View the latest NFT infomation >></div>
      </div>
      <div class="proposal-right">
        <div class="proposal-right-title">15680/50000</div>
        <div class="proposal-right-sub">
          Threshold:
          <span class="text-color">25000</span>
        </div>
        <div class="proposal-right-btn">
          <el-button @click="$refs['congratulationsDialog'].showDialog()" style="width: 118px;height: 42px;" class="common-btn2">Approve</el-button>
          <el-button style="margin-left: 24px;width: 118px;height: 42px;" class="common-btn2" :disabled="true">Execute</el-button>
        </div>
        <div class="proposal-right-tip">
          Your Voting:
          <span class="text-color">100</span>
        </div>
      </div>
    </div>
    <div class="form-container">
      <div class="form-top">
        <div class="form-left">
          <div class="form-title text-color">{{ metadata.title }}</div>
          <div class="info-container">
            <div class="author-container">
              <img style="width: 52px;height: 52px;border-radius: 26px;" />
              <div class="author-info">
                <div class="author-name">
                  by
                  <span style="color: #00F9E5;">Victor Deaw</span>
                </div>
                <div class="author-desc">This paragraph is the author'spersonal description</div>
              </div>
              <div class="subscription light" v-if="subscription" @click="subscription = false">
                <img style="width: 9px;height: 9px;" src="@/assets/images/news/add.png" />
                <span>Subscription</span>
              </div>
              <div class="subscription" v-else @click="subscription = true">
                <img style="width: 13px;height: 9px;" src="@/assets/images/news/true.png" />
                <span>Subscription</span>
              </div>
            </div>
            <div class="news-info">
              <div class="news-info-item">
                <div class="news-info-item-label">
                  <img src="@/assets/images/news/date.png" />
                  <span>6528 Min</span>
                </div>
                <div class="news-info-item-value">
                  <img src="@/assets/images/up.png" />
                  <span>6528 Min</span>
                </div>
              </div>
              <div class="news-info-item">
                <div class="news-info-item-label">
                  <img src="@/assets/images/news/like.png" />
                  <span>6528</span>
                </div>
                <div class="news-info-item-value">
                  <img src="@/assets/images/up.png" />
                  <span>6528</span>
                </div>
              </div>
              <div class="news-info-item">
                <div class="news-info-item-label">
                  <img src="@/assets/images/news/star.png" />
                  <span>6528</span>
                </div>
                <div class="news-info-item-value">
                  <img src="@/assets/images/up.png" />
                  <span>6528</span>
                </div>
              </div>
            </div>
          </div>
          <img style="width: 940px;height: 532px;margin-top:36px;" :src="metadata.image" />
          <div class="form-desc">{{ metadata.description }}</div>
          <div class="form-label-sub" style="margin-top: 16px;">
            <img style="width: 14px;height: 14px;" src="@/assets/images/create/website.png" />
            <div class="form-label-sub-text">Open to Access</div>
          </div>
          <div class="form-content text-color">
            <div v-html="metadata.openContent"></div>
          </div>
          <div class="form-label-sub">
            <img style="width: 14px;height: 14px;" src="@/assets/images/create/protect.png" />
            <div class="form-label-sub-text">Protected</div>
          </div>
          <div class="form-content text-color" v-if="metadata.protectedContent">
            <div v-html="metadata.protectedContent"></div>
          </div>
          <div style="display: flex;flex-direction: column;align-items: center;" v-else>
            <div class="text-color" style="font-size: 12px;">
              Owning At Least 1 DOUJ NFT (
              <span style="color: #00F9E5;">Token ID: {{ tokenId }}</span>) And Clicking
              “
              <span style="color: #00F9E5;">Unlock</span>”
            </div>
            <el-button @click="handleUnlock()" class="common-btn2" style="border-radius: 25px;margin-top: 29px;">Unlock</el-button>
          </div>
          <div class="form-tag" v-if="metadata.keyword && metadata.keyword.length">
            <div class="form-tag-label text-color">Tags:</div>
            <div class="form-tag-item text-color" v-for="(item,index) in metadata.keyword" :key="index">{{ item }}</div>
          </div>
          <div class="dao-container">
            <div class="dao-title text-color">NFT DAO Governance</div>
            <div class="dao-set">
              <div class="dao-set-item" style="width: 158px;" @click="$router.push( { path: '/update', query: {'tokenId': tokenId, 'step': 1}})">
                <div class="dao-set-item-label">Update NFT Attributes</div>
                <i class="el-icon-arrow-right"></i>
              </div>
              <div class="dao-set-item" style="width: 158px;" @click="$router.push( { path: '/update', query: {'tokenId': tokenId, 'step': 2}})">
                <div class="dao-set-item-label">Update Content</div>
                <i class="el-icon-arrow-right"></i>
              </div>
              <div class="dao-set-item" style="width: 178px;">
                <div class="dao-set-item-label">Set NFT Sales Promotion</div>
                <i class="el-icon-arrow-right"></i>
              </div>
              <div class="dao-set-item" style="width: 190px;">
                <div class="dao-set-item-label">Set NFT DAO Govemnance</div>
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
              <span>Transactions</span>
              <span style="font-size: 16px;color: #ACBCC9;">(3)</span>
            </div>
            <div class="transactions-head">
              <div class="transactions-column">Transactions ID</div>
              <div class="transactions-column">From</div>
              <div class="transactions-column">To</div>
              <div class="transactions-column">Amount</div>
            </div>
            <div class="transactions-item" v-for="(item,index) in 3">
              <div class="transactions-column text-color">0x78d8ksfa...4d7bw68745d</div>
              <div class="transactions-column text-color">0x78d8ksfa...4d7bw68745d</div>
              <div class="transactions-column text-color">0x78d8ksfa...4d7bw68745d</div>
              <div class="transactions-column text-color">12</div>
            </div>
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
          <div class="form-attr-container">
            <div class="form-attr-title text-color">DOUJI NFT Attributes</div>
            <div class="form-attr-list">
              <div class="form-attr-item">
                <div class="form-attr-label">Content Type</div>
                <div class="form-attr-value">{{ metadata.contentType }}</div>
              </div>
              <div class="form-attr-item">
                <div class="form-attr-label">Category</div>
                <div class="form-attr-value">{{ metadata.category }}</div>
              </div>
              <div class="form-attr-item" v-if="metadata.prompt && metadata.prompt.length">
                <div class="form-attr-label">Platform</div>
                <div class="form-attr-value">{{ metadata.prompt | arrayMax1 }}</div>
              </div>
              <div class="form-attr-item" v-if="metadata.language && metadata.language.length">
                <div class="form-attr-label">Language</div>
                <div class="form-attr-value">{{ metadata.language | arrayMax1 }}</div>
              </div>
              <div class="form-attr-item">
                <div class="form-attr-label">Max Supply</div>
                <div class="form-attr-value">{{ metadata.maxSupply | toLocalString}}</div>
              </div>
              <div class="form-attr-item">
                <div class="form-attr-label">Available Supply</div>
                <div class="form-attr-value">{{ metadata.availableSupply | toLocalString }}</div>
              </div>
              <div class="form-attr-item">
                <div class="form-attr-label">Initial Mint Quantity</div>
                <div class="form-attr-value">{{ metadata.initialQuantity | toLocalString }}</div>
              </div>
            </div>
          </div>
          <div class="form-attr-container">
            <div class="form-attr-title text-color">Primary Market</div>
            <div class="form-attr-market">
              <div class="form-attr-market-top">
                <div class="form-attr-available">
                  Available :
                  <span class="text-color">{{ metadata.availableSupply | toLocalString }}</span>
                </div>
                <div class="form-attr-available">
                  You owned :
                  <span class="text-color">{{ userOwned }}</span>
                </div>
              </div>
              <div class="form-attr-mbd">
                <div class="mbd-value text-color">{{ metadata.initialPrice | decimalPlace4 }} MBD</div>
                <div class="mbd-transform">≈${{ (metadata.initialPrice * $store.state.chain.mbdPrice) | decimalPlace8 }}</div>
              </div>
              <el-button @click="handleMint()" :disabled="metadata.availableSupply <= 0" class="common-btn2 form-attr-mint">Mint</el-button>
              <div class="form-attr-tip">
                Owning
                <span class="text-color">1 BJxStar</span> To Get
                <span class="text-color">20%</span>
                discount
              </div>
            </div>
          </div>
          <div class="form-attr-container">
            <div class="form-attr-title">
              <div class="text-color">Secondary Market</div>
              <div class="form-attr-action" @click="$refs['listYourItemDialog'].showDialog()">
                + List Your
                item
              </div>
            </div>
            <div class="form-second-market">
              <div class="second-market-column" style="width: 130px;">
                <div class="second-market-header" style="padding-left: 14px;">From</div>
                <div class="second-market-td" style="padding-left: 14px;" v-for="(item,index) in 3">0x7Fa...4745d</div>
              </div>
              <div class="second-market-column" style="text-align: right;width: 91px;">
                <div class="second-market-header">Price(MBD)</div>
                <div class="second-market-td" v-for="(item,index) in 3">2790.0</div>
              </div>
              <div class="second-market-column" style="text-align: right;width: 104px;">
                <div class="second-market-header" style="padding-right: 12px;">Available</div>
                <div class="second-market-td" style="padding-right: 12px;" v-for="(item,index) in 3">12</div>
              </div>
              <div class="second-market-column" style="width: 60px;">
                <div class="second-market-header"></div>
                <div class="second-market-td" style="font-size: 12px;" v-for="(item,index) in 3">
                  <div class="second-btn">
                    <span v-if="index==0" style="color: #00F9E5;">Buy</span>
                    <span v-else style="color: #92B5DE;">Cancel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-attr-container">
            <div class="form-attr-title text-color">DOUJI NFT DAO Governance</div>
            <div class="form-dao">
              <div class="dao-title text-color">NFT DAO Eamings</div>
              <div class="dao-sub">
                The NFT DAO members of this item will receive
                <span class="text-color">10%</span>
                forevery sale
              </div>
              <div class="dao-title text-color" style="margin-top: 26px;margin-bottom:3px">
                NFT DAO Income
                Distribution
              </div>
              <div class="dao-income-item">
                <div class="dao-income-label">Creators Earngings</div>
                <div class="dao-income-value text-color">80%</div>
              </div>
              <div class="dao-income-item">
                <div class="dao-income-label">NFT Stakers</div>
                <div class="dao-income-value text-color">80%</div>
              </div>
              <div class="dao-member dao-member-header">
                <div class="dao-member-left">Mermber</div>
                <div class="dao-member-right">Proportion of Revenue</div>
              </div>
              <div v-for="(item,index) in 2" class="dao-member dao-member-td">
                <div class="dao-member-left text-color">0x7Fa...4745d</div>
                <div class="dao-member-right">70%</div>
              </div>
              <div class="dao-title text-color" style="margin-top: 22px;">NFT DAO Govemance</div>
              <div class="dao-income-item" style="margin-top: 22px;">
                <div class="dao-income-label">Execution Threshold</div>
                <div class="dao-income-value text-color">80</div>
              </div>
              <div class="dao-title text-color" style="margin-top: 39px;">NFT Staker Bonus Dividend Pool</div>
              <div class="dividend-pool">
                <div class="dividend-pool-item">
                  <div class="dividend-pool-label">Balance</div>
                  <div class="dividend-pool-value text-color">{{ settlePoolBalance | toLocalString }} MBD</div>
                </div>
                <div class="dividend-pool-item">
                  <div class="dividend-pool-label">All members NFT Staked</div>
                  <div class="dividend-pool-value text-color">{{ totalStakeCount }}</div>
                </div>
                <div class="dividend-pool-item">
                  <div class="dividend-pool-label">You NFT Staked</div>
                  <div class="dividend-pool-value text-color" v-if="userStakeInfo && userStakeInfo[0]">{{ userStakeInfo[0] }} ({{ stakePercent }})</div>
                  <div class="dividend-pool-value text-color" v-else>0 (0.00%)</div>
                </div>
                <div class="dividend-pool-item">
                  <div class="dividend-pool-label">Retrieve BSC Block Number</div>
                  <div class="dividend-pool-value text-color">{{ userStakeInfo[1] }}</div>
                </div>
                <div class="dividend-pool-item">
                  <div class="dividend-pool-label">Current BSC Block Number</div>
                  <div class="dividend-pool-value text-color">{{ currentHeight }}</div>
                </div>
              </div>
              <div class="dao-btn-container">
                <div class="dao-btn" @click="$refs['stakeDialog'].showDialog()">Stake</div>
                <div class="dao-btn-border" @click="handleRetrieve()">Retrieve</div>
              </div>
            </div>
          </div>
          <div class="form-attr-container">
            <div class="form-attr-title text-color">DOUJI NFT Information</div>
            <div class="form-attr-list">
              <div class="form-attr-item">
                <div class="form-attr-label">Token Address</div>
                <div class="form-attr-value">{{ nftContract | omitAddress }}</div>
              </div>
              <div class="form-attr-item">
                <div class="form-attr-label">Token ID</div>
                <div class="form-attr-value">{{ tokenId }}</div>
              </div>
              <div class="form-attr-item">
                <div class="form-attr-label">Token Standard</div>
                <div class="form-attr-value">BEP-1155</div>
              </div>
              <div class="form-attr-item">
                <div class="form-attr-label">Creator</div>
                <div class="form-attr-value">English</div>
              </div>
              <div class="form-attr-item">
                <div class="form-attr-label">Created At</div>
                <div class="form-attr-value">2023/2/2 09:42:45</div>
              </div>
              <div class="form-attr-item">
                <div class="form-attr-label">Updated At</div>
                <div class="form-attr-value">2023/9/3 13:03:38</div>
              </div>
            </div>
          </div>
          <div class="reward-container" v-if="ifCheckedIn">
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
        </div>
      </div>
    </div>
    <list-your-item-dialog :tokenId="tokenId" :userOwned="userOwned" ref="listYourItemDialog"></list-your-item-dialog>
    <revision-history-dialog ref="revisionHistoryDialog"></revision-history-dialog>
    <stake-dialog :tokenId="tokenId" :userOwned="userOwned" ref="stakeDialog"></stake-dialog>
    <retrieve-dialog :tokenId="tokenId" :blockHeight="currentHeight" :userStakeInfo="userStakeInfo" ref="retrieveDialog"></retrieve-dialog>
    <nft-stake-dialog ref="nftStakeDialog"></nft-stake-dialog>
    <check-in-dialog @onCheckedIn="onCheckedIn()" ref="checkInDialog"></check-in-dialog>
    <congratulations-dialog ref="congratulationsDialog"></congratulations-dialog>
    <blind-dialog :tokenId="tokenId" :boxFlag="boxFlagInfo" ref="blindDialog"></blind-dialog>
  </div>
</template>

<script>
import NewsItem from '@/components/NewsItem'
import BlindDialog from '@/components/news/BlindDialog'
import CheckInDialog from '@/components/news/CheckInDialog'
import CongratulationsDialog from '@/components/news/CongratulationsDialog'
import ListYourItemDialog from '@/components/news/ListYourItemDialog'
import NftStakeDialog from '@/components/news/NftStakeDialog'
import RetrieveDialog from '@/components/news/RetrieveDialog'
import RevisionHistoryDialog from '@/components/news/RevisionHistoryDialog'
import StakeDialog from '@/components/news/StakeDialog'
import {
  boxCount2Time,
  getBlindBoxCache,
  getBlindBoxFlagCache,
  getBoxCountToday,
  ifCheckInToday,
  setBlindBoxCache,
  setBlindBoxFlagCache,
} from '@/utils/common'
import { checkBlindBox, loadFromUrl, unlockContent } from '@/utils/http'
import { blockHeight } from '@/utils/web3/chain'
import { getSettlePoolBalance } from '@/utils/web3/market'
import { approveMbd } from '@/utils/web3/mbd'
import {
  balanceOf,
  tokenOwner,
  tokenURI,
  tokensData,
  totalPledgeCount,
  userMint,
  userPledgeCount,
} from '@/utils/web3/nft'
export default {
  name: 'news-detail-view',
  components: {
    NewsItem,
    ListYourItemDialog,
    RevisionHistoryDialog,
    StakeDialog,
    RetrieveDialog,
    NftStakeDialog,
    CheckInDialog,
    CongratulationsDialog,
    BlindDialog,
  },
  data() {
    return {
      nftContract: process.env.VUE_APP_NFT,
      userId: this.$store.state.user.userId,
      tokenId: undefined,
      tokenOwner: undefined,
      tokenMetaUrl: undefined,
      metadata: {
        title: null,
        image: null,
        description: null,
        openContent: null,
        keyword: [],
        maxSupply: null,
        availableSupply: null,
        initialQuantity: null,
        initialPrice: null,
        protectedContent: undefined,
      },
      tokenSupplyInfo: {
        isVoting: false,
      },
      userOwned: undefined,
      currentHeight: undefined,
      totalStakeCount: undefined,
      userStakeInfo: {},
      settlePoolBalance: undefined,
      ifCheckedIn: true,
      blindBoxToday: {},
      blindBoxTimerTask: undefined,
      blindBox: {},
      boxFlagInfo: {},
      subscription: false,
    }
  },

  computed: {
    stakePercent() {
      if (!this.userStakeInfo[0] || this.userStakeInfo[0] == 0) {
        return '0.00%'
      }
      if (!this.totalStakeCount || this.userStakeInfo[0] == 0) {
        return '0.00%'
      }
      return (
        ((this.userStakeInfo[0] / this.totalStakeCount) * 100)
          .toFixed(2)
          .toString() + '%'
      )
    },
  },

  mounted() {
    this.tokenId = this.$route.query.tokenId
    if (!this.tokenId) {
      return
    }
    if (this.userId) {
      var loadingInstance = this.$loading({
        background: 'rgba(0, 0, 0, 0.8)',
      })
      setTimeout(() => {
        this.pageLoad()
        loadingInstance.close()
        this.checkIn()
        this.checkBlindBox()
        this.blindBoxTimerTask = setInterval(() => {
          this.checkBlindBox()
        }, 1000 * 20)
      }, 4000)
    }
  },
  destroyed() {
    if (this.blindBoxTimerTask) {
      clearInterval(this.blindBoxTimerTask)
    }
  },
  methods: {
    /** 检查每日签到 */
    checkIn() {
      if (this.userId && ifCheckInToday(this.userId)) {
        return
      }
      this.ifCheckedIn = false
      this.$refs['checkInDialog'].showDialog()
    },
    /** 完成签到 */
    onCheckedIn() {
      this.checkIn()
    },
    /** 检查盲盒奖励 */
    checkBlindBox() {
      if (this.userId && ifCheckInToday(this.userId)) {
        var haveBox = false
        const blindBox = getBlindBoxCache(this.userId)
        if (blindBox && blindBox.time) {
          const timeGet = Number(blindBox.time)
          const nowTime = new Date().getTime()
          if (nowTime - timeGet > 1000 * 60) {
            setBlindBoxCache(this.userId, blindBox.box, true)
            haveBox = false
          } else if (!blindBox.invalid) {
            this.blindBox = blindBox
            haveBox = true
          }
        }
        var haveFlag = false
        if (!haveBox) {
          const flag = getBlindBoxFlagCache(this.userId)
          if (flag && flag.time) {
            const timeGet = Number(flag.time)
            const nowTime = new Date().getTime()
            if (nowTime - timeGet > 1000 * 60) {
              setBlindBoxFlagCache(this.userId, flag.flag, true)
              haveFlag = false
            } else if (!flag.invalid) {
              this.boxFlagInfo = flag
              haveFlag = true
              this.$refs['blindDialog'].showDialog()
            }
          }
        }
        if (!haveFlag) {
          checkBlindBox().then((r) => {
            if (r.code == 1) {
              const boxFlag = r.data.get_box_flag
              if (boxFlag) {
                const currentFlag = getBlindBoxFlagCache(this.userId)
                if (!currentFlag || currentFlag.flag != boxFlag) {
                  setBlindBoxFlagCache(this.userId, boxFlag)
                  this.boxFlagInfo = getBlindBoxFlagCache(this.userId)
                  this.$refs['blindDialog'].showDialog()
                }
              }
            }
            // const boxFlag = 'A005'
            // if (boxFlag) {
            //   const currentFlag = getBlindBoxFlagCache(this.userId)
            //   if (!currentFlag || currentFlag.flag != boxFlag) {
            //     setBlindBoxFlagCache(this.userId, boxFlag)
            //     this.boxFlagInfo = getBlindBoxFlagCache(this.userId)
            //     this.$refs['blindDialog'].showDialog()
            //   }
            // }
          })
        }
      }
    },
    /** 获取当日盲盒数据 */
    getBlindBoxToday() {
      if (this.userId) {
        this.blindBoxToday.boxCount = getBoxCountToday(this.userId)
        this.blindBoxToday.readTime = boxCount2Time(this.blindBoxToday.boxCount)
      }
    },
    /** 加载数据 */
    pageLoad() {
      var loadingInstance = this.$loading({
        background: 'rgba(0, 0, 0, 0.8)',
      })
      Promise.all([
        this.getOwner(),
        this.loadSupplyInfo(),
        this.loadMetadata(),
        this.getUserOwned(),
        this.getCurrentHeight(),
        this.getTotalStakeCount(),
        this.getUserStakeCount(),
        this.getMbdSettleBalance(),
      ])
        .then(() => {
          this.metadata.maxSupply = this.tokenSupplyInfo.maxSupply
          this.metadata.initialQuantity = this.tokenSupplyInfo.currentSupply
          this.metadata.availableSupply = this.tokenSupplyInfo.availableSupply
          this.metadata.initialPrice = this.tokenSupplyInfo.price.price
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          loadingInstance.close()
        })
    },
    /** 用户点击mint */
    async handleMint() {
      var loadingInstance = this.$loading({
        background: 'rgba(0, 0, 0, 0.8)',
      })
      const mbdPrice = this.metadata.initialPrice
      if (mbdPrice && mbdPrice > 0) {
        try {
          await approveMbd(this.nftContract, mbdPrice)
        } catch (e) {
          console.log(e)
          this.$toast.warning(this.$t('news-detail.mbd_approve_failed'))
          loadingInstance.close()
          return
        }
      }
      try {
        await userMint(this.tokenId, 1)
      } catch (e) {
        console.log(e)
        this.$toast.warning(this.$t('news-detail.nft_mint_failed'))
        loadingInstance.close()
        return
      }
      this.$toast.success(this.$t('news-detail.nft_mint_success'))
      loadingInstance.close()
      this.pageLoad()
    },
    /** 取合约里DAO 质押奖金池子的额度 */
    getMbdSettleBalance() {
      return new Promise((resolve, reject) => {
        getSettlePoolBalance(this.tokenId)
          .then((balance) => {
            this.settlePoolBalance = balance
            resolve()
          })
          .catch((e) => {
            reject(e)
          })
      })
    },
    /** 获取用户拥有数量 */
    getUserOwned() {
      return new Promise((resolve, reject) => {
        balanceOf(this.tokenId)
          .then((balance) => {
            this.userOwned = balance
            resolve()
          })
          .catch((e) => {
            reject(e)
          })
      })
    },
    /** 点击解锁 */
    handleUnlock() {
      var loadingInstance = this.$loading({
        background: 'rgba(0, 0, 0, 0.8)',
      })
      if (this.userOwned && this.userOwned > 0) {
        this.loadProtectedContent(this.metadata.protected)
          .then((protectedContent) => {
            this.metadata.protectedContent = protectedContent
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
    },
    /** 点击赎回 */
    handleRetrieve() {
      if (!this.retrieveUseable) {
        this.$toast.info(this.$t('news-detail.retrieve_unable'))
        return
      }
      this.$refs['retrieveDialog'].showDialog()
    },
    /** 获取token拥有者 */
    getOwner() {
      return new Promise((resolve, reject) => {
        if (!this.tokenId) {
          reject()
        }
        tokenOwner(this.tokenId)
          .then((owner) => {
            this.tokenOwner = owner
            resolve()
          })
          .catch(() => {
            reject()
          })
      })
    },
    /** 获取当前区块高度 */
    getCurrentHeight() {
      return new Promise((resolve, reject) => {
        blockHeight()
          .then((height) => {
            this.currentHeight = height
            resolve()
          })
          .catch(() => {
            reject()
          })
      })
    },
    /** 获取质押总量 */
    getTotalStakeCount() {
      if (!this.tokenId) {
        return
      }
      return new Promise((resolve, reject) => {
        totalPledgeCount(this.tokenId)
          .then((count) => {
            this.totalStakeCount = count ? count : 0
            resolve()
          })
          .catch(() => {
            reject()
          })
      })
    },
    /** 获取用户质押信息 */
    getUserStakeCount() {
      if (!this.tokenId) {
        return
      }
      return new Promise((resolve, reject) => {
        userPledgeCount(this.tokenId)
          .then((data) => {
            this.userStakeInfo = data
            resolve()
          })
          .catch(() => {
            reject()
          })
      })
    },
    /** 加载数据 */
    loadSupplyInfo() {
      return new Promise((resolve, reject) => {
        if (!this.tokenId) {
          reject()
        }
        tokensData(this.tokenId)
          .then((res) => {
            this.tokenSupplyInfo = res
            resolve()
          })
          .catch(() => {
            reject()
          })
      })
    },
    /** 加载元数据 */
    loadMetadata() {
      return new Promise((resolve, reject) => {
        if (!this.tokenId) {
          reject()
        }
        tokenURI(this.tokenId)
          .then((uri) => {
            this.tokenMetaUrl = uri
            loadFromUrl(this.tokenMetaUrl).then((r) => {
              if (r.status !== 200) {
                reject(r.statusText)
              }
              var meta = r.data
              this.ipfsData = meta
              this.metadata.title = meta.title
              this.metadata.description = meta.description
              this.metadata.image = meta.image
              this.metadata.contentType = meta.contentType
              this.metadata.category = meta.category
              this.metadata.contentUrl = meta.contentUrl
              this.metadata.protected = meta.protected
              this.metadata.language = meta.language ? meta.language : []
              this.metadata.prompt = meta.prompt ? meta.prompt : []
              this.metadata.keyword = meta.keyword ? meta.keyword : []
              if (this.metadata.contentUrl) {
                this.loadOpenContent(this.metadata.contentUrl)
                  .then((openContent) => {
                    this.metadata.openContent = openContent
                    resolve()
                  })
                  .catch((e) => {
                    reject(e)
                  })
              }
            })
          })
          .catch(() => {
            reject()
          })
      })
    },
    /** 加载公开数据 */
    loadOpenContent(url) {
      return new Promise((resolve, reject) => {
        loadFromUrl(url).then((res) => {
          if (res.status !== 200) {
            reject(res.statusText)
          }
          resolve(res.data)
        })
      })
    },
    /** 加载私有数据 */
    loadProtectedContent(data) {
      return new Promise((resolve, reject) => {
        unlockContent(data, this.tokenId).then((res) => {
          if (res.code != 1) {
            reject(res.message)
          }
          const ipfsUrl = res.data.url
          loadFromUrl(ipfsUrl).then((r) => {
            if (r.status !== 200) {
              reject(r.statusText)
            }
            resolve(r.data)
          })
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

        .info-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-top: 55px;

          .author-container {
            display: flex;
            flex-direction: row;

            .author-info {
              margin-left: 13px;
              text-align: left;

              .author-name {
                cursor: pointer;
                font-size: 16px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #acbcc9;
              }

              .author-desc {
                font-size: 12px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #acbcc9;
                line-height: 16px;
                margin-top: 7px;
              }
            }

            .subscription {
              margin-left: 14px;
              height: 34px;
              font-size: 12px;
              font-family: Arial;
              font-weight: bold;
              width: 112px;
              color: #acbcc9;
              background: #37434d;
              border-radius: 17px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              cursor: pointer;

              &.light {
                color: #00f9e5;
                background: #1d383b;
              }

              span {
                margin-left: 6px;
              }
            }
          }

          .news-info {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .news-info-item {
              min-width: 120px;
              height: 58px;
              background: #252d36;
              border-radius: 8px;
              margin-left: 12px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;

              .news-info-item-label {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                font-family: Arial;
                font-weight: 400;
                color: #99b1c4;
                line-height: 19px;
                margin-top: 11px;

                img {
                  width: 18px;
                  height: 19px;
                }

                span {
                  margin-left: 5px;
                }
              }

              .news-info-item-value {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-family: Arial;
                font-weight: 400;
                color: #99b1c4;
                margin-bottom: 11px;

                img {
                  width: 8px;
                  height: 6px;
                }

                span {
                  margin-left: 3px;
                }
              }
            }
          }
        }

        .form-desc {
          padding-left: 12px;
          font-size: 12px;
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
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          line-height: 22px;
          margin: 40px 0;
        }

        .form-tag {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 58px;

          .form-tag-label {
            font-size: 10px;
            font-family: Source Han Sans CN;
            font-weight: bold;
          }

          .form-tag-item {
            font-size: 9px;
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
                font-size: 12px;
              }
            }
          }

          .dao-set-tip {
            font-size: 12px;
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
              color: #9ab8db;

              &:last-child {
                text-align: right;
              }
            }
          }

          .transactions-head {
            height: 42px;
            line-height: 42px;
            background: #252d36;
            font-size: 12px;
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

        .form-attr-container {
          border: 1px solid #363e3e;
          border-radius: 6px;
          margin-bottom: 22px;
          height: auto;

          .form-attr-title {
            height: 66px;
            line-height: 66px;
            padding: 0 23px;
            background: #37434d;
            font-size: 18px;
            font-family: Arial;
            font-weight: bold;
            color: #ffffff;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .form-attr-action {
              font-size: 14px;
              font-family: Arial;
              font-weight: bold;
              color: #00f9e5;
              line-height: 66px;
              cursor: pointer;
            }
          }

          .form-attr-list {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 16px 16px;

            .form-attr-item {
              width: 170px;
              padding: 14px 0;
              background: #1e252d;
              border-radius: 6px;
              margin-bottom: 18px;

              .form-attr-label {
                font-size: 14px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #88a2b8;
                margin-left: 12px;
              }

              .form-attr-value {
                font-size: 16px;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #ffffff;
                margin-top: 14px;
                margin-left: 12px;
              }
            }
          }

          .form-attr-market {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 17px 17px 22px 17px;
            text-align: center;

            .form-attr-market-top {
              display: flex;
              flex-direction: row;
              justify-content: space-between;

              .form-attr-available {
                background: #1e252d;
                margin-left: 13px;
                border-radius: 6px;
                width: 144px;
                height: 34px;
                line-height: 34px;
                font-size: 14px;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #acbcc9;
                min-width: 122px;
                text-align: left;
                padding: 0 13px;
                margin-top: 24px;

                &:first-child {
                  margin-left: 0;
                }
              }
            }

            .form-attr-mbd {
              display: flex;
              flex-direction: row;
              align-items: baseline;
              margin-top: 20px;

              .form-attr-mbd-value {
                font-size: 26px;
                font-family: Arial;
                font-weight: bold;
              }

              .form-attr-mbd-value {
                font-size: 10px;
                font-family: Arial;
                font-weight: 400;
                color: #88a2b8;
              }
            }

            .form-attr-mint {
              margin: 17px 0 9px 0;
              border-radius: 18px;
              font-size: 13px;
              font-family: Arial;
              font-weight: bold;
              color: #4b5760;
              width: 100%;
            }

            .form-attr-tip {
              font-size: 10px;
              font-family: Arial;
              font-weight: 400;
              color: #88a2b8;
            }
          }

          .form-second-market {
            display: flex;
            flex-direction: row;
            padding: 24px 16px;

            .second-market-column {
              line-height: 49px;
              font-size: 14px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #acbcc9;
            }

            .second-market-header {
              height: 34px;
              font-size: 12px;
              line-height: 34px;
              background: #252d36;
            }

            .second-market-td {
              font-size: 12px;
              font-family: Arial;
              font-weight: 400;
              color: #ffffff;
              line-height: 46px;
              border-bottom: 1px solid #252d36;

              .second-btn {
                margin: 8px 0;
                width: 60px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                background: linear-gradient(-16deg, #848d98, #97a8a7);
                border-radius: 15px;
              }
            }
          }

          .form-dao {
            padding: 17px 12px;

            .dao-title {
              padding: 0 13px;
              font-size: 16px;
              font-family: Arial;
              font-weight: bold;
              color: #ffffff;
            }

            .dao-sub {
              padding: 0 13px;
              font-size: 14px;
              font-family: Arial;
              font-weight: 400;
              color: #acbcc9;
              line-height: 17px;
              margin-top: 13px;
            }

            .dao-income-item {
              padding: 0 13px;
              margin-top: 16px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;

              .dao-income-label {
                font-size: 14px;
                font-family: Arial;
                font-weight: bold;
                color: #9ab8db;
              }

              .dao-income-value {
                font-size: 14px;
                font-family: Arial;
                font-weight: bold;
                color: #ffffff;
              }
            }

            .dao-member {
              padding: 0 14px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;

              &.dao-member-header {
                margin-top: 19px;
                height: 34px;
                background: #1e252d;

                .dao-member-left {
                  font-size: 12px;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: #acbcc9;
                  line-height: 34px;
                }

                .dao-member-right {
                  font-size: 12px;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: #acbcc9;
                  line-height: 34px;
                }
              }

              &.dao-member-td {
                height: 46px;

                .dao-member-left {
                  font-size: 14px;
                  font-family: Arial;
                  font-weight: 400;
                  line-height: 46px;
                }

                .dao-member-right {
                  font-size: 14px;
                  font-family: Arial;
                  font-weight: 400;
                  color: #acbcc9;
                  line-height: 46px;
                }
              }
            }

            .dividend-pool {
              .dividend-pool-item {
                padding: 19px 13px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid #1f262e;

                &:last-child {
                  border: none;
                }

                .dividend-pool-label {
                  font-size: 14px;
                  font-family: Arial;
                  font-weight: bold;
                  color: #9ab8db;
                }

                .dividend-pool-value {
                  font-size: 14px;
                  font-family: Arial;
                  font-weight: bold;
                }
              }
            }

            .dao-btn-container {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              text-align: center;

              .dao-btn {
                width: 110px;
                height: 36px;
                background: #3c9ef2;
                border-radius: 10px;
                font-size: 14px;
                font-family: Arial;
                font-weight: 400;
                color: #ffffff;
                line-height: 36px;
                cursor: pointer;
              }

              .dao-btn-border {
                margin-left: 20px;
                width: 110px;
                height: 36px;
                border: 1px solid #3c9ef2;
                border-radius: 10px;
                font-size: 14px;
                font-family: Arial;
                font-weight: 400;
                color: #5cb1fa;
                line-height: 36px;
                cursor: pointer;
              }
            }
          }

          .form-attr-setting {
            padding: 16px 13px;

            .form-attr-set {
              cursor: pointer;
              height: 26px;
              line-height: 26px;
              background: linear-gradient(-16deg, #848d98, #97a8a7);
              border-radius: 4px;
              font-size: 12px;
              font-family: Source Han Sans CN;
              font-weight: bold;
              color: #acbcc9;
              padding: 0 17px;

              &:first-child {
                margin-bottom: 10px;
              }

              &:hover {
                color: #00f9e5;
              }
            }
          }
        }

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
