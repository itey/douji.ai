import mbd from '@/assets/abi/mbd.json'
import i18n from '@/i18n'
import store from '@/store'
import Vue from 'vue'
import { mbdToWei, weiToMbd } from '../common'
import { checkAccount } from './chain'


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
        resolve(weiToMbd(balance))
      })
      .catch(err => {
        reject(err)
      })
  })
}

/** 授权MBD */
export function approveMbd(spender, count) {
  if (!checkAccount()) {
    return
  }
  const mbdContract = getMBDContract()
  if (!mbdContract) {
    return
  }
  const userAccount = store.state.chain.account
  return new Promise((resolve, reject) => {
    mbdContract.methods.approve(spender, mbdToWei(count))
      .send({ from: userAccount })
      .on('transactionHash', (hash) => {
        console.log('transactionHash:', hash)
      })
      .on('receipt', (receipt) => {
        resolve(receipt)
      })
      .on('error', (error) => {
        reject(error.message)
      })
  })

}
