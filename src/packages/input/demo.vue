<template>
  <div class="input-demo" clstag="7O0Y|126778">
    <div class="section-title"></div>
    <gear-button @click="buttonClick('/input-card')" class="btn1"> 卡片输入框 </gear-button>
    <gear-button @click="buttonClick('/input-banner')" class="btn1"> 通栏输入框</gear-button>
  </div>
</template>

<script>
export default {
  name: 'demo-input',
  data() {
    return {};
  },
  components: {},
  methods: {
    buttonClick(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/css/demo';
.input-demo {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
