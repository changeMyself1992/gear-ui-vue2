<template>
  <div class="demo-dropdown-menu" clstag="9T6G|126782">
    <div class="title">自定义</div>
    <gear-dropdown-menu style="margin-bottom: 20px" z-index="12">
      <gear-dropdown-item v-model="value4" :options="option" title="默认" />
      <gear-dropdown-item v-model="value5" :options="option" title="默认" />
      <gear-dropdown-item v-model="value6" :options="option" title="默认" />
      <gear-dropdown-item title="更多" ref="item">
        <div class="box1">
          <div class="title1">筛选条件1</div>
          <gear-radio class="adaptiveLayout" :options="option3" v-model="value7" @select-item="handleSelect" radioType="adaptiveLayout">
            <template slot-scope="{ slotProps }">
              <p :class="['radioText', value7 === slotProps.value && 'radioText--active']">{{ slotProps.text }}</p>
            </template>
          </gear-radio>

          <div class="title1">分类筛选2</div>
          <gear-radio class="adaptiveLayout" :options="option3" v-model="value8" @select-item="handleSelect" radioType="adaptiveLayout">
            <template slot-scope="{ slotProps }">
              <p :class="['radioText', value8 === slotProps.value && 'radioText--active']">{{ slotProps.text }}</p>
            </template>
          </gear-radio>

          <div class="box2">
            <gear-button class="custom-btn1" @click="handlerClick1">重置</gear-button>
            <div class="line"></div>
            <gear-button class="custom-btn2" @click="handlerClick2">确定</gear-button>
          </div>
        </div>
      </gear-dropdown-item>
    </gear-dropdown-menu>

    <div class="title">选项数≤5</div>
    <gear-dropdown-menu style="margin-bottom: 20px" z-index="11">
      <gear-dropdown-item v-model="value" :options="option" title="默认" />
    </gear-dropdown-menu>

    <div class="title">选项>5</div>
    <gear-dropdown-menu style="margin-bottom: 20px" z-index="10">
      <gear-dropdown-item v-model="value1" :options="option1" title="均分布局" screeningMode="equalizationLayout" />
      <gear-dropdown-item v-model="value2" :options="option2" title="自适应布局" screeningMode="adaptiveLayout" />
    </gear-dropdown-menu>

    <div class="title">时间筛选</div>
    <gear-dropdown-menu style="margin-bottom: 20px" :z-index="20">
      <gear-dropdown-item v-model="value3" screeningMode="datetimerange" :pickerOptions="pickerOptions" />
    </gear-dropdown-menu>
  </div>
</template>

<script>
export default {
  name: 'demo-dropdown-menu',
  components: {},
  data() {
    return {
      value: 0,
      value1: 0,
      value2: 'a',
      option: [
        { text: '选项1', value: 0 },
        { text: '选项2', value: 1 }
      ],
      option1: [
        { text: '全部类别', value: 0 },
        { text: '白条', value: 1 },
        { text: '小金库', value: 3 },
        { text: '财富', value: 4 },
        { text: '定期理财', value: 5 },
        { text: '众筹', value: 6 },
        { text: '支付', value: 7 },
        { text: '基金', value: 8 },
        { text: '股票', value: 9 },
        { text: '保险', value: 10 }
      ],
      option2: [
        { text: '默认', value: 'a' },
        { text: '白条', value: 'b' },
        { text: '小金库', value: 'c' },
        { text: '财富', value: 'd' },
        { text: '相关筛选文案', value: 'e' },
        { text: '众筹', value: 'f' },
        { text: '京东小金库', value: 'g' }
      ],
      value3: ['2000-01-01', ''],
      pickerOptions: {
        shortcuts: [
          {
            text: '近一周',
            value: 0,
            timeRange: [new Date().getTime() - 3600 * 1000 * 24 * 7, new Date().getTime()]
          },
          {
            text: '近三十天',
            value: 1,
            timeRange: [new Date().getTime() - 3600 * 1000 * 24 * 30, new Date().getTime()]
          },
          {
            text: '近九十天',
            value: 2,
            timeRange: [new Date().getTime() - 3600 * 1000 * 24 * 90, new Date().getTime()]
          }
        ]
      },
      value4: 0,
      value5: 0,
      value6: 0,
      option3: [
        { text: '全部类别', value: 'a' },
        { text: '白条', value: 'b' },
        { text: '股票', value: 'c' },
        { text: '基金', value: 'd' },
        { text: '相关筛选文案', value: 'e' },
        { text: '众筹', value: 'f' },
        { text: '京东小金库', value: 'g' }
      ],
      value7: 'g',
      value8: 'b'
    };
  },
  mounted() {},
  methods: {
    handleSelect(item) {
      this.$toast(`选择的值：${item.value}`);
    },
    handlerClick1() {
      this.value7 = 'g';
      this.value8 = 'b';
    },
    handlerClick2() {
      this.$refs.item.toggle();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/demo';
.demo-dropdown-menu {
  position: relative;
  padding: 10px 0 0 0;
  box-sizing: border-box;
  .title {
    line-height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    color: #999999;
    margin-bottom: 10px;
    margin-left: $padding-sm;
  }
  .box1 {
    padding-top: 10px;
  }
  .title1 {
    line-height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium;
    font-weight: bold;
    color: $blackTheme1;
    margin: 0 0 10px $padding-sm;
  }
  .adaptiveLayout {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 0 10px 0;
    margin: 0 7px;
  }
  .radioText {
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: normal;
    color: #666666;
    line-height: 34px;
    text-align: center;
    padding: 0 10px;
    white-space: nowrap;

    &--active {
      color: $redTheme;
    }
  }
  .box2 {
    margin-top: 10px;
    display: flex;
    border-top: 1px solid #eeeeee;
    align-items: center;
  }
  .custom-btn1,
  .custom-btn2 {
    position: relative;
    background-color: transparent;
    font-size: 16px;
    font-weight: bold;
  }
  .custom-btn1 {
    color: #999999;
  }
  .custom-btn2 {
    color: $redTheme;
  }
  .line {
    width: 1.1px;
    height: 26px;
    background-color: #eeeeee;
  }
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 ****start*/

/* 为了保持跟设计稿一致，需要覆盖一些样式 ****end*/
</style>
