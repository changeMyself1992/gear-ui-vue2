<!--  -->
<template>
  <div class="no-goods">
    <div class="empty-box bg2">
      <gear-empty image="noGoods" :description="['还没有收藏的商品']" :btnList="btnList6"></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      btnList6: [
        {
          id: 0,
          type: 'white-normal',
          btnLabel: '去浏览',
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
.no-goods {
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
