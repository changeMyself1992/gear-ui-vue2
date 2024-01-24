<template>
  <div class="demo-list-wrapper">
    <div class="section-top">
      <img class="jdjr-logo" src="https://img11.360buyimg.com/imagetools/jfs/t1/87591/30/36256/59182/64254ec3F35de8ec2/41487b345429c744.png" />
    </div>

    <div class="section-content">
      <div v-for="(cpt, index) in packages" :key="index" style="overflow: hidden">
        <div v-if="index === 0 || (packages[index - 1].sort !== cpt.sort && oriSorts[Number(cpt.sort)])" :class="['section-content-title', index === 0 && 'fistTitle']">
          {{ oriSorts[Number(cpt.sort)] }}
        </div>

        <div v-if="cpt.showDemo !== false" :key="cpt.name" class="btn-link" @click="btnClick(cpt.name, cpt.chnName)">
          <span class="name">{{ cpt['ui-specified-english-name'] || cpt.name }} {{ cpt.chnName }}</span>
          <img class="arrows" src="https://img10.360buyimg.com/imagetools/jfs/t1/80535/7/19436/614/62da4171E71872bd8/9eab0129104f68e1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { packages, sorts } from '../../../src/config.json';
// import svglogo from '../../doc/compents/svglogo/svglogo.vue';

export default {
  name: 'IndexView',
  components: {
    // svglogo
  },
  data() {
    return {
      path: '',
      packages: {},
      sortedPackages: [],
      oriSorts: [],
      sorts: sorts.map((item, index) => index),
      foldStatus: []
    };
  },
  methods: {
    btnClick(name) {
      window.location.href = `./demo.html#/${name}`;
    }
  },
  created() {
    this.packages = packages;
    this.oriSorts = sorts;

    this.foldStatus = Array(this.sorts.length)
      .join(',')
      .split(',')
      .map(() => 0);
  },
  activated() {
    const seVal = sessionStorage.getItem('foldStatus');
    if (seVal && seVal !== 'false') {
      this.foldStatus = JSON.parse(seVal);
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-list-wrapper {
  position: relative;
  box-sizing: border-box;
  background-color: #ffffff;
  min-height: 100vh;
  .section-top {
    width: 100%;
    height: 193px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .jdjr-logo {
      width: 100%;
      height: 100%;
    }
  }

  .section-content {
    background: #ffffff;
    // padding: 28px 29px;
    padding: 0 29px 68px 29px;
    margin-bottom: -40px;

    .section-content-title {
      font-family: PingFangSC-Semibold;
      font-size: 14px;
      line-height: 20px;
      font-weight: bold;
      color: #999999;
      margin: 4px 0 9px 0;
      text-align: center;
    }
    .fistTitle {
      margin-top: 0;
    }
    .btn-link {
      width: 100%;
      height: 50px;
      background: #f4f5f7;
      border-radius: 25px;
      margin-bottom: 16px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {
        text-decoration: none;
        line-height: 23px;
        font-size: 16px;
        font-family: PingFangSC-Semibold;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        margin-left: 30px;
      }
      .arrows {
        width: 14px;
        height: auto;
        margin-right: 27px;
      }
    }
  }
}
</style>
