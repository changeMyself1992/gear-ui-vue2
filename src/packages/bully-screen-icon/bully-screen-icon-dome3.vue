<template>
  <div class="bully-screen-icon-demo2">
    <div class="box-3"></div>
    <div v-for="index in [1, 2, 3, 4, 5, 6, 7]" :key="`box-2-${index}`" class="box-2">
      <div class="banner-1"></div>
      <div class="banner-2"></div>
    </div>
    <gear-bully-screen-icon
      imgStr="https://img10.360buyimg.com/imagetools/jfs/t1/206760/37/32080/19300/6436828aF7cb1fcce/2f27c36852a8ed5b.png"
      @closeClick="handleClose"
      @goodsClick="handleGoodsClick"
      type="advertOperationIcon"
    />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    handleClose() {},
    handleGoodsClick() {
      this.$toast('图片点击');
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.bully-screen-icon-demo2 {
  margin: 0;
  padding: 0 $padding-sm;

  display: flex;
  flex-direction: column;
  align-items: center;

  .box-3 {
    border-radius: 4px;
    width: 100%;
    height: 356px;
    background-color: #fff;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .box-2 {
    width: 100%;
    height: 70px;
    background: white;
    border-radius: 4px;
    padding-left: $padding-sm;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 10px;
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
}
</style>
