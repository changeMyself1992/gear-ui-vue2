<template>
  <div class="pull-refresh-home" clstag="WA54|126790">
    <div class="section-title"></div>
    <gear-button @click="buttonClick(0)" class="btn1"> 深色背景 </gear-button>
    <gear-button class="btn1" @click="buttonClick(1)"> 浅色背景 </gear-button>
  </div>
</template>

<script>
export default {
  name: 'PullRefresh',
  mounted() {},
  methods: {
    buttonClick(type) {
      this.$router.push({
        path: `/pull-refresh-${type}`,
        query: {
          backStyle: type === 0 ? { display: 'block', 'background-image': 'url(\'https://img11.360buyimg.com/imagetools/jfs/t1/207335/16/21034/823/62bbc4b2Ee795fcf1/4807a708a19b616a.png\')' } : null,
          bgStyle: type === 0 ? { 'background-color': '#F53137' } : null,
          chnNameStyle: type === 0 ? { color: '#FFFFFF' } : null,
          img1Url: type === 0 ? 'https://img11.360buyimg.com/imagetools/jfs/t1/74309/32/19878/4361/62bc0d2cEc6d5a045/f6221496ca63fe22.png' : ''
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.pull-refresh-home {
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__item {
    margin: 0;
    padding: 0;
    background: #fff;
    line-height: 30px;
    border-bottom: 1px solid #eee;
  }
}
</style>
