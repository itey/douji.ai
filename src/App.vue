<template>
  <el-container id="app" :class="currentTheme">
    <el-header style="height: auto">
      <NavBar />
    </el-header>
    <!-- <creator v-if="$route.path == '/creator'"></creator> -->
    <el-container class="body-container">
      <el-main>
        <div class="banner">
          <img style="width: 653px; height: 71px" />
        </div>
        <div class="app-content">
          <router-view v-if="show" />
        </div>
      </el-main>
      <el-footer style="height: auto; background: #1a2027; margin-top: 16px">
        <div class="app-content">
          <NavFooter />
        </div>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>
import NavBar from '@/components/NavBar'
import NavFooter from '@/components/NavFooter'
export default {
  components: {
    NavBar,
    NavFooter,
  },
  data() {
    return {
      show: true,
    }
  },
  computed: {
    /** 当前主题 */
    currentTheme() {
      if (this.$store.state.common.theme) {
        return 'theme-' + this.$store.state.common.theme
      } else {
        return 'theme-dark'
      }
    },
  },
  provide() {
    return {
      reload: this.reload,
    }
  },
  created() {
    this.$store.dispatch('LoadMbdPrice')
  },
  methods: {
    // 高阶组件定义刷新方法
    reload() {
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  .el-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #1a2027;
    border-bottom: 1px solid #29383f;
    padding: 0 0;
  }

  .banner {
    margin-top: 16px;
    display: flex;
    justify-content: center;
  }

  // height: 100vh;
  .el-main {
    padding: 0 0;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .el-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .app-content {
    width: 1440px;
  }
}
</style>
