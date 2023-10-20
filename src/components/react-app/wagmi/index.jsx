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
import React from 'react';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
console.log(React.version)

const projectId = store.state.chain.projectId
const clientKey = store.state.chain.clientKey
const appId = store.state.chain.appId
const walletId = store.state.chain.walletProjectId

new ParticleNetwork({
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

const { chains, publicClient, webSocketPublicClient } = configureChains(
	[bsc],
	[publicProvider()]
);

const particleWallets = [
	particleWallet({ chains, authType: 'email' }),
	particleWallet({ chains, authType: 'phone' }),
	particleWallet({ chains, authType: 'google' }),
	particleWallet({ chains, authType: 'facebook' }),
	particleWallet({ chains }),
];

const popularWallets = {
	groupName: 'Popular',
	wallets: [
			...particleWallets,
			metaMaskWallet({ chains, projectId: walletId }),
			walletConnectWallet({ chains, projectId: walletId }),
			imTokenWallet({ chains, projectId: walletId }),
			tokenPocketWallet({ chains, projectId: walletId }),
	],
};

const connectors = connectorsForWallets([
	popularWallets,
	{
			groupName: 'Other',
			wallets: [
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

const config = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
	webSocketPublicClient,
});

function Wagmi({theme}) {

	return (
		<>
				{config && (
						<WagmiConfig config={ config }>
							<RainbowKit theme={theme}/>  
						</WagmiConfig>
				)}
		</>
	);
}

export default Wagmi
