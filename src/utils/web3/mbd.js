import mbd from '@/assets/abi/mbd.json'
import i18n from '@/i18n'
import Vue from 'vue'


/** 获取MBD合约 */
function getMBDContract() {
  const web3 = window.ethereum
  if (!web3) {
    Vue.$toast.warning(i18n.t('common.need_reconnect_wallet'))
    return
  }
  return new web3.eth.Contract(mbd.abi, process.env.VUE_APP_MBD)
}

/** 查询MBD余额 */
export function balanceOfMbd(account) {
  const contract = getMBDContract()
  return new Promise((resolve, reject) => {
    contract.methods.balanceOf(account)
      .call()
      .then(balance => {
        resolve(balance)
      })
      .catch(err => {
        reject(err)
      })
  })
}
