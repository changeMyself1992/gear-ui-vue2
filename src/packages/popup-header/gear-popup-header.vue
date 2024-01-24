<template>
  <div class="gear-popup-header">
    <div class="gear-popup-main-title">
      <p :style="{ 'text-align': textAlign }">{{ mainTitle }}</p>
      <span class="iconfont icon-close-2 close" @click.stop="closePopup"></span>
    </div>
    <p v-show="subTitle" class="gear-popup-sub-title" :style="{ 'text-align': textAlign }">{{ subTitle }}</p>
  </div>
</template>
<script>
export default {
  name: 'gear-popup-header',
  inject: {
    closeMask: { default: undefined }
  },
  props: {
    mainTitle: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    textAlign: {
      type: String,
      default: 'center'
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    closePopup() {
      this.closeMask && this.closeMask();
      this.$emit('close-header');
    }
  },
  computed: {},
  watch: {}
};
</script>
