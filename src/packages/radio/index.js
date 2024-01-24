import Radio from './gear-radio.vue'
import './index.scss'

Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio)
}

export default Radio
