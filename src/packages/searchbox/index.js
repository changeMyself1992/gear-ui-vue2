import Searchbox from './searchbox.vue';
import './index.scss';

Searchbox.install = function (Vue) {
  Vue.component(Searchbox.name, Searchbox);
}

export default Searchbox;