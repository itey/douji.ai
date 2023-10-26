<template>
  <div class="navbar-container">
    <img style="width: 168px; height: 38px" src="@/assets/logo.png" />
    <div class="navbar-divider"></div>
    <div class="navbar-menu">
      <el-menu mode="horizontal" :router="true">
        <el-menu-item index="/">{{$t('common.home')}}</el-menu-item>
        <el-menu-item index="/news">{{$t('common.news')}}</el-menu-item>
        <el-menu-item index="/navigation">{{$t('common.navigation')}}</el-menu-item>
        <el-menu-item index="/market">{{$t('common.marketplace')}}</el-menu-item>
        <el-menu-item>{{$t('common.create')}}</el-menu-item>
      </el-menu>
    </div>
    <div v-show="!$store.state.user.token">
      <Particle :theme="$store.state.common.theme" :isLogout="$store.state.user.logout" :lang="$i18n.locale" />
    </div>
    <div v-if="$store.state.user.token" class="user-container">
      <div class="wallet">
        <img class="icon" src="@/assets/images/user-wallet.png" />
        <div>{{ $store.state.chain.balanceMbd | decimalPlace4 }} MBD</div>
        <div class="divider"></div>
        <div>{{ $store.state.chain.balanceBnb | decimalPlace4 }} BNB</div>
      </div>
      <div @click="userMenuVisible = true">
        <el-popover :visible-arrow="false" v-model="userMenuVisible">
          <div class="menu-container">
            <img @click="userMenuVisible = false" class="close" src="@/assets/images/menu-close.png" />
            <div class="item">
              <div class="icon">
                <img style="width: 23px; height: 23px;" src="@/assets/images/user-icon.png" />
              </div>
              <span>{{ $store.state.user.account | omitAddress }}</span>
            </div>
            <div class="item item-light" @click="menuClick('/user')">
              <div class="icon">
                <img style="width: 17px; height: 16px;" src="@/assets/images/menu-user.png" />
              </div>
              <span>User Center</span>
            </div>
            <div class="item">
              <div class="icon">
                <img style="width: 17px; height: 13px;" src="@/assets/images/menu-wallet.png" />
              </div>
              <span>Wallet</span>
            </div>
            <div class="item">
              <div class="icon">
                <img style="width: 18px; height: 14px;" src="@/assets/images/menu-currency.png" />
              </div>
              <span>Buy Crypto Currency</span>
            </div>
            <div class="item">
              <div class="icon">
                <img style="width: 17px; height: 17px;" src="@/assets/images/menu-copy.png" />
              </div>
              <span>Copy Address</span>
            </div>
            <div class="item" @click="signOutClick">
              <div class="icon">
                <img style="width: 19px; height: 17px;" src="@/assets/images/menu-exit.png" />
              </div>
              <span>Sign Out</span>
            </div>
          </div>
          <div slot="reference" class="user">
            <img style="width: 23px; height: 23px;" src="@/assets/images/user-icon.png" />
            <span class="text">
              {{ $store.state.user.account | omitAddress }}
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
          </div>
        </el-popover>
      </div>
    </div>
    <div class="navbar-language" @click="languageVisible = true">
      <el-popover placement="bottom" width="110px" height="110px" :visible-arrow="false" v-model="languageVisible">
        <div class="language-select">
          <div @click="languageClick('en')" class="select" :class="$store.state.common.language=='en'?'select-light':''">English</div>
          <div @click="languageClick('zh_hant')" class="select" :class="$store.state.common.language=='zh_hant'?'select-light':''">繁體中文</div>
        </div>
        <img slot="reference" style="width: 22px; height: 22px;padding: 6px 6px;" src="@/assets/images/language.png" />
      </el-popover>
    </div>
    <div v-if="$store.state.common.theme=='light'" style="margin-right:20px;cursor: pointer;" @click="themeClick('dark')">
      <img style="width: 24px; height: 24px;" src="@/assets/images/theme-light.png" />
    </div>
    <div v-else style="margin-right:20px;cursor: pointer;" @click="themeClick('light')">
      <img style="width: 18px; height: 18px;padding: 3px 3px;" src="@/assets/images/theme-dark.png" />
    </div>
  </div>
</template>


<script>
import Particle from '@/components/react-app/particle'
export default {
  name: 'nav-bar',
  components: {
    Particle,
  },
  data() {
    return {
      languageVisible: false,
      userMenuVisible: false,
    }
  },
  methods: {
    themeClick(theme) {
      this.$store.commit('SET_THEME', theme)
    },
    languageClick(locale) {
      this.languageVisible = false
      this.$i18n.locale = locale
      this.$store.commit('SET_LANGUAGE', locale)
    },
    menuClick(path) {
      this.userMenuVisible = false
      if (!this.$route.path.includes(path)) {
        this.$router.push(path)
      }
    },
    signOutClick() {
      this.userMenuVisible = false
      this.$store.dispatch('Logout')
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-container {
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .navbar-divider {
    margin-left: 41px;
    margin-right: 15px;
    height: 20px;
    width: 1px;
    background: #ffffff;
  }

  .navbar-menu {
    flex: 1;
  }

  .navbar-language {
    width: 34px;
    height: 34px;
    background: #2a333e;
    border-radius: 7px;
    cursor: pointer;
    margin: 0 18px;
  }

  .user-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    .wallet {
      display: flex;
      flex-direction: row;
      align-items: center;
      background: #212a35;
      border-radius: 19px;
      height: 38px;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #90a9c6;
      padding: 0 19px;

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 17px;
        height: 16px;
        margin-right: 11px;
      }

      .divider {
        width: 1px;
        height: 18px;
        background: #2c3846;
        margin: 0 11px;
      }
    }

    .user {
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 18px;
      cursor: pointer;

      .text {
        margin: 0 13px 0 9px;
      }
    }
  }
}

.el-popover {
  .language-select {
    margin: 20px;

    .select {
      width: 90px;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      text-align: center;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      &.select-light {
        height: 43px;
        background: #3a4a5c;
        border-radius: 10px;
        color: #00fbe6;
        line-height: 43px;
      }
    }
  }

  .menu-container {
    position: relative;
    width: 329px;
    padding: 11px 0;

    .close {
      width: 12px;
      height: 12px;
      padding: 10px;
      position: absolute;
      top: 13px;
      right: 10px;
      cursor: pointer;
    }

    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      line-height: 43px;
      cursor: pointer;
      padding: 0 20px;

      .icon {
        width: 23px;
        height: 23px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      span {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
      }
    }

    .item-light {
      background: #3a4a5c;
    }
  }
}
</style>
