<template>
  <div class="container">
    <div class="top">
      <div>
        <span class="text-big text-color">{{ $t("user.my_nft") }}</span>
        <span class="sub-value"
          >{{ list.length | toLocalString }} {{ $t("user.items") }}</span
        >
      </div>
      <div class="search">
        <el-input
          v-model="searchValue"
          @keyup.native.enter="onSearch"
          @blur="closeSearch"
          :placeholder="$t('user.search_tip')"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <div class="content">
      <div class="list">
        <div v-for="(item, index) in list" :key="index" class="item">
          <ProductItem :item="item" />
        </div>
      </div>
      <el-pagination
        @current-change="onPageChange"
        style="width: 100%; margin: 20px 0"
        background
        layout="prev,pager,next"
        :page-size="20"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";
import { getMyNftList } from "@/utils/http";
export default {
  name: "nft-view",
  components: {
    ProductItem,
  },
  data() {
    return {
      list: [],
      searchValue: undefined,
      total: 0,
      pageNo: 1,
    };
  },
  created() {
    this.nftListLoad();
  },
  methods: {
    onPageChange() {
      this.nftListLoad();
    },
    /** 回车搜索 */
    onSearch() {
      this.nftListLoad();
    },
    closeSearch(val) {
      if (!val.target.value) {
        this.nftListLoad();
      }
    },
    /** 加载数据 */
    nftListLoad() {
      var loadingInstance = this.$loading({
        background: "rgba(0, 0, 0, 0.8)",
      });
      var param = {
        page: this.pageNo,
      };
      this.searchValue && (param.keyW = this.searchValue);
      getMyNftList(param)
        .then((r) => {
          if (r.code == 1) {
            this.list = r.data.list;
            this.total = r.data.pageCount;
          }
        })
        .catch((e) => {
          this.$toast.error(e.message);
        })
        .finally(() => {
          loadingInstance.close();
        });
    },
  },
};
</script>

<style lang="scss">
.container {
  padding: 0 50px;
  display: flex;
  flex-direction: column;

  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px 0;

    .text-big {
      font-size: 32px;
      line-height: 32px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      margin-bottom: auto;
    }

    .sub-value {
      line-height: 40px;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #a9b7c3;
      margin-left: 10px;
    }
  }

  .content {
    flex: 1;
    padding-bottom: 50px;

    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .item {
        width: calc((100% - 39px) / 4);
        margin: 0 13px 13px 0;

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
}
.search .el-input__inner {
  width: 284px;
}
</style>
