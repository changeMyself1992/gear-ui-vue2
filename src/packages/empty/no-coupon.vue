<!--  -->
<template>
  <div class="no-coupon">
    <div class="empty-box bg2">
      <gear-empty image="noCoupon" :description="['还没有优惠券']" :btnList="btnList4"></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      btnList4: [
        {
          id: 0,
          type: 'white-normal',
          btnLabel: '去领取',
          handleClick: () => {
            this.$toast('测试按钮点击');
          }
        }
      ]
    };
  },
  props: {},
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.no-coupon {
  padding: 0;
  overflow-x: hidden;
  .des {
    position: absolute;
    left: 0;
    top: 0;
  }
  .empty-box {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .bg2 {
    background-color: #f4f5f7;
  }
}
</style>
