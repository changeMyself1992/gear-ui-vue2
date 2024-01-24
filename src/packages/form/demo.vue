<template>
  <div class="demo-form" clstag="N4G5|126806">
    <div class="section-title"></div>
    <gear-button @click="buttonClick('card')" class="btn1"> 卡片表单 </gear-button>
    <gear-button @click="buttonClick('banner')" class="btn1"> 通栏表单 </gear-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    buttonClick(type) {
      if (type === 'card') {
        this.$router.push({
          path: '/form-card'
        });
      }
      if (type === 'banner') {
        this.$router.push({
          path: '/form-banner'
        });
      }
    }
  }
};
</script>
<style lang="scss">
@import '../../assets/css/demo';
.demo-form {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
