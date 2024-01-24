<template>
  <span class="gear-button" @click="handleClick" :class="[type ? 'gear-button-' + type : '', disabled ? 'gear-button-disabled' : '', 'gear-button-' + size]">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: 'gearButton',
  props: {
    /** 按钮有四种类型：short（主按钮）、white(线框主按钮)、white-normal(线框次按钮)  text(文本按钮) disabled(禁用按钮) */
    type: {
      type: String,
      default: 'short'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // large大 medium中 small小 smallest最小
    size: {
      type: String,
      default: 'large'
    }
  },
  mounted() {
    // 如果是small大小，
    // console.log(1111, this.$slots.default)
  },
  methods: {
    handleClick(evt) {
      if (!this.disabled) this.$emit('click', evt);
    }
  }
};
</script>
