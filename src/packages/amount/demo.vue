<template>
  <div class="input-demo">
    <div class="gear-input-wrap">
      <gear-list title="金额输入框(卡片)">
        <gear-amount v-model="val8" :disabled="false" title="转入金额" placeholder="建议转入200元以上" border="bottom" :options="options8" :validateOption="validate8"></gear-amount>
      </gear-list>
    </div>

    <gear-list :titleStyle="{ 'margin-left': '12px' }" title="金额输入框(通栏)">
      <gear-amount v-model="val9" :disabled="false" placeholder="1000元起投" border="none" itemType="banner" shortcutBtnLabel="全部赎回" @on-shortcutBtn-click="shortcutBtnClick9"></gear-amount>
    </gear-list>

    <gear-list :titleStyle="{ 'margin-left': '12px' }" title="金额输入框(通栏)">
      <gear-amount
        v-model="val10"
        :disabled="false"
        placeholder="1000元起投"
        border="bottom"
        :validateOption="validate10"
        itemType="banner"
        shortcutBtnLabel="全部借出"
        @on-shortcutBtn-click="shortcutBtnClick10"
      ></gear-amount>
    </gear-list>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      val8: '',
      options8: [
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
      validate8: {
        type: 'id',
        pattern: currentVal => {
          if (Number(currentVal) > 10000) return false;
          return true;
        },
        errorText: '最多输入10000'
      },

      val9: '',

      val10: '300000',
      validate10: {
        type: 'id',
        pattern: currentVal => {
          if (Number(currentVal) > 300000) return false;
          return true;
        },
        errorText: '最多输入300000'
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {
    shortcutBtnClick9() {
      this.val9 = '2000';
    },
    shortcutBtnClick10() {
      this.val10 = '300000';
    }
  }
};
</script>

<style lang="scss">
.input-demo {
  margin: 0;
  padding: 0;
  background: rgb(245, 245, 247);

  display: flex;
  flex-direction: column;
  align-items: center;
  .gear-input-wrap {
    padding: 0 12px 20px 12px;
    width: 100%;
  }
  .gear-input-wrap-banner {
    padding: 0 0 20px 0;
    width: 100%;
  }
}
</style>

<style>
.input-demo .gear-list-title {
  padding-left: 0;
}
</style>
