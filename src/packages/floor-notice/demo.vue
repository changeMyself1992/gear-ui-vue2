<template>
  <div class="demo-floorNotice" clstag="0EOW|140422">
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
