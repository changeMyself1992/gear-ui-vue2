<template>
  <div class="demo-tabs4">
    <div class="box-1"></div>
    <gear-tabs
      class="custom-style-tab1"
      v-model="curTag"
      @tabClick="title => this.tabClick(title)"
      background="#F4F5F7"
      :contentStyle="contentStyle"
      :lineWidth="16"
      :sticky="true"
      :offsetTop="0"
      :swipeable="true"
      :isShowLine="false"
      swipeThreshold="4"
    >
      <template slot="content">
        <gear-tab title="推荐"><div class="tabs4-cont" style="background: rgb(190 227 236); "></div></gear-tab>
        <gear-tab title="标签文案"><div class="tabs4-cont" style="background: rgb(255, 214, 221); "></div></gear-tab>
        <gear-tab title="文案1"><div class="tabs4-cont" style="background: rgb(255, 255, 193); "></div></gear-tab>
        <gear-tab title="文案2"><div class="tabs4-cont" style="background: rgb(255, 226, 226); "></div></gear-tab>
        <gear-tab title="文案3"><div class="tabs4-cont" style="background: rgb(255, 205, 205); "></div></gear-tab>
      </template>
    </gear-tabs>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  name: 'demo-tabs4',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      curTag: '推荐',
      contentStyle: {
        width: '100vw'
      },
      curTag4: '全部',
      inIframe: false
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
.demo-tabs4 {
  margin: 0;
  padding: 0;
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
  .box-1 {
    width: calc(100vw - 24px);
    height: 85px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    margin-top: 10px;
  }
  .tabs4-cont {
    width: calc(100vw - 24px);
    margin: 0 auto;
    height: 454px;
    border-radius: 4px 4px 0 0
  }
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
.demo-tabs4 .custom-style-tab1.gear-tabs > .gear-tabs__wrap {
  width: 100vw;
  height: 60px;
}
.demo-tabs4 .custom-style-tab1.gear-tabs > .gear-tabs__wrap > .gear-tabs__nav {
  justify-content: flex-start;
}

.demo-tabs4 .custom-style-tab1.gear-tabs > .gear-tabs__wrap > .gear-tabs__nav > .gear-tab {
  flex: none;
  padding: 0;
  margin: 16px 8px 0 0;
  font-size: 0;
  height: 32px;
  padding: 0 15px;
  background: #ffffff;
  border-radius: 16px;
  box-sizing: border-box;
}
.demo-tabs4 .custom-style-tab1.gear-tabs > .gear-tabs__wrap > .gear-tabs__nav > .gear-tab:first-child {
  margin-left: 12px;
}
.demo-tabs4 .custom-style-tab1.gear-tabs > .gear-tabs__wrap > .gear-tabs__nav > .gear-tab.gear-tab--active {
  border: 1px solid rgba(245, 49, 55, 1);
  background: rgba(254,245,246,1);
}

.demo-tabs4 .custom-style-tab1.gear-tabs > .gear-tabs__wrap > .gear-tabs__nav > .gear-tab > .gear-tab__text {
  line-height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: normal;
  margin-top: 0;
  color: rgba(0, 0, 0, 1);
}

.demo-tabs4 .custom-style-tab1.gear-tabs > .gear-tabs__wrap > .gear-tabs__nav > .gear-tab.gear-tab--active > .gear-tab__text {
  line-height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Semibold;
  font-weight: bold;
  margin-top: 0;
  color: #F53137;
}
</style>
