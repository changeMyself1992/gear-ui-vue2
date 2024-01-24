# 空状态
页面没有内容时缓解焦虑，增加品牌信赖感的页面状态。

## 引入

```javascript
import Vue from 'vue'
import Empty from '@ueip/gear-vuelib/empty'
import '@ueip/gear-vue/lib/empty/index.css'

Vue.use(Empty)

// joyer
import  {Empty}  from '@@ueip-gear-vue/master/index';
```

## vue用法

### 无网络

```javascript

<template>
  <div class="network">
    <div class="empty-box bg2">
      <gear-empty image="network" :description="['没有连接到网络']" :btnList="btnList2"></gear-empty>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnList2: [
        {
          id: 0,
          type: 'white-normal',
          btnLabel: '刷新试试',
          handleClick: () => {
            this.$toast('测试按钮点击');
          }
        }
      ]
    };
  },
  props: {},
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.network {
  padding: 0;
  overflow-x: hidden;
  .des {
    position: absolute;
    left: 0;
    top: 0;
  }
  .empty-box {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .bg2 {
    background-color: #f4f5f7;
  }
  .padding-top45 {
    padding-top: 45px;
  }
}
</style>


```

加载失败

```javascript

<!--  -->
<template>
  <div class="default">
    <div class="empty-box bg1">
      <gear-empty image="default" @click="handleClick"></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {};
  },
  props: {},
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleClick() {
      this.$toast('测试按钮点击');
    }
  }
};
</script>

<style lang='scss' scoped>
.default {
  padding: 0;
  overflow-x: hidden;
  .des {
    position: absolute;
    left: 0;
    top: 0;
  }
  .empty-box {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .bg1 {
    background-color: #f4f5f7;
  }
}
</style>


```

无评论

```javascript

<!--  -->
<template>
  <div class="no-comment">
    <div class="empty-box bg1">
      <gear-empty image="noComment" :description="['还没有评论']" :btnList="btnList1"></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      btnList1: [
        {
          id: 0,
          type: 'white-normal',
          btnLabel: '去评论',
          handleClick: () => {
            this.$toast('测试按钮点击');
          }
        }
      ]
    };
  },
  props: {},
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.no-comment {
  padding: 0;
  overflow-x: hidden;
  .des {
    position: absolute;
    left: 0;
    top: 0;
  }
  .empty-box {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .bg1 {
    background-color: #f4f5f7;
  }
}
</style>


```

购物车为空

```javascript

<!--  -->
<template>
  <div class="no-goods">
    <div class="empty-box bg2">
      <gear-empty image="noGoods" :description="['还没有收藏的商品']" :btnList="btnList6"></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      btnList6: [
        {
          id: 0,
          type: 'white-normal',
          btnLabel: '去浏览',
          handleClick: () => {
            this.$toast('测试按钮点击');
          }
        }
      ]
    };
  },
  props: {},
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.no-goods {
  padding: 0;
  overflow-x: hidden;
  .des {
    position: absolute;
    left: 0;
    top: 0;
  }
  .empty-box {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .bg2 {
    background-color: #f4f5f7;
  }
}
</style>


```

无优惠券

```javascript
<!--  -->
<template>
  <div class="no-coupon">
    <div class="empty-box bg2">
      <gear-empty image="noCoupon" :description="['还没有优惠券']" :btnList="btnList4"></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      btnList4: [
        {
          id: 0,
          type: 'white-normal',
          btnLabel: '去领取',
          handleClick: () => {
            this.$toast('测试按钮点击');
          }
        }
      ]
    };
  },
  props: {},
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.no-coupon {
  padding: 0;
  overflow-x: hidden;
  .des {
    position: absolute;
    left: 0;
    top: 0;
  }
  .empty-box {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .bg2 {
    background-color: #f4f5f7;
  }
}
</style>


```

活动结束

