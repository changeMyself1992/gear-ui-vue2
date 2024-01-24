# Uploader 文件上传

用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。

## 引入

```javascript
import Vue from 'vue'
import Uploader from '@ueip/gear-vue/lib/uploader'
import '@ueip/gear-vue/lib/uploader/index.css'
Vue.use(Uploader)
```

## vue用法

### 普通图片

```javascript
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

```

### 证件图片

```javascript
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

```

## uploader(Props)

| 字段               | 说明                                                                                                                                                                                                             | 类型             | 默认值                   | 是否必要 |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|--------------------------|---------|
| disabled           | 是否禁用文件上传                                                                                                                                                                                                 | boolean          | false                    | 否       |
| readonly           | 是否将上传区域设置为只读状态                                                                                                                                                                                     | boolean          | false                    | 否       |
| uploadText         | 上传区域文字提示                                                                                                                                                                                                 | boolean          | false                    | 否       |
| uploadMode         | certificatePortrait  证件人像模式  certificateEmblem 证件国徽模式  other其他模式                                                                                                                                 | string           | other                    | 否       |
| afterRead          | 文件读取完成后的回调函数                                                                                                                                                                                         | Function         | undefined                | 否       |
| before-read        | 文件读取前的回调函数，返回 false 可终止文件读取，支持返回 Promise                                                                                                                                                  | Function         | undefined                | 否       |
| beforeDelete       | 文件删除前的回调函数，返回 false 可终止文件读取，支持返回 Promise                                                                                                                                                  | Function         | undefined                | 否       |
| previewSize        | 预览图和上传区域的尺寸(宽和高默认82px)，默认单位为 px                                                                                                                                                             | Object           | {width:null,height:null} | 否       |
| name               | 标识符，可以在回调函数的第二项参数中获取                                                                                                                                                                          | number\|string   | 空字符串                 | 否       |
| accept             | 允许上传的文件类型，<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B" target="_blank">详细说明</a> | string           | image/*                  | 否       |
| v-model (fileList) | 已上传的文件列表                                                                                                                                                                                                 | FileListItem[]   | []                       | 否       |
| maxSize            | 文件大小限制，单位为 byte                                                                                                                                                                                         | number \| string | Number.MAX_VALUE         | 否       |
| maxCount           | 文件上传数量限制                                                                                                                                                                                                 | number \| string | Number.MAX_VALUE         | 否       |
| previewFullImage   | 是否在点击预览图后展示全屏图片预览                                                                                                                                                                               | boolean          | true                     | 否       |
| image-fit          | 图片填充模式，object-fit 去查css文档                                                                                                                                                                              | string           | 空                       | 否       |

## FileListItem

| 字段    | 说明                                | 类型   | 是否必要 |   |
|---------|-----------------------------------|--------|---------|---|
| url     | 要预览的图片地址                    | string | 否       |   |
| status  | uploading上传中，done结束，failed失败 | string | 否       |   |
| message | 状态描述                            | string | 否       |   |

## Events

| 事件名       | 说明                   | 回调参数                                    |
|--------------|----------------------|---------------------------------------------|
| oversize     | 文件大小超过限制时触发 | 1.超出大小的文件对象数组。2.文件上传组件详情 |
| click-upload | 点击上传区域时触发     | event: MouseEvent                           |