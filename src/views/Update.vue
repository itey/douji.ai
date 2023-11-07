<template>
  <div class="create-container">
    <create-step1 v-if="step==1" :edit="true" :metadata="metadata" @handleUpdate="handleUpdate1" @backClick="backClick"></create-step1>
    <create-step2 v-if="step==2" :edit="true" :metadata="metadata" @handleUpdate="handleUpdate2" @backClick="backClick"></create-step2>
    <UpdateSuccess :show="txSuccess" :tx="updateTxJson" />
  </div>
</template>

<script>
import CreateStep1 from '@/components/create/CreateStep1'
import CreateStep2 from '@/components/create/CreateStep2'
import UpdateSuccess from '@/components/create/UpdateSuccessDialo'
import { weiToEth } from '@/utils/common'
import { loadFromUrl } from '@/utils/http'
import {
  startSetTokenPrice,
  tokenOwner,
  tokenURI,
  tokensData,
} from '@/utils/web3/nft'
export default {
  name: 'update-view',
  components: {
    CreateStep1,
    CreateStep2,
    UpdateSuccess,
  },
  data() {
    return {
      txSuccess: false,
      metadata: {},
      ipfsData: {},
      step: 0,
      tokenId: undefined,
      tokenSupplyInfo: {},
      tokenMetaUrl: undefined,
      tokenOwner: undefined,
      updateTxJson: {},
    }
  },
  mounted() {
    this.tokenId = this.$route.query.tokenId
    var loadingInstance = this.$loading({
      background: 'rgba(0, 0, 0, 0.8)',
    })
    setTimeout(() => {
      Promise.all([this.getOwner(), this.loadSupplyInfo(), this.loadMetadata()])
        .then(() => {
          if (this.tokenSupplyInfo.isVoting) {
            this.$toast.warning(this.$t('create.nft_voting'))
            this.$router.back()
            return
          }
          if (
            this.tokenOwner.toLowerCase() !=
            this.$store.state.user.account.toLowerCase()
          ) {
            this.$toast.warning(this.$t('create.no_permission_update'))
            this.$router.back()
            return
          }
          this.metadata.maxSupply = this.tokenSupplyInfo.maxSupply
          this.metadata.initialQuantity = this.tokenSupplyInfo.currentSupply
          this.metadata.availableSupply = this.tokenSupplyInfo.availableSupply
          this.metadata.initialPrice = weiToEth(
            this.tokenSupplyInfo.price.tokenIdOrAmount
          )
          this.step = this.$route.query.step
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          loadingInstance.close()
        })
    }, 4000)
  },
  methods: {
    /** 页面后退 */
    backClick() {
      this.$router.back()
    },
    /** 获取token拥有者 */
    getOwner() {
      return new Promise((resolve, reject) => {
        if (!this.tokenId) {
          reject()
        }
        tokenOwner(this.tokenId)
          .then((owner) => {
            this.tokenOwner = owner
            resolve()
          })
          .catch(() => {
            reject()
          })
      })
    },
    /** 加载数据 */
    loadSupplyInfo() {
      return new Promise((resolve, reject) => {
        if (!this.tokenId) {
          reject()
        }
        tokensData(this.tokenId)
          .then((res) => {
            this.tokenSupplyInfo = res
            resolve()
          })
          .catch(() => {
            reject()
          })
      })
    },
    /** 加载元数据 */
    loadMetadata() {
      return new Promise((resolve, reject) => {
        if (!this.tokenId) {
          reject()
        }
        tokenURI(this.tokenId)
          .then((uri) => {
            this.tokenMetaUrl = uri
            loadFromUrl(this.tokenMetaUrl).then((r) => {
              if (r.status !== 200) {
                reject(r.statusText)
              }
              var meta = r.data
              this.ipfsData = meta
              this.metadata.title = meta.title
              this.metadata.description = meta.description
              this.metadata.image = meta.image
              this.metadata.contentType = meta.contentType
              this.metadata.category = meta.category
              this.metadata.contentUrl = meta.contentUrl
              this.metadata.protected = meta.protected
              this.metadata.language = meta.language ? meta.language : []
              this.metadata.prompt = meta.prompt ? meta.prompt : []
              resolve()
            })
          })
          .catch(() => {
            reject()
          })
      })
    },
    /** 更新1 */
    handleUpdate1(form) {
      const initialPriceUpdate = form.initialPrice
      const availableSupplyUpdate = form.availableSupply
      var loadingInstance = this.$loading({
        background: 'rgba(0, 0, 0, 0.8)',
      })
      startSetTokenPrice(
        this.tokenId,
        initialPriceUpdate,
        availableSupplyUpdate
      )
        .then((tx) => {
          console.log(tx)
          this.updateTxJson = tx
          this.txSuccess = true
        })
        .catch((e) => {
          this.$toast.warning(e)
        })
        .finally(() => {
          loadingInstance.close()
        })
    },
    /** 更新2 */
    handleUpdate2(form) {
      console.log(form)
    },
  },
}
</script>
<style lang="scss" scoped>
.create-container {
  display: flex;
  flex-direction: column;

  .step-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 62px;

    .step {
      text-align: left;

      .step-title {
        font-size: 19px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #747c7c;
      }

      .step-sub {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #747c7c;
        margin-top: 10px;
      }
    }

    .step-light {
      .step-title {
        font-size: 19px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #4cc9ce;
        background: linear-gradient(-16deg, #4195f6 0%, #00f9e5 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .step-sub {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #50ced5;
      }
    }
  }
}
</style>
