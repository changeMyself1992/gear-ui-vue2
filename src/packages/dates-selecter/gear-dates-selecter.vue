<template>
  <div class="dates-selecter-box">
    <gear-free-popup v-model="visible" position="bottom" :close-on-click-overlay="false" :lockScroll="false">
      <div class="gear-dateselecter">
        <div class="gear-dateselecter-title">
          <span class="cancel" @click="cancelFn">取消</span>
          <span class="confirm" @click="confirmFn">确定</span>
        </div>
        <div class="gear-dateselecter-content">
          <div class="gear-select-date-scrollerbox-n gear-fs36">
            <div class="gear-select-date-scroller-n">
              <div v-if="type.indexOf('Y') != -1" :style="year.length > 0 && month.length > 0 && selfDay.length > 0 ? 'paddingLeft: 20px' : ''">
                <gear-picker type="year" :mydata="year" :outindex="yearIndex" :change="changeday"></gear-picker>
              </div>
              <div v-if="type.indexOf('M') != -1">
                <gear-picker type="month" :mydata="month" :outindex="monthIndex" :change="changeday"></gear-picker>
              </div>
              <div v-if="type.indexOf('D') != -1" :style="year.length > 0 && month.length > 0 && selfDay.length > 0 ? 'paddingRight: 20px' : ''">
                <gear-picker type="day" :mydata="selfDay" :outindex="dayIndex" :change="changeday"></gear-picker>
              </div>

              <div v-if="hour.length > 0" class="hour-box" style="padding-right: 40px; text-align: right">
                <gear-picker type="hour" :mydata="hour" :outindex="hourIndex" :change="changeday"></gear-picker>
              </div>
              <div v-if="minute.length > 0" style="padding-left: 40px; text-align: left">
                <gear-picker type="minute" :mydata="minute" :outindex="minuteIndex" :change="changeday"></gear-picker>
              </div>
            </div>
            <p class="gear-select-value"></p>
          </div>
        </div>
      </div>
    </gear-free-popup>
  </div>
