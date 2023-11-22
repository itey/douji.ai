<template>
  <div class="footer-container">
    <div style="width: 230px;">
      <img style="width: 120px; height: 27px;cursor: pointer;" src="@/assets/logo.png" />
      <div class="label1 text-color" style="margin: 19px 0 15px 0;">AIGC & Web3 Digital Content Creator Economlc Ecology</div>
      <div class="label2 text-color">Copyright @ 2023 ALL Rights Roserved.</div>
    </div>
    <div class="footer-column">
      <div class="title text-color">Video</div>
      <el-menu>
        <el-menu-item>About</el-menu-item>
        <el-menu-item>Contact</el-menu-item>
        <el-menu-item>Advertise</el-menu-item>
        <el-menu-item>Creator Editiorral Policics</el-menu-item>
        <el-menu-item>Report content</el-menu-item>
        <el-menu-item>Freelance contribtors</el-menu-item>
      </el-menu>
    </div>
    <div class="footer-column">
      <div class="title text-color">Legal</div>
      <el-menu>
        <el-menu-item>About</el-menu-item>
        <el-menu-item>Contact</el-menu-item>
        <el-menu-item>Advertise</el-menu-item>
        <el-menu-item>Creator Editiorral Policics</el-menu-item>
        <el-menu-item>Report content</el-menu-item>
        <el-menu-item>Freelance contribtors</el-menu-item>
      </el-menu>
    </div>
    <div class="footer-column">
      <div class="title text-color">About us</div>
      <el-menu>
        <el-menu-item>About</el-menu-item>
        <el-menu-item>Contact</el-menu-item>
        <el-menu-item>Advertise</el-menu-item>
        <el-menu-item>Creator Editiorral Policics</el-menu-item>
        <el-menu-item>Report content</el-menu-item>
        <el-menu-item>Freelance contribtors</el-menu-item>
      </el-menu>
    </div>
    <div>
      <div>
        <div class="title text-color">Follow us</div>
        <div class="follow-ico">
          <img src="@/assets/images/twitter.png" alt />
          <img src="@/assets/images/youtube.png" alt />
          <img src="@/assets/images/github.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'nav-footer',
  components: {},

  methods: {},
}
</script>

<style lang="scss">
.footer-container {
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 57px 0 63px 0;

  .title {
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #ffffff;
    line-height: 32px;
    margin-bottom: 10px;
    padding-left: 15px;
  }

  .label1 {
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #ffffff;
    line-height: 20px;
  }

  .label2 {
    font-size: 12px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    line-height: 32px;
  }
}

.el-menu-item {
  height: auto;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  text-align: left;
}

.footer-column .el-menu-item {
  height: 33px !important;
  line-height: 33px !important;
}

.follow-ico {
  padding-left: 15px;
  img {
    cursor: pointer;
    margin-right: 10px;
    height: 24px;
    width: 24px;
  }
}
</style>
