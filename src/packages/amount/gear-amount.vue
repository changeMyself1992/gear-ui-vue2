<template>
  <div class="gear-field-amount" :class="itemType === 'card' ? 'gear-field-amount-card' : 'gear-field-amount-banner'">
    <div v-if="title" class="title">{{ title }}</div>
    <div class="input-box">
      <div v-if="value" class="unit-box">
        <div class="unit-des">
          <span class="unit-des-span">{{ unitDes }}</span>
        </div>
      </div>

      <gear-field :errorLabel="errorLabel" :state="validateStatus" :border="border" direction="row" :itemType="itemType">
        <div class="gear-field-amount-input" :class="{ 'gear-field-amount-input-with-icon': $slots.icon }">
          <div class="amount-sign-box">
            <i v-if="!$slots.sign" class="iconfont icon-rmb1 sign"></i>
            <slot name="sign"></slot>
          </div>
          <input
            style="width: 0"
            type="number"
            :disabled="disabled"
            :class="{ 'gear-field-disable': disabled }"
            autocomplete="off"
            @input="onInput"
            @focus="onFocus"
            @blur="onBlur"
            v-model="currentVal"
            :placeholder="placeholder"
            :maxlength="max"
            ref="input"
          />
          <div v-show="showCleanIcon" class="gear-field-icon-wrap">
            <i class="gear-field-clean-icon" @click="cleanVal"></i>
            <slot name="icon"></slot>
          </div>

          <div v-if="shortcutBtnLabel" class="shortcut-btn" @click="shortcutBtnClick">{{ shortcutBtnLabel }}</div>
        </div>

        <div v-if="options.length > 0" class="options-box" :class="{ 'options-box--validate': !validateStatus }">
          <div v-for="item in options" class="option-item" :key="item.id" @click="optionClick(item.value)">
            <span>{{ item.value }}元</span>
          </div>
        </div>
      </gear-field>
    </div>
  </div>
</template>
<script>
import GearField from '../field/index.js';

export default {
  name: 'GearAmount',
  components: { GearField },
  props: {
    itemType: {
      type: String,
      default: 'card' // card卡片 banner通栏
    },
    title: {
      type: String,
      default: ''
    },
    max: String,
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
        getErrorText() {},
        pattern: ''
      })
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    shortcutBtnLabel: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      active: false,
      label: this.title,
      errorLabel: '',
      currentVal: this.value,
      formDom: null,
      validateStatus: true,
      placeholderText: this.placeholder
    };
  },
  computed: {
    unitDes() {
      if (this.value >= 1 && this.value < 1e1) {
        return '个';
      } else if (this.value >= 1e1 && this.value < 1e2) {
        return '十';
      } else if (this.value >= 1e2 && this.value < 1e3) {
        return '百';
      } else if (this.value >= 1e3 && this.value < 1e4) {
        return '千';
      } else if (this.value >= 1e4 && this.value < 1e5) {
        return '万';
      } else if (this.value >= 1e5 && this.value < 1e6) {
        return '十万';
      } else if (this.value >= 1e6 && this.value < 1e7) {
        return '百万';
      } else if (this.value >= 1e7 && this.value < 1e8) {
        return '千万';
      } else if (this.value >= 1e8 && this.value < 1e9) {
        return '亿';
      } else if (this.value >= 1e9 && this.value < 1e10) {
        return '十亿';
      } else if (this.value >= 1e10 && this.value < 1e11) {
        return '百亿';
      } else if (this.value >= 1e11 && this.value < 1e12) {
        return '千亿';
      } else if (this.value >= 1e12) {
        return '未知单位';
      }
      // 兜底
      return '个';
    },
    showCleanIcon() {
      return this.value != '' && !this.disabled && this.active && !this.$slots.icon;
    }
  },
  watch: {
    value(newVal) {
      this.currentVal = newVal;
      this.validate();
    }
  },
  created() {},
  mounted() {
    this.formDom = this.$el.querySelector('input');
  },
  methods: {
    validate() {
      const { pattern } = this.validateOption;
      if (!pattern) return;
      if (typeof pattern === 'function') {
        if (pattern(this.value)) {
          this.validateStatus = true;
        } else {
          this.errorLabel = this.validateOption.errorText || this.validateOption.getErrorText(this.value);
          this.validateStatus = false;
        }
      }
      if (typeof pattern === 'object' && pattern.constructor.name === 'RegExp') {
        if (this.validateOption.pattern.test(this.value)) {
          this.validateStatus = true;
        } else {
          this.errorLabel = this.validateOption.errorText || this.validateOption.getErrorText(this.value);
          this.validateStatus = false;
        }
      }
    },
    focus() {
      this.active = true;
      this.$res.input.focus();
    },
    cleanVal() {
      this.currentVal = '';
      this.formDom.focus();
      this.$emit('input', this.currentVal);
      this.$emit('on-clean-value');
    },
    shortcutBtnClick() {
      this.$emit('on-shortcutBtn-click');
    },
    onFocus() {
      setTimeout(() => {
        this.active = true;
      }, 100);
    },
    onBlur() {
      setTimeout(() => {
        this.active = false;
        this.validate();
      }, 200);
    },
    onInput() {
      if (!this.active) {
        this.active = true;
      }
      this.$emit('input', this.currentVal);
    },
    optionClick(value) {
      this.currentVal = String(value);
      this.$emit('input', this.currentVal);
    }
  }
};
</script>
