<template>
  <div class="market-container">
    <el-breadcrumb style="margin-top: 38px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item>Marketplace</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title-container">
      <span class="text-color title">ALL DOUJI NFTs</span>
      <span class="text-sub-color sub">28,308 result</span>
    </div>
    <div class="search-container">
      <el-select v-model="typeValue" @change="onTypeChange" clearable filterable placeholder="ALL Types">
        <el-option class="select-time" v-for="item in typeOptions" :key="item.value" :label="$i18n.locale == 'en' ? item.e_name : item.c_name" :value="item.e_name"></el-option>
      </el-select>
      <el-select v-model="categoryValue" @change="onCategoryChange" clearable filterable placeholder="ALL Category">
        <el-option class="select-time" v-for="item in categoryOptions" :key="item.value" :label="$i18n.locale == 'en' ? item.e_name : item.c_name" :value="item.e_name"></el-option>
      </el-select>
      <el-select v-model="platformValue" clearable filterable placeholder="ALL Platform">
        <el-option class="select-time" v-for="item in platformOptions" :key="item.value" :label="$i18n.locale == 'en' ? item.e_name : item.c_name" :value="item.e_name"></el-option>
      </el-select>
      <el-select v-model="viewedValue" clearable filterable placeholder="Most viewed">
        <el-option class="select-time" v-for="item in viewedOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-input style="width: 344px;" placeholder="Search by name or Token ID">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="content" v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.8)">
      <div class="list">
        <div v-for="(item,index) in list" :key="index" class="item">
          <product-item :item="item"></product-item>
        </div>
      </div>
      <el-pagination
        @current-change="onPageChange"
        style="width:100%;margin: 20px 0;"
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="totalCount"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem'
import {
  getNftCategoriesByType,
  getNftPlatformsByType,
  getNftTypes,
  nftListPage,
} from '@/utils/http'
export default {
  name: 'market-view',
  components: {
    ProductItem,
  },
  data() {
    return {
      loading: false,
      typeOptions: [],
      typeValue: '',
      categoryOptions: [],
      categoryValue: '',
      platformOptions: [],
      platformValue: '',
      viewedOptions: [
        {
          value: 'Late creation time',
          label: 'Late creation time',
        },
        {
          value: 'Early creation time',
          label: 'Early creation time',
        },
        {
          value: 'High price',
          label: 'High price',
        },
        {
          value: 'Low price',
          label: 'Low price',
        },
      ],
      viewedValue: 'Late creation time',
      list: [],
      pageNo: 1,
      pageSize: 20,
      totalCount: 0,
    }
  },
  created() {
    this.$route.query.type && (this.typeValue = this.$route.query.type)
    this.$route.query.category && (this.categoryValue = this.$route.query.category)
    this.$route.query.platform && (this.platformValue = this.$route.query.platform)
    this.loadTypeList()
    this.loadPageList()
  },
  methods: {
    /** 页码变化 */
    onPageChange(page) {
      this.pageNo = page
      this.loadPageList()
    },
    /** 列表加载 */
    loadPageList() {
      const param = {
        page: this.pageNo,
        content_type: this.typeValue,
        category: this.categoryValue,
        pltform: this.platformValue,
      }
      this.loading = true
      nftListPage(param)
        .then((r) => {
          if (r.code == 1) {
            this.list = r.data.list
            this.totalCount = r.data.pageCount
            this.pageNo = r.data.page
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    /** 分类变化 */
    onTypeChange(value) {
      this.categoryOptions = []
      this.platformOptions = []
      this.loadCategoryList(value)
      this.loadPlatformList(value)
      this.categoryValue = ''
      this.pageNo = 1
      this.loadPageList()
    },
    /** 获取分类 */
    loadTypeList() {
      getNftTypes()
        .then((r) => {
          if (r.code == 1) {
            this.typeOptions = r.data.list
          } else {
            this.$toast.error(r.message)
          }
        })
        .catch((e) => {
          console.log(e)
          this.$toast.error(this.$t('common.network_error'))
        })
    },
    /** 加载类别 */
    loadCategoryList(type) {
      if (type) {
        getNftCategoriesByType(type)
          .then((r) => {
            if (r.code == 1) {
              this.categoryOptions = r.data.list
            } else {
              this.$toast.error(r.message)
            }
          })
          .catch((e) => {
            console.log(e)
            this.$toast.error(this.$t('common.network_error'))
          })
      }
    },
    /** 获取平台 */
    loadPlatformList(type) {
      getNftPlatformsByType(type)
        .then((r) => {
          if (r.code == 1) {
            this.platformOptions = r.data.list
          } else {
            this.$toast.error(r.message)
          }
        })
        .catch((e) => {
          console.log(e)
          this.$toast.error(this.$t('common.network_error'))
        })
    },
    /** 类型发生变化 */
    onCategoryChange(value) {
      this.platformOptions = []
      this.loadPlatformList(value)
      this.pageNo = 1
      this.loadPageList()
    },
  },
}
</script>
<style lang="scss" scoped>
.market-container {
  .title-container {
    text-align: left;
    margin: 35px 0;
    display: flex;
    align-items: baseline;

    .title {
      font-size: 36px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      line-height: 36px;
      text-align: left;
    }

    .sub {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #99b5c4;
      line-height: 12px;
      margin-left: 10px;
    }
  }

  .search-container {
    height: 72px;
    background: #1a2027;
    border-radius: 8px;
    padding: 15px 16px;
    margin: 21px 0 19px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .content {
    flex: 1;

    .list {
      width: 1440px;
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;

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

.select-time {
  font-size: 14px;
}
.select-time:hover {
  color: #17e7d6;
}
</style>

