<template>
  <div class="gear-searchbar" @click="onClick" :style="searchbarStyle">
    <i class="iconfont icon-search searchIcon" :style="searchIconStyle" />
    <slot name="hot"></slot>
    <div class="gear-searchbar__placeholder" :style="placeholderStyle">{{ placeholder }}</div>
    <div class="gear-searchbar__line" :style="lineStyle" />
    <div class="gear-searchbar__text" :style="textStyle">搜索</div>
  </div>
</template>
<script>
export default {
  name: 'GearSearchbar',
  props: {
    /** 占位文案 */
    placeholder: {
      type: String,
      default: ''
    },
    // 搜索栏自定义样式
    searchbarStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    // 搜索图标自定义样式
    searchIconStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    // 占位文案显示自定义样式
    placeholderStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    // 搜索文案左边 线 自定义样式
    lineStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    // 搜索文案自定义样式
    textStyle: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
