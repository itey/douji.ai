import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';
import './index.css';
console.log('button:', React.version)

function WalletButton() {

  return (
  <div>
		<ConnectButton accountStatus="avatar"/>
	</div>
  )
}

export default WalletButton
