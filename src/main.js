import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Vue from 'vue'
import { VuePlugin } from 'vuera'

Vue.use(VuePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
