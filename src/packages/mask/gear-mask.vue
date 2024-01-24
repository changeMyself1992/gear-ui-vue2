<template>
  <div class="gear-mask-box">
    <div :class="classes" @click="onClick">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gear-mask',
  props: {
    transparent: {
      type: Boolean,
      default: false
    },
    custmerClassName: {
      type: String,
      default: ''
    },
    unClick: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return ['gear-mask', this.transparent && 'gear-mask-transparent', this.custmerClassName && this.custmerClassName];
    }
  },
  methods: {
    onClick(event) {
      !this.unClick && this.$emit('onClick', event);
    }
  }
};
</script>
