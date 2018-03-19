import Vue from 'vue'
import Router from 'vue-router'

import footer from "../components/footer.vue"
import login from "../pages/login/login.vue"
import index from "../pages/index/index.vue"
import point from "../pages/point/point.vue"
import store from "../pages/store/store.vue"
import device from "../pages/device/device.vue"
import replen from "../pages/replen/replen.vue"

Vue.use(Router)

let routes=[
  {
    path:"*",
    component:login
  }
]

let tabs=[
  {
    name:"index",
    path:"/index",
    components:{
      node: index,
      footer: footer
    }
  },
  {
    name:"point",
    path:"/point",
    components:{
      node: point,
      footer: footer
    }
  },
  {
    name:"store",
    path:"/store",
    components:{
      node: store,
      footer: footer
    }
  },
  {
    name:"device",
    path:"/device",
    components:{
      node: device,
      footer: footer
    }
  },
  {
    name:"replen",
    path:"/replen",
    components:{
      node: replen,
      footer: footer
    }
  }
];

let array=[
  ...tabs
];

routes.unshift(...array);

const router = new Router({
  routes: routes,
  mode: 'hash',
})

//登录拦截
router.beforeEach((to, from, next) => {
  next();
});

export default router;
