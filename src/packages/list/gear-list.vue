<template>
  <div class="gear-list">
    <div class="gear-list-title" v-if="title" v-text="title" :style="titleStyle"></div>
    <div class="gear-list-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gear-list',
  props: {
    title: String,
    titleStyle: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>
