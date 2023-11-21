<template>
  <div class="info-container" v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.3)">
    <div class="author-container">
      <img
        @click="$router.push({path: '/creator', query: {address: creator}})"
        style="width: 52px;height: 52px;border-radius: 26px; cursor: pointer;"
        :src="creatorInfo.head_img"
        v-if="creatorInfo.head_img"
      />
      <img
        @click="$router.push({path: '/creator', query: {address: creator}})"
        style="width: 52px;height: 52px;border-radius: 26px; cursor: pointer;"
        v-else
        src="@/assets/avatar.jpg"
      />
      <div class="author-info">
        <div class="author-name">
          by
          <span
            @click="$router.push({path: '/creator', query: {address: creator}})"
            style="color: #00F9E5;"
            v-if="creatorInfo.nickname"
          >{{ creatorInfo.nickname }}</span>
          <span @click="$router.push({path: '/creator', query: {address: creator}})" style="color: #00F9E5;" v-else>{{ creator | omitAddress }}</span>
        </div>
        <div class="author-desc">{{ creatorInfo.short_description }}</div>
      </div>
      <template v-if="userAccount && userAccount.toLowerCase() != creator.toLowerCase()">
        <div class="subscription" v-if="creatorInfo.isfollow" @click="handleSubOut()">
          <img style="width: 13px;height: 9px;" src="@/assets/images/news/true.png" />
          <span>Subscribe</span>
        </div>
        <div class="subscription light" v-else @click="handleSub()">
          <img style="width: 9px;height: 9px;" src="@/assets/images/news/add.png" />
          <span>Subscribe</span>
        </div>
      </template>
    </div>
    <div class="news-info">
      <div class="news-info-item">
        <div class="news-info-item-label">
          <img src="@/assets/images/news/date.png" />
          <span>{{ nftInfo.read_duration | formatSeconds }}</span>
        </div>
        <!-- <div class="news-info-item-value">
          <img src="@/assets/images/up.png" />
          <span>6528 Min</span>
        </div>-->
      </div>
      <div class="news-info-item">
        <div class="news-info-item-label">
          <img v-if="isPraise" src="@/assets/images/news/is_like.png" />
          <img v-else src="@/assets/images/news/like.png" @click="handlePraise()" />
          <span>{{ nftInfo.praise_count }}</span>
        </div>
        <!-- <div class="news-info-item-value">
          <img src="@/assets/images/up.png" />
          <span>6528</span>
        </div>-->
      </div>
      <div class="news-info-item">
        <div class="news-info-item-label">
          <img v-if="isCollect" src="@/assets/images/news/is_star.png" />
          <img v-else src="@/assets/images/news/star.png" @click="collectPraise()" />
          <span>{{ nftInfo.collect_count }}</span>
        </div>
        <!-- <div class="news-info-item-value">
          <img src="@/assets/images/up.png" />
          <span>6528</span>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import { follow, getNftInfo, getOtUserInfo, unfollow } from '@/utils/http'
import {
  isAlreadyCollect,
  isAlreadyPraise,
  nftCollect,
  nftPraise,
} from '@/utils/web3/nft'
export default {
  name: 'nft-author-info',
  props: {
    creator: {
      type: String,
      default: '',
    },
    tokenId: {
      type: String,
      default: '',
    },
  },
  watch: {
    '$store.state.user.account': function (val, od) {
      if (val != od) {
        this.checkIfPraiseCollect()
      }
    },
  },
  computed: {
    userAccount() {
      return this.$store.state.user.account
    },
  },
  data() {
    return {
      loading: false,
      subscription: false,
      isPraise: false,
      isCollect: false,
      creatorInfo: {},
      nftInfo: {},
    }
  },
  mounted() {
    if (this.creator) {
      this.infoInit()
    }
    if (this.userAccount) {
      this.checkIfPraiseCollect()
    }
  },
  methods: {
    /** 点击关注 */
    handleSub() {
      follow(this.creatorInfo.uid)
        .then((r) => {
          if (r.code == 1) {
            this.$toast.success(this.$t('common.follow_success'))
          } else {
            this.$toast.error(r.message)
          }
        })
        .catch((e) => {
          this.$toast.error(e)
        })
        .finally(() => {
          this.loadUserInfo()
        })
    },
    /** 点击取消关注 */
    handleSubOut() {
      unfollow(this.creatorInfo.uid)
        .then((r) => {
          if (r.code == 1) {
            this.$toast.success(this.$t('common.un_follow_success'))
          } else {
            this.$toast.error(r.message)
          }
        })
        .catch((e) => {
          this.$toast.error(e)
        })
        .finally(() => {
          this.loadUserInfo()
        })
    },
    infoInit() {
      this.loading = true
      Promise.all([this.loadUserInfo(), this.loadNftInfo()])
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          this.loading = false
        })
    },
    /** 加载用户信息 */
    loadUserInfo() {
      return new Promise((resolve, reject) => {
        getOtUserInfo(this.creator)
          .then((r) => {
            if (r.code == 1) {
              this.creatorInfo = r.data
              return resolve()
            } else {
              return reject(r.message)
            }
          })
          .catch((e) => {
            return reject(e)
          })
      })
    },
    /** 获取NFT资料 */
    loadNftInfo() {
      return new Promise((resolve, reject) => {
        getNftInfo(this.tokenId)
          .then((r) => {
            if (r.code == 1) {
              this.nftInfo = r.data
              return resolve()
            } else {
              return reject(r.message)
            }
          })
          .catch((e) => {
            return reject(e)
          })
      })
    },
    /** 查询是否点赞和关注 */
    checkIfPraiseCollect() {
      if (!this.userAccount) {
        return
      }
      Promise.all([
        isAlreadyPraise(this.tokenId),
        isAlreadyCollect(this.tokenId),
      ])
        .then((arr) => {
          this.isPraise = arr[0]
          this.isCollect = arr[1]
        })
        .catch((e) => {
          console.log(e)
        })
    },
    /** 点赞NFT */
    handlePraise() {
      this.$store.dispatch('CheckLogin', true).then((c) => {
        if (!c) {
          return
        }
        var loadingInstance = this.$loading({
          background: 'rgba(0, 0, 0, 0.8)',
        })
        nftPraise(this.tokenId)
          .then(() => {
            this.$toast.success(this.$t('news-detail.like_success'))
          })
          .catch((e) => {
            this.$toast.error(e)
          })
          .finally(() => {
            loadingInstance.close()
            this.loadNftInfo()
            this.checkIfPraiseCollect()
          })
      })
    },
    /** 收藏NFT */
    collectPraise() {
      this.$store.dispatch('CheckLogin', true).then((c) => {
        if (!c) {
          return
        }
        var loadingInstance = this.$loading({
          background: 'rgba(0, 0, 0, 0.8)',
        })
        nftCollect(this.tokenId)
          .then(() => {
            this.$toast.success(this.$t('news-detail.collect_success'))
          })
          .catch((e) => {
            this.$toast.error(e)
          })
          .finally(() => {
            loadingInstance.close()
            this.loadNftInfo()
            this.checkIfPraiseCollect()
          })
      })
    },
  },
}
</script>

<style lang="scss">
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
        color: #6c7884;
        line-height: 16px;
        margin-top: 7px;
        -webkit-line-clamp: 2; // 设置两行文字溢出
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        overflow: hidden;
        padding-right: 30px;
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
          cursor: pointer;
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
</style>
