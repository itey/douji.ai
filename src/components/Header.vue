<template>
  <div class>
    <Particle :theme="$store.state.common.theme" :isLogout="$store.state.user.logout" :lang="$i18n.local" />
    <button @click="handleClickTheme()">切换主题</button>
    <button @click="personalSign()">签名</button>
    <button @click="logout()">退出</button>
    <div>{{$store.state.chain.account}}</div>
    <el-button type="primary" @click="metaData()">Metadata</el-button>
    <el-button type="info" @click="mint()">Mint</el-button>
    <div>token:{{$store.state.user.token}}</div>
    <div>account:{{$store.state.user.account}}</div>
    <div>userId:{{$store.state.user.userId}}</div>
    <div>bnb:{{$store.state.chain.balanceBnb}}</div>
    <div>mbd:{{$store.state.chain.balanceMbd}}</div>
  </div>
</template>

<script>
import Particle from '@/components/react-app/particle'
import { uploadJson } from '@/utils/http'
import { nftMint } from '@/utils/web3/nft'
import { Notification } from 'element-ui'
export default {
  name: 'header-component',
  components: {
    Particle,
  },

  methods: {
    /** 切换主题 */
    handleClickTheme() {
      const theme = this.$store.state.common.theme
      this.$store.commit('SET_THEME', theme === 'dark' ? 'light' : 'dark')
      this.$message('切换主题了')
    },

    /** 退出登录 */
    logout() {
      this.$store.dispatch('Logout')
    },

    metaData() {
      const param = {
        name: 'DOUJI.AI',
        description: 'The metaverse is here. Where is it all being stored?',
        image:
          'https://ipfs.io/ipfs/bafkreigcbadsldmearemyz2x4v5yvzt7l3f2ccqvsifxtup47flvixhreu',
        properties: {
          type: 'blog-post',
          origins: {
            http: 'https://ipfs.io/ipfs/bafkreigcbadsldmearemyz2x4v5yvzt7l3f2ccqvsifxtup47flvixhreu',
            ipfs: 'ipfs://bafkreigcbadsldmearemyz2x4v5yvzt7l3f2ccqvsifxtup47flvixhreu',
          },
          authors: [
            {
              name: 'Tan7u',
            },
          ],
          content: {
            'text/markdown':
              'The last year has witnessed the explosion of NFTs onto the world’s mainstage. From fine art to collectibles to music and media, NFTs are quickly demonstrating just how quickly grassroots Web3 communities can grow, and perhaps how much closer we are to mass adoption than we may have previously thought. <... remaining content omitted ...>',
          },
        },
      }
      uploadJson(JSON.stringify(param)).then((res) => {
        console.log(res)
      })
    },

    mint() {
      const tokenURI =
        'https://ipfs.io/ipfs/bafkreiaqehuockm5mx7du5ii655paflfav3tntg5fob2aozwhgldosjacm'
      const initAmount = 100
      const priceTokenType = 0
      const priceAsset = '0x07d4436423146969249Ca428279fc991F74CA7e8'
      const priceTokenIdOrAmount = 10
      const maxSupply = 10000
      nftMint(
        tokenURI,
        initAmount,
        priceTokenType,
        priceAsset,
        priceTokenIdOrAmount,
        maxSupply
      )
        .then((res) => {
          console.log(res)
        })
        .catch((e) => {
          Notification({
            title: this.$t('common.warning'),
            message: e,
            type: 'warning',
          })
        })
    },

    async personalSign() {
      const web3 = window.web3
      if (web3) {
        const text = web3.utils.utf8ToHex('Wellcome to DOUJI!')
        web3.eth.personal
          .sign(text, this.$store.state.user.account, '')
          .then((result) => {
            console.log('personalSign:', result)
          })
          .catch((error) => {
            console.log('personalSign error', error)
          })
      }
    },

    async getBalance() {
      const web3 = this.$store.state.chain.web3
      const balance = await web3.eth.getBalance(
        '0xb92464F1fbaB528bd3c99A1805349907e01530fa'
      )
      console.log(balance)
    },
  },
}
</script>

<style>
</style>
@/components/react-app/particle/css
@/utils/web3/contract
@/utils/web3/nft
