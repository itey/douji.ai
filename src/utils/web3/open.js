import bjx from '@/assets/abi/bjx.json'
import marketJson from '@/assets/abi/market.json'
import mbd from '@/assets/abi/mbd.json'
import nft from '@/assets/abi/nft.json'
import pairJson from '@/assets/abi/pair.json'

import { weiToEth, weiToMbd } from '@/utils/common'

const Web3 = require('web3')
const rpcUrl = process.env.VUE_APP_OPEN_RPC
const web3 = new Web3(rpcUrl)

const BJX_TOKEN_ID = process.env.VUE_APP_BJX_TOKEN_ID

///////////////////主链///////////////////
/** 检查是否为合约地址 */
export function checkIfContract(account) {
  return new Promise((resolve, reject) => {
    web3.eth.getCode(account).then(code => {
      if (code === '0x') {
        resolve(false)
      }
      resolve(true)
    }).catch(e => {
      reject(e)
    })
  })
}

/** 区块高度获取 */
export function blockHeight() {
  return new Promise((resolve, reject) => {
    web3.eth.getBlockNumber().then((height) => {
      resolve(height)
    }).catch(e => {
      reject(e)
    })
  })
}

/** BNB余额查询 */
export function balanceOfBnb(account) {
  return new Promise((resolve, reject) => {
    web3.eth.getBalance(account).then((balance) =>
      resolve(weiToEth(balance)))
      .catch(e => {
        reject(e)
      })
  })
}

///////////////////BJX///////////////////

/** 获取BJX合约 */
const getBjxContract = () => {
  return new web3.eth.Contract(bjx.abi, process.env.VUE_APP_BJX)
}

/** 查询BJXStar */
export const getBjxTokenInfo = () => {
  const contract = getBjxContract()
  return new Promise((resolve, reject) => {
    contract.methods.tokens(BJX_TOKEN_ID)
      .call()
      .then(r => {
        resolve(r)
      })
      .catch(err => {
        reject(err)
      })
  })
}

///////////////////MBD///////////////////

/** 获取MBD交易对合约 */
function getPairContract() {
  return new web3.eth.Contract(pairJson.abi, process.env.VUE_APP_PAIR)
}

/** 获取MBD合约 */
function getMBDContract() {
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

/** 获取MBD价格 */
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


///////////////////Market///////////////////

/** 获取市场合约 */
function getMarketContract() {
  return new web3.eth.Contract(marketJson.abi, process.env.VUE_APP_MARKET)
}

/** 取合约里DAO 质押奖金池子的额度 */
export function getSettlePoolBalance(tokenId) {
  const nftContract = getMarketContract()
  if (!nftContract) {
    return
  }
  return new Promise((resolve, reject) => {
    nftContract.methods.tokenSettlePool(tokenId)
      .call()
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e)
      })
  })
}


///////////////////NFT///////////////////
/** 获取NFT合约 */
function getNFTContract() {
  return new web3.eth.Contract(nft.abi, process.env.VUE_APP_NFT)
}

/** 查询DaoRule */
export function getDaoRule(tokenId) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  return new Promise((resolve, reject) => {
    nftContract.methods.getDaoRule(tokenId)
      .call()
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e)
      })
  })
}

/** 查询TokenOwner */
export function getTokenOwner(tokenId) {
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  return new Promise((resolve, reject) => {
    nftContract.methods.tokenOwners(tokenId)
      .call()
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e)
      })
  })
}

/**
 * nft信息查询
 * @param {*} tokenId 
 * @returns 
 */
export function tokensData(tokenId) {
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  return new Promise((resolve, reject) => {
    nftContract.methods.tokens(tokenId)
      .call()
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e)
      })
  })
}

/** 获取metaURI */
export function tokenURI(tokenId) {
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  return new Promise((resolve, reject) => {
    nftContract.methods.uri(tokenId)
      .call()
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e)
      })
  })
}

/** 总质押数量 */
export function totalPledgeCount(tokenId) {
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  return new Promise((resolve, reject) => {
    nftContract.methods.pledgeAllBalanceOf(tokenId)
      .call()
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e)
      })
  })
}
