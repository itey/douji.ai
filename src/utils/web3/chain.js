import i18n from '@/i18n'
import store from '@/store'
import Vue from 'vue'

const SIGN_STR = 'Wellcome to DOUJI!'
const DAILY_STR = 'Wellcome to DOUJI,A beautiful day has begun!'
const GET_BLIND_BOX = 'Collect DOUJI Blind Box!'
const OPEN_BLIND_BOX = 'Open DOUJI Blind Box!'


/** 检查登录账户*/
export function checkAccount() {
  const chainAccount = store.state.chain.account
  const userAccount = store.state.user.account
  if (!chainAccount || !userAccount) {
    Vue.$toast.warning(i18n.t('common.need_reconnect_wallet'))
    return false
  }
  if (chainAccount.toUpperCase() !== userAccount.toUpperCase()) {
    Vue.$toast.warning(i18n.t('common.need_reconnect_wallet'))
    return false
  }
  return true
}

/** 登录签名 */
export function loginWalletSign(chainAccount) {
  return new Promise((resolve, reject) => {
    const web3 = window.web3Particle
    if (!web3) {
      reject('web3 is not ready')
    }
    // const text = web3.utils.utf8ToHex(SIGN_STR)
    web3.eth.personal
      .sign(SIGN_STR, chainAccount, '')
      .then((signed) => {
        resolve(signed)
      })
      .catch((error) => {
        console.log('sign error', error)
        reject(error)
      })
  })
}

/** 每天签到 */
export function checkInSign() {
  return new Promise((resolve, reject) => {
    const web3 = window.web3Particle
    if (!web3) {
      reject('web3 is not ready')
    }
    const chainAccount = store.state.chain.account
    web3.eth.personal
      .sign(DAILY_STR, chainAccount, '')
      .then((signed) => {
        resolve(signed)
      })
      .catch((error) => {
        console.log('sign error', error)
        reject(error)
      })
  })
}

/** 接收盲盒 */
export function getBlindBoxSign() {
  return new Promise((resolve, reject) => {
    const web3 = window.web3Particle
    if (!web3) {
      reject('web3 is not ready')
    }
    const chainAccount = store.state.chain.account
    web3.eth.personal
      .sign(GET_BLIND_BOX, chainAccount, '')
      .then((signed) => {
        resolve(signed)
      })
      .catch((error) => {
        console.log('sign error', error)
        reject(error)
      })
  })
}

/** 打开盲盒 */
export function openBlindBoxSign() {
  return new Promise((resolve, reject) => {
    const web3 = window.web3Particle
    if (!web3) {
      reject('web3 is not ready')
    }
    const chainAccount = store.state.chain.account
    web3.eth.personal
      .sign(OPEN_BLIND_BOX, chainAccount, '')
      .then((signed) => {
        resolve(signed)
      })
      .catch((error) => {
        console.log('sign error', error)
        reject(error)
      })
  })
}
