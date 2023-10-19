import { WalletEntryPosition } from '@particle-network/auth';
import { BNBChain, BNBChainTestnet } from '@particle-network/chains';
import { evmWallets } from '@particle-network/connect';

const projectId = process.env.VUE_APP_PROJECT_ID;
const clientKey = process.env.VUE_APP_CLIENT_KEY;
const appId = process.env.VUE_APP_APP_ID;
const walletProjectId = process.env.VUE_APP_WALLETCONNECT_PROJECT_ID;

const config = {
  projectId: projectId,
  clientKey: clientKey,
  appId: appId,
  chainName: BNBChainTestnet.name,
  chainId: BNBChainTestnet.id,
  chains: [
    BNBChain,
    BNBChainTestnet
  ],
  particleWalletEntry: {
    displayWalletEntry: true,
    defaultWalletEntryPosition: WalletEntryPosition.BR,
    supportChains: [
      BNBChain,
      BNBChainTestnet
    ],
    customStyle: {},
  },
  securityAccount: {
    promptSettingWhenSign: 2,
    promptMasterPasswordSettingWhenLogin: 2
  },
  wallets: evmWallets({
    projectId: walletProjectId,
    showQrModal: false
  })
}

const chain = {
  state: {
    particleConfig: config,
    walletSort: ['Particle Auth', 'Wallet']
  },

  mutations: {

  },

  actions: {

  }
}

export default chain
