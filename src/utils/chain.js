import i18n from '@/i18n'
import store from '@/store'
import { Notification } from 'element-ui'

const SIGN_STR = 'Wellcome to DOUJI!'

/** 检查登录账户*/
export function checkAccount() {
  const chainAccount = store.state.chain.account
  const userAccount = store.state.user.account
  if (!chainAccount || !userAccount) {
    Notification({
      title: i18n.t('common.warning'),
      message: i18n.t('common.need_reconnect_wallet'),
      type: 'warning'
    })
    return false
  }
  if (chainAccount.toUpperCase() !== userAccount.toUpperCase()) {
    Notification({
      title: i18n.t('common.warning'),
      message: i18n.t('common.need_reconnect_wallet'),
      type: 'warning'
    })
    return false
  }
  return true
}

/** 登录签名 */
export function loginWalletSign(chainAccount) {
  return new Promise((resolve, reject) => {
    const web3 = window.web3
    if (!web3) {
      reject('web3 is not ready')
    }
    const text = web3.utils.utf8ToHex(SIGN_STR)
    web3.eth.personal
      .sign(text, chainAccount, '')
      .then((signed) => {
        resolve(signed)
      })
      .catch((error) => {
        console.log('sign error', error)
        reject(error)
      })
  })

}
