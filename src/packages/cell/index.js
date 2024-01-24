import Cell from './gear-cell.vue'
import './index.scss'

Cell.install = function (Vue) {
  Vue.component(Cell.name, Cell)
}

export default Cell
