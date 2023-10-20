import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

import React, { useEffect } from 'react';
console.log(React.version)

function WalletButton() {

  const { address } = useAccount()

  /** 切换钱包 */
  useEffect(() => {
    console.log(address)
  }, [address])

  return (
    <div>
      <ConnectButton />
    </div>
    )
  
}

export default WalletButton
