<template>
  <div class="demo-indexBar" clstag="Y7PT|126781">
    <div class="section-title"></div>
    <gear-button @click="buttonClick('1')" class="btn1"> 基础用法 </gear-button>
    <gear-button @click="buttonClick('2')" class="btn1"> 自定义索引列表 </gear-button>
  </div>
</template>

<script>
export default {
  name: 'demo-indexBar',
  components: {},
  data() {
    return {};
  },
  methods: {
    buttonClick(type) {
      this.$router.push({
        path: `/indexBar-dome${type}`,
        query: {}
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.demo-indexBar {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
}
</style>