</template>
<script>
import picker from './picker.vue';
import freePopup from '../free-popup';
export default {
  name: 'GearDateSelecter',
  props: {
    confirm: {
      type: Function
    },
    // 'Y','M','D','YM','YMD','hm'
    type: {
      type: String
    },
    // '2000-1-11' '12:23' 只支持这俩种格式
    currentDate: {
      type: String,
      default: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
    }
  },
  data() {
    // am是指上午,pm是指下午
    return {
      visible: false,
      year: [],
      month: [],
      selfDay: [],
      hour: [],
      minute: [],
      yearIndex: 0,
      monthIndex: 0,
      dayIndex: 0,
      hourIndex: 0,
      minuteIndex: 0
    };
  },
  components: {
    'gear-picker': picker,
    'gear-free-popup': freePopup
  },
  watch: {
    currentDate: {
      immediate: true,
      handler(newval, oldval) {
        if (newval !== oldval) {
          this.initData();
        }
      }
    }
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      var years = [];
      var mydate = new Date();

      for (let i = 1990; i <= mydate.getFullYear() + 20; i++) {
        years.push({
          label: i + '年',
          value: String(i)
        });
      }

      var months = [];
      for (let i = 1; i <= 12; i++) {
        months.push({
          label: i + '月',
          value: i < 10 ? '0' + i : '' + i
        });
      }

      var days = [];
      for (let i = 1; i <= 31; i++) {
        days.push({
          label: i + '日',
          value: i < 10 ? '0' + i : '' + i
        });
      }
      this.year = years;
      this.month = months;
      this.selfDay = days;

      const hours = [];
      for (let i = 1; i <= 24; i++) {
        hours.push({
          label: i < 10 ? '0' + i : '' + i,
          value: i < 10 ? '0' + i : '' + i
        });
      }

      const minutes = [];
      for (let i = 0; i < 60; i++) {
        minutes.push({
          label: i < 10 ? '0' + i : '' + i,
          value: i < 10 ? '0' + i : '' + i
        });
      }

      if (this.$props.type === 'hm') {
        this.hour = hours;
        this.minute = minutes;
        let currentDate = this.$props.currentDate.split(':');
        if (currentDate.length !== 2 || !/(0[1-9])|(1[0-2])/.test(currentDate[0]) || !/[0-5][0-9]/.test(currentDate[1])) {
          this.$toast('currentDate格式错误，例"12:00"~"01:59"');
          return;
        }
        this.hourIndex = this.hour.findIndex(val => {
          return val.value === currentDate[0];
        });
        this.minuteIndex = this.minute.findIndex(val => {
          return val.value === currentDate[1];
        });
        return;
      }

      var cYear = '1900';
      var cMonth = '1';
      var cDay = '1';
      let currentDate = this.$props.currentDate.split('-');
      if (this.$props.type === 'YMD') {
        if (currentDate.length !== 3) {
          return;
        }
        cYear = currentDate[0];
        cMonth = currentDate[1];
        cDay = currentDate[2];
      }
      if (this.$props.type === 'YM') {
        if (currentDate.length !== 2) {
          return;
        }
        cYear = currentDate[0];
        cMonth = currentDate[1];
      }
      if (this.$props.type === 'MD') {
        if (currentDate.length !== 2) {
          return;
        }
        cMonth = currentDate[0];
        cDay = currentDate[1];
      }
      if (this.$props.type === 'Y') {
        if (currentDate.length !== 1) {
          return;
        }
        cYear = currentDate[0];
      }
      if (this.$props.type === 'M') {
        if (currentDate.length !== 1) {
          return;
        }
        cMonth = currentDate[0];
      }
      if (this.$props.type === 'D') {
        if (currentDate.length !== 1) {
          return;
        }
        cDay = currentDate[0];
      }

      if (this.year.length > 0) {
        for (let i = 0; i < this.year.length; i++) {
          if (this.year[i].value == cYear) {
            this.yearIndex = i;
          }
        }
      }
      if (this.month.length > 0) {
        for (let i = 0; i < this.month.length; i++) {
          if (this.month[i].value == cMonth) {
            this.monthIndex = i;
          }
        }
      }

      if (this.selfDay.length > 0) {
        for (let i = 0; i < this.selfDay.length; i++) {
          if (this.selfDay[i].value == cDay) {
            this.dayIndex = i;
          }
        }
      }
    },
    open() {
      this.visible = true;
    },
    getDaysByYearAndMonth: function (year, month) {
      year = parseInt(year);
      month = parseInt(month);

      if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          return 29;
        } else {
          return 28;
        }
      } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
      } else {
        return 31;
      }
    },
    changeday: function (changeObj) {
      console.log('changeObj', changeObj);
      if (changeObj.type === 'year') {
        this.yearIndex = changeObj.index;
      }
      if (changeObj.type === 'month') {
        this.monthIndex = changeObj.index;
      }
      if (changeObj.type === 'day') {
        this.dayIndex = changeObj.index;
      }
      if (changeObj.type === 'hour') {
        this.hourIndex = changeObj.index;
      }
      if (changeObj.type === 'minute') {
        this.minuteIndex = changeObj.index;
      }

      // console.log(this.year[this.yearIndex]);
      // console.log(this.month[this.monthIndex]);
      // console.log(this.day[this.dayIndex]);

      // this.selfDay = [1,2,3,4,5]
      if (this.$props.type === 'YMD' || this.$props.type === 'MD') {
        var curYear = new Date().getFullYear();

        if (this.$props.type === 'YMD') {
          curYear = this.year[this.yearIndex].value;
        }

        var dayNumber = this.getDaysByYearAndMonth(curYear, this.month[this.monthIndex].value);
        var dayArray = [];
        for (var i = 1; i <= dayNumber; i++) {
          dayArray.push({
            label: i + '日',
            value: i < 10 ? '0' + i : '' + i
          });
        }

        this.selfDay = dayArray;
        if (this.dayIndex >= dayNumber) {
          this.dayIndex = dayNumber - 1;
        }
        // this.dayIndex = 0;
        // debugger;
      }
    },
    cancelFn: function () {
      this.visible = false;
      this.initData();
    },
    confirmFn: function () {
      this.visible = false;
      // 年月日
      if (this.year.length > 0 && this.month.length > 0 && this.selfDay.length > 0 && this.$props.type === 'YMD') {
        const str = `${this.year[this.yearIndex].value}-${this.month[this.monthIndex].value}-${this.selfDay[this.dayIndex].value}`;
        this.$emit('confirm', str);
        return;
      }
      // 年月
      if (this.year.length > 0 && this.month.length > 0 && this.$props.type === 'YM') {
        let str = `${this.year[this.yearIndex].value}-${this.month[this.monthIndex].value}`;
        this.$emit('confirm', str);
        return;
      }
      // 月日
      if (this.month.length > 0 && this.selfDay.length > 0 && this.$props.type === 'MD') {
        const str = `${this.month[this.monthIndex].value}-${this.selfDay[this.dayIndex].value}`;
        this.$emit('confirm', str);
        return;
      }
      // 年
      if (this.year.length > 0 && this.$props.type === 'Y') {
        const str = this.year[this.yearIndex].value;
        this.$emit('confirm', str);
        return;
      }
      // 月
      if (this.month.length > 0 && this.$props.type === 'M') {
        const str = this.month[this.monthIndex].value;
        this.$emit('confirm', str);
        return;
      }
      // 日
      if (this.selfDay.length > 0 && this.$props.type === 'D') {
        const str = this.selfDay[this.dayIndex].value;
        this.$emit('confirm', str);
        return;
      }
      // 时分
      if (this.hour.length > 0 && this.minute.length > 0 && this.$props.type === 'hm') {
        const str = `${this.hour[this.hourIndex].value}:${this.minute[this.minuteIndex].value}`;
        this.$emit('confirm', str);
        return;
      }
    }
  }
};
</script>
