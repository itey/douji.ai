
const projectId = process.env.VUE_APP_PROJECT_ID;
const clientKey = process.env.VUE_APP_CLIENT_KEY;
const appId = process.env.VUE_APP_APP_ID;
const walletProjectId = process.env.VUE_APP_WALLETCONNECT_PROJECT_ID;

const chain = {
  state: {
    projectId: projectId,
    clientKey: clientKey,
    appId: appId,
    walletProjectId: walletProjectId,
    account: undefined
  },

  mutations: {
    setChainAccount(state, account) {
      state.account = account
    }
  }
}

export default chain
