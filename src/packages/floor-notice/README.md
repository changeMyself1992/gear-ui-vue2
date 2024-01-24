# 楼层公告

位于页面楼层中间，提示系统公告或产品信息。

## 引入

```javascript
import Vue from 'vue'
import FloorNotice from '@ueip/gear-vue/lib/floor-notice'
import '@ueip/gear-vue/lib/floor-notice/index.css'
Vue.use(FloorNotice)
```

## vue用法

```javascript
<template>
  <div class="demo-floorNotice" clstag="8TAB|126798">
    <div class="title">上下整个公告滚动样式</div>
    <gear-floor-notice @iconClick="iconClick0" :vertical="true" :noticeObjArray="noticeObjArray0" />

    <div class="title">副标题左右滚动样式</div>
    <div v-show="show">
      <gear-floor-notice @iconClick="iconClick1" :noticeObjArray="noticeObjArray1" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-floorNotice',
  data() {
    return {
      noticeObjArray0: [],
      noticeObjArray1: [],
      show: false
    };
  },
  components: {},
  mounted() {
    setTimeout(() => {
      this.noticeObjArray0 = [
        {
          leftImgSrc: 'https://img14.360buyimg.com/imagetools/jfs/t1/84945/20/33282/2627/647d92f6Fd522fb60/ef06af2f6490dc36.png',
          title: '安全公告',
          content: '切勿向陌生人转账汇款！！！',
          dot: true,
          link: true
        },
        {
          leftImgSrc: 'https://img14.360buyimg.com/imagetools/jfs/t1/84945/20/33282/2627/647d92f6Fd522fb60/ef06af2f6490dc36.png',
          title: '积分还白条抵现',
          content: '这里是一个很长的公告，触发了滚动样式',
          dot: true,
          link: true
        },
        {
          leftImgSrc: 'https://img14.360buyimg.com/imagetools/jfs/t1/84945/20/33282/2627/647d92f6Fd522fb60/ef06af2f6490dc36.png',
          title: '重要通知',
          content: '金融组件库新版本发布，速来体验！',
          dot: true,
          link: true
        }
      ];
    }, 500);

    setTimeout(() => {
      this.noticeObjArray1 = [
        {
          leftImgSrc: 'https://img14.360buyimg.com/imagetools/jfs/t1/84945/20/33282/2627/647d92f6Fd522fb60/ef06af2f6490dc36.png',
          title: '积分还白条抵现',
          content: '这里是一个很长的公告，触发了滚动样式',
          dot: true,
          link: true
        }
      ];
      this.show = true;
    }, 1000);
    setTimeout(() => {
      this.noticeObjArray1[0].content = '我要动态的改这个公告内容，公告内容发生改变要重置滚动逻辑';
    }, 6000);
  },
  methods: {
    iconClick0(index) {
      this.$toast(`跳转图标${index}点击`);
      this.noticeObjArray0[index].dot = false;
    },
    iconClick1(index) {
      this.noticeObjArray1[0].dot = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-floorNotice {
  padding: 0 12px;
  .title {
    width: 100%;
    line-height: 20px;
    padding: 10px 0;

    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: rgba(153, 153, 153, 1);
  }
}
</style>

```

## Props

| 字段                           | 说明                                                  | 类型             | 默认值   | 是否必要 |
| ---------------------------- | --------------------------------------------------- | -------------- | ----- | ---- |
| vertical                     | 是否为纵向滚动                                             | Boolean        | false | 否    |
| noticeObjArray               | 通知栏内容对象数组                                           | Array          | []    | 是    |
| noticeObjArray[i].leftImgSrc | 左边图标链接                                              | string         |       | 否    |
| noticeObjArray[i].title      | 标题                                                  | string         |       | 否    |
| noticeObjArray[i].content    | 文案内容                                                | string         |       | 否    |
| noticeObjArray[i].dot        | 是否展示小红点                                             | Boolean        |       | 否    |
| noticeObjArray[i].link       | 是否展示右边箭头                                            | Boolean        |       | 否    |
| horizontalSpeed              | 横向滚动速度，滚动速率 (px/s)，默认值为0不填的时候会根据视口自动计算滚动速率，10秒滚动完一屏 | Number, String | 0     | 否    |
| horizontalDelay              | 第一次横向滚动 动画延迟时间/毫秒                                   | Number         | 2000  | 否    |

## Events

| 事件名       | 说明        | 回调参数 |
| --------- | --------- | ---- |
| iconClick | 通知栏图标点击回调 | 索引值  |