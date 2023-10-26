import App from '@/App.vue'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import Vue from 'vue'
import { VuePlugin } from 'vuera'

import '@/assets/theme/index.css'
import '@/assets/theme/common.css'
import '@/assets/theme/theme-dark.css'
import * as filters from '@/filters'
import ElementUI from 'element-ui'


Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.use(VuePlugin)
Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => {
    i18n.locale = store.state.common.language
    return h(App)
  }
}).$mount('#app')
