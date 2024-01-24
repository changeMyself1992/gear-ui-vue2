<template>
  <div class="demo-grid" clstag="GB8V|126801">
    <div class="section-title"></div>
    <gear-button @click="buttonClick('1')" class="btn1"> 金刚区样式 </gear-button>
    <gear-button @click="buttonClick('2')" class="btn1"> 卡片样式 </gear-button>
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
        path: `/grid-dome${type}`,
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
