import { getMbdPrice } from '@/utils/web3/dex'

const common = {
  state: {
    language: 'en',
    theme: 'dark',
    openAccount: false,
    openBuy: false,
    openConnect: false,
    isParticleProvider: false,
    mbdPrice: undefined
  },

  mutations: {
    setLanguage: (state, language) => {
      state.language = language
    },
    setTheme: (state, theme) => {
      state.theme = theme
    },
    setOpenAccount: (state, openAccount) => {
      state.openAccount = openAccount
    },
    setOpenBuy: (state, openBuy) => {
      state.openBuy = openBuy
    },
    setOpenConnect: (state, openConnect) => {
      state.openConnect = openConnect
    },
    setIsParticleProvider: (state, isParticleProvider) => {
      state.isParticleProvider = isParticleProvider
    },
    setMbdPrice: (state, mbdPrice) => {
      state.mbdPrice = mbdPrice
    }
  },

  actions: {
    // 获取Mbd价格
    LoadMbdPrice({ commit }) {
      getMbdPrice().then(res => {
        const price = res[0] / res[1]
        commit('setMbdPrice', price.toFixed(8))
      })
    }
  }
}

export default common
