
import store from '@/store'
import { loginWalletSign } from '@/utils/chain'
import { login } from '@/utils/http'
import { Message } from 'element-ui'

const user = {
  state: {
    token: undefined,
    userId: undefined,
    account: undefined,
    logout: false
  },

  mutations: {
    setToken: (state, token) => {
      state.token = token
    },
    setUserId: (state, userId) => {
      state.userId = userId
    },
    setUserAccount: (state, account) => {
      state.account = account
    },
    setLogout: (state, logout) => {
      state.logout = logout
    }
  },

  actions: {
    // 登录
    Login({ commit }, payload) {
      const currentAccount = store.state.user.account
      if (currentAccount && currentAccount.toUpperCase() === payload.address.toUpperCase()) {
        return
      }
      return new Promise((resolve) => {
        loginWalletSign(payload.address).then((signed) => {
          login({ address: payload.address, signed: signed }).then(res => {
            const userId = res.data.id
            const token = res.data.token
            commit('setToken', token)
            commit('setUserId', userId)
            commit('setUserAccount', payload.address)
            commit('setChainAccount', payload.address)
            resolve()
          }).catch(error => {
            console.log(error)
            commit('setLogout', true)
            Message.warning(error)
          })
        }).catch(error => {
          console.log(error)
          commit('setLogout', true)
          Message.warning(error)
        })
      })
    },
    // 退出登录
    Logout({ commit }) {
      commit('setToken', '')
      commit('setUserId', '')
      commit('setUserAccount', '')
      commit('setChainAccount', '')
      commit('setLogout', true)
    }
  }
}

export default user
