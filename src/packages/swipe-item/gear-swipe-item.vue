<template>
  <div class="gear-swipe-item" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GearSwipeItem',
  props: {
    marginRight: {
      type: Number,
      default: 0
    }
  },
  components: {},
  data() {
    return {
      offset: 0,
      inited: false,
      mounted: false,
      animation: {},
      parent: null
    };
  },
  created() {},
  mounted() {
    this.parent = this.findComponentUpward(this, 'GearSwipe');
    this.$bus.$emit('swipeItemMountedEvent', this.parent.swipeUUid);
  },

  computed: {
    style() {
      let style = {};

      if (this.parent) {
        const { vertical, computedWidth, computedHeight } = this.parent;
        style[vertical ? 'height' : 'width'] = `${vertical ? computedHeight : computedWidth}px`;

        if (this.offset) {
          style.transform = `translate${vertical ? 'Y' : 'X'}(${this.offset}px)`;
        }
        if (Object.keys(this.animation)) {
          style = {
            ...style,
            ...this.animation
          };
        }
      }

      if (this.marginRight) {
        style['margin-right'] = `${this.marginRight}px`;
      }

      return style;
    }
  },
  watch: {},
  methods: {
    findComponentUpward(context, componentName, componentNames) {
      if (typeof componentName === 'string') {
        componentNames = [componentName];
      } else {
        componentNames = componentName;
      }

      let parent = context.$parent;
      let name = parent.$options.name;
      while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
      }
      return parent;
    }
  },
  destroyed() {
    this.$bus.$emit('swipeItemDestroyedEvent', this.parent.swipeUUid);
  }
};
</script>
