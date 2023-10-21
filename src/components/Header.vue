<template>
  <div class>
    <Particle :theme="$store.state.common.theme" :isLogout="$store.state.user.logout" />
    <button @click="handleClickTheme()">切换主题</button>
    <button @click="personalSign()">签名</button>
    <button @click="logout()">退出</button>
    <div>token:{{$store.state.user.token}}</div>
    <div>account:{{$store.state.user.account}}</div>
    <div>userId:{{$store.state.user.userId}}</div>
  </div>
</template>

<script>
import Particle from '@/components/react-app/particle'
export default {
  name: 'header-view',
  components: {
    Particle,
  },

  methods: {
    /** 切换主题 */
    handleClickTheme() {
      const theme = this.$store.state.common.theme
      this.$store.commit('SET_THEME', theme === 'dark' ? 'light' : 'dark')
      this.$message('切换主题了')
    },

    /** 退出登录 */
    logout() {
      this.$store.dispatch('Logout')
    },

    async personalSign() {
      const web3 = window.web3
      if (web3) {
        const text = web3.utils.utf8ToHex('Wellcome to DOUJI!')
        web3.eth.personal
          .sign(text, this.$store.state.user.account, '')
          .then((result) => {
            console.log('personalSign:', result)
          })
          .catch((error) => {
            console.log('personalSign error', error)
          })
      }
    },

    async getBalance() {
      const web3 = this.$store.state.chain.web3
      const balance = await web3.eth.getBalance(
        '0xb92464F1fbaB528bd3c99A1805349907e01530fa'
      )
      console.log(balance)
    },
  },
}
</script>

<style>
</style>
@/components/react-app/particle/css
