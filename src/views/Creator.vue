<template>
  <div class="creator-container">
    <div class="title-container">
      <span class="text-color title">Collected</span>
      <span class="text-sub-color sub">28</span>
    </div>
    <div class="content">
      <div class="list">
        <div v-for="(item,index) in 20" :key="index" class="item">
          <product-item></product-item>
        </div>
      </div>
      <el-pagination style="width:100%;margin: 20px 0;" background layout="prev,pager,next" next-text="下一页" :page-count="4" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem'
export default {
  name: 'creator-view',
  components: {
    ProductItem,
  },
  data() {
    return {
      subscription: false,
    }
  },
}
</script>
<style lang="scss" scoped>
.creator-container {
  position: relative;
  .title-container {
    text-align: left;
    margin: 60px 0 46px 0;
    display: flex;
    align-items: baseline;

    .title {
      font-size: 36px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      line-height: 26px;
      text-align: left;
    }

    .sub {
      font-size: 14px;
      font-family: Source Han Sans CN;
      margin-left: 9px;
      padding: 4px 8px 3px 8px;
      font-weight: bold;
      background: #1a2027;
      border-radius: 8px;
    }
  }

  .content {
    flex: 1;

    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

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
</style>
