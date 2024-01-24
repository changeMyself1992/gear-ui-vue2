# Popover 气泡弹出框

弹出式的气泡菜单。

## 引入

```javascript
import Vue from 'vue'
import Popover from '@ueip/gear-vue/lib/popover'
import '@ueip/gear-vue/lib/popover/index.css'
Vue.use(Popover)
```

## vue用法

```javascript
<template>
  <div class="popover-demo">
    <div class="popover-demo-top">
      <gear-popover
        style="margin-left: 70px"
        v-model="show0"
        trigger="click"
        :actions="actions0"
        placement="bottom-end"
      >
        <template slot="reference">
          <gear-button type="white-normal" size="small"> 禁用 </gear-button>
        </template>
      </gear-popover>

      <gear-popover
        v-model="show1"
        trigger="click"
        :actions="actions1"
        placement="bottom-end"
      >
        <template slot="reference">
          <gear-button type="white-normal" size="small"> 禁用 </gear-button>
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
  padding: 40px 12px 0 12px;
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
```

## Props

| 字段                     | 说明                   | 类型               | 默认值    | 是否必要 |
| ---------------------- | -------------------- | ---------------- | ------ | ---- |
| v-model (value)        | 是否展示气泡弹出层            | boolean          | false  | 是    |
| actions                | 选项列表                 | Action[]         | []     | 是    |
| placement              | 弹出位置                 | string           | bottom | 否    |
| theme                  | 主题风格，可选值为 light/dark | string           | dark   | 否    |
| offset                 | 出现位置的偏移量             | [number, number] | [0, 8] | 否    |
| overlay                | 是否显示遮罩层              | boolean          | false  | 否    |
| close-on-click-action  | 是否在点击选项后关闭           | boolean          | false  | 否    |
| close-on-click-outside | 是否在点击外部元素后关闭菜单       | boolean          | false  | 否    |

### Action

| 字段         | 说明                                                                                                                    | 类型      | 默认值 | 是否必要 |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ------- | --- | ---- |
| text       | 选项文字                                                                                                                  | string  |     | 是    |
| icon       | 文字左侧的图标，要求是图片链接                                                                                                       | string  |     | 否    |
| disabled   | 是否为禁用状态                                                                                                               | boolean |     | 否    |
| className  | 为对应选项添加额外的类名                                                                                                          | string  |     | 否    |
| badgeProps | Badge徽标参数，<a href="https://utest.jr.jd.com/doc/#/jrui-component/v2/base-component/show-demo" target="_blank">详细说明</a> | object  |     | 否    |

### placement-弹出位置

top # 顶部中间位置 

top-start # 顶部左侧位置

top-end # 顶部右侧位置

left # 左侧中间位置 

left-start # 左侧上方位置

left-end # 左侧下方位置 

right # 右侧中间位置 

right-start # 右侧上方位置

right-end # 右侧下方位置 

bottom # 底部中间位置 

bottom-start # 底部左侧位置 

bottom-end # 底部右侧位置

## Events

| 事件名    | 说明      | 回调参数                |
| ------ | ------- | ------------------- |
| select | 点击选项时触发 | Action，index:number |
| open   | 打开菜单时触发 |                     |
| close  | 关闭菜单时触发 |                     |