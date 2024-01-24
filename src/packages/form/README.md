# 表单

本身并没有form组件，这里是对多个组件的组合使用，主要用于展示

address组件 需要本地需要安装axios：0.21.1

## 引入

```javascript
import Vue from 'vue'
import List from '@ueip/gear-vue/lib/list'
import '@ueip/gear-vue/lib/list/index.css'

import ListItem from '@ueip/gear-vue/lib/list-item'
import '@ueip/gear-vue/lib/list-item/index.css'

import Button from '@ueip/gear-vue/lib/button'
import '@ueip/gear-vue/lib/button/index.css'

import Select from '@ueip/gear-vue/lib/select'
import '@ueip/gear-vue/lib/select/index.css'

import Switch from '@ueip/gear-vue/lib/switch'
import '@ueip/gear-vue/lib/switch/index.css'

import Address from '@ueip/gear-vue/lib/address'
import '@ueip/gear-vue/lib/address/index.css'

import Radio  from '@ueip/gear-vue/lib/radio'
import '@ueip/gear-vue/lib/radio/index.css'

Vue.use(List)
Vue.use(ListItem)
Vue.use(Button)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Address)
Vue.use(Radio)
```

## vue用法

### 卡片表单

```javascript
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
```

### 通栏表单

```javascript
<template>
  <div class="form-banner">
    <div class="gear-form-wrap">
      <gear-list class="form-item" title="单行条目" style="margin-top: 4px">
        <gear-list-item class="list-item-1" title="主标题文案" arrow border="bottom" @onClick="itemClick"></gear-list-item>
        <gear-list-item class="list-item-1" title="主标题文案" value="副文案" arrow border="bottom" @onClick="itemClick"></gear-list-item>
        <gear-list-item class="list-item-1" title="主标题文案" value="副文案自定义" arrow border="bottom" @onClick="itemClick">
          <p slot="value" style="color: #cc8c4e; font-size: 12px">可变色文案</p>
        </gear-list-item>

        <gear-list-item class="list-item-1" title="主标题文案" value="副文案" border="none" arrow @onClick="itemClick">
          <template slot="icon">
            <img src="https://img10.360buyimg.com/imagetools/jfs/t1/200363/7/26729/2042/62ea351aEc7fcac0e/b794dc586e2d8005.png" style="width: 24px; height: 24px" />
          </template>
        </gear-list-item>
      </gear-list>

      <gear-list class="form-item" title="双行条目">
        <gear-list-item class="list-item-2" title="这里是文案" :desc="descObj" border="bottom" arrow @onClick="itemClick">
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
        <gear-select class="list-item-3" v-model="dataShowValue" type="text" @get-select="visible = !visible" title="所在地区" :prompt="true" border="bottom" placeholder="重点提示选择" />
        <gear-select class="list-item-3" v-model="dataShowValue" type="text" @get-select="visible = !visible" title="所在地区" border="bottom" placeholder="请选择" />
        <gear-select v-model="dataShowValue1" type="text" @get-select="visible = !visible" title="所在地区" placeholder="请选择" />
        <gear-address v-model="selectArr" :visible.sync="visible" @select-change="getItem" @select-item="changeData" :other-param="otherParam" :query-url="queryUrl"></gear-address>
      </gear-list>

      <gear-list class="form-item" title="开关">
        <gear-switch class="list-item-3" v-model="val1" type="text" title="自动还款" border="bottom"></gear-switch>
        <gear-switch v-model="val2" type="text" title="自动还款"></gear-switch>
      </gear-list>

      <gear-list class="form-item" title="单选框">
        <gear-radio class="list-item-4" :options="todos" v-model="radioSelect" select-field="value" @select-item="handleSelect">
          <template slot-scope="{ slotProps }">
            <gear-list-item :title="slotProps.title" :desc="slotProps.desc" :border="slotProps.border" :disabled="slotProps.disabled"></gear-list-item>
          </template>
        </gear-radio>
      </gear-list>

      <gear-list class="form-item" title="单选框">
        <gear-radio class="list-item-5" :options="todos1" v-model="radioSelect1" select-field="value" @select-item="handleSelect" radioType="circle">
          <template slot-scope="{ slotProps }">
            <gear-list-item :title="slotProps.title" :desc="slotProps.desc" :border="slotProps.border" :disabled="slotProps.disabled"></gear-list-item>
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

      descObj: {
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
      },

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
          },
          border: 'bottom'
        },
        { title: '按日计息，随时还款', value: 2, disabled: false, desc: '月利率 0.4%，提前还款未还息费不再收取', border: 'bottom' },
        { title: '不可选择状态', value: 3, disabled: true, desc: '月利率 0.4%，提前还款未还息费不再收取', border: 'none' }
      ],
      radioSelect: 1,
      todos1: [
        { title: '立减100元', value: 1, disabled: false, desc: '有效期 : 2015.11.30-2016.01.30', border: 'bottom' },
        { title: '立减100元', value: 2, disabled: false, desc: '有效期 : 2015.11.30-2016.01.30', border: 'none' }
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
.form-banner {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  .gear-form-wrap {
    padding: 0;
    width: 100%;
  }
}
</style>

<style lang="scss">
@import '../../assets/css/demo';
/* 为了兼容设计图专门又写的覆盖样式***********start */

.form-banner .gear-list {
  margin: 0;
}
.form-banner .gear-list-title {
  padding: 20px 0 10px $padding-sm;
}

.form-banner .field-container .gear-field-inline {
  padding: 0 $padding-sm;
}

.form-banner .gear-list-item {
  padding: 0 $padding-sm;
}

.form-banner .list-item-1 .gear-list-item-icon {
  margin-right: 10px;
}
.form-banner .list-item-1 .gear-list-item-icon img {
  border-radius: 999px;
}

.form-banner .list-item-2.gear-list-item-border-bottom {
  @include gear-border-bottom(#eeeeee, 68px, 0);
}
.form-banner .list-item-2 .gear-list-item-icon {
  margin-right: $padding-sm;
}
.form-banner .list-item-2 .gear-list-item-icon img {
  border-radius: 999px;
}

.form-banner .list-item-5 .gear-list-item-border-bottom {
  @include gear-border-bottom(#eeeeee, -30px, 0);
}
/* 为了兼容设计图专门又写的覆盖样式***********end */
</style>
```

