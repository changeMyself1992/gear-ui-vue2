export default {
  install(Vue) {
    Vue.directive('clsdata', {
      inserted(el, binding) {
        el.setAttribute('data-qidian-ext', JSON.stringify(binding.value));
      },
      componentUpdated(el, binding) {
        el.setAttribute('data-qidian-ext', JSON.stringify(binding.value));
      }
    });
  }
};
