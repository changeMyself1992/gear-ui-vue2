<template>
  <div class="gear-tab-content">
    <div :class="{ 'gear-tab-item': true, 'gear-tab-item-select': index == selected }" v-for="(item, index) in tabs" :key="'tab-' + index" @click="tabClick(index)">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'gear-tab',
  components: {},
  data() {
    console.log(this.selectIndex);
    return {
      selected: this.selectIndex
    };
  },
  props: {
    tabs: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    },
    selectIndex: {
      type: Number,
      default: 0
    }
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    tabClick(index) {
      if (this.tabs[index].selectEnable) {
        this.selected = index;
      }
      this.$emit('tabClick', index, this.tabs[index].selectEnable);
    }
  }
};
</script>

<style lang="scss">
.gear-tab-content {
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.gear-tab-item {
  height: 100%;
  text-align: center;
  line-height: 80px;
  margin: 0 22px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
  // width: 40px;
  cursor: pointer;
}
.gear-tab-item-select {
  color: rgba(239, 64, 52, 1);
  font-weight: 700;
  position: relative;

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: calc((100% - 36px) / 2);
    width: 36px;
    height: 4px;
    background-color: red;
  }
}
</style>
