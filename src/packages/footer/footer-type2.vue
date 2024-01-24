<template>
  <div class="footer-type2">
    <div ref="box-1" class="box-1" :style="`height: ${box1height}px`"></div>
    <div ref="box-2" class="box-2">
      <div class="banner-1"></div>
      <div class="banner-2"></div>
    </div>
    <div class="box-2">
      <div class="banner-1"></div>
      <div class="banner-2"></div>
    </div>
    <div class="box-2">
      <div class="banner-1"></div>
      <div class="banner-2"></div>
    </div>
    <div ref="footr" class="footr">
      <gear-footer title="https://img13.360buyimg.com/imagetools/jfs/t1/16514/4/17212/6497/62b02b54Edbe1cead/8f3a5d342d23c9d3.png" :descs="descs" style="width: 240px" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      box1height: 0,
      descs: ['话费充值、流量充值由京东金融提供平台服务发票开具请优先联系运营商处理']
    };
  },
  computed: {},
  mounted() {
    // 所有footer都想看一半，其他让它去滚动看全，设计的要求......
    let { marginTop } = window.getComputedStyle(this.$refs.footr);
    marginTop = parseInt(marginTop.replace('px', ''));
    console.log('要展示的footer高度::', this.$refs.footr.clientHeight / 2 + marginTop);

    let { marginBottom } = window.getComputedStyle(this.$refs['box-2']);
    marginBottom = parseInt(marginBottom.replace('px', ''));
    console.log('要展示的小块盒子总高度::', (this.$refs['box-2'].clientHeight + marginBottom) * 3);

    let { marginBottom: marginBottom1, marginTop: marginTop1 } = window.getComputedStyle(this.$refs['box-1']);
    marginBottom1 = parseInt(marginBottom1.replace('px', ''));
    marginTop1 = parseInt(marginTop1.replace('px', ''));
    console.log('box-1的下边距', marginBottom1);
    console.log('box-1的上边距', marginTop1);

    this.box1height = window.innerHeight - (this.$refs.footr.clientHeight / 2 + marginTop + (this.$refs['box-2'].clientHeight + marginBottom) * 3 + marginBottom1 + marginTop1);
  },
  methods: {}
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.footer-type2 {
  margin: 0;
  padding: 0 $padding-sm;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;

  .box-1 {
    width: 100%;
    // height: 313px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    margin: 10px 0 10px 0;
  }
  .box-2 {
    width: 100%;
    height: 70px;
    background: white;
    border-radius: 4px;
    padding-left: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 10px;
    box-sizing: border-box;
    .banner-1 {
      width: 140px;
      height: 16px;
      background: rgba(244, 245, 247, 1);
    }
    .banner-2 {
      width: 100px;
      height: 16px;
      background: rgba(244, 245, 247, 1);
    }
  }
  .footr {
    margin: 18px 0 40px 0;
    width: 100%;
  }
}
</style>
