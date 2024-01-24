<template>
  <div class="input-card">
    <div class="gear-input-wrap">
      <gear-list class="input-item" title="基础输入框" :style="`margin-top: ${px2vw(6)}`">
        <gear-input v-model="val1" type="text" :disabled="false" @change="test" title="姓名" placeholder="请输入" border="bottom"></gear-input>
        <gear-input v-model="val2" type="number" :disabled="false" @change="test" :title="title2" placeholder="请输入" border="bottom"></gear-input>
        <gear-input class="gear-input-2" v-model="val3" :disabled="false" type="text" @change="test" title="手机号" placeholder="请输入" border="none"></gear-input>
      </gear-list>

      <gear-list class="input-item" title="多行输入框">
        <gear-textarea v-model="val4" :disabled="false" type="text" @change="test" title="详细地址" placeholder="请输入" border="none"></gear-textarea>
      </gear-list>

      <gear-list class="input-item" title="自动带出可更改+不可更改">
        <gear-input v-model="val5" type="text" :disabled="false" @change="test" title="姓名" placeholder="请输入" border="bottom"></gear-input>
        <gear-input v-model="val6" type="text" :disabled="true" @change="test" title="姓名" placeholder="请输入" border="none"></gear-input>
      </gear-list>

      <gear-list class="input-item" title="输入框-报错样式">
        <gear-input class="gear-input-1" v-model="val7" :disabled="false" type="text" @change="test" :validateOption="validate7" title="身份证件号" placeholder="请输入" border="none"></gear-input>
      </gear-list>

      <gear-list class="input-item" title="输入框-验证码">
        <gear-input v-model="val8" type="number" :disabled="false" @change="test" title="短信验证码" placeholder="请输入验证码" border="none">
          <template slot="icon">
            <div class="auth-code">
              <div class="auth-code-line"></div>
              <div class="auth-code-des" :class="{ sending: showNumber === true }" @click="handlePhoneCode">{{ authCodeDes }}</div>
            </div>
          </template>
        </gear-input>
      </gear-list>

      <gear-list class="input-item" title="金额输入框">
        <gear-amount v-model="val9" :disabled="false" title="转入金额" placeholder="建议转入200元以上" border="bottom" :options="options" :validateOption="validate9"></gear-amount>
      </gear-list>
    </div>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      val1: '水王金童',
      val2: '1103051989102550',
      title2: {
        message: '身份证号*',
        richMessage: [
          {
            color: '#000000',
            fontSize: '16px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            start: 0,
            end: 3,
            click: false
          },

          {
            textImg: 'https://img13.360buyimg.com/imagetools/jfs/t1/12103/30/18157/784/62de71e7E18c118c6/dcb95f7a16ad38a0.png',
            imgStyleStr: 'width: 15px;height: 15px; margin-left: 6px; top: 1.5px;position: relative;',

            start: 4,
            end: 4,
            click: true,
            callback: () => {
              this.$toast('详情点击');
            }
          }
        ]
      },
      val3: '17777772329',
      validate3: {
        type: 'mobile',
        errorText: '请填写正确的手机号码'
      },
      val4: '大兴区 亦庄镇 定海园小区 21号楼 3921室',
      val5: '*瑶瑶',
      val6: '*瑶瑶',
      val7: '110305198910255',
      validate7: {
        type: 'id',
        pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,
        errorText: '输入正确得身份证号码'
      },

      val8: '',
      showNumber: false, // 是否正在倒计时
      number: 60, // 倒计时数字

      val9: '',
      options: [
        {
          id: 0,
          value: 2000
        },
        {
          id: 1,
          value: 5000
        },
        {
          id: 2,
          value: 10000
        }
      ],
      validate9: {
        type: 'id',
        pattern: currentVal => {
          if (Number(currentVal) < 200) return false;
          return true;
        },
        errorText: '金额不得低于200'
      }
    };
  },
  computed: {
    authCodeDes() {
      if (this.showNumber) {
        return `重新发送(${this.number}) `;
      } else {
        return '发送验证码';
      }
    }
  },
  mounted() {},
  methods: {
    test(val) {
      console.log(val);
    },
    // 验证码请求
    handlePhoneCode() {
      if (this.showNumber) {
        return;
      }
      this.showNumber = true;
      this.number = 60;
      const timer = setInterval(() => {
        if (this.number === 0) {
          this.showNumber = false;
          clearInterval(timer);
        } else {
          this.number -= 1;
        }
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.input-card {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;
  .gear-input-wrap {
    padding: 0 $padding-sm 71px $padding-sm;
    width: 100%;
    box-sizing: border-box;
    .input-item {
      margin-top: 0;
    }
  }
}

.auth-code {
  display: flex;
  align-items: center;
  .auth-code-line {
    height: 15px;
    border-right: 1px solid rgba(221, 221, 221, 1);
    margin: 0 8px;
  }
  .auth-code-des {
    white-space: nowrap;
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: normal;
    color: #cc8c4e;
  }
  .sending {
    color: #999999;
  }
}
</style>

<style lang="scss">
@import '../../assets/css/demo';
/* 为了兼容设计图专门又写的覆盖样式，因为 内外边距，高度会各种的变化，在组件上就没法定***********start */

.input-card .gear-list-title {
  padding: 18px 0 10px 0;
  line-height: 20px;
}
.input-card .gear-list-body {
  border-radius: 4px;
  overflow: hidden;
}
.input-card .field-container {
  overflow: hidden;
}

.input-card .gear-input-1 .gear-row-field-label {
  line-height: 17px;
  margin: 0px 0 6px 0;
  padding-right: $padding-sm;
}
.input-card .gear-input-1 .gear-field-error-inline {
  min-height: auto;
  height: 43px;
  align-items: center;
}
.input-card .gear-input-1 .gear-field-error-inline .gear-row-label {
  line-height: 16px;
  height: auto;
  align-self: auto;
}

.input-card .field-container .gear-field-inline .gear-row-label {
  font-family: PingFangSC-Regular;
  font-weight: normal;
}

/* 为了兼容设计图专门又写的覆盖样式，因为 内外边距，高度会各种的变化，在组件上就没法定***********end */
</style>
