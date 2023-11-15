import nft from '@/assets/abi/nft.json'
import i18n from '@/i18n'
import store from '@/store'
import Vue from 'vue'
import { mbdToWei } from '../common'
import { checkAccount } from './chain'


var nftContract = undefined

/** 获取NFT合约 */
function getNFTContract() {
  const web3 = window.ethereum
  if (!web3) {
    Vue.$toast(i18n.t('common.need_reconnect_wallet'))
    return null
  }
  if (nftContract) {
    return nftContract
  } else {
    nftContract = new web3.eth.Contract(nft.abi, process.env.VUE_APP_NFT)
    return nftContract
  }
}

/** 创作者铸造NFT */
export function possessorMint(tokenURI, initAmount, priceTokenIdOrAmount, maxSupply) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const toAddress = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.authorise(tokenURI, initAmount, mbdToWei(priceTokenIdOrAmount), maxSupply)
      .send({ from: toAddress })
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

/** 其他用户mint NFT */
export function userMint(tokenId, count) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const toAddress = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.mint(toAddress, tokenId, count, '0x')
      .send({ from: toAddress })
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
  if (!checkAccount()) {
    return
  }
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
  if (!checkAccount()) {
    return
  }
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

/** 获取余额 */
export function balanceOf(tokenId) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const userAccount = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.balanceOf(userAccount, tokenId)
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
  if (!checkAccount()) {
    return
  }
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

/** 投票 */
export function voteByBallot(tokenId) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const userAccount = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.voteByBallot(tokenId)
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

/** update-step1 */
export function startSetTokenPrice(tokenId, price, availableSupply) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const userAccount = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.startSetTokenPrice(tokenId, mbdToWei(price), availableSupply)
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

/** 执行 */
export function setTokenPriceDao(tokenId) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const userAccount = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.setTokenPrice(tokenId)
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

/** update-step2 */
export function startSetTokenURI(tokenId, url) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const userAccount = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.startSetTokenURI(tokenId, url)
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

/** 执行 */
export function setTokenURIDao(tokenId) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const userAccount = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.setTokenURI(tokenId)
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

/** update-sale */
export function startSetNsp(tokenId, param) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const userAccount = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.startSetNsp(
      tokenId,
      param.isOpen,
      param.type,
      param.contract,
      param.discounts,
      (param.discountsFee * 100).toFixed(0),
      param.disTokenId
    )
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

/** 执行 */
export function setNspDao(tokenId) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const userAccount = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.setNsp(tokenId)
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

/** update-dao */
export function startSetDaoRule(tokenId, param) {
  console.log(param)
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const userAccount = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.startSetDaoRule(
      tokenId,
      param.daoFee,
      param.daoCreatorFee,
      param.daoHolderFee,
      param.mVoteCount,
      param.creatorAddress,
      param.curCreatorFees
    )
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

/** 执行 */
export function setDaoRuleDao(tokenId) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const userAccount = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.setDaoRule(tokenId)
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

/** 查询是否已经投票 */
export function isAlreadyVote(voteNo) {
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const userAccount = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.alreadyVote(voteNo, userAccount)
      .call()
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e)
      })
  })
}


/** stake NFT */
export function stakeNft(tokenId, count) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const fromAddress = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.pledgeNft(tokenId, count)
      .send({ from: fromAddress })
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


/** 取回 NFT */
export function unStakeNft(tokenId, count) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const fromAddress = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.unPledgeNft(tokenId, count)
      .send({ from: fromAddress })
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

/** 我的质押数量 */
export function userPledgeCount(tokenId) {
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const fromAddress = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.pledgeBalanceOf(fromAddress, tokenId)
      .call()
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e)
      })
  })
}


/** 授权 NFT */
export function nftApproval(operator) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  if (!nftContract) {
    return
  }
  const fromAddress = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.setApprovalForAll(operator, true)
      .send({ from: fromAddress })
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
