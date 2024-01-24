<template>
  <div class="demo-tabs6">
    <div class="box-1"></div>
    
    <div class="tabs6-cont">
      <gear-tabs
        class="custom-style-tab1"
        v-model="curTag"
        @tabClick="title => this.tabClick(title)"
        background="#ffffff"
        :contentStyle="contentStyle"
        :lineWidth="16"
        :sticky="true"
        :offsetTop="0"
        :swipeable="true"
      >
        <template slot="content">
          <gear-tab title="标题文案1">
            <div class="tab-content">
              <div class="tab-content-item1"></div>
              <div class="tab-content-right">
                <div class="tab-content-item2"></div>
                <div class="tab-content-item2"></div>
              </div>
            </div>
          </gear-tab>
          <gear-tab title="标题文案2">
            <div class="tab-content"></div>
          </gear-tab>
          <gear-tab title="标题文案3">
            <div class="tab-content">
              <div class="tab-content-item1"></div>
              <div class="tab-content-right">
                <div class="tab-content-item2"></div>
                <div class="tab-content-item2"></div>
              </div>
            </div>
          </gear-tab>
        </template>
      </gear-tabs>
    </div>

    <div class="box-1"></div>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  name: 'demo-tabs6',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      curTag: '标题文案1',
      contentStyle: {
        width: '100%'
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
.demo-tabs6 {
  margin: 0;
  padding: 0;
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
  .box-1 {
    width: calc(100vw - 24px);
    height: 160px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    margin: 10px 0;
  }
  
  .tabs6-cont{
    width: calc(100vw - 22px);
    border-radius: 4px;
    margin: 0 auto;
    overflow: hidden;
  }

  .tab-content {
    width: 100%;
    height: 194px;
    padding: 0 12px 12px 12px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .tab-content-item1 {
      width: 160px;
      height: 182px;
      background: rgba(245, 49, 55, 1);
      border-radius: 4px;
    }
    .tab-content-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .tab-content-item2 {
        width: 160px;
        height: 87px;
        background: rgba(244, 245, 247, 0.6);
        border: 1px solid rgba(237, 238, 240, 1);
        border-radius: 4px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
