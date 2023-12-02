<template>
  <div class="creator-container">
    <div class="content-container">
      <div class="creator-img">
        <img
          style="width: 118px; height: 118px"
          :src="userInfo.head_img"
          v-if="userInfo.head_img"
        />
        <img
          style="width: 118px; height: 118px"
          v-else
          src="@/assets/avatar.jpg"
        />
      </div>
      <div class="creator-info">
        <div class="creator-info-top">
          <div class="user text-color" v-if="userInfo.nickname">
            {{ userInfo.nickname }}
          </div>
          <div class="balance-address-container">
            <div class="balance-address">{{ address | omitAddress }}</div>
            <img
              style="width: 10px; height: 10px"
              src="@/assets/images/user/copy.png"
              @click="handleCopyAddress()"
            />
          </div>
        </div>
        <div class="text-sub-color desc">{{ userInfo.short_description }}</div>
        <template
          v-if="
            userAccount && userAccount.toLowerCase() != address.toLowerCase()
          "
        >
          <div class="subscription" v-if="subscription" @click="handleSubOut()">
            <img
              style="width: 13px; height: 9px; margin-right: 5px"
              src="@/assets/images/news/true.png"
            />
            <span>{{ $t("creator.subscribe") }}</span>
          </div>
          <div class="subscription light" v-else @click="handleSub()">
            <img
              style="width: 9px; height: 9px; margin-right: 5px"
              src="@/assets/images/news/add.png"
            />
            <span>{{ $t("creator.subscribe") }}</span>
          </div>
        </template>
        <div class="tag-container">
          <div
            class="tag-item"
            style="cursor: default"
            v-if="userInfo.location"
          >
            <img :src="require(`@/assets/images/creator/location.png`)" />
            <span>{{ userInfo.location | cutString(20) }}</span>
          </div>
          <div
            class="tag-item"
            @click="handleGoTo(userInfo.website)"
            v-if="userInfo.website"
          >
            <img :src="require(`@/assets/images/creator/web.png`)" />
            <span>Website</span>
          </div>

          <div
            class="tag-item"
            @click="handleGoTo(userInfo.twitter)"
            v-if="userInfo.twitter"
          >
            <img :src="require(`@/assets/images/creator/twitter.png`)" />
            <span>Twitter</span>
          </div>
          <div
            class="tag-item"
            @click="handleGoTo(userInfo.instagram)"
            v-if="userInfo.instagram"
          >
            <img :src="require(`@/assets/images/creator/instagram.png`)" />
            <span>Instagram</span>
          </div>
          <div
            class="tag-item"
            @click="handleGoTo(userInfo.youtube)"
            v-if="userInfo.youtube"
          >
            <img :src="require(`@/assets/images/creator/youtube.png`)" />
            <span>Youtube</span>
          </div>
          <div
            class="tag-item"
            @click="handleGoTo(userInfo.facebook)"
            v-if="userInfo.facebook"
          >
            <img :src="require(`@/assets/images/creator/facebook.png`)" />
            <span>Facebook</span>
          </div>
          <div
            class="tag-item"
            @click="handleGoTo(userInfo.tiktok)"
            v-if="userInfo.tiktok"
          >
            <img :src="require(`@/assets/images/creator/tiktok.png`)" />
            <span>Tiktok</span>
          </div>
          <div
            class="tag-item"
            @click="handleGoTo(userInfo.github)"
            v-if="userInfo.github"
          >
            <img :src="require(`@/assets/images/creator/github.png`)" />
            <span>Github</span>
          </div>
          <div
            class="tag-item"
            @click="handleGoTo(userInfo.linkedin)"
            v-if="userInfo.linkedin"
          >
            <img :src="require(`@/assets/images/creator/linkedin.png`)" />
            <span>Linkedin</span>
          </div>
          <div
            class="tag-item"
            @click="handleGoTo(userInfo.discord)"
            v-if="userInfo.discord"
          >
            <img :src="require(`@/assets/images/creator/discord.png`)" />
            <span>Discord</span>
          </div>
          <div
            class="tag-item"
            @click="handleGoTo(userInfo.line)"
            v-if="userInfo.line"
          >
            <img :src="require(`@/assets/images/creator/line.png`)" />
            <span>Line</span>
          </div>
          <div
            class="tag-item"
            @click="handleGoTo(userInfo.medium)"
            v-if="userInfo.medium"
          >
            <img
              :src="require(`@/assets/images/creator/medium-circle-fill.png`)"
            />
            <span>Medium</span>
          </div>
          <div
            class="tag-item"
            @click="handleGoTo(userInfo.telegram)"
            v-if="userInfo.telegram"
          >
            <img :src="require(`@/assets/images/creator/telegram.png`)" />
            <span>Telegram</span>
          </div>
          <div
            class="tag-item"
            @click="handleGoTo(userInfo.wechat)"
            v-if="userInfo.wechat"
          >
            <img :src="require(`@/assets/images/creator/wechat.png`)" />
            <span>Wechat</span>
          </div>
          <div
            class="tag-item"
            @click="handleGoTo(userInfo.whatsapp)"
            v-if="userInfo.whatsapp"
          >
            <img :src="require(`@/assets/images/creator/whatsapp.png`)" />
            <span>Whatsapp</span>
          </div>
          <div
            class="tag-item"
            @click="handleGoTo(userInfo.bilibili)"
            v-if="userInfo.whatsapp"
          >
            <img :src="require(`@/assets/images/creator/bilibili.png`)" />
            <span>Bilibili</span>
          </div>
        </div>
      </div>
    </div>
    <div class="list-container">
      <div class="title-container">
        <span class="text-color title">{{ $t("creator.collect") }}</span>
        <span class="text-sub-color sub">{{ total }}</span>
      </div>
      <div
        class="content"
        v-loading="loading"
        :element-loading-background="$store.state.common.theme | maskByTheme"
      >
        <div class="list">
          <div v-for="(item, index) in list" :key="index" class="item">
            <product-item :item="item"></product-item>
          </div>
        </div>
        <el-pagination
          v-if="!loading"
          style="width: 100%; margin: 20px 0"
          background
          layout="prev,pager,next"
          :page-count="20"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";
