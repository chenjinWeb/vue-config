import Vue from "vue";
import Vuex from "vuex"

import mutations from "./mutations"
import index from "./modules/index-modules"
import {ScrollBar} from "../scroll-bar";
import { formatDate } from "../utils"

Vue.use(Vuex);

let date = formatDate(new Date(),"yyyy-MM-dd");

const state={
  timedur:{
    times:Date.format(new Date(),"yyyy-MM-dd"),
    timee:Date.format(new Date(),"yyyy-MM-dd"),
  },
  date : date,
  companySaleLists:[],
  companySaleNums:[],
  deviceSaleLists:[],
  deviceSaleNums:[],
  productSaleLists:[],
  productSaleNums:[],
  foodSaleLists:[],
  foodSaleNums:[],
  saleSaleLists:[],
  saleSaleNums:[],
  ScrollBar: new ScrollBar(),
};

const getters = {

};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  modules:{
    $index:index
  }
});

export default store

