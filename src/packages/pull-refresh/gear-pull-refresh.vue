<!--  -->
<template>
  <div class="gear-pull-refresh">
    <div ref="pullRefresh" class="gear-pull-refresh__wrap" :class="{ transition: isTransition }" :style="`overflow: ${status === 'normal' ? 'hidden' : 'visible'}`">
      <div class="gear-pull-refresh__head" :style="`height: ${headHeight}px; opacity: ${headScale}`">
        <div class="gear-pull-refresh__head--top">
          <!-- <joy-animate :class="{ 'ani-start': status === 'loading' }" /> -->
          <div class="gear-pull-refresh__head--top-lottie" id="gear-pull-refresh-lottie" :style="`-webkit-transform: scale(${headScale}); transform: scale(${headScale})`"></div>
        </div>
        <div class="gear-pull-refresh__head--txt" :style="`color: ${headTextColor};`">
          {{ headText }}
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import { getScrollTop, getScrollParent } from '../../utils/dom';
import { TouchMixin } from '../../mixins/touch';

export default {
  name: 'GearPullRefresh',
  mixins: [TouchMixin],
  components: {
    // JoyAnimate
  },
  data() {
    return {
      isTransition: false,
      startLocation: 0,
      disY: 0, // 用于存储下拉的距离
      reachTop: true, // 是否触顶
      scrollParent: null, // 存储可以滚动的父级
      status: 'normal', // normal pulling loosing loading success
      loading: false,
      timer: null,
      currScrollTop: 0, // touchStart的时候记录当前的scrollTop, 用disY 减去scrollTop 才是要滑动的距离
      timeFlag: false,
      doneFlag: false
    };
  },

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    animationDuration: {
      type: Number,
      default: 1000
    },
    headHeight: {
      type: Number,
      default: 82
    },
    headTextColor: {
      type: String,
      default: '#666666'
    },
    pullDistance: Number,
    pullingText: {
      type: String,
      default: '下拉刷新'
    },
    loosingText: {
      type: String,
      default: '松开刷新'
    },
    loadingText: {
      type: String,
      default: '刷新中...'
    },
    successText: {
      type: String,
      default: '刷新成功'
    }
  },
  computed: {
    headScale() {
      const pullDistance = this.maxDistance;
      if (this.disY / pullDistance < 0.3) return 0.3;
      if (this.disY / pullDistance >= 1) return 1;
      return this.disY / pullDistance;
    },

    headText() {
      const statusList = ['pulling', 'loosing', 'loading'];
      const statusText = {
        pulling: this.pullingText,
        loosing: this.loosingText,
        loading: this.loadingText
      };
      if (statusList.includes(this.status)) {
        return statusText[this.status];
      } else {
        return this.pullingText;
      }
    },

    maxDistance() {
      return +(this.pullDistance || this.headHeight);
    }
  },
  mounted() {
    this.bindTouchEvent(this.$refs.pullRefresh);
    this.scrollParent = getScrollParent(this.$refs.pullRefresh);
    const element = document.getElementById('gear-pull-refresh-lottie');
    lottie.loadAnimation({
      container: element, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'https://storage.360buyimg.com/upss/pull-refresh/Joy.json' // the path to the animation json
    });
    this.lottie = lottie;
  },
  methods: {
    isTouchable() {
      return !this.disabled && this.status !== 'loading';
    },

    ease(distance) {
      const pullDistance = this.maxDistance;
      if (distance > pullDistance) {
        if (distance < pullDistance * 2) {
          distance = pullDistance + (distance - pullDistance) / 2;
        } else {
          distance = pullDistance * 1.5 + (distance - pullDistance * 2) / 4;
        }
      }
      return Math.round(distance);
    },

    checkPosition() {
      this.reachTop = getScrollTop(this.scrollParent) === 0;
    },

    getHeadStyle() {
      return {
        height: `${this.headHeight}px`
      };
    },

    setStatus() {
      if (this.loading) {
        this.status = 'loading';
        this.lottie.play();
      } else if (!this.reachTop || this.disY === 0) {
        this.status = 'normal';
      } else if (this.disY < this.maxDistance) {
        this.status = 'pulling';
      } else {
        this.status = 'loosing';
      }
    },

    onTouchStart(e) {
      if (!this.isTouchable()) return;
      this.currScrollTop = getScrollTop(this.scrollParent);
      this.checkPosition(e);
      this.disY = 0;
      this.isTransition = false;
      this.startLocation = e.touches[0].clientY;
      this.doneFlag = false;
      this.timeFlag = false;
    },

    onTouchMove(e) {
      if (!this.isTouchable()) return;
      const currLocation = e.touches[0].clientY;
      // 下拉距离的判断 当前手指位置 减去 开始时的位置 减去 开始时页面的scrollTop
      this.disY = Math.floor(currLocation - this.startLocation - this.currScrollTop);
      if (!this.reachTop) {
        this.checkPosition(e);
      }
      if (this.disY > 0 && this.reachTop) {
        e.cancelable && e.preventDefault();
        const distance = this.ease(this.disY);
        this.setTransform(distance);
      } else {
        this.disY = 0;
        this.setTransform(0);
      }
      this.setStatus();
    },

    onTouchEnd() {
      if (!this.isTouchable()) return;
      this.currScrollTop = 0;
      this.isTransition = true;
      if (this.disY > this.maxDistance && this.reachTop) {
        this.loading = true;
        this.$emit('refresh', this.done);
        this.setTransform(this.maxDistance);
        this.animationDelay();
      } else {
        this.disY = 0;
        this.setTransform(0);
      }
      this.setStatus();
    },

    done() {
      if (this.timeFlag) {
        this.animationClose();
      } else {
        this.doneFlag = true;
      }
    },

    setTransform(distance) {
      this.$refs.pullRefresh.style.transform = `translate3d(0, ${distance}px, 0)`;
      this.$refs.pullRefresh.style.webkitTransform = `translate3d(0, ${distance}px, 0)`;
    },

    animationDelay() {
      setTimeout(() => {
        if (this.doneFlag) {
          this.animationClose();
        } else {
          this.timeFlag = true;
        }
      }, this.animationDuration);
    },

    animationClose() {
      this.loading = false;
      this.disY = 0;
      this.setTransform(0);
      this.lottie.stop();
      setTimeout(() => {
        this.setStatus();
      }, 300);
    }
  }
};
</script>
