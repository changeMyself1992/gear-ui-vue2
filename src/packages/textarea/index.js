import Textarea from './gear-textarea.vue'
import './index.scss'

Textarea.install = function (Vue) {
  Vue.component(Textarea.name, Textarea)
}

export default Textarea
