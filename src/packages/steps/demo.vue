<template>
  <div class="demo-steps" clstag="7109|126797">
    <div class="section-title"></div>
    <gear-button @click="buttonClick('1')" class="btn1"> 竖向样式 </gear-button>
    <gear-button @click="buttonClick('2')" class="btn1"> 横向样式 </gear-button>
  </div>
</template>

<script>
export default {
  name: 'demo-steps',
  components: {},
  data() {
    return {};
  },
  methods: {
    buttonClick(type) {
      this.$router.push({
        path: `/steps-dome${type}`,
        query: {}
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.demo-steps {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
}
</style>
