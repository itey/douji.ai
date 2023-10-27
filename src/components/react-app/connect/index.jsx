import store from '@/store';
import { isEVMProvider } from '@particle-network/connect';
import { ConnectButton, useAccount, useConnectKit, useLanguage, useParticleTheme } from '@particle-network/connect-react-ui';
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import './index.css';
console.log(React.version)

function WalletButton() {

  const [loginProcess, setLoginProcess] = useState(false);

  const { changLanguage } = useLanguage();


  /** 事件监听 */
  const connectKit = useConnectKit();
  useEffect(() => {
    if(connectKit) {
      connectKit.on('connect', (provider) => {
        if (provider && isEVMProvider(provider)) {
          window.web3 = new Web3(provider);
        }
      });
      connectKit.on('disconnect', () => {
        store.dispatch('Logout')
      });
      connectKit.on('chainChanged', (chain) => {
        console.log('chainChanged:', chain)
      });
      connectKit.on('accountsChanged', (accounts) => {
        store.commit('setChainAccount', accounts[0])
        store.dispatch('Login', {address: accounts[0]}).then(() => {
          setLoginProcess(false)
        })
      });
    }
    
  }, []);


  /** 地址切换 */
  const account = useAccount();
  useEffect(() => {
    if(account && loginProcess) {
      store.dispatch('Login', {address: account}).then(() => {
        setLoginProcess(false)
      })
    }
  }, [account]);
  
  /** 切换主题 */
  const theme = store.state.common.theme;
  const { setTheme } = useParticleTheme();
  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  /** 外部组件按键退出 */
  const isLogout = store.state.user.logout;
  useEffect(() => {
    if(isLogout) {
      store.commit('setLogout', false)
      connectKit.disconnect({ hideLoading: true });
    }
  }, [isLogout]);

  /** 语言切换 */
  useEffect(() => {
    if(store.state.common.language == 'en') {
      changLanguage('en')
    } else {
      changLanguage('zh_TW')
    }
  }, [store.state.common.language])

  return (
    <div>
      <ConnectButton.Custom>
            {({ openConnectModal }) => {

                const handleOpenConnectModal = () => {
                  openConnectModal();
                  setLoginProcess(true);
                }

                return (
                    <div>
                        <button className={'connect-button'} onClick={handleOpenConnectModal} disabled={!!account}>Connect Wallet</button>
                    </div>
                );
            }}
        </ConnectButton.Custom>
    </div>
    )
  
}

export default WalletButton
