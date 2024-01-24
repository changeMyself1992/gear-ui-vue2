<template>
  <div class="gear-scroll-view">
    <div ref="track" class="gear-scroll-view__track">
      <slot></slot>
    </div>

    <div ref="indicators" class="gear-scroll-view__indicators" :style="indicatorsStyle">
      <div ref="progress" class="gear-scroll-view__progress" :style="progressStyleObj"></div>
    </div>
  </div>
</template>
<script>
// import throttle from 'lodash/throttle';
export default {
  name: 'GearScrollView',
  components: {},
  mixins: [],
  props: {
    /**指示器背景样式 */
    indicatorsStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    /**指示器进度样式 */
    progressStyle: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      // 滑块的left
      slidingBlockScrollLeft: 0
    };
  },
  computed: {
    progressStyleObj() {
      const style = { ...this.progressStyle };
      style.left = `${this.slidingBlockScrollLeft}px`;
      return style;
    }
  },
  watch: {},
  created() {},
  mounted() {
    // this.throttleTrackScroll = throttle(this.trackScroll, 200, { trailing: false });
    this.$refs.track.addEventListener('scroll', this.trackScroll);
  },
  methods: {
    trackScroll(event) {
      event.preventDefault();
      this.scrollLeft = Number(this.$refs.track.scrollLeft.toFixed());

      // console.log('track块的scrollLeft::', this.scrollLeft);
      // console.log('track块的最大滚动::', this.$refs.track.scrollWidth - this.$refs.track.clientWidth);
      // console.log('滑块最大滚动度::', this.$refs.indicators.clientWidth - this.$refs.progress.clientWidth);
      // // 滑块的scrollLeft / 滑块的最大滚动 = track块的scrollLeft / track块的最大滚动
      const left = parseInt(((this.$refs.indicators.clientWidth - this.$refs.progress.clientWidth) * this.scrollLeft) / (this.$refs.track.scrollWidth - this.$refs.track.clientWidth));
      // console.log('滑块的scrollLeft::', left);
      this.slidingBlockScrollLeft = left;
    }
  }
};
</script>
