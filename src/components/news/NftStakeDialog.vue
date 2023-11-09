<template>
  <el-dialog custom-class="nft-stake-dialog" :visible.sync="show" width="1440px">
    <div class="nft-stake-header text-color" slot="title">NFT Stake Income settlement</div>
    <div class="nft-stake-content">
      <div class="nft-stake-container">
        <div class="nft-stake-top">
          <div class="nft-stake-left">
            <div class="nft-stake-title text-color">Enterprise Metaverse Users Prefer Simplifed Digital Avatars Ove</div>
            <img style="width: 939px;height: 532px;margin-top:50px;" />
            <div class="nft-stake-desc text-color">The easy-to-use prompt to generate the portrait photography wit</div>
            <div class="nft-stake-label-sub" style="margin-top: 16px;">
              <img style="width: 28px;height: 28px;" src="@/assets/images/create/website.png" />
              <div class="nft-stake-label-sub-text">Open to Access</div>
            </div>
            <div class="nft-stake-content text-color">
              <div v-html="pubContent"></div>
            </div>
            <div class="nft-stake-label-sub">
              <img style="width: 28px;height: 28px;" src="@/assets/images/create/protect.png" />
              <div class="nft-stake-label-sub-text">Protected</div>
            </div>
            <div class="nft-stake-content text-color">
              <div v-html="privateContent"></div>
            </div>
            <div class="nft-stake-tag">
              <div class="nft-stake-tag-label text-color">Tags:</div>
              <div class="nft-stake-tag-item text-color" v-for="(item,index) in 4" :key="index">NFT</div>
            </div>
          </div>
          <div class="nft-stake-right">
            <div class="nft-stake-attr-container">
              <div class="nft-stake-attr-title text-color">DOUJI NFT Attributes</div>
              <div class="nft-stake-attr-list">
                <div class="nft-stake-attr-item">
                  <div class="nft-stake-attr-label">Token Address</div>
                  <div class="nft-stake-attr-value">0x87Fa...47485</div>
                </div>
                <div class="nft-stake-attr-item">
                  <div class="nft-stake-attr-label">Token ID</div>
                  <div class="nft-stake-attr-value">2</div>
                </div>
                <div class="nft-stake-attr-item">
                  <div class="nft-stake-attr-label">Token Standard</div>
                  <div class="nft-stake-attr-value">BEP-1155</div>
                </div>
                <div class="nft-stake-attr-item">
                  <div class="nft-stake-attr-label">Creator</div>
                  <div class="nft-stake-attr-value">0x87Fa...47485</div>
                </div>
                <div class="nft-stake-attr-item">
                  <div class="nft-stake-attr-label">Created At</div>
                  <div class="nft-stake-attr-value">2023/2/2 09:42:45</div>
                </div>
                <div class="nft-stake-attr-item">
                  <div class="nft-stake-attr-label">Updated At</div>
                  <div class="nft-stake-attr-value">2023/9/3 13:03:38</div>
                </div>
              </div>
            </div>
            <div class="nft-stake-attr-container">
              <div class="nft-stake-attr-title text-color">DOUJI NFT Attributes</div>
              <div class="nft-stake-attr-list">
                <div class="nft-stake-attr-item">
                  <div class="nft-stake-attr-label">Content Type</div>
                  <div class="nft-stake-attr-value">Airticle</div>
                </div>
                <div class="nft-stake-attr-item">
                  <div class="nft-stake-attr-label">Category</div>
                  <div class="nft-stake-attr-value">AIGC</div>
                </div>
                <div class="nft-stake-attr-item">
                  <div class="nft-stake-attr-label">Platform</div>
                  <div class="nft-stake-attr-value">GPT</div>
                </div>
                <div class="nft-stake-attr-item">
                  <div class="nft-stake-attr-label">Language</div>
                  <div class="nft-stake-attr-value">English</div>
                </div>
                <div class="nft-stake-attr-item">
                  <div class="nft-stake-attr-label">Max Supply</div>
                  <div class="nft-stake-attr-value">50,000</div>
                </div>
                <div class="nft-stake-attr-item">
                  <div class="nft-stake-attr-label">Available Supply</div>
                  <div class="nft-stake-attr-value">50,000</div>
                </div>
                <div class="nft-stake-attr-item">
                  <div class="nft-stake-attr-label">Initial Mint Quantity</div>
                  <div class="nft-stake-attr-value">250</div>
                </div>
              </div>
            </div>
            <div class="nft-stake-attr-container">
              <div class="nft-stake-attr-title text-color">Primary Market</div>
              <div class="nft-stake-attr-market">
                <div class="nft-stake-attr-available">
                  Available :
                  <span class="text-color">123</span>
                </div>
                <div class="nft-stake-attr-mbd">
                  <div class="mbd-value text-color">2590.0 MBD</div>
                  <div class="mbd-transform">≈$626 57</div>
                </div>
                <el-button :disabled="!edit" class="common-btn2 nft-stake-attr-mint">Mint</el-button>
                <div class="nft-stake-attr-tip">
                  Owning
                  <span class="text-color">1 BJxStar</span> To Get
                  <span class="text-color">20%</span>
                  discount
                </div>
              </div>
            </div>
            <div class="nft-stake-attr-container">
              <div class="nft-stake-attr-title text-color">DOUJI NFT DAO Governance</div>
              <div class="nft-stake-dao">
                <div class="dao-title text-color">NFT DAO Eamings</div>
                <div class="dao-sub">
                  The NFT DAO members of this item will receive
                  <span class="text-color">10%</span>
                  forevery sale
                </div>
                <div class="dao-title text-color" style="margin-top: 26px;margin-bottom:3px">
                  NFT DAO
                  Income Distribution
                </div>
                <div class="dao-income-item">
                  <div class="dao-income-label">Creators Earngings</div>
                  <div class="dao-income-value text-color">80%</div>
                </div>
                <div class="dao-income-item">
                  <div class="dao-income-label">NFT Stakers</div>
                  <div class="dao-income-value text-color">80%</div>
                </div>
                <div class="dao-member dao-member-header">
                  <div class="dao-member-left">Mermber</div>
                  <div class="dao-member-right">Proportion of Revenue</div>
                </div>
                <div v-for="(item,index) in 2" class="dao-member dao-member-td">
                  <div class="dao-member-left text-color">0x7Fa...4745d</div>
                  <div class="dao-member-right">70%</div>
                </div>
                <div class="dao-title text-color" style="margin-top: 16px;">NFT DAO Govemance</div>
                <div class="dao-income-item" style="margin-top: 16px;">
                  <div class="dao-income-label">Execution Threshold</div>
                  <div class="dao-income-value text-color">80</div>
                </div>
                <div class="dao-title text-color" style="margin-top: 28px;">
                  NFT Staker Bonus Dividend
                  Pool
                </div>
                <div class="dividend-pool">
                  <div class="dividend-pool-item">
                    <div class="dividend-pool-label">Balance</div>
                    <div class="dividend-pool-value text-color">2080.0808 MBD</div>
                  </div>
                  <div class="dividend-pool-item">
                    <div class="dividend-pool-label">All members NFT Staked</div>
                    <div class="dividend-pool-value text-color">168</div>
                  </div>
                  <div class="dividend-pool-item">
                    <div class="dividend-pool-label">You NFT Staked</div>
                    <div class="dividend-pool-value text-color">3 (17.86%)</div>
                  </div>
                  <div class="dividend-pool-item">
                    <div class="dividend-pool-label">You NFT Staked Time</div>
                    <div class="dividend-pool-value text-color">4 Days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-container">
          <el-button class="common-btn2" @click="show = false">Close</el-button>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'nft-stake-dialog',
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
      pubContent: '',
      privateContent: '',
    }
  },
  methods: {
    showDialog() {
      this.show = true
    },
  },
}
</script>

