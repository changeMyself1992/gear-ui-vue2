<template>
  <div class="demo-GroundGlass">
    <img class="xingkong" src="https://img14.360buyimg.com/imagetools/jfs/t1/177637/12/36463/331079/64d48e4bFc2856987/1ab7872caeb64a5b.png" />
    <div class="ground-glass"></div>
  </div>
</template>


<script>
export default {
  name: 'demo-GroundGlass',
  mixins: [],
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.demo-GroundGlass {
  position: relative;
  width: 100%;
  min-height: 150vh;
  overflow: hidden;
  box-sizing: border-box;
  .xingkong {
    display: block;
    width: 172px;
    height: 260px;
    object-fit: cover;
    margin: 100px auto 0;
  }
  .ground-glass {
    width: 351px;
    height: 162px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    position: fixed;
    top: 276px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