import { subscribeAuthorContract, isFollow } from "@/utils/web3/operator";
import { getOtUserInfo, getUserNftList } from "@/utils/http";
export default {
  name: "creator-view",
  data() {
    return {
      address: undefined,
      subscription: undefined,
      userInfo: {},
      list: [],
      total: 0,
      page: 1,
      loading: false,
    };
  },
  components: {
    ProductItem,
  },
  computed: {
    userAccount() {
      return this.$store.state.user.account;
    },
  },
  created() {
    this.address = this.$route.query.address;
    this.userInfoGet();
    this.userNftList();
    this.checkIfFollow();
  },
  methods: {
    /** 查询用户的NFT列表  */
    userNftList() {
      if (!this.address) {
        return;
      }
      this.loading = true;
      getUserNftList(this.page, this.address)
        .then((r) => {
          if (r.code == 1) {
            this.list = r.data.list;
            this.total = r.data.pageCount;
          } else {
            this.$toast.error(r.message);
          }
        })
        .catch((e) => {
          this.$toast.error(e.message ? e.message : e);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    /** 查询是否已关注创作者 */
    checkIfFollow() {
      if (!this.userAccount) {
        return;
      }
      isFollow(this.address)
        .then((r) => {
          this.subscription = r;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /** 用户信息查询 */
    userInfoGet() {
      if (!this.address) {
        return;
      }
      var loadingInstance = this.$loading({
        background: "rgba(0, 0, 0, 0.8)",
      });
      getOtUserInfo(this.address)
        .then((r) => {
          if (r.code == 1) {
            this.userInfo = r.data;
          } else {
            this.$toast.error(r.message);
          }
        })
        .finally(() => {
          loadingInstance.close();
        });
    },
    /** 点击复制按钮 */
    handleCopyAddress() {
      this.$copyText(this.address).then(
        () => {
          this.$toast.success(this.$t("common.copied_success"));
        },
        () => {
          this.$toast.error(this.$t("copied_failed"));
        }
      );
    },
    /** 点击关注 */
    handleSub() {
      subscribeAuthorContract(this.address)
        .then(() => {
          this.$toast.success(this.$t("common.follow_success"));
          this.userInfoGet();
        })
        .catch((e) => {
          this.$toast.error(e && e.message ? e.message : e);
          this.userInfoGet();
        });
    },
    /** 点击取消关注 */
    handleSubOut() {
      subscribeAuthorContract(this.address)
        .then(() => {
          this.$toast.success(this.$t("common.un_follow_success"));
          this.userInfoGet();
        })
        .catch((e) => {
          this.$toast.error(e && e.message ? e.message : e);
          this.userInfoGet();
        });
    },
    /** 点击跳转 */
    handleGoTo(url) {
      if (!url) {
        return;
      }
      window.open(url, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.creator-container {
  padding: 37px 0 32px 0;
  align-items: center;
  justify-content: center;

  .content-container {
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: row;

    .creator-img {
      width: 118px;
      height: 118px;
      // background: #00f9e5;
      border: 3px solid #2c3642;
      border-radius: 14px;
      img {
        border-radius: 14px;
      }
    }

    .creator-info {
      margin-left: 20px;
      flex: 1;
      .creator-info-top {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        cursor: pointer;

        .user {
          font-size: 22px;
          line-height: 22px;
          font-weight: bold;
        }

        .balance-address-container {
          background: #232a32;
          border-radius: 4px;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0 4px;
          margin-left: 9px;

          .balance-address {
            font-size: 10px;
            font-family: Arial;
            font-weight: bold;
            color: #99b1c4;
            line-height: 22px;
            margin-right: 7px;
          }
        }
      }

      .desc {
        margin-top: 13px;
        font-size: 10px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #99b1c4;
        line-height: 16px;
        text-align: left;
      }

      .subscription {
        margin-top: 19px;
        height: 27px;
        border-radius: 14px;
        font-size: 10px;
        font-family: Arial;
        font-weight: bold;
        color: #a5b5c3;
        background: #657a8a;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0 12px;
        width: 98px;
        cursor: pointer;

        &.light {
          background: #12c7b8;
          color: #ffffff;
        }
      }

      .tag-container {
        margin-top: 27px;
        display: flex;
        flex-direction: row;
        align-items: center;

        .tag-item {
          // height: 19px;
          background: #262f39;
          border-radius: 4px;
          font-size: 10px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #99b1c4;
          line-height: 19px;
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 7px;
          padding: 3px 6px;
          cursor: pointer;

          img {
            width: 16px;
            height: 16px;
            margin-right: 5px;
          }

          &.light {
            background: #12c7b8;
            border-radius: 4px;
            color: #ffffff;
          }
        }
      }
    }
  }

  .list-container {
    position: relative;

    .title-container {
      text-align: left;
      margin: 60px 0 46px 0;
      display: flex;
      align-items: baseline;

      .title {
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        line-height: 26px;
        text-align: left;
      }

      .sub {
        font-size: 14px;
        font-family: Source Han Sans CN;
        margin-left: 9px;
        padding: 4px 8px 3px 8px;
        font-weight: bold;
        background: #1a2027;
        border-radius: 8px;
      }
    }

    .content {
      flex: 1;

      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .item {
          width: 342px;
          margin: 0 24px 24px 0;

          &:nth-child(4n) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
