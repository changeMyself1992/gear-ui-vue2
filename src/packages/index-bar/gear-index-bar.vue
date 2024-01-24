<template>
  <div class="gear-index-bar">
    <div ref="sidebar" class="gear-index-bar__sidebar" @click="event => this.onClick(event)">
      <p
        v-for="(item, index) in indexList"
        :key="index"
        :class="['gear-index-bar__index', activeAnchorObj && item.value === activeAnchorObj.value && isMove && 'gear-index-bar__index--active']"
        :data-index="index"
      >
        <span class="gear-index-bar__value" :data-index="index">{{ item.value }}</span>
        <span v-show="activeAnchorObj && item.value === activeAnchorObj.value && moveIng" class="gear-index-bar__card">{{ item.value }}</span>
      </p>
    </div>

    <div v-for="(item, index) in indexList" :key="index">
      <gear-index-anchor :ref="`anchor-${index}`" :index="item.name" />
      <gear-cell :options="options[index]">
        <template slot-scope="{ slotProps }">
          <p :class="['gear-index-bar__item-text', options[index].length - 1 !== slotProps.index && 'gear-index-bar__item-text--border-bottom']" @click="indexItemClick(slotProps)">
            {{ slotProps.name }}
          </p>
        </template>
      </gear-cell>
    </div>
  </div>
