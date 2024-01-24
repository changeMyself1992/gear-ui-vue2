import List from './gear-list.vue'
import './index.scss'
List.install = function (Vue) {
  Vue.component(List.name, List)
}

export default List
