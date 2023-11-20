<template>
  <el-dialog
    custom-class="blind-dialog"
    top="0vh"
    :destroy-on-close="true"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    :visible.sync="show"
    @close="handleClose"
    @open="onOpen"
    width="789px"
  >
    <div class="title" slot="title">Receive Blind Box</div>
    <img style="width: 789px;height: 800px;" src="@/assets/images/news/gift-bg.png" />
    <div class="content">
      <div class="time-container">
        <img style="width: 38px;height: 38px;" src="@/assets/images/news/blind-date.png" />
        <div class="time">
          <vac :end-time="endTime" @finish="onFinished()">
            <span slot="process" slot-scope="{ timeObj }">{{ timeObj.ceil.s }}</span>
          </vac>
        </div>
      </div>
      <img style="width: 388px;height: 347px;" src="@/assets/images/news/blind-box-icon.png" />
      <el-button @click="handleReceiveBox()" class="btn">Receive</el-button>
    </div>
  </el-dialog>
</template>

<script>
import {
  getBlindBoxCache,
  getBlindBoxFlagCache,
  setBlindBoxCache,
  setBlindBoxFlagCache,
} from '@/utils/common'
import { getBlindBox } from '@/utils/http'
import { getBlindBoxSign } from '@/utils/web3/chain'
export default {
  name: 'blind-dialog',
  props: {
    tokenId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: false,
      endTime: undefined,
      blindBox: {},
      boxFlag: {},
    }
  },
  methods: {
    onOpen() {
      this.boxFlag = getBlindBoxFlagCache(this.$store.state.user.userId)
      this.endTime = Number(this.boxFlag.time) + 120000
      const now = new Date().getTime()
      if (now >= this.endTime) {
        this.onFinished()
      }
    },
    /** 接收盲盒 */
    handleReceiveBox() {
      getBlindBoxSign().then((signed) => {
        var loadingInstance = this.$loading({
          background: 'rgba(0, 0, 0, 0.8)',
        })
        getBlindBox(signed, this.boxFlag.flag, this.tokenId)
          .then((r) => {
            if (r.code == 1) {
              const openFlag = r.data.open_box_flag
              setBlindBoxCache(this.$store.state.user.userId, openFlag, false)
              this.blindBox = getBlindBoxCache(this.$store.state.user.userId)
              this.show = false
              this.$emit('handleReceive')
            } else {
              console.log(r.message)
              this.$toast.error(this.$t('news-detail.get_blind_box_failed'))
            }
          })
          .catch((e) => {
            console.log(e)
            this.$toast.error(this.$t('news-detail.get_blind_box_failed'))
          })
          .finally(() => {
            loadingInstance.close()
          })
      })
    },
    showDialog() {
      this.show = true
    },
    onFinished() {
      console.log('Time Over')
      setBlindBoxFlagCache(
        this.$store.state.user.userId,
        this.boxFlag.flag,
        true
      )
      this.show = false
    },
    /** 用户关闭 */
    handleClose() {
      setBlindBoxFlagCache(
        this.$store.state.user.userId,
        this.boxFlag.flag,
        true
      )
      this.show = false
    },
  },
}
</script>

<style lang="scss">
.blind-dialog {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &.el-dialog {
    background: transparent;
    border: none;
  }

  .el-dialog__header {
    position: absolute;
    top: 76px;
    width: 789px;
    z-index: 10;
    padding-top: 0;

    .el-dialog__headerbtn {
      top: 0;
    }
  }

  .title {
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
  }

  .content {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 789px;
    padding-top: 158px;

    .time-container {
      width: 266px;
      height: 68px;
      background: rgba(18, 19, 21, 0.5);
      border-radius: 34px;
      font-size: 48px;
      font-family: Arial;
      font-weight: bold;
      color: #ffffff;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-bottom: 46px;

      .time {
        margin-left: 14px;
      }
    }

    .btn {
      width: 188px;
      height: 50px;
      background: linear-gradient(0deg, #4195f6, #d0677d);
      border-radius: 25px;
      margin-top: 35px;
      cursor: pointer;
      color: #ffffff;
    }
  }
}
</style>
