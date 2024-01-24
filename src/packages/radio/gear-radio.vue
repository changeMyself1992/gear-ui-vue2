<template>
  <div ref="gear-radio" class="gear-radio">
    <div v-for="item in options" class="gear-radio-item" :class="{ 'gear-radio-item-active': item[selectField] === value }" @click="updateValue(item)" :key="item[selectField]" :style="slotBoxStyle">
      <span v-if="radioType === 'circle'" :class="item[selectField] === value ? 'circle-selected iconfont icon-select' : 'circle'"></span>

      <div
        :class="[
          radioType === 'circle' && 'circle-slot-box',
          radioType === 'tick' && 'tick-slot-box',
          radioType === 'equalizationLayout' && 'equalizationLayout-slot-box',
          radioType === 'equalizationLayout' && item[selectField] === value && 'equalizationLayout-slot-box--active',
          radioType === 'adaptiveLayout' && 'adaptiveLayout-slot-box',
          radioType === 'adaptiveLayout' && item[selectField] === value && 'adaptiveLayout-slot-box--active'
        ]"
      >
        <slot :slot-props="item"></slot>
      </div>

      <span v-if="radioType === 'tick' && item[selectField] === value" class="iconfont icon-select gear-radio-check"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gear-radio',
  props: {
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
    radioType: {
      type: String,
      default: 'tick' //单选展示样式， tick对勾，circle圆圈，equalizationLayout边框均分布局,adaptiveLayout 自适应布局
    }
  },
  data() {
    return {
      childElemtnt: []
    };
  },
  mounted() {
    this.childElemtnt = this.$refs['gear-radio'].childNodes;
  },
  computed: {
    slotBoxStyle() {
      const style = {};
      if (this.radioType === 'equalizationLayout' && this.childElemtnt.length > 0) {
        const array = Array.from(this.childElemtnt);
        let width = 0;
        for (let i = 0; i < array.length; i++) {
          // console.log(array[i].getClientRects()[0]);
          const { width: recWidth } = array[i].getClientRects()[0];
          if (recWidth > width) width = recWidth;
        }
        style.width = `${width}px`;
      }
      return style;
    }
  },
  methods: {
    updateValue(item) {
      if (item.disabled) return;
      this.$emit('input', item[this.selectField]);
      this.$emit('select-item', item);
    }
  }
};
</script>
