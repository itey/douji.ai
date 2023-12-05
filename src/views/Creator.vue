<template>
  <div class="creator-container">
    <div class="list-container">
      <div class="title-container">
        <span class="text-color title">{{ $t("creator.collect") }}</span>
        <span class="text-sub-color sub">{{ total }}</span>
      </div>
      <div
        class="content"
        v-loading="loading"
        :element-loading-background="$store.state.common.theme | maskByTheme"
      >
        <div class="list">
          <div v-for="(item, index) in list" :key="index" class="item">
            <product-item :item="item"></product-item>
          </div>
        </div>
        <el-pagination
          v-if="!loading"
          @current-change="onPageChange"
          style="width: 100%; margin: 20px 0"
          background
          layout="prev,pager,next"
          :page-count="20"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";
import { getUserNftList } from "@/utils/http";
export default {
  name: "creator-view",
  data() {
    return {
      address: undefined,
      userInfo: {},
      list: [],
      total: 0,
      page: 1,
      loading: false,
    };
  },
  components: {
    ProductItem,
  },
  created() {
    this.address = this.$route.query.address;
    this.userNftList();
  },
  methods: {
    onPageChange() {
      this.userNftList();
    },
    /** 查询用户的NFT列表  */
    userNftList() {
      if (!this.address) {
        return;
      }
      this.loading = true;
      getUserNftList(this.page, this.address)
        .then((r) => {
          if (r.code == 1) {
            this.list = r.data.list;
            this.total = r.data.pageCount;
          } else {
            this.$toast.error(r.message);
          }
        })
        .catch((e) => {
          this.$toast.error(e.message ? e.message : e);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.creator-container {
  padding: 37px 0 32px 0;
  align-items: center;
  justify-content: center;

  .list-container {
    position: relative;

    .title-container {
      text-align: left;
      margin: 23px 0 46px 0;
      display: flex;
      align-items: end;

      .title {
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        line-height: 26px;
        text-align: left;
      }

      .sub {
        height: 18px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        margin-left: 9px;
        padding: 1px 8px 1px 8px;
        font-weight: bold;
        border-radius: 8px;
      }
    }

    .content {
      flex: 1;

      .list {
        display: flex;
        flex-wrap: wrap;

        .item {
          width: 342px;
          margin: 0 24px 24px 0;

          &:nth-child(4n) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
