<template>
  <div
    class="gear-list-item"
    :class="[
      arrow && 'gear-list-item-link',
      hasDesc && 'gear-list-item-mheight',
      disabled && 'gear-list-item-diasbled',
      border === 'top' ? 'gear-list-item-border-top' : border === 'none' ? '' : 'gear-list-item-border-bottom'
    ]"
    @click="onClick"
  >
    <div class="gear-list-item-icon" v-if="hasIcon">
      <slot name="icon"></slot>
    </div>
    <div class="gear-list-item-inner">
      <div class="gear-list-item-cont">
        <slot name="title">
          <p class="title" v-text="title"></p>
        </slot>
        <slot name="desc">
          <p v-if="desc && typeof desc === 'string'" class="desc" v-text="desc"></p>
          <gear-richtext v-if="desc && typeof desc === 'object'" class="desc" :richData="desc" />
        </slot>
      </div>
      <div class="gear-list-item-after" @click="valueClick">
        <slot name="value">
          <p v-if="value" v-text="value"></p>
        </slot>
        <img class="arrow" src="https://img10.360buyimg.com/imagetools/jfs/t1/80535/7/19436/614/62da4171E71872bd8/9eab0129104f68e1.png" />
        <!-- <i class="arrow"></i> -->
      </div>
    </div>
  </div>
</template>
<script>
import GearRichtext from '../richtext/index.js';
export default {
  name: 'gear-list-item',
  components: {
    GearRichtext
  },
  props: {
    arrow: {
      type: Boolean,
      default: false
    },
    title: String,
    value: [String, Number, Array],
    // 可以是一个字符串，也可以是一个富文本对象
    desc: {
      type: String | Object,
      default: () => {
        return '';
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: String,
      default: 'top'
    }
  },
  data() {
    return {
      hasDesc: !!(this.desc || (this.$slots.desc && this.$slots.desc.length > 0)),
      hasIcon: !!(this.$slots.icon && this.$slots.icon.length > 0)
    };
  },
  methods: {
    onClick() {
      // this.arrow && this.$emit('onClick')
      this.$emit('onClick');
    },
    valueClick() {
      this.$emit('value-click');
    }
  }
};
</script>