```javascript

<!--  -->
<template>
  <div class="activity-end">
    <div class="empty-box bg2">
      <gear-empty image="activityEnd" :description="['活动结束啦']" :btnList="btnList5"></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      btnList5: [
        {
          id: 0,
          type: 'white-normal',
          btnLabel: '看其他活动',
          handleClick: () => {
            this.$toast('测试按钮点击');
          }
        }
      ]
    };
  },
  props: {},
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.activity-end {
  padding: 0;
  overflow-x: hidden;
  .des {
    position: absolute;
    left: 0;
    top: 0;
  }
  .empty-box {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .bg2 {
    background-color: #f4f5f7;
  }
}
</style>


```

无按钮

```javascript

<!--  -->
<template>
  <div class="no-btn">
    <div class="empty-box bg1">
      <gear-empty :description="['可配置的文案']" :btnList="btnList5" image="https://img14.360buyimg.com/imagetools/jfs/t1/43690/31/17946/1771/62e8d106E15311a06/75be0b37a607afcf.png"></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      btnList5: []
    };
  },
  props: {},
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.no-btn {
  padding: 0;
  overflow-x: hidden;
  .des {
    position: absolute;
    left: 0;
    top: 0;
  }
  .empty-box {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .bg1 {
    background-color: #f4f5f7;
  }
}
</style>


```

有1个按钮

```javascript

<!--  -->
<template>
  <div class="one-btn">
    <div class="empty-box bg2 padding-top45">
      <gear-empty image="https://img14.360buyimg.com/imagetools/jfs/t1/43690/31/17946/1771/62e8d106E15311a06/75be0b37a607afcf.png" :description="['可配置的文案']" :btnList="btnList7"></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      btnList7: [
        {
          id: 0,
          type: 'white-normal',
          btnLabel: '按钮',
          handleClick: () => {
            this.$toast('测试按钮点击');
          }
        }
      ]
    };
  },
  props: {},
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.one-btn {
  padding: 0;
  overflow-x: hidden;
  .des {
    position: absolute;
    left: 0;
    top: 0;
  }
  .empty-box {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .bg2 {
    background-color: #f4f5f7;
  }
}
</style>


```

有2个按钮

```javascript

<!--  -->
<template>
  <div class="two-btn">
    <div class="empty-box bg1">
      <gear-empty
        image="https://img14.360buyimg.com/imagetools/jfs/t1/43690/31/17946/1771/62e8d106E15311a06/75be0b37a607afcf.png"
        :description="['可显示1排文案', '可显示2排文案', '最多可显示3排文案']"
        :btnList="btnList8"
      ></gear-empty>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      btnList8: [
        {
          id: 0,
          type: 'white-normal',
          btnLabel: '次按钮',
          handleClick: () => {}
        },
        {
          id: 1,
          type: 'white',
          btnLabel: '主按钮',
          handleClick: () => {}
        }
      ]
    };
  },
  props: {},
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.two-btn {
  padding: 0;
  overflow-x: hidden;
  .des {
    position: absolute;
    left: 0;
    top: 0;
  }
  .empty-box {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .bg1 {
    background-color: #f4f5f7;
  }
}
</style>


```

## Props

| 字段          | 说明               | 类型                                                                                                    | 默认值        |
| ----------- | ---------------- | ----------------------------------------------------------------------------------------------------- | ---------- |
| image       | 要展示的图片           | noGoods购物车无商品， activityEnd活动已结束，network网络不稳定，noComment无评论，noCoupon无优惠券，default页面数据异常，加载失败,url自定义url图片 | default    |
| description | 描述文字             | Array\|String                                                                                         | ['页面数据异常'] |
| btnList     | 按钮组              | [{ id: 按钮id, type:按钮类型参考gearButton, btnLabel: 按钮文案, handleClick: 按钮事件建议是箭头函数 }]                       | 默认有一个按钮    |
| bodyStyle   | 自定义empty__body样式 | Object                                                                                                |            |