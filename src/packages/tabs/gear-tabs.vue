<template>
  <div class="gear-tabs gear-tabs--line">
    <div ref="wrap" class="gear-tabs__wrap" :class="{ 'gear-tabs__wrap--scrollable': scrollable }" :style="wrapStyle">
      <div ref="nav" role="tablist" class="gear-tabs__nav gear-tabs__nav--line" :style="navStyle">
        <div ref="titles" v-for="(item, index) in children" :key="item.title" :class="{ 'gear-tab': true, 'gear-tab--active': index === currentIndex }" @click="onClick(item, index)">
          <span class="gear-tab__text gear-tab__text--ellipsis">{{ item.title }}</span>
        </div>

        <div v-if="isShowLine" class="gear-tabs__line" :style="lineStyle"></div>
      </div>
    </div>

    <div ref="tabs__content" class="gear-tabs__content gear-tabs__content--animated" :style="contentStyleObj">
      <div class="gear-tabs__track" :style="tabContentStyle">
        <gear-swipe v-if="swipeable && filterContent.length > 0" ref="swipe1" class="gear-tabs__swipe" :autoplay="0" :loop="false" @change="onChange">
          <gear-swipe-item v-for="(item, index) in filterContent" :key="index">
            <vnodes :vnodes="item" />
          </gear-swipe-item>
          <!-- 为了隐藏轮播图索引器 -->
          <template slot="indicator"><div></div></template>
        </gear-swipe>
        <slot v-else name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep';
import { getElementTop, getScroller } from '../../utils/dom';
import GearSwipe from '../swipe/index';
import GearSwipeItem from '../swipe-item/index';

