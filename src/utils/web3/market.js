import i18n from '@/i18n'
import store from '@/store'
import Vue from 'vue'
import marketJson from './abi/market'
import { checkAccount } from './chain'

var contract = undefined

/** 获取市场合约 */
function getMarketContract() {
  const web3 = window.web3Particle
  if (!web3) {
    Vue.$toast(i18n.t('common.need_reconnect_wallet'))
    return null
  }
  if (contract) {
    return contract
  } else {
    contract = new web3.eth.Contract(marketJson.abi, process.env.VUE_APP_MARKET)
    return contract
  }
}

/** 创建市场销售订单 */
export function createSaleOrder(tokenId, count, price) {
  if (!checkAccount()) {
    return
  }
  const marketContract = getMarketContract()
  if (!marketContract) {
    return
  }
  const fromAddress = store.state.chain.account
  return new Promise((resolve, reject) => {
    // nftType 0-721 1-1155
    marketContract.methods.create(process.env.VUE_APP_NFT, tokenId + '', count + '', 1, price + '')
      .send({ from: fromAddress })
      .on('transactionHash', (hash) => {
        console.log('transactionHash:', hash)
      })
      .on('receipt', (receipt) => {
        resolve(receipt)
      })
      .on('error', (error) => {
        reject(error)
      })
  })

}

/** 取消订单 */
export function cancelSaleOrder(orderId) {
  if (!checkAccount()) {
    return
  }
  const marketContract = getMarketContract()
  if (!marketContract) {
    return
  }
  const fromAddress = store.state.chain.account
  return new Promise((resolve, reject) => {
    // nftType 0-721 1-1155
    marketContract.methods.cancel(orderId)
      .send({ from: fromAddress })
      .on('transactionHash', (hash) => {
        console.log('transactionHash:', hash)
      })
      .on('receipt', (receipt) => {
        resolve(receipt)
      })
      .on('error', (error) => {
        reject(error)
      })
  })

}

/** 交易下单 */
export function swapOrder(orderId) {
  if (!checkAccount()) {
    return
  }
  const marketContract = getMarketContract()
  if (!marketContract) {
    return
  }
  const fromAddress = store.state.chain.account
  return new Promise((resolve, reject) => {
    // nftType 0-721 1-1155
    marketContract.methods.swap(orderId)
      .send({ from: fromAddress })
      .on('transactionHash', (hash) => {
        console.log('transactionHash:', hash)
      })
      .on('receipt', (receipt) => {
        resolve(receipt)
      })
      .on('error', (error) => {
        reject(error)
      })
  })

}
