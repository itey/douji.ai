<template>
  <div id="app" class="theme-container">
    <div class="app-header">
      <Header v-if="false" />
      <NavBar />
    </div>
    <div class="app-bottom">
      <div class="app-content">
        <router-view />
      </div>
      <div class="app-footer">
        <NavFooter />
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import NavFooter from '@/components/NavFooter'
export default {
  components: {
    Header,
    NavBar,
    NavFooter,
  },
}
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .app-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 77px;
    flex: 0 0 auto;
    background: #1a2027;
    border-bottom: 1px solid #29383f;
  }

  .app-bottom {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    -ms-overflow-style: none;

    .app-content {
      flex: 1;
    }
  }

  .app-bottom::-webkit-scrollbar {
    display: none;
  }
}
</style>
