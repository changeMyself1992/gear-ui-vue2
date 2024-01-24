<!--  -->
<template>
  <div ref="gear-image" class="gear-image" :style="style">
    <img v-if="src && !error" class="gear-image__img" :src="src" :style="{ objectFit: fit }" @load="handleLoad($event)" @error="handleError($event)" v-on="$listeners" />

    <div v-if="loading" class="gear-image__placeholder" :style="placeholderStyle"></div>

    <div v-if="error" class="gear-image__error" :style="placeholderStyle">
      <span> {{ alt }}</span>
    </div>
  </div>
</template>

<script>
import { addUnit } from '../../utils/index';

export default {
  name: 'GearImage',
  data() {
    return {
      loading: true,
      error: false,
      placeholderStyle: {}
    };
  },
  props: {
    src: String,
    width: [String, Number],
    height: [String, Number],
    backgroundColor: String,
    fit: String,
    radius: [String, Number],
    alt: {
      type: String,
      default: '加载失败'
    }
  },
  computed: {
    style() {
      const style = {
        width: addUnit(this.width),
        height: addUnit(this.height)
      };
      if (this.radius) {
        style.borderRadius = addUnit(this.radius);
        style.overflow = 'hidden';
      }
      if (this.backgroundColor) {
        style.backgroundColor = this.backgroundColor;
      }
      return style;
    }
  },
  mounted() {
    this.calculatePlaceholderStyle();
  },
  methods: {
    handleLoad(e) {
      this.loading = false;
      this.$emit('load', e);
    },
    handleError(e) {
      this.loading = false;
      this.error = true;
      this.$emit('error', e);
    },

    calculatePlaceholderStyle() {
      const { offsetWidth, offsetHeight } = this.$refs['gear-image'];
      // •	任何大小的默认图，图形切图大小固定226*226px（使用3倍切图）
      // •	当图片显示区域最小边长≥226px 无缩放，默认图在图片显示面积中居中显示
      // •	当图片显示区域最小边长＜226px 对默认图缩放至与最小边长一致即可，默认图在图片显示面积中居中显示
      const minSide = offsetWidth > offsetHeight ? offsetHeight : offsetWidth;
      if (minSide >= 113) {
        this.placeholderStyle = {
          width: '113px',
          height: '113px'
        };
      } else {
        this.placeholderStyle = {
          width: `${minSide}px`,
          height: `${minSide}px`
        };
      }
    }
  }
};
</script>
