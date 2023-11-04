import pairJson from '@/assets/abi/pair.json';
import i18n from '@/i18n';
import Vue from 'vue';

var pairContract = undefined

/** 获取NFT合约 */
function getPairContract() {
  const web3 = window.ethereum
  if (!web3) {
    Vue.$toast(i18n.t('common.need_reconnect_wallet'))
    return null
  }
  if (pairContract) {
    return pairContract
  } else {
    pairContract = new web3.eth.Contract(pairJson.abi, process.env.VUE_APP_PAIR)
    return pairContract
  }
}

/** 获取价格 */
export function getMbdPrice() {
  const pair = getPairContract()
  if (!pair) {
    return
  }
  return new Promise((resolve, reject) => {
    pair.methods.getReserves().call().then(reserves => {
      resolve(reserves)
    }).catch(e => {
      reject(e.message ? e.message : e)
    })
  })
}
