<template>
  <div class="create-step2">
    <div class="title">{{edit?'Step 2 Update Content':'Step 2 Wrete Content'}}</div>
    <div class="form-container">
      <div class="form-item">
        <div class="form-label">Title</div>
        <div class="form-value">
          <div>
            <el-input v-model="form.title" class="input"></el-input>
          </div>
          <div class="tip">Name of your content name</div>
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">Description</div>
        <div class="form-value">
          <div>
            <el-input v-model="form.description" class="input" type="textarea" rows="3"></el-input>
          </div>
          <div class="tip">Write some details about your content</div>
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">Cover Image</div>
        <div class="form-value">
          <div>
            <el-upload :limit="1" class="form-upload" :on-change="fileChange" :auto-upload="false" :action="upload.action" :headers="upload.headers">
              <div slot="default">
                <div class="form-upload-icon">+</div>
                <div class="form-upload-tip">Upload image,support png,gif,jpg,jpeg,webp files</div>
              </div>
              <div slot="file" slot-scope="{file}">
                <img class="file-img" :src="file.url" />
              </div>
            </el-upload>
          </div>
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">Keyword</div>
        <div class="form-value">
          <div>
            <el-input class="input"></el-input>
          </div>
          <div class="tip">Write some keywords about your content</div>
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">
          <div>Article content</div>
          <div class="form-label-sub">
            <img style="width: 14px;height: 14px;" src="@/assets/images/create/website.png" />
            <div class="form-label-sub-text">Open to Access</div>
          </div>
        </div>
        <div class="form-value">
          <div style="width: 544px;">
            <v-md-editor v-model="markContentPub"></v-md-editor>
          </div>
          <div class="tip">Write some details about your content</div>
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">
          <div>Article content</div>
          <div class="form-label-sub">
            <img style="width: 14px;height: 14px;" src="@/assets/images/create/protect.png" />
            <div class="form-label-sub-text">Protected</div>
          </div>
        </div>
        <div class="form-value">
          <div style="width: 544px;">
            <v-md-editor v-model="markContentPrivate"></v-md-editor>
          </div>
          <div class="tip">Write some details about your content</div>
        </div>
      </div>
      <div class="btn-container">
        <el-button class="common-btn2" @click="backClick">Back</el-button>
        <el-button class="common-btn2" @click="saveClick">Save</el-button>
        <el-button class="common-btn2" @click="nextClick">Next</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create-step2',
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
    metadata: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      markContentPub: undefined,
      markContentPrivate: undefined,
      imageUrl: undefined,
      upload: {
        action: process.env.VUE_APP_BASE_URL + '/uploadFile',
        headers: {
          token: this.$store.state.user.token,
        },
      },
      form: {
        title: undefined,
        image: undefined,
        description: undefined,
        keyword: undefined,
        openContent: undefined,
        protectedContent: undefined,
      },
    }
  },
  methods: {
    fileChange(file) {
      console.log(file)
    },
    backClick() {
      this.$emit('backClick')
    },
    saveClick() {
      this.$emit('saveClick')
    },
    nextClick() {
      this.$emit('nextClick')
    },
  },
}
</script>

<style lang="scss" scoped>
.create-step2 {
  .title {
    margin-top: 63px;
    margin-bottom: 12px;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #ffffff;
    text-align: left;
  }

  .form-container {
    background: #1a2027;
    border-radius: 6px;
    padding: 58px 0 58px 163px;

    .form-item {
      display: flex;
      flex-direction: row;
      margin-top: 41px;

      .form-label {
        width: 129px;
        line-height: 35px;
        font-size: 13px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #9faec0;
        text-align: left;
      }

      .form-label-sub {
        display: flex;
        flex-direction: row;
        align-items: center;

        .form-label-sub-text {
          margin-left: 6px;
          font-size: 10px;
          font-family: Arial;
          font-weight: 400;
          color: #00f9e5;
        }
      }

      .form-value {
        text-align: left;

        .form-upload {
          width: 361px;
          height: 131px;
          background: #0e161d;
          border: 1px solid #313838;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;

          .form-upload-icon {
            font-size: 35px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #707d8c;
          }

          .form-upload-tip {
            font-size: 9px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #707d8c;
            margin-top: 12px;
          }
        }

        .tip {
          margin-top: 12px;
          font-size: 9px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #707d8c;
        }

        .input {
          width: 544px;
        }
      }
    }

    .btn-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 73px;
      padding-right: 163px;

      .common-btn2 {
        margin-right: 59px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
