<template>
  <gear-field :label="label" :errorLabel="errorLabel" :state="validateStatus" :isFocus="isFocus" :direction="direction" @label-click="onLabelclick" :border="border" :itemType="itemType">
    <div class="gear-field-control gear-field-input" :class="{ 'gear-field-input-with-icon': $slots.icon }">
      <input
        :type="type"
        :disabled="disabled"
        autocomplete="off"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
        v-model="currentVal"
        :placeholder="getPlaceholder"
        :maxlength="max"
        ref="input"
      />
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
  name: 'GearInput',
  props: {
    itemType: {
      type: String,
      default: 'card' // card卡片 banner通栏
    },
    type: {
      type: String,
      default: 'text'
    },
    direction: {
      type: String,
      default: 'row'
    },
    max: String,
    // 可以是一个字符串，也可以是一个richtext富文本对象
    title: {
      type: [String, Object],
      default: () => ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    border: {
      type: String,
      default: ''
    },
    validateOption: {
      type: Object,
      default: () => ({
        type: '',
        errorText: '',
        pattern: ''
      })
    }
  },
  components: {
    GearField
  },
  data() {
    return {
      active: false,
      label: this.title,
      errorLabel: '',
      currentVal: this.value,
      isFocus: false,
      pattern: '',
      validateStatus: true,
      placeholderText: this.placeholder
    };
  },
  created() {
    // console.log(this.$slots.icon);
    if (this.value) {
      this.isFocus = true;
    }
    if (this.validateOption.pattern) {
      this.pattern = this.validateOption.pattern;
    } else {
      switch (this.validateOption.type) {
        case 'mobile':
          this.pattern = /^1\d{10}$/;
          break;
        case 'email':
          this.pattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
          break;

        default:
          break;
      }
    }
  },
  methods: {
    onLabelclick() {
      if (!this.value) this.isFocus = true;
      this.$refs.input.focus();
    },
    validate() {
      if (this.pattern) {
        if (this.pattern.test(this.currentVal)) {
          this.validateStatus = true;
        } else {
          this.errorLabel = this.validateOption.errorText;
          this.validateStatus = false;
        }
      }
    },
    inputResetValidate() {
      if (this.validateOption.type === 'mobile') {
        if (this.pattern.test(this.currentVal)) {
          this.validateStatus = false;
          this.placeholderText = this.placeholder;
        }
      }
    },

    cleanVal() {
      this.currentVal = '';
      this.$refs.input.focus();
      this.$emit('input');
      this.$emit('on-clean-value');
    },
    onFocus() {
      this.isFocus = true;
      setTimeout(() => {
        this.active = true;
      }, 100);
    },
    onBlur() {
      if ((!this.currentVal && this.direction === 'column') || this.direction === 'row') this.isFocus = false;
      setTimeout(() => {
        this.active = false;
        this.validate();
      }, 200);
    },
    onChange() {
      this.validate();
    },
    onInput() {
      if (!this.active) {
        this.active = true;
      }
      this.$emit('input', this.currentVal);
    }
  },
  computed: {
    isInputFocus() {
      return this.isFocus || this.currentVal;
    },
    getPlaceholder() {
      return this.direction !== 'column' && this.placeholder;
    }
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.isFocus = true;
      }
      this.currentVal = newVal;
    },
    currentVal(newVal) {
      this.$emit('input', newVal);
    }
  },
  mounted() {}
};
</script>
