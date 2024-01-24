import Field from './gear-field.vue'
import './index.scss'

Field.install = function (Vue) {
  Vue.component(Field.name, Field)
}

export default Field
