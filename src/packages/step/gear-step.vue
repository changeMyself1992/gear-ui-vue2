<template>
  <div class="gear-step" :style="stepStyle">
    <div v-if="fromParentDirection === 'horizontal'" class="gear-step__horizontal">
      <div :class="['gear-step__horizontal__index', calculationState && `gear-step__horizontal__index--${calculationState}`]">
        <span>{{ stepContent('index') }}</span>
      </div>
      <div :class="['gear-step__horizontal__title', calculationState && `gear-step__horizontal__title--${calculationState}`]">{{ title }}</div>
      <div :class="['gear-step__horizontal__line', lineClass]"></div>
    </div>
    <div v-if="fromParentDirection === 'vertical'" class="gear-step__vertical">
      <div :class="['gear-step__vertical__title', calculationState && `gear-step__vertical__title--${calculationState}`]">{{ title }}</div>
      <div :class="['gear-step__vertical__description', calculationState && `gear-step__vertical__description--${calculationState}`]">{{ description }}</div>
      <div :class="['gear-step__vertical__circle', calculationState && `gear-step__vertical__circle--${calculationState}`]">{{ calculationState === 'wait' ? index + 1 : '' }}</div>
      <div :class="['gear-step__vertical__line', verticalLineClass]"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GearStep',
  inject: ['uuid'],
  props: {
    /**步骤标题 */
    title: {
      type: String,
      default: ''
    },
    /**步骤描述，仅在 steps显示方向为vertical时生效 */
    description: {
      type: String,
      default: ''
    },
    /**步骤索引值 */
    index: {
      type: Number,
      default: 0
    },
    // 设置当前步骤的状态，不设置则根据 steps 确定状态
    status: {
      type: String,
      default: '' // wait未开始 process处理中 finish完成,error失败
    }
  },
  components: {},
  data() {
    return {
      verticalLineClass: 'gear-step__vertical__line--wait'
    };
  },
  computed: {
    // steps组件实例
    parent() {
      let parentComponent = this;
      while (parentComponent) {
        if (parentComponent.$options._componentTag === 'gear-steps') {
          break;
        }
        parentComponent = parentComponent.$parent;
      }
      return parentComponent;
    },
    fromParentDirection() {
      return this.parent.direction || '';
    },
    // 计算当前步骤状态
    calculationState() {
      let str = 'wait';
      if (this.status) str = this.status;
      else if (this.index > this.parent.active) str = 'wait';
      else if (this.index === this.parent.active) str = this.parent.processStatus;
      else if (this.parent && this.index < this.parent.active) str = 'finish';
      // console.log('触发监听：', this.uuid);
      this.$bus.$emit(`brotherEvent-${this.uuid}`, this.index, str);
      return str;
    },
    lineClass() {
      if (this.fromParentDirection === 'horizontal') {
        if (this.parent.active > this.index) {
          return `gear-step__horizontal__line--finish`;
        } else {
          return `gear-step__horizontal__line--wait`;
        }
      }
    },
    // 计算step动态样式
    stepStyle() {
      let style = {};
      if (this.fromParentDirection === 'horizontal') {
        if (this.parent.stepNum >= 4) {
          style.width = '25%';
        } else {
          style.flex = '1';
        }
      }

      return style;
    }
  },
  created() {
    // console.log('绑定监听：', this.uuid);
    this.$bus.$on(`brotherEvent-${this.uuid}`, this.monitorSiblingComponentStatus.bind(this));
  },
  mounted() {},

  watch: {},
  methods: {
    // 步骤元素，在各个状态下的内容返回
    stepContent(mode) {
      if (this.fromParentDirection === 'horizontal') {
        if (mode === 'index') {
          if (this.calculationState === 'wait') {
            return this.index + 1;
          }
          if (this.calculationState === 'process') {
            return '';
          }
          if (this.calculationState === 'finish') {
            return this.index + 1;
          }
          if (this.calculationState === 'error') {
            return '';
          }
        }
      }
      return '';
    },
    monitorSiblingComponentStatus(idx, state) {
      console.log(`自身索引${this.index}监听到兄弟索引${idx},状态变化为${state}`);
      if (this.fromParentDirection === 'vertical') {
        // 如果下一个步骤是finish状态，那么我才显示绿线，否则全是灰线
        if (this.index + 1 === idx && state === 'finish') {
          this.verticalLineClass = `gear-step__vertical__line--finish`;
        }
      }
    }
  }
};
</script>
