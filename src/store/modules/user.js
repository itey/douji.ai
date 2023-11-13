
import store from '@/store'
import cache from '@/utils/cache'
import { eventBus } from '@/utils/event-bus'
import { checkIn, login } from '@/utils/http'
import { beginEventBus, endEventBus } from '@/utils/task'
import { checkInSign, loginWalletSign } from '@/utils/web3/chain'
import { i18n } from 'element-ui/lib/locale'
import Vue from 'vue'

const user = {
  state: {
    token: undefined,
    userId: undefined,
    account: undefined,
    logout: false,
    checkTime: undefined
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
    },
    setCheckTime: (state, checkTime) => {
      state.checkTime = checkTime
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
            beginEventBus()
            eventBus.$emit('user_login')
            resolve()
          }).catch(error => {
            console.log(error)
            endEventBus()
            commit('setLogout', true)
            Vue.$toast.warning(error)
          })
        }).catch(error => {
          console.log(error)
          endEventBus()
          commit('setLogout', true)
          Vue.$toast.warning(error)
        })
      })
    },
    // 每日签到
    CheckInDaily({ commit }) {
      return new Promise((resolve, reject) => {
        const latestCheck = cache.local.get('DOJI_AI_CHECK_IN_TIME')
        if (latestCheck) {
          const a = new Date(latestCheck).setHours(0, 0, 0, 0)
          const b = new Date().setHours(0, 0, 0, 0)
          if (a === b) {
            reject(i18n.t('common.already_check_in'))
          }
        }
        checkInSign().then(signed => {
          checkIn(signed).then((res) => {
            if (res.code == 1) {
              commit('setCheckTime', new Date().getTime())
              cache.local.set('DOJI_AI_CHECK_IN_TIME_' + store.state.user.userId, new Date().getTime())
              resolve()
            } else {
              if (res.message.indexOf('已签过到') >= 0) {
                commit('setCheckTime', new Date().getTime())
                cache.local.set('DOJI_AI_CHECK_IN_TIME_' + store.state.user.userId, new Date().getTime())
                resolve()
              }
              reject(res.message)
            }
          }).catch(e => {
            if (e.indexOf('已签过到') >= 0) {
              commit('setCheckTime', new Date().getTime())
              cache.local.set('DOJI_AI_CHECK_IN_TIME_' + store.state.user.userId, new Date().getTime())
              resolve()
            }
            reject(e)
          })
        }).catch(e => {
          reject(e)
        })
      })
    },
    // 退出登录
    Logout({ commit }) {
      endEventBus()
      commit('setToken', '')
      commit('setUserId', '')
      commit('setUserAccount', '')
      commit('setChainAccount', '')
      commit('setBalanceMbd', '')
      commit('setBalanceBnb', '')
      commit('setLogout', true)
    },
    // 检查登录状态，未登录则弹窗登录
    CheckLogin({ commit }, ifOpenConnect) {
      return new Promise((resolve) => {
        if (store.state.user.token && window.ethereum) {
          resolve(true)
        } else {
          if (ifOpenConnect) {
            commit('setOpenConnect', true)
          }
          resolve(false)
        }
      })
    }
  }
}

export default user
