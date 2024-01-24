<template>
  <div class="network">
    <div class="empty-box bg2">
      <gear-empty image="network" :description="['没有连接到网络']" :btnList="btnList2"></gear-empty>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnList2: [
        {
          id: 0,
          type: 'white-normal',
          btnLabel: '刷新试试',
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
.network {
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
  .padding-top45 {
    padding-top: 45px;
  }
}
</style>
