<template>
  <div ref="gear-image-compress" class="gear-image-compress">
    <img v-if="src && type == 'src' && !error" class="gear-image-compress__img" :src="handleSrc" @load="handleLoad($event)" @error="handleError($event)" v-on="$listeners" />
    <div v-if="src && type == 'bg'" :style="{ backgroundImage: `url(${handleSrc})`, backgroundSize: fit }" class="gear-image-compress__bg">
      <slot></slot>
    </div>
    <div v-if="loading && showDefaultIcon" class="gear-image-compress__placeholder" :style="placeholderStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'GearImageCompress',
  data() {
    return {
      error: false,
      loading: true,
      placeholderStyle: {}
    };
  },
  props: {
    src: String,
    fit: {
      type: String,
      default: 'contain'
    },
    showDefaultIcon: {
      // 是否显示占位图
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'src' // 类型 'src' 'bg' 两种
    },
    scale: String, // 图片缩放参数 widthxheight 如：200x200
    quality: {
      type: [String, Number],
      default: 70
    } // 图片降质参数 0.1 ~ 1 / 1 ~ 99
  },
  computed: {
    handleSrc() {
      // 不是京东云图片 直接返回
      if (!this.isJdHost(this.src)) {
        return this.src;
      }
      let _src = this.src;
      // 已经是webp图片 直接返回
      if (this.isWebp(_src)) {
        // 返回图片前 判断是否是bg类型，如果是 调用模拟加载图片方法
        if (this.type === 'bg') {
          this.checkImgLoad(_src);
        }
        return _src;
      }
      // 判断图片链接是否有拼接参数 ?aabb
      const query = _src.split('?')[1] ? `?${_src.split('?')[1]}` : ''; // 参数部分
      _src = _src.split('?')[0];
      const isJpg = this.isJPG(_src);
      const isPng = this.isPNG(_src);
      // 仅处理JPG和PNG
      if (isJpg || isPng) {
        let appendStr = '';
        // 转换降质参数
        const _q = this.transQuality(this.quality);
        // 判断链接是否已有!q
        const _hasq = this.hasQ(_src);
        if (this.supportWebp) {
          // 单独使用!q70或webp对压缩后上传的png图片可能会变大,同时使用会变小。
          appendStr = _hasq ? '.webp' : `!q${_q}.webp`;
        } else {
          if (isJpg) {
            // dpg仅支持jpg
            appendStr = _hasq ? '.dpg' : `!q${_q}.dpg`;
          }
        }
        _src = `${_src}${appendStr}`;
      }
      // 处理缩放
      if (!this.isScaled() && this.scale) {
        _src = _src.replace(/jfs/g, 's' + this.checkScale(this.scale) + '_jfs');
      }
      _src = `${_src}${query}`;

      if (this.type === 'bg') {
        this.checkImgLoad(_src);
      }
      return _src;
    }
  },
  created() {
    this.supportWebp = this.isSupportWebp();
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
      this.error = true;
      this.$emit('error', e);
    },
    calculatePlaceholderStyle() {
      const { offsetWidth, offsetHeight } = this.$refs['gear-image-compress'];
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
    },
    // 是否京东域名
    isJdHost(src) {
      return /^(http|https):\/\/(.*img\d{2}|m)\.360buyimg\.com/.test(src);
    },
    // 是否已经是webp图片
    isWebp(src) {
      const value = /\.(webp)/i.test(src);
      return value;
    },
    // 是否JPG
    isJPG(src) {
      const value = /\.(jpg|jpeg)/i.test(src);
      return value;
    },
    // 是否PNG
    isPNG(src) {
      const value = /\.(png)/i.test(src);
      return value;
    },
    // 是否已经缩放
    isScaled() {
      const value = /(s.*_jfs)/i.test(this.src);
      return value;
    },
    // 降质参数转换
    transQuality(quality) {
      // 支持1-99之间的整数
      if (!quality || !Number(quality) || Number(quality) > 99 || Number(quality) < 0) {
        return 70;
      }

      const _q = Number(quality) > 1 ? parseInt(quality) : parseInt(quality * 100);
      return _q;
    },
    // 链接里是否已经有!q
    hasQ(src) {
      const value = /(!q\d{1,2})/i.test(src);
      return value;
    },
    // 校验scale格式是否正确
    checkScale(scale) {
      const value = /^\d{1,4}x\d{1,4}$/i;
      if (!value.test(scale)) {
        return '200x200';
      }
      scale = scale.replace(/X/g, 'x');

      const arr = scale.split('x');
      if (Number(arr[0]) === 0 && Number(arr[1]) === 0) {
        return '200x200';
      }

      return scale;
    },
    // 是否支持webp
    isSupportWebp() {
      try {
        return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
      } catch (err) {
        return false;
      }
    },
    // 模拟图片加载
    checkImgLoad(src) {
      const img = new Image();
      img.src = src;
      img.onload = e => {
        this.loading = false;
        this.$emit('load', e);
      };

      img.onerror = e => {
        this.$emit('error', e);
      };
    }
  }
};
</script>

<style lang='scss' scoped>
</style>
