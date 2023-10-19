// src/plugins/vuetify.js

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)
Vue.use(VueI18n)

const messages = {
  // en: {
  //   $vuetify: {
  //     dataIterator: {
  //       rowsPerPageText: 'Items per page:',
  //       pageText: '{0}-{1} of {2}',
  //     },
  //   },
  // },
  // zhHans: {
  //   $vuetify: {
  //     dataIterator: {
  //       rowsPerPageText: 'Element per sida:',
  //       pageText: '{0}-{1} av {2}',
  //     },
  //   },
  // },
}

// 使用选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
})
