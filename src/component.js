import header from './components/header.vue';
import footer from './components/footer.vue';
import selectDate from './components/select-date.vue';

import {Loadmore} from 'mint-ui';

export default function (Vue) {
  Vue.component(header.name, header);
  Vue.component(footer.name, footer);
  Vue.component(selectDate.name, selectDate);
  Vue.component(Loadmore.name, Loadmore);
}
