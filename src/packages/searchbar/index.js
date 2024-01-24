import Searchbar from './searchbar.vue';
import './index.scss';

Searchbar.install = function (Vue) {
  Vue.component(Searchbar.name, Searchbar);
}

export default Searchbar;