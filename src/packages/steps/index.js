import Steps from './gear-steps.vue'
import './index.scss'
Steps.install = function (Vue) {
  Vue.component(Steps.name, Steps)
}

export default Steps
