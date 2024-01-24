<!--  -->
<template>
  <div class="one-btn">
    <div class="empty-box bg2 padding-top45">
      <gear-empty image="https://img14.360buyimg.com/imagetools/jfs/t1/43690/31/17946/1771/62e8d106E15311a06/75be0b37a607afcf.png" :description="['可配置的文案']" :btnList="btnList7"></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      btnList7: [
        {
          id: 0,
          type: 'white-normal',
          btnLabel: '按钮',
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
.one-btn {
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
