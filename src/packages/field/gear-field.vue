<template>
  <div class="field-container" :class="[borderClass]">
    <div
      :class="[direction === 'column' ? 'gear-field' : 'gear-field-inline', isFocus ? 'gear-field--focus' : '', !state ? 'gear-field-error-inline' : '']"
      @click="onClick"
      :style="{ flexDirection }"
    >
      <!--
    * 1. column结构，标题和异常内容在同一个位置显示
    * 1.1 异常得时候不显示标题
    * 2. row结构，标题和异常内容不在同一个位置显示
    * 2.1 异常得时候标题和异文本同时显示
    -->
      <template v-if="direction === 'column'">
        <div v-if="state" class="gear-column-label">{{ label }}</div>
        <div v-else class="gear-column-field-label">{{ errorLabel }}</div>
      </template>

      <template v-if="direction === 'row'">
        <div v-if="typeof label === 'string'" class="gear-row-label">{{ label }}</div>
        <gear-richtext v-if="typeof label === 'object'" class="gear-row-label" :richData="label" />
      </template>
      <slot></slot>
    </div>
    <div v-if="!state && direction === 'row'" class="gear-row-field-label">{{ errorLabel }}</div>
  </div>
</template>
<script>
import GearRichtext from '../richtext/index.js';
export default {
  name: 'GearField',
  components: {
    GearRichtext
  },
  props: {
    state: {
      type: Boolean,
      default: true
    },
    value: {},
    // 可以是一个字符串，也可以是一个richtext富文本对象
    label: {
      type: String | Object,
      default: () => {
        return '';
      }
    },
    errorLabel: {
      type: String,
      default: ''
    },
    border: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'column'
    },
    isFocus: {
      type: Boolean,
      default: false
    },
    validateOption: {
      type: Object,
      default: () => {
        return {
          type: '',
          errorText: ''
        };
      }
    },
    flexDirection: {
      type: String,
      default: ''
    },
    itemType: {
      type: String,
      default: 'card' // card卡片 banner通栏
    }
  },
  data() {
    return {
      inputValue: this.value,
      formDom: null,
      pattern: /^1\d{10}$/,
      error: false,
      placeholderText: this.placeholder
    };
  },
  methods: {
    onClick() {
      this.$emit('label-click');
    },
    validate() {
      if (this.validateOption.type === 'mobile') {
        if (!this.pattern.test(this.inputValue)) {
          this.error = true;
          this.placeholderText = this.validateOption.errorText;
        } else {
          this.error = false;
        }
      }
    },
    inputResetValidate() {
      if (this.validateOption.type === 'mobile') {
        if (this.pattern.test(this.inputValue)) {
          this.error = false;
          this.placeholderText = this.placeholder;
        }
      }
    },
    cleanVal() {
      this.inputValue = '';
      this.formDom.focus();
    },
    onFocus() {
      console.log(this.$refs);
    },
    onBlur() {
      // this.validate()
    },
    onChange() {
      this.validate();
    },
    onInput() {
      if (this.validateOption.type) this.inputResetValidate();
    }
  },
  computed: {
    borderClass() {
      if (this.border === 'bottom') {
        if (!this.state && this.direction === 'row') {
          if (this.itemType === 'card') {
            return 'gear-field-inline-border-bottom';
          } else {
            return 'gear-field-inline-border-bottom-banner';
          }
        }

        if (this.itemType === 'card') {
          return 'gear-field-border-bottom';
        } else {
          return 'gear-field-border-bottom-banner';
        }
      } else if (this.border === 'top') {
        if (!this.state && this.direction === 'row') {
          if (this.itemType === 'card') {
            return '.gear-field-inline-border-top';
          } else {
            return '.gear-field-inline-border-top-banner';
          }
        }

        if (this.itemType === 'card') {
          return 'gear-field-border-top';
        } else {
          return 'gear-field-border-top-banner';
        }
      }
      return '';
    }
  },
  watch: {
    value(newVal) {
      this.checkValue = newVal;
    },
    inputValue(newVal) {
      this.$emit('input', newVal);
    }
  },
  mounted() {
    this.formDom = this.$el.querySelector('input');
  }
};
</script>
