import store from '@/store/index';
import { ConnectButton, ModalProvider } from '@particle-network/connect-react-ui';
import '@particle-network/connect-react-ui/dist/index.css';
import React from 'react';
console.log(React)

function ParticleButton() {
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
