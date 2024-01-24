<template>
  <div class="bully-screen-icon-demo1">
    <div v-for="index in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]" :key="`box-2-${index}`" class="box-2">
      <div class="banner-1"></div>
      <div class="banner-2"></div>
    </div>
    <gear-bully-screen-icon type="backTop" :paddingRight="px2vw(12)" @goodsClick="handleGoodsClick" />
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    handleGoodsClick() {
      // this.$toast('回到顶部点击');
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.bully-screen-icon-demo1 {
  margin: 0;
  padding: 10px $padding-sm 0 $padding-sm;

  display: flex;
  flex-direction: column;
  align-items: center;

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
}
</style>
