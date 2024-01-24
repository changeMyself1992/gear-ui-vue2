<!--  -->
<template>
  <section ref="slideLoad" class="gear-slide-load">
    <slot></slot>
    <section v-if="!disabled" class="gear-slide-load__foot">
      <section v-if="innerLoading" class="gear-slide-load__animate">
        <section class="gear-slide-load__animate--top"></section>
        <section class="gear-slide-load__animate--bottom"></section>
      </section>
      <section v-if="finished" class="gear-slide-load__text">{{ finishedText }}</section>
      <section v-else-if="innerLoading" class="gear-slide-load__text">{{ loadingText }}</section>
      <section v-else-if="error" class="gear-slide-load__text" @click="handleError">{{ errorText }}</section>
    </section>
    <section ref="bottomEdge" class="gear-slide-load__edge"></section>
  </section>
</template>

<script>
import { getScrollParent, getRect } from '../../utils/dom';

export default {
  name: 'GearSlideLoad',
  model: {
    prop: 'loading'
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean
    },
    finished: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 100
    },
    loadingText: {
      type: String,
      default: '正在加载...'
    },
    finishedText: {
      type: String,
      default: '没有更多了'
    },
    errorText: {
      type: String,
      default: '请求失败，点击重试'
    }
  },
  data() {
    return {
      innerLoading: this.loading,
      slideLoad: null,
      scrollParent: null,
      bottomEdge: null
    };
  },
  watch: {
    loading: 'check',
    finished: 'check'
  },
  mounted() {
    this.scrollParent = getScrollParent(this.$refs.slideLoad);

    // 这里加定时器是因为，如果scrollParent是window，并且scrolltop不为0，那么在手机上是会自动触发我们注册的事件的，所以加上定时器是为了达到后注册事件的效果
    let that = this;
    setTimeout(() => {
      that.scrollParent.addEventListener('scroll', that.check);
    }, 500);

    if (this.immediateCheck) {
      this.check();
    }
  },
  updated() {
    this.innerLoading = this.loading;
  },
  methods: {
    check() {
      this.$nextTick(() => {
        if (this.disabled || this.finished || this.innerLoading || this.error) return;
        const scrollParentRect = getRect(this.scrollParent);
        if (!scrollParentRect.height || this.isHidden(this.$refs.slideLoad)) return;
        const bottomEdgeRect = getRect(this.$refs.bottomEdge);
        const isReachBottom = bottomEdgeRect.bottom - scrollParentRect.bottom <= this.offset;
        if (isReachBottom) {
          this.innerLoading = true;
          this.$emit('input', true);
          this.$emit('load');
        }
      });
    },

    isHidden(el) {
      if (!el) return false;
      return window.getComputedStyle(el).display === 'none';
    },

    handleError() {
      this.$emit('update:error', false);
      this.check();
    }
  },
  beforeDestroy() {
    this.scrollParent.removeEventListener('scroll', this.check);
  }
};
</script>
