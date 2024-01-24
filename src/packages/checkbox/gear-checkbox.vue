<template>
  <div class="gear-checkbox">
    <div v-for="item in options" class="gear-checkbox-item" :class="{ 'gear-checkbox-item-active': value.includes(item[selectField]) }" @click="updateValue(item)" :key="item[selectField]">
      <span v-if="checkboxType === 'circle'" :class="value.includes(item[selectField]) ? 'circle-selected iconfont icon-select' : 'circle'"></span>
      <div :class="checkboxType === 'circle' ? 'circle-slot-box' : 'tick-slot-box'">
        <slot :slot-props="item"></slot>
      </div>

      <span v-show="checkboxType === 'tick' && value.includes(item[selectField])" class="iconfont icon-select gear-checkbox-check"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gear-checkbox',
  props: {
    options: {
      type: Array,
      default: function () {
        return [];
      }
    },
    value: {
      type: Array,
      default: function () {
        return [];
      }
    },
    selectField: {
      type: String,
      default: 'value'
    },
    checkboxType: {
      type: String,
      default: 'tick' //展示样式， tick对勾，circle圆圈
    }
  },
  data() {
    return {
      validateStatus: true,
      label: this.title
    };
  },
  methods: {
    updateValue(item) {
      if (item.disabled) return;
      this.$emit('select-item', item);
    }
  }
};
</script>
