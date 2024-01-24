import Popup from './gear-popup.vue'
import './index.scss'
Popup.install = function (Vue) {
  Vue.component(Popup.name, Popup)
}

export default Popup
