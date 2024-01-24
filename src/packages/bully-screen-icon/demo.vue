<template>
  <div class="demo-grid" clstag="TA4E|126800">
    <div class="section-title"></div>
    <gear-button @click="buttonClick('1')" class="btn1"> 返回顶部 </gear-button>
    <gear-button @click="buttonClick('2')" class="btn1"> 运营图标 </gear-button>
    <gear-button @click="buttonClick('3')" class="btn1"> 广告运营图标 </gear-button>
  </div>
</template>

<script>
export default {
  name: 'demo-grid',
  components: {},
  data() {
    return {};
  },
  methods: {
    buttonClick(type) {
      this.$router.push({
        path: `/bully-screen-icon-dome${type}`,
        query: {}
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.demo-grid {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
}
</style>