export default {
  name: 'GearTabs',
  mixins: [],
  props: {
    /** 标签栏背景色 */
    background: {
      type: String,
      default: 'white'
    },
    /** 是否显示标签栏底部线条 */
    isShowLine: {
      type: Boolean,
      default: true
    },
    /** 标签栏底部线条颜色 */
    lineColor: {
      type: String,
      default: '#F53137'
    },
    /** 标签栏底部线条宽度 */
    lineWidth: {
      type: Number,
      default: 40
    },
    /** 标签栏底部线条高度 */
    lineHeight: {
      type: Number,
      default: 3
    },
    /** 自定义标签激活样式 */
    tabActiveStyle: {
      type: Object,
      default: () => ({})
    },
    /** 自定义标签默认样式 */
    tabDefaultStyle: {
      type: Object,
      default: () => ({})
    },
    /** 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 */
    swipeThreshold: {
      type: [Number, String],
      default: 5
    },
    /** 滚动居中得时间 */
    duration: {
      type: [Number, String],
      default: 0.3
    },
    /** 是否开启切换标签内容时的转场动画 */
    animated: {
      type: Boolean,
      default: true
    },
    /** 自定义内容盒子样式 */
    contentStyle: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: String,
      default: '',
      require: true
    },
    /** 是否开启手势滑动切换 */
    swipeable: {
      type: Boolean,
      default: false
    },
    /** 是否开启粘性布局 */
    sticky: {
      type: Boolean,
      default: false
    },
    /** 吸顶时与顶部的距离 */
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  components: {
    Vnodes: {
      functional: true,
      render: (createElement, ctx) => ctx.props.vnodes
    },
    GearSwipe,
    GearSwipeItem
  },

  data() {
    return {
      children: [],
      lineStyle: {},
      currentIndex: -1,
      // 是否要吸附标签栏容器
      fixed: false,
      scroller: window,
      contentStyleObj: cloneDeep(this.contentStyle)
    };
  },
  created() {},
  mounted() {
    console.log('GearTabs::', this);
    const array = [];
    this.findTabChildren(this, array);
    this.children = array;

    this.setCurrentIndex(this.value);
    this.setLine();
    this.scrollIntoView();
    if (this.swipeable && this.$refs.swipe1) {
      this.$refs.swipe1.swipeTo(this.currentIndex);
    }

    if (this.sticky) {
      this.scroller = getScroller(this.$refs.wrap);
      this.scroller.addEventListener('scroll', this.onScroll);

      const topToPageTop = Number(Number(getElementTop(this.$el)).toFixed(0));
      if (this.offsetTop >= topToPageTop) {
        this.fixed = true;
      }
    }
  },

  computed: {
    /** 标签栏主题样式 */
    navStyle() {
      return `background: ${this.background}`;
    },
    // 导航是否可滚动
    scrollable() {
      return this.children.length > this.swipeThreshold;
    },
    // tab内容区域样式
    tabContentStyle() {
      if (this.swipeable) return {};
      const styleObj = {
        transform: `translate3d(${-1 * this.currentIndex * 100}%, 0, 0)`
      };
      if (this.animated) {
        styleObj.transitionDuration = `${this.duration}s`;
      }
      return styleObj;
    },
    wrapStyle() {
      const style = {};
      if (this.fixed) {
        style.position = 'fixed';
        style.top = `${this.offsetTop}px`;
        style.right = 0;
        style.left = 0;
        style['-webkit-transform'] = 'translateZ(0)';
        style['z-index'] = 9999;
      }
      return style;
    },

    filterContent() {
      if (this.$slots.content && this.$slots.content.length > 0) {
        return this.$slots.content.filter(item => item.tag);
      }
      return [];
    }
  },
  watch: {
    fixed(isFixed) {
      const style = cloneDeep(this.contentStyle);
      const { marginTop } = window.getComputedStyle(this.$refs.tabs__content);
      const marginTopNum = Number(marginTop.match(/[0-9]+(\.[0-9]*)?/)[0]);
      if (isFixed) {
        style.marginTop = `${Number(this.$refs.wrap.offsetHeight) + marginTopNum}px`;
      } else {
        style.marginTop = `${marginTopNum - Number(this.$refs.wrap.offsetHeight)}px`;
      }
      this.contentStyleObj = style;
    },
    currentIndex(index) {
      const style = cloneDeep(this.contentStyleObj);
      const { offsetHeight } = this.children[index].$el;
      // console.log('offsetHeight:', offsetHeight);
      style.height = `${offsetHeight}px`;
      this.contentStyleObj = style;
    }
  },
  methods: {
    onClick(item, index) {
      this.$emit('input', item.title); // 默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event。
      this.setCurrentIndex(item.title);
      this.$emit('tabClick', item.title, this.currentIndex);
      this.setLine();
      this.scrollIntoView();
      if (this.swipeable && this.$refs.swipe1) {
        this.$refs.swipe1.swipeTo(index);
      }
    },
    /** 标签栏底部线条样式 */
    setLine() {
      if (!this.isShowLine) return;
      this.$nextTick(() => {
        const { titles } = this.$refs;
        if (!titles || this.currentIndex === -1) return;
        const title = titles[this.currentIndex];
        const left = title.offsetLeft + title.offsetWidth / 2;
        const lineStyle = {
          width: `${this.lineWidth}px`,
          height: `${this.lineHeight}px`,
          backgroundColor: this.lineColor,
          transitionDuration: '0.28s',
          left: `${left}px`
        };
        this.lineStyle = lineStyle;
      });
    },
    /** 设置当前选中得索引 */
    setCurrentIndex(curTitle) {
      const index = this.children.findIndex(item => item.title === curTitle);
      this.currentIndex = index;
    },
    /** 滚动激活TAB进入视图居中 */
    scrollIntoView() {
      this.$nextTick(() => {
        const { titles, nav } = this.$refs;
        if (!this.scrollable || !titles || this.currentIndex === -1) {
          return;
        }
        const title = titles[this.currentIndex];
        const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
        this.scrollLeftTo(nav, to, this.duration);
      });
    },
    /** tab向左边移动的具体方法 */
    scrollLeftTo(scroller, to, duration) {
      let count = 0;
      const from = scroller.scrollLeft;
      const frames = Math.round((duration * 1000) / 16);

      function animate() {
        scroller.scrollLeft += (to - from) / frames;

        if (++count < frames) {
          window.requestAnimationFrame(animate);
        }
      }

      animate();
    },

    onScroll(event) {
      const offsetTop = this.offsetTop; // 标签栏容器吸顶时与顶部的距离
      const scrollTop = window.pageYOffset; // 获取window Y轴偏移量
      const topToPageTop = Number(Number(getElementTop(this.$el)).toFixed(0)); // 获取标签栏容器距离页面视口的顶部距离
      if (scrollTop + offsetTop >= topToPageTop) {
        if (this.fixed) return;
        this.fixed = true;
        console.log('开始吸顶！！', offsetTop, scrollTop, topToPageTop);
      } else {
        if (!this.fixed) return;
        this.fixed = false;
        console.log('取消吸顶！！');
      }
    },

    findTabChildren(VueComponent, resArray = []) {
      const { $children } = VueComponent;
      if ($children.length > 0) {
        for (let i = 0; i < $children.length; i++) {
          const element = $children[i];
          const {
            $options: { _componentTag }
          } = element;
          if (_componentTag === 'gear-tab') {
            resArray.push(element);
          } else {
            this.findTabChildren(element, resArray);
          }
        }
      }
    },

    onChange(index) {
      this.$emit('input', this.children[index].title);
      if (index !== this.currentIndex) {
        this.setCurrentIndex(this.children[index].title);
        this.setLine();
        this.scrollIntoView();
      }
    }
  },
  beforeDestroy() {
    if (this.sticky) {
      this.scroller.removeEventListener('scroll', this.onScroll);
    }
  }
};
</script>
