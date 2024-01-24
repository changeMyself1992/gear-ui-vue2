<template>
  <div :class="['timer-COMP-container flex-between']">
    <!-- 时间倒计时 -->
    <div v-if="type !== 'read' && isEndLoading" :class="className" :style="symbolorTextStyle">
      <span v-if="isShowDays" class="num" :style="numBackStyle">{{ this.days || '00' }}</span>
      <span v-if="isShowDays" class="text">天</span>
      <span class="num" :style="numBackStyle">{{ this.hours || '00' }}</span>
      <span :class="symbolorTextClass">{{ isShowDays ? '时' : '：' }}</span>
      <span class="num" :style="numBackStyle">{{ this.minutes || '00' }}</span>
      <span :class="symbolorTextClass">{{ isShowDays ? '分' : '：' }}</span>
      <span class="num" :style="numBackStyle">{{ this.seconds || '00' }}</span>
      <span v-if="isShowDays" class="text seconds">秒</span>
    </div>
    <!-- 页面浏览倒计时 -->
    <div v-if="type === 'read'" class="read-box">
      <div v-if="showCountDown" class="shape">
        <gear-circle class="circle" v-model="currentRate" :rate="rate" :clockwise="false" :size="size" :stroke-width="80" layer-color="transparent" color="#fff" />
        <div class="cover">
          <span>{{ shapeNum }}</span
          ><span class="unit">{{ 's' }}</span>
        </div>
      </div>
      <slot v-if="showText" name="textContent"></slot>
    </div>
  </div>
</template>
<script>
import { timepiece, fullZero, handleTime } from './timepiece';
import GearCircle from '../circle/index';
export default {
  name: 'GearCountdown',
  props: {
    // 类型
    type: {
      type: String,
      default() {
        return '';
      }
    },
    // 时间戳
    timestamp: {
      type: [Number, String],
      default() {
        return 0;
      }
    },
    // 符号/文案 颜色
    symbolorTextColor: {
      type: String,
      default() {
        return '';
      }
    },
    // 卡片背景颜色
    cardBackColor: {
      type: String,
      default() {
        return '';
      }
    },
    // 阅读时间
    readTime: {
      type: Number,
      default() {
        return 10;
      }
    },
    // 浏览页面完成后是否显示 文本区块
    showText: {
      type: Boolean,
      default: false
    },
    // 进度调大小，默认单位是px
    size: {
      type: [Number, String],
      default() {
        return 36;
      }
    }
  },
  components: {
    GearCircle
  },
  data() {
    return {
      isEndLoading: false, // 是否结束 loading
      timer: undefined, // 倒计时时间
      days: 0, // 天
      hours: '', // 时
      minutes: '', // 分
      seconds: '', // 秒
      showCountDown: true,
      shapeNum: this.readTime,
      aaa: 0,
      currentRate: 100,
      rate: 100
    };
  },
  computed: {
    // 是否展示 天 单位
    isShowDays() {
      return Number(this.days) > 0;
    },
    // 根据传入的类型和时间，赋予对应的 className
    className() {
      return `${this.isShowDays ? 'dd-' : ''}hh-mm-ss-${this.type}-style`;
    },
    // 展示 符号(00:08:10) || 文字(00时08分10秒)
    symbolorTextClass() {
      return Number(this.days) >= 0 ? 'text' : 'symbol';
    },
    // 数字样式 文本样式 || 卡片样式(卡片背景色)
    numBackStyle() {
      let color = this.cardBackColor || '#ffffff';
      return this.type === 'text' ? {} : { background: color };
    },
    // 符号/文字 样式
    symbolorTextStyle() {
      let color = this.symbolorTextColor || '#000000';
      return this.type === 'text' ? {} : { color: color };
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },

  mounted() {
    if (this.type !== 'read') {
      this.init(this.timestamp);
    }
    if (this.type === 'read') {
      this.init1(this.readTime);
    }
  },
  methods: {
    init(timestamp) {
      const serverTime = Date.parse(new Date());
      const deviceTime = Date.parse(new Date());
      const endTime = Date.parse(new Date()) + Number(timestamp);
      // 倒计时处理 如果是大于1天的时候只显示天，不走倒计时；小于一天则进行倒计时显示
      this.initAnimation(serverTime, deviceTime, endTime);
      // if (Number(timestamp) > 0 && handleTime(timestamp || 0).day < 1) {
      //   this.initAnimation(serverTime, deviceTime, endTime);
      // } else {
      //   this.day = handleTime(timestamp).day;
      // }
    },
    // 初始化 倒计时 动画
    initAnimation(serverTime, deviceTime, endTime) {
      timepiece({
        serverTime,
        deviceTime,
        endTime,
        timerCb: this.timerCallback
      }).then(res => {
        this.timeHandle(res);
      });
    },
    timerCallback(data) {
      this.timer = data.timer;
      this.timeHandle(data);
    },
    timeHandle(timeObj) {
      this.days = fullZero(timeObj.timeData.days);
      this.hours = fullZero(timeObj.timeData.hours);
      this.minutes = fullZero(timeObj.timeData.minutes);
      this.seconds = fullZero(timeObj.timeData.seconds);
      this.isEndLoading = true;
      if (String(this.days) === '00' && String(this.hours) === '00' && String(this.minutes) === '00' && String(this.seconds) === '00') {
        this.$emit('timeListener', true);
      }
    },
    init1(totalNum) {
      this.currentRate = 100;
      let readTimer = null;
      let num = totalNum;
      let _this = this;
      readTimer = setInterval(timeDown, 1000);
      function timeDown() {
        num--;
        _this.shapeNum = num;
        _this.rate = (num / totalNum).toFixed(3) * 100;
        if (Number(num) <= 0) {
          window.clearInterval(readTimer);
          _this.showTextFun();
        }
      }
    },
    showTextFun() {
      setTimeout(() => {
        this.showCountDown = false;
        this.$emit('update:showText', true);
      }, 100);
    }
  },
  watch: {
    timestamp: {
      deep: true,
      handler(val) {
        clearInterval(this.timer);
        if (val === 0) {
          this.init(1);
        } else {
          this.init(val);
        }
      }
    }
  }
};
</script>
