import PopupHeader from './gear-popup-header.vue'
import './index.scss'
PopupHeader.install = function (Vue) {
  Vue.component(PopupHeader.name, PopupHeader)
}

export default PopupHeader
