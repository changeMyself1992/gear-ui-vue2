import Step from './gear-step.vue'
import './index.scss'
Step.install = function (Vue) {
  if (!Vue.prototype.hasOwnProperty('$bus')) {
    Vue.prototype.$bus = new Vue();
  }
  Vue.component(Step.name, Step)
}

export default Step