## Props(List)

| 字段    | 说明   | 类型     | 默认值  | 是否必要 |
| ----- | ---- | ------ | ---- | ---- |
| title | 列表标题 | string | 空字符串 | 否    |

## Props(ListItem)

| 字段       | 说明                   | 类型               | 默认值    | 是否必要 |
| -------- | -------------------- | ---------------- | ------ | ---- |
| arrow    | 是否展示列表元素右侧箭头         | Boolean          | false  | 否    |
| title    | 列表元素主标题文案            | String           | 空字符串   | 否    |
| value    | 列表元素副标题文案            | String           | number | 空字符串 |
| desc     | 列表元素描述文案，可以是一个富文本对象  | String\|richData | 空字符串   | 否    |
| disabled | 列表元素是否禁用             | Boolean          | false  | 否    |
| border   | 列表元素边框位置（top bottom) | String           | bottom | top  |

## Events(ListItem)

| 事件名        | 说明              | 回调参数 |
| ---------- | --------------- | ---- |
| itemClick  | 列表元素点击事件回调      | 无参数  |
| rightClick | 列表元素右侧副标题那块点击回调 | 无参数  |

## Props（Select）

| 字段          | 说明               | 类型      | 默认值    | 是否必要   |
| ----------- | ---------------- | ------- | ------ | ------ |
| v-model     | 绑定的内容            | string  | 空字符串   | 是      |
| direction   | 包装器title的方向（row\ | column） | string | row    |
| title       | 输入框的标题           | string  | 空字符串   | 否      |
| placeholder | 包装器的             | string  | 空字符串   | 否      |
| border      | 输入框的分割线（bottom\  | top）    | string | bottom |
| prompt      | 是否高亮显示包装器文案      | Boolean | false  |        |

