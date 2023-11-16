import bjx from '@/assets/abi/bjx.json'
import erc20 from '@/assets/abi/erc20.json'
import i18n from '@/i18n'
import store from '@/store'
import Vue from 'vue'
import { checkAccount } from './chain'

var contract = undefined

/** 获取市场合约 */
function getBjxContract() {
  const web3 = window.web3Particle
  if (!web3) {
    Vue.$toast(i18n.t('common.need_reconnect_wallet'))
    return null
  }
  if (contract) {
    return contract
  } else {
    contract = new web3.eth.Contract(bjx.abi, process.env.VUE_APP_BJX)
    return contract
  }
}

/** erc20合约的额度授权 */
export function erc20Approve(cAddress, amount, decimal) {
  const web3 = window.web3Particle
  if (!web3) {
    Vue.$toast(i18n.t('common.need_reconnect_wallet'))
    return null
  }
  const erc20Contract = new web3.eth.Contract(erc20.abi, cAddress)
  const fromAddress = store.state.chain.account
  return new Promise((resolve, reject) => {
    erc20Contract.methods.approve(process.env.VUE_APP_BJX, amount * Math.pow(10, decimal))
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

/** 使用erc20购买BJX */
export function mintByErc20(ercAddress, amount) {
  if (!checkAccount()) {
    return
  }
  const bjxContract = getBjxContract()
  if (!bjxContract) {
    return
  }
  const fromAddress = store.state.chain.account
  return new Promise((resolve, reject) => {
    bjxContract.methods.mint(
      ercAddress,
      fromAddress,
      process.env.VUE_APP_BJX_TOKEN_ID,
      amount,
      '0x'
    )
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

/** 使用BNB购买BJX */
export function mintByBnb(count, payableAmount) {
  if (!checkAccount()) {
    return
  }
  const bjxContract = getBjxContract()
  if (!bjxContract) {
    return
  }
  const fromAddress = store.state.chain.account
  return new Promise((resolve, reject) => {
    bjxContract.methods.mintWithEth(
      payableAmount,
      fromAddress,
      process.env.VUE_APP_BJX_TOKEN_ID,
      count,
      '0x'
    )
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
