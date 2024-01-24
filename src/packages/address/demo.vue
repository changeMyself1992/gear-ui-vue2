<template>
  <div>
    <gear-address v-model="selectArr" :visible.sync="visible" @select-change="getItem" @select-item="changeData" :other-param="otherParam" :query-url="queryUrl"></gear-address>
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
      queryUrl: process.env.NODE_ENV === 'development' ? 'http://dev.jr.jd.com:8080/gw/generic/jrm/h5/m/querySubItemList' : 'https://ms.jr.jd.com/gw/generic/jrm/h5/m/querySubItemList',
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
