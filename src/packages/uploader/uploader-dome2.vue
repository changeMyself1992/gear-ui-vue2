<template>
  <div class="demo-uploader2">
    <div class="title">基本用法</div>
    <div class="box">
      <gear-uploader class="uploader-custom-1" v-model="fileList1" :previewSize="previewSize1" :maxCount="1" uploadMode="certificatePortrait" :after-read="afterRead1">
        <gear-button type="short" size="small" style="width: 140px; height: 44px; line-height: 44px; font-size: 16px"> 上传人像面 </gear-button>
      </gear-uploader>

      <gear-uploader class="uploader-custom-2" v-model="fileList2" :previewSize="previewSize1" :maxCount="1" uploadMode="certificateEmblem" :after-read="afterRead2">
        <gear-button type="short" size="small" style="width: 140px; height: 44px; line-height: 44px; font-size: 16px"> 上传国徽面 </gear-button>
      </gear-uploader>
    </div>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  name: 'demo-uploader2',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      fileList1: [],
      previewSize1: {
        width: this.px2vw(260),
        height: this.px2vw(164)
      },
      fileList2: []
    };
  },
  mounted() {},
  methods: {
    afterRead1(file) {
      file.status = 'uploading';
      file.message = '上传中...';
      setTimeout(() => {
        file.status = 'done';
        file.message = '';
      }, 500);
    },
    afterRead2(file) {
      file.status = 'uploading';
      file.message = '上传中...';
      setTimeout(() => {
        // file.status = 'failed';
        // file.message = '上传失败';

        file.status = 'done';
        file.message = '';
      }, 500);
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.demo-uploader2 {
  position: relative;
  padding: 10px $padding-sm 0 $padding-sm;
  box-sizing: border-box;
  .title {
    line-height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: #999999;
    margin-bottom: 10px;
  }
  .box {
    width: 100%;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    padding: 46px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
.demo-uploader2 .uploader-custom-1 .gear-uploader__preview {
  margin-right: 0;
  margin-bottom: 20px;
}
.demo-uploader2 .uploader-custom-1 .gear-uploader__upload {
  margin-right: 0;
  margin-bottom: 20px;
}

.demo-uploader2 .uploader-custom-2 .gear-uploader__preview {
  margin-right: 0;
  margin-bottom: 0;
}
.demo-uploader2 .uploader-custom-2 .gear-uploader__upload {
  margin-right: 0;
  margin-bottom: 0;
}
</style>
