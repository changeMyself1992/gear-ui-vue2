<template>
  <div class="demo-tabs8">
    <div class="box-1"></div>
    <div class="box-2">
      <div class="title">优选基金</div>
      <gear-tabs class="custom-style-tab2" v-model="curTag4" @tabClick="title => this.tabClick4(title)" :isShowLine="false" :swipeable="true">
        <template slot="content">
          <gear-tab title="全部">
            <div style="width: 100%; height: 350px; background: white; padding: 0 12px; box-sizing: border-box">全部1111</div>
          </gear-tab>
          <gear-tab title="1个月内">
            <div style="width: 100%; height: 330px; background: pink; padding: 0 12px; box-sizing: border-box">1个月内</div>
          </gear-tab>
          <gear-tab title="1-6个月">
            <div style="width: 100%; height: 310px; background: yellow; padding: 0 12px; box-sizing: border-box">1-6个月</div>
          </gear-tab>
          <gear-tab title="6个月+">
            <div style="width: 100%; height: 290px; background: blue; padding: 0 12px; box-sizing: border-box">6个月+</div>
          </gear-tab>
        </template>
      </gear-tabs>
    </div>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  name: 'demo-tabs8',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      curTag4: '全部'
    };
  },
  mounted() {
    if (window.self != window.top) {
      this.inIframe = true;
    }
  },
  methods: {
    tabClick(title) {},
    tabClick4(title) {}
  }
};
</script>

<style lang="scss">
.demo-tabs8 {
  padding: 10px 12px 100px 12px;
  overflow: hidden;

  .box-1 {
    height: 160px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .box-2 {
    background: rgba(255, 255, 255, 1);
    overflow: hidden;
    border-radius: 4px;
    .title {
      line-height: 23px;
      font-size: 16px;
      font-family: PingFangSC-Semibold;
      font-weight: bold;
      color: #000000;
      padding: 14px 0 0 12px;
    }
  }
}
</style>

<style lang="scss">
@import '../../assets/css/demo';
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
.demo-tabs8 .custom-style-tab2 {
  overflow: hidden;
}
.demo-tabs8 .custom-style-tab2 .gear-tabs__wrap {
  height: 30px;
  margin: 14px 12px 14px 12px;
}
.demo-tabs8 .custom-style-tab2 .gear-tabs__wrap .gear-tabs__nav .gear-tab {
  background-color: #f4f5f7;
  border-radius: 20px;
  color: #666666;
  height: 30px;
  flex: 0 0 auto;
  padding: 0 16px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: normal;
  font-family: PingFangSC-Regular;
}
.demo-tabs8 .custom-style-tab2 .gear-tabs__wrap .gear-tabs__nav .gear-tab:last-child {
  margin-right: 0;
}

.demo-tabs8 .custom-style-tab2 .gear-tabs__wrap .gear-tabs__nav .gear-tab--active {
  font-family: PingFangSC-Medium;
  background-color: #ffe8e7;
  color: $redTheme;
  font-weight: bold;
}
</style>
