<template>
  <div v-show="show" :class="noticeClass" :style="{ backgroundColor: customBackground }">
    <div :class="['iconfont icon-laba jr-notice-left-icon', iconColor('class')]" :style="iconColor('style')"></div>
    <div ref="jrNoticeScroll" class="jr-notice-scroll wrapper">
      <div ref="jrNoticePscroll" class="jr-notice-pscroll inner" :style="contentStyle">
        <div :class="['txt scrollp', txtColor('class')]" :style="txtColor('style')"></div>
      </div>
    </div>

    <i v-if="mode === 'closeable'" :class="['iconfont icon-close-2 jr-notice-right-icon', iconColor('class')]" :style="iconColor('style')" @click.stop="iconClickFn"></i>
    <i v-if="mode === 'link'" :class="['iconfont icon-back-2 jr-notice-right-icon', iconColor('class')]" :style="iconColor('style')" @click.stop="iconClickFn"></i>
  </div>
</template>
<script>
export default {
  name: 'GearNotice',
  props: {
    /** 通知栏图标，可选值为 closeable（关闭图标）  link（跳转图标） */
    mode: {
      type: String,
      default: ''
    },
    /** 主题类型 primary（普通公告） warning（紧高公告） danger（紧急公告） */
    type: {
      type: String,
      default: 'primary'
    },
    /** 滚动条背景 */
    customBackground: {
      type: String,
      default: ''
    },
    /** 通知文本颜色 */
    customTxtColor: {
      type: String,
      default: ''
    },
    /** 定制图标颜色 */
    customIconColor: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    speed: {
      type: [Number, String],
      default: 0
    },
    // 美术要求 • 默认显示2秒后开始滚动
    delay: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      show: true,
      timer: null,
      offset: 0,
      duration: 0,
      contentWidth: 0
    };
  },
  computed: {
    noticeClass() {
      let str = 'jr-notice';
      if (this.type) {
        str += ` ${this.type}-bg-color`;
      }
      return str;
    },
    contentStyle() {
      return {
        transform: this.offset ? `translateX(${this.offset}px)` : '',
        transitionDuration: `${this.duration}s`
      };
    },
    getSpeed() {
      if (this.speed) return this.speed;
      // 美术要求 • 速率10秒钟滚动一屏
      const wrapper = this.$refs.jrNoticeScroll;
      if (wrapper && wrapper.offsetWidth) return wrapper.offsetWidth / 10;
      return 30;
    }
  },
  watch: {
    text: {
      handler(newName, oldName) {
        console.log('newName', newName);
        console.log('oldName', oldName);
        this.init();
      },
      // 最初绑定值的时候也执行函数，则就需要用到immediate属性。
      immediate: true
    }
  },

  mounted() {},
  methods: {
    init() {
      this.timer && clearInterval(this.timer);
      this.offset = 0;
      this.duration = 0;
      this.contentWidth = 0;

      this.$nextTick(() => {
        const wrapper = this.$refs.jrNoticeScroll; // 文本元素父父节点(展示区域)
        const textParent = this.$refs.jrNoticePscroll; // 文本元素父节点
        const textNodes = textParent.childNodes;
        const textNode = textNodes[0]; // 文本元素节点
        textNode.style.paddingRight = 0;
        textNode.innerHTML = this.text;
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
        // setTimeout(() => {
        // offsetWidth 元素像素宽度+padding+border 是一个整数，单位是像素 px。
        if (textNode.offsetWidth > wrapper.offsetWidth) {
          textNode.style.paddingRight = `${parseInt(wrapper.offsetWidth / 2, 10)}px`; // 美术要求  	• 最后一个文字滚动到屏幕中央时，下一遍从右侧开始滚入
          this.contentWidth = textNode.offsetWidth;
          textParent.innerHTML += textParent.innerHTML;
          textParent.removeEventListener('transitionend', this.onTransitionEnd);
          this.timer = setTimeout(() => {
            this.offset = -this.contentWidth;
            this.duration = this.contentWidth / this.getSpeed;
            textParent.addEventListener('transitionend', this.onTransitionEnd);
          }, this.delay);
        }
        // }, 0);
      });
    },
    onTransitionEnd() {
      this.offset = 0;
      this.duration = 0;
      // 美术要求	• 启动文字再次滚动启点时停顿1.2秒，再开始下一次滚动
      setTimeout(() => {
        this.offset = -this.contentWidth;
        this.duration = this.contentWidth / this.getSpeed;
      }, 1200);
    },
    iconClickFn() {
      if (this.mode === 'closeable') {
        this.show = false;
      }
      this.$emit('iconClick', this.mode);
    },
    txtColor(mode) {
      if (this.type && mode === 'class') {
        return `${this.type}-text-color`;
      }
      if (this.customTxtColor && mode === 'style') {
        return `color: ${this.customTxtColor};`;
      }
      return '';
    },
    iconColor(mode) {
      if (this.type && mode === 'class') {
        return `${this.type}-icon-color`;
      }
      if (this.customIconColor && mode === 'style') {
        return `color: ${this.customIconColor};`;
      }
      return '';
    },
    resize() {
      this.init();
    }
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  }
};
</script>
