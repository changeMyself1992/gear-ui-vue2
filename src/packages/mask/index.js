import Mask from './gear-mask.vue'
import './index.scss'
Mask.install = function (Vue) {
  Vue.component(Mask.name, Mask)
}

export default Mask
