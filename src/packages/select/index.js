import Select from './gear-select.vue'
import './index.scss'
Select.install = function (Vue) {
  Vue.component(Select.name, Select)
}

export default Select
