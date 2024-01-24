import ListItem from './gear-list-item.vue'
import './index.scss'

ListItem.install = function (Vue) {
  Vue.component(ListItem.name, ListItem)
}

export default ListItem