## Events(Select)

| 事件名        | 说明         | 回调参数 |
| ---------- | ---------- | ---- |
| get-select | 点击包装器的时候回调 | 无    |

## Props(Address)

| 字段         | 说明                                                                                                               | 类型      | 默认值   | 是否必要 |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | ------- | ----- | ---- |
| v-model    | 选中的地址数组，例如['1', '72', '55692']，1表示北京市，72代表朝阳区，55692代表街道                                                          | Array   | []    | 是    |
| mainTitle  | 主标题                                                                                                              | String  | 请选择地址 | 否    |
| visible    | 是否显示地址组件                                                                                                         | Boolean | false | 是    |
| queryUrl   | 查询地址数据的api，get请求，如果要用自定义api，一定要参考https://ms.jr.jd.com/gw/generic/jrm/h5/m/querySubItemList   这个接口，包装返回的数据格式要一摸一样 | String  | 空字符串  | 是    |
| otherParam | 额外的参数，调用queryUrl的时候传递的额外参数                                                                                       | Object  | {}    | 否    |

## Events(Address)

| 事件名           | 说明             | 回调参数               |
| ------------- | -------------- | ------------------ |
| select-item   | 每次点击地址元素之后都会调用 | 1.选中的地址数据2.选中的地址索引 |
| select-change | 详细的地址都点选完成后回调  | 一个参数，选中的数据数组       |

## [Props(switch)](#/jrui-component/v2/operational-feedback/Switch)

## Props(Radio)

| 字段          | 说明                            | 类型     | 默认值   | 是否必要 |
| ----------- | ----------------------------- | ------ | ----- | ---- |
| v-model     | 绑定单选框的值                       | string | num   | 空字符串 |
| options     | 单选框选项列表                       | Array  | []    | 是    |
| selectField | 要进行选择的字段名称,要求是options元素中的一个字段 | string | value | 否    |
| radioType   | 单选框样式类型，tick对勾，circle圆圈       | string | tick  | 否    |

## Events(Radio)

| 事件名         | 说明          | 回调参数         |
| ----------- | ----------- | ------------ |
| select-item | 选择元素的时候进行回调 | options里面的元素 |

## Props(Richtext)

| 属性名      | 类型     | 必填  | 说明                               |
| -------- | ------ | --- | -------------------------------- |
| richData | Object | 是   | 富文本数据，格式为：{message, richMessage} |

#### richData.message

| 属性名     | 类型     | 必填  | 说明   |
| ------- | ------ | --- | ---- |
| message | String | 是   | 文本内容 |

#### richData.richMessage

| 属性名         | 类型    | 必填  | 说明                            |
| ----------- | ----- | --- | ----------------------------- |
| richMessage | Array | 是   | 富文本处理信息，richMessage[index]为对象 |

#### richMessage[index]

| 属性名        | 类型       | 必填  | 说明                         |
| ---------- | -------- | --- | -------------------------- |
| start      | Number   | 是   | 属性覆盖起始下标（0开始）              |
| end        | Number   | 是   | 属性覆盖结束下标                   |
| color      | String   | 否   | 字体颜色                       |
| fontSize   | Number   | 否   | 字体大小，要加上单位                 |
| fontFamily | String   | 否   | 字体名称，可选系统支持名称，否则降级为系统默认字体 |
| fontWeight | String   | 否   | 文本粗细，可选 bold \             |
| textImg    | String   | 否   | 图片链接                       |
| width      | String   | 否   | 图片宽，要加上单位                  |
| height     | String   | 否   | 图片高，要加上单位                  |
| click      | Boolean  | 否   | 是否增加事件监听，可选 true \        |
| callback   | Function | 否   | 事件监听回调，建议使用箭头函数           |