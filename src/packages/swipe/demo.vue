<template>
  <div class="demo-swipe" clstag="C241|126804">
    <div class="demo-swipe-title">整页分页符</div>
    <gear-swipe class="swipe-1" :autoplay="0" indicator-color="#666666">
      <gear-swipe-item v-for="index in array" :key="index" :marginRight="24">
        <div class="white-box">Banner {{ ['One', 'Two', 'Three', 'Four', 'Five'][index - 1] }}</div>
      </gear-swipe-item>
    </gear-swipe>

    <gear-swipe class="swipe-2" :autoplay="4000" indicator-color="white">
      <gear-swipe-item v-for="index in [1, 2, 3, 4]" :key="index" :marginRight="24">
        <div :class="`box box-${index}`">Banner {{ ['One', 'Two', 'Three', 'Four'][index - 1] }}</div>
      </gear-swipe-item>
    </gear-swipe>

    <div class="demo-swipe-title">滑动分页符</div>
    <div class="scroll-view-box">
      <gear-scroll-view :style="`margin-bottom: ${px2vw(10)}; border-radius: ${px2vw(4)}`">
        <div class="child-1" v-for="index in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="index"></div>
      </gear-scroll-view>

      <gear-scroll-view
        :style="`background-color: #f53137; border-radius: ${px2vw(4)}`"
        :progressStyle="{ 'background-color': '#FFFFFF' }"
        :indicatorsStyle="{ 'background-color': 'rgba(255,255,255,0.4)' }"
      >
        <div class="child-2" v-for="index in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="index"></div>
      </gear-scroll-view>
    </div>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  name: 'demo-swipe',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      array: [1, 2, 3, 4]
    };
  },
  mounted() {
    setTimeout(() => {
      this.array = [1, 2, 3];
    }, 3000);
    setTimeout(() => {
      this.array = [1, 2, 3, 4, 5];
    }, 6000);
  },
  methods: {}
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.demo-swipe {
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
  overflow-x: hidden;
  padding: 0 $padding-sm;
  .demo-swipe-title {
    line-height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: #999999;
    width: 100%;
    margin: 30px 0 10px 0;
  }
  .swipe-1 {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
    .white-box {
      width: 100%;
      height: 86px;
      background: #ffffff;
      border-radius: 4px;

      line-height: 86px;
      font-size: 24px;
      font-weight: normal;
      color: #e01119;
      text-align: center;
    }
    .gear-swipe__indicators {
      .gear-swipe__indicator {
        background-color: #666666;
      }
    }
  }

  .swipe-2 {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
    .box {
      width: 100%;
      height: 86px;
      border-radius: 4px;
      line-height: 86px;
      font-size: 24px;
      font-weight: normal;
      color: #ffffff;
      text-align: center;
    }
    .box-1 {
      background: $redTheme;
    }
    .box-2 {
      background: #d7af74;
    }
    .box-3 {
      background: #3e5cd7;
    }
    .box-4 {
      background: #1db270;
    }
  }

  .swipe-box-white {
    position: relative;
    width: 100%;
    height: 78px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    .swipe-3 {
      width: 100%;
      .gray-box {
        height: 44px;
        background: rgba(216, 216, 216, 1);
        border-radius: 8px;
        color: #ffffff;
        text-align: center;
        line-height: 44px;
      }
    }
    .custom-indicator {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 6px;
      width: 24px;
      height: 3px;
      background: #d6d6d6;
      border-radius: 2px;
    }
  }
  .scroll-view-box {
    box-sizing: border-box;
    width: 100%;
    .child-1 {
      width: 40px;
      height: 40px;
      background: rgba(216, 216, 216, 1);
      border-radius: 8px;
      margin-right: 16px;
      display: inline-block;
    }
    .child-1:last-child {
      margin-right: 0;
    }
    .child-2 {
      width: 40px;
      height: 40px;
      background: rgba(255, 73, 76, 1);
      border-radius: 8px;
      margin-right: 16px;
      display: inline-block;
    }
    .child-2:last-child {
      margin-right: 0;
    }
  }
}
</style>
