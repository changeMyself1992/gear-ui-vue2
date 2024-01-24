import Checkbox from './gear-checkbox.vue'
import './index.scss'

Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox)
}

export default Checkbox
