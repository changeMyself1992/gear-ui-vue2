<!--  -->
<template>
  <div class="no-btn">
    <div class="empty-box bg1">
      <gear-empty :description="['可配置的文案']" :btnList="btnList5" image="https://img14.360buyimg.com/imagetools/jfs/t1/43690/31/17946/1771/62e8d106E15311a06/75be0b37a607afcf.png"></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      btnList5: []
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
.no-btn {
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
