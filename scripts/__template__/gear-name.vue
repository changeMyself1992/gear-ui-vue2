<template>
  <div class="gear-button"></div>
</template>
<script>
export default {
  name: 'gearName', // TODO: name需要更改为真实组件名称, 如 Button 组件，文件名改为 gear-button.vue , name: 'gearButton'
  props: {
    /** 按钮有四种类型：short（主按钮）、white(线框主按钮)、white-normal(线框次按钮)  text(文本按钮) disabled(禁用按钮) */
    type: {
      type: String,
      default: 'short'
    }
  }
};
</script>
