<template>
  <div class="gear-popup-box" ref="gear-popup-box">
    <transition name="gear-popup-animate-bottom" appear>
      <div v-show="visible" class="gear-popup" :style="{ height: popHeight }">
        <slot name="header"></slot>
        <div v-if="$slots.content" class="gear-popup-content" :style="{ height: contentHeight }">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
    <transition name="fade-popup-bg" appear>
      <div v-if="visible" @click="maskClick" class="gear-date-mask"></div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'GearPopup',
  components: {},
  props: {
    /**是否显示浮层 */
    visible: {
      type: Boolean,
      default: false
    },
    /**浮层的高度 */
    popHeight: {
      type: String,
      default: '50%'
    },
    /**是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 */
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  provide: function () {
    return {
      closeMask: this.maskClick
    };
  },
  data() {
    return {
      validateStatus: true,
      label: this.title,
      showModal: this.visible,
      currentClass: '',
      contentHeight: 'auto'
    };
  },
  computed: {},
  watch: {
    visible(newVal) {
      if (newVal) {
        this.showModal = true;
        this.currentClass = '';
      }
    },
    visible: {
      deep: true,
      handler(newVal) {
        if (newVal) {
          this.showModal = true;
          this.currentClass = '';

          setTimeout(() => {
            if (this.$slots['header'] && this.$slots['header'][0] && this.$slots['header'][0].elm) {
              const { offsetHeight } = this.$slots['header'][0].elm;
              return (this.contentHeight = `calc(100% - ${offsetHeight}px)`);
            } else {
              this.contentHeight = 'auto';
            }
          }, 80);
        }
      }
    }
  },
  computed: {},
  mounted() {
    if (this.lockScroll) {
      this.$refs['gear-popup-box'].addEventListener('touchmove', event => {
        event.preventDefault();
      });
    }
  },
  methods: {
    maskClick() {
      this.$emit('update:visible', false);
    }
  }
};
</script>
