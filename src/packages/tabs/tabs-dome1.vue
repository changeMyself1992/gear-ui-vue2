<template>
  <div class="demo-tabs1">
    <gear-tabs v-model="curTag" @tabClick="tabClick" :contentStyle="contentStyle" :lineWidth="16" :sticky="true" :offsetTop="0" :swipeable="true">
      <template slot="content">
        <gear-tab v-for="index in [1, 2]" :key="`标题-${index}`" :title="`标题${index}`">
          <div class="tabs1-cont">
            <div class="box-3" :style="{ 'background-color' : index == 1? '#ffdddd' : '#f8ffdd' }"></div>
            <div class="box-1">
              <div class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>

              <div class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>

              <div v-if="index === 1" class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>

              <div v-if="index === 1" class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>

              <div v-if="index === 1" class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>
            </div>
          </div>
        </gear-tab>
      </template>
    </gear-tabs>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  name: 'demo-tabs1',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      curTag: '标题1',
      contentStyle: {
        width: '100vw'
      },
      swipeable: false,
      inIframe: false
    };
  },
  mounted() {
    if (window.self != window.top) {
      this.inIframe = true;
    }
  },
  methods: {
    tabClick(title, index) {
      console.log(title, index);
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.demo-tabs1 {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
  .box-3 {
    border-radius: 4px;
    width: 100%;
    height: 400px;
    background-color: #fff;
    margin-bottom: 10px;
  }

  .box-1 {
    width: 100%;
    .box-2 {
      width: 100%;
      height: 70px;
      background: white;
      border-radius: 4px;
      padding-left: $padding-sm;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-bottom: 10px;
      box-sizing: border-box;
      .banner-1 {
        width: 140px;
        height: 16px;
        background: rgba(244, 245, 247, 1);
      }
      .banner-2 {
        width: 100px;
        height: 16px;
        background: rgba(244, 245, 247, 1);
      }
    }
  }
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
.demo-tabs1 .gear-tab {
  flex: none;
}
.demo-tabs1 .gear-tabs__nav {
  justify-content: space-evenly;
}
.demo-tabs1 .tabs1-cont{
  padding: 10px 12px;
}
</style>
