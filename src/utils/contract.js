import NFTABI from '@/assets/abi/nft.json'
import i18n from '@/i18n'
import store from '@/store'
import { Notification } from 'element-ui'
import { checkAccount } from './chain'

/** 获取合约 */
function getNFTContract() {
  const web3 = window.web3
  if (!web3) {
    Notification({
      title: i18n.t('common.warning'),
      message: i18n.t('common.need_reconnect_wallet'),
      type: 'warning'
    })
    return
  }
  return new web3.eth.Contract(NFTABI.abi, process.env.VUE_APP_NFT)
}

export function nftMint(tokenId, amount) {
  if (!checkAccount()) {
    return
  }
  const web3 = window.web3
  const nftContract = getNFTContract()
  const toAddress = store.state.chain.account
  nftContract.methods.mint(toAddress, web3.utils.toHex(tokenId), web3.utils.toHex(amount), web3.utils.toHex(''))
    .send({ from: toAddress })
    .on('transactionHash', (hash) => {
      console.log('transactionHash', hash)
    })
    .on('receipt', (receipt) => {
      console.log('receipt', receipt)
    })
    .on('confirmation', (confirmationNumber, receipt) => {
      console.log('confirmation', confirmationNumber, receipt)
    })
    .on('error', (error) => {
      Notification({
        title: i18n.t('common.warning'),
        message: error.message,
        type: 'warning'
      })
      console.log('error', error)
    })
}
