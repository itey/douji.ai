<template>
  <div class="profile-container">
    <div class="profile-title text-color">Profile</div>
    <div class="form-container">
      <div class="form-item">
        <div class="form-label">Cover Image</div>
        <div class="form-value"></div>
      </div>
      <div class="form-item">
        <div class="form-label">Aias</div>
        <div class="form-value">
          <el-input v-model="userInfo.nickname"></el-input>
          <div class="form-tip">Alias to be displayed on the public profle page</div>
        </div>
      </div>
      <div class="form-item" style="margin-top: 41px;">
        <div class="form-label">Short Description</div>
        <div class="form-value">
          <el-input v-model="userInfo.short_description"></el-input>
          <div class="form-tip">Short bio to be displayed on the public prohle page</div>
        </div>
      </div>
    </div>
    <div style="height: 1px;background: #1E252D;"></div>
    <div class="profile-sub-title text-color">Social accounts</div>
    <div class="form-container">
      <div class="form-item">
        <div class="form-label">Locaition</div>
        <div class="form-value">
          <el-input v-model="userInfo.location"></el-input>
        </div>
      </div>
    </div>
    <div class="form-container">
      <div class="form-item">
        <div class="form-label">Twitter</div>
        <div class="form-value">
          <el-input v-model="userInfo.twitter"></el-input>
        </div>
      </div>
    </div>
    <div class="form-container">
      <div class="form-item">
        <div class="form-label">Telegram</div>
        <div class="form-value">
          <el-input v-model="userInfo.telegram"></el-input>
        </div>
      </div>
    </div>
    <div class="form-container">
      <div class="form-item">
        <div class="form-label">Facebook</div>
        <div class="form-value">
          <el-input v-model="userInfo.facebook"></el-input>
        </div>
      </div>
    </div>
    <div class="form-container">
      <div class="form-item">
        <div class="form-label">Tiktok</div>
        <div class="form-value">
          <el-input v-model="userInfo.tiktok"></el-input>
        </div>
      </div>
    </div>
    <div class="form-container">
      <div class="form-item">
        <div class="form-label">Website</div>
        <div class="form-value">
          <el-input v-model="userInfo.website"></el-input>
        </div>
      </div>
    </div>
    <div class="form-container">
      <div class="form-item">
        <div class="form-label">Instagram</div>
        <div class="form-value">
          <el-input v-model="userInfo.instagram"></el-input>
        </div>
      </div>
    </div>
    <div class="form-container">
      <div class="form-item">
        <div class="form-label">youtube</div>
        <div class="form-value">
          <el-input v-model="userInfo.youtube"></el-input>
        </div>
      </div>
    </div>
    <div class="form-container">
      <div class="form-item">
        <div class="form-label">Github</div>
        <div class="form-value">
          <el-input v-model="userInfo.github"></el-input>
        </div>
      </div>
    </div>
    <div class="form-container">
      <div class="form-item">
        <div class="form-label">Wechat</div>
        <div class="form-value">
          <el-input v-model="userInfo.wechat"></el-input>
        </div>
      </div>
    </div>
    <div class="btn-container">
      <el-button @click="handleSave()" class="common-btn2">Save</el-button>
    </div>
  </div>
</template>

<script>
import { getUserInfo, updateUserInfo } from '@/utils/http'
export default {
  name: 'profile-view',
  data() {
    return {
      userInfo: {
        nickname: '',
        head_img: '',
        short_description: '',
        location: '',
        twitter: '',
        telegram: '',
        facebook: '',
        tiktok: '',
        linkedin: '',
        medium: '',
        whatsapp: '',
        website: '',
        instagram: '',
        youtube: '',
        github: '',
        wechat: '',
        discord: '',
        line: '',
        bilibili: '',
      },
    }
  },
  mounted() {
    this.loadUserInfo()
  },
  methods: {
    /** 保存用户资料 */
    handleSave() {
      updateUserInfo(this.userInfo).then(() => {
        this.$toast.success(this.$t('user.profile_save_success'))
        this.loadUserInfo()
      })
    },
    /** 获取用户信息 */
    loadUserInfo() {
      var loadingInstance = this.$loading({
        background: 'rgba(0, 0, 0, 0.8)',
      })
      getUserInfo()
        .then((res) => {
          this.userInfo = res.data
        })
        .finally(() => {
          loadingInstance.close()
        })
    },
  },
}
</script>
<style lang="scss">
.profile-container {
  text-align: left;

  .profile-title {
    margin: 32px 22px;
    font-size: 23px;
    font-family: Source Han Sans CN;
    font-weight: bold;
  }

  .profile-sub-title {
    font-size: 13px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    margin-left: 22px;
  }

  .form-container {
    .form-item {
      margin-top: 17px;
      display: flex;
      flex-direction: row;

      .form-label {
        line-height: 35px;
        font-size: 13px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #9faec0;
        width: 156px;
        padding-left: 33px;
      }

      .form-value {
        .form-tip {
          font-size: 9px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #707d8c;
          margin-top: 12px;
        }
      }
    }
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    padding: 41px 54px 47px 0;
  }
}

.el-input__inner {
  width: 524px;
}
</style>
