<template>
  <div class>
    <Wagmi :theme="$store.state.common.theme" />
    <button @click="handleClickTheme()">切换主题</button>
  </div>
</template>

<script>
import Wagmi from '@/components/react-app/wagmi'
export default {
  name: 'header-view',
  components: {
    Wagmi,
  },
  methods: {
    /** 切换主题 */
    handleClickTheme() {
      const theme = this.$store.state.common.theme
      this.$store.commit('SET_THEME', theme === 'dark' ? 'light' : 'dark')
    },
  },
}
</script>

<style>
</style>
