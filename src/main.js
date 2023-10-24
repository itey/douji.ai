import App from '@/App.vue';
import i18n from '@/i18n';
import router from '@/router';
import store from '@/store';
import Vue from 'vue';
import { VuePlugin } from 'vuera';

import '@/assets/theme/index.css';
import ElementUI from 'element-ui';

Vue.use(VuePlugin)
Vue.use(ElementUI);


Vue.config.productionTip = false

Vue.prototype.$store = store

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
