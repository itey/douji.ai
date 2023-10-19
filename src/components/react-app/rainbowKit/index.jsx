import store from '@/store/index';
import { ParticleNetwork } from '@particle-network/auth';
import { ConnectButton, ModalProvider } from '@particle-network/connect-react-ui';
import '@particle-network/connect-react-ui/dist/index.css';
import React, { useMemo } from 'react';
console.log(React)

function ParticleButton() {
	const particle = useMemo(() => {
		return new ParticleNetwork({
				projectId: '',
				clientKey: '',
				appId: '',
				chainName: 'Ethereum',
				chainId: 1,
				wallet: {
						displayWalletEntry: true,
				},
		});
	}, []);
  return (
  <div>
	<ModalProvider
		options={store.state.chain.particleConfig}
		theme={store.state.common.theme}
		language={store.state.common.language}   //optional：localize, default en
		walletSort={store.state.chain.walletSort} //optional：walelt order
		particleAuthSort={undefined}
	>
	<ConnectButton />
	</ModalProvider>
	
	</div>
  )
}

export default ParticleButton
