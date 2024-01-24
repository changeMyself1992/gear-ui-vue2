<template>
  <div class="demo-wrapper custom-wrapper">
    <SidebarLeft />
    <AppMain />
  </div>
</template>

<script>
import SidebarLeft from './components/sidebar-left.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'LayoutBox',
  components: {
    SidebarLeft,
    AppMain
  },
  mixins: [],
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.demo-wrapper {
  background-color: #fff;
  position: relative;
  height: calc(100vh - 80px);
}
</style>
