<template>
  <div class="form-card">
    <div class="gear-form-wrap">
      <gear-list class="form-item" title="单行条目" style="margin-top: 4px">
        <gear-list-item class="list-item-1" title="主标题文案" arrow border="bottom" @onClick="itemClick"></gear-list-item>
        <gear-list-item class="list-item-1" title="主标题文案" value="副文案" arrow border="bottom" @onClick="itemClick"></gear-list-item>
        <gear-list-item class="list-item-1" title="主标题文案" value="副文案自定义" arrow border="bottom" @onClick="itemClick">
          <p slot="value" style="color: #cc8c4e; font-size: 12px">可变色文案</p>
        </gear-list-item>
        <gear-list-item class="list-item-1" title="主标题文案" value="副文案" arrow border="none" @onClick="itemClick">
          <template slot="icon">
            <img src="https://img10.360buyimg.com/imagetools/jfs/t1/200363/7/26729/2042/62ea351aEc7fcac0e/b794dc586e2d8005.png" style="width: 24px; height: 24px" />
          </template>
        </gear-list-item>
      </gear-list>

      <gear-list class="form-item" title="双行条目">
        <gear-list-item
          class="list-item-2"
          title="这里是文案"
          :desc="{
            message: '说明文案，变换颜色表示重点',
            richMessage: [
              {
                color: '#999999',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',

                start: 0,
                end: 4,
                click: false
              },
              {
                color: '#F53137',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',

                click: true,
                start: 5,
                end: 12,
                click: false
              }
            ]
          }"
          border="bottom"
          arrow
          @onClick="itemClick"
        >
          <template slot="icon">
            <img src="https://img10.360buyimg.com/imagetools/jfs/t1/162144/23/29247/3127/62ea3519Efbe2d5dc/4a6503fccffb6f69.png" style="width: 40px; height: 40px" />
          </template>
        </gear-list-item>

        <gear-list-item class="list-item-2" title="这里是文案" desc="说明文案" border="bottom" value="附加文案" arrow @onClick="itemClick">
          <template slot="icon">
            <img src="https://img10.360buyimg.com/imagetools/jfs/t1/162144/23/29247/3127/62ea3519Efbe2d5dc/4a6503fccffb6f69.png" style="width: 40px; height: 40px" />
          </template>
        </gear-list-item>

        <gear-list-item class="list-item-2" title="这里是文案" desc="说明文案" border="none" @onClick="itemClick">
          <template slot="icon">
            <img src="https://img10.360buyimg.com/imagetools/jfs/t1/162144/23/29247/3127/62ea3519Efbe2d5dc/4a6503fccffb6f69.png" style="width: 40px; height: 40px" />
          </template>

          <template slot="value">
            <gear-button type="white-normal" size="small" @click="itemClick">立即参与</gear-button>
          </template>
        </gear-list-item>
      </gear-list>

      <gear-list class="form-item" title="地址选择">
        <gear-select v-model="dataShowValue" type="text" @get-select="visible = !visible" title="所在地区" :prompt="true" border="bottom" placeholder="重点提示选择" />
        <gear-select v-model="dataShowValue" type="text" @get-select="visible = !visible" title="所在地区" border="bottom" placeholder="请选择" />
        <gear-select v-model="dataShowValue1" type="text" @get-select="visible = !visible" title="所在地区" placeholder="请选择" />
        <gear-address v-model="selectArr" :visible.sync="visible" @select-change="getItem" @select-item="changeData" :other-param="otherParam" :query-url="queryUrl"></gear-address>
      </gear-list>

      <gear-list class="form-item" title="开关">
        <gear-switch v-model="val1" type="text" title="自动还款" border="bottom"></gear-switch>
        <gear-switch v-model="val2" type="text" title="自动还款"></gear-switch>
      </gear-list>

      <gear-list class="form-item" title="单选框">
        <gear-radio class="list-item-3" :options="todos" v-model="radioSelect" select-field="value" @select-item="handleSelect">
          <template slot-scope="{ slotProps }">
            <gear-list-item :title="slotProps.title" :desc="slotProps.desc" border="bottom" :disabled="slotProps.disabled"></gear-list-item>
          </template>
        </gear-radio>
      </gear-list>

      <gear-list class="form-item" title="单选框">
        <gear-radio :options="todos1" v-model="radioSelect1" select-field="value" @select-item="handleSelect" radioType="circle">
          <template slot-scope="{ slotProps }">
            <gear-list-item :title="slotProps.title" :desc="slotProps.desc" border="none" :disabled="slotProps.disabled"></gear-list-item>
          </template>
        </gear-radio>
      </gear-list>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      queryUrl: process.env.NODE_ENV === 'development' ? 'http://dev.jr.jd.com:8080/gw/generic/jrm/h5/m/querySubItemList' : 'https://ms.jr.jd.com/gw/generic/jrm/h5/m/querySubItemList',
      dataShow: [],
      dataShowValue: '',
      dataShowValue1: '北京',
      selectArr: [],
      otherParam: {},
      visible: false,

      val1: true,
      val2: false,

      todos: [
        {
          title: '按月计息，按月还款',
          value: 1,
          disabled: false,
          desc: {
            message: '月利率 0.51%，提前还款正常还息',
            richMessage: [
              {
                color: '#999999',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',

                start: 0,
                end: 3,
                click: false
              },
              {
                color: '#F53137',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',

                click: true,
                start: 4,
                end: 8,
                click: false
              },
              {
                color: '#999999',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',

                start: 9,
                end: 17,
                click: false
              }
            ]
          }
        },
        { title: '按日计息，随时还款', value: 2, disabled: false, desc: '月利率 0.4%，提前还款未还息费不再收取' },
        { title: '不可选择状态', value: 3, disabled: true, desc: '月利率 0.4%，提前还款未还息费不再收取' }
      ],
      radioSelect: 1,
      todos1: [
        { title: '立减100元', value: 1, disabled: false, desc: '有效期 : 2015.11.30-2016.01.30' },
        { title: '立减100元', value: 2, disabled: false, desc: '有效期 : 2015.11.30-2016.01.30' }
      ],
      radioSelect1: 1
    };
  },
  mounted() {},
  methods: {
    itemClick: function () {
      // this.$toast('可点击item，处理点击事件');
      console.log('可点击item，处理点击事件');
    },
    getItem(data) {
      console.log('data:::', data);
      this.dataShow = data;
      this.dataShowValue = this.filterArea(data);
      this.dataShowValue1 = this.filterArea(data);
    },
    changeData(val, current) {
      console.log('val:::', val);
      console.log('current:::', current);
    },
    filterArea(value) {
      return value.reduce((prev, next) => {
        return (prev += next.name);
      }, '');
    },

    handleSelect(item) {
      this.$toast(`选择的值：${item.value}`);
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.form-card {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  .gear-form-wrap {
    padding: 0 $padding-sm;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>

<style lang="scss">
/* 为了兼容设计图专门又写的覆盖样式***********start */
.form-card .gear-list {
  margin: 0;
}
.form-card .gear-list-title {
  padding: 20px 0 10px 0;
}

.form-card .gear-list-body {
  border-radius: 4px;
}
.form-card .field-container {
  background-color: transparent;
}

.form-card .list-item-1 .gear-list-item-icon {
  margin-right: 10px;
}
.form-card .list-item-1 .gear-list-item-icon img {
  border-radius: 999px;
}

.form-card .list-item-2 .gear-list-item-icon {
  margin-right: 8px;
}
.form-card .list-item-2 .gear-list-item-icon img {
  border-radius: 999px;
}

/* 为了兼容设计图专门又写的覆盖样式***********end */
</style>
