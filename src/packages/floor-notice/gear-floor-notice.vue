<template>
  <div :class="['gear-floorNotice', !vertical && 'gear-floorNotice__horizontal']">
    <!--垂直模式内容盒子-------start-->
    <gear-swipe v-if="vertical" class="gear-floorNotice__swipe" :autoplay="3000" :vertical="true" :isFadeOver="true">
      <template slot="indicator"><div></div></template>
      <gear-swipe-item v-for="(item, index) in noticeObjArray" :key="`swipeItem-${index}`">
        <div class="gear-floorNotice__vertical">
          <img v-if="item.leftImgSrc" class="gear-floorNotice__horizontal__leftIcon" :src="item.leftImgSrc" />
          <div v-if="item.title" class="gear-floorNotice__title">{{ item.title }}</div>
          <div v-if="item.content" class="gear-floorNotice__content">{{ item.content }}</div>
          <div v-if="item.dot" class="gear-floorNotice__horizontal__dot"></div>
          <i v-if="item.link" :class="['iconfont icon-back-2 gear-floorNotice__horizontal__rightIcon']" @click.stop="iconClickFn(index)"></i>
        </div>
      </gear-swipe-item>
    </gear-swipe>
    <!--垂直模式内容盒子-------end-->

    <!--水平模式内容盒子-------start-->
    <img v-if="!vertical && noticeObjArray.length && noticeObjArray[0].leftImgSrc" class="gear-floorNotice__horizontal__leftIcon" :src="noticeObjArray[0].leftImgSrc" />
    <div v-if="!vertical && noticeObjArray.length && noticeObjArray[0].title" class="gear-floorNotice__title">{{ noticeObjArray[0].title }}</div>

    <div v-if="!vertical" ref="jrNoticeScroll" class="gear-floorNotice-scroll">
      <div ref="jrNoticePscroll" class="gear-floorNotice-pscroll inner" :style="contentStyle">
        <div :class="['gear-floorNotice__txt']"></div>
      </div>
    </div>

    <div v-if="!vertical && noticeObjArray.length && noticeObjArray[0].dot" class="gear-floorNotice__horizontal__dot"></div>
    <i v-if="!vertical && noticeObjArray.length && noticeObjArray[0].link" :class="['iconfont icon-back-2 gear-floorNotice__horizontal__rightIcon']" @click.stop="iconClickFn(0)"></i>
    <!--水平模式内容盒子-------end-->
  </div>
</template>
<script>
import GearSwipe from '../swipe/index';
import GearSwipeItem from '../swipe-item/index';
export default {
  name: 'GearFloorNotice',
  components: {
    GearSwipe,
    GearSwipeItem
  },
  props: {
    /**是否为纵向滚动 */
    vertical: {
      type: Boolean,
      default: false
    },
    // 通知栏内容对象数组
    noticeObjArray: {
      type: Array,
      default: () => {
        return [
          // {
          //   leftImgSrc: '', // 左边图标链接
          //   title: '', // 标题
          //   content: '', // 文案内容
          //   dot: true, //	是否展示小红点
          //   link: true // 是否展示右边箭头
          // }
        ];
      }
    },
    /**横向滚动速度，滚动速率 (px/s)，默认值为0不填的时候会根据视口自动计算滚动速率，10秒滚动完一屏 */
    horizontalSpeed: {
      type: [Number, String],
      default: 0
    },
    // 第一次横向滚动 动画延迟时间
    horizontalDelay: {
      type: Number,
      default: 2000
    }
  },

  data() {
    return {
      timer: null,
      translateX: 0, // 横向滚动一次的距离
      horizontalDuration: 0, // 横向滚动完成一次要消耗的时间
      horizontalContentWidth: 0 // 横向滚动文案元素的宽度
    };
  },
  computed: {
    contentStyle() {
      return {
        transform: this.translateX ? `translateX(${this.translateX}px)` : '',
        transitionDuration: this.horizontalDuration + 's'
      };
    },
    getSpeed() {
      if (this.horizontalSpeed) return this.horizontalSpeed;
      //美术要求 • 速率10秒钟滚动一屏
      const wrapper = this.$refs.jrNoticeScroll;
      if (wrapper && wrapper.offsetWidth) return wrapper.offsetWidth / 10;
      return 30;
    },

    noticeConfigs() {
      return JSON.parse(JSON.stringify(this.noticeObjArray));
    }
  },
  watch: {
    noticeConfigs: {
      handler(newName, oldName) {
        // console.log('newName', newName);
        // console.log('oldName', oldName);
        if (!this.vertical) {
          if (newName.length <= 0) return;
          if (oldName && oldName.length > 0 && newName[0].content === oldName[0].content) return;
          this.horizontalInit();
        }
      },
      //最初绑定值的时候也执行函数，则就需要用到immediate属性。
      immediate: true,
      deep: true
    }
  },

  mounted() {},
  methods: {
    horizontalInit() {
      this.timer && clearInterval(this.timer);
      this.translateX = 0;
      this.horizontalDuration = 0;
      this.horizontalContentWidth = 0;

      this.$nextTick(() => {
        const wrapper = this.$refs.jrNoticeScroll; // 文本元素父父节点(展示区域)
        const textParent = this.$refs.jrNoticePscroll; // 文本元素父节点
        let textNodes = textParent.childNodes;
        let textNode = textNodes[0]; // 文本元素节点
        textNode.style.paddingRight = 0;
        textNode.innerHTML = this.noticeObjArray[0].content;
        // console.log('textNode.offsetWidth1:', textNode.offsetWidth);
        // 查询textParent是否有多个子节点，如果是删除其他子节点只留第一个子节点
        if (textNodes.length > 1) {
          for (let i = 0; i < textNodes.length; i++) {
            const node = textNodes[i];
            if (i !== 0) {
              textParent.removeChild(node);
            }
          }
        }
        // offsetWidth 元素像素宽度+padding+border 是一个整数，单位是像素 px。
        if (textNode.offsetWidth > wrapper.offsetWidth) {
          textNode.style.paddingRight = `${parseInt(wrapper.offsetWidth / 2)}px`; //美术要求  	• 最后一个文字滚动到屏幕中央时，下一遍从右侧开始滚入
          this.horizontalContentWidth = textNode.offsetWidth;
          textParent.innerHTML += textParent.innerHTML;
          textParent.removeEventListener('transitionend', this.onTransitionEnd);
          this.timer = setTimeout(() => {
            this.translateX = -this.horizontalContentWidth;
            this.horizontalDuration = this.horizontalContentWidth / this.getSpeed;
            textParent.addEventListener('transitionend', this.onTransitionEnd);
          }, this.horizontalDelay);
        }
      });
    },
    onTransitionEnd() {
      this.translateX = 0;
      this.horizontalDuration = 0;
      //美术要求	• 启动文字再次滚动启点时停顿1.2秒，再开始下一次滚动
      setTimeout(() => {
        this.translateX = -this.horizontalContentWidth;
        this.horizontalDuration = this.horizontalContentWidth / this.getSpeed;
      }, 1200);
    },

    iconClickFn(index) {
      this.$emit('iconClick', index);
    }
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  }
};
</script>
