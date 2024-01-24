<template>
  <div class="demo-tabs3">
    <gear-tabs v-model="curTag" @tabClick="title => this.tabClick(title)" :contentStyle="contentStyle" :lineWidth="16" :sticky="true" :offsetTop="0" :swipeable="true">
      <template slot="content">
        <gear-tab v-for="index in [1, 2, 3, 4, 5, 6, 7, 8]" :key="`标签-${index}`" :title="`标签 ${index}`">
          <div class="tabs3-cont">
            <div class="box-3"></div>

            <div class="box-1">
              <div class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>

              <div class="box-2">
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
  name: 'demo-tabs3',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      curTag: '标签 1',
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
.demo-tabs3 {
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
  .tabs3-cont {
    padding: 10px 12px;
  }
}
</style>
