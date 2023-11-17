<template>
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
</template>

<script>
export default {
  name: 'nft-author-info',
  data() {
    return {
      subscription: false,
    }
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
</style>
