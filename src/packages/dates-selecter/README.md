# 时间选择

用于选择日期或者时间。

## 引入

```javascript
import Vue from 'vue'
import { DateSelecter} from '@ueip/gear-vue'

Vue.use(DateSelecter)
```

## vue用法

```javascript
<template>
  <div class="dates-selecter-demo" clstag="796P|126779">
    <div class="section-title"></div>

    <gear-button @click="handlerClick('picker')" class="btn1"> 年月日 </gear-button>

    <gear-button @click="handlerClick('picker4')" class="btn1"> 年月 </gear-button>

    <gear-button @click="handlerClick('picker5')" class="btn1"> 月日 </gear-button>

    <gear-button @click="handlerClick('picker1')" class="btn1"> 年 </gear-button>

    <gear-button @click="handlerClick('picker2')" class="btn1"> 月 </gear-button>

    <gear-button @click="handlerClick('picker3')" class="btn1"> 日 </gear-button>

    <gear-button @click="handlerClick('picker6')" class="btn1"> 时分 </gear-button>

    <gear-date-selecter
      class="gear-datetime-picker"
      ref="picker"
      @confirm="
        e => {
          handleChange(e, 0);
        }
      "
      type="YMD"
      :currentDate="currentDate0"
    >
    </gear-date-selecter>

    <gear-date-selecter
      class="gear-datetime-picker"
      ref="picker1"
      @confirm="
        e => {
          handleChange(e, 1);
        }
      "
      type="Y"
      :currentDate="currentDate1"
    >
    </gear-date-selecter>

    <gear-date-selecter
      class="gear-datetime-picker"
      ref="picker2"
      @confirm="
        e => {
          handleChange(e, 2);
        }
      "
      type="M"
      :currentDate="currentDate2"
    >
    </gear-date-selecter>

    <gear-date-selecter
      class="gear-datetime-picker"
      ref="picker3"
      @confirm="
        e => {
          handleChange(e, 3);
        }
      "
      type="D"
      :currentDate="currentDate3"
    >
    </gear-date-selecter>

    <gear-date-selecter
      class="gear-datetime-picker"
      ref="picker4"
      @confirm="
        e => {
          handleChange(e, 4);
        }
      "
      type="YM"
      :currentDate="currentDate4"
    >
    </gear-date-selecter>

    <gear-date-selecter
      class="gear-datetime-picker"
      ref="picker5"
      @confirm="
        e => {
          handleChange(e, 5);
        }
      "
      type="MD"
      :currentDate="currentDate5"
    >
    </gear-date-selecter>

    <gear-date-selecter
      class="gear-datetime-picker"
      ref="picker6"
      @confirm="
        e => {
          handleChange(e, 6);
        }
      "
      type="hm"
      :currentDate="currentDate6"
    >
    </gear-date-selecter>
  </div>
</template>

<script>
export default {
  name: 'demo-input',
  data() {
    return {
      direction: 'column',
      disabled: false,
      show: false,
      headerTitle: 'DateSelecter',
      type: 'Y', // 'Y','M','D','YM','YMD','hm'
      currentDate0: '2000-1-11',
      currentDate1: '2000',
      currentDate2: '',
      currentDate3: '',
      currentDate4: '2000-1',
      currentDate5: '',
      currentDate6: '04:31'
    };
  },
  components: {},
  methods: {
    handlerClick: function (picker) {
      this.$refs[picker].open();
    },
    handleChange: function (value, index) {
      this.$toast('已选择' + value, 3000);
      this['currentDate' + index] = value;
      // this.$forceUpdate();
      // debugger;
      console.log(value);
    }
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/css/demo';
.dates-selecter-demo {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
}
</style>


```

## Props

| 字段        | 说明                                               | 类型     | 默认值       | 是否必要 |
|-------------|--------------------------------------------------|----------|-----------|---------|
| confirm     | 确定按钮点击                                       | Function | 空函数       | 是       |
| type        | 选择器的类型（YMD年月日，YM年月，MD月日，Y，M,D，时分hs） | stringn  | 空字符串     | 是       |
| currentDate | 时间选择器默认定位到的时间（例如'2000-1-11'）        | string   | 当前的年月日 | 否       |

## Events

| 事件名  | 说明                           | 回调参数           |
|---------|------------------------------|----------------|
| confirm | 时间选择器点确定按钮时执行回调 | 点选的年月日字符串 |