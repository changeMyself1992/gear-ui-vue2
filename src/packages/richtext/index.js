import Richtext from './gear-richtext.vue'
import './index.scss'

Richtext.install = function (Vue) {
  Vue.component(Richtext.name, Richtext)
}

export default Richtext
