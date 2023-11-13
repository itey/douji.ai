<template>
  <div>
    <el-dialog custom-class="blind-dialog" :visible.sync="show" @close="handleClose" width="789px">
      <div class="title" slot="title">Open Blind Box</div>
      <img style="width: 789px;height: 800px;" src="@/assets/images/news/gift-bg.png" />
      <div class="content">
        <div class="time-container">
          <img style="width: 38px;height: 38px;" src="@/assets/images/news/blind-date.png" />
          <div class="time">{{ countdown }}</div>
        </div>
        <img style="width: 388px;height: 347px;" src="@/assets/images/news/blind-box-icon.png" />
        <div class="label">Open the blind box and you will 100% get the following rewards</div>
        <div class="blind-list">
          <div v-for="(item,index) in 7" class="blind-item" :style="getStyle(index)">
            <img v-if="index==6" :src="require(`@/assets/images/news/bi-icon.png`)" style="width: 52px;height: 52px;" />
            <img v-else :src="require(`@/assets/images/news/mbd-icon.png`)" style="width: 52px;height: 52px;" />
            <div class="blind-label">100 MBD</div>
            <div class="blind-value">15%</div>
          </div>
        </div>
        <div class="btn-container">
          <el-button @click="openClick" class="btn-open">Open</el-button>
          <el-button @click="giveUpClick" class="btn-give-up">Give Up</el-button>
        </div>
        <div class="blind-tip">
          Open Blind Box Fee:
          <span style="color: #FFFFFF;">500 MBD</span>
        </div>
      </div>
    </el-dialog>
    <CongratulationsDialog ref="successDialog" />
  </div>
</template>

<script>
import CongratulationsDialog from '@/components/news/CongratulationsDialog'
import { setBlindBoxCache } from '@/utils/common'
export default {
  name: 'blind-open-dialog',
  props: {
    blindBox: {
      type: Object,
      default: null,
    },
  },
  components: {
    CongratulationsDialog,
  },
  data() {
    return {
      show: false,
      countdown: 50,
      timer: undefined,
    }
  },
  mounted() {
    this.countdownTime()
  },
  destroyed() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    showDialog() {
      this.show = true
    },
    openClick() {
      this.show = false
      this.$refs['successDialog'].showDialog()
    },
    giveUpClick() {
      this.show = false
    },
    getStyle(index) {
      return {
        marginRight: index == 3 || index == 6 ? 0 : '8px',
        marginBottom: index > 3 ? 0 : '14px',
      }
    },
    countdownTime() {
      this.timer = setInterval(() => {
        if (this.blindBox && this.blindBox.time) {
          const time = Number(this.blindBox.time) + 60000
          const now = new Date().getTime()
          this.countdown = Math.floor((time - now) / 1000)
          if (this.countdown < 0) {
            this.countdown = 0
            setBlindBoxCache(
              this.$store.state.user.userId,
              this.blindBox.box,
              true
            )
            this.show = false
          }
        } else {
          this.countdown = 0
          this.show = false
        }
      }, 1000)
    },
    handleClose() {
      setBlindBoxCache(this.$store.state.user.userId, this.blindBox.box, true)
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

    .label {
      font-size: 18px;
      font-family: Arial;
      font-weight: bold;
      color: #ffffff;
    }

    .blind-list {
      width: 666px;
      background: linear-gradient(196deg, #f4a6a2 0%, #4195f7 100%);
      border-radius: 20px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 23px 0;
      margin-top: 74px;

      .blind-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 146px;
        height: 160px;
        background: rgba(30, 118, 214, 0.57);
        border: 3px solid #c0ddff;
        border-radius: 15px;

        .blind-label {
          font-size: 18px;
          font-family: Arial;
          font-weight: bold;
          color: #ffffff;
          margin: 15px 0 18px 0;
        }

        .blind-value {
          font-size: 16px;
          font-family: Arial;
          font-weight: bold;
          color: #ffffff;
        }
      }
    }

    .btn-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 45px;

      .btn-open {
        width: 188px;
        height: 50px;
        background: linear-gradient(0deg, #4195f6, #d0677d);
        border-radius: 25px;
        cursor: pointer;
        color: #ffffff;
      }

      .btn-give-up {
        width: 188px;
        height: 50px;
        background: linear-gradient(0deg, #54687e, #999596);
        border-radius: 25px;
        cursor: pointer;
        margin-left: 46px;
        color: #5e646d;
      }
    }
    .blind-tip {
      font-size: 16px;
      font-family: Arial;
      font-weight: bold;
      color: #8b96a5;
      margin-top: 18px;
    }
  }
}
</style>
