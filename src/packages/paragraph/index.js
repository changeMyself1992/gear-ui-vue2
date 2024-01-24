import Paragraph from './gear-paragraph.vue'
import './index.scss'

Paragraph.install = function (Vue) {
  Vue.component(Paragraph.name, Paragraph)
}

export default Paragraph


