import store from '@/store'

/** 检查登录账户*/
export default function checkAccount() {
  const chainAccount = store.state.chain.account
  const userAccount = store.state.user.account
  if (!chainAccount || !userAccount) {
    return false
  }
  if (chainAccount.toUpperCase() !== userAccount.toUpperCase()) {
    return false
  }
  return true
}
