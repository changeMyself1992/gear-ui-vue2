<template>
  <div ref="swipe" class="gear-swipe">
    <div ref="track" :class="['gear-swipe__track', vertical && 'gear-swipe__track--vertical']" :style="trackStyle">
      <slot></slot>
    </div>
    <slot v-if="indicatorSlot" name="indicator"></slot>
    <div v-else :class="['gear-swipe__indicators', vertical && 'gear-swipe__indicators--vertical', indicatorRelative && !vertical && 'gear-swipe__indicators--relative']">
      <i
        :class="[
          vertical ? 'gear-swipe__indicatorVertical' : 'gear-swipe__indicator',
          index === activeIndicator && vertical && 'gear-swipe__indicatorVertical--active',
          index === activeIndicator && !vertical && 'gear-swipe__indicator--active'
        ]"
        v-for="(item, index) in children"
        :key="index"
        :style="index === activeIndicator ? indicatorStyle : ''"
      ></i>
    </div>
  </div>
</template>
<script>
import debounce from 'lodash/debounce';
import { TouchMixin } from '../../mixins/touch';
import { SlotsMixin } from '../../mixins/slots';
import {
  range, preventDefault, doubleRaf, findChildren, createUuid 
} from '../../utils/index';

export default {
  name: 'GearSwipe',
  mixins: [TouchMixin, SlotsMixin],
  props: {
    /** 动画时长，单位为 ms */
    duration: {
      type: [Number, String],
      default: 320
    },
    /** 初始位置索引值 */
    initialSwipe: {
      type: [Number, String],
      default: 0
    },
    /** 是否开启循环播放 */
    loop: {
      type: Boolean,
      default: true
    },
    /** 自动轮播间隔，单位为 ms */
    autoplay: {
      type: [Number, String],
      default: 0
    },
    /** 是否阻止滑动事件冒泡 */
    stopPropagation: {
      type: Boolean,
      default: true
    },
    /** 指示器颜色 */
    indicatorColor: {
      type: String,
      default: '#1989fa'
    },
    /** 滑动标记是否要求相对位置,vertical为false才会生效 */
    indicatorRelative: {
      type: Boolean,
      default: false
    },
    // 是否为纵向滚动
    vertical: {
      type: Boolean,
      default: false
    },
    // 自动切换动画的时候是否要淡入淡出效果
    isFadeOver: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {
      // 是否正在挥动
      swiping: false,
      // track滚动区域偏移量
      offset: 0,
      // track滚动区域宽度
      computedWidth: 0,
      // track滚动区域高度
      computedHeight: 0,
      /** 自动播放定时器 */
      timer: null,
      /** 当前激活的索引值 */
      active: 0,
      /** 子元素数组 */
      children: [],
      /** (变量的)增量X */
      deltaX: 0,
      /** (变量的)增量Y */
      deltaY: 0,

      swipeUUid: createUuid()
    };
  },
  created() {},
  mounted() {
    this.bindTouchEvent(this.$refs.track);
    this.initChildren();
    this.initialize();

    this.$bus.$on(
      'swipeItemMountedEvent',
      debounce(swipeUUid => {
        if (swipeUUid === this.swipeUUid) {
          console.log('监听到 SwipeItem mounted执行');
          this.initChildren();
          this.initialize();
        }
      }, 500)
    );

    this.$bus.$on(
      'swipeItemDestroyedEvent',
      debounce(swipeUUid => {
        if (swipeUUid === this.swipeUUid) {
          console.log('监听到 SwipeItem destroyed执行');
          this.initChildren();
          this.initialize();
        }
      }, 500)
    );
  },
  computed: {
    count() {
      return this.children.length;
    },
    maxCount() {
      return Math.ceil(Math.abs(this.minOffset) / this.size);
    },
    delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size() {
      const { children } = this;
      if (this.vertical) {
        return this.computedHeight;
      } else {
        let marginRight = 0;
        if (children && children.length) {
          marginRight = children[0].marginRight;
        }
        return this.computedWidth + marginRight;
      }
    },
    /** track滚动区域宽度 */
    trackSize() {
      return this.count * this.size;
    },
    activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection() {
      const expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    /** track滚动区域样式 */
    trackStyle() {
      const style = {
        transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
        transform: `translate${this.vertical ? 'Y' : 'X'}(${this.offset}px)`
      };

      if (this.size) {
        if (this.vertical) {
          style.height = `${this.trackSize}px`;
        } else {
          style.width = `${this.trackSize}px`;
        }
      }

      return style;
    },
    indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    },
    /** 最小偏移量 */
    minOffset() {
      return (this.vertical ? this.rect.height : this.rect.width) - this.size * this.count;
    },
    indicatorSlot() {
      if (this.slots('indicator')) return true;
      return false;
    }
  },
  watch: {},
  methods: {
    initChildren() {
      const array = [];
      findChildren(this, 'GearSwipeItem', array);
      this.children = array;

      // console.log('this.active:', this.active);
      // console.log(this.count);
      // console.log(this.size);
      // console.log(this.trackSize);
    },

    /** 初始化滑动的位置 */
    initialize() {
      if (!this.$el) {
        return;
      }
      clearTimeout(this.timer);
      // 轮播图视图的左右边距之和
      const leftAndRightPadding = Number((parseFloat(window.getComputedStyle(this.$el).paddingLeft) + parseFloat(window.getComputedStyle(this.$el).paddingRight)).toFixed(1)) || 0;
      // clientWidth 在页面上返回内容的可视宽度（宽度包含内边距（padding），不包含边框（border），外边距（margin）和滚动条）
      // offsetWidth 返回元素的宽度，包括边框（border）和内边距（padding），但不包含外边距（margin）
      const rect = {
        width: this.$el.clientWidth - leftAndRightPadding,
        height: this.$el.clientHeight
      };

      this.rect = rect;
      this.swiping = true;
      this.active = +this.initialSwipe;
      this.computedWidth = rect.width;
      this.computedHeight = rect.height;
      this.offset = this.getTargetOffset(this.active);
      this.children.forEach(swipe => {
        swipe.offset = 0;
      });
      this.autoPlay();
    },

    /** 获取track滚动区域偏移量 */
    getTargetOffset(targetActive, offset = 0) {
      let currentPosition = targetActive * this.size;
      if (!this.loop) {
        currentPosition = Math.min(currentPosition, -this.minOffset);
      }
      let targetOffset = offset - currentPosition;
      if (!this.loop) {
        targetOffset = range(targetOffset, this.minOffset, 0);
      }
      return targetOffset;
    },

    /** 自动播放 */
    autoPlay() {
      const { autoplay } = this;
      if (autoplay > 0 && this.count > 1) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.next();
          this.autoPlay();

          if (this.isFadeOver) {
            const animation = {
              'animation-duration': `${this.duration / 1000}s`,
              'animation-timing-function': 'ease',
              'animation-delay': 0,
              'animation-iteration-count': 1
            };
            for (let i = 0; i < this.children.length; i++) {
              if (i === 0 && this.activeIndicator === this.children.length - 1) {
                this.children[i].animation = {
                  'animation-name': 'gear-SwipeItem-fade-in',
                  ...animation
                };
                this.children.length;
              } else if (i === this.activeIndicator) {
                this.children[i].animation = {
                  'animation-name': 'gear-SwipeItem-fade-out',
                  ...animation
                };
              } else if (this.activeIndicator + 1 === i) {
                this.children[i].animation = {
                  'animation-name': 'gear-SwipeItem-fade-in',
                  ...animation
                };
              } else {
                this.children[i].animation = {};
              }
            }
          }
        }, autoplay);
      }
    },

    // @exposed-api
    next() {
      this.correctPosition();
      this.resetTouchStatus();
      doubleRaf(() => {
        this.swiping = false;
        this.move({
          pace: 1,
          emitChange: true
        });
      });
    },
    // @exposed-api
    swipeTo(index, options = {}) {
      this.correctPosition();
      this.resetTouchStatus();

      doubleRaf(() => {
        let targetIndex;
        if (this.loop && index === this.count) {
          targetIndex = this.active === 0 ? 0 : index;
        } else {
          targetIndex = index % this.count;
        }

        if (options.immediate) {
          doubleRaf(() => {
            this.swiping = false;
          });
        } else {
          this.swiping = false;
        }

        this.move({
          pace: targetIndex - this.active,
          emitChange: true
        });
      });
    },

    correctPosition() {
      this.swiping = true;

      if (this.active <= -1) {
        this.move({ pace: this.count });
      }

      if (this.active >= this.count) {
        this.move({ pace: -this.count });
      }
    },
    // pace代表要移动多少步
    move({ pace = 0, offset = 0, emitChange }) {
      const {
        loop, active, count, children, trackSize, minOffset 
      } = this;
      if (count <= 1) {
        return;
      }
      const targetActive = this.getTargetActive(pace);
      const targetOffset = this.getTargetOffset(targetActive, offset);

      // auto move first and last swipe in loop mode
      if (loop) {
        if (children[0] && targetOffset !== minOffset) {
          const outRightBound = targetOffset < minOffset;
          children[0].offset = outRightBound ? trackSize : 0;
        }

        if (children[count - 1] && targetOffset !== 0) {
          const outLeftBound = targetOffset > 0;
          children[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }

      this.active = targetActive;
      this.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        this.$emit('change', this.activeIndicator);
      }
    },
    getTargetActive(pace) {
      const { active, count, maxCount } = this;

      if (pace) {
        if (this.loop) {
          return range(active + pace, -1, count);
        }

        return range(active + pace, 0, maxCount);
      }

      return active;
    },
    onTouchStart(event) {
      clearTimeout(this.timer);
      this.touchStartTime = Date.now();
      this.touchStart(event);
      this.correctPosition();
    },

    onTouchMove(event) {
      if (!this.swiping) return;
      this.touchMove(event);
      if (this.active === this.children.length - 1 && !this.loop && this.delta < 0) return;
      if (this.isCorrectDirection) {
        preventDefault(event, this.stopPropagation);
        this.move({ offset: this.delta });
      }
    },

    onTouchEnd() {
      if (!this.swiping) return;
      if (this.active === this.children.length - 1 && !this.loop && this.delta < 0) return;
      const { size, delta } = this;
      const duration = Date.now() - this.touchStartTime;
      const speed = delta / duration;
      const shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(delta) > size / 2;

      if (shouldSwipe && this.isCorrectDirection) {
        const offset = this.vertical ? this.offsetY : this.offsetX;

        let pace = 0;

        if (this.loop) {
          // eslint-disable-next-line no-nested-ternary
          pace = offset > 0 ? (delta > 0 ? -1 : 1) : 0;
        } else {
          pace = -Math[delta > 0 ? 'ceil' : 'floor'](delta / size);
        }

        this.move({
          pace,
          emitChange: true
        });
      } else if (delta) {
        this.move({ pace: 0 });
      }

      this.swiping = false;
      this.autoPlay();
    }
  }
};
</script>
