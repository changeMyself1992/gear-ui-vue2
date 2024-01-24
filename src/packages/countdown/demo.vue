<template>
  <div class="countdown-container" clstag="5WXL|126793">
    <div class="title">文本样式</div>
    <div class="content"><gear-countdown type="text" :timestamp="hh_mm_ss_time" /></div>
    <div class="content" style="margin-bottom: 20px"><gear-countdown type="text" :timestamp="dd_hh_mm_ss_time" /></div>
    <div class="title">底板样式</div>
    <div class="content"><gear-countdown type="card" :timestamp="hh_mm_ss_time" :cardBackColor="blackColor" :symbolorTextColor="blackColor" /></div>
    <div class="content" style="margin-bottom: 20px"><gear-countdown type="card" :timestamp="dd_hh_mm_ss_time" :cardBackColor="blackColor" :symbolorTextColor="blackColor" /></div>
    <div class="title">底板样式</div>
    <div class="content"><gear-countdown type="card" :timestamp="hh_mm_ss_time" :cardBackColor="orangeGradientColor" :symbolorTextColor="orangeColor" /></div>
    <div class="content" style="margin-bottom: 34px"><gear-countdown type="card" :timestamp="dd_hh_mm_ss_time" :cardBackColor="orangeGradientColor" :symbolorTextColor="orangeColor" /></div>
    <div class="title">页面浏览倒计时</div>
    <div class="blank"></div>
    <div>
      <gear-countdown type="read" :readTime="num" :showText.sync="showText" @timeListener="timeListenerFun" :size="size">
        <!-- 页面浏览倒计时结束后，显示的内容需要自定义 -->
        <template slot="textContent">
          <div class="tips">
            <div class="icon"></div>
            <div class="reward">99.99元</div>
            <div class="text-yellow">奖励</div>
            <div class="text" @click="textFun">新人礼奖励提示语奖励提示语</div>
            <div class="sign"></div>
            <div class="close" @click="closeFun"></div>
          </div>
        </template>
      </gear-countdown>
    </div>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  name: 'CountDown',
  mixins: [Px2VwMixin],
  data() {
    return {
      num: 10,
      hh_mm_ss_time: 600000,
      dd_hh_mm_ss_time: 864030000,
      blackColor: 'rgba(51, 51, 51, 1)',
      orangeColor: 'rgba(240, 79, 58, 1)',
      orangeGradientColor: 'linear-gradient(180deg, rgba(240, 79, 58, 1) 0%, rgba(253, 129, 89, 1) 100%)',
      showText: false,
      size: this.px2vw(36)
    };
  },
  methods: {
    closeFun() {
      this.showText = false;
    },
    textFun() {
      this.$toast('文案点击');
    },
    timeListenerFun() {
      console.log('timeListener');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.countdown-container {
  padding: 0 $padding-sm;
  overflow: hidden;
}

.title {
  line-height: 20px;
  margin: 10px 0;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 600;
  color: rgba(153, 153, 153, 1);
}

.blank {
  height: 300px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  margin-top: 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 1);
}
</style>

<style lang="scss" >
/**页面浏览倒计时结束后，显示的内容需要自定义 */
.countdown-container .tips {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px 6px 10px;
  background: rgba(0, 0, 0, 0.88);
  border-radius: 50px;

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 4px;
    background: url('https://img10.360buyimg.com/imagetools/jfs/t1/78324/21/22372/2199/63a504e1E88fafcea/363dfe799e17786f.png') no-repeat 0 0;
    background-size: 100% auto;
  }

  .reward {
    margin-right: 4px;
    font-size: 13px;
    font-family: PingFang SC;
    font-weight: 600;
    color: rgba(255, 194, 147, 1);
  }

  .text {
    margin-right: 3px;
    font-size: 13px;
    font-family: PingFang SC;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
  }

  .text-yellow {
    margin-right: 4px;
    font-size: 13px;
    font-family: PingFang SC;
    font-weight: 600;
    color: rgba(255, 194, 147, 1);
  }

  .sign {
    width: 5px;
    height: 16px;
    background: url('https://s4-relay.360buyimg.com/relay/i/4/4cfa1a7546681959d059ab6c68922d62dc5c42209596066abfcd7031bd6edfc9.svg') no-repeat 0 0;
    background-size: 100% auto;
    background-position: center;
  }

  .close {
    position: absolute;
    top: -22px;
    right: 0;
    width: 18px;
    height: 18px;
    background: url('https://img12.360buyimg.com/imagetools/jfs/t1/177558/37/29844/563/63a504a8Ea9b8977a/6a4f3843f4b7f2bd.png') no-repeat 0 0;
    background-size: 100% auto;
    -webkit-tap-highlight-color: transparent;
  }
}
</style>
