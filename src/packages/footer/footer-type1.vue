<template>
  <div class="footer-type1">
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
      <gear-footer title="https://img12.360buyimg.com/imagetools/jfs/t1/75114/27/19791/5354/62b01560E0ac6f215/afafea728e95042f.png" :optison="optison" :descs="descs" />
    </div>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      box1height: 0,
      optison: [
        {
          id: 1,
          icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/3249/29/18540/988/62b01812E54f81656/fcc0995e1b132f6f.png',
          title: '灵活取',
          desc: '大额转出秒到账'
        },
        {
          id: 2,
          icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/17230/27/17447/1019/62b01812Ede71e2cc/971658d7f2739e30.png',
          title: '优惠购',
          desc: '商城购物有优惠'
        },
        {
          id: 3,
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/191510/15/25506/1999/62b0180fEda501ed0/6ed1002a279466ac.png',
          title: '还白条',
          desc: '白条还款超便捷'
        }
      ],
      descs: ['由京东肯特瑞基金销售公司提供服务', '过往业绩不预示未来表现，市场有风险，投资需谨慎']
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
.footer-type1 {
  margin: 0;
  padding: 0 $padding-sm;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;

  .box-1 {
    width: 100%;
    // height: 228px;
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
