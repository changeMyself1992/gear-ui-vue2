import Input from './gear-input.vue'
import './index.scss'

Input.install = function (Vue) {
  Vue.component(Input.name, Input)
}

export default Input
