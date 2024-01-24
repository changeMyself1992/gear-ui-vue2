<!--  -->
<template>
  <div class="default">
    <div class="empty-box bg1">
      <gear-empty image="default" @click="handleClick"></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {};
  },
  props: {},
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleClick() {
      this.$toast('测试按钮点击');
    }
  }
};
</script>

<style lang='scss' scoped>
.default {
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
