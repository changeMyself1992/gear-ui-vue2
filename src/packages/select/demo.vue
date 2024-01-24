<template>
  <div class="input-demo">
    <div style="margin-top: 20px">
      <gear-select v-model="val1" :direction="direction" :disabled="disabled" type="text" @get-select="openPicker" title="选择时间" prompt border="bottom"></gear-select>
    </div>

    <div style="margin-top: 20px">
      <gear-select v-model="val1" direction="row" :disabled="disabled" @get-select="openPicker" title="选择时间" :prompt="false" placeholder="请选择时间" border="bottom"></gear-select>
    </div>

    <gear-date-selecter class="gear-datetime-picker" ref="picker0" @confirm="handleChange" type="YMD" />
  </div>
</template>

<script>
export default {
  name: 'demo-input',
  data() {
    return {
      val1: '',
      direction: 'column',
      disabled: false
    };
  },
  components: {},
  methods: {
    openPicker() {
      this.$refs.picker0.open();
    },
    handleChange(val) {
      this.val1 = val;
    }
  }
};
</script>
