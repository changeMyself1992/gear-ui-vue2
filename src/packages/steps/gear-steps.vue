<template>
  <div :class="['gear-steps', `gear-steps--${direction}`]">
    <div class="gear-steps__items">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { createUuid } from '../../utils/index';
export default {
  name: 'GearSteps',
  mixins: [],
  props: {
    // 设置当前激活步骤索引
    active: {
      type: Number,
      default: -1
    },
    // 显示方向 vertical/horizontal
    direction: {
      type: String,
      default: 'horizontal'
    },
    // 当前步骤的状态
    processStatus: {
      type: String,
      default: 'finish' // wait未开始 process处理中 finish完成,error失败
    }
  },
  components: {},
  provide: function () {
    return {
      uuid: this.uuid
    };
  },
  data() {
    return {
      stepNum: 0,
      uuid: createUuid()
    };
  },
  created() {},
  mounted() {
    const array = [];
    this.findStepChildren(this, array);
    this.stepNum = array.length;
  },
  computed: {},
  watch: {},
  methods: {
    findStepChildren(VueComponent, resArray = []) {
      const { $children } = VueComponent;
      if ($children.length > 0) {
        for (let i = 0; i < $children.length; i++) {
          const element = $children[i];
          const {
            $options: { _componentTag }
          } = element;
          if (_componentTag === 'gear-step') {
            resArray.push(element);
          } else {
            this.findStepChildren(element, resArray);
          }
        }
      }
    }
  },
  beforeDestroy() {}
};
</script>
