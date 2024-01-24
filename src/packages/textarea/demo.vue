<template>
  <div class="textarea-demo">
    <gear-textarea v-model="val2" :direction="direction" :disabled="disabled" type="text" @change="test" title="备注" placeholder="请输入备注" border="bottom"></gear-textarea>

    <gear-textarea v-model="val2" direction="row" :disabled="disabled" type="text" @change="test" :validateOption="validate" title="备注" placeholder="请输入备注" border="bottom"></gear-textarea>
  </div>
</template>

<script>
export default {
  name: 'demo-textarea',
  data() {
    return {
      val2: '',
      direction: 'column',
      disabled: false
    };
  },
  components: {},
  methods: {
    test(val) {
      console.log('11111', val);
    }
  }
};
</script>
