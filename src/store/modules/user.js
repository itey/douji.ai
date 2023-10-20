
import store from '@/store'
import { getToken, removeToken, setToken } from '@/utils/auth'
import { login } from '@/utils/http'

const user = {
  state: {
    token: getToken(),
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
      const sign = 'Wellcome to DOUJI!'
      return new Promise((resolve, reject) => {
        const web3 = window.web3
        if (!web3) {
          reject('web3 is not ready')
        }
        const text = web3.utils.utf8ToHex(sign)
        web3.eth.personal
          .sign(text, payload.address, '')
          .then((signed) => {
            login({ address: payload.address, signed: signed }).then(res => {
              const userId = res.data.id
              const token = res.data.token
              setToken(token)
              commit('setToken', token)
              commit('setUserId', userId)
              commit('setUserAccount', payload.address)
              resolve()
            }).catch(e => {
              console.log(e)
            })
          })
          .catch((error) => {
            console.log('sign error', error)
            reject(error)
          })
      })
    },
    // 退出登录
    Logout({ commit }) {
      commit('setToken', '')
      commit('setUserId', '')
      commit('setUserAccount', '')
      removeToken()
      commit('setLogout', true)
    }
  }
}

export default user
