<template>
  <div class="demo-tabs5">
    <div class="box-1"></div>
    <gear-tabs v-model="curTag" @tabClick="title => this.tabClick(title)" background="#F4F5F7" :contentStyle="contentStyle" :lineWidth="16" :sticky="true" :offsetTop="0" :swipeable="true">
      <template slot="content">
        <gear-tab v-for="index in [1, 2, 3]" :key="`标题文案${index}`" :title="`标题文案${index}`">
          <div style="width: calc(100% - 24px); margin: 0 auto; height: 1000px; background: #ffffff; border-radius: 4px"></div>
        </gear-tab>
      </template>
    </gear-tabs>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  mixins: [Px2VwMixin],
  name: 'demo-tabs5',
  components: {},
  data() {
    return {
      curTag: '标题文案1',
      contentStyle: {
        width: '100vw'
      },
      inIframe: false
    };
  },
  mounted() {
    if (window.self != window.top) {
      this.inIframe = true;
    }
  },
  methods: {
    tabClick(title) {}
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.demo-tabs5 {
  margin: 0 0 10px 0;
  padding: 0;
  // min-height: 150vh;
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
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
.demo-tabs5 .gear-tabs.gear-tabs--line > div.gear-tabs__wrap {
  width: calc(100vw - 22px);
  margin: 0 auto;
  height: 60px;
}
.demo-tabs5 .gear-tabs.gear-tabs--line > div.gear-tabs__wrap > div.gear-tabs__nav {
  justify-content: flex-start;
}
.demo-tabs5 .gear-tabs.gear-tabs--line > div.gear-tabs__wrap > div.gear-tabs__nav .gear-tab {
  flex: none;
  padding: 0;
  margin-right: 25px;
  align-items: flex-start;
}

.demo-tabs5 .gear-tabs.gear-tabs--line > div.gear-tabs__wrap > div.gear-tabs__nav .gear-tab .gear-tab__text {
  line-height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Medium;
  margin-top: 20px;
}

.demo-tabs5 .gear-tabs.gear-tabs--line > div.gear-tabs__wrap > div.gear-tabs__nav .gear-tab.gear-tab--active .gear-tab__text {
  font-family: PingFangSC-Semibold;
}

.demo-tabs5 .gear-tabs.gear-tabs--line > div.gear-tabs__wrap > div > div.gear-tabs__line{
  bottom: 10px;
}
</style>
