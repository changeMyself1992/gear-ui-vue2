<template>
  <div class="gear-badge__wrapper">
    <slot></slot>
    <div v-show="visible" class="gear-badge" :style="{ ...badgeStyle }">
      <div v-if="showType === 'dot'" class="gear-badge__dot"></div>

      <div v-if="showType === 'numBubble'" :class="['gear-badge__numBubble', `gear-badge__numBubble--num${renderContent.length}`]">
        <span>{{ renderContent }}</span>
      </div>

      <div v-if="showType === 'chineseBubble'" class="gear-badge__chineseBubble">
        <span class="gear-badge__chineseBubble--text"
          ><img class="imgleft" src="https://img12.360buyimg.com/imagetools/jfs/t1/111434/9/34375/1474/63c7bbe7F56d4a184/b836caa78c93b07c.png" />{{ renderContent
          }}<img class="imgRight" src="https://img11.360buyimg.com/imagetools/jfs/t1/76426/9/23647/1279/63c7bbe6Fd2e49f1d/a126e035ed4c0f70.png"
        /></span>
      </div>

      <div v-if="showType === 'guideBubble'" class="gear-badge__guideBubble">
        <span :class="{ 'gear-badge__guideBubble--close': closeOnClickAction }">{{ renderContent }}</span>
        <div class="gear-badge__guideBubble--arrow" :style="{ ...arrowStyle }"></div>
        <i v-if="closeOnClickAction" class="iconfont icon-close-2 icon-default" @click="iconClickFn"></i>
      </div>

      <div v-if="showType === 'btnBubble'" class="gear-badge__btnBubble">
        <span>{{ renderContent }}</span>
        <div class="gear-badge__btnBubble--arrow" :style="{ ...arrowStyle }"><div class="inner-arrow"></div></div>
      </div>

      <div v-if="showType === 'btnBubbleA'" class="gear-badge__btnBubbleA">
        <span class="gear-badge__btnBubbleA--text"
          ><img class="imgleft" src="https://img13.360buyimg.com/imagetools/jfs/t1/162524/32/34385/2165/63f31fa5Fa7a87156/121caa7d4bd52550.png" />{{ renderContent
          }}<img class="imgRight" src="https://img10.360buyimg.com/imagetools/jfs/t1/164926/40/34556/2214/63f31fa5F60283454/a1af78fcf227c0b4.png"
        /></span>
      </div>
    </div>
  </div>
</template>
<script>
import { isNumeric } from '../../utils/index';
export default {
  name: 'GearBadge',
  components: {},
  mixins: [],
  props: {
    /**显示类型，dot小红点， numBubble数字气派,chineseBubble汉字气泡,guideBubble引导气泡,btnBubble按钮气泡,btnBubbleA 对话箭头永远在左侧的按钮气泡*/
    showType: {
      type: String,
      default: ''
    },

    /**	最大值，超过最大值会显示 {max}+，仅当 content 为数字时有效 */
    max: {
      type: Number,
      default: 99
    },
    /**	徽标样式，用于自定义 */
    badgeStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    /**	箭头样式，用于自定义 */
    arrowStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    /**	徽标内容 */
    content: {
      type: String | Number,
      default: ''
    },
    /**是否显示关闭按钮 */
    closeOnClickAction: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    renderContent() {
      const { max, content } = this;
      if (isNumeric(content) && +content > max) {
        return `${max}+`;
      }
      return `${content}`;
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    iconClickFn() {
      this.visible = false;
      this.$emit('onclose');
    }
  }
};
</script>
