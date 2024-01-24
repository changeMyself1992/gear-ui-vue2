<template>
  <div class="popover-demo">
    <div class="popover-demo-top">
      <gear-popover
        style="margin-left: 68px"
        v-model="show0"
        trigger="click"
        :actions="actions0"
        placement="bottom-end"
      >
        <template slot="reference">
          <gear-button type="white-normal" size="small" style="opacity: 0"> 禁用 </gear-button>
        </template>
      </gear-popover>

      <gear-popover
        v-model="show1"
        trigger="click"
        :actions="actions1"
        placement="bottom-end"
      >
        <template slot="reference">
          <gear-button type="white-normal" size="small" style="opacity: 0"> 禁用 </gear-button>
        </template>
      </gear-popover>
    </div>

    <gear-popover
      v-model="show2"
      trigger="click"
      :actions="actions2"
      placement="bottom-end"
      @select="
        action => {
          onSelect(action, 2);
        }
      "
    >
      <template slot="reference">
        <gear-button class="custom-btn" type="short"> 点击查看动画展开效果 </gear-button>
      </template>
    </gear-popover>
  </div>
</template>

<script>
export default {
  name: 'popover-demo',
  data() {
    return {
      show0: true,
      actions0: [
        { text: '扫一扫', icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/145824/15/40556/563/64d30020F5258348a/82b88f6a1bc4c92a.png' },
        {
          text: '付款码',
          icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/214121/29/35348/450/64d30020Fde9f723d/59195261541669ee.png',
          badgeProps: {
            showType: 'dot',
            badgeStyle: {
              transform: 'translate(50%,-50%)'
            }
          }
        },
        { text: '帮助与反馈码', icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/214121/29/35348/450/64d30020Fde9f723d/59195261541669ee.png' }
      ],



      show1: true,
      // actions1: [{ text: '扫一扫' }, { text: '付款码' }, { text: '帮助与反馈码' }],
      actions1: [
        { text: '扫一扫', icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/145824/15/40556/563/64d30020F5258348a/82b88f6a1bc4c92a.png' },
        {
          text: '付款码',
          icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/214121/29/35348/450/64d30020Fde9f723d/59195261541669ee.png',
          badgeProps: {
            showType: 'dot',
            badgeStyle: {
              transform: 'translate(50%,-50%)'
            }
          }
        }
      ],
      show2: false,
      actions2: [
        {
          text: '扫一扫',
          icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/145824/15/40556/563/64d30020F5258348a/82b88f6a1bc4c92a.png',
          badgeProps: {
            showType: 'dot',
            badgeStyle: {
              transform: 'translate(50%,-50%)'
            }
          }
        },
        {
          text: '付款码',
          icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/214121/29/35348/450/64d30020Fde9f723d/59195261541669ee.png'
        },
        {
          text: '帮助与反馈码',
          icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/214121/29/35348/450/64d30020Fde9f723d/59195261541669ee.png'
        }
      ]
    };
  },
  components: {},
  watch: {
    show0:{
      handler(newVal, oldVal) {
        if (!newVal) {
          this.show0 = true
        }
      },
      immediate: true
    },
    show1:{
      handler(newVal, oldVal) {
        if (!newVal) {
          this.show1 = true
        }
      },
      immediate: true
    },
  },
  methods: {
    onSelect(action, index) {
      this.$toast(action.text);
      if (action?.badgeProps?.showType && action.badgeProps.showType === 'dot') {
        this[`actions${index}`] = this[`actions${index}`].map(item => {
          if (item.text === action.text) item.badgeProps = {};
          return item;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.popover-demo {
  margin: 0;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  &-top {
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 0 auto 180px;
  }
}

.custom-btn {
  width: 300px;
  background-color: #fff;
  color: #333333;
  font-weight: bold;
  position: relative;
  &::after {
    content: ' ';
    position: absolute;
    right: 3px;
    top: 50%;
    transform: translateY(-50%);

    width: 44px;
    height: 44px;
    background-image: url(https://img13.360buyimg.com/imagetools/jfs/t1/203311/26/33083/1658/64d2f84dFa556fa6d/877db55568f51eb1.png);
    background-size: 100% 100%;
  }
}
</style>
