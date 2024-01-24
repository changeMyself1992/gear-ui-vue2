<template>
  <div class="demo-uploader" clstag="DW0E|126777">
    <div class="section-title"></div>
    <gear-button @click="buttonClick('1')" class="btn1"> 普通图片 </gear-button>
    <gear-button @click="buttonClick('2')" class="btn1"> 证件图片 </gear-button>
  </div>
</template>

<script>
export default {
  name: 'demo-uploader',
  components: {},
  data() {
    return {};
  },
  methods: {
    buttonClick(type) {
      this.$router.push({
        path: `/uploader-dome${type}`,
        query: {}
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.demo-uploader {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
}
</style>
