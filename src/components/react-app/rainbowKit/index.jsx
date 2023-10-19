import store from '@/store/index';
import { ConnectButton, connectorsForWallets, darkTheme, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
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

import { ParticleNetwork } from '@particle-network/auth';
import { particleWallet } from '@particle-network/rainbowkit-ext';
import React, { useMemo } from 'react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, optimism, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import './index.css';
console.log(React.version)

const projectId = store.state.chain.projectId
const clientKey = store.state.chain.clientKey
const appId = store.state.chain.appId
const walletId = store.state.chain.walletProjectId

function ParticleButton() {

	/** 主题切换 */
	const rainTheme = useMemo(() => {
		switch(store.state.common.theme) {
			case 'dark':
				return darkTheme();
			default:
				return lightTheme();
		}
	}, [store.state.common.theme])

	const particle = useMemo(() => {
		return new ParticleNetwork({
				projectId: projectId,
				clientKey: clientKey,
				appId: appId,
				chainName: 'Ethereum',
				chainId: 1,
				wallet: {
						displayWalletEntry: true,
				},
		});
	}, []);

	const { chains, publicClient, webSocketPublicClient } = configureChains(
		[mainnet, polygon, optimism, arbitrum],
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
		<WagmiConfig config={wagmiClient}>
				<RainbowKitProvider chains={chains} theme={rainTheme}>
					<ConnectButton />
				</RainbowKitProvider>
			</WagmiConfig>
	</div>
  )
}

export default ParticleButton
