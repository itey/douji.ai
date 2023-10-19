import Vue from 'vue'
import Vuex from 'vuex'
import chain from './modules/chain'
import common from './modules/common'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    chain,
    common
  }
})

export default store
