<!--  -->
<template>
  <div class="no-comment">
    <div class="empty-box bg1">
      <gear-empty image="noComment" :description="['还没有评论']" :btnList="btnList1"></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      btnList1: [
        {
          id: 0,
          type: 'white-normal',
          btnLabel: '去评论',
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
.no-comment {
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
  .bg1 {
    background-color: #f4f5f7;
  }
}
</style>