<style lang="scss" scoped>
.nft-stake-dialog {
  background: #1a2027;
  border: 1px solid #2c3638;
  border-radius: 16px 8px 8px 8px;

  .nft-stake-header {
    font-size: 24px;
    font-family: Arial;
    font-weight: bold;
  }

  .nft-stake-content {
    .nft-stake-title {
      margin-top: 58px;
      margin-bottom: 50px;
      font-size: 32px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      text-align: left;
    }

    .stake-header {
      text-align: left;
      font-size: 24px;
      font-family: Arial;
      font-weight: bold;
    }

    .nft-stake-container {
      background: #1a2027;
      border-radius: 6px;
      padding: 30px 20px;

      .nft-stake-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: left;

        .nft-stake-left {
          width: 939px;

          .nft-stake-title {
            font-size: 32px;
            font-family: Source Han Sans CN;
            font-weight: bold;
            line-height: 48px;
          }

          .nft-stake-desc {
            padding-left: 17px;
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            line-height: 30px;
            border-left: 2px solid;
            border-image: linear-gradient(0deg, #50ced5, #46d1af) 1;
            margin-top: 44px;
          }

          .nft-stake-label-sub {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .nft-stake-label-sub-text {
              font-size: 18px;
              font-family: Source Han Sans CN;
              font-weight: bold;
              color: #00f9e5;
              margin-left: 10px;
            }
          }

          .nft-stake-content {
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            line-height: 30px;
            margin: 50px 0;
          }

          .nft-stake-tag {
            display: flex;
            flex-direction: row;
            align-items: center;

            .nft-stake-tag-label {
              font-size: 14px;
              font-family: Source Han Sans CN;
              font-weight: bold;
            }

            .nft-stake-tag-item {
              font-size: 2px;
              line-height: 24px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              height: 24px;
              background: #434d56;
              border-radius: 5px;
              padding: 0 15px;
              min-width: 50px;
              margin-left: 12px;
              text-align: center;
            }
          }
        }

        .nft-stake-right {
          width: 385px;

          .nft-stake-attr-container {
            border: 1px solid #363e3e;
            border-radius: 8px;
            margin-bottom: 30px;
            height: auto;

            .nft-stake-attr-title {
              height: 66px;
              line-height: 66px;
              padding: 0 17px;
              background: #37434d;
              font-size: 13px;
              font-family: Arial;
              font-weight: bold;
              color: #ffffff;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
            }

            .nft-stake-attr-list {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
              padding: 24px 16px 5px 16px;

              .nft-stake-attr-item {
                width: 170px;
                padding: 19px 0;
                background: #1e252d;
                border-radius: 5px;
                margin-bottom: 18px;

                .nft-stake-attr-label {
                  font-size: 14px;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: #88a2b8;
                  margin-left: 12px;
                }

                .nft-stake-attr-value {
                  font-size: 16px;
                  font-family: Source Han Sans CN;
                  font-weight: bold;
                  color: #ffffff;
                  margin-top: 14px;
                  margin-left: 12px;
                }
              }
            }

            .nft-stake-attr-market {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 24px 22px 30px 22px;
              text-align: center;

              .nft-stake-attr-available {
                background: #1e252d;
                border-radius: 8px;
                height: 34px;
                line-height: 34px;
                font-size: 14px;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #acbcc9;
                min-width: 170px;
                text-align: center;
                padding: 0 24px;
                margin-top: 24px;
              }

              .nft-stake-attr-mbd {
                display: flex;
                flex-direction: row;
                align-items: baseline;
                margin-top: 28px;

                .nft-stake-attr-mbd-value {
                  font-size: 36px;
                  font-family: Arial;
                  font-weight: bold;
                }

                .nft-stake-attr-mbd-value {
                  font-size: 14px;
                  font-family: Arial;
                  font-weight: 400;
                  color: #88a2b8;
                }
              }

              .nft-stake-attr-mint {
                margin: 24px 0 13px 0;
                border-radius: 25px;
                font-size: 18px;
                font-family: Arial;
                font-weight: bold;
                color: #4b5760;
                width: 100%;
              }

              .nft-stake-attr-tip {
                font-size: 14px;
                font-family: Arial;
                font-weight: 400;
                color: #88a2b8;
              }
            }

            .nft-stake-dao {
              padding: 23px 16px;

              .dao-title {
                padding: 0 9px;
                font-size: 16px;
                font-family: Arial;
                font-weight: bold;
              }

              .dao-sub {
                padding: 0 9px;
                font-size: 14px;
                font-family: Arial;
                font-weight: 400;
                color: #acbcc9;
                line-height: 20px;
                margin-top: 13px;
              }

              .dao-income-item {
                padding: 0 9px;
                margin-top: 16px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                .dao-income-label {
                  font-size: 14px;
                  font-family: Arial;
                  font-weight: bold;
                  color: #9ab8db;
                }

                .dao-income-value {
                  font-size: 14px;
                  font-family: Arial;
                  font-weight: bold;
                }
              }

              .dao-member {
                padding: 0 14px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                &.dao-member-header {
                  margin-top: 19px;
                  height: 34px;
                  background: #1e252d;

                  .dao-member-left {
                    font-size: 12px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #acbcc9;
                    line-height: 34px;
                  }

                  .dao-member-right {
                    font-size: 12px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #acbcc9;
                    line-height: 34px;
                  }
                }

                &.dao-member-td {
                  height: 46px;

                  .dao-member-left {
                    font-size: 14px;
                    font-family: Arial;
                    font-weight: 400;
                    line-height: 46px;
                  }

                  .dao-member-right {
                    font-size: 14px;
                    font-family: Arial;
                    font-weight: 400;
                    color: #acbcc9;
                    line-height: 46px;
                  }
                }
              }

              .dividend-pool {
                .dividend-pool-item {
                  padding: 19px 7px;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
                  border-bottom: 1px solid #1f262e;

                  &:last-child {
                    border: none;
                  }

                  .dividend-pool-label {
                    font-size: 14px;
                    font-family: Arial;
                    font-weight: bold;
                    color: #9ab8db;
                  }

                  .dividend-pool-value {
                    font-size: 14px;
                    font-family: Arial;
                    font-weight: bold;
                    color: #ffffff;
                  }
                }
              }
            }
          }
        }
      }

      .btn-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 135px;
        margin-bottom: 81px;
        .common-btn2 {
          width: 188px;
        }
      }
    }
  }
}
</style>
