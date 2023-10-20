import store from '@/store/index';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  omniWallet,
  rainbowWallet,
  tokenPocketWallet,
  trustWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets';
import RainbowKit from '../rainbowKit';


import { ParticleNetwork } from '@particle-network/auth';
import { BNBChain, BNBChainTestnet } from '@particle-network/chains';
import { particleWallet } from '@particle-network/rainbowkit-ext';
import React, { useMemo } from 'react';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
console.log('wagmi:',React.version)

const projectId = store.state.chain.projectId
const clientKey = store.state.chain.clientKey
const appId = store.state.chain.appId
const walletId = store.state.chain.walletProjectId

function Wagmi({theme}) {

	const particle = useMemo(() => {
		return new ParticleNetwork({
				projectId: projectId,
				clientKey: clientKey,
				appId: appId,
				chainName: 'Ethereum',
				chainId: 1,
				wallet: {
						displayWalletEntry: false,
				},
				chains: [
					BNBChain,
					BNBChainTestnet
				],
				particleWalletEntry: {
					displayWalletEntry: false,
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
		});
	}, []);

	const { chains, publicClient, webSocketPublicClient } = configureChains(
		[bsc],
		[publicProvider()]
	);

	const popularWallets = useMemo(() => {
			return {
					groupName: 'Popular',
					wallets: [
							particleWallet({ chains, authType: 'email' }),
							particleWallet({ chains, authType: 'phone' }),
							particleWallet({ chains, authType: 'google' }),
							particleWallet({ chains, authType: 'facebook' }),
							metaMaskWallet({ chains, projectId: walletId }),
							walletConnectWallet({ chains, projectId: walletId }),
							imTokenWallet({ chains, projectId: walletId }),
							tokenPocketWallet({ chains, projectId: walletId }),
					],
			};
	}, [particle]);

	const connectors = connectorsForWallets([
			popularWallets,
			{
					groupName: 'Other',
					wallets: [
							particleWallet({ chains }),
							injectedWallet({ chains }),
							coinbaseWallet({ appName: 'DOUJI.AI', chains }),
							rainbowWallet({ chains, projectId: walletId }),
							argentWallet({ chains, projectId: walletId }),
							trustWallet({ chains, projectId: walletId }),
							omniWallet({ chains, projectId: walletId }),
							ledgerWallet({ chains, projectId: walletId }),
					],
			},
	]);

	const wagmiClient = createConfig({
			autoConnect: false,
			connectors,
			publicClient,
			webSocketPublicClient,
	});
	
  return (
  <div>
		<WagmiConfig config={ wagmiClient }>
      <RainbowKit theme={theme}/>  
    </WagmiConfig>
	</div>
  )
}

export default Wagmi
