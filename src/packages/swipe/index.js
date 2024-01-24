import Swipe from './gear-swipe.vue'
import './index.scss'
Swipe.install = function (Vue) {
  Vue.component(Swipe.name, Swipe)
}

export default Swipe
