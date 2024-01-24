import Button from './gear-button.vue'
import './index.scss'
Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}

export default Button
