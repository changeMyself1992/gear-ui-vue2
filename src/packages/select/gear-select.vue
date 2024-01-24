<template>
  <gear-field :label="label" :isFocus="hasValue" :direction="direction" :border="border" @label-click="onClick">
    <div class="gear-field-control gear-field-select">
      <span class="gear-select-show" :style="{ color: getColor }" :class="{ 'gear-field-hasvalue': value }">{{ textTrans }}</span>
      <i class="gear-select-icon"></i>
    </div>
  </gear-field>
</template>
<script>
import GearField from '../field/index.js';
export default {
  name: 'GearSelect',
  props: {
    direction: {
      type: String,
      default: 'row'
    },
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    border: {
      type: String,
      default: ''
    },
    prompt: {
      type: Boolean,
      default: false
    }
  },
  components: {
    GearField
  },
  data() {
    return {
      isFocus: false,
      placeholderText: this.placeholder,
      label: this.title
    };
  },
  methods: {
    onClick() {
      this.$emit('get-select');
    }
  },
  computed: {
    textTrans() {
      if (this.direction === 'row') {
        return this.value || this.placeholder;
      } else {
        return this.value;
      }
    },
    getColor() {
      return this.prompt ? '#CC8C4E' : this.value ? '#333' : '#999';
    },
    hasValue() {
      return this.value !== '';
    }
  }
};
</script>
