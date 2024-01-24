<template>
  <div @click="onClick">
    <!-- 没有图标 -->
    <div v-if="type === 'search'" class="search-box-1" :style="bgStyle">
      <div class="search-no-icon" :style="searchBoxBgStyle">
        <div class="iconfont icon-search search-icon" :style="searchIconStyle"></div>
        <div class="search-text" :style="textStyle">引导搜索的文案</div>
      </div>
    </div>
    <!-- 有 1 个图标 -->
    <div v-if="type === 'search-one-icon'" class="search-box-2" :style="bgStyle">
      <div class="search-one-icon">
        <div class="search" :style="searchBoxBgStyle">
          <div class="iconfont icon-search search-icon" :style="searchIconStyle"></div>
          <div class="search-text" :style="textStyle">引导搜索的文案</div>
        </div>
        <div class="icon" :style="{ backgroundImage: `url(${icon[0]})` }"></div>
      </div>
    </div>
    <!-- 有 2 个图标 -->
    <div v-if="type === 'search-two-icon'" class="search-box-3" :style="bgStyle">
      <div class="search-two-icon">
        <div class="search" :style="searchBoxBgStyle">
          <div class="iconfont icon-search search-icon" :style="searchIconStyle"></div>
          <div class="search-text" :style="textStyle">引导搜索的文案</div>
        </div>
        <div class="icon1" :style="{ backgroundImage: `url(${icon[0]})` }"></div>
        <div class="icon2" :style="{ backgroundImage: `url(${icon[1]})` }"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GearSearchbox',
  props: {
    type: {
      type: String,
      default() {
        return '';
      }
    },
    backColor: {
      type: String,
      default() {
        return '';
      }
    },
    textColor: {
      type: String,
      default() {
        return '';
      }
    },
    icon: {
      type: Array,
      default() {
        return [];
      }
    },
    searchIconStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    textStyle() {
      return { color: this.textColor ? this.textColor : '#999999' };
    },
    bgStyle() {
      return { background: this.backColor ? this.backColor : '#ffffff' };
    },
    searchBoxBgStyle() {
      let isSearchBoxOpacity = this.backColor === '#ffffff' || this.backColor === '#FFFFFF' || !this.backColor || this.backColor === '';
      return isSearchBoxOpacity ? { background: 'rgba(244, 245, 247, 1)' } : { background: 'rgba(255, 255, 255, 0.16)' };
    }
  },
  mounted() {},
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
