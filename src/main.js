// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"

Vue.config.productionTip = false;

import MintUI from "mint-ui"
import elementUI from "element-ui"
import Vant from "vant"
Vue.use(MintUI);
Vue.use(elementUI);
Vue.use(Vant);
import 'mint-ui/lib/style.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'vant/lib/vant-css/index.css'

//全局使用组件
import filter from './filter';
import component from './component';
filter(Vue);
component(Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
