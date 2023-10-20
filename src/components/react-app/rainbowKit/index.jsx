import { darkTheme, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import WalletButton from '../walletButton';

import React, { useMemo } from 'react';
import { configureChains } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import './index.css';
console.log(React.version)

const { chains } = configureChains(
	[bsc],
	[publicProvider()]
);

function RainbowKit({theme}) {

	/** 主题切换 */
	const rainTheme = useMemo(() => {
		switch(theme) {
			case 'dark':
				return darkTheme();
			default:
				return lightTheme();
		}
	}, [theme])
	
  return (
  <div>
				<RainbowKitProvider chains={chains} theme={rainTheme}>
					<WalletButton/>
				</RainbowKitProvider>
	</div>
  )
}

export default RainbowKit
