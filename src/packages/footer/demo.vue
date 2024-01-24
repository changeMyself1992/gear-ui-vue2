<template>
  <div class="footer-demo" clstag="E6PM|126794">
    <div class="section-title"></div>
    <gear-button @click="buttonClick('/footer-type1')" class="btn1"> 品牌+业务利益点+业务说明 </gear-button>
    <gear-button @click="buttonClick('/footer-type2')" class="btn1"> 品牌+业务说明 </gear-button>
    <gear-button @click="buttonClick('/footer-type3')" class="btn1"> 品牌 A </gear-button>
    <gear-button @click="buttonClick('/footer-type4')" class="btn1"> 品牌 B </gear-button>
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
.footer-demo {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
