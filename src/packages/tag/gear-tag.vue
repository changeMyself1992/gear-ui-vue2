<template>
  <span :class="classes" :style="{ ...tagStyle }">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: 'GearTag',
  components: {},
  mixins: [],
  props: {
    /**	类型，可选值为primary success danger warning */
    type: {
      type: String,
      default: 'default'
    },
    /**是否为标记样式 */
    mark: {
      type: Boolean,
      default: false
    },
    /**	是否为空心样式 */
    plain: {
      type: Boolean,
      default: false
    },
    /**是否为圆角样式 */
    round: {
      type: Boolean,
      default: false
    },
    /**大小, 可选值为large medium */
    size: {
      type: String,
      default: ''
    },
    /**	标签样式，用于自定义 */
    tagStyle: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      const { mark, plain, round, type } = this;
      let str = 'gear-tag';
      if (mark) str += ' gear-tag--mark';
      if (plain) str += ' gear-tag--plain';
      if (round) str += ' gear-tag--round';
      str += ` gear-tag--${type}`;
      return str;
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
