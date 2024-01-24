<template>
  <gear-field :label="label" @label-click="onLabelclick" :isFocus="isFocus" :direction="direction" :border="border">
    <div class="gear-field-control gear-field-textarea" :style="{ paddingBottom: paddingBottom + 'px' }">
      <textarea
        rows="1"
        :placeholder="placeholder"
        autocomplete="off"
        v-model="currentVal"
        @input="onInput"
        @change="onChange"
        @propertychange="onChange"
        @blur="onBlur"
        @focus="onFocus"
        ref="textarea"
      ></textarea>
      <div class="gear-field-icon-wrap">
        <i class="gear-field-clean-icon" @click="cleanVal" v-show="currentVal != '' && !disabled && active && !$slots.icon"></i>
        <slot name="icon"></slot>
      </div>
    </div>
  </gear-field>
</template>
<script>
import GearField from '../field/index.js';
export default {
  name: 'GearTextarea',
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'row'
    },
    placeholder: {
      type: String,
      default: ''
    },
    border: {
      type: String,
      default: ''
    }
  },
  components: {
    GearField
  },
  data() {
    return {
      active: false,
      label: this.title,
      isFocus: false,
      currentVal: this.value,
      paddingBottom: 0
    };
  },
  methods: {
    onLabelclick() {
      this.isFocus = true;
      this.$refs.textarea.focus();
    },

    onFocus() {
      this.isFocus = true;
      setTimeout(() => {
        this.active = true;
      }, 100);
    },
    onBlur() {
      this.isFocus = false;
      setTimeout(() => {
        this.active = false;
      }, 200);
    },

    onInput() {
      this.resizeHeight();
      this.$emit('input', this.currentVal);
      if (!this.active) {
        this.active = true;
      }
    },
    onChange() {
      this.resizeHeight();
      this.$emit('input', this.currentVal);
    },
    resizeHeight() {
      // console.log(1)
      // console.log(this.$refs.textarea.scrollHeight)
      const textareaDom = this.$refs.textarea;
      const scrollHeight = textareaDom.scrollHeight;
      if (scrollHeight > 30 && this.direction === 'column') {
        this.paddingBottom = 12;
      } else if (this.direction === 'row') {
        this.paddingBottom = 16;
      }
      let height = 0;
      const style = textareaDom.style;
      var minHeight = 22;
      textareaDom.style.height = minHeight + 'px';
      if (textareaDom.scrollHeight > minHeight) {
        height = textareaDom.scrollHeight;
        style.height = height + 'px';
      }
    },

    cleanVal() {
      this.currentVal = '';
      this.$refs.textarea.focus();
      this.$emit('input');
      this.$emit('on-clean-value');
    }
  },
  created() {},
  computed: {},
  mounted() {
    this.formDom = this.$el.querySelector('textarea');
    this.resizeHeight();
  },
  watch: {
    value(newVal) {
      this.currentVal = newVal;
    },
    currentVal(newVal) {
      this.$emit('change', newVal);
      this.$emit('input', newVal);
    }
  }
};
</script>
