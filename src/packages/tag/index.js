import Tag from './gear-tag.vue'
import './index.scss'

Tag.install = function (Vue) {
  Vue.component(Tag.name, Tag)
}

export default Tag
