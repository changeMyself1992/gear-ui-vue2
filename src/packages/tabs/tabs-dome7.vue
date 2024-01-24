<template>
  <div class="demo-tabs7">
    <div class="box-1"></div>
    <div class="box-2">
      <gear-tabs class="custom-style-tab2" v-model="curTag4" @tabClick="title => this.tabClick4(title)" :isShowLine="false" :swipeable="true">
        <template slot="content">
          <gear-tab title="全部">
            <div style="width: 100%; height: 350px; background: rgb(255, 220, 220); padding: 0 12px; box-sizing: border-box"></div>
          </gear-tab>
          <gear-tab title="1个月内">
            <div style="width: 100%; height: 330px; background: rgb(255, 249, 220); padding: 0 12px; box-sizing: border-box"></div>
          </gear-tab>
          <gear-tab title="1-6个月">
            <div style="width: 100%; height: 310px; background: rgb(221, 255, 220); padding: 0 12px; box-sizing: border-box"></div>
          </gear-tab>
          <gear-tab title="6个月+">
            <div style="width: 100%; height: 290px; background: rgb(220, 248, 255); padding: 0 12px; box-sizing: border-box"></div>
          </gear-tab>
        </template>
      </gear-tabs>
    </div>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  name: 'demo-tabs7',
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
.demo-tabs7 {
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
  }
}
</style>

<style lang="scss">
@import '../../assets/css/demo';
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
.demo-tabs7 .custom-style-tab2 {
  overflow: hidden;
}
.demo-tabs7 .custom-style-tab2 .gear-tabs__wrap {
  height: 30px;
  margin: 14px 12px 14px 12px;
}
.demo-tabs7 .custom-style-tab2 .gear-tabs__wrap .gear-tabs__nav .gear-tab {
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
.demo-tabs7 .custom-style-tab2 .gear-tabs__wrap .gear-tabs__nav .gear-tab:last-child {
  margin-right: 0;
}

.demo-tabs7 .custom-style-tab2 .gear-tabs__wrap .gear-tabs__nav .gear-tab--active {
  font-family: PingFangSC-Medium;
  background-color: #ffe8e7;
  color: $redTheme;
  font-weight: bold;
}
</style>
