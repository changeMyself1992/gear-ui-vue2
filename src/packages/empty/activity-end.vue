<!--  -->
<template>
  <div class="activity-end">
    <div class="empty-box bg2">
      <gear-empty image="activityEnd" :description="['活动结束啦']" :btnList="btnList5"></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      btnList5: [
        {
          id: 0,
          type: 'white-normal',
          btnLabel: '看其他活动',
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
.activity-end {
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
