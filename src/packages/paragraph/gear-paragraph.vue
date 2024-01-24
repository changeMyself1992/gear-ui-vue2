<template>
  <div ref="textOverflow" class="gear-paragraph" :style="boxStyle">
    <span ref="overEllipsis" class="real-text" :style="textStyleObj">{{ realText }}</span>
    <span v-if="showSlotNode" ref="slotRef" class="slot-box" :style="expandedStyleObj" @click="toggle">{{ !expanded ? '展开' : '收起' }}</span>
  </div>
</template>

<script>
/**
 使用示例：https://blog.csdn.net/qq_41887214/article/details/116663975
 <Paragraph
    :text="text"
 />
 */
export default {
  name: 'GearParagraph',
  props: {
    // 显示的文本
    text: {
      type: String,
      default: ''
    },
    // 最多展示的行数
    maxLines: {
      type: Number,
      default: 3
    },
    // 是否要显示展开收起节点
    showUnfoldFold: {
      type: Boolean,
      default: true
    },
    // 是否默认展开
    expandedDefault: {
      type: Boolean,
      default: false
    },
    // 文案自定义样式对象
    textStyleObj: {
      type: Object,
      default: () => {
        return {};
      }
    },
    // 展开关闭自定义样式对象
    expandedStyleObj: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      offset: 0,
      expanded: false, // 是否已展开
      slotBoxWidth: 0, // 展开收起按钮宽度
      textBoxWidth: 0, // 展示的文本宽度
      showSlotNode: false // 是否展示slot节点
    };
  },
  computed: {
    // 设置展示文本宽度
    boxStyle() {
      return { width: 'auto' };
    },

    // 是否被截取
    isCutOut() {
      const isCutOut = this.offset !== this.text.length;
      return isCutOut && !this.expanded;
    },

    // 获取展示文本
    realText() {
      let realText = this.text;
      if (this.isCutOut) {
        realText = this.text.slice(0, this.offset) + '...';
      }
      return realText;
    }
  },
  watch: {
    text: {
      //监听的对象
      handler: function (newV, oldV) {
        console.log('watch中：', newV);
        this.init();
      }
    }
  },
  mounted() {
    if (this.text) {
      this.init();
    }
  },
  methods: {
    init() {
      this.offset = this.text.length;
      this.$nextTick(() => {
        const { len } = this.getLines();
        if (len > this.maxLines) {
          this.showSlotNode = this.showUnfoldFold ? true : false;
          this.$nextTick(() => {
            this.slotBoxWidth = this.$refs.slotRef && this.$refs.slotRef.offsetWidth;
            this.textBoxWidth = this.$refs.textOverflow.offsetWidth;
            // console.log('文案最大长度:', this.textBoxWidth);
            // console.log('展开收起占用长度:', this.slotBoxWidth);
            this.calculateOffset(0, this.text.length);
          });
        }
      });
    },

    // 计算offset 核心代码
    calculateOffset(from, to) {
      // console.log(`from:${from}`, `to:${to}`);
      this.$nextTick(() => {
        // debugger;
        if (Math.abs(from - to) <= 1) {
          if (this.expandedDefault) {
            this.expanded = true;
          }
          return;
        }
        if (this.isOverflow()) {
          to = this.offset;
        } else {
          from = this.offset;
        }
        this.offset = Math.floor((from + to) / 2);
        // console.log(`offset:${this.offset}`);
        this.calculateOffset(from, to);
      });
    },

    // 内容是否溢出
    isOverflow() {
      const { len, lastWidth } = this.getLines();
      if (len < this.maxLines) {
        return false;
      }
      if (this.maxLines) {
        // 超出部分 行数 > 最大行数 或者  已经是最大行数但最后一行宽度 + 后面内容超出正常宽度
        // console.log('最后一行长度：', lastWidth);
        const lastLineOver = len === this.maxLines && Math.ceil(lastWidth + this.slotBoxWidth) >= this.textBoxWidth;
        if (len > this.maxLines || lastLineOver) {
          return true;
        }
      }
      return false;
    },

    // 获取元素占据页面的所有矩形区域的行数和最后一行宽度
    getLines() {
      // getClientRects()：是获取元素占据页面的所有矩形区域：
      const clientRects = this.$refs.overEllipsis.getClientRects();
      return {
        len: clientRects.length,
        lastWidth: clientRects[clientRects.length - 1].width
      };
    },

    // 切换展开收起
    toggle() {
      this.expanded = !this.expanded;
      this.$emit('expandedStatusChange', this.expanded);
    }
  }
};
</script>

