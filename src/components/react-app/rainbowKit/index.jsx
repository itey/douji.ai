import { ConnectButton, connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
	argentWallet,
	coinbaseWallet,
	imTokenWallet,
	injectedWallet,
	ledgerWallet,
	metaMaskWallet,
	omniWallet,
	rainbowWallet,
	trustWallet,
	walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

import { ParticleNetwork } from '@particle-network/auth';
import { particleWallet } from '@particle-network/rainbowkit-ext';
import React, { useMemo } from 'react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, optimism, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import './index.css';
console.log(React)

const projectId = 'bd469840-56b1-46f9-b437-2f152c3dc068'
const clientKey = 'cKHkawSV31mlo9cW3zFSN8oVW5V7LgK5V5OeyMNM'
const appId = '07828220-7549-4a3a-9691-81c81cc258ee'
const walletId = '0d986b46cfcc79be948326fa4942500d'

function ParticleButton() {
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
							particleWallet({ chains, authType: 'google' }),
							particleWallet({ chains, authType: 'facebook' }),
							particleWallet({ chains, authType: 'apple' }),
							particleWallet({ chains }),
							injectedWallet({ chains }),
							rainbowWallet({ chains, projectId: walletId }),
							coinbaseWallet({ appName: 'RainbowKit demo', chains }),
							metaMaskWallet({ chains, projectId: walletId }),
							walletConnectWallet({ chains, projectId: walletId }),
					],
			};
	}, [particle]);

	const connectors = connectorsForWallets([
			popularWallets,
			{
					groupName: 'Other',
					wallets: [
							argentWallet({ chains, projectId: walletId }),
							trustWallet({ chains, projectId: walletId }),
							omniWallet({ chains, projectId: walletId }),
							imTokenWallet({ chains, projectId: walletId }),
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
				<RainbowKitProvider chains={chains}>
					<ConnectButton />
				</RainbowKitProvider>
			</WagmiConfig>
	</div>
  )
}

export default ParticleButton
