# 地址选择组件

## 引入

```javascript
// npm
本地需要安装，axios：0.21.1
import Vue from 'vue'
import  Address from '@ueip/gear-vue/lib/address'
import '@ueip/gear-vue/lib/address/index.css'

Vue.use(Address)

// joyer
import  {Address}  from '@@ueip-gear-vue/master/index.js';
Vue.use(Address)

```

## vue用法

```javascript
<template>
  <div>
    <gear-address
      v-model="selectArr"
      :visible.sync="visible"
      @select-change="getItem"
      @select-item="changeData"
      :other-param="otherParam"
      query-url="https://ms.jr.jd.com/gw/generic/jrm/h5/m/querySubItemList"
    ></gear-address>
    <div class="padding">
      <p>选择的值:{{ selectArr }}</p>
    </div>
    <div class="padding">
      <p>选择的显示的值:{{ dataShow | filterArea }}</p>
    </div>
    <div class="padding">
      <gear-button type="white" @click="visible = !visible"> 显示地址选择 </gear-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-address',
  data() {
    return {
      dataShow: [],
      dataArray: [],
      selectArr: ['1', '72', '55692'],
      visible: false,
      otherParam: {}
    };
  },
  filters: {
    filterArea(value) {
      return value.reduce((prev, next) => {
        return (prev += next.name);
      }, '');
    }
  },
  components: {
    // ComHeader
  },
  methods: {
    getItem(data) {
      console.log('data:::', data);
      this.dataShow = data;
    },
    changeData(val, current) {
      console.log('val:::', val);
      console.log('current:::', current);
    }
  }
};
</script>
```

## Props

| 字段         | 说明                                                                                                               | 类型      | 默认值   | 是否必要 |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | ------- | ----- | ---- |
| v-model    | 选中的地址数组，例如['1', '72', '55692']，1表示北京市，72代表朝阳区，55692代表街道                                                          | Array   | []    | 是    |
| mainTitle  | 主标题                                                                                                              | String  | 请选择地址 | 否    |
| visible    | 是否显示地址组件                                                                                                         | Boolean | false | 是    |
| queryUrl   | 查询地址数据的api，get请求，如果要用自定义api，一定要参考https://ms.jr.jd.com/gw/generic/jrm/h5/m/querySubItemList   这个接口，包装返回的数据格式要一摸一样 | String  | 空字符串  | 是    |
| otherParam | 额外的参数，调用queryUrl的时候传递的额外参数                                                                                       | Object  | {}    | 否    |

## Events

| 事件名           | 说明             | 回调参数               |
| ------------- | -------------- | ------------------ |
| select-item   | 每次点击地址元素之后都会调用 | 1.选中的地址数据2.选中的地址索引 |
| select-change | 详细的地址都点选完成后回调  | 一个参数，选中的数据数组       |