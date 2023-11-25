<template>
  <el-container id="app" class="theme-container">
    <el-header style="height: auto">
      <NavBar />
    </el-header>
    <!-- <creator v-if="$route.path == '/creator'"></creator> -->
    <el-container>
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
import moment from 'moment'
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
  provide() {
    return {
      reload: this.reload,
    }
  },
  created() {
    this.$store.dispatch('LoadMbdPrice')
  },
  mounted() {
    if (this.$store.state.common.theme) {
      this.loadCss(this.$store.state.common.theme)
    } else {
      const hours = moment().hours()
      if (hours >= 18 || hours <= 6) {
        this.loadCss('dark')
      } else {
        this.loadCss('light')
      }
    }
  },
  methods: {
    // 高阶组件定义刷新方法
    reload() {
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    // 加载样式css文件
    loadCss(theme) {
      const head = document.head || document.getElementsByTagName('head')[0]
      const oldLink = document.getElementById('theme-style')

      if (oldLink) {
        head.removeChild(oldLink)
      }
      let link = document.createElement('link')
      link.type = 'text/css'
      link.id = 'theme-style'
      link.rel = 'stylesheet'
      link.href = require(`@/assets/theme/theme-${theme}.css`)
      document.getElementsByTagName('head')[0].appendChild(link)
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
