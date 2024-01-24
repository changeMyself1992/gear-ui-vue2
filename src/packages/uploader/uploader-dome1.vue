<template>
  <div class="demo-uploader1">
    <div class="title">基本用法</div>
    <gear-uploader style="margin-bottom: 12px" :after-read="afterRead1" :previewSize="previewSize1" />

    <div class="box">
      <div>
        <div class="title">上传中</div>
        <gear-uploader class="uploader-custom-1" v-model="fileList2" :previewSize="previewSize1" :maxCount="1" />
      </div>
      <div>
        <div class="title">上传完成</div>
        <gear-uploader class="uploader-custom-1" v-model="fileList3" :previewSize="previewSize1" :maxCount="1" />
      </div>
    </div>

    <div class="title">限制上传数量</div>
    <gear-uploader :class="[fileList4.length > 2 ? 'uploader-custom-2' : '']" v-model="fileList4" :after-read="afterRead4" :uploadText="`上传图片\n还可上传${4 - fileList4.length}张`" :maxCount="4" />
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  name: 'demo-uploader1',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      previewSize1: {
        width: this.px2vw(172),
        height: this.px2vw(120)
      },

      fileList2: [
        {
          url: 'https://img01.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...'
        }
      ],
      fileList3: [
        {
          url: 'https://img01.yzcdn.cn/vant/tree.jpg',
          status: 'done'
        }
      ],
      fileList4: []
    };
  },
  mounted() {},
  methods: {
    afterRead1(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    afterRead4(file) {
      file.status = 'uploading';
      file.message = '上传中...';
      setTimeout(() => {
        file.status = 'done';
        file.message = '';

        // 文件读取完毕会给fileList元素增加额外属性content，它是图片得base64,文件预览的时候 content要比url优先级高，如果需要可以delete掉它
        // this.fileList4[this.fileList4.length - 1].url = 'https://img14.360buyimg.com/imagetools/jfs/t1/16473/9/19446/10810/63999398E1a534fbc/00c323f8093b393b.jpg';
        // delete this.fileList4[this.fileList4.length - 1].content;
      }, 500);
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.demo-uploader1 {
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
    display: flex;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    flex-wrap: nowrap;
    margin-bottom: 12px;
  }
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
.demo-uploader1 .uploader-custom-1 .gear-uploader__preview {
  margin-right: 0;
}

.demo-uploader1 .uploader-custom-1 .gear-uploader__upload {
  margin-right: 0;
}

.demo-uploader1 .uploader-custom-2 {
  width: 100%;
}
.demo-uploader1 .uploader-custom-2 .gear-uploader__wrapper {
  justify-content: space-between;
}
.demo-uploader1 .uploader-custom-2 .gear-uploader__wrapper .gear-uploader__preview {
  margin-right: 0;
}
.demo-uploader1 .uploader-custom-2 .gear-uploader__wrapper .gear-uploader__upload {
  margin-right: 0;
}
</style>
