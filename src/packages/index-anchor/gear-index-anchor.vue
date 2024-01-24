<template>
  <div :style="{ height: sticky ? `${rect.height}px` : null }">
    <div :class="['gear-index-anchor', sticky && 'gear-index-anchor--sticky']" :style="anchorStyle">{{ index }}</div>
  </div>
</template>
<script>
import { getScrollTop, getRootScrollTop } from '../../utils/dom';
export default {
  name: 'GearIndexAnchor',
  inject: ['fromParentSticky', 'fromParentHighlightColor'],
  props: {
    /**索引字符 */
    index: [Number, String]
  },
  components: {},
  data() {
    return {
      top: 0,
      left: null,
      rect: { top: 0, height: 0 },
      width: null,
      active: false
    };
  },
  computed: {
    sticky() {
      return this.active && this.fromParentSticky;
    },
    anchorStyle() {
      if (this.sticky) {
        return {
          left: this.left ? `${this.left}px` : null,
          width: this.width ? `${this.width}px` : null,
          transform: `translate3d(0, ${this.top}px, 0)`,
          color: this.fromParentHighlightColor
        };
      }
    }
  },
  created() {},
  mounted() {
    const rect = this.$el.getBoundingClientRect();
    this.rect.height = rect.height;
  },

  watch: {},
  methods: {
    scrollIntoView() {
      this.$el.scrollIntoView();
    },
    getRect(scroller, scrollerRect) {
      const el = this.$el;
      const elRect = el.getBoundingClientRect();
      this.rect.height = elRect.height;

      if (scroller === window || scroller === document.body) {
        this.rect.top = elRect.top + getRootScrollTop();
      } else {
        this.rect.top = elRect.top + getScrollTop(scroller) - scrollerRect.top;
      }

      return this.rect;
    }
  }
};
</script>
