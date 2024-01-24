import Image from './gear-image.vue'
import './index.scss'

Image.install = function (Vue) {
  Vue.component(Image.name, Image)
}

export default Image
