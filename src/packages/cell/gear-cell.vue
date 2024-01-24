<template>
  <div class="gear-cell">
    <div v-for="item in options" class="gear-cell-item" :class="{ 'gear-cell-item-active': item[selectField] === value }" @click="throttleGoodsClick(item)" :key="item[selectField]">
      <slot :slot-props="item"></slot>
      <span class="iconfont icon-select gear-cell-check" v-show="item[selectField] === value"></span>
    </div>
  </div>
</template>
<script>
import throttle from 'lodash/throttle';
// import { SlotsMixin } from '../../mixins/slots';
export default {
  name: 'gear-cell',
  // mixins: [SlotsMixin],
  props: {
    mainTitle: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: function () {
        return [];
      }
    },
    value: {
      default: ''
    },
    selectField: {
      type: String,
      default: 'value'
    },
    throttleTime: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      validateStatus: true,
      label: this.title,
      throttleGoodsClick: () => {}
    };
  },
  beforeCreate() {},
  mounted() {
    // 按钮点击要节流
    this.throttleGoodsClick = throttle(this.updateValue, this.throttleTime, { trailing: false });
  },
  methods: {
    updateValue(item) {
      this.$emit('input', item[this.selectField]);
      this.$emit('select-item', item);
    }
  }
};
</script>