</template>
<script>
function genAlphabet() {
  const indexList = [];
  const charCodeOfA = 'A'.charCodeAt(0);

  for (let i = 0; i < 26; i++) {
    indexList.push({
      name: String.fromCharCode(charCodeOfA + i),
      value: String.fromCharCode(charCodeOfA + i)
    });
  }
  return indexList;
}
function letterGeneratingElement() {
  const indexList = genAlphabet();
  const options = [];
  for (let i = 0; i < indexList.length; i++) {
    const { name, value } = indexList[i];
    const array = [];
    for (let j = 0; j < 5; j++) {
      array.push({
        name: `${name}-${j}`,
        value: `${value}-${j}`,
        index: j
      });
    }
    options.push(array);
  }
  return options;
}
import { TouchMixin } from '../../mixins/touch';
import { BindEventMixin } from '../../mixins/bind-event';
import { preventDefault } from '../../utils/event';
import { getScroller, isHidden, getScrollTop, setRootScrollTop, getRootScrollTop } from '../../utils/dom';
import GearCell from '../cell/index';
import GearIndexAnchor from '../index-anchor/index';
export default {
  name: 'GearIndexBar',
  mixins: [
    TouchMixin,
    BindEventMixin(function (bind) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el);
      }

      bind(this.scroller, 'scroll', this.onScroll);
    })
  ],
  props: {
    // 索引对象列表 [{"name":"A","value":"A"}] name是让索引柱显示的，value是让索引右侧边栏显示的,并且要确保value的唯一性
    indexList: {
      type: Array,
      default: genAlphabet
    },
    // 索引选项列表 [[{"name":"A-0","value":"A-0","index":0},{"name":"A-1","value":"A-1","index":1}]] name是让索引元素显示的文案，value表示该索引元素的唯一标识，index用来记录该元素的当前索引
    options: {
      type: Array,
      default: letterGeneratingElement
    },
    /**是否开启锚点自动吸顶 */
    sticky: {
      type: Boolean,
      default: true
    },
    /**锚点自动吸顶时与顶部的距离 */
    stickyOffsetTop: {
      type: Number,
      default: 0
    },
    /**索引柱字符高亮颜色 */
    highlightColor: {
      type: String,
      default: '#999999'
    }
  },
  components: {
    GearCell,
    GearIndexAnchor
  },
  provide: function () {
    return {
      fromParentSticky: this.sticky,
      fromParentHighlightColor: this.highlightColor
    };
  },

  data() {
    return {
      /**当前激活的索引对象 */
      activeAnchorObj: null,
      /**索引柱 组件列表 */
      anchorList: [],
      timer: null,
      // 是否正在触摸滑动
      moveIng: false,
      // 是否进行了触摸滑动,
      isMove: false
    };
  },
  created() {},
  mounted() {
    this.bindTouchEvent(this.$refs.sidebar);
    const anchorList = [];
    for (let i = 0; i < this.indexList.length; i++) {
      anchorList.push(this.$refs[`anchor-${i}`][0]);
    }
    this.anchorList = anchorList;
  },

  computed: {},
  watch: {
    indexList() {
      this.$nextTick(this.onScroll);
    },
    activeAnchorObj(value) {
      if (value) {
        this.$emit('change', value);
      }
    }
  },
  methods: {
    /**给滚动容器要绑定得事件 */
    onScroll() {
      // console.log('onScroll事件触发');
      if (isHidden(this.$el)) {
        return;
      }
      const scrollTop = getScrollTop(this.scroller);
      const scrollerRect = this.getScrollerRect();
      const rects = this.anchorList.map(item => item.getRect(this.scroller, scrollerRect));

      // console.log('this.scroller', this.scroller);
      // console.log('scrollTop', scrollTop);
      // console.log('scrollerRect', scrollerRect);
      // console.log('rects', rects);

      const active = this.getActiveAnchorIndex(scrollTop, rects);
      this.activeAnchorObj = this.indexList[active];
      if (this.sticky) {
        this.anchorList.forEach((item, index) => {
          if (index === active || index === active - 1) {
            const rect = item.$el.getBoundingClientRect();
            item.left = rect.left;
            item.width = rect.width;
          } else {
            item.left = null;
            item.width = null;
          }

          if (index === active) {
            item.active = true;
            item.top = Math.max(this.stickyOffsetTop, rects[index].top - scrollTop) + scrollerRect.top;
          } else if (index === active - 1) {
            const activeItemTop = rects[active].top - scrollTop;
            item.active = activeItemTop > 0;
            item.top = activeItemTop + scrollerRect.top - rects[index].height;
          } else {
            item.active = false;
          }
        });
      }
    },
    /**获取Y轴滚动区块的rect */
    getScrollerRect() {
      if (this.scroller.getBoundingClientRect) {
        return this.scroller.getBoundingClientRect();
      }
      return {
        top: 0,
        left: 0
      };
    },
    /**计算出需要激活的索引柱 索引 */
    getActiveAnchorIndex(scrollTop, rects) {
      for (let i = this.anchorList.length - 1; i >= 0; i--) {
        const prevHeight = i > 0 ? rects[i - 1].height : 0;
        const reachTop = this.sticky ? prevHeight + this.stickyOffsetTop : 0;

        if (scrollTop + reachTop >= rects[i].top) {
          return i;
        }
      }
      return -1;
    },
    /**索引元素点击得时候 */
    indexItemClick(item) {
      this.$emit('indexItemClick', item);
    },
    /**右侧索引栏元素点击事件 */
    onClick(event) {
      this.scrollToElement(event.target);
      this.isMove = false;
    },
    scrollToElement(element) {
      const { index } = element.dataset;
      this.scrollTo(Number(index));
    },
    scrollTo(index) {
      if (Array.isArray(this.anchorList) && this.anchorList[index]) {
        this.activeAnchorObj = this.indexList[index];
        this.anchorList[index].scrollIntoView();
        if (this.sticky && this.stickyOffsetTop) {
          setRootScrollTop(getRootScrollTop() - this.stickyOffsetTop);
        }
        this.$emit('select', this.indexList[index]);
      }
    },
    onTouchStart(event) {
      this.touchStart(event);
    },
    onTouchMove(event) {
      this.touchMove(event);
      if (this.direction === 'vertical') {
        preventDefault(event, true);
        const { clientX, clientY } = event.touches[0];
        const target = document.elementFromPoint(clientX, clientY);
        if (target) {
          const { index } = target.dataset;
          if (index) {
            if (this.touchActiveIndex !== index) {
              this.touchActiveIndex = index;
              this.moveIng = true;
              this.isMove = true;
              this.scrollToElement(target);
            }
          }
        }
      }
    },
    onTouchEnd(event) {
      this.moveIng = false;
    }
  },
  beforeDestroy() {}
};
</script>
