<template>
  <transition name="gear-toast-fade">
    <div v-if="show" class="gear-toast">
      <div :class="['gear-toast-bg', toastData.type === 'fail' && 'gear-toast-bg-fail']" v-if="toastData.size === 'normal'">
        <div v-if="toastData.type === 'warn' || toastData.type === 'success' || toastData.type === 'fail'" :class="'gear-toast-icon gear-toast-icon-' + toastData.type"></div>
        <div class="gear-toast-title">{{ toastData.title || message }}</div>
        <div v-if="toastData.message" class="gear-toast-text">{{ toastData.message }}</div>
      </div>
      <div v-else class="gear-toast-bg-lagge">
        <div
          v-if="toastData.type === 'warn' || toastData.type === 'success' || toastData.type === 'fail' || toastData.type === 'loading'"
          :class="'gear-toast-icon-large gear-toast-icon-large-' + toastData.type"
        ></div>
        <div class="gear-toast-title-large">{{ toastData.title }}</div>
        <div v-if="toastData.message && toastData.message.length > 0" class="gear-toast-text-large">{{ toastData.message }}</div>
      </div>
    </div>

    <!-- <div class="gear-toast" v-if="show">
      <span :style="{ background: bgcolor }">{{ message }}</span>
    </div> -->
  </transition>
</template>

<script>
export default {
  name: 'GearToast',
  data() {
    return {
      show: false,
      message: '',
      bgcolor: '',
      toastData: {
        type: 'normal',
        size: 'normal'
      }
    };
  },
  mounted() {
    console.log(this.toastData);
  },
  computed: {}
};
</script>